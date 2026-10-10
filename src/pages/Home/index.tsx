import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function HomePage() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  const focusAreas = [
    { title: t('nav.about'), description: 'Community-centered leadership and public engagement.' },
    { title: t('nav.ourWork'), description: 'Support, education, culture, and community care.' },
    { title: t('nav.events'), description: 'Cultural gatherings and public programs across New York and beyond.' },
  ]

  return (
    <>
      <PageHero
        eyebrow="AEINY"
        title={t('home.title')}
        intro={t('home.intro')}
        actions={
          <>
            <Button to={`/${language}/our-work`}>
              {t('home.ctaPrimary')} <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button to={`/${language}/donate`} variant="secondary">
              {t('home.ctaSecondary')}
            </Button>
          </>
        }
      />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {t('home.cardTitle')}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-4xl">
              {t('home.headline')}
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">{t('home.cardDescription')}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {focusAreas.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-[var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
