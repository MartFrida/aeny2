import { homeImages } from './home'

// Images and destinations are shared by both language versions.
export const aboutMedia = {
  "organizationUnits": [
    {
      "image": homeImages.education,
      "href": "/courses"
    },
    {
      "image": "/images/events/festival-andino-2026/sponsors/fundacion-alianza.webp",
      "href": "/contact"
    }
  ],
  "workAreas": [
    {
      "image": homeImages.education,
      "href": "/courses"
    },
    {
      "image": homeImages.culture,
      "href": "/events"
    },
    {
      "image": homeImages.migrantSupport,
      "href": "/contact"
    },
    {
      "image": homeImages.parque,
      "href": "/projects"
    },
    {
      "image": homeImages.health,
      "href": "/our-work"
    }
  ]
} as const
