import test from 'node:test';
import assert from 'node:assert/strict';
import { handleQuote, createRateLimiter } from '../server/quote-handler.js';
import quoteApi from '../api/quote.js';
import { validateQuote } from '../src/lib/quoteValidation.js';
import { CONTACT_EMAIL, SITE_URL } from '../src/data/site.js';

const env = { QUOTE_FORM_ENABLED: 'true', RESEND_API_KEY: 'test-key-not-a-secret', QUOTE_FROM_EMAIL: 'MisterClean <quotes@example.com>' };
const valid = { name: 'Example Person', suburb: 'Adelaide', email: 'person@example.com', business: '', service: 'window-cleaning', plan: 'regular', access: 'hard-to-reach', submissionId: 'test-enquiry-123456789' };
const request = (input = valid, options = {}) => new Request(SITE_URL + '/api/quote', { method: 'POST', headers: { origin: SITE_URL, 'content-type': 'application/json', ...options.headers }, body: typeof input === 'string' ? input : JSON.stringify(input) });
const stub = async () => Response.json({ id: 'provider-test-id' });
const run = (req, opts = {}) => handleQuote(req, { env, fetchImpl: stub, rateLimit: () => true, ...opts });

test('shared validation accepts email or phone, with no required company', () => {
  assert.ok(validateQuote(valid).values);
  const result = validateQuote({ ...valid, email: '', phone: '0474 123 456', service: 'commercial' });
  assert.ok(result.values); assert.equal(result.values.access, '');
  for (const [field, value] of [['name', ' '], ['suburb', ''], ['email', 'not-email'], ['phone', 'abc123'], ['service', 'fake-service'], ['plan', 'fake-plan'], ['access', 'fake-access'], ['details', 'x'.repeat(1201)], ['name', 'Name\nInjected'], ['business', {}]]) {
    assert.equal(validateQuote({ ...valid, [field]: value }).field, field);
  }
  assert.ok(validateQuote({ ...valid, email: '', phone: '' }).error);
});

test('the actual API entry exports a callable configuration endpoint', async () => {
  const response = await quoteApi.fetch(new Request(SITE_URL + '/api/quote'));
  assert.equal(response.status, 200);
  assert.equal(typeof (await response.json()).directSend, 'boolean');
});

test('older industry quote forms still reach the grouped regular cleaning service', async () => {
  for (const service of ['office', 'retail', 'restaurant']) {
    const input = { ...valid, service };
    assert.equal(validateQuote(input).values.service, 'commercial');
    let outbound;
    const response = await run(request(input), { fetchImpl: async (_url, options) => { outbound = JSON.parse(options.body); return stub(); } });
    assert.equal(response.status, 202);
    assert.match(outbound.subject, /^Regular Cleaning quote/);
    assert.match(outbound.text, /Frequency: Recurring visits/);
    assert.ok(!outbound.text.includes('Window access:'));
  }
});

test('capability checks reveal only activation state and never credentials', async () => {
  for (const configuration of [{}, { ...env, QUOTE_FORM_ENABLED: 'false' }, { ...env, RESEND_API_KEY: '' }, { ...env, QUOTE_FROM_EMAIL: '' }, env]) {
    const response = await run(new Request(SITE_URL + '/api/quote'), { env: configuration });
    assert.deepEqual(await response.json(), { directSend: configuration === env });
    assert.equal(response.headers.get('cache-control'), 'no-store');
  }
});

test('only provider acceptance produces successful submission, with a fixed recipient', async () => {
  let outbound;
  const response = await run(request({ ...valid, to: 'attacker@example.com', reply_to: 'attacker@example.com' }), { fetchImpl: async (url, options) => { outbound = { url, ...options }; return stub(); } });
  assert.equal(response.status, 202); assert.deepEqual(await response.json(), { accepted: true });
  assert.equal(outbound.url, 'https://api.resend.com/emails');
  const email = JSON.parse(outbound.body);
  assert.deepEqual(email.to, [CONTACT_EMAIL]); assert.equal(email.reply_to, valid.email);
  assert.equal(email.from, env.QUOTE_FROM_EMAIL);
  assert.match(email.text, /Frequency: Recurring visits/);
  assert.match(email.text, /Window access: Hard-to-reach windows/);
});

test('identical retries are deduplicated; edited enquiries have a different key', async () => {
  const keys = [];
  const fetchImpl = async (_url, options) => { keys.push(options.headers['Idempotency-Key']); return stub(); };
  await run(request(), { fetchImpl }); await run(request(), { fetchImpl });
  await run(request({ ...valid, details: 'A different request' }), { fetchImpl });
  assert.equal(keys[0], keys[1]); assert.notEqual(keys[0], keys[2]);
});

test('phone-only enquiries work without an invalid reply-to header', async () => {
  let body;
  const response = await run(request({ ...valid, email: '', phone: '0474 123 456' }), { fetchImpl: async (_url, options) => { body = JSON.parse(options.body); return stub(); } });
  assert.equal(response.status, 202); assert.ok(!Object.hasOwn(body, 'reply_to'));
  assert.match(body.text, /Phone: 0474 123 456/);
});

test('provider failures and uncertain responses never claim success', async () => {
  for (const fetchImpl of [
    async () => Response.json({ message: 'Denied' }, { status: 403 }),
    async () => Response.json({}),
    async () => Response.json({ id: '' }),
    async () => new Response('<html>Error</html>'),
    async () => { throw new Error('timeout'); }
  ]) {
    const response = await run(request(), { fetchImpl });
    assert.equal(response.status, 502); assert.equal((await response.json()).accepted, undefined);
  }
});

test('invalid requests never reach the email provider', async () => {
  let calls = 0;
  const fetchImpl = async () => { calls++; return stub(); };
  const checks = [
    [request(valid, { headers: { origin: 'https://unrelated.example' } }), {}, 403],
    [request(), { env: {} }, 503],
    [new Request(SITE_URL + '/api/quote', { method: 'DELETE' }), {}, 405],
    [request(valid, { headers: { 'content-type': 'text/plain' } }), {}, 415],
    [request('{oops'), {}, 400],
    [request({ ...valid, website: 'spam.example' }), {}, 400],
    [request({ ...valid, submissionId: '' }), {}, 400],
    [request({ ...valid, email: '' }), {}, 400],
    [request({ ...valid, details: 'x'.repeat(17000) }), {}, 413],
    [request(), { rateLimit: () => false }, 429]
  ];
  for (const [req, options, expected] of checks) assert.equal((await run(req, { fetchImpl, ...options })).status, expected);
  assert.equal(calls, 0);
});

test('the local abuse backstop limits bursts and expires entries', () => {
  let time = 0;
  const limiter = createRateLimiter(() => time);
  for (let i = 0; i < 5; i++) assert.equal(limiter('same-visitor'), true);
  assert.equal(limiter('same-visitor'), false); assert.equal(limiter('another-visitor'), true);
  time = 600001;
  assert.equal(limiter('same-visitor'), true);
});
