import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, CheckCircle2, Award } from 'lucide-react';

const TrustSignalsSection = () => {
  const stats = [
    {
      icon: Building2,
      value: '10+',
      label: 'Years in Business',
    },
    {
      icon: Users,
      value: '500+',
      label: 'B2B Clients',
    },
    {
      icon: CheckCircle2,
      value: '2,500+',
      label: 'Projects Completed',
    },
    {
      icon: Award,
      value: '100%',
      label: 'Certified Team',
    },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="p-3 bg-white/10 rounded-xl">
                  <Icon className="h-8 w-8 text-secondary" />
                </div>
                <div 
                  className="text-3xl md:text-4xl font-extrabold tracking-tight"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;