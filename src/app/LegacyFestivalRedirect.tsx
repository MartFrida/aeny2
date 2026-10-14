import { Navigate, useParams } from 'react-router-dom'

const festivalPath = 'events/festival-internacional-de-cine-andino-2026'

export function LegacyFestivalRedirect() {
  const { lang } = useParams()
  const language = lang === 'es' ? 'es' : 'en'
  return <Navigate to={`/${language}/${festivalPath}`} replace />
}

export function LegacyFilmRedirect() {
  const { lang, slug } = useParams()
  const language = lang === 'es' ? 'es' : 'en'
  return <Navigate to={`/${language}/${festivalPath}/films/${slug}`} replace />
}
