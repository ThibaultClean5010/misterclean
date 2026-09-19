import React from 'react';
import { cleaningPhotos } from '@/data/cleaningExperience.js';
import { responsivePhoto } from '@/lib/responsivePhotos.js';

export default function CleaningPhoto({ photo = 'home', priority = false, className = '', sizes = '100vw' }) {
  const asset = cleaningPhotos[photo];
  const responsive = responsivePhoto(asset.src);
  return <picture className="contents"><source type="image/webp" srcSet={responsive.webpSrcSet} sizes={sizes} /><img src={asset.src} srcSet={responsive.srcSet} sizes={sizes}
    alt={asset.alt} width={responsive.width || asset.width || 1536} height={responsive.height || asset.height || 1024} loading={priority ? 'eager' : 'lazy'} decoding="async"
    fetchpriority={priority ? 'high' : 'auto'} className={className} style={{ objectPosition: asset.position }} /></picture>;
}
