import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectComparison from '@/components/ProjectComparison.jsx';

export default function ProjectShowcase() {
  return <section id="our-work" className="py-14 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)] gap-8 lg:gap-12 items-center">
        <div><p className="text-sm uppercase tracking-widest text-primary font-bold mb-3">From our project photos</p><h2 className="mb-5">See the difference in the details</h2>
          <p className="text-slate-600 mb-5">A café kitchen floor, before and after cleaning during its fit-out. The equipment is still protected and the wider building work is continuing.</p>
          <p className="text-slate-600 mb-6">Planning a handover? Share your remaining dust, surfaces and access requirements so we can agree a suitable clean.</p>
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-semibold py-3">Explore our project photos <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contact?service=after-builders" className="block text-sm font-semibold text-slate-700 underline py-3">Request an after-builders quote</Link>
        </div>
        <ProjectComparison />
      </div>
    </div>
  </section>;
}
