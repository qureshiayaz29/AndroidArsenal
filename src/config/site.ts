export const site = {
  name: 'Android Arsenal',
  url: 'https://androidarsenal.com',
  description:
    'Should we build Android Arsenal? Help Android developers decide.',
  tagline: 'Should we build it?',
  tallyFormId: import.meta.env.PUBLIC_TALLY_FORM_ID ?? '',
  cfBeaconToken: import.meta.env.PUBLIC_CF_BEACON_TOKEN ?? '',
} as const;

export const shareLinks = {
  site: site.url,
  whatsapp: (text: string) =>
    `https://wa.me/?text=${encodeURIComponent(text)}`,
  x: (text: string, url: string) =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
  linkedin: (url: string) =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
} as const;

export function shareUrl(source: string, medium = 'social') {
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: 'validation',
  });
  return `${site.url}/?${params.toString()}`;
}
