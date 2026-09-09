import React from 'react';
export default function QuoteProcess() {
  const steps = [
    ['Tell us about your premises', 'Share your suburb, service and preferred times. Include the size of the space and any access requirements.'],
    ['Confirm the scope and quote', 'We discuss the areas and tasks involved. A site assessment may be needed before the quote is confirmed.'],
    ['Agree a suitable time', 'Once you accept the quote, we confirm the cleaning arrangements and any preparation needed before the visit.']
  ];
  return <section id="how-it-works" className="py-14 md:py-20 bg-slate-50 border-y border-slate-100 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl mb-10">Arrange your clean in three steps</h2>
      <ol className="grid md:grid-cols-3 gap-8">{steps.map(([title, text], index) => <li key={title}>
        <span className="inline-flex h-10 w-10 rounded-full bg-primary text-white items-center justify-center font-bold mb-4">{index + 1}</span>
        <h3 className="text-xl mb-3">{title}</h3><p className="text-muted-foreground">{text}</p>
      </li>)}</ol>
    </div>
  </section>;
}
