import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '../common/Container'
import { courseInformationUrl } from '../../data/courses'

type CourseInquiryProps = {
  id?: string
  courseTitle?: string
}

export function CourseInquiry({ id = 'course-inquiry', courseTitle }: CourseInquiryProps) {
  const { t } = useTranslation()

  return (
    <section id={id} className="scroll-mt-24 bg-(--surface-dark) py-14 text-white md:py-20">
      <Container className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
            {t('courses.inquiry.eyebrow')}
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
            {t('courses.inquiry.title')}
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/75">
            {courseTitle
              ? t('courses.inquiry.copyWithCourse', { course: courseTitle })
              : t('courses.inquiry.copy')}
          </p>
        </div>
        <a
          href={courseInformationUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-(--surface-dark) transition-colors hover:bg-(--accent)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 sm:w-auto"
        >
          {t('courses.inquiry.cta')} <ArrowUpRight aria-hidden="true" size={16} className="ml-2" />
        </a>
      </Container>
    </section>
  )
}
