import { useTranslation } from 'react-i18next'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function DonatePage() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <>
      <PageHero eyebrow="Donate" title={t('donate.title')} intro={t('donate.intro')} />
      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">{t('common.supportAEINY')}</h2>
            <p className="mt-3 text-[var(--muted)]">Support community programs, education, and cultural initiatives.</p>
            <Button to={`/${language}/contact`} className="mt-6">
              {t('common.supportAEINY')}
            </Button>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">{t('common.supportKuri')}</h2>
            <p className="mt-3 text-[var(--muted)]">Support the next edition of the Andes International Film Fest New York.</p>
            <Button to={`/${language}/events/kuri-chasqui-2026`} className="mt-6" variant="secondary">
              {t('common.supportKuri')}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
