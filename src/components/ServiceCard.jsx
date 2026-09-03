import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServiceCard = ({ title, description, image, benefits, link = '/services' }) => {
  return (
    <Card className="group overflow-hidden rounded-2xl border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <img 
          src={image} 
          alt={`${title} service`} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>
        
        {benefits && (
          <ul className="space-y-2 mb-6">
            {benefits.slice(0, 3).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Link 
          to={link} 
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto"
        >
          Explore Service <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;