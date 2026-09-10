import { createHash } from 'node:crypto';
import { CONTACT_EMAIL, SITE_URL } from '../src/data/site.js';
import { quoteEmail } from '../src/lib/quote.js';
import { validateQuote } from '../src/lib/quoteValidation.js';

// Per-instance backstop; configure a persistent /api/quote firewall limit on Vercel too.
export function createRateLimiter(now = Date.now) {
  const attempts = new Map();
  return key => {
    const time = now();
    for (const [id, item] of attempts) if (item.expires <= time) attempts.delete(id);
    const current = attempts.get(key) || { count: 0, expires: time + 600000 };
    if (current.count >= 5 || (!attempts.has(key) && attempts.size >= 5000)) return false;
    attempts.set(key, { ...current, count: current.count + 1 });
    return true;
  };
}
const limit = createRateLimiter();
const reply = (status, body, headers = {}) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...headers } });

export async function handleQuote(request, { env = process.env, fetchImpl = fetch, rateLimit = limit } = {}) {
  const enabled = env.QUOTE_FORM_ENABLED === 'true' && Boolean(env.RESEND_API_KEY?.trim()) && Boolean(env.QUOTE_FROM_EMAIL?.trim());
  if (request.method === 'GET') return reply(200, { directSend: enabled });
  if (request.method !== 'POST') return reply(405, { error: 'Method not allowed.' }, { Allow: 'GET, POST' });
  const origins = [SITE_URL, 'https://mistercleanb2b.com', ...(env.VERCEL_URL ? ['https://' + env.VERCEL_URL] : [])];
  if (!origins.includes(request.headers.get('origin'))) return reply(403, { error: 'Please send your enquiry from the MisterClean website.' });
  if (!enabled) return reply(503, { error: 'Please use the email or phone contact option.' });
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return reply(415, { error: 'Please use the quote form.' });
  if (Number(request.headers.get('content-length')) > 16000) return reply(413, { error: 'Please shorten your enquiry.' });
  const visitor = createHash('sha256').update(request.headers.get('x-vercel-forwarded-for') || request.headers.get('x-forwarded-for') || 'unknown').digest('hex');
  if (!rateLimit(visitor)) return reply(429, { error: 'Please wait a few minutes before trying again, or call us.' }, { 'Retry-After': '600' });
  let input;
  try {
    const body = await request.text();
    if (body.length > 16000) return reply(413, { error: 'Please shorten your enquiry.' });
    input = JSON.parse(body);
  } catch { return reply(400, { error: 'Please check your enquiry and try again.' }); }
  if (input?.website) return reply(400, { error: 'Please use the phone or email contact option.' });
  if (!/^[a-zA-Z0-9-]{16,80}$/.test(input?.submissionId || '')) return reply(400, { error: 'Please reload the form before sending.' });
  const result = validateQuote(input);
  if (result.error) return reply(400, { error: result.error, field: result.field });
  const email = quoteEmail(result.values);
  const idempotencyKey = 'quote-' + createHash('sha256').update(input.submissionId + JSON.stringify(result.values)).digest('hex');
  try {
    const response = await fetchImpl('https://api.resend.com/emails', {
      method: 'POST', signal: AbortSignal.timeout(12000),
      headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json', 'Idempotency-Key': idempotencyKey },
      body: JSON.stringify({ from: env.QUOTE_FROM_EMAIL, to: [CONTACT_EMAIL], ...(result.values.email ? { reply_to: result.values.email } : {}), subject: email.subject, text: email.body })
    });
    const data = await response.json();
    if (!response.ok || typeof data.id !== 'string' || !data.id) return reply(502, { error: 'We could not confirm submission. Your details are still here. Try again or use the email option below.' });
    return reply(202, { accepted: true });
  } catch {
    return reply(502, { error: 'We could not confirm submission. Your details are still here. Try again or use the email option below.' });
  }
}
