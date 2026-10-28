import { useMemo, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../components/common/Container'
import { CourseCard } from '../../components/courses/CourseCard'
import { CourseFilters } from '../../components/courses/CourseFilters'
import { CourseInquiry } from '../../components/courses/CourseInquiry'
import { PageMetadata } from '../../components/common/PageMetadata'
import { courses, type CourseCategory } from '../../data/courses'

const faqItems = ['availability', 'prices', 'credentials'] as const

export function CoursesPage() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const [category, setCategory] = useState<CourseCategory | 'all'>('all')
  const [search, setSearch] = useState('')

  const visibleCourses = useMemo(() => {
    const query = search.trim().toLocaleLowerCase(language)
    return courses.filter((course) => {
      const matchesCategory = category === 'all' || course.category === category
      const title = language === 'es' ? course.titleEs : course.titleEn
      const summary = language === 'es' ? course.summaryEs : course.summaryEn
      const description = language === 'es' ? course.descriptionEs : course.descriptionEn
      const topics = language === 'es' ? course.topicsEs : course.topicsEn
      const searchable = [
        title,
        summary,
        description,
        ...topics,
        t(`courses.categories.${course.category}`),
      ]
      const matchesSearch =
        query.length === 0 ||
        searchable.some((value) => value.toLocaleLowerCase(language).includes(query))
      return matchesCategory && matchesSearch
    })
  }, [category, language, search, t])

  return (
    <>
      <PageMetadata
        language={language}
        title={t('courses.seoTitle')}
        description={t('courses.seoDescription')}
        canonicalPath={`/${language}/courses`}
        alternateLanguagePaths={{ en: '/en/courses', es: '/es/courses' }}
      />

{/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-(--surface-dark) text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-16 -top-20 h-80 w-80 rounded-full border border-white/10 sm:h-96 sm:w-96" />
          <div className="absolute right-10 top-14 h-56 w-56 rounded-full border border-(--accent)/25 sm:right-16 sm:h-64 sm:w-64" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
        </div>
        <Container className="relative grid gap-9 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {t('courses.hero.eyebrow')}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
              {t('courses.hero.title')}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {t('courses.hero.copy')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#course-catalog"
                className="inline-flex w-full items-center justify-center rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-(--surface-dark) transition-colors hover:bg-(--accent)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 sm:w-auto"
              >
                {t('courses.hero.primary')} <ArrowDown aria-hidden="true" size={16} className="ml-2" />
              </a>
              <a
                href="#course-inquiry"
                className="inline-flex w-full items-center justify-center rounded-md border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 sm:w-auto"
              >
                {t('courses.hero.secondary')} <ArrowUpRight aria-hidden="true" size={16} className="ml-2" />
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-white/15 bg-white/5">
            <img
              src="/images/aeiny/workforce-classroom.webp"
              alt={t('courses.hero.imageAlt')}
              className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
              width="960"
              height="720"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </Container>
      </section>

{/* Course Catalog Section */}
      <section id="course-catalog" className="scroll-mt-24 border-y border-(--border) bg-(--surface) py-12 md:py-16">
        <Container>
          <div className="mb-8 max-w-3xl md:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t('courses.catalog.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl md:text-5xl">
              {t('courses.catalog.title')}
            </h2>
            <p className="mt-4 leading-7 text-(--muted)">{t('courses.catalog.copy')}</p>
          </div>
          <CourseFilters
            category={category}
            onCategoryChange={setCategory}
            search={search}
            onSearchChange={setSearch}
          />
          <p className="sr-only" aria-live="polite">
            {t('courses.catalog.resultsCount', { count: visibleCourses.length })}
          </p>
          {visibleCourses.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCourses.map((course) => (
                <CourseCard key={course.id} course={course} language={language} />
              ))}
            </div>
          ) : (
            <p className="mt-8 border-t border-(--border) py-8 text-(--muted)">
              {t('courses.catalog.noResults')}
            </p>
          )}
        </Container>
      </section>

{/* Why Choose Us Section */}
      <section className="bg-(--background) py-12 md:py-16">
        <Container className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t('courses.why.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) sm:text-4xl md:text-5xl">
              {t('courses.why.title')}
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-7 text-(--muted) md:text-lg md:leading-8">
            {t('courses.why.copy')}
          </p>
        </Container>
      </section>

{/* Formats Section */}
      <section className="border-y border-(--border) bg-(--surface) py-12 md:py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t('courses.formats.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) sm:text-4xl">
              {t('courses.formats.title')}
            </h2>
          </div>
          <div>
            <p className="leading-7 text-(--muted)">{t('courses.formats.copy')}</p>
            <ul className="mt-6 grid gap-4 border-t border-(--border) pt-5 sm:grid-cols-3">
              {(['online', 'in-person', 'hybrid'] as const).map((format) => (
                <li key={format}>
                  <h3 className="font-semibold text-(--foreground)">
                    {t(`courses.formats.${format}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-(--muted)">
                    {t(`courses.formats.${format}.copy`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

{/* FAQ Section */}
      <section className="bg-(--background) py-12 md:py-16">
        <Container className="max-w-4xl">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t('courses.faq.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl">
              {t('courses.faq.title')}
            </h2>
          </div>
          <div className="border-t border-(--border)">
            {faqItems.map((item) => (
              <details key={item} className="group border-b border-(--border) py-5">
                <summary className="cursor-pointer list-none pr-8 font-semibold text-(--foreground) marker:hidden focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary)">
                  {t(`courses.faq.${item}.question`)}
                </summary>
                <p className="mt-3 max-w-3xl leading-7 text-(--muted)">
                  {t(`courses.faq.${item}.answer`)}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CourseInquiry />
    </>
  )
}
