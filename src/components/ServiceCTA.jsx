import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackEnquiry } from '@/lib/quote.js';
import { serviceOptions } from '@/data/site.js';
import { Button } from '@/components/ui/button';

const ServiceCTA = ({ serviceName }) => {
  const { pathname } = useLocation();
  const service = serviceOptions.find(item => item.path === pathname);
  return (
    <section className="py-24 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Require Professional {serviceName}?
        </h2>
        <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Tell us about your premises, suburb and preferred cleaning times. We will discuss the scope, access and quote before you book.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="h-14 px-10 text-base font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to={service ? '/contact?service=' + service.value : '/contact'}>Request a Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-10 text-base font-semibold border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white">
            <a href="tel:+61474597325" onClick={() => trackEnquiry('phone_click', service?.value)}>Call 0474 597 325</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
