import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, HardHat, ScanLine, Sparkles } from 'lucide-react';
import { serviceOptions } from '@/data/site.js';

const serviceIcons = {
  commercial: Building2,
  'commercial-deep-cleaning': Sparkles,
  'window-cleaning': ScanLine,
  'after-builders': HardHat
};

const ServiceNavigation = () => {
  const location = useLocation();

  return (
    <div className="w-full bg-slate-50 border-b overflow-x-auto custom-scrollbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Cleaning services" className="flex space-x-1 sm:justify-center min-w-max">
          {serviceOptions.map((service) => {
            const isActive = location.pathname === service.path;
            const Icon = serviceIcons[service.value] || Building2;
            
            return (
              <Link
                key={service.path}
                to={service.path}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-primary text-primary bg-white'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-white/50'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                {service.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default ServiceNavigation;
