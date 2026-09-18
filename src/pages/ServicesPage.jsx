import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CleaningPhoto from '@/components/CleaningPhoto.jsx';
import Reveal from '@/components/Reveal.jsx';
import { cleaningOffers } from '@/data/cleaningExperience.js';

export default function ServicesPage() {
  return <>
    <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-brand-ink border-b-2 border-brand-lime text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-brand-lime font-semibold  mb-4">Cleaning for Adelaide businesses</p>
        <h1 className="mb-5">Cleaning services in Adelaide</h1>
        <p className="text-lg text-slate-300 max-w-2xl">Four services for your business: regular cleaning, deep cleaning, window cleaning and after builders cleaning.</p>
        <nav aria-label="Jump to a cleaning service" className="flex flex-wrap gap-3 mt-7">{cleaningOffers.map(offer => <a key={offer.value} href={'#' + offer.value} className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">{offer.shortTitle}<ArrowDown className="h-4 w-4" /></a>)}</nav>
      </div>
    </section>
    {cleaningOffers.map((offer, index) => <section key={offer.value} id={offer.value} className={'py-14 md:py-20 scroll-mt-24 ' + (index % 2 ? 'bg-brand-mist' : 'bg-white')}>
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className={'overflow-hidden rounded-lg group ' + (index % 2 ? 'lg:order-2' : '')}><CleaningPhoto photo={offer.photo} sizes="(min-width: 1024px) 50vw, 100vw" className="w-full aspect-[4/3] object-cover" /></div>
          <div>
            <p className="text-primary text-sm font-semibold  mb-3">{offer.shortTitle}</p>
            <h2 className="mb-5"><Link to={offer.path} className="hover:text-primary transition-colors">{offer.title}</Link></h2>
            <p className="text-lg text-muted-foreground mb-6">{offer.description}</p>
            <ul className="space-y-3 mb-7">{offer.benefits.map(benefit => <li key={benefit} className="flex gap-3"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />{benefit}</li>)}</ul>
            {offer.value === 'commercial' && <p className="text-muted-foreground mb-6">For offices, shops, restaurants and shared premises. We agree the tasks and visiting schedule around your business.</p>}
            {offer.value === 'window-cleaning' && <p className="text-muted-foreground mb-6">Choose a one-off clean or a recurring schedule. For hard-to-reach windows, we assess height and access before confirming the work.</p>}
            {offer.value === 'commercial-deep-cleaning' && <p className="text-muted-foreground mb-6">Tell us which rooms need a deeper clean. We’ll list the floors, kitchen areas, bathrooms and other surfaces included in your quote.</p>}
            <div className="flex flex-wrap gap-3"><Button asChild size="lg"><Link to={'/contact?service=' + offer.value}>Get a quote<ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to={offer.path}>Service details</Link></Button></div>
          </div>
        </div>
      </Reveal>
    </section>)}
    <section className="py-14 md:py-20 bg-primary/5 border-t border-primary/10 text-center"><div className="max-w-3xl mx-auto px-4"><h2 className="mb-5">Not sure where to start?</h2><p className="text-lg text-muted-foreground mb-7 mx-auto">Just tell us what needs cleaning. We’ll help you work out which service suits the job.</p><Button asChild size="lg"><Link to="/#find-your-clean">Help me choose a clean</Link></Button></div></section>
  </>;
}
