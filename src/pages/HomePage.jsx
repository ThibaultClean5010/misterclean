import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';
import QuoteProcess from '@/components/QuoteProcess.jsx';
import CleaningFAQ from '@/components/CleaningFAQ.jsx';
import { blogPosts } from '@/data/blogPosts.js';
import { PHONE_HREF } from '@/data/site.js';
import { trackEnquiry } from '@/lib/quote.js';
const services = [
  { title: 'Commercial Cleaning', description: 'Regular upkeep for offices, shops and business premises, with tasks and times agreed around your workplace.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=640&q=75', benefits: ['One-off and regular visits', 'Workspaces and shared areas', 'Cleaning times agreed with you'], link: '/services/commercial-cleaning' },
  { title: 'After Builders Cleaning', description: 'A detailed clean after construction or renovation to prepare your premises for handover.', image: 'https://horizons-cdn.hostinger.com/dcd817cd-3e58-4158-995e-355bc699404e/90499e1e10edc56f55909756253aae91.jpg', benefits: ['Dust and surface detailing', 'Windows, frames and tracks', 'Final handover clean'], link: '/services/after-builders-cleaning' },
  { title: 'Window Cleaning', description: 'Internal and external glass for your business, with one-off visits, regular schedules and access assessments.', image: '/images/window-cleaning.jpg', benefits: ['One-off window cleans', 'Regular cleaning schedules', 'Hard-to-reach windows assessed'], link: '/services/window-cleaning' },
  { title: 'Commercial Deep Cleaning', description: 'A thorough premises refresh that reaches the areas everyday cleaning can miss.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=640&q=75', benefits: ['Complete premises refresh', 'Kitchens, bathrooms and shared spaces', 'One-off and periodic deep cleans'], link: '/services/commercial-deep-cleaning' }
];
export default function HomePage() {
  return <>
    <section className="relative bg-slate-950 text-white pt-16 md:pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-30"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80" alt="Office desks and meeting areas in a commercial workplace" width="1600" height="900" fetchpriority="high" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" /></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-200 mb-5">Cleaning for Adelaide businesses</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5">Commercial cleaning in Adelaide</h1>
          <p className="text-lg md:text-xl text-slate-200 mb-7">One-off and regular cleaning for workplaces, shops and commercial premises. From everyday upkeep to windows, after-builders cleans and complete deep cleaning.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 px-6"><Link to="/contact">Request a Quote</Link></Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 bg-transparent border-white/50 text-white hover:bg-white/10 hover:text-white"><a href={PHONE_HREF} onClick={() => trackEnquiry('phone_click')}><Phone className="h-4 w-4 mr-2" />Call us</a></Button>
          </div>
          <p className="mt-5 text-sm text-slate-300">Scope, access and timing agreed before you book.</p>
        </div>
      </div>
    </section>
    <CertificationsSection />
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10"><div><h2 className="mb-4">Cleaning for your business</h2><p className="text-lg text-muted-foreground">Find the service that suits your premises, from everyday upkeep to a thorough refresh.</p></div><Link to="/services" className="text-primary font-semibold inline-flex items-center gap-2 py-3">All services <ArrowRight className="h-4 w-4" /></Link></div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">{services.map(service => <ServiceCard key={service.link} {...service} />)}</div>
        <p className="mt-7 text-muted-foreground">Looking for your business type? Explore <Link className="text-primary underline" to="/services/office-cleaning">office cleaning</Link>, <Link className="text-primary underline" to="/services/retail-cleaning">retail cleaning</Link> or <Link className="text-primary underline" to="/services/restaurant-cleaning">restaurant cleaning</Link>.</p>
      </div>
    </section>
    <QuoteProcess />
    <CleaningFAQ />
    <section className="py-14 md:py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-10"><div><h2 className="mb-3">Practical cleaning guides</h2><p className="text-muted-foreground">Checklists and advice for planning your next clean.</p></div><Link to="/blog" className="text-primary font-semibold py-3">All cleaning guides</Link></div>
        <div className="grid md:grid-cols-3 gap-6">{blogPosts.slice(0, 3).map(post => <article key={post.slug} className="blog-card">
          <Link to={'/blog/' + post.slug} className="block aspect-[16/10] overflow-hidden"><img src={post.image} alt={post.imageAlt} width="640" height="400" loading="lazy" decoding="async" className="w-full h-full object-cover" /></Link>
          <div className="p-6"><p className="text-xs font-bold uppercase tracking-wide text-primary">{post.category}</p><h3 className="text-xl my-3"><Link to={'/blog/' + post.slug}>{post.title}</Link></h3><p className="text-sm text-muted-foreground mb-5">{post.excerpt}</p><Link to={'/blog/' + post.slug} className="text-primary font-semibold text-sm">Read guide</Link></div>
        </article>)}</div>
      </div>
    </section>
    <section className="py-14 md:py-20 bg-slate-950 text-white text-center">
      <div className="max-w-3xl mx-auto px-4"><h2 className="mb-5">Tell us what needs cleaning</h2><p className="text-slate-300 text-lg mb-7 mx-auto">Share a few details about your premises. We will discuss the scope, access and suitable cleaning arrangements.</p><Button asChild size="lg"><Link to="/contact">Request a Quote</Link></Button></div>
    </section>
  </>;
}
