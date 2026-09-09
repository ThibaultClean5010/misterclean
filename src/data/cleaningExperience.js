export const cleaningPhotos = {
  workplace: { src: '/images/commercial-workspace.jpg', alt: 'Illustrative view of a professional cleaning a contemporary office', position: '65% center' },
  windows: { src: '/images/commercial-windows.jpg', alt: 'Illustrative view of a professional cleaning large shopfront windows', position: '65% center' },
  deep: { src: '/images/premises-deep-clean.jpg', alt: 'Illustrative view of machine floor cleaning in commercial premises', position: '65% center' }
};

export const cleaningOffers = [
  { value: 'commercial', title: 'Commercial cleaning', shortTitle: 'Everyday upkeep', photo: 'workplace', path: '/services/commercial-cleaning', description: 'Keep workspaces, shared areas and amenities ready for your working day.', benefits: ['Desks and shared surfaces', 'Kitchens and amenities', 'Floors and everyday touchpoints'] },
  { value: 'window-cleaning', title: 'Window cleaning', shortTitle: 'Windows & glass', photo: 'windows', path: '/services/window-cleaning', description: 'A clearer outlook for shopfronts, workplace windows and internal glass.', benefits: ['Internal and external glass', 'Frames, sills and tracks in scope', 'Access assessed before quoting'] },
  { value: 'commercial-deep-cleaning', title: 'Commercial deep cleaning', shortTitle: 'A complete refresh', photo: 'deep', path: '/services/commercial-deep-cleaning', description: 'Give your premises a thorough reset, including the areas everyday cleaning can miss.', benefits: ['Floors, edges and corners', 'Kitchens, bathrooms and shared areas', 'Finishing details across the agreed space'] },
  { value: 'after-builders', title: 'After-builders cleaning', shortTitle: 'After building work', photo: 'deep', path: '/services/after-builders-cleaning', description: 'Prepare a renovated or newly completed space for its next chapter.', benefits: ['Construction dust and surface detailing', 'Glass, frames and tracks', 'A final clean before handover'] }
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
