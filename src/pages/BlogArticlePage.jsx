import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogImage from '@/components/BlogImage.jsx';
import { getBlogPostBySlug } from '@/data/blogPosts.js';
import { readingTime, formatBlogDate, relatedArticles, articleSchema } from '@/lib/blog.js';
import NotFound from '@/components/NotFound.jsx';

export default function BlogArticlePage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  if (!post) return <NotFound />;
  const related = relatedArticles(post);
  return <>
    <Helmet><script type="application/ld+json">{JSON.stringify(articleSchema(post))}</script></Helmet>
    <article>
      <section className="pt-28 md:pt-36 pb-14 bg-brand-ink border-b-2 border-brand-lime text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-lime py-3 mb-5"><ArrowLeft className="w-4 h-4" />Back to the blog</Link>
          <p className="text-sm text-brand-lime font-semibold mb-4">{post.category}</p>
          <h1 className="mb-5">{post.title}</h1>
          <p className="text-base text-slate-200 mb-6">By <Link to="/about" className="underline">MisterClean</Link> · <time dateTime={post.date}>{formatBlogDate(post.date)}</time> · {readingTime(post)}</p>
          {post.modified && <p className="text-sm text-slate-200 mb-5">Updated <time dateTime={post.modified}>{formatBlogDate(post.modified)}</time></p>}
          <p className="text-lg text-slate-200">{post.intro}</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <figure><BlogImage post={post} sizes="(min-width: 1024px) 850px, 100vw" priority className="w-full max-h-[480px] object-cover rounded-md border border-slate-200" />{post.imageCaption && <figcaption className="text-sm text-slate-500 mt-3">{post.imageCaption}</figcaption>}</figure>
      </div>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="In this article" className="border-y border-slate-200 py-5 mb-10"><p className="font-semibold mb-3">In this article</p><ol className="space-y-2">{post.sections.map((section, index) => <li key={section.heading}><a className="text-primary underline underline-offset-2 py-1 inline-block" href={'#section-' + (index + 1)}>{section.heading}</a></li>)}</ol></nav>
          {post.sections.map((section, index) => <section id={'section-' + (index + 1)} key={section.heading} className="mb-10 scroll-mt-24">
            <h2 className="text-2xl mb-5">{section.heading}</h2>
            {section.body.map(paragraph => <p key={paragraph} className="text-lg text-slate-700 mb-5">{paragraph}</p>)}
            {section.bullets && <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700 mb-5">{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
            {section.links?.map(link => <Link key={link.path} to={link.path} className="block text-primary underline font-semibold py-3">{link.text}</Link>)}
          </section>)}
          <div className="mt-12 p-6 sm:p-8 rounded-md bg-white border border-slate-200">
            <h2 className="text-2xl mb-4">Need a hand with the cleaning?</h2><p className="text-slate-600 mb-6">We clean offices, shops and business premises in Adelaide. Tell us what you need done and we’ll discuss a quote.</p>
            <div className="flex flex-wrap gap-3"><Button asChild className="h-auto min-h-11 whitespace-normal text-center"><Link to={post.cta.path}>{post.cta.text}</Link></Button><Button asChild variant="outline"><Link to="/contact">Get a quote</Link></Button></div>
          </div>
        </div>
      </section>
    </article>
    <section className="py-12 md:py-16 bg-white border-t border-slate-200"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8"><h2>More cleaning advice</h2><Link to="/blog" className="inline-flex items-center gap-2 py-3 text-primary font-semibold">All articles <ArrowRight className="w-4 h-4" /></Link></div>
      <div className="grid md:grid-cols-3 gap-6">{related.map(item => <Link key={item.slug} to={'/blog/' + item.slug} className="blog-card p-6"><p className="text-sm text-primary mb-3">{item.category}</p><h3 className="text-xl mb-3">{item.title}</h3><p className="text-slate-600 text-sm">{item.excerpt}</p></Link>)}</div>
    </div></section>
  </>;
}
