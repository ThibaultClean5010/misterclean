import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { serviceOptions } from '@/data/site.js';
import { Button } from '@/components/ui/button';
import CleaningPhoto from '@/components/CleaningPhoto.jsx';

const ServiceHero = ({ title, tagline }) => {
  const { pathname } = useLocation();
  const service = serviceOptions.find(item => item.path === pathname);
  const photo = ['window-cleaning', 'retail'].includes(service?.value) ? 'windows'
    : ['after-builders', 'commercial-deep-cleaning', 'restaurant'].includes(service?.value) ? 'deep' : 'workplace';
  return (
    <section className="relative flex items-center bg-slate-950 overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 z-0">
        <CleaningPhoto photo={photo} priority className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/45 lg:bg-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/80 lg:to-slate-950/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-20">
        <motion.div 
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <nav aria-label="Breadcrumb" className="text-sm text-slate-300 mb-5 flex flex-wrap gap-2"><Link to="/" className="underline">Home</Link><span>/</span><Link to="/services" className="underline">Services</Link><span>/</span><span aria-current="page">{service?.label || title}</span></nav>
          
          <h1 className="text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {tagline}
          </p>
          <Button asChild size="lg" className="mt-7"><Link to={service ? '/contact?service=' + service.value : '/contact'}>Request a Quote</Link></Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
