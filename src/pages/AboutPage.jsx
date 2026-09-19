import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CleaningPhoto from '@/components/CleaningPhoto.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';
export default function AboutPage() {
  return <>
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-brand-ink border-b-2 border-brand-lime text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand-lime font-semibold mb-4">Cleaning for Adelaide businesses</p>
        <h1 className="mb-5">About MisterClean</h1>
        <p className="text-xl text-slate-300">We provide regular and one-off cleaning for business premises in Adelaide.</p>
      </div>
    </section>
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2>What we do</h2>
          <p className="text-lg text-muted-foreground">MisterClean cleans offices, shops and other business premises in Adelaide. Our services include <Link to="/services/commercial-cleaning" className="text-primary underline">regular cleaning</Link>, windows, <Link to="/services/commercial-deep-cleaning" className="text-primary underline">deep cleans</Link> and cleaning after building work.</p>
          <p className="text-lg text-muted-foreground">Some jobs need a regular visit. Others need a one-off clean before opening or <Link to="/services/after-builders-cleaning" className="text-primary underline">after renovations</Link>. Tell us which areas need cleaning, how often and when we can get access.</p>
          <h2 className="text-2xl">Before we book</h2>
          <p className="text-lg text-muted-foreground">We’ll discuss the rooms, surfaces and tasks you want included. Your quote sets out the work and price before you decide to go ahead.</p>
          <p className="text-lg text-muted-foreground">For <Link to="/services/window-cleaning" className="text-primary underline">window cleaning at height or with difficult access</Link>, we’ll check what’s possible before booking.</p>
          <div className="flex flex-wrap gap-3"><Button asChild><Link to="/contact">Get a quote</Link></Button><Button asChild variant="outline"><Link to="/services">View our services</Link></Button></div>
        </div>
        <figure><CleaningPhoto photo="about" sizes="(min-width: 1024px) 50vw, 100vw" className="w-full aspect-[4/3] object-cover rounded-lg" /><figcaption className="mt-3 text-sm text-slate-500">One of our retail jobs in Hindmarsh.</figcaption></figure>
      </div>
    </section>
    <CertificationsSection />
  </>;
}
