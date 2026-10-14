export type KuriChasqui2026Event = {
  id: string
  slug: string
  title: string
  officialName: string
  subtitle: string
  startDate: string
  endDate: string
  time: string
  venue: string
  address: string
  organizer: string
  coOrganizer: string
  rsvpPhone: string
  rsvpEmail: string
  location: string
  poster: string
  featured: boolean
}

export type SponsorshipLevel = {
  name: 'KURI' | 'ANTA' | 'RUMI'
  levelKey: string
  roleKey: string
  benefitKeys: string[]
}

export const kuriChasquiPillars = [
  { titleKey: 'rootsTitle', descriptionKey: 'rootsDescription' },
  { titleKey: 'visibilityTitle', descriptionKey: 'visibilityDescription' },
  { titleKey: 'memoryTitle', descriptionKey: 'memoryDescription' },
  { titleKey: 'connectionTitle', descriptionKey: 'connectionDescription' },
]

export const kuriChasquiCeremony = [
  { time: '19:30', titleKey: 'ceremonyWelcomeTitle', descriptionKey: 'ceremonyWelcomeDescription' },
  { time: '20:00', titleKey: 'ceremonyAwardsTitle', descriptionKey: 'ceremonyAwardsDescription' },
  { time: '21:15', titleKey: 'ceremonyToastTitle', descriptionKey: 'ceremonyToastDescription' },
]

export const kuriChasquiSponsorshipLevels: SponsorshipLevel[] = [
  {
    name: 'KURI',
    levelKey: 'gold',
    roleKey: 'presentingSponsor',
    benefitKeys: ['kuriBenefit1', 'kuriBenefit2', 'kuriBenefit3', 'kuriBenefit4', 'kuriBenefit5'],
  },
  {
    name: 'ANTA',
    levelKey: 'silver',
    roleKey: 'officialSponsor',
    benefitKeys: ['antaBenefit1', 'antaBenefit2', 'antaBenefit3', 'antaBenefit4'],
  },
  {
    name: 'RUMI',
    levelKey: 'bronze',
    roleKey: 'communityPartner',
    benefitKeys: ['rumiBenefit1', 'rumiBenefit2', 'rumiBenefit3'],
  },
]

export const kuriChasqui2026Event: KuriChasqui2026Event = {
  id: 'festival-internacional-de-cine-andino-2026',
  slug: 'festival-internacional-de-cine-andino-2026',
  title: '1st International Andean Film Festival New York 2026',
  officialName: '1st International Andean Film Festival New York 2026',
  subtitle: 'Kuri Chasqui — The Golden Messenger',
  startDate: 'November 8',
  endDate: 'November 15, 2026',
  time: '14:00 / 2:00 PM',
  venue: 'Centro Comunitario Andino',
  address: '102-14 37th Ave, 2nd Floor\nCorona, NY 11368\nNew York',
  organizer: 'Alianza Ecuatoriana Internacional',
  coOrganizer: 'Centro Comunitario Andino',
  rsvpPhone: '(718) 905-6761',
  rsvpEmail: 'info.ccandino@gmail.com',
  location: 'New York',
  poster: '/images/kuri-chasqui/kuri-chasqui-2026-poster.jpg',
  featured: true,
}
