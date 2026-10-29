// Original public materials supplied for the community aid page.
export const communityAidSources = {
  turkeyDistribution: 'https://www.facebook.com/alianzaecuatorianaIntofficial/posts/pfbid0Xv7Gp1pf97yJQDMXpZo4b779yYWrsd6LXonrkvTNMm5MRCyhvJvD7SrydfgAT8ozl',
  communityVideo: 'https://fb.watch/KyRuocb21s/',
} as const

export const communityAidPhotos = [
  {
    id: 'community-team',
    src: '/images/aeiny/community-aid/turkey-distribution-2025-team.webp',
    width: 1440,
    height: 1080,
  },
  {
    id: 'food-distribution',
    src: '/images/aeiny/community-aid/turkey-distribution-2025-delivery.webp',
    width: 1080,
    height: 1440,
  },
] as const

// Historical initiatives only. Add new entries after confirming their dates,
// source materials and matching EN/ES translation keys.
export const aidInitiatives = [
  {
    id: 'turkey-distribution-2025',
    date: '2025-11-18',
    translationKey: 'turkeys2025',
    sourceUrl: communityAidSources.turkeyDistribution,
  },
] as const
