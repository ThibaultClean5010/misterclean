import photos from '../data/responsivePhotos.json';

const srcSet = variants => variants.map(photo => photo.src + ' ' + photo.width + 'w').join(', ');

export function responsivePhoto(src) {
  const photo = photos[src];
  return photo ? { width: photo.width, height: photo.height, srcSet: srcSet(photo.fallback), webpSrcSet: srcSet(photo.webp) } : {};
}
