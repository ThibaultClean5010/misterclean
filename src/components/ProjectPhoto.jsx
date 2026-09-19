import React from 'react';
import { Expand } from 'lucide-react';
import { projectPhotos } from '@/data/projects.js';
import { responsivePhoto } from '@/lib/responsivePhotos.js';

export default function ProjectPhoto({ photo, className = '', sizes = '(min-width: 1024px) 50vw, 100vw', onOpen, priority = false, original = false }) {
  const asset = projectPhotos[photo];
  const responsive = responsivePhoto(asset.src);
  const fallback = <img src={asset.src} srcSet={original ? undefined : responsive.srcSet} sizes={original ? undefined : sizes} width={responsive.width || asset.width} height={responsive.height || asset.height} alt={asset.alt} loading={priority ? 'eager' : 'lazy'} decoding="async" className={className} />;
  const picture = original ? fallback : <picture className="contents"><source type="image/webp" srcSet={responsive.webpSrcSet} sizes={sizes} />{fallback}</picture>;
  if (!onOpen) return picture;
  return <button type="button" className="relative block w-full text-left cursor-zoom-in focus-visible:outline-offset-[-3px]" aria-label={'Enlarge photo: ' + asset.alt} onClick={event => onOpen(photo, event.currentTarget)}>
    {picture}<span aria-hidden="true" className="absolute bottom-3 right-3 bg-white/95 text-slate-700 rounded px-2 py-1.5 text-xs inline-flex items-center gap-1.5"><Expand className="w-3 h-3" />View photo</span>
  </button>;
}
