import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { projectPhotos } from '../src/data/projects.js';
import { cleaningPhotos } from '../src/data/cleaningExperience.js';
import { LOGO } from '../src/data/site.js';

function webpDimensions(bytes) {
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
  for (let start = 12; start + 8 <= bytes.length;) {
    const type = bytes.toString('ascii', start, start + 4);
    const size = bytes.readUInt32LE(start + 4);
    const offset = start + 8;
    if (type === 'VP8 ') return { width: bytes.readUInt16LE(offset + 6) & 0x3fff, height: bytes.readUInt16LE(offset + 8) & 0x3fff };
    if (type === 'VP8L') {
      const packed = bytes.readUInt32LE(offset + 1);
      return { width: (packed & 0x3fff) + 1, height: ((packed >>> 14) & 0x3fff) + 1 };
    }
    if (type === 'VP8X') return { width: bytes.readUIntLE(offset + 4, 3) + 1, height: bytes.readUIntLE(offset + 7, 3) + 1 };
    start += 8 + size + (size % 2);
  }
  throw new Error('WebP dimensions not found');
}

test('responsive photo exports have real width descriptors and preserve the full original framing', async () => {
  const photos = JSON.parse(await readFile('src/data/responsivePhotos.json', 'utf8'));
  const sources = new Set([...Object.values(projectPhotos), ...Object.values(cleaningPhotos)].map(photo => photo.src));
  sources.add(LOGO);
  for (const src of sources) {
    const photo = photos[src];
    assert.ok(photo, src + ': available in responsive image data');
    assert.ok(photo.fallback.some(image => image.src === src), src + ': original fallback retained');
    const original = await readFile('public' + src);
    let previousWidth = 0;
    for (const image of photo.webp) {
      const bytes = await readFile('public' + image.src);
      const dimensions = webpDimensions(bytes);
      assert.deepEqual(dimensions, { width: image.width, height: image.height }, image.src + ': descriptor matches the encoded file');
      assert.ok(image.width > previousWidth && image.width <= photo.width, image.src + ': increasing sizes without enlargement');
      assert.ok(Math.abs(image.height - image.width * photo.height / photo.width) <= 1, image.src + ': resized without cropping');
      assert.equal(bytes.length, image.bytes);
      assert.ok(bytes.length < original.length, image.src + ': smaller than the original');
      assert.ok(!bytes.includes(Buffer.from('EXIF')), image.src + ': no private camera metadata');
      previousWidth = image.width;
    }
    assert.equal(previousWidth, photo.width, src + ': full size remains available');
  }
});
