import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogImage from '@/components/BlogImage.jsx';
import { blogPosts } from '@/data/blogPosts.js';
import { SITE_URL } from '@/data/site.js';
import { readingTime, formatBlogDate, articleSchema } from '@/lib/blog.js';

export default function BlogPage() {
  const [featured, ...others] = blogPosts;
  const schema = { '@context': 'https://schema.org', '@type': 'Blog', '@id': SITE_URL + '/blog#blog', name: 'MisterClean Cleaning Blog', description: 'Cleaning advice for Adelaide business premises.', url: SITE_URL + '/blog', publisher: { '@id': SITE_URL + '/#business' }, blogPost: blogPosts.map(post => { const { '@context': _context, ...article } = articleSchema(post); return article; }) };
  return <>
    <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
    <section className="pt-28 md:pt-36 pb-12 bg-brand-ink border-b-2 border-brand-lime text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-sm text-brand-lime font-semibold mb-4">Cleaning advice from MisterClean</p><h1 className="mb-5">Cleaning blog for Adelaide businesses</h1><p className="text-lg text-slate-200">Practical answers about windows, workplace cleaning, deep cleans and getting a quote. Start with the job you’re planning.</p></div>
    </section>
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="grid lg:grid-cols-2 bg-white border border-slate-200 rounded-md overflow-hidden mb-10">
          <Link to={'/blog/' + featured.slug} className="block"><BlogImage post={featured} priority sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-full min-h-64 max-h-[480px] object-cover" /></Link>
          <div className="p-6 sm:p-8 flex flex-col justify-center"><p className="text-primary text-sm font-semibold mb-3">{featured.category}</p><h2 className="text-2xl md:text-3xl mb-5"><Link to={'/blog/' + featured.slug}>{featured.title}</Link></h2><p className="text-slate-600 mb-5">{featured.excerpt}</p><p className="text-sm text-slate-500 mb-6"><time dateTime={featured.date}>{formatBlogDate(featured.date)}</time> · {readingTime(featured)}</p><Button asChild className="w-fit"><Link to={'/blog/' + featured.slug}>Read article <ArrowRight className="w-4 h-4" /></Link></Button></div>
        </article>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{others.map(post => <article key={post.slug} className="blog-card">
          <Link to={'/blog/' + post.slug} className="block"><BlogImage post={post} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="w-full aspect-[4/3] object-cover" /></Link>
          <div className="p-5 flex-1 flex flex-col"><p className="text-sm text-primary mb-3">{post.category}</p><h2 className="text-xl mb-4"><Link to={'/blog/' + post.slug}>{post.title}</Link></h2><p className="text-sm text-slate-600 mb-5 flex-1">{post.excerpt}</p><p className="text-xs text-slate-500"><time dateTime={post.date}>{formatBlogDate(post.date)}</time> · {readingTime(post)}</p><Link to={'/blog/' + post.slug} className="text-primary font-semibold py-3 mt-2">Read article</Link></div>
        </article>)}</div>
      </div>
    </section>
  </>;
}
