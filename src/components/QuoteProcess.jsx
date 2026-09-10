import React from 'react';
export default function QuoteProcess() {
  const steps = [
    ['Tell us about the job', 'Send your suburb, the type of clean and your preferred times. An approximate floor area and access details are helpful.'],
    ['We’ll prepare a quote', 'We’ll discuss what needs cleaning. Some jobs need a site visit before we can confirm a price.'],
    ['Book a time', 'Once you accept the quote, we’ll arrange the visit and let you know if anything needs to be prepared.']
  ];
  return <section id="how-it-works" className="py-14 md:py-20 bg-slate-50 border-y border-slate-100 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl mb-10">How to book a clean</h2>
      <ol className="grid md:grid-cols-3 gap-8">{steps.map(([title, text], index) => <li key={title}>
        <span className="inline-flex h-10 w-10 rounded-md border border-primary/25 text-primary items-center justify-center font-bold mb-4">{index + 1}</span>
        <h3 className="text-xl mb-3">{title}</h3><p className="text-muted-foreground">{text}</p>
      </li>)}</ol>
    </div>
  </section>;
}
