import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="https://horizons-cdn.hostinger.com/dcd817cd-3e58-4158-995e-355bc699404e/42334757fd18ee0cc70f9bfefea459f0.png" 
                alt="MisterClean Services logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Adelaide's premier commercial and B2B cleaning specialists. Delivering immaculate environments for businesses across South Australia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm hover:text-white transition-colors">Home</Link>
              <Link to="/services" className="text-sm hover:text-white transition-colors">Our Services</Link>
              <Link to="/blog" className="text-sm hover:text-white transition-colors">Cleaning Blog</Link>
              <Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Services</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/services/commercial-cleaning" className="text-sm hover:text-white transition-colors">Commercial Cleaning</Link>
              <Link to="/services/hospital-clinic-cleaning" className="text-sm hover:text-white transition-colors">Hospital/Clinic Cleaning</Link>
              <Link to="/services/after-builders-cleaning" className="text-sm hover:text-white transition-colors">After Builders Cleaning</Link>
              <Link to="/services/heavy-duty-cleaning" className="text-sm hover:text-white transition-colors">Heavy Duty Cleaning</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:0474597325" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-primary" /> <span>0474 597 325</span>
              </a>
              <a href="mailto:mistercleanadelaide@gmail.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-primary" /> <span>mistercleanadelaide@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> <span>Adelaide, South Australia</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" /> <span>Mon-Sun: 24/7 Operations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {currentYear} MisterClean Services. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
