import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { getPageMetadata, SITE_URL, LOGO, CONTACT_EMAIL } from '@/data/site.js';
const business = {
  '@type': 'LocalBusiness', '@id': SITE_URL + '/#business', name: 'MisterClean', url: SITE_URL + '/',
  logo: SITE_URL + LOGO, image: SITE_URL + LOGO, telephone: '+61474597325', email: CONTACT_EMAIL,
  areaServed: { '@type': 'City', name: 'Adelaide', containedInPlace: { '@type': 'AdministrativeArea', name: 'South Australia' } }
};
export default function PageSEO() {
  const { pathname } = useLocation();
  const meta = getPageMetadata(pathname);
  const url = SITE_URL + meta.path;
  const image = meta.image ? new URL(meta.image, SITE_URL).href : SITE_URL + LOGO;
  const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' }];
  if (meta.path.startsWith('/services/')) crumbs.push({ '@type': 'ListItem', position: 2, name: 'Services', item: SITE_URL + '/services' });
  if (meta.path.startsWith('/blog/')) crumbs.push({ '@type': 'ListItem', position: 2, name: 'Cleaning Guides', item: SITE_URL + '/blog' });
  if (meta.path !== '/') crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: meta.name, item: url });
  const graph = [business];
  if (!meta.noindex && crumbs.length > 1) graph.push({ '@type': 'BreadcrumbList', itemListElement: crumbs });
  if (!meta.noindex && meta.path.startsWith('/services/')) graph.push({ '@type': 'Service', '@id': url + '#service', name: meta.name, description: meta.description, url, provider: { '@id': business['@id'] }, areaServed: 'Adelaide, South Australia' });
  return <Helmet htmlAttributes={{ lang: 'en-AU' }}>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <meta name="robots" content={meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
    {!meta.noindex && <link rel="canonical" href={url} />}
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content="MisterClean" />
    <meta property="og:locale" content="en_AU" />
    <meta property="og:type" content={meta.type || 'website'} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content={meta.image ? 'summary_large_image' : 'summary'} />
    <meta name="twitter:title" content={meta.title} />
    <meta name="twitter:description" content={meta.description} />
    <meta name="twitter:image" content={image} />
    {!meta.noindex && <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>}
  </Helmet>;
}
