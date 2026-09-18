import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { projectPhotos, projectGallery, projectComparisons } from '../src/data/projects.js';
import { blogPosts } from '../src/data/blogPosts.js';
import { relatedArticles } from '../src/lib/blog.js';
import { SITE_URL } from '../src/data/site.js';

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;' })[character]);

test('the projects page offers at least twenty distinct, labelled photographs with optimised mobile copies', async () => {
  const html = await readFile('dist/projects.html', 'utf8');
  const images = [...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(match => match[1]);
  const hashes = new Set();
  assert.ok(projectGallery.length >= 20, 'retain the supplied project photographs while allowing new additions');
  assert.equal(new Set(projectGallery.map(photo => photo.key)).size, projectGallery.length);
  assert.equal([...html.matchAll(/aria-label="Enlarge photo:/g)].length, projectGallery.length, 'every project image has an enlargement control');
  for (const item of projectGallery) {
    const photo = projectPhotos[item.key];
    assert.equal(images.filter(src => src === photo.src).length, 1, photo.src + ': shown once, including case studies');
    assert.ok(item.stage && item.caption && photo.alt, 'original photos have context');
    for (const path of [photo.src, photo.src.replace('.jpg', '-' + photo.small + '.jpg')]) {
      const bytes = await readFile('dist' + path);
      assert.equal(bytes.readUInt16BE(0), 0xffd8, path + ': valid JPEG');
      assert.ok(bytes.length < 300000, path + ': sized for the web');
      assert.ok(!bytes.includes(Buffer.from('Exif\0\0')), path + ': no embedded camera or location metadata');
    }
    const hash = createHash('sha256').update(await readFile('dist' + photo.src)).digest('hex');
    assert.ok(!hashes.has(hash), photo.src + ': not a renamed duplicate');
    hashes.add(hash);
  }
});

test('before-and-after comparisons retain the matched originals and explain differences in framing', async () => {
  const html = await readFile('dist/projects.html', 'utf8');
  const pairs = {
    kitchen: ['kitchenBefore', 'kitchenAfter'],
    washroom: ['washroomBefore', 'washroomAfter'],
    cubicle: ['cubicleBefore', 'cubicleAfter'],
    amenities: ['amenitiesBefore', 'amenitiesAfter']
  };
  for (const [key, [before, after]] of Object.entries(pairs)) {
    const comparison = projectComparisons[key];
    assert.deepEqual([comparison.before, comparison.after], [before, after], key + ': same area in both photographs');
    const start = html.indexOf('aria-label="' + escapeHtml(comparison.label) + '"');
    assert.ok(start >= 0, key + ': labelled comparison controls');
    const end = html.indexOf(escapeHtml(comparison.note), start);
    assert.ok(end > start, key + ': context is visible without JavaScript');
    const content = html.slice(start, end);
    for (const photo of [before, after]) assert.ok(content.includes('src="' + projectPhotos[photo].src + '"'), key + ': the correct photograph is rendered inside this comparison');
    assert.match(content, /aria-pressed="true"[^>]*>Side by side<\/button>/, key + ': both originals are shown initially');
  }
  assert.match(projectComparisons.amenities.note, /closer view from a different angle/i);
  assert.match(projectComparisons.amenities.note, /toilet is outside the after photo/i, 'the cropped after photo does not imply a result outside its frame');
});

test('blog articles expose matching content, author, dates and canonical structured data', async () => {
  const blog = await readFile('dist/blog.html', 'utf8');
  const home = await readFile('dist/index.html', 'utf8');
  assert.ok(blogPosts.length >= 8, 'retain the existing articles while allowing new publications');
  assert.equal(new Set(blogPosts.map(post => post.slug)).size, blogPosts.length);
  for (const post of blogPosts.slice(0, 3)) {
    assert.ok(home.includes('href="/blog/' + post.slug + '"'), 'the latest articles are discoverable from home');
  }
  for (const post of blogPosts) {
    const path = '/blog/' + post.slug;
    assert.ok(blog.includes('href="' + path + '"'), 'blog links to ' + path);
    const html = await readFile('dist' + path + '.html', 'utf8');
    const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const articles = schemas.filter(schema => schema['@type'] === 'BlogPosting');
    assert.equal(articles.length, 1);
    const article = articles[0];
    assert.equal(article.url, SITE_URL + path);
    assert.equal(article.mainEntityOfPage['@id'], article.url);
    assert.equal(article.headline, post.title);
    assert.equal(article.datePublished, post.date);
    assert.equal(article.dateModified, post.modified, 'never invent an update date');
    assert.equal(article.image, new URL(post.image, SITE_URL).href);
    assert.equal(article.author.url, SITE_URL + '/about');
    assert.ok(html.includes('<time dateTime="' + post.date + '">'), 'visible publication date');
    assert.ok(html.includes('href="/about"'), 'reader can identify the author');
    const related = relatedArticles(post);
    assert.equal(new Set(related.map(item => item.slug)).size, 3);
    assert.ok(related.every(item => item.slug !== post.slug), 'related links do not point back to the current article');
    if (post.imageCaption) assert.ok(html.includes(escapeHtml(post.imageCaption)), 'original image context is visible');
    for (const [index, section] of post.sections.entries()) {
      assert.ok(html.includes('id="section-' + (index + 1) + '"'), 'table of contents has a destination');
      for (const bullet of section.bullets || []) assert.ok(html.includes(escapeHtml(bullet)));
      for (const link of section.links || []) assert.ok(html.includes('href="' + escapeHtml(link.path) + '"'));
    }
  }
});
