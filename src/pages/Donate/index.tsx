import { useTranslation } from 'react-i18next'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { PageMetadata } from '../../components/common/PageMetadata'
import { Section } from '../../components/common/Section'

export function DonatePage() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <>
      <PageMetadata
        language={language}
        title={t('donate.seoTitle')}
        description={t('donate.seoDescription')}
        canonicalPath={`/${language}/donate`}
        alternateLanguagePaths={{ en: '/en/donate', es: '/es/donate' }}
      />
      <PageHero eyebrow={t('donate.eyebrow')} title={t('donate.title')} intro={t('donate.intro')} />
      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-(--border) bg-(--surface) p-8">
            <h2 className="text-2xl font-semibold text-(--foreground)">{t('common.supportAEINY')}</h2>
            <p className="mt-3 text-(--muted)">{t('donate.communityCopy')}</p>
            <Button to={`/${language}/contact`} className="mt-6">
              {t('common.supportAEINY')}
            </Button>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--surface) p-8">
            <h2 className="text-2xl font-semibold text-(--foreground)">{t('common.supportKuri')}</h2>
            <p className="mt-3 text-(--muted)">{t('donate.festivalCopy')}</p>
            <Button to={`/${language}/events/festival-internacional-de-cine-andino-2026`} className="mt-6" variant="secondary">
              {t('common.supportKuri')}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
