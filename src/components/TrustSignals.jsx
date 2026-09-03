import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustSignals = () => {
  const signals = [
    {
      icon: Users,
      value: '2,847',
      label: 'Happy customers',
    },
    {
      icon: Clock,
      value: '12 years',
      label: 'Industry experience',
    },
    {
      icon: Award,
      value: '4.8/5',
      label: 'Average rating',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Satisfaction guarantee',
    },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Icon className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {signal.value}
                </div>
                <p className="text-sm opacity-90">{signal.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Why choose Mister Clean?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-primary-foreground/10 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Eco-friendly products</h4>
              <p className="text-sm opacity-90">
                We use environmentally safe cleaning solutions that are tough on dirt but gentle on your home
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Certified professionals</h4>
              <p className="text-sm opacity-90">
                Our team is fully trained, insured, and certified to deliver exceptional cleaning results
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Money-back guarantee</h4>
              <p className="text-sm opacity-90">
                Not satisfied? We'll re-clean for free or provide a full refund. Your satisfaction is our priority
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;