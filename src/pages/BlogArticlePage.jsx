import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts.js';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <section className="pt-32 pb-24 min-h-[60vh] bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Article not found</h1>
          <p className="text-muted-foreground mb-8 mx-auto">The cleaning article you are looking for may have moved.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </section>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'MisterClean'
    },
    publisher: {
      '@type': 'LocalBusiness',
      name: 'MisterClean',
      telephone: '0474597325',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Adelaide',
        addressRegion: 'SA',
        addressCountry: 'AU'
      }
    },
    mainEntityOfPage: `https://misterclean.com.au/blog/${post.slug}`,
    keywords: post.keywords.join(', ')
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | MisterClean Adelaide</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <link rel="canonical" href={`https://misterclean.com.au/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <article>
        <section className="pt-32 pb-16 bg-slate-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-8 text-white hover:bg-white/10 hover:text-white px-0">
              <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
            </Button>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300 mb-6">
              <span className="inline-flex items-center gap-2 text-primary font-semibold"><Tag className="h-4 w-4" /> {post.category}</span>
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {post.date}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
            <h1 className="mb-6">{post.title}</h1>
            <p className="text-xl text-slate-300">{post.intro}</p>
          </div>
        </section>

        <div className="bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="-mt-10 rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white">
              <img src={post.image} alt={post.imageAlt} className="h-[280px] md:h-[440px] w-full object-cover" />
            </div>
          </div>
        </div>

        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              {post.sections.map((section) => (
                <section key={section.heading} className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-5">{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-lg text-slate-700 mb-5">{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-14 p-8 rounded-2xl bg-primary/5 border border-primary/10">
              <h2 className="text-2xl font-bold mb-4">Need professional cleaning support in Adelaide?</h2>
              <p className="text-slate-700 mb-6">
                MisterClean helps Adelaide businesses maintain cleaner, safer, and more presentable commercial spaces with tailored cleaning plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link to={post.cta.path}>{post.cta.text}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>

      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-3">More Cleaning Guides</h2>
              <p className="text-muted-foreground">Keep improving your cleaning standards with practical advice for commercial facilities.</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:inline-flex text-primary hover:text-primary">
              <Link to="/blog">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="blog-card p-6">
                <span className="text-xs font-bold uppercase tracking-wide text-primary mb-3">{relatedPost.category}</span>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{relatedPost.title}</h3>
                <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArticlePage;
