import React from 'react';
import { ClipboardCheck, CalendarDays, ScanLine, Phone } from 'lucide-react';
export default function CertificationsSection() {
  const items = [
    { icon: ClipboardCheck, title: 'Clear scope', description: 'Areas and tasks agreed before work starts.' },
    { icon: CalendarDays, title: 'Flexible scheduling', description: 'One-off visits and recurring cleaning plans.' },
    { icon: ScanLine, title: 'Access planning', description: 'Site requirements discussed before booking.' },
    { icon: Phone, title: 'Direct contact', description: 'Speak with us by phone or email.' }
  ];
  return <section className="py-10 md:py-14 bg-white border-y border-slate-100" aria-label="How we arrange your cleaning">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map(({ icon: Icon, title, description }) => <div key={title} className="flex gap-3 items-start">
        <Icon className="h-6 w-6 shrink-0 text-primary mt-1" /><div><h2 className="text-lg font-bold mb-1">{title}</h2><p className="text-sm text-muted-foreground">{description}</p></div>
      </div>)}
    </div>
  </section>;
}
