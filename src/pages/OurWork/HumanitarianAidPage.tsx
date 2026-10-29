import { ArrowDown, ArrowLeft, ArrowUpRight, CalendarDays, MapPin, Maximize2, Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'
import { aidInitiatives, communityAidPhotos, communityAidSources } from '../../data/communityAid'
import { contactInfo } from '../../data/contact'
import { communityAidRoute } from '../../data/routes'

const externalLinkClasses = 'inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-(--primary) underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--ring)'

export function HumanitarianAidPage() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const prefix = `/${language}`
  const heroPhoto = communityAidPhotos[0]
  const dateFormatter = new Intl.DateTimeFormat(language === 'es' ? 'es-US' : 'en-US', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  })

  return (
    <>
      <PageMetadata
        language={language}
        title={t('communityAid.seoTitle')}
        description={t('communityAid.seoDescription')}
        canonicalPath={`${prefix}/${communityAidRoute}`}
        alternateLanguagePaths={{ en: `/en/${communityAidRoute}`, es: `/es/${communityAidRoute}` }}
      />

      <section className="relative isolate overflow-hidden bg-(--surface-dark) text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/10" />
        <Container className="relative py-10 md:py-14 lg:py-16">
          <Link
            to={`${prefix}/our-work`}
            className="mb-8 inline-flex items-center gap-2 rounded-sm text-sm text-white/75 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t('communityAid.back')}
          </Link>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
                {t('communityAid.eyebrow')}
              </p>
              <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                {t('communityAid.title')}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                {t('communityAid.intro')}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#aid-initiatives" className="inline-flex items-center justify-center rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-(--surface-dark) hover:bg-(--accent)/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)">
                  {t('communityAid.heroPrimary')}
                  <ArrowDown size={16} className="ml-2" aria-hidden="true" />
                </a>
                <Button to={`${prefix}/contact`} variant="secondary" className="border-white/25 bg-white/5 text-white hover:bg-white/10">
                  {t('communityAid.heroSecondary')}
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5">
              <img
                src={heroPhoto.src}
                alt={t(`communityAid.photos.${heroPhoto.id}.alt`)}
                width={heroPhoto.width}
                height={heroPhoto.height}
                className="aspect-[4/3] w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="aid-initiatives" aria-labelledby="aid-initiatives-title" className="scroll-mt-24 border-b border-(--border) bg-(--background) py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">{t('communityAid.initiativesEyebrow')}</p>
            <h2 id="aid-initiatives-title" className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl">
              {t('communityAid.initiativesTitle')}
            </h2>
            <p className="mt-4 leading-7 text-(--muted)">{t('communityAid.initiativesIntro')}</p>
          </div>

          {aidInitiatives.map(({ id, date, translationKey, sourceUrl }) => (
            <article key={id} aria-labelledby={`${id}-title`} className="mt-9 grid gap-7 rounded-2xl border border-(--border) bg-(--surface) p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 lg:p-10">
              <div>
                <p className="inline-flex rounded-full bg-(--accent-soft) px-3 py-1 text-xs font-semibold text-(--primary)">{t('communityAid.completed')}</p>
                <p className="mt-5 flex items-center gap-2 text-sm text-(--muted)">
                  <CalendarDays size={16} className="shrink-0" aria-hidden="true" />
                  <time dateTime={date}>{dateFormatter.format(new Date(`${date}T12:00:00Z`))}</time>
                </p>
                <h3 id={`${id}-title`} className="mt-4 font-display text-2xl leading-tight tracking-[-0.03em] text-(--foreground) sm:text-3xl">
                  {t(`communityAid.initiatives.${translationKey}.title`)}
                </h3>
                <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-(--muted)">
                  <MapPin size={16} className="mt-1 shrink-0" aria-hidden="true" />
                  {t(`communityAid.initiatives.${translationKey}.location`)}
                </p>
              </div>
              <div>
                <p className="leading-7 text-(--foreground)">{t(`communityAid.initiatives.${translationKey}.copy`)}</p>
                <p className="mt-4 leading-7 text-(--muted)">{t(`communityAid.initiatives.${translationKey}.details`)}</p>
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className={`mt-5 ${externalLinkClasses}`}>
                  {t('communityAid.sourceLink')}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}

          <p className="mt-5 max-w-3xl border-l-2 border-(--accent) pl-4 text-sm leading-6 text-(--muted)">{t('communityAid.archiveNote')}</p>

          <div className="mt-12 md:mt-16">
            <h2 className="font-display text-2xl tracking-[-0.03em] text-(--foreground) sm:text-3xl">{t('communityAid.galleryTitle')}</h2>
            <div className="mt-6 grid items-start gap-6 md:grid-cols-[16fr_9fr]">
              {communityAidPhotos.map(({ id, src, width, height }) => (
                <figure key={id}>
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t('communityAid.openPhoto')}: ${t(`communityAid.photos.${id}.alt`)}`}
                    className="group relative block overflow-hidden rounded-xl border border-(--border) bg-(--surface) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--ring)"
                  >
                    <img src={src} alt={t(`communityAid.photos.${id}.alt`)} width={width} height={height} className="h-auto w-full" loading="lazy" decoding="async" />
                    <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-full bg-black/60 p-2.5 text-white transition-colors group-hover:bg-black/80">
                      <Maximize2 size={18} />
                    </span>
                  </a>
                  <figcaption className="mt-3 text-sm leading-6 text-(--muted)">{t(`communityAid.photos.${id}.caption`)}</figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-(--muted)">{t('communityAid.galleryCredit')}</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="aid-video-title" className="border-b border-(--border) bg-(--surface) py-12 md:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">{t('communityAid.videoEyebrow')}</p>
            <h2 id="aid-video-title" className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl">{t('communityAid.videoTitle')}</h2>
            <p className="mt-5 max-w-xl leading-7 text-(--muted)">{t('communityAid.videoCopy')}</p>
          </div>
          <div className="rounded-2xl border border-(--border) bg-(--background) p-7 sm:p-9">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-(--accent-soft) text-(--primary)" aria-hidden="true">
              <Play size={22} />
            </span>
            <a href={communityAidSources.communityVideo} target="_blank" rel="noopener noreferrer" className={`mt-5 ${externalLinkClasses}`}>
              {t('communityAid.videoCta')}
              <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
            </a>
            <p className="mt-3 text-sm leading-6 text-(--muted)">{t('communityAid.videoNote')}</p>
          </div>
        </Container>
      </section>

      <section className="bg-(--surface) py-12 md:py-16">
        <Container>
          <div className="grid gap-7 bg-(--primary) px-6 py-9 text-white sm:px-9 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:px-12 md:py-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">{t('communityAid.contactTitle')}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/85">{t('communityAid.contactCopy')}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button to={`${prefix}/contact`} className="bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!">{t('communityAid.contactCta')}</Button>
              <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)">
                {t('communityAid.whatsappCta')}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
