import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileCheck, HeartPulse } from 'lucide-react';

const CertificationsSection = () => {
  const certs = [
    { icon: ShieldCheck, title: 'Fully Insured', desc: '$20M Public Liability' },
    { icon: Award, title: 'ISO Standards', desc: 'Quality Management' },
    { icon: FileCheck, title: 'WHS Compliant', desc: 'Strict Safety Protocols' },
    { icon: HeartPulse, title: 'TGA Approved', desc: 'Hospital-Grade Products' },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Certified & Compliant Cleaning in Adelaide</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-900">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;