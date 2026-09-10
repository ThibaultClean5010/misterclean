import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { serviceOptions, LOGO, PHONE, PHONE_HREF } from '@/data/site.js';
import { trackEnquiry } from '@/lib/quote.js';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const pages = [['Home', '/'], ['Our Work', '/projects'], ['About', '/about'], ['Contact', '/contact']];
  return <header className="header-wrapper">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 md:h-20 items-center justify-between gap-4">
      <Link to="/" aria-label="MisterClean home" className="shrink-0"><img src={LOGO} alt="MisterClean" width="128" height="56" className="w-28 md:w-32 h-12 object-contain" /></Link>
      <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
        <Link to="/" className="header-nav-link" aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="header-nav-link inline-flex items-center gap-1 py-3">Services <ChevronDown className="h-4 w-4" /></DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            <DropdownMenuItem asChild><Link to="/services">All cleaning services</Link></DropdownMenuItem>
            {serviceOptions.map(item => <DropdownMenuItem key={item.path} asChild><Link to={item.path}>{item.label}</Link></DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>
        {pages.slice(1).map(([label, href]) => <Link key={href} to={href} className="header-nav-link" aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}
      </nav>
      <div className="hidden lg:flex items-center gap-4">
        <a href={PHONE_HREF} onClick={() => trackEnquiry('phone_click')} className="header-phone-link"><Phone className="h-4 w-4" />{PHONE}</a>
        <Link to="/contact" className="rounded-lg bg-primary text-white px-4 py-3 text-sm font-semibold">Get a quote</Link>
      </div>
      <div className="flex lg:hidden items-center gap-2">
        <a href={PHONE_HREF} onClick={() => trackEnquiry('phone_click')} className="inline-flex items-center gap-2 p-3 text-primary font-semibold" aria-label={'Call MisterClean on ' + PHONE}><Phone className="h-5 w-5" /><span>Call</span></a>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild><button aria-label="Open navigation menu" className="p-3 rounded-lg hover:bg-slate-100"><Menu className="h-6 w-6" /></button></SheetTrigger>
          <SheetContent side="right" className="w-[min(90vw,380px)] overflow-y-auto bg-white">
            <SheetTitle>Explore MisterClean</SheetTitle>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 pt-5">
              <Link to="/" onClick={() => setIsOpen(false)} className="header-nav-link-mobile">Home</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="header-nav-link-mobile">All services</Link>
              <div className="pl-4 border-l-2 border-primary/20">
                {serviceOptions.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="block py-3 text-base hover:text-primary">{item.label}</Link>)}
              </div>
              {pages.slice(1).map(([label, href]) => <Link key={href} to={href} onClick={() => setIsOpen(false)} className="header-nav-link-mobile">{label}</Link>)}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-5 rounded-lg bg-primary text-white p-3 text-center font-semibold">Get a quote</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>;
}
