import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_EMAIL, PHONE, PHONE_HREF } from '@/data/site.js';
import { trackEnquiry } from '@/lib/quote.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink border-t border-brand-cyan/30 text-slate-300 pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <p className="text-sm leading-relaxed">
              Commercial, window, after-builders and deep cleaning for Adelaide businesses. One-off visits and regular cleaning plans.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white  mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm hover:text-brand-lime transition-colors">Home</Link>
              <Link to="/services" className="text-sm hover:text-brand-lime transition-colors">Our Services</Link>
              <Link to="/projects" className="text-sm hover:text-brand-lime transition-colors">Our Work</Link>
              <Link to="/blog" className="text-sm hover:text-brand-lime transition-colors">Cleaning Blog</Link>
              <Link to="/about" className="text-sm hover:text-brand-lime transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm hover:text-brand-lime transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white  mb-6">Services</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/services/commercial-cleaning" className="text-sm hover:text-brand-lime transition-colors">Commercial Cleaning</Link>
              <Link to="/services/window-cleaning" className="text-sm hover:text-brand-lime transition-colors">Window Cleaning</Link>
              <Link to="/services/after-builders-cleaning" className="text-sm hover:text-brand-lime transition-colors">After Builders Cleaning</Link>
              <Link to="/services/commercial-deep-cleaning" className="text-sm hover:text-brand-lime transition-colors">Commercial Deep Cleaning</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white  mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a href={PHONE_HREF} onClick={() => trackEnquiry('phone_click')} className="flex items-center gap-3 text-sm hover:text-brand-lime transition-colors">
                <Phone className="h-4 w-4 text-brand-cyan shrink-0" /> <span>{PHONE}</span>
              </a>
              <a href={'mailto:' + CONTACT_EMAIL} onClick={() => trackEnquiry('email_click')} className="flex items-center gap-3 text-sm hover:text-brand-lime transition-colors">
                <Mail className="h-4 w-4 text-brand-cyan shrink-0" /> <span className="break-all">{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-brand-cyan mt-0.5 shrink-0" /> <span>Adelaide, South Australia</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="h-4 w-4 text-brand-cyan mt-0.5 shrink-0" /> <span>Cleaning times arranged with you</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {currentYear} MisterClean Services. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="hover:text-brand-lime transition-colors">Privacy information</Link>
            <Link to="/contact#how-it-works" className="hover:text-brand-lime transition-colors">How to request a quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
