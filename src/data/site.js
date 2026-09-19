import { blogPosts } from './blogPosts.js';
export const SITE_URL = 'https://www.mistercleanb2b.com';
export const RESIDENTIAL_URL = 'https://www.misterclean.com.au/';
export const CONTACT_EMAIL = 'mistercleanadelaide@gmail.com';
export const PHONE = '0474 597 325';
export const PHONE_HREF = 'tel:+61474597325';
export const LOGO = '/images/misterclean-logo.png';
export const serviceOptions = [
  { value: 'commercial', label: 'Regular Cleaning', path: '/services/commercial-cleaning' },
  { value: 'commercial-deep-cleaning', label: 'Deep Cleaning', path: '/services/commercial-deep-cleaning' },
  { value: 'window-cleaning', label: 'Window Cleaning', path: '/services/window-cleaning' },
  { value: 'after-builders', label: 'After Builders Cleaning', path: '/services/after-builders-cleaning' }
];
// Keep saved quote links and older enquiry forms compatible with the four services.
export function resolveService(value) {
  return ['office', 'retail', 'restaurant'].includes(value) ? 'commercial' : value;
}
export const pageCatalog = {
  '/': { title: 'Commercial Cleaning Adelaide | MisterClean', description: 'Commercial, window, after-builders and deep cleaning for Adelaide businesses. Request a quote for a one-off clean or a regular cleaning plan.', name: 'Home', image: '/images/hindmarsh-retail-after-builders.jpg' },
  '/services': { title: 'Cleaning Services Adelaide | MisterClean', description: 'Four cleaning services for Adelaide businesses: regular cleaning, deep cleaning, window cleaning and after-builders cleaning. Find the right clean for your premises.', name: 'Services' },
  '/services/commercial-cleaning': { title: 'Regular Commercial Cleaning Adelaide | MisterClean', description: 'Regular cleaning for Adelaide offices, shops and restaurants. Plan workplace surfaces, floors and amenities around your opening hours and agreed schedule.', name: 'Regular Cleaning' },
  '/services/after-builders-cleaning': { title: 'After Builders Cleaning Adelaide | MisterClean', description: 'Post-construction and after-builders cleaning in Adelaide. Arrange dust removal, surface detailing and a final clean for your property handover.', name: 'After Builders Cleaning' },
  '/services/window-cleaning': { title: 'Commercial Window Cleaning Adelaide | MisterClean', description: 'One-off and recurring window cleaning in Adelaide. Internal and external glass, shopfronts and hard-to-reach windows assessed before quoting.', name: 'Window Cleaning', image: '/images/commercial-windows.jpg' },
  '/services/commercial-deep-cleaning': { title: 'Commercial Deep Cleaning Adelaide | MisterClean', description: 'Give your Adelaide premises a complete refresh. Deep cleaning for workspaces, kitchens, bathrooms, floors and shared areas, with an agreed scope.', name: 'Deep Cleaning' },
  '/projects': { title: 'Cleaning Projects Adelaide | Before & After | MisterClean', description: 'See real MisterClean projects: washroom and café floor before-and-afters, timber floors and a Hindmarsh retail fit-out. Browse our original cleaning photos.', name: 'Our Cleaning Projects', image: '/images/washroom-floor-after-cleaning.jpg' },
  '/about': { title: 'About MisterClean | Adelaide Commercial Cleaning', description: 'Learn about MisterClean’s commercial cleaning services in Adelaide: an agreed scope, practical scheduling and direct contact for your business.', name: 'About MisterClean' },
  '/contact': { title: 'Request a Cleaning Quote Adelaide | MisterClean', description: 'Request a quote for commercial, window, after-builders or deep cleaning in Adelaide. Tell us about your business, suburb and cleaning requirements.', name: 'Request a Quote' },
  '/blog': { title: 'Adelaide Cleaning Blog | Practical Advice | MisterClean', description: 'Practical cleaning checklists and guides for Adelaide offices, shops, restaurants and commercial premises, including after-builders and deep cleaning.', name: 'Cleaning Blog' },
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
