import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Landmark,
  Trees,
  UsersRound,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'

const elements = [
  { key: 'museum', icon: BookOpen },
  { key: 'culture', icon: Landmark },
  { key: 'publicSpace', icon: Trees },
  { key: 'connection', icon: UsersRound },
] as const

export function ProjectsPage() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const prefix = `/${language}`

  return (
    <>
      <PageMetadata
        language={language}
        title={t('projects.seoTitle')}
        description={t('projects.seoDescription')}
        canonicalPath="/projects"
      />

      <section className="relative overflow-hidden border-b border-(--border) bg-(--background)">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full border border-(--primary)/15" />
        <Container className="relative grid gap-10 py-14 md:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('projects.eyebrow')}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.04] tracking-[-0.05em] text-(--foreground) md:text-6xl lg:text-7xl">
              {t('projects.heroTitle')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-(--muted)">
              {t('projects.heroIntro')}
            </p>
          </div>

          <div aria-hidden="true" className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--background)">
            <div className="absolute -left-12 bottom-0 h-[62%] w-[65%] rounded-[50%] bg-(--primary)/25" />
            <div className="absolute -right-10 bottom-0 h-[72%] w-[73%] rounded-[50%] bg-(--primary)/40" />
            <div className="absolute right-[17%] top-[13%] h-20 w-20 rounded-full bg-(--accent)/65" />
            <div className="absolute bottom-[20%] left-[15%] h-[38%] w-[68%] border border-white/65 bg-(--surface)/50" />
            <div className="absolute bottom-[20%] left-[15%] h-[10%] w-[68%] border-y border-white/65 bg-(--accent)/20" />
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-(--primary)" />
            <span className="absolute bottom-6 left-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em] text-white">
              <span className="h-px w-8 bg-(--accent)" />
              {t('projects.visualLabel')}
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-(--surface) py-14 md:py-20">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div aria-hidden="true" className="relative order-2 aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--background) lg:order-1">
              <div className="absolute -left-[8%] bottom-0 h-[58%] w-[60%] rounded-[50%] bg-(--primary)/35" />
              <div className="absolute -right-[8%] bottom-0 h-[67%] w-[70%] rounded-[50%] bg-(--primary)/55" />
              <div className="absolute right-[17%] top-[12%] h-16 w-16 rounded-full border border-(--accent)/70 bg-(--accent)/35" />
              <div className="absolute bottom-[12%] left-[17%] flex h-[34%] w-[64%] items-center justify-center border border-white/70 bg-(--surface)/55">
                <Landmark className="text-(--primary)/70" size={50} strokeWidth={1} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-(--primary)/80" />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
                {t('projects.featureEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t('projects.featureTitle')}
              </h2>
              <div className="mt-5 space-y-4 leading-7 text-(--muted)">
                <p>{t('projects.featureCopy1')}</p>
                <p>{t('projects.featureCopy2')}</p>
              </div>
              <blockquote className="mt-7 border-l-2 border-(--accent) pl-5 font-display text-2xl leading-snug text-(--foreground) md:text-3xl">
                {t('projects.pullQuote')}
              </blockquote>
              <Link
                to={`${prefix}/projects/parque-del-migrante`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition hover:text-(--foreground) focus-visible:rounded-sm"
              >
                {t('projects.featureCta')} <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--background) py-14 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('projects.elementsEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('projects.elementsTitle')}
            </h2>
            <p className="mt-4 leading-7 text-(--muted)">{t('projects.elementsIntro')}</p>
          </div>
          <div className="mt-9 grid gap-x-10 sm:grid-cols-2">
            {elements.map(({ key, icon: Icon }, index) => (
              <article key={key} className="grid grid-cols-[2.75rem_1fr] gap-4 border-t border-(--border) py-6 md:py-7">
                <span className="font-display text-sm text-(--accent)">0{index + 1}</span>
                <div>
                  <Icon aria-hidden="true" size={21} strokeWidth={1.5} className="text-(--primary)" />
                  <h3 className="mt-3 text-lg font-semibold text-(--foreground)">{t(`projects.element.${key}Title`)}</h3>
                  <p className="mt-2 text-sm leading-6 text-(--muted)">{t(`projects.element.${key}Copy`)}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-(--surface) py-14 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
                {t('projects.secondEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t('projects.secondTitle')}
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-(--muted)">{t('projects.secondCopy')}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {(['construction', 'safety', 'immigration', 'labor', 'identity', 'rights'] as const).map((topic) => (
                  <span key={topic} className="rounded-full border border-(--border) px-3.5 py-1.5 text-xs text-(--muted)">
                    {t(`projects.secondTopic.${topic}`)}
                  </span>
                ))}
              </div>
              <Link
                to={`${prefix}/our-work`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition hover:text-(--foreground) focus-visible:rounded-sm"
              >
                {t('projects.secondCta')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--background) py-14 md:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex h-44 items-center justify-center rounded-[1.5rem] border border-(--border) bg-(--accent-soft) text-(--primary) sm:h-52">
            <GraduationCap aria-hidden="true" size={66} strokeWidth={1} />
          </div>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('projects.trainingEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) md:text-4xl">
              {t('projects.trainingTitle')}
            </h2>
            <p className="mt-4 leading-7 text-(--muted)">{t('projects.trainingCopy')}</p>
            <p className="mt-3 text-sm leading-6 text-(--muted)">
              <span className="font-semibold text-(--foreground)">{t('projects.trainingNoteLabel')} </span>
              {t('projects.trainingNote')}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-(--background) py-14 md:py-20">
        <Container>
          <div className="rounded-[1.75rem] bg-(--surface-dark) px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
                  {t('projects.finalEyebrow')}
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-5xl">
                  {t('projects.finalTitle')}
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-white/70">{t('projects.finalCopy')}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button to={`${prefix}/donate`} className="bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!">
                  {t('projects.supportCta')}
                </Button>
                <Button to={`${prefix}/get-involved`} variant="secondary" className="border-white/25 bg-white/5 text-white hover:bg-white/10">
                  {t('projects.involvedCta')} <ArrowUpRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
