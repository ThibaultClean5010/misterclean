import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { publicPaths } from '../src/data/site.js';
import { pageRoutes, pageModuleForPath } from '../src/lib/pageRoutes.js';

test('initial page resolution covers public routes and blog slugs without treating unknown paths as pages', () => {
  for (const route of publicPaths) assert.ok(pageModuleForPath(route), route + ': has an initial page module');
  for (const route of pageRoutes.filter(item => !item.path.includes(':'))) {
    assert.equal(pageModuleForPath(route.path + '/'), './pages/' + route.page + '.jsx');
  }
  assert.equal(pageModuleForPath('/blog/a-cleaning-article'), './pages/BlogArticlePage.jsx');
  for (const route of ['/404', '/missing-page', '/blog/nested/path', '/services/office-cleaning']) {
    assert.equal(pageModuleForPath(route), null, route + ': keeps its existing 404 or redirect handling');
  }
});

test('pre-rendered pages preload their own route and static dependencies, not other pages', async () => {
  const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
  const pageFiles = pageRoutes.map(route => manifest['src/pages/' + route.page + '.jsx'].file);
  for (const route of [...publicPaths, '/404']) {
    const html = await readFile('dist/' + (route === '/' ? 'index' : route.slice(1)) + '.html', 'utf8');
    const links = [...html.matchAll(/<link\b[^>]*rel="modulepreload"[^>]*href="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(links).size, links.length, route + ': no duplicate preload requests');
    for (const link of links) await access('dist' + link);
    const module = pageModuleForPath(route);
    const own = module ? manifest['src/' + module.slice(2)] : null;
    if (own) {
      assert.ok(links.includes('/' + own.file), route + ': page module starts loading directly from HTML');
      const visited = new Set();
      function checkDependencies(chunk) {
        for (const key of chunk.imports || []) {
          if (visited.has(key)) continue;
          visited.add(key);
          const dependency = manifest[key];
          assert.ok(links.includes('/' + dependency.file) || html.includes('src="/' + dependency.file + '"'), route + ': static dependency discovered in HTML');
          checkDependencies(dependency);
        }
      }
      checkDependencies(own);
    }
    for (const file of pageFiles) {
      if (file !== own?.file) assert.ok(!links.includes('/' + file), route + ': unrelated page stays on demand');
    }
    assert.match(html, /<h1\b/, route + ': content remains available before hydration');
  }
});
