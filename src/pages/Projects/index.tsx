import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function ProjectsPage() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <>
      <PageHero eyebrow="Projects" title={t('projects.title')} intro={t('projects.intro')} />
      <Section>
        <Container>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
            <h2 className="text-3xl font-semibold text-[var(--foreground)]">{t('projectParque.title')}</h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">{t('projectParque.intro')}</p>
            <Link to={`/${language}/projects/parque-del-migrante`} className="mt-6 inline-flex text-sm font-semibold text-[var(--primary)]">
              {t('common.visitProject')}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
