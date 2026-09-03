import React from 'react';
import { motion } from 'framer-motion';

const CertificationBadge = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="certification-badge"
    >
      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h4 className="font-bold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default CertificationBadge;