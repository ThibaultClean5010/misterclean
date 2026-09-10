import React from 'react';
import { projectPhotos } from '@/data/projects.js';

export default function BlogImage({ post, className = '', sizes = '100vw', priority = false }) {
  const asset = Object.values(projectPhotos).find(item => item.src === post.image);
  const srcSet = asset ? asset.src.replace('.jpg', '-' + asset.small + '.jpg') + ' ' + asset.small + 'w, ' + asset.src + ' ' + asset.width + 'w' : undefined;
  return <img src={post.image} srcSet={srcSet} sizes={srcSet ? sizes : undefined} alt={post.imageAlt} width={asset?.width || 1200} height={asset?.height || 800} loading={priority ? 'eager' : 'lazy'} decoding="async" className={className} />;
}
