import { Navigate, useParams } from 'react-router-dom'

export function LegacyNewsRedirect() {
  const { lang } = useParams()
  const language = lang === 'es' ? 'es' : 'en'
  return <Navigate to={`/${language}/courses`} replace />
}
