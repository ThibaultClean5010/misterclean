import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ client_name, business_type, rating = 5, description, service_type }) => {
  return (
    <Card className="bg-white border border-slate-100 shadow-sm h-full rounded-2xl relative transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <CardContent className="p-8 flex flex-col h-full">
        <Quote className="h-8 w-8 text-primary/10 absolute top-6 right-6" />
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground/30'}`} 
            />
          ))}
        </div>
        <p className="text-slate-700 italic leading-relaxed mb-8 flex-1 text-lg">
          "{description}"
        </p>
        <div className="mt-auto">
          <p className="font-bold text-slate-900">{client_name}</p>
          <p className="text-sm font-medium text-muted-foreground">{business_type}</p>
          {service_type && (
            <span className="inline-block mt-4 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              {service_type}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;