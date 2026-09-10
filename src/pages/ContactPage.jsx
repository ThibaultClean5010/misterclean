import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm.jsx';
import QuoteProcess from '@/components/QuoteProcess.jsx';
import { CONTACT_EMAIL, PHONE, PHONE_HREF } from '@/data/site.js';
import { trackEnquiry } from '@/lib/quote.js';
export default function ContactPage() {
  return <>
    <section className="pt-28 pb-8 md:pt-32 md:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-5xl mb-4">Request a cleaning quote</h1>
      <p className="text-lg text-muted-foreground">Tell us what needs cleaning and your suburb, or call us on 0474 597 325.</p>
    </section>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
      <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-8 items-start">
        <QuoteForm />
        <aside className="space-y-5">
          <div className="rounded-lg bg-[#203f3a] text-white p-6 sm:p-8">
            <h2 className="text-2xl mb-5">Prefer to speak with us?</h2>
            <a href={PHONE_HREF} onClick={() => trackEnquiry('phone_click')} className="flex gap-3 items-center text-xl font-bold text-teal-200 py-3"><Phone className="h-5 w-5 shrink-0" />{PHONE}</a>
            <a href={'mailto:' + CONTACT_EMAIL} onClick={() => trackEnquiry('email_click')} className="flex gap-3 items-start text-base text-teal-200 py-3"><Mail className="h-5 w-5 shrink-0 mt-1" /><span className="break-all">{CONTACT_EMAIL}</span></a>
            <p className="text-slate-300 text-sm mt-4">We’ll talk through the work, price and timing with you before booking.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl mb-3 flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" />Adelaide businesses</h2>
            <p className="text-muted-foreground">Let us know your suburb so we can check availability. If you need windows cleaned at height, include a few details about access.</p>
          </div>
        </aside>
      </div>
    </section>
    <QuoteProcess />
  </>;
}
