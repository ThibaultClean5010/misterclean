import React from 'react';
import { projectPhotos } from '@/data/projects.js';

export default function ProjectPhoto({ photo, className = '', sizes = '(min-width: 1024px) 50vw, 100vw' }) {
  const asset = projectPhotos[photo];
  return <img src={asset.src} srcSet={asset.src.replace('.jpg', '-' + asset.small + '.jpg') + ' ' + asset.small + 'w, ' + asset.src + ' ' + asset.width + 'w'} sizes={sizes} width={asset.width} height={asset.height} alt={asset.alt} loading="lazy" decoding="async" className={className} />;
}
