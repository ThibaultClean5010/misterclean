import React from 'react';
import { Expand } from 'lucide-react';
import { projectPhotos } from '@/data/projects.js';

export default function ProjectPhoto({ photo, className = '', sizes = '(min-width: 1024px) 50vw, 100vw', onOpen, priority = false }) {
  const asset = projectPhotos[photo];
  const picture = <img src={asset.src} srcSet={asset.src.replace('.jpg', '-' + asset.small + '.jpg') + ' ' + asset.small + 'w, ' + asset.src + ' ' + asset.width + 'w'} sizes={sizes} width={asset.width} height={asset.height} alt={asset.alt} loading={priority ? 'eager' : 'lazy'} decoding="async" className={className} />;
  if (!onOpen) return picture;
  return <button type="button" className="relative block w-full text-left cursor-zoom-in" aria-label={'Enlarge photo: ' + asset.alt} onClick={event => onOpen(photo, event.currentTarget)}>
    {picture}<span aria-hidden="true" className="absolute bottom-3 right-3 bg-white/95 text-slate-700 rounded px-2 py-1.5 text-xs inline-flex items-center gap-1.5"><Expand className="w-3 h-3" />View photo</span>
  </button>;
}
