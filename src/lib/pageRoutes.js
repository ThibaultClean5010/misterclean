export const pageRoutes = [
  { path: '/', page: 'HomePage' },
  { path: '/services', page: 'ServicesPage' },
  { path: '/services/after-builders-cleaning', page: 'AfterBuildersCleaningPage' },
  { path: '/services/commercial-cleaning', page: 'CommercialCleaningPage' },
  { path: '/services/window-cleaning', page: 'WindowCleaningPage' },
  { path: '/services/commercial-deep-cleaning', page: 'CommercialDeepCleaningPage' },
  { path: '/blog', page: 'BlogPage' },
  { path: '/blog/:slug', page: 'BlogArticlePage' },
  { path: '/projects', page: 'ProjectsPage' },
  { path: '/about', page: 'AboutPage' },
  { path: '/contact', page: 'ContactPage' },
  { path: '/privacy', page: 'PrivacyPage' },
];

export function pageModuleForPath(pathname) {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const route = pageRoutes.find(item => item.path === normalized)
    || (/^\/blog\/[^/]+$/.test(normalized) && pageRoutes.find(item => item.path === '/blog/:slug'));
  return route ? './pages/' + route.page + '.jsx' : null;
}
