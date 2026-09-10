import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { publicPaths, SITE_URL, CONTACT_EMAIL, serviceOptions } from '../src/data/site.js';
import { quoteEmail } from '../src/lib/quote.js';
import { render } from '../.prerender/entry-server.js';
import { cleaningOffers, cleaningPlans, cleaningQuotePath, cleaningPhotos, servicePhotoKeys } from '../src/data/cleaningExperience.js';

const fileFor = route => 'dist/' + (route === '/' ? 'index' : route.slice(1)) + '.html';
const matches = (html, pattern) => [...html.matchAll(pattern)];

test('every public page has visible content, unique SEO metadata and valid links', async () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const route of publicPaths) {
    const html = await readFile(fileFor(route), 'utf8');
    const title = matches(html, /<title\b[^>]*>([^<]+)<\/title>/g);
    const description = matches(html, /<meta\b[^>]*name="description"[^>]*content="([^"]+)"/g);
    const canonical = matches(html, /<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g);
    assert.equal(title.length, 1, route + ': one title');
    assert.equal(description.length, 1, route + ': one description');
    assert.equal(canonical.length, 1, route + ': one canonical');
    assert.equal(canonical[0][1], SITE_URL + route, route + ': production canonical');
    assert.equal(matches(html, /<h1\b/g).length, 1, route + ': one main heading');
    assert.ok(!html.includes('<!--app-html-->'), route + ': rendered content');
    assert.ok(!html.includes('style="opacity:0'), route + ': visible before JavaScript');
    assert.ok(!html.includes('misterclean.com.au'), route + ': no old domain');
    assert.ok(!titles.has(title[0][1]), route + ': distinct title');
    assert.ok(!descriptions.has(description[0][1]), route + ': distinct description');
    titles.add(title[0][1]);
    descriptions.add(description[0][1]);
    for (const schema of matches(html, /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      assert.equal(JSON.parse(schema[1])['@context'], 'https://schema.org', route + ': valid structured data');
    }
    for (const link of matches(html, /<a\b[^>]*href="(\/[^"]*)"/g)) {
      const destination = link[1].split(/[?#]/)[0];
      assert.ok(publicPaths.includes(destination), route + ': valid internal link ' + destination);
    }
    for (const asset of matches(html, /<(?:img|script)\b[^>]*src="(\/[^"]*)"/g)) await access('dist' + asset[1].split('?')[0]);
  }
});

test('service choices carry frequency and relevant access into the quote email', () => {
  for (const service of cleaningOffers) {
    for (const plan of cleaningPlans) {
      const url = new URL(cleaningQuotePath(service.value, plan.value, 'hard-to-reach'), SITE_URL);
      assert.equal(url.pathname, '/contact');
      assert.equal(url.searchParams.get('service'), service.value);
      assert.equal(url.searchParams.get('plan'), plan.value);
      assert.equal(url.searchParams.get('access'), service.value === 'window-cleaning' ? 'hard-to-reach' : null);
      const email = quoteEmail({ ...Object.fromEntries(url.searchParams), name: 'Test', business: 'Example', email: 'test@example.com', suburb: 'Adelaide' });
      assert.ok(email.body.includes('Frequency: ' + plan.label));
      assert.equal(email.body.includes('Window access: Hard-to-reach windows'), service.value === 'window-cleaning');
    }
  }
  const invalid = new URL(cleaningQuotePath('window-cleaning', 'unrecognised', 'unrecognised'), SITE_URL);
  assert.ok(!invalid.searchParams.has('plan'));
  assert.ok(!invalid.searchParams.has('access'));
});

test('each presentation photo has full size and mobile assets in the published output', async () => {
  for (const photo of Object.values(cleaningPhotos)) {
    for (const path of [photo.src, photo.src.replace('.jpg', '-800.jpg')]) {
      const bytes = await readFile('dist' + path);
      assert.equal(bytes.readUInt16BE(0), 0xffd8, path + ': JPEG file');
      assert.ok(bytes.length < 300000, path + ': optimised image size');
    }
  }
});

test('each service uses its own relevant image and the about page uses an original project photo', async () => {
  const sources = new Set(Object.values(cleaningPhotos).map(photo => photo.src));
  const imagesOn = async route => matches(await readFile(fileFor(route), 'utf8'), /<img\b[^>]*src="([^"]+)"/g).map(match => match[1]).filter(src => sources.has(src));
  const used = new Set();
  const hashes = new Set();
  for (const service of serviceOptions) {
    const photo = cleaningPhotos[servicePhotoKeys[service.value]];
    assert.ok(photo, service.value + ': assigned photo');
    assert.deepEqual(await imagesOn(service.path), [photo.src], service.value + ': rendered service image');
    assert.ok(!used.has(photo.src), service.value + ': no reuse between services');
    used.add(photo.src);
    const hash = createHash('sha256').update(await readFile('dist' + photo.src)).digest('hex');
    assert.ok(!hashes.has(hash), service.value + ': not a renamed duplicate');
    hashes.add(hash);
  }
  assert.deepEqual(await imagesOn('/'), [cleaningPhotos.commercial.src]);
  assert.deepEqual(await imagesOn('/about'), [cleaningPhotos.about.src]);
  assert.ok(!used.has(cleaningPhotos.home.src));
  assert.ok(!used.has(cleaningPhotos.about.src));
  assert.notEqual(cleaningPhotos.home.src, cleaningPhotos.about.src);
  const catalogue = await imagesOn('/services');
  assert.equal(new Set(catalogue).size, cleaningOffers.length, 'service catalogue has no repeated images');
  for (const offer of cleaningOffers) assert.equal(offer.photo, servicePhotoKeys[offer.value], offer.value + ': consistent image in selector and detail page');
});

test('sitemap and robots expose only canonical public pages', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  const urls = matches(sitemap, /<loc>([^<]+)<\/loc>/g).map(match => match[1]);
  assert.deepEqual(urls.sort(), publicPaths.map(route => SITE_URL + route).sort());
  assert.ok((await readFile('dist/robots.txt', 'utf8')).includes('Sitemap: ' + SITE_URL + '/sitemap.xml'));
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  assert.equal(config.cleanUrls, true);
  assert.ok(!config.rewrites?.some(rule => rule.destination === '/index.html'), 'unknown URLs must not become homepage soft 404s');
  for (const rule of config.redirects) {
    assert.equal(rule.permanent, true);
    assert.ok(publicPaths.includes(rule.destination));
  }
});

test('missing routes and missing blog articles show an unindexed error page', async () => {
  for (const route of ['/404', '/not-a-real-page', '/blog/not-a-real-article']) {
    const { html, head } = render(route);
    assert.match(html, /Page not found/i);
    assert.match(head, /noindex, follow/);
    assert.ok(!head.includes('rel="canonical"'));
  }
  assert.match(await readFile('dist/404.html', 'utf8'), /noindex, follow/);
});

test('quote emails preserve Unicode and special characters without adding URL parameters', () => {
  for (const service of serviceOptions) {
    const email = quoteEmail({ service: service.value, name: ' René & Co ', business: 'Shop & Sons\r\nAdelaide', email: 'rene+quotes@example.com', phone: '', suburb: ' North Adelaide ', details: 'Glass & frames? 50%\nCafé access = rear #2' });
    const url = new URL(email.href);
    assert.equal(url.protocol, 'mailto:');
    assert.equal(url.pathname, CONTACT_EMAIL);
    assert.deepEqual([...url.searchParams.keys()], ['subject', 'body']);
    assert.equal(url.searchParams.get('subject'), service.label + ' quote - Shop & Sons Adelaide');
    assert.equal(url.searchParams.get('body'), email.body);
    assert.ok(email.body.includes('Name: René & Co\n'));
    assert.ok(email.body.includes('Suburb: North Adelaide\n'));
    assert.ok(email.body.includes('Glass & frames? 50%\nCafé access = rear #2'));
    assert.ok(email.body.includes('Phone: Not provided'));
  }
});

test('real project photos remain visible before JavaScript and are light without EXIF GPS', async () => {
  const projects = await readFile(fileFor('/projects'), 'utf8');
  const home = await readFile(fileFor('/'), 'utf8');
  for (const label of ['Before', 'After floor cleaning', 'Fit-out still in progress']) assert.ok(projects.includes(label));
  for (const name of ['cafe-fitout-kitchen-before', 'cafe-fitout-kitchen-after', 'entrance-glass-before-cleaning']) {
    for (const suffix of ['', '-600']) {
      const image = await readFile('dist/images/' + name + suffix + '.jpg');
      assert.ok(image.length < 300000);
      assert.ok(!image.includes(Buffer.from('Exif\0\0')), 'export does not retain camera/GPS metadata');
    }
  }
  assert.ok(projects.includes('cafe-fitout-kitchen-before.jpg'));
  assert.ok(projects.includes('cafe-fitout-kitchen-after.jpg'));
  assert.ok(home.includes('id="quick-quote"'));
  assert.ok(home.indexOf('id="quick-quote"') < home.indexOf('cafe-fitout-kitchen-before.jpg'), 'quote appears before project photography');
  for (const route of ['/', '/contact']) {
    const html = await readFile(fileFor(route), 'utf8');
    assert.match(html, /Continue by email/);
    assert.match(html, /<noscript>/);
    assert.ok(!/<input[^>]*name="business"[^>]*required/.test(html));
    assert.equal(matches(html, /<form\b/g).length, 1, route + ': one quote form');
  }
});
