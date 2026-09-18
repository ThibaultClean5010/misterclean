import React, { useId, useState } from 'react';
import ProjectPhoto from '@/components/ProjectPhoto.jsx';
import { projectComparisons } from '@/data/projects.js';
import { trackEnquiry } from '@/lib/quote.js';

export default function ProjectComparison({ onOpen, comparison = 'kitchen' }) {
  const id = useId();
  const [view, setView] = useState('both');
  const project = projectComparisons[comparison];
  const views = [['both', 'Side by side'], ['before', 'Before'], ['after', project.afterLabel]];
  const photoClass = 'w-full object-contain bg-slate-50 ' + (project.format === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]');
  return <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
    <div className="p-3 flex flex-wrap items-center gap-2 border-b border-slate-100" role="group" aria-label={project.label}>
      {views.map(([value, label]) => <button key={value} type="button" aria-pressed={view === value} aria-controls={id} onClick={() => { setView(value); trackEnquiry('project_comparison_view', project.service); }} className={'rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ' + (view === value ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200')}>{label}</button>)}
    </div>
    <div id={id} className={view === 'both' ? 'grid sm:grid-cols-2' : 'max-w-3xl mx-auto'}>
      <figure hidden={view === 'after'}><ProjectPhoto photo={project.before} onOpen={onOpen} className={photoClass} /><figcaption className="px-4 py-3 text-sm"><strong>Before</strong><span className="block text-slate-600 mt-1">{project.beforeCaption}</span></figcaption></figure>
      <figure hidden={view === 'before'}><ProjectPhoto photo={project.after} onOpen={onOpen} className={photoClass} /><figcaption className="px-4 py-3 text-sm"><strong>{project.afterLabel}</strong><span className="block text-slate-600 mt-1">{project.afterCaption}</span></figcaption></figure>
    </div>
    <p className="px-4 pb-4 text-xs text-slate-500">{project.note}</p>
  </div>;
}
