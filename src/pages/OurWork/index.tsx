import { useTranslation } from 'react-i18next'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function OurWorkPage() {
  const { t } = useTranslation()

  const areas = [
    'Migrant Support & Human Rights',
    'Education & Training',
    'Centro Comunitario Andino / OSHA Courses',
    'Culture & Heritage',
    'Community Health',
  ]

  return (
    <>
      <PageHero eyebrow="Our Work" title={t('ourWork.title')} intro={t('ourWork.intro')} />
      <Section>
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article key={area} className="rounded-2xl border border-(--border) bg-(--surface) p-6">
              <h2 className="text-xl font-semibold text-(--foreground)">{area}</h2>
              <p className="mt-3 text-(--muted)">
                Practical, community-driven programs that strengthen well-being, belonging, and opportunity.
              </p>
            </article>
          ))}
        </Container>
      </Section>
    </>
  )
}
