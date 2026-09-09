import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceExplorer from '@/components/ServiceExplorer.jsx';
import CleaningPhoto from '@/components/CleaningPhoto.jsx';
import Reveal from '@/components/Reveal.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';
import QuoteProcess from '@/components/QuoteProcess.jsx';
import CleaningFAQ from '@/components/CleaningFAQ.jsx';
import { blogPosts } from '@/data/blogPosts.js';
import { PHONE_HREF } from '@/data/site.js';
import { trackEnquiry } from '@/lib/quote.js';
export default function HomePage() {
  return <>
    <section className="relative bg-slate-950 text-white pt-16 md:pt-20 overflow-hidden">
      <div className="absolute inset-0"><CleaningPhoto photo="workplace" priority className="w-full h-full object-cover" /><div className="absolute inset-0 bg-slate-950/65 lg:bg-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/80 lg:to-slate-950/10" /></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-200 mb-5">Cleaning for Adelaide businesses</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5">Commercial cleaning in Adelaide</h1>
          <p className="text-lg md:text-xl text-slate-200 mb-7">One-off and regular cleaning for workplaces, shops and commercial premises. From everyday upkeep to windows, after-builders cleans and complete deep cleaning.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 px-6"><Link to="/contact">Request a Quote</Link></Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 bg-transparent border-white/50 text-white hover:bg-white/10 hover:text-white"><a href={PHONE_HREF} onClick={() => trackEnquiry('phone_click')}><Phone className="h-4 w-4 mr-2" />Call us</a></Button>
          </div>
          <p className="mt-5 text-sm text-slate-300">Scope, access and timing agreed before you book.</p><a href="#find-your-clean" className="inline-flex items-center gap-2 text-teal-200 hover:text-white font-semibold py-3 mt-2">Help me choose a clean <ArrowDown className="w-4 h-4" /></a>
        </div>
      </div>
    </section>
    <CertificationsSection />
    <Reveal><ServiceExplorer /></Reveal>
    <Reveal><QuoteProcess /></Reveal>
    <Reveal><CleaningFAQ /></Reveal>
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
