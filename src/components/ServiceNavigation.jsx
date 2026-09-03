import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, HardHat, HeartPulse, AlertTriangle } from 'lucide-react';

const ServiceNavigation = () => {
  const location = useLocation();

  const services = [
    {
      name: 'Commercial Cleaning',
      path: '/services/commercial-cleaning',
      icon: Building2
    },
    {
      name: 'After Builders',
      path: '/services/after-builders-cleaning',
      icon: HardHat
    },
    {
      name: 'Hospital/Clinic',
      path: '/services/hospital-clinic-cleaning',
      icon: HeartPulse
    },
    {
      name: 'Heavy Duty',
      path: '/services/heavy-duty-cleaning',
      icon: AlertTriangle
    }
  ];

  return (
    <div className="w-full bg-slate-50 border-b overflow-x-auto custom-scrollbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-1 sm:justify-center min-w-max">
          {services.map((service) => {
            const isActive = location.pathname === service.path;
            const Icon = service.icon;
            
            return (
              <Link
                key={service.path}
                to={service.path}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-primary text-primary bg-white'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-white/50'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                {service.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default ServiceNavigation;