import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectComparison from '@/components/ProjectComparison.jsx';

export default function ProjectShowcase() {
  return <section id="our-work" className="py-14 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)] gap-8 lg:gap-12 items-center">
        <div><p className="text-sm  text-primary font-bold mb-3">A look at our work</p><h2 className="mb-5">A washroom floor, before and after</h2>
          <p className="text-slate-600 mb-5">These are photos from one of our cleans. The first shows footprints and residue across the tiles. The second shows the same floor after cleaning, around the basin, drain and cubicles.</p>
          <p className="text-slate-600 mb-6">Have an area like this that needs attention? Tell us about the condition of the space and when we can get access.</p>
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-semibold py-3">See more of our work <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contact?service=commercial-deep-cleaning" className="block text-sm font-semibold text-slate-700 underline py-3">Ask about a deep clean</Link>
        </div>
        <ProjectComparison comparison="washroom" />
      </div>
    </div>
  </section>;
}
