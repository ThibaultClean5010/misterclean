import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Phone, Check, Building2, PanelsTopLeft, Sparkles, HardHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteForm from '@/components/QuoteForm.jsx';
import ProjectShowcase from '@/components/ProjectShowcase.jsx';
import ServiceExplorer from '@/components/ServiceExplorer.jsx';
import Reveal from '@/components/Reveal.jsx';
import QuoteProcess from '@/components/QuoteProcess.jsx';
import CleaningFAQ from '@/components/CleaningFAQ.jsx';
import { PHONE, PHONE_HREF } from '@/data/site.js';
import { trackEnquiry } from '@/lib/quote.js';

const priorities = [
  { value: 'commercial', title: 'Regular cleaning', detail: 'Workplaces, shops & shared areas', icon: Building2 },
  { value: 'window-cleaning', title: 'Windows & glass', detail: 'One-off, recurring & hard-to-reach', icon: PanelsTopLeft },
  { value: 'commercial-deep-cleaning', title: 'Deep cleaning', detail: 'Floors, kitchens, bathrooms & details', icon: Sparkles },
  { value: 'after-builders', title: 'After building work', detail: 'Dust, detailing & handover', icon: HardHat }
];
export default function HomePage() {
  const [params] = useSearchParams();
  const selected = params.get('service');
  return <>
    <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-[#f6f5ef] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 lg:gap-14 items-start">
        <div className="lg:pt-5">
          <p className="text-primary font-bold text-xs sm:text-sm  mb-4">MisterClean · Adelaide, South Australia</p>
          <h1 className="text-4xl md:text-5xl mb-4">Commercial cleaning <span className="text-primary">in Adelaide.</span></h1>
          <p className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">Regular and one-off cleaning for your workplace.</p>
          <p className="text-base sm:text-lg text-slate-600 mb-7">We clean offices, shops, windows and business premises in Adelaide. Need a regular clean, a deep clean or help after building work? Tell us about the job.</p>
          <div className="grid grid-cols-2 gap-3">{priorities.map(item => <Link key={item.value} to={'/?service=' + item.value + '#quick-quote'} onClick={() => trackEnquiry('service_selected', item.value)} className={'group rounded-md border bg-white p-3 sm:p-4 flex gap-3 transition-colors hover:border-primary focus-visible:border-primary ' + (selected === item.value ? 'border-primary ring-1 ring-primary' : 'border-slate-200')}>
            <item.icon className="hidden sm:block w-5 h-5 mt-0.5 shrink-0 text-primary" /><div className="min-w-0"><span className="block font-semibold text-sm mb-1">{item.title}</span><span className="block text-xs text-slate-600">{item.detail}</span></div><ArrowRight className="hidden sm:block w-4 h-4 ml-auto shrink-0 mt-1 text-slate-400 group-hover:text-primary" />
          </Link>)}</div>
          <a href={PHONE_HREF} onClick={() => trackEnquiry('phone_click')} className="inline-flex items-center gap-2 font-semibold text-primary py-3 mt-4"><Phone className="w-4 h-4" />Prefer to talk? {PHONE}</a>
          <Link to="/projects" className="block underline text-sm text-slate-600 py-2">See our project photos</Link>
        </div>
        <div id="quick-quote" className="scroll-mt-24"><QuoteForm compact /></div>
      </div>
      <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-3 mt-8 text-sm text-slate-600">{['One-off and recurring visits', 'Work and price agreed upfront', 'Cleaning times arranged with you'].map(item => <li key={item} className="inline-flex items-center gap-2"><Check className="w-4 h-4 shrink-0 text-primary" />{item}</li>)}</ul>
    </section>
    <Reveal><ProjectShowcase /></Reveal>
    <Reveal><ServiceExplorer /></Reveal>
    <Reveal><QuoteProcess /></Reveal>
    <Reveal><CleaningFAQ /></Reveal>
    <section className="py-14 md:py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-5 justify-between items-center"><div><h2 className="text-2xl mb-3">Planning your next clean?</h2><p className="text-slate-600">A few useful checklists for keeping offices, shops and other workplaces clean.</p></div><Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold py-3">Read the cleaning guides <ArrowRight className="w-4 h-4" /></Link></div></section>
    <section className="py-14 md:py-20 bg-[#203f3a] text-white text-center">
      <div className="max-w-3xl mx-auto px-4"><h2 className="mb-5">Tell us what needs cleaning</h2><p className="text-slate-300 text-lg mb-7 mx-auto">Send us your suburb and a few details about the job, or give us a call. We’ll talk through the work and provide a quote.</p><Button asChild size="lg"><a href="#quick-quote">Get a cleaning quote <ArrowRight className="w-4 h-4 ml-2" /></a></Button></div>
    </section>
  </>;
}
