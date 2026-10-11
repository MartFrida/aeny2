import { useTranslation } from 'react-i18next'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero eyebrow="Contact" title={t('contact.title')} intro={t('contact.intro')} />
      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-(--border) bg-(--surface) p-6">
            <h2 className="text-2xl font-semibold text-(--foreground)">General inquiries</h2>
            <p className="mt-3 text-(--muted)">Email and contact details will be added when the official communication channels are confirmed.</p>
          </article>
          <article className="rounded-2xl border border-(--border) bg-(--surface) p-6">
            <h2 className="text-2xl font-semibold text-(--foreground)">Partnerships</h2>
            <p className="mt-3 text-(--muted)">AEINY welcomes collaborations with institutions, cultural organizations, and community partners.</p>
          </article>
        </Container>
      </Section>
    </>
  )
}
