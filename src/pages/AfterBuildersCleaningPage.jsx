import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';
import ProjectShowcase from '@/components/ProjectShowcase.jsx';
import QuoteProcess from '@/components/QuoteProcess.jsx';

export default function AfterBuildersCleaningPage() {
  const tasks = [
    ['Construction dust', 'Remove dust from accessible surfaces, ledges and the areas included in the quote.'],
    ['Floors and edges', 'Vacuum, sweep or clean the agreed floors using methods suited to their materials and condition.'],
    ['Glass, frames and tracks', 'Clean agreed glazing and accessible frames and tracks, with access assessed before booking.'],
    ['Kitchens and amenities', 'Detail agreed cabinetry, sinks, splashbacks, bathroom fixtures and accessible surfaces.'],
    ['Surface residue', 'Assess paint marks, adhesive and protective films before agreeing suitable removal methods.'],
    ['Finishing details', 'Check the agreed surfaces and discuss any remaining details with your site contact.']
  ];
  return <>
    <ServiceHero title="After-Builders Cleaning in Adelaide" tagline="Detailed cleaning after construction or renovation, with dust removal, surface cleaning and finishing details agreed around your handover." />
    <ServiceNavigation />
    <section className="py-14 md:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-10"><h2 className="mb-5">From building work to a cleaner premises</h2><p className="text-lg text-slate-600 mb-4">Renovation and fit-out work can leave dust across floors, glazing and newly installed surfaces. We assess what needs attention and agree a cleaning scope around the condition of your Adelaide premises.</p><p className="text-slate-600">Tell us which trades are still working, which rooms are ready and when you need access. A staged clean may suit an ongoing fit-out; a final clean is planned around your handover.</p></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{tasks.map(([title, description]) => <div key={title} className="p-6 bg-white border border-slate-200 rounded-xl"><Check className="text-primary w-5 h-5 mb-4" /><h3 className="text-xl mb-3">{title}</h3><p className="text-slate-600">{description}</p></div>)}</div>
    </div></section>
    <ProjectShowcase />
    <section className="py-14 md:py-20 bg-teal-50/50"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="mb-6">What helps us quote your handover clean?</h2>
      <ul className="grid sm:grid-cols-2 gap-4 text-slate-700">{['Your suburb, premises type and approximate size', 'The rooms and surfaces needing attention', 'Remaining trades, loose materials and access', 'Your preferred cleaning or handover date'].map(item => <li key={item} className="flex gap-3"><Check className="text-primary w-5 h-5 shrink-0" />{item}</li>)}</ul>
      <p className="mt-6 text-slate-600">Floor treatments, bulky waste and specialist work are assessed separately. Your quote sets out the tasks and access arrangements before work begins.</p>
    </div></section>
    <QuoteProcess />
    <section className="py-14 md:py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="mb-6">After-builders cleaning questions</h2>
      {[
        ['Can you clean while the fit-out is still underway?', 'Discuss which areas are ready and whether other trades will create more dust. We can agree the scope and timing for the stage your project has reached.'],
        ['Does the clean include windows?', 'Glass, frames and tracks can be included in the agreed scope. Tell us about height, obstructions and remaining protective films so we can assess access and surfaces.'],
        ['Can we arrange ongoing cleaning afterwards?', 'Once your premises are in use, we can discuss a regular cleaning plan for the workspaces, customer areas and amenities.']
      ].map(([question, answer]) => <details key={question} className="border-b border-slate-200 py-4"><summary className="font-semibold cursor-pointer py-2">{question}</summary><p className="text-slate-600 pt-2 pb-3">{answer}</p></details>)}
      <p className="mt-7 text-slate-600">After handover, explore <Link to="/services/commercial-cleaning" className="text-primary underline">commercial cleaning</Link> or <Link to="/services/window-cleaning" className="text-primary underline">window cleaning</Link>. For a broader reset of occupied premises, see <Link to="/services/commercial-deep-cleaning" className="text-primary underline">commercial deep cleaning</Link>.</p>
    </div></section>
    <ServiceCTA serviceName="After-Builders Cleaning" />
  </>;
}
