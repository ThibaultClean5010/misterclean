import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CleaningPhoto from '@/components/CleaningPhoto.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';
export default function AboutPage() {
  return <>
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-teal-200 font-semibold mb-4">Cleaning for Adelaide businesses</p>
        <h1 className="mb-5">About MisterClean</h1>
        <p className="text-xl text-slate-300">Commercial cleaning, with one-off services and regular plans shaped around your premises.</p>
      </div>
    </section>
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2>Cleaning around your business</h2>
          <p className="text-lg text-muted-foreground">MisterClean offers commercial cleaning, window cleaning, after-builders cleaning and comprehensive deep cleaning for business premises in Adelaide.</p>
          <p className="text-lg text-muted-foreground">Every space has different priorities. You may need regular upkeep for a workplace, a cleaner shopfront, preparation for handover or a complete premises refresh. Start by telling us what needs attention and how your business uses the space.</p>
          <h2 className="text-2xl">Clear expectations before the clean</h2>
          <p className="text-lg text-muted-foreground">We discuss the rooms and surfaces involved, the level of cleaning required and any access restrictions. Your quote sets out the agreed work so you can decide whether the service suits your needs.</p>
          <p className="text-lg text-muted-foreground">For hard-to-reach windows or other areas requiring closer assessment, we confirm suitable access before booking.</p>
          <div className="flex flex-wrap gap-3"><Button asChild><Link to="/contact">Request a Quote</Link></Button><Button asChild variant="outline"><Link to="/services">View our services</Link></Button></div>
        </div>
        <figure><CleaningPhoto photo="about" sizes="(min-width: 1024px) 50vw, 100vw" className="w-full aspect-[4/3] object-cover rounded-2xl" /><figcaption className="mt-3 text-sm text-slate-500">From our project photos: retail premises in Hindmarsh.</figcaption></figure>
      </div>
    </section>
    <CertificationsSection />
  </>;
}
