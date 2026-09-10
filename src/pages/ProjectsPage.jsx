import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectComparison from '@/components/ProjectComparison.jsx';
import ProjectPhoto from '@/components/ProjectPhoto.jsx';
import ProjectGallery from '@/components/ProjectGallery.jsx';
import ProjectLightbox from '@/components/ProjectLightbox.jsx';

export default function ProjectsPage() {
  const [selected, setSelected] = useState(null);
  const photoTrigger = useRef(null);
  function openPhoto(key, trigger) { photoTrigger.current = trigger; setSelected(key); }
  return <>
    <section className="pt-28 md:pt-36 pb-12 bg-teal-50/60 border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-primary text-sm  font-bold mb-4">MisterClean · Adelaide</p><h1 className="mb-5">Our cleaning projects</h1><p className="text-lg text-slate-600 max-w-2xl">10 original photos from our cleaning jobs, including a café fit-out and a retail space in Hindmarsh. Select a photo to enlarge it.</p></div>
    </section>
    <ProjectGallery onOpen={openPhoto} />
    <section id="cafe-fitout" className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8"><p className="text-primary font-semibold text-sm mb-3">Hospitality fit-out · Floor cleaning</p><h2 className="mb-4">A kitchen floor during a café fit-out</h2>
          <p className="text-slate-600">Construction dust and loose materials can accumulate as trades move through a new space. These photographs show the same kitchen before and after a floor clean, with fitting work continuing around it.</p></div>
        <ProjectComparison onOpen={openPhoto} />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div><h3 className="text-lg mb-2">The starting point</h3><p className="text-slate-600">Dust, footprints and loose materials are visible along the kitchen floor and around the protected equipment.</p></div>
          <div><h3 className="text-lg mb-2">The visible result</h3><p className="text-slate-600">The later photograph shows a cleared floor and cleaner edges. Wrapped appliances and work materials remain because the fit-out is ongoing.</p></div>
          <div><h3 className="text-lg mb-2">Planning a similar clean</h3><p className="text-slate-600">Agree which areas are ready, when trades will finish and how to protect the cleaned surfaces before handover.</p></div>
        </div>
        <Link to="/services/after-builders-cleaning" className="inline-flex items-center gap-2 text-primary font-semibold py-3 mt-5">After-builders cleaning in Adelaide <ArrowRight className="w-4 h-4" /></Link>
      </div>
    </section>
    <section id="hindmarsh-retail" className="py-14 md:py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-10">
        <figure><ProjectPhoto photo="retailFront" onOpen={openPhoto} sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-auto rounded-lg" /><figcaption className="text-sm text-slate-500 mt-3">Hindmarsh retail premises · Original post-construction project photograph.</figcaption></figure>
        <div><p className="text-sm text-primary font-semibold mb-3">Hindmarsh · Retail premises</p><h2 className="mb-5">A retail job in Hindmarsh</h2><p className="text-slate-600 mb-5">An empty retail space with carpeted walkways, display fixtures and a glazed entrance. The post-construction project photo shows the shop before it is stocked for trading.</p><p className="text-slate-600 mb-5">For a similar premises, we discuss accessible flooring, shelving, counters and glass, then agree the final clean around your access and handover date. Once trading begins, a regular plan can maintain customer areas.</p>
          <div className="flex flex-wrap gap-4"><Link to="/services/retail-cleaning" className="text-primary font-semibold underline py-3">Retail cleaning</Link><Link to="/contact?service=after-builders" className="text-primary font-semibold underline py-3">Discuss a handover clean</Link></div>
        </div>
      </div>
    </section>
    <section className="py-14 md:py-20 text-center"><div className="max-w-3xl mx-auto px-4"><h2 className="mb-4">Have a similar job?</h2><p className="text-slate-600 mx-auto mb-6">Tell us your service, suburb and the best way to reach you. We will discuss the areas and quote before you book.</p><Button asChild size="lg"><Link to="/contact">Get a cleaning quote</Link></Button></div></section>
    <ProjectLightbox selected={selected} onSelect={setSelected} onClose={() => setSelected(null)} returnFocus={photoTrigger} />
  </>;
}
