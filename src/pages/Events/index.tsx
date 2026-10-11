import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function EventsPage() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <>
      <PageHero eyebrow="Events" title={t('events.title')} intro={t('events.intro')} />
      <Section>
        <Container className="space-y-6">
          <div className="rounded-2xl bg-(--surface) border border-(--border) p-6">
            <h2 className="text-2xl font-semibold text-(--foreground)">{t('eventKuri2026.title')}</h2>
            <p className="mt-2 text-(--muted)">{t('eventKuri2026.subtitle')}</p>
            <Link to={`/${language}/events/kuri-chasqui-2026`} className="mt-4 inline-flex text-sm font-semibold text-(--primary)">
              {t('common.eventDetails')}
            </Link>
          </div>

          <div className="rounded-2xl bg-(--surface) border border-(--border) p-6">
            <h2 className="text-2xl font-semibold text-(--foreground)">{t('eventKuri2023.title')}</h2>
            <p className="mt-2 text-(--muted)">{t('eventKuri2023.intro')}</p>
            <Link to={`/${language}/events/kuri-chasqui-2023`} className="mt-4 inline-flex text-sm font-semibold text-(--primary)">
              {t('common.readMore')}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
