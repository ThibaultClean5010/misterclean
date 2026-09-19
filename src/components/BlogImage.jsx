import React from 'react';
import { projectPhotos } from '@/data/projects.js';
import { responsivePhoto } from '@/lib/responsivePhotos.js';

export default function BlogImage({ post, className = '', sizes = '100vw', priority = false }) {
  const asset = Object.values(projectPhotos).find(item => item.src === post.image);
  const responsive = responsivePhoto(post.image);
  const picture = <img src={post.image} srcSet={responsive.srcSet} sizes={responsive.srcSet ? sizes : undefined} alt={post.imageAlt} width={responsive.width || asset?.width || 1200} height={responsive.height || asset?.height || 800} loading={priority ? 'eager' : 'lazy'} decoding="async" className={className} />;
  return responsive.webpSrcSet ? <picture className="contents"><source type="image/webp" srcSet={responsive.webpSrcSet} sizes={sizes} />{picture}</picture> : picture;
}
