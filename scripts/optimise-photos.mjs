import { createRequire } from 'node:module';
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projectPhotos } from '../src/data/projects.js';
import { cleaningPhotos } from '../src/data/cleaningExperience.js';
import { LOGO } from '../src/data/site.js';

// Run with an installed Sharp module, or pass its absolute path as the first argument.
// Originals remain untouched: these exports only resize and encode the same pixels.
const require = createRequire(import.meta.url);
const sharp = require(process.argv[2] || 'sharp');
const root = fileURLToPath(new URL('../', import.meta.url));
const directory = path.join(root, 'public/images');
const files = await readdir(directory);
const sources = [...new Set([...Object.values(projectPhotos), ...Object.values(cleaningPhotos)].map(photo => photo.src)), LOGO].sort();
const manifest = {};
await mkdir(path.join(directory, 'responsive'), { recursive: true });

for (const src of sources) {
  const input = path.join(root, 'public', src);
  const metadata = await sharp(input).metadata();
  const originalBytes = (await stat(input)).size;
  const basename = path.basename(src, path.extname(src));
  const logo = src === LOGO;
  const widths = [...new Set([...(logo ? [128, 256, 384] : [320, 480, 640, 800, 1200]), metadata.width])].filter(width => width <= metadata.width).sort((a, b) => a - b);
  const webp = [];
  for (const width of widths) {
    const output = '/images/responsive/' + basename + '-' + width + '.webp';
    let quality = 82;
    let info;
    do {
      info = await sharp(input).resize({ width, withoutEnlargement: true }).webp(logo ? { lossless: true } : { quality, effort: 5 }).toFile(path.join(root, 'public', output));
      quality -= 4;
    } while (!logo && info.size >= originalBytes && quality >= 66);
    webp.push({ src: output, width: info.width, height: info.height, bytes: info.size });
  }
  const fallback = [];
  const suffix = new RegExp('^' + basename + '-\\d+\\' + path.extname(src) + '$');
  for (const file of [...files.filter(file => suffix.test(file)), path.basename(src)]) {
    const dimensions = await sharp(path.join(directory, file)).metadata();
    fallback.push({ src: '/images/' + file, width: dimensions.width, height: dimensions.height });
  }
  fallback.sort((a, b) => a.width - b.width);
  manifest[src] = { width: metadata.width, height: metadata.height, fallback, webp };
  console.log(basename + ': ' + webp.map(image => image.width + 'w/' + Math.round(image.bytes / 1024) + 'KB').join(', '));
}

await writeFile(path.join(root, 'src/data/responsivePhotos.json'), JSON.stringify(manifest, null, 2) + '\n');
