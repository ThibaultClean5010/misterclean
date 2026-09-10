export const cleaningPhotos = {
  home: { src: '/images/business-foyer-cleaning.jpg', alt: 'Illustrative view of a cleaner mopping the reception floor of a business premises', position: '68% 65%' },
  about: { src: '/images/commercial-cleaning-equipment.jpg', alt: 'Illustrative view of an organised commercial cleaning trolley, cloths and equipment', position: 'center' },
  commercial: { src: '/images/premises-deep-clean.jpg', alt: 'Illustrative view of a professional using a floor scrubber in a commercial reception area', position: '65% center' },
  office: { src: '/images/commercial-workspace.jpg', alt: 'Illustrative view of a professional wiping an office desk', position: '65% center' },
  windows: { src: '/images/commercial-windows.jpg', alt: 'Illustrative view of a professional cleaning large shopfront windows', position: '65% center' },
  builders: { src: '/images/after-builders-dust-removal.jpg', alt: 'Illustrative view of construction dust being vacuumed from a newly renovated commercial unit', position: '68% 65%' },
  deep: { src: '/images/commercial-deep-clean-detailing.jpg', alt: 'Illustrative view of a cleaner scrubbing tiled floor edges during a commercial premises deep clean', position: '68% 65%' },
  retail: { src: '/images/retail-shop-cleaning.jpg', alt: 'Illustrative view of floor cleaning between clothing racks in a retail boutique', position: '68% 65%' },
  restaurant: { src: '/images/restaurant-dining-cleaning.jpg', alt: 'Illustrative view of a cleaner wiping dining tables in a restaurant before opening', position: '68% 65%' }
};

export const servicePhotoKeys = {
  commercial: 'commercial',
  'window-cleaning': 'windows',
  'commercial-deep-cleaning': 'deep',
  'after-builders': 'builders',
  office: 'office',
  retail: 'retail',
  restaurant: 'restaurant'
};

export const cleaningOffers = [
  { value: 'commercial', title: 'Commercial cleaning', shortTitle: 'Everyday upkeep', photo: servicePhotoKeys.commercial, path: '/services/commercial-cleaning', description: 'Keep workspaces, shared areas and amenities ready for your working day.', benefits: ['Desks and shared surfaces', 'Kitchens and amenities', 'Floors and everyday touchpoints'] },
  { value: 'window-cleaning', title: 'Window cleaning', shortTitle: 'Windows & glass', photo: 'windows', path: '/services/window-cleaning', description: 'A clearer outlook for shopfronts, workplace windows and internal glass.', benefits: ['Internal and external glass', 'Frames, sills and tracks in scope', 'Access assessed before quoting'] },
  { value: 'commercial-deep-cleaning', title: 'Commercial deep cleaning', shortTitle: 'A complete refresh', photo: 'deep', path: '/services/commercial-deep-cleaning', description: 'Give your premises a thorough reset, including the areas everyday cleaning can miss.', benefits: ['Floors, edges and corners', 'Kitchens, bathrooms and shared areas', 'Finishing details across the agreed space'] },
  { value: 'after-builders', title: 'After-builders cleaning', shortTitle: 'After building work', photo: servicePhotoKeys['after-builders'], path: '/services/after-builders-cleaning', description: 'Prepare a renovated or newly completed space for its next chapter.', benefits: ['Construction dust and surface detailing', 'Glass, frames and tracks', 'A final clean before handover'] }
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
