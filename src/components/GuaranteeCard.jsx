import React from 'react';
import { motion } from 'framer-motion';

const GuaranteeCard = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="guarantee-card"
    >
      <div className="guarantee-card-icon-wrapper">
        <Icon className="h-6 w-6 text-secondary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default GuaranteeCard;