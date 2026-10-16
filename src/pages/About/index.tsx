import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  Leaf,
  UsersRound,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'

const values = [
  { key: 'solidarity', icon: HeartHandshake },
  { key: 'identity', icon: Leaf },
  { key: 'education', icon: BookOpen },
  { key: 'commitment', icon: UsersRound },
] as const

const alternateLanguagePaths = { en: '/en/about', es: '/es/about' }

export function AboutPage() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const prefix = `/${language}`

  return (
    <>
      <PageMetadata
        language={language}
        title={t('about.seoTitle')}
        description={t('about.seoDescription')}
        canonicalPath={`${prefix}/about`}
        alternateLanguagePaths={alternateLanguagePaths}
        includeOrganizationData
      />

      <section className="relative isolate overflow-hidden bg-(--surface-dark) text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -right-4 top-8 h-72 w-72 rounded-full border border-(--accent)/25" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute bottom-0 right-[8%] h-44 w-44 rounded-full bg-(--accent)/10 blur-3xl" />
        </div>
        <Container className="relative grid gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--accent)">
              {t('about.eyebrow')}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              {t('about.heroTitle')}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              {t('about.heroDescription')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                to="#identity"
                className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!"
              >
                {t('about.heroPrimary')} <ArrowDown aria-hidden="true" size={16} className="ml-2" />
              </Button>
              <Button
                to={`${prefix}/get-involved`}
                variant="secondary"
                className="border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                {t('about.heroSecondary')} <ArrowUpRight aria-hidden="true" size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/15 bg-[#172b35]">
              <img
                src="/images/aeiny/about/aeiny-team.webp"
                alt={t('about.teamPhotoAlt')}
                width="960"
                height="960"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-right text-xs uppercase tracking-[0.16em] text-white/55">
              {t('about.teamPhotoCaption')}
            </figcaption>
          </figure>
        </Container>
      </section>

      <section id="identity" className="scroll-mt-24 bg-(--background) py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[2rem] border-l border-t border-(--accent)/70" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--surface)">
              <img
                src="/images/aeiny/about/our-story.webp"
                alt={t('about.storyPhotoAlt')}
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
              />
            </div>
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full border border-(--primary)/30 bg-(--accent-soft)" />
          </div>

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.identityEyebrow')}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('about.identityTitle')}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-(--muted)">
              <p>{t('about.identityCopy1')}</p>
              <p>{t('about.identityCopy2')}</p>
              <p>{t('about.identityCopy3')}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--surface) py-16 md:py-24">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.missionEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('about.missionHeading')}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-(--border) bg-(--background)">
              <img
                src="/images/aeiny/about/our-mission.webp"
                alt={t('about.missionPhotoAlt')}
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
              />
            </div>
            <div className="grid gap-6">
              {(['mission', 'vision'] as const).map((key, index) => (
                <article
                  key={key}
                  className={`rounded-[1.5rem] border p-7 md:p-9 ${index === 0 ? 'border-(--border) bg-(--background)' : 'border-(--primary)/25 bg-(--surface)'}`}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                    {t(`about.${key}Label`)}
                  </h3>
                  <p className="mt-5 max-w-xl font-display text-2xl leading-relaxed tracking-[-0.02em] text-(--foreground) md:text-3xl">
                    {t(`about.${key}Copy`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-(--background) py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.valuesEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('about.valuesTitle')}
            </h2>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ key, icon: Icon }) => (
              <article key={key} className="border-t border-(--border) pt-5">
                <Icon aria-hidden="true" size={21} strokeWidth={1.6} className="text-(--primary)" />
                <h3 className="mt-5 text-lg font-semibold text-(--foreground)">{t(`about.value.${key}Title`)}</h3>
                <p className="mt-2 text-sm leading-6 text-(--muted)">{t(`about.value.${key}Copy`)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--surface) py-12 md:py-16">
        <Container>
          <figure className="overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--background)">
            <h2 className="sr-only">{t('about.rootsTitle')}</h2>
            <div className="relative aspect-[4/3] overflow-hidden bg-(--accent-soft)">
              <img
                src="/images/aeiny/about/our-roots.webp"
                alt={t('about.rootsPhotoAlt')}
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm leading-6 text-(--muted) sm:px-7">
              {t('about.rootsPhotoCaption')}
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="bg-(--background) py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.communityEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('about.communityTitle')}
            </h2>
            <p className="mt-5 text-base leading-8 text-(--muted)">{t('about.communityCopy')}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--surface)">
            <img
              src="/images/aeiny/about/community.webp"
              alt={t('about.communityPhotoAlt')}
              width="960"
              height="720"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--surface) py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.connectionEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) md:text-4xl">
              {t('about.connectionTitle')}
            </h2>
          </div>
          <div className="space-y-4 leading-7 text-(--muted)">
            <p>{t('about.connectionCopy1')}</p>
            <p>{t('about.connectionCopy2')}</p>
          </div>
        </Container>
      </section>

      <section className="bg-(--background) py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div aria-hidden="true" className="relative min-h-64 overflow-hidden rounded-[1.75rem] border border-(--border) bg-[#e6dfd1] p-8 sm:min-h-80">
            <div className="absolute -left-12 bottom-0 h-52 w-[70%] rounded-[50%] bg-(--primary)/25" />
            <div className="absolute -right-10 bottom-0 h-64 w-[75%] rounded-[50%] bg-(--primary)/40" />
            <div className="absolute right-9 top-8 h-20 w-20 rounded-full bg-(--accent)/55" />
            <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-(--foreground)/10 bg-[#53604e]/70" />
          </div>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.belongingEyebrow')}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('about.belongingTitle')}
            </h2>
            <p className="mt-5 leading-7 text-(--muted)">{t('about.belongingCopy')}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-(--border) bg-(--surface) py-16 md:py-20">
        <Container>
          <div className="rounded-[2rem] bg-(--primary) px-6 py-12 text-white sm:px-10 md:px-14 md:py-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                {t('about.finalEyebrow')}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
                {t('about.finalTitle')}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                {t('about.finalDescription')}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  to={`${prefix}/get-involved`}
                  className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!"
                >
                  {t('about.finalParticipate')}
                </Button>
                <Button
                  to={`${prefix}/donate`}
                  variant="secondary"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10"
                >
                  {t('about.finalSupport')}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
