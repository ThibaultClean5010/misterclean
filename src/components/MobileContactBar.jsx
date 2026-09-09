import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';
import { PHONE_HREF } from '@/data/site.js';
import { trackEnquiry } from '@/lib/quote.js';
export default function MobileContactBar() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;
  return <nav aria-label="Quick contact" className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
    <div className="flex gap-3">
      <a href={PHONE_HREF} onClick={() => trackEnquiry('phone_click')} className="flex-1 inline-flex justify-center items-center gap-2 rounded-lg border border-primary text-primary py-3 font-semibold"><Phone className="h-4 w-4" />Call</a>
      <Link to="/contact" className="flex-1 inline-flex justify-center items-center gap-2 rounded-lg bg-primary text-white py-3 font-semibold"><FileText className="h-4 w-4" />Get a Quote</Link>
    </div>
  </nav>;
}
