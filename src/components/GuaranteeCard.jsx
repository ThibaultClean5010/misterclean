import React from 'react';

const GuaranteeCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="guarantee-card"
    >
      <div className="guarantee-card-icon-wrapper">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default GuaranteeCard;