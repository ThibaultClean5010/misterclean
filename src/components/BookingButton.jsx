import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const BookingButton = ({ variant = 'default', size = 'default', className = '', children }) => {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={`transition-all duration-200 active:scale-[0.98] ${className}`}
    >
      <a href="https://booking.example.com" target="_blank" rel="noopener noreferrer">
        <Calendar className="mr-2 h-4 w-4" />
        {children || 'Book Now'}
      </a>
    </Button>
  );
};

export default BookingButton;