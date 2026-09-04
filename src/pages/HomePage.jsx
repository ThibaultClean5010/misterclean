import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, MapPin, Star, Award, HeartHandshake as Handshake, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';
import { blogPosts } from '@/data/blogPosts.js';

const HomePage = () => {
  const services = [
    {
      title: 'Commercial Cleaning',
      description: 'Comprehensive cleaning solutions for offices and corporate facilities, ensuring a pristine environment for your staff and clients.',
      image: 'https://horizons-cdn.hostinger.com/dcd817cd-3e58-4158-995e-355bc699404e/c3a657c328e246cb4ea6b53fa48d6096.png',
      benefits: ['Daily or weekly scheduling', 'Sanitization protocols', 'Eco-friendly products'],
      link: '/services/commercial-cleaning'
    },
    {
      title: 'After-Builders Cleaning',
      description: 'Specialized post-construction cleanup to remove hazardous dust, debris, and final touches before handover.',
      image: 'https://horizons-cdn.hostinger.com/dcd817cd-3e58-4158-995e-355bc699404e/90499e1e10edc56f55909756253aae91.jpg',
      benefits: ['Fine dust removal', 'Window and frame detailing', 'Safe waste disposal'],
      link: '/services/after-builders-cleaning'
    },
    {
      title: 'Hospital/Clinic Cleaning',
      description: 'Medical-grade cleaning and infection control for healthcare facilities, strictly adhering to clinical safety standards.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
      benefits: ['Terminal cleaning protocols', 'Hospital-grade disinfectants', 'Cross-contamination prevention'],
      link: '/services/hospital-clinic-cleaning'
    },
    {
      title: 'Heavy-Duty Cleaning',
      description: 'Intensive industrial and warehouse cleaning focusing on safety, compliance, and heavy machinery areas.',
      image: 'https://horizons-cdn.hostinger.com/dcd817cd-3e58-4158-995e-355bc699404e/99d800f5d10603f01af5202b41444e41.jpg',
      benefits: ['High-pressure washing', 'Industrial floor scrubbing', 'Hazard mitigation'],
      link: '/services/heavy-duty-cleaning'
    }
  ];

  const trustBadges = [
    {
      icon: MapPin,
      title: 'Locally Owned',
      description: 'Proudly serving the Adelaide community with dedicated local support.'
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description: 'Committed to exceeding expectations on every single clean.'
    },
    {
      icon: Award,
      title: 'Certified Team',
      description: 'Fully trained, insured, and vetted cleaning professionals.'
    },
    {
      icon: Handshake,
      title: 'Professional & Reliable',
      description: 'Consistent, high-quality service you can always count on.'
    }
  ];

  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Professional Cleaning Services Adelaide | MisterClean</title>
        <meta name="description" content="MisterClean offers professional residential & commercial cleaning services in Adelaide. Expert cleaners, eco-friendly solutions, 100% satisfaction guaranteed." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center bg-slate-950 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <img 
            src="https://images.unsplash.com/photo-1649665839727-f4e9cf1f2a82" 
            alt="Pristine corporate office environment showcasing professional cleaning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 mb-8 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Adelaide's Trusted Commercial Cleaners</span>
            </div>
            
            <h1 className="text-white text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Professional Cleaning Services in Adelaide
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We deliver uncompromising B2B cleaning services across Adelaide. From daily office maintenance to heavy-duty industrial cleaning, we ensure your facility reflects your business excellence. Looking for specifics? Explore our <Link to="/services/commercial-cleaning" className="text-primary hover:underline">commercial cleaning services</Link>, <Link to="/services/hospital-clinic-cleaning" className="text-primary hover:underline">hospital/clinic cleaning</Link>, or <Link to="/services/after-builders-cleaning" className="text-primary hover:underline">after-builders cleaning</Link> solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base shadow-lg hover:shadow-primary/25 transition-all">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CertificationsSection />

      {/* Trust Badges Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{badge.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{badge.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
              <p className="text-lg text-muted-foreground">
                Tailored protocols designed specifically for the rigorous demands of commercial operations and post-construction requirements.
              </p>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5">
              <Link to="/services" className="inline-flex items-center">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                <BookOpen className="h-4 w-4" />
                Cleaning Resources
              </div>
              <h2 className="text-3xl font-bold mb-4">Latest Cleaning Guides</h2>
              <p className="text-lg text-muted-foreground">
                Practical advice for Adelaide businesses planning commercial cleaning, deep cleaning, post-construction cleaning, and hygiene routines.
              </p>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5">
              <Link to="/blog" className="inline-flex items-center">
                Visit Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="blog-card"
              >
                <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                </Link>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-primary">{post.category}</span>
                  <Link to={`/blog/${post.slug}`} className="group block mt-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-3 mb-5">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your facility's standards?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Contact our Adelaide-based team today for a comprehensive site assessment and customized commercial cleaning proposal.
          </p>
          <Button asChild size="lg" className="h-14 px-10 text-base bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Get Your Custom Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
