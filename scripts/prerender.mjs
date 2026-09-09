import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { render } from '../.prerender/entry-server.js';
import { publicPaths, SITE_URL } from '../src/data/site.js';
const root = path.resolve('dist');
const template = await readFile(path.join(root, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) throw new Error('Prerender markers are missing.');
for (const route of [...publicPaths, '/404']) {
  const { html, head } = render(route);
  const destination = path.join(root, route === '/' ? 'index.html' : route.slice(1) + '.html');
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => html));
}
const urls = publicPaths.map(route => '  <url><loc>' + SITE_URL + route + '</loc></url>').join('\n');
await writeFile(path.join(root, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '\n</urlset>\n');
console.log('Pre-rendered ' + publicPaths.length + ' public pages, a 404 page and sitemap.xml.');
