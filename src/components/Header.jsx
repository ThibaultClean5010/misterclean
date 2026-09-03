import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith('/services');

  const serviceLinks = [
    { name: 'Commercial Cleaning', path: '/services/commercial-cleaning' },
    { name: 'After Builders Cleaning', path: '/services/after-builders-cleaning' },
    { name: 'Hospital/Clinic Cleaning', path: '/services/hospital-clinic-cleaning' },
    { name: 'Heavy Duty Cleaning', path: '/services/heavy-duty-cleaning' },
  ];

  return (
    <header className="header-wrapper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <img 
              src="https://horizons-cdn.hostinger.com/dcd817cd-3e58-4158-995e-355bc699404e/42334757fd18ee0cc70f9bfefea459f0.png" 
              alt="MisterClean Services logo" 
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="header-nav-link">Home</Link>
            <div className="relative group">
              <button className={`flex items-center gap-1 py-2 ${isServicesActive ? 'header-nav-link underline underline-offset-4 decoration-2' : 'header-nav-link'}`}>
                Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                  {serviceLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className="header-nav-link">About</Link>
            <Link to="/contact" className="header-nav-link">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a href="tel:0474597325" className="header-phone-link">
              <Phone className="h-4 w-4" /> 0474 597 325
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">Get Free Quote</Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button aria-label="Open menu" className="p-2 text-slate-700 hover:bg-slate-100 rounded-md">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto bg-white border-l">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-8 mt-6">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img src="https://horizons-cdn.hostinger.com/dcd817cd-3e58-4158-995e-355bc699404e/42334757fd18ee0cc70f9bfefea459f0.png" alt="MisterClean Services logo" className="h-8 w-auto" />
                </Link>
                <nav className="flex flex-col gap-2">
                  <Link to="/" onClick={() => setIsOpen(false)} className="header-nav-link-mobile">Home</Link>
                  <div className="py-2">
                    <span className="block py-2 text-lg font-semibold text-foreground">Services</span>
                    <div className="flex flex-col gap-1 pl-4 mt-2 border-l-2 border-primary/20">
                      {serviceLinks.map((link) => (
                        <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium text-slate-600 hover:text-primary transition-colors">
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="header-nav-link-mobile">About</Link>
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="header-nav-link-mobile">Contact</Link>
                </nav>
                <div className="flex flex-col gap-4 mt-2 pt-6 border-t border-slate-100">
                  <a href="tel:0474597325" className="flex items-center gap-2 text-lg font-bold text-primary hover:text-primary/80 transition-colors">
                    <Phone className="h-5 w-5" /> 0474 597 325
                  </a>
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">Get Free Quote</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;