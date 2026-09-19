import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { publicPaths, serviceOptions, SITE_URL } from '../src/data/site.js';
import { blogPosts } from '../src/data/blogPosts.js';

const fileFor = route => 'dist/' + (route === '/' ? 'index' : route.slice(1)) + '.html';
const pages = new Map(await Promise.all(publicPaths.map(async route => [route, await readFile(fileFor(route), 'utf8')])));
const mainFor = route => {
  const match = pages.get(route).match(/<main\b[^>]*>([\s\S]*?)<\/main>/);
  assert.ok(match, route + ': rendered main content');
  return match[1];
};
const linksIn = (html, route) => [...html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(([, href, label]) => ({
  url: new URL(href.replaceAll('&amp;', '&'), SITE_URL + route),
  label: label.replace(/<[^>]*>/g, '').trim()
}));
const routeFor = url => url.pathname.replace(/\/$/, '') || '/';
const contentLinks = route => linksIn(mainFor(route).replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g, ''), route)
  .filter(link => link.url.origin === SITE_URL);

test('internal links in rendered main content lead to existing pages and section anchors', () => {
  for (const route of publicPaths) {
    for (const { url } of linksIn(mainFor(route), route).filter(link => link.url.origin === SITE_URL)) {
      const destination = routeFor(url);
      assert.ok(pages.has(destination), route + ': existing destination ' + url.pathname);
      if (!url.hash) continue;
      const target = decodeURIComponent(url.hash.slice(1));
      const ids = [...pages.get(destination).matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
      assert.ok(ids.includes(target), route + ': existing section ' + url.pathname + url.hash);
    }
  }
});

test('service guides and articles are discoverable through contextual links outside shared navigation', () => {
  for (const service of serviceOptions) {
    const articles = contentLinks(service.path).filter(link => link.url.pathname.startsWith('/blog/'));
    assert.ok(articles.length >= 1, service.label + ': a relevant guide is linked from the page content');
    assert.ok(articles.every(link => link.label.length > 12 && !/^(click here|read more|learn more)$/i.test(link.label)), service.label + ': descriptive article anchors');
  }
  const visited = new Set(['/']);
  const queue = ['/'];
  while (queue.length) {
    for (const { url } of contentLinks(queue.shift())) {
      const destination = routeFor(url);
      if (!pages.has(destination) || visited.has(destination)) continue;
      visited.add(destination);
      queue.push(destination);
    }
  }
  for (const destination of [...serviceOptions.map(service => service.path), ...blogPosts.map(post => '/blog/' + post.slug)]) {
    assert.ok(visited.has(destination), destination + ': reachable from home through main-content links');
  }
  const aboutLinks = new Set(contentLinks('/about').map(link => routeFor(link.url)));
  for (const service of serviceOptions) assert.ok(aboutLinks.has(service.path), 'about page links to ' + service.label);
  assert.ok(contentLinks('/projects').some(link => link.url.pathname.startsWith('/blog/')), 'project photos connect to practical cleaning guidance');
});
