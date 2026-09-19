import React from 'react';
import ProjectPhoto from '@/components/ProjectPhoto.jsx';
import { projectComparisons } from '@/data/projects.js';

export default function ProjectComparison({ onOpen, comparison = 'kitchen', photoSizes = '(min-width: 1280px) 575px, (min-width: 1024px) calc((100vw - 130px) / 2), (min-width: 640px) calc((100vw - 114px) / 2), calc((100vw - 74px) / 2)' }) {
  const project = projectComparisons[comparison];
  const photoClass = 'w-full aspect-[3/4] sm:aspect-[4/3] object-contain bg-slate-50';
  return <div role="group" aria-label={project.label}>
    <div className="grid grid-cols-2 gap-2 sm:gap-4">
      <figure className="min-w-0 overflow-hidden rounded-md border border-slate-200">
        <div className="bg-brand-ink text-white px-3 py-2 text-sm font-bold">Before</div>
        <ProjectPhoto photo={project.before} onOpen={onOpen} className={photoClass} sizes={photoSizes} />
        <figcaption className="p-3 text-xs sm:text-sm text-slate-600">{project.beforeCaption}</figcaption>
      </figure>
      <figure className="min-w-0 overflow-hidden rounded-md border border-slate-200">
        <div className="bg-brand-lime text-brand-ink px-3 py-2 text-sm font-bold">After</div>
        <ProjectPhoto photo={project.after} onOpen={onOpen} className={photoClass} sizes={photoSizes} />
        <figcaption className="p-3 text-xs sm:text-sm text-slate-600"><span className="sr-only">{project.afterLabel}. </span>{project.afterCaption}</figcaption>
      </figure>
    </div>
    <p className="mt-4 text-xs text-slate-500">{project.note}</p>
  </div>;
}
