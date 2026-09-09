import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMetadata, SITE_URL } from '@/data/site.js';

const analyticsId = 'G-JRM3569S3G';
const adsId = 'AW-17867444680';

export default function Analytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', analyticsId, { send_page_view: false });
      window.gtag('config', adsId, { send_page_view: false });
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + analyticsId;
      document.head.appendChild(script);
    }
    const page = getPageMetadata(pathname);
    window.gtag('event', 'page_view', {
      send_to: analyticsId,
      page_title: page.title,
      page_location: SITE_URL + page.path
    });
  }, [pathname]);
  return null;
}
