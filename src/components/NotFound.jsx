import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
export default function NotFound() {
  return <section className="pt-36 pb-24 min-h-[65vh] px-4 text-center">
    <p className="text-primary font-semibold mb-3 mx-auto">404</p>
    <h1 className="mb-6">Page not found</h1>
    <p className="text-muted-foreground mb-8 mx-auto">This page may have moved or is no longer available.</p>
    <div className="flex flex-wrap justify-center gap-4">
      <Button asChild><Link to="/services">Explore our services</Link></Button>
      <Button asChild variant="outline"><Link to="/contact">Contact MisterClean</Link></Button>
    </div>
  </section>;
}
