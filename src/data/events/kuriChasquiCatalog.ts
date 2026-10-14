import catalog from '../kuriChasqui2026.json'

export type FestivalFilm = {
  id: number
  slug: string
  title: string
  poster?: string | null
  originalTitle?: string | null
  year?: number | null
  completionYear?: number | null
  duration?: string | null
  country?: string[] | null
  language?: string[] | null
  subtitles?: string[] | null
  director?: string[] | null
  screenplay?: string[] | null
  producer?: string[] | null
  production?: string[] | null
  cast?: string[] | null
  cinematography?: string[] | null
  editor?: string[] | null
  music?: string[] | null
  location?: string | null
  type?: string | null
  format?: string | null
  synopsisEs?: string | null
  synopsisEn?: string | null
  sourceUrl?: string
  reviewStatus?: string
  editorialNote?: string
}

export const kuriChasqui2026Films: FestivalFilm[] = catalog

const filmTypeTranslationKeys: Record<string, string> = {
  documentary: 'festival2026.filmTypes.documentary',
  fiction: 'festival2026.filmTypes.fiction',
  'short-fiction': 'festival2026.filmTypes.shortFiction',
  experimental: 'festival2026.filmTypes.experimental',
  'experimental-documentary': 'festival2026.filmTypes.experimentalDocumentary',
  'dance-film': 'festival2026.filmTypes.danceFilm',
  'short-film': 'festival2026.filmTypes.shortFilm',
}

export function getFilmTypeTranslationKey(type: string | null | undefined) {
  return type ? filmTypeTranslationKeys[type] : undefined
}
