import { useTranslation } from 'react-i18next'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function ParqueDelMigrantePage() {
  const { t } = useTranslation()

  return (
    <>
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
