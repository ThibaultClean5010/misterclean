import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { serviceOptions } from '@/data/site.js';
import { Button } from '@/components/ui/button';
import CleaningPhoto from '@/components/CleaningPhoto.jsx';
import { servicePhotoKeys, cleaningPhotos } from '@/data/cleaningExperience.js';

const ServiceHero = ({ title, tagline }) => {
  const { pathname } = useLocation();
  const service = serviceOptions.find(item => item.path === pathname.replace(/\/$/, ''));
  const photo = servicePhotoKeys[service?.value];
  return (
    <section className="relative flex items-center bg-[#203f3a] overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-y-0 right-0 z-0 w-full lg:w-1/2 lg:max-w-[1100px]">
        <CleaningPhoto photo={photo} priority className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#203f3a]/80 lg:bg-transparent" />
        {cleaningPhotos[photo]?.caption && <p className="hidden lg:block absolute bottom-0 inset-x-0 bg-white/95 text-slate-700 text-xs px-4 py-3">{cleaningPhotos[photo].caption}</p>}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-20">
        <motion.div 
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl lg:max-w-[46%]"
        >
          <nav aria-label="Breadcrumb" className="text-sm text-slate-300 mb-5 flex flex-wrap gap-2"><Link to="/" className="underline">Home</Link><span>/</span><Link to="/services" className="underline">Services</Link><span>/</span><span aria-current="page">{service?.label || title}</span></nav>
          
          <h1 className="text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {tagline}
          </p>
          <Button asChild size="lg" className="mt-7"><Link to={service ? '/contact?service=' + service.value : '/contact'}>Get a quote</Link></Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
