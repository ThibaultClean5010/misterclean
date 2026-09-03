import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Target, MapPin, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About MisterClean | Professional Cleaning Adelaide</title>
        <meta name="description" content="Learn about MisterClean, Adelaide's trusted professional cleaning company. 15+ years experience, certified cleaners, eco-friendly practices, customer satisfaction." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          <img 
            src="https://images.unsplash.com/photo-1691522137720-1e456609b679" 
            alt="Corporate office building representing our service scale" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MisterClean</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Based in Adelaide, MisterClean is built on a foundation of reliability, strict compliance, and a commitment to operational excellence. Review our <Link to="/services" className="text-primary hover:underline">services</Link> to learn how we can assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Company History & Values</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  MisterClean was established with a clear vision: to elevate the standards of commercial cleaning in South Australia. With over 15+ years experience, we recognized that businesses needed more than just a quick surface wipe—they needed a strategic partner capable of maintaining complex, high-traffic environments to exacting standards.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Team Expertise</h2>
                <p>
                  Over the years, we have specialized exclusively in B2B environments. From high-end corporate offices and demanding restaurant kitchens to rigorous post-construction sites, our operational frameworks are designed to minimize disruption while maximizing hygiene and aesthetic appeal. 
                </p>
                <p>
                  Our team doesn't just clean; we protect your assets, ensure health and safety compliance, and help you project a professional image to every client that walks through your doors. Ready to upgrade? <Link to="/contact" className="text-primary hover:underline font-medium">Contact us</Link> today.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7" 
                alt="Professional commercial cleaning team meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-2xl font-bold mb-2">Locally Owned & Operated</p>
                  <p className="text-slate-300">Serving the Adelaide business community</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values / Credentials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-4">Certifications & Achievements</h3>
            <p className="text-lg text-muted-foreground">
              Our credentials and core values ensure we deliver consistent, high-quality results across every contract.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Fully Insured',
                description: 'Comprehensive public liability and worker compensation insurance for complete peace of mind.'
              },
              {
                icon: Target,
                title: 'Strict Quality Control',
                description: 'Regular site audits and dedicated account managers to maintain our exacting standards.'
              },
              {
                icon: MapPin,
                title: 'Adelaide Metro Focus',
                description: 'Rapid response times and localized knowledge across the entire metropolitan area.'
              },
              {
                icon: Award,
                title: 'Certified Teams',
                description: 'Rigorous staff training covering WHS compliance, chemical handling, and specialized equipment.'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;