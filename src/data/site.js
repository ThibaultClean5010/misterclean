import { blogPosts } from './blogPosts.js';
export const SITE_URL = 'https://www.mistercleanb2b.com';
export const CONTACT_EMAIL = 'mistercleanadelaide@gmail.com';
export const PHONE = '0474 597 325';
export const PHONE_HREF = 'tel:+61474597325';
export const LOGO = '/images/misterclean-logo.png';
export const serviceOptions = [
  { value: 'commercial', label: 'Commercial Cleaning', path: '/services/commercial-cleaning' },
  { value: 'after-builders', label: 'After Builders Cleaning', path: '/services/after-builders-cleaning' },
  { value: 'window-cleaning', label: 'Window Cleaning', path: '/services/window-cleaning' },
  { value: 'commercial-deep-cleaning', label: 'Commercial Deep Cleaning', path: '/services/commercial-deep-cleaning' },
  { value: 'office', label: 'Office Cleaning', path: '/services/office-cleaning' },
  { value: 'retail', label: 'Retail Cleaning', path: '/services/retail-cleaning' },
  { value: 'restaurant', label: 'Restaurant Cleaning', path: '/services/restaurant-cleaning' }
];
export const pageCatalog = {
  '/': { title: 'Commercial Cleaning Adelaide | MisterClean', description: 'Commercial, window, after-builders and deep cleaning for Adelaide businesses. Request a quote for a one-off clean or a regular cleaning plan.', name: 'Home' },
  '/services': { title: 'Cleaning Services Adelaide | MisterClean', description: 'Find cleaning for your Adelaide business: offices, shops, windows, after-builders cleans and complete premises deep cleaning. Explore our services.', name: 'Services' },
  '/services/commercial-cleaning': { title: 'Commercial Cleaning Adelaide | Offices & Shops | MisterClean', description: 'Commercial cleaning for Adelaide offices, shops and business premises. Discuss the tasks, frequency and cleaning times that suit your workplace.', name: 'Commercial Cleaning' },
  '/services/after-builders-cleaning': { title: 'After Builders Cleaning Adelaide | MisterClean', description: 'Post-construction and after-builders cleaning in Adelaide. Arrange dust removal, surface detailing and a final clean for your property handover.', name: 'After Builders Cleaning' },
  '/services/window-cleaning': { title: 'Commercial Window Cleaning Adelaide | MisterClean', description: 'One-off and recurring window cleaning in Adelaide. Internal and external glass, shopfronts and hard-to-reach windows assessed before quoting.', name: 'Window Cleaning', image: '/images/commercial-windows.jpg' },
  '/services/commercial-deep-cleaning': { title: 'Commercial Deep Cleaning Adelaide | MisterClean', description: 'Give your Adelaide premises a complete refresh. Deep cleaning for workspaces, kitchens, bathrooms, floors and shared areas, with an agreed scope.', name: 'Commercial Deep Cleaning' },
  '/services/office-cleaning': { title: 'Office Cleaning Adelaide | Regular & One-off | MisterClean', description: 'Office cleaning in Adelaide for workstations, meeting rooms, kitchens and amenities. Request a regular schedule or a one-off workplace clean.', name: 'Office Cleaning' },
  '/services/retail-cleaning': { title: 'Retail & Shop Cleaning Adelaide | MisterClean', description: 'Retail cleaning for Adelaide shops and showrooms. Keep entrances, floors, fitting rooms and customer areas presentable with an agreed cleaning plan.', name: 'Retail Cleaning' },
  '/services/restaurant-cleaning': { title: 'Restaurant Cleaning Adelaide | MisterClean', description: 'Cleaning for Adelaide restaurant dining areas, amenities and shared surfaces. Discuss your premises, opening hours and required cleaning tasks.', name: 'Restaurant Cleaning' },
  '/about': { title: 'About MisterClean | Adelaide Commercial Cleaning', description: 'Learn about MisterClean’s commercial cleaning services in Adelaide: an agreed scope, practical scheduling and direct contact for your business.', name: 'About MisterClean' },
  '/contact': { title: 'Request a Cleaning Quote Adelaide | MisterClean', description: 'Request a quote for commercial, window, after-builders or deep cleaning in Adelaide. Tell us about your business, suburb and cleaning requirements.', name: 'Request a Quote' },
  '/blog': { title: 'Adelaide Commercial Cleaning Guides | MisterClean', description: 'Practical cleaning checklists and guides for Adelaide offices, shops, restaurants and commercial premises, including after-builders and deep cleaning.', name: 'Cleaning Guides' },
  '/privacy': { title: 'Privacy Information | MisterClean', description: 'How enquiries and website information are handled when you contact MisterClean about commercial cleaning in Adelaide.', name: 'Privacy Information' }
};
export function getPageMetadata(pathname) {
  const path = pathname.replace(/\/$/, '') || '/';
  if (pageCatalog[path]) return { ...pageCatalog[path], path };
  const post = blogPosts.find(item => '/blog/' + item.slug === path);
  if (post) return { title: post.title + ' | MisterClean', name: post.title, description: post.excerpt, image: post.image, path, type: 'article', date: post.date };
  return { title: 'Page Not Found | MisterClean', name: 'Page Not Found', description: 'This page is no longer available. Explore our cleaning services or contact us for a quote.', path, noindex: true };
}
export const publicPaths = [...Object.keys(pageCatalog), ...blogPosts.map(post => '/blog/' + post.slug)];
