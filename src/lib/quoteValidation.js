import { serviceOptions, resolveService } from '../data/site.js';
import { cleaningPlans, windowAccessOptions } from '../data/cleaningExperience.js';

const limits = { name: 100, suburb: 100, business: 120, email: 160, phone: 40, details: 1200, service: 40, plan: 20, access: 30 };
export function validateQuote(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { error: 'Please check your enquiry details.' };
  const values = {};
  for (const [field, limit] of Object.entries(limits)) {
    if (input[field] !== undefined && typeof input[field] !== 'string') return { field, error: 'Please check this field.' };
    values[field] = (input[field] || '').trim();
    if (values[field].length > limit) return { field, error: `Please keep this field under ${limit} characters.` };
    if (field !== 'details' && /[\r\n\x00]/.test(values[field])) return { field, error: 'Please enter this detail on one line.' };
  }
  for (const field of ['name', 'suburb']) if (!values[field]) return { field, error: `Please enter your ${field}.` };
  if (!values.email && !values.phone) return { field: 'email', error: 'Please provide an email address or phone number so we can reply.' };
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return { field: 'email', error: 'Please enter a valid email address.' };
  if (values.phone && (!/^[+()\d .-]+$/.test(values.phone) || !/^\d{7,15}$/.test(values.phone.replace(/\D/g, '')))) return { field: 'phone', error: 'Please enter a valid phone number.' };
  values.service = resolveService(values.service);
  if (!serviceOptions.some(item => item.value === values.service)) return { field: 'service', error: 'Please choose a cleaning service.' };
  if (!cleaningPlans.some(item => item.value === values.plan)) return { field: 'plan', error: 'Please choose a cleaning frequency.' };
  if (values.service === 'window-cleaning' && !windowAccessOptions.some(item => item.value === values.access)) return { field: 'access', error: 'Please choose the window access.' };
  if (values.service !== 'window-cleaning') values.access = '';
  return { values };
}
