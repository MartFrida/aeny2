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
      <PageHero eyebrow="Project" title={t('projectParque.title')} intro={t('projectParque.intro')} />
      <Section>
        <Container className="prose max-w-3xl text-(--muted)">
          <p>
            This project is part of AEINY’s broader effort to support community memory, belonging, and public cultural space.
          </p>
          <p>
            The current foundation focuses on the planning and community context behind the project rather than detailed program design.
          </p>
        </Container>
      </Section>
    </>
  )
}
