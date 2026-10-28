import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'

const services = [
  {
    key: 'migrants',
    id: 'apoyo-a-migrantes',
    image: '/images/aeiny/community-outreach-booth.webp',
    imagePosition: 'object-center',
    points: ['information', 'rights', 'resources'],
  },
  {
    key: 'osha',
    id: 'cursos-osha',
    image: '/images/aeiny/workforce-classroom.webp',
    imagePosition: 'object-[center_40%]',
    points: ['safety', 'prevention', 'skills'],
  },
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
        canonicalPath={`${prefix}/our-work`}
        alternateLanguagePaths={{ en: '/en/our-work', es: '/es/our-work' }}
      />

      {/* Community Services hero */}
      <section className="relative isolate overflow-hidden bg-(--surface-dark) text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute right-16 top-16 h-64 w-64 rounded-full border border-(--accent)/25" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
        </div>
        <Container className="relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {t('ourWork.heroEyebrow')}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t('ourWork.heroTitle')}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {t('ourWork.heroDescription')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                to="#centro-comunitario"
                className="justify-center bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!"
              >
                {t('ourWork.heroPrimary')}
                <ArrowDown aria-hidden="true" size={16} className="ml-2" />
              </Button>
              <Button
                to={`${prefix}/contact`}
                variant="secondary"
                className="justify-center border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                {t('ourWork.heroSecondary')}
                <ArrowUpRight aria-hidden="true" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5">
              <img
                src="/images/aeiny/community-gathering.webp"
                alt={t('ourWork.heroPhotoAlt')}
                className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
                width="960"
                height="720"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Centro Comunitario Andino — part of Alianza Ecuatoriana Internacional */}
      <section id="centro-comunitario" className="scroll-mt-24 bg-(--background) py-14 md:py-20">
        <Container className="grid items-center gap-9 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('ourWork.centerEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl md:text-5xl">
              {t('ourWork.centerTitle')}
            </h2>
            <p className="mt-5 font-display text-xl leading-snug text-(--foreground) sm:text-2xl">
              {t('ourWork.centerLead')}
            </p>
            <p className="mt-4 text-base leading-7 text-(--muted)">{t('ourWork.centerCopy')}</p>
            <p className="mt-4 border-l-2 border-(--accent) pl-4 text-sm leading-6 text-(--muted)">
              {t('ourWork.centerRelationship')}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-(--border) bg-(--accent-soft)">
            <img
              src="/images/aeiny/original/12safety-classroom_11zon.webp"
              alt={t('ourWork.centerPhotoAlt')}
              className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
              width="960"
              height="720"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Container>
      </section>

      {/* Two specific community services; Culture is presented in its own section */}
      <section id="servicios" className="scroll-mt-24 border-y border-(--border) bg-(--surface)">
       
        {services.map(({ key, id, image, imagePosition, points }, index) => (
          <article
            key={key}
            id={id}
            className={`scroll-mt-24 border-t border-(--border) py-12 md:py-16 ${index % 2 === 0 ? 'bg-(--background)' : 'bg-(--surface)'}`}
          >
            <Container className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={index === 1 ? 'lg:order-2' : ''}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                  <span className="mr-3 font-display text-base text-(--accent)">0{index + 1}</span>
                  {t(`ourWork.services.${key}.eyebrow`)}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) sm:text-4xl">
                  {t(`ourWork.services.${key}.title`)}
                </h3>
                <p className="mt-5 font-display text-xl leading-snug text-(--foreground) sm:text-2xl">
                  {t(`ourWork.services.${key}.lead`)}
                </p>
                <p className="mt-4 text-base leading-7 text-(--muted)">
                  {t(`ourWork.services.${key}.copy`)}
                </p>
                <ul className="mt-6 grid gap-x-5 gap-y-3 border-t border-(--border) pt-5 sm:grid-cols-2">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-(--foreground)">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" />
                      {t(`ourWork.services.${key}.points.${point}`)}
                    </li>
                  ))}
                </ul>
                <Button
                  to={`${prefix}/${key === 'osha' ? 'courses' : 'contact'}`}
                  className="mt-7"
                >
                  {t(`ourWork.services.${key}.cta`)}
                  <ArrowRight aria-hidden="true" size={16} className="ml-2" />
                </Button>
              </div>
              <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-(--border) bg-(--accent-soft) ${index === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={image}
                  alt={t(`ourWork.services.${key}.photoAlt`)}
                  className={`absolute inset-0 h-full w-full object-cover ${imagePosition}`}
                  width="960"
                  height="720"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Container>
          </article>
        ))}
      </section>

      {/* Contact and existing courses, no duplicate course listings */}
      <section className="bg-(--surface) py-12 md:py-16">
        <Container>
          <div className="grid gap-7 bg-(--primary) px-6 py-9 text-white sm:px-9 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:px-12 md:py-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                {t('ourWork.finalTitle')}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/85">{t('ourWork.finalCopy')}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button to={`${prefix}/contact`} className="justify-center bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!">
                {t('ourWork.finalContact')}
              </Button>
              <Button
                to={`${prefix}/courses`}
                variant="secondary"
                className="justify-center border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                {t('ourWork.finalCourses')}
                <ArrowUpRight aria-hidden="true" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
