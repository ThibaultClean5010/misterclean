import React from 'react';
import { cleaningPhotos } from '@/data/cleaningExperience.js';

export default function CleaningPhoto({ photo = 'home', priority = false, className = '', sizes = '100vw' }) {
  const asset = cleaningPhotos[photo];
  return <img src={asset.src} srcSet={asset.src.replace('.jpg', '-800.jpg') + ' 800w, ' + asset.src + ' ' + (asset.width || 1536) + 'w'} sizes={sizes}
    alt={asset.alt} width={asset.width || 1536} height={asset.height || 1024} loading={priority ? 'eager' : 'lazy'} decoding="async"
    fetchpriority={priority ? 'high' : 'auto'} className={className} style={{ objectPosition: asset.position }} />;
}
