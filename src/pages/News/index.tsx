import { useTranslation } from 'react-i18next'
import { Container } from '../../components/common/Container'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'

export function NewsPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero eyebrow="News" title={t('news.title')} intro={t('news.intro')} />
      <Section>
        <Container className="space-y-6">
          <article className="rounded-2xl border border-(--border) bg-(--surface) p-6">
            <h2 className="text-2xl font-semibold text-(--foreground)">Community update</h2>
            <p className="mt-3 text-(--muted)">
              Upcoming stories will spotlight community partnerships, project developments, and cultural milestones.
            </p>
          </article>
        </Container>
      </Section>
    </>
  )
}
