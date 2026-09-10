import React from 'react';

const ProcessStep = ({ number, title, description, isLast = false }) => {
  return (
    <div className="process-step group">
      {!isLast && <div className="process-step-line " />}
      
      <div className="process-step-indicator"
      >
        {number}
      </div>
      
      <div className="pt-2 md:pt-4"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground ">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStep;