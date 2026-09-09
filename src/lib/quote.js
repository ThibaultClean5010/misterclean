import { CONTACT_EMAIL, serviceOptions } from '../data/site.js';
export function quoteEmail(input) {
  const values = Object.fromEntries(Object.entries(input).map(([key, value]) => [key, String(value ?? '').trim()]));
  const service = serviceOptions.find(item => item.value === values.service)?.label || 'Cleaning enquiry';
  const subject = service + ' quote - ' + values.business.replace(/[\r\n]+/g, ' ');
  const body = [
    'Hello MisterClean,', '', 'I would like a quote for ' + service.toLowerCase() + '.', '',
    'Name: ' + values.name, 'Business: ' + values.business, 'Email: ' + values.email,
    'Phone: ' + (values.phone || 'Not provided'), 'Suburb: ' + values.suburb,
    '', 'Requirements:', values.details || 'Please contact me to discuss the premises.'
  ].join('\n');
  return { subject, body, href: 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body) };
}
export function trackEnquiry(action, service) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, { event_category: 'enquiry', service: service || 'general' });
  }
}
