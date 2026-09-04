import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts.js';

const BlogPage = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'MisterClean Cleaning Blog',
    description: 'Commercial cleaning advice, checklists, and hygiene guides for Adelaide businesses.',
    url: 'https://misterclean.com.au/blog',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'MisterClean'
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://misterclean.com.au/blog/${post.slug}`,
      datePublished: post.date,
      image: post.image
    }))
  };

  return (
    <>
      <Helmet>
        <title>Cleaning Blog Adelaide | Commercial Cleaning Tips | MisterClean</title>
        <meta
          name="description"
          content="Read MisterClean's commercial cleaning blog for Adelaide office cleaning checklists, after-builders cleaning advice, medical cleaning tips, and deep cleaning guidance."
        />
        <link rel="canonical" href="https://misterclean.com.au/blog" />
        <script type="application/ld+json">{JSON.stringify(blogJsonLd)}</script>
      </Helmet>

      <section className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img
            src="https://images.unsplash.com/photo-1649665839727-f4e9cf1f2a82"
            alt="Clean commercial office used as a blog header"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide mb-8">
              <Sparkles className="h-4 w-4" />
              Cleaning Advice for Adelaide Businesses
            </div>
            <h1 className="mb-6">Commercial Cleaning Blog</h1>
            <p className="text-lg md:text-xl text-slate-300">
              Practical cleaning guides, maintenance checklists, and hygiene insights for offices, clinics, retailers, restaurants, builders, and commercial facilities across Adelaide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden mb-14"
          >
            <Link to={`/blog/${featuredPost.slug}`} className="block min-h-[320px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.imageAlt}
                className="h-full w-full object-cover"
              />
            </Link>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-sm font-bold uppercase tracking-wide text-primary mb-4">{featuredPost.category}</span>
              <Link to={`/blog/${featuredPost.slug}`} className="group">
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{featuredPost.title}</h2>
              </Link>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-8">
                <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {featuredPost.date}</span>
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {featuredPost.readTime}</span>
              </div>
              <Button asChild className="w-fit">
                <Link to={`/blog/${featuredPost.slug}`}>
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.article>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="blog-card"
              >
                <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-primary mb-3">{post.category}</span>
                  <Link to={`/blog/${post.slug}`} className="group">
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-5 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between gap-4 text-xs text-slate-500 pt-5 border-t border-slate-100">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
