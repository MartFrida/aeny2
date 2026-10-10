import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Container } from '../../components/common/Container'
import { Section } from '../../components/common/Section'

export function NotFoundPage() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <Section>
      <Container className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-5xl">
          {t('notFound.title')}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">{t('notFound.intro')}</p>
        <Link to={`/${language}`} className="mt-8 inline-flex rounded-md bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary-foreground)]">
          Home
        </Link>
      </Container>
    </Section>
  )
}
