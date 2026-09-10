import React from 'react';

const CertificationBadge = ({ icon: Icon, title, description }) => {
  return (
    <div className="certification-badge"
    >
      <div className="flex-shrink-0 pt-1 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h4 className="font-bold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CertificationBadge;