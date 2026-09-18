export const cleaningPhotos = {
  home: { src: '/images/business-foyer-cleaning.jpg', alt: 'Illustrative view of a cleaner mopping the reception floor of a business premises', position: '68% 65%' },
  about: { src: '/images/hindmarsh-retail-counter.jpg', alt: 'Original MisterClean project photo of carpet, display fixtures and a counter in Hindmarsh retail premises', position: 'center', width: 1536, height: 1152 },
  commercial: { src: '/images/hindmarsh-retail-counter.jpg', alt: 'MisterClean project photograph of a retail counter and carpeted shop floor in Hindmarsh', position: 'center', width: 1536, height: 1152, caption: 'A shop fit-out in Hindmarsh, after cleaning.' },
  office: { src: '/images/commercial-workspace.jpg', alt: 'Illustrative view of a professional wiping an office desk', position: '65% center' },
  windows: { src: '/images/commercial-windows.jpg', alt: 'Illustrative view of a professional cleaning large shopfront windows', position: '65% center' },
  builders: { src: '/images/cafe-fitout-kitchen-after.jpg', alt: 'Original MisterClean project photograph of a cleaned kitchen floor during a café fit-out, with appliances still wrapped', position: 'center', width: 1200, height: 900, caption: 'Floor cleaning during a café fit-out. Building work was still in progress.' },
  deep: { src: '/images/commercial-washroom-after-cleaning.jpg', alt: 'Original MisterClean project photograph of a cleaned toilet cubicle with tiled walls and floor', position: '60% center', width: 1200, height: 900, caption: 'A washroom cubicle from one of our cleaning jobs.' },
  retail: { src: '/images/hindmarsh-shopfront-interior.jpg', alt: 'Original MisterClean project photo looking across a carpeted Hindmarsh retail floor towards the glass shopfront', position: 'center', width: 1536, height: 1152, caption: 'One of our retail jobs in Hindmarsh.' },
  restaurant: { src: '/images/restaurant-dining-cleaning.jpg', alt: 'Illustrative view of a cleaner wiping dining tables in a restaurant before opening', position: '68% 65%' }
};

export const servicePhotoKeys = {
  commercial: 'commercial',
  'window-cleaning': 'windows',
  'commercial-deep-cleaning': 'deep',
  'after-builders': 'builders'
};

export const cleaningOffers = [
  { value: 'commercial', title: 'Regular Cleaning', shortTitle: 'Regular Cleaning', photo: servicePhotoKeys.commercial, path: '/services/commercial-cleaning', description: 'Routine cleaning for offices, shops, restaurants and shared business spaces, with visits planned around your opening hours.', benefits: ['Desks, counters and customer areas', 'Kitchens and amenities within the agreed scope', 'Floors and everyday touchpoints'] },
  { value: 'commercial-deep-cleaning', title: 'Deep Cleaning', shortTitle: 'Deep Cleaning', photo: 'deep', path: '/services/commercial-deep-cleaning', description: 'A more detailed clean for built-up dirt and areas that need extra attention.', benefits: ['Floors, edges and corners', 'Kitchens, bathrooms and shared areas', 'Other areas included in your quote'] },
  { value: 'window-cleaning', title: 'Window Cleaning', shortTitle: 'Window Cleaning', photo: 'windows', path: '/services/window-cleaning', description: 'Cleaning for shopfront windows, workplace windows and internal glass.', benefits: ['Internal and external glass', 'Frames, sills and tracks in scope', 'Access assessed before quoting'] },
  { value: 'after-builders', title: 'After Builders Cleaning', shortTitle: 'After Builders Cleaning', photo: servicePhotoKeys['after-builders'], path: '/services/after-builders-cleaning', description: 'Remove building dust and clean the agreed surfaces during a fit-out or before handover.', benefits: ['Construction dust and surface detailing', 'Glass, frames and tracks', 'Staged or final cleans to suit the work'] }
];

export const cleaningPlans = [
  { value: 'one-off', label: 'One-off clean' },
  { value: 'regular', label: 'Recurring visits' },
  { value: 'not-sure', label: 'Help me decide' }
];
export const windowAccessOptions = [
  { value: 'standard', label: 'Standard access' },
  { value: 'hard-to-reach', label: 'Hard-to-reach windows' }
];

export function cleaningQuotePath(service, plan, access) {
  const params = new URLSearchParams({ service });
  if (cleaningPlans.some(option => option.value === plan)) params.set('plan', plan);
  if (service === 'window-cleaning' && windowAccessOptions.some(option => option.value === access)) params.set('access', access);
  return '/contact?' + params.toString();
}
