import React from 'react';
import { projectGallery } from '@/data/projects.js';
import ProjectPhoto from '@/components/ProjectPhoto.jsx';

export default function ProjectGallery({ onOpen }) {
  return <section id="photo-gallery" className="py-12 md:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-8"><h2 className="mb-4">Photos from our jobs</h2><p className="text-slate-600">Take a closer look at the spaces we work in. The kitchen before-and-after and another view of the Hindmarsh shop follow below.</p></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectGallery.filter(item => !item.featured).map(item => <figure key={item.key} className="bg-white border border-slate-200 rounded-md overflow-hidden">
          <ProjectPhoto photo={item.key} onOpen={onOpen} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="w-full aspect-[4/3] object-cover" />
          <figcaption className="p-4"><p className="text-xs text-primary font-semibold mb-2">{item.stage}</p><h3 className="text-lg mb-2">{item.title}</h3><p className="text-sm text-slate-600">{item.caption}</p></figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}
