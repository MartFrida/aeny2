import { useTranslation } from 'react-i18next'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function AboutPage() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <>
      <PageHero
        eyebrow="About"
        title={t('about.title')}
        intro={t('about.intro')}
        actions={<Button to={`/${language}/contact`}>{t('nav.contact')}</Button>}
      />

      <Section>
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">Mission & Vision</h2>
            <p className="mt-4 text-[var(--muted)]">
              AEINY brings together cultural heritage, human rights advocacy, and community organizing to support people in Ecuador and across international communities.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">Leadership</h2>
            <p className="mt-4 text-[var(--muted)]">
              Our work is shaped by community trust, partnership, and a long-term commitment to dignity, access, and belonging.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
