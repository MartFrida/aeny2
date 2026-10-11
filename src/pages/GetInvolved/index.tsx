import { useTranslation } from 'react-i18next'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function GetInvolvedPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero eyebrow="Get Involved" title={t('getInvolved.title')} intro={t('getInvolved.intro')} />
      <Section>
        <Container className="grid gap-6 md:grid-cols-3">
          {['Donate', 'Volunteer', 'Partner', 'Sponsor'].map((item) => (
            <article key={item} className="rounded-2xl border border-(--border) bg-(--surface) p-6">
              <h2 className="text-xl font-semibold text-(--foreground)">{item}</h2>
              <p className="mt-3 text-(--muted)">
                This section will support future calls to action and partnership opportunities.
              </p>
            </article>
          ))}
        </Container>
      </Section>
    </>
  )
}
