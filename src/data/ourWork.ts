import { communityAidPhotos } from './communityAid'
import { communityAidRoute } from './routes'

export const services = [
  {
    key: 'osha',
    id: 'cursos-osha',
    image: '/images/aeiny/workforce-classroom.webp',
    imagePosition: 'object-[center_40%]',
    points: ['safety', 'prevention', 'skills'],
    ctaPath: 'courses',
  },
  {
    key: 'migrants',
    id: 'apoyo-a-migrantes',
    image: '/images/aeiny/community-outreach-booth.webp',
    imagePosition: 'object-center',
    points: ['information', 'rights', 'resources'],
    ctaPath: 'contact',
  },
  {
    key: 'aid',
    id: 'ayuda-humanitaria',
    image: communityAidPhotos[0].src,
    imagePosition: 'object-center',
    points: ['food', 'families', 'solidarity'],
    ctaPath: communityAidRoute,
  },
] as const
