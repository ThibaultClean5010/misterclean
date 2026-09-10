import React, { useId, useState } from 'react';
import ProjectPhoto from '@/components/ProjectPhoto.jsx';
import { trackEnquiry } from '@/lib/quote.js';

export default function ProjectComparison() {
  const id = useId();
  const [view, setView] = useState('both');
  const views = [['both', 'Side by side'], ['before', 'Before'], ['after', 'After floor clean']];
  return <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
    <div className="p-3 flex flex-wrap items-center gap-2 border-b border-slate-100" role="group" aria-label="Compare kitchen floor photographs">
      {views.map(([value, label]) => <button key={value} type="button" aria-pressed={view === value} aria-controls={id} onClick={() => { setView(value); trackEnquiry('project_comparison_view', 'after-builders'); }} className={'rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ' + (view === value ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200')}>{label}</button>)}
    </div>
    <div id={id} className={view === 'both' ? 'grid sm:grid-cols-2' : 'max-w-3xl mx-auto'}>
      <figure hidden={view === 'after'}><ProjectPhoto photo="kitchenBefore" className="w-full h-auto" /><figcaption className="px-4 py-3 text-sm"><strong>Before</strong><span className="block text-slate-600 mt-1">Dust and loose materials on the floor.</span></figcaption></figure>
      <figure hidden={view === 'before'}><ProjectPhoto photo="kitchenAfter" className="w-full h-auto" /><figcaption className="px-4 py-3 text-sm"><strong>After floor cleaning</strong><span className="block text-slate-600 mt-1">Fit-out still in progress; equipment remains wrapped.</span></figcaption></figure>
    </div>
    <p className="px-4 pb-4 text-xs text-slate-500">Original project photographs, taken on different days and from slightly different positions. The comparison shows the floor clean during the fit-out.</p>
  </div>;
}
