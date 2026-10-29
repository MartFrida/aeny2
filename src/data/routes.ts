// The router, static metadata and sitemap share this public page registry.
export const publicPageRoutes = [
  { id: 'home', path: '', translationKey: 'home' },
  { id: 'about', path: 'about', translationKey: 'about' },
  { id: 'ourWork', path: 'our-work', translationKey: 'ourWork' },
  { id: 'projects', path: 'projects', translationKey: 'projects' },
  { id: 'projectParque', path: 'projects/parque-del-migrante', translationKey: 'projectParque' },
  { id: 'events', path: 'events', translationKey: 'events' },
  { id: 'chasqui2026', path: 'events/chasqui-migrante-2026', translationKey: 'chasqui2026' },
  { id: 'festival2026', path: 'events/festival-internacional-de-cine-andino-2026', translationKey: 'festival2026' },
  { id: 'eventKuri2023', path: 'events/kuri-chasqui-2023', translationKey: 'eventKuri2023' },
  { id: 'courses', path: 'courses', translationKey: 'courses' },
  { id: 'getInvolved', path: 'get-involved', translationKey: 'getInvolved' },
  { id: 'donate', path: 'donate', translationKey: 'donate' },
  { id: 'contact', path: 'contact', translationKey: 'contact' },
] as const

export const festivalRoute = publicPageRoutes.find((route) => route.id === 'festival2026')!.path
export const filmRoutePrefix = `${festivalRoute}/films/`
