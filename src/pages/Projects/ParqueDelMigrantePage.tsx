import { useTranslation } from 'react-i18next'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { PageMetadata } from '../../components/common/PageMetadata'
import { Section } from '../../components/common/Section'

export function ParqueDelMigrantePage() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <>
      <PageMetadata
        language={language}
        title={t('projectParque.seoTitle')}
        description={t('projectParque.seoDescription')}
        canonicalPath={`/${language}/projects/parque-del-migrante`}
        alternateLanguagePaths={{
          en: '/en/projects/parque-del-migrante',
          es: '/es/projects/parque-del-migrante',
        }}
      />
      <PageHero eyebrow={t('projectParque.eyebrow')} title={t('projectParque.title')} intro={t('projectParque.intro')} />
      <Section>
        <Container className="prose max-w-3xl text-(--muted)">
          <p>
            {t('projectParque.copy1')}
          </p>
          <p>
            {t('projectParque.copy2')}
          </p>
        </Container>
      </Section>
    </>
  )
}
