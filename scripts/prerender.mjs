import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { render } from '../.prerender/entry-server.js';
import { publicPaths, SITE_URL } from '../src/data/site.js';
import { pageModuleForPath } from '../src/lib/pageRoutes.js';
const root = path.resolve('dist');
const template = await readFile(path.join(root, 'index.html'), 'utf8');
const manifest = JSON.parse(await readFile(path.join(root, '.vite/manifest.json'), 'utf8'));
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) throw new Error('Prerender markers are missing.');

function initialRouteLinks(route) {
  const module = pageModuleForPath(route);
  if (!module) return '';
  const seen = new Set();
  const scripts = new Set();
  const styles = new Set();
  const existingAssets = new Set([...template.matchAll(/(?:src|href)="([^"]+)"/g)].map(match => match[1]));
  function visit(key) {
    if (seen.has(key)) return;
    seen.add(key);
    const chunk = manifest[key];
    if (!chunk) throw new Error('Missing build manifest entry: ' + key);
    scripts.add('/' + chunk.file);
    // Follow static imports only. Other route chunks stay on demand.
    for (const dependency of chunk.imports || []) visit(dependency);
    for (const css of chunk.css || []) styles.add('/' + css);
  }
  visit('src/' + module.slice(2));
  return [
    ...[...styles].filter(href => !existingAssets.has(href)).map(href => '<link rel="stylesheet" href="' + href + '" />'),
    ...[...scripts].filter(href => !existingAssets.has(href)).map(href => '<link rel="modulepreload" crossorigin href="' + href + '" />'),
  ].join('\n');
}

for (const route of [...publicPaths, '/404']) {
  const { html, head } = render(route);
  const destination = path.join(root, route === '/' ? 'index.html' : route.slice(1) + '.html');
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, template.replace('<!--app-head-->', () => head + '\n' + initialRouteLinks(route)).replace('<!--app-html-->', () => html));
}
const urls = publicPaths.map(route => '  <url><loc>' + SITE_URL + route + '</loc></url>').join('\n');
await writeFile(path.join(root, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '\n</urlset>\n');
console.log('Pre-rendered ' + publicPaths.length + ' public pages, a 404 page and sitemap.xml.');
