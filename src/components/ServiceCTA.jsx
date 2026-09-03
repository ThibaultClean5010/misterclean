import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServiceCTA = ({ serviceName }) => {
  return (
    <section className="py-24 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Require Professional {serviceName}?
        </h2>
        <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Contact our operations team to discuss your facility's requirements. We provide comprehensive site assessments and custom cleaning proposals tailored to your operational needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="h-14 px-10 text-base font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/contact">Request Custom Proposal</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-10 text-base font-semibold border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white">
            <a href="tel:0474597325">Call 0474 597 325</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;