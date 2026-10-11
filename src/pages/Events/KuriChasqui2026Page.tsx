import { useTranslation } from 'react-i18next'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function KuriChasqui2026Page() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow="Event"
        title={t('eventKuri2026.title')}
        intro={t('eventKuri2026.subtitle')}
      />

      <Section>
        <Container className="max-w-3xl space-y-5 text-(--muted)">
          <p className="text-2xl font-medium text-(--foreground)">{t('eventKuri2026.dates')}</p>
          <p>
            <span className="font-semibold text-(--foreground)">{t('eventKuri2026.organizer')}</span> Alianza Ecuatoriana Internacional
          </p>
          <p>
            <span className="font-semibold text-(--foreground)">{t('eventKuri2026.location')}</span> New York
          </p>
          <p>{t('eventKuri2026.followup')}</p>
        </Container>
      </Section>
    </>
  )
}
