import React from 'react';
import { motion } from 'framer-motion';

const ServiceHero = ({ title, tagline, image }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-slate-950 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 mb-8 backdrop-blur-sm">
            <span className="text-sm font-semibold tracking-wide uppercase">Commercial Services</span>
          </div>
          
          <h1 className="text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;