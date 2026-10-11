import { useTranslation } from 'react-i18next'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function KuriChasqui2023Page() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero eyebrow="Past Event" title={t('eventKuri2023.title')} intro={t('eventKuri2023.intro')} />
      <Section>
        <Container className="max-w-3xl text-(--muted)">
          <p>
            This page is a placeholder for a previous edition of the festival, with the foundation for future event storytelling and archival content.
          </p>
        </Container>
      </Section>
    </>
  )
}
