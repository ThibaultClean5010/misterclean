import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ number, title, description, isLast = false }) => {
  return (
    <div className="process-step group">
      {!isLast && <div className="process-step-line group-hover:bg-primary/30 transition-colors duration-300" />}
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="process-step-indicator"
      >
        {number}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-2 md:pt-4"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default ProcessStep;