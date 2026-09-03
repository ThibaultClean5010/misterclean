import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Building, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact MisterClean | Cleaning Services Adelaide</title>
      <meta name="description" content="Contact MisterClean for professional commercial cleaning services in Adelaide by phone or email." />
    </Helmet>

    <section className="py-20 bg-slate-50 border-b mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch with MisterClean</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to upgrade your facility&apos;s hygiene standards? Contact our team directly for a consultation and customised proposal. View our{' '}
            <Link to="/services" className="text-primary hover:underline">services</Link> or learn more{' '}
            <Link to="/about" className="text-primary hover:underline">about our company</Link>.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="tel:0474597325" className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-primary/10 rounded-lg text-primary w-fit mb-5"><Phone className="h-7 w-7" /></div>
            <h2 className="text-2xl font-bold mb-2">Call us</h2>
            <p className="text-2xl font-bold text-primary">0474 597 325</p>
            <p className="text-muted-foreground mt-3">For quotes and urgent enquiries.</p>
          </a>
          <a href="mailto:mistercleanadelaide@gmail.com?subject=Cleaning%20quote%20request" className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-primary/10 rounded-lg text-primary w-fit mb-5"><Mail className="h-7 w-7" /></div>
            <h2 className="text-2xl font-bold mb-2">Email us</h2>
            <p className="text-lg font-semibold text-primary break-all">mistercleanadelaide@gmail.com</p>
            <p className="text-muted-foreground mt-3">Tell us about your site and cleaning requirements.</p>
          </a>
        </motion.div>

        <div className="mt-12 p-8 rounded-3xl border border-slate-200 bg-white">
          <h2 className="text-2xl font-bold mb-6">Service information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
            <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" /><span>Adelaide Metropolitan Area &amp; Surrounds</span></div>
            <div className="flex items-start gap-3"><Building className="h-5 w-5 text-secondary shrink-0 mt-0.5" /><span>Commercial &amp; B2B Properties</span></div>
            <div className="flex items-start gap-3"><Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" /><span>24/7 Cleaning Operations Available</span></div>
          </div>
          <div className="mt-8">
            <Button asChild size="lg"><a href="mailto:mistercleanadelaide@gmail.com?subject=Cleaning%20quote%20request">Request a quote by email</a></Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
