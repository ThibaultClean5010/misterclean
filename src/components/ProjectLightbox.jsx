import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ProjectPhoto from '@/components/ProjectPhoto.jsx';
import { projectGallery } from '@/data/projects.js';

export default function ProjectLightbox({ selected, onSelect, onClose, returnFocus }) {
  const index = projectGallery.findIndex(item => item.key === selected);
  const current = projectGallery[index];
  function move(direction) {
    onSelect(projectGallery[(index + direction + projectGallery.length) % projectGallery.length].key);
  }
  return <Dialog open={Boolean(current)} onOpenChange={open => { if (!open) onClose(); }}>
    {current && <DialogContent className="max-w-5xl w-[calc(100%_-_1rem)] max-h-[95dvh] overflow-y-auto p-4 sm:p-6 gap-3 bg-white [&>button:last-child]:p-3.5 [&>button:last-child]:right-1 [&>button:last-child]:top-1" onCloseAutoFocus={event => { event.preventDefault(); returnFocus?.current?.focus(); }} onKeyDown={event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    }}>
      <DialogTitle className="pr-10">{current.title}</DialogTitle>
      <DialogDescription>{current.stage} · {current.caption}</DialogDescription>
      <ProjectPhoto photo={current.key} priority original sizes="(min-width: 1024px) 960px, 100vw" className="w-full max-h-[65dvh] object-contain bg-slate-50" />
      <div className="flex items-center justify-between gap-3">
        <Button type="button" className="min-h-11 min-w-11" variant="outline" onClick={() => move(-1)} aria-label="Previous project photo"><ChevronLeft className="w-4 h-4" /><span className="hidden sm:inline">Previous</span></Button>
        <p className="text-sm text-slate-600" aria-live="polite">Photo {index + 1} of {projectGallery.length}</p>
        <Button type="button" className="min-h-11 min-w-11" variant="outline" onClick={() => move(1)} aria-label="Next project photo"><span className="hidden sm:inline">Next</span><ChevronRight className="w-4 h-4" /></Button>
      </div>
    </DialogContent>}
  </Dialog>;
}
