import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectComparison from '@/components/ProjectComparison.jsx';
import ProjectLightbox from '@/components/ProjectLightbox.jsx';
import { comparisonOrder, projectComparisons } from '@/data/projects.js';
import { trackEnquiry } from '@/lib/quote.js';

export default function ProjectCarousel({ comparisons = comparisonOrder, onOpen, label = 'Cleaning before-and-after projects' }) {
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selected, setSelected] = useState(0);
  const [photo, setPhoto] = useState(null);
  const photoTrigger = useRef(null);
  const reducedMotion = useRef(false);
  const id = useId();
  const ready = Boolean(api);
  const syncSelection = useCallback(carousel => setSelected(carousel.selectedScrollSnap()), []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => { reducedMotion.current = preference.matches; };
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!api) return;
    syncSelection(api);
    api.on('select', syncSelection);
    api.on('reInit', syncSelection);
    return () => { api.off('select', syncSelection); api.off('reInit', syncSelection); };
  }, [api, syncSelection]);

  function goTo(index) {
    const next = (index + comparisons.length) % comparisons.length;
    api?.scrollTo(next, reducedMotion.current);
    trackEnquiry('project_comparison_view', projectComparisons[comparisons[next]].service);
  }
  function openPhoto(key, trigger) {
    if (onOpen) return onOpen(key, trigger);
    photoTrigger.current = trigger;
    setPhoto(key);
  }

  return <>
    <section className="min-w-0 rounded-lg border border-primary/20 border-t-4 border-t-brand-lime bg-white p-3 sm:p-5" role="region" aria-roledescription="carousel" aria-label={label} aria-describedby={id + '-help'} tabIndex={0} onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        goTo(selected + (event.key === 'ArrowRight' ? 1 : -1));
      }
    }}>
      <p id={id + '-help'} className="text-xs sm:text-sm text-slate-600 mb-4">Before and after, side by side. Swipe or use the arrows. Select a photo to enlarge it.</p>
      <div id={id} ref={viewportRef} className="project-carousel-viewport overflow-hidden">
        <div className="project-carousel-track flex touch-pan-y touch-pinch-zoom">
          {comparisons.map((comparison, index) => <div key={comparison} className="project-carousel-slide min-w-0 flex-[0_0_100%] pr-1" role="group" aria-roledescription="slide" aria-label={(index + 1) + ' of ' + comparisons.length + ': ' + projectComparisons[comparison].title} aria-hidden={ready ? index !== selected : undefined} inert={ready && index !== selected ? '' : undefined}>
            <h3 className="text-lg sm:text-xl mb-4">{projectComparisons[comparison].title}</h3>
            <ProjectComparison comparison={comparison} onOpen={openPhoto} />
          </div>)}
        </div>
      </div>
      <div className="project-carousel-controls border-t border-slate-100 pt-4 mt-4 flex flex-wrap justify-between items-center gap-3">
        <button type="button" onClick={() => goTo(selected - 1)} disabled={!ready} aria-label="Previous comparison" aria-controls={id} className="inline-flex items-center justify-center gap-1 min-h-11 min-w-11 px-3 rounded-md border border-primary/30 text-primary hover:bg-brand-mist disabled:opacity-40"><ChevronLeft className="w-5 h-5" /><span className="hidden sm:inline text-sm font-semibold">Previous</span></button>
        <div className="text-center"><p className="text-xs text-slate-600 mx-auto" aria-live="polite" aria-atomic="true">Comparison {selected + 1} of {comparisons.length}</p><div role="group" aria-label="Choose a comparison" className="flex justify-center">
          {comparisons.map((comparison, index) => <button key={comparison} type="button" aria-label={'Show ' + projectComparisons[comparison].title} aria-pressed={index === selected} aria-controls={id} disabled={!ready} onClick={() => goTo(index)} className="flex items-center justify-center min-w-8 min-h-9 sm:min-w-9"><span aria-hidden="true" className={'block rounded-full border border-primary transition-colors ' + (index === selected ? 'w-5 h-2 bg-primary' : 'w-2 h-2 bg-white')} /></button>)}
        </div></div>
        <button type="button" onClick={() => goTo(selected + 1)} disabled={!ready} aria-label="Next comparison" aria-controls={id} className="inline-flex items-center justify-center gap-1 min-h-11 min-w-11 px-3 rounded-md bg-primary text-primary-foreground hover:bg-brand-ink disabled:opacity-40"><span className="hidden sm:inline text-sm font-semibold">Next</span><ChevronRight className="w-5 h-5" /></button>
      </div>
      <noscript><style>{'.project-carousel-viewport{overflow:visible}.project-carousel-track{display:block}.project-carousel-slide{margin-bottom:2rem}.project-carousel-controls{display:none}'}</style></noscript>
    </section>
    {!onOpen && <ProjectLightbox selected={photo} onSelect={setPhoto} onClose={() => setPhoto(null)} returnFocus={photoTrigger} />}
  </>;
}
