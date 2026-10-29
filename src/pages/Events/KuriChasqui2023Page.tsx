import { useTranslation } from 'react-i18next'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { PageMetadata } from '../../components/common/PageMetadata'
import { Section } from '../../components/common/Section'

export function KuriChasqui2023Page() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <>
      <PageMetadata
        language={language}
        title={t('eventKuri2023.seoTitle')}
        description={t('eventKuri2023.seoDescription')}
        canonicalPath={`/${language}/events/kuri-chasqui-2023`}
        alternateLanguagePaths={{
          en: '/en/events/kuri-chasqui-2023',
          es: '/es/events/kuri-chasqui-2023',
        }}
      />
      <PageHero eyebrow={t('eventKuri2023.eyebrow')} title={t('eventKuri2023.title')} intro={t('eventKuri2023.intro')} />
      <Section>
        <Container className="max-w-3xl text-(--muted)">
          <p>
            {t('eventKuri2023.copy')}
          </p>
        </Container>
      </Section>
    </>
  )
}
