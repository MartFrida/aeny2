import type { LucideIcon } from 'lucide-react'
import { BookOpenText, HeartHandshake, HeartPulse, Landmark } from 'lucide-react'

export type HomeWorkArea = {
  titleKey: string
  descriptionKey: string
  icon: LucideIcon
}

export const homeWorkAreas: HomeWorkArea[] = [
  {
    titleKey: 'home.work.migrantSupportTitle',
    descriptionKey: 'home.work.migrantSupportDescription',
    icon: HeartHandshake,
  },
  {
    titleKey: 'home.work.educationTitle',
    descriptionKey: 'home.work.educationDescription',
    icon: BookOpenText,
  },
  {
    titleKey: 'home.work.cultureTitle',
    descriptionKey: 'home.work.cultureDescription',
    icon: Landmark,
  },
  {
    titleKey: 'home.work.healthTitle',
    descriptionKey: 'home.work.healthDescription',
    icon: HeartPulse,
  },
]
