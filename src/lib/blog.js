import { blogPosts } from '../data/blogPosts.js';
import { SITE_URL, LOGO } from '../data/site.js';

export function readingTime(post) {
  const text = [post.intro, ...post.sections.flatMap(section => [section.heading, ...section.body, ...(section.bullets || [])])].join(' ');
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 220)) + ' min read';
}
export function formatBlogDate(date) {
  return new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(date + 'T12:00:00Z'));
}
export function relatedArticles(post) {
  const preferred = (post.relatedSlugs || []).map(slug => blogPosts.find(item => item.slug === slug)).filter(Boolean);
  return [...new Map([...preferred, ...blogPosts.filter(item => item.category.toLowerCase() === post.category.toLowerCase()), ...blogPosts].filter(item => item.slug !== post.slug).map(item => [item.slug, item])).values()].slice(0, 3);
}
export function articleSchema(post) {
  const url = SITE_URL + '/blog/' + post.slug;
  return {
    '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': url + '#article',
    headline: post.title, description: post.excerpt, image: new URL(post.image, SITE_URL).href,
    datePublished: post.date, ...(post.modified ? { dateModified: post.modified } : {}),
    author: { '@type': 'Organization', name: 'MisterClean', url: SITE_URL + '/about' },
    publisher: { '@type': 'Organization', '@id': SITE_URL + '/#business', name: 'MisterClean', logo: { '@type': 'ImageObject', url: SITE_URL + LOGO } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }, url, inLanguage: 'en-AU', articleSection: post.category
  };
}
