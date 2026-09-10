import React from 'react';
import { ClipboardCheck, CalendarDays, ScanLine, Phone } from 'lucide-react';
export default function CertificationsSection() {
  const items = [
    { icon: ClipboardCheck, title: 'Work agreed upfront', description: 'Your quote lists the areas and tasks included.' },
    { icon: CalendarDays, title: 'One-off or regular', description: 'Choose a single visit or discuss a cleaning schedule.' },
    { icon: ScanLine, title: 'Access arranged', description: 'We’ll discuss keys, entry and site requirements.' },
    { icon: Phone, title: 'Call or email us', description: 'Get in touch to discuss the job.' }
  ];
  return <section className="py-10 md:py-14 bg-white border-y border-slate-100" aria-label="How we arrange your cleaning">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map(({ icon: Icon, title, description }) => <div key={title} className="flex gap-3 items-start">
        <Icon className="h-6 w-6 shrink-0 text-primary mt-1" /><div><h2 className="text-lg font-bold mb-1">{title}</h2><p className="text-sm text-muted-foreground">{description}</p></div>
      </div>)}
    </div>
  </section>;
}
