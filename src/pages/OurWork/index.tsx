import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Heart,
  Scale,
  UsersRound,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'

const areas = [
  { key: 'education', icon: GraduationCap },
  { key: 'support', icon: UsersRound },
  { key: 'rights', icon: Scale },
  { key: 'culture', icon: Heart },
] as const

export function OurWorkPage() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const prefix = `/${language}`

  return (
    <>
      <PageMetadata
        language={language}
        title={t('ourWork.seoTitle')}
        description={t('ourWork.seoDescription')}
        canonicalPath="/our-work"
      />

      <section className="relative isolate overflow-hidden bg-(--surface-dark) text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute right-16 top-16 h-64 w-64 rounded-full border border-(--accent)/25" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
        </div>
        <Container className="relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {t('ourWork.eyebrow')}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.03] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
              {t('ourWork.heroTitle')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              {t('ourWork.heroIntro')}
            </p>
            <Button to="#what-we-do" className="mt-8 bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!">
              {t('ourWork.exploreCta')} <ArrowDown size={16} className="ml-2" />
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div aria-hidden="true" className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/15 bg-(--surface-dark)">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_24%,rgba(201,154,92,0.22),transparent_33%)]" />
              <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-linear-to-t from-(--surface-dark) to-transparent" />
              <div className="absolute bottom-0 left-[7%] h-[42%] w-[20%] rounded-t-full border border-white/10 bg-(--primary)/60" />
              <div className="absolute bottom-0 left-[29%] h-[57%] w-[24%] rounded-t-full border border-white/10 bg-(--primary)/70" />
              <div className="absolute bottom-0 right-[7%] h-[47%] w-[27%] rounded-t-full border border-white/10 bg-(--accent)/45" />
              <div className="absolute left-[44%] top-[21%] h-16 w-16 rounded-full border border-(--accent)/50 sm:h-20 sm:w-20" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="h-px w-8 bg-(--accent)" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                  {t('ourWork.heroVisualLabel')}
                </span>
              </div>
            </div>
            <p className="mt-3 text-right text-xs uppercase tracking-[0.16em] text-white/50">
              {t('ourWork.heroVisualCaption')}
            </p>
          </div>
        </Container>
      </section>

      <section id="what-we-do" className="scroll-mt-24 bg-(--background) py-14 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
                {t('ourWork.pillarsEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t('ourWork.pillarsTitle')}
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-(--muted) md:justify-self-end">
              {t('ourWork.pillarsIntro')}
            </p>
          </div>

          <div className="mt-10 border-t border-(--border)">
            {areas.map(({ key, icon: Icon }, index) => (
              <article
                key={key}
                className="grid gap-4 border-b border-(--border) py-7 md:grid-cols-[5rem_3rem_0.8fr_1.2fr] md:items-start md:gap-6 md:py-8"
              >
                <span className="font-display text-3xl text-(--accent)">0{index + 1}</span>
                <Icon aria-hidden="true" size={23} strokeWidth={1.6} className="mt-1 text-(--primary)" />
                <h3 className="text-xl font-semibold leading-snug text-(--foreground) md:text-2xl">
                  {t(`ourWork.area.${key}Title`)}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-(--muted) md:text-base">
                  {t(`ourWork.area.${key}Copy`)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-(--surface-dark) py-14 text-white md:py-20">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
                {t('ourWork.centerEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-5xl">
                {t('ourWork.centerTitle')}
              </h2>
              <p className="mt-5 max-w-2xl font-display text-2xl leading-snug text-white/90">
                {t('ourWork.centerLead')}
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-white/70">
                {t('ourWork.centerCopy')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {(['education', 'workforce', 'guidance', 'rights'] as const).map((topic) => (
                  <span key={topic} className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/75">
                    {t(`ourWork.topic.${topic}`)}
                  </span>
                ))}
              </div>
              <Link
                to={`${prefix}/projects`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--accent) transition hover:text-white focus-visible:rounded-sm"
              >
                {t('ourWork.centerCta')} <ArrowRight size={16} />
              </Link>
            </div>

            <div aria-hidden="true" className="relative min-h-64 overflow-hidden rounded-[1.75rem] border border-white/15 bg-(--surface-dark) sm:min-h-80">
              <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-(--accent)/35" />
              <div className="absolute right-8 top-8 h-32 w-32 rounded-full border border-white/10" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-(--surface-dark) to-transparent" />
              <div className="absolute bottom-0 left-[10%] h-[38%] w-[25%] rounded-t-full bg-(--primary)/65" />
              <div className="absolute bottom-0 left-[36%] h-[53%] w-[27%] rounded-t-full bg-(--primary)/70" />
              <div className="absolute bottom-0 right-[8%] h-[43%] w-[22%] rounded-t-full bg-(--accent)/45" />
              <p className="absolute bottom-6 left-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                {t('ourWork.centerVisualLabel')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--surface) py-16 md:py-20">
        <Container>
          <p className="mx-auto max-w-4xl text-center font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-6xl">
            {t('ourWork.statementLine1')}
            <span className="block text-(--primary)">{t('ourWork.statementLine2')}</span>
          </p>
        </Container>
      </section>

      <section className="bg-(--background) py-14 md:py-20">
        <Container>
          <div className="rounded-[1.75rem] bg-(--primary) px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {t('ourWork.finalEyebrow')}
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-5xl">
                  {t('ourWork.finalTitle')}
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-white/80">{t('ourWork.finalCopy')}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button to={`${prefix}/get-involved`} className="bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!">
                  {t('ourWork.getInvolved')}
                </Button>
                <Button to={`${prefix}/contact`} variant="secondary" className="border-white/30 bg-white/5 text-white hover:bg-white/10">
                  {t('ourWork.contactUs')} <ArrowUpRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
