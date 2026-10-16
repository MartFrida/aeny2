import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { Course } from '../../data/courses'

type CourseCardProps = {
  course: Course
  language: 'en' | 'es'
}

export function CourseCard({ course, language }: CourseCardProps) {
  const { t } = useTranslation()
  const title = language === 'es' ? course.titleEs : course.titleEn
  const summary = language === 'es' ? course.summaryEs : course.summaryEn

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-(--border) bg-(--surface) transition-colors hover:border-(--primary)/50">
      {course.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-(--accent-soft)">
          <img
            src={course.image}
            alt={t('courses.coursePhotoAlt', { course: title })}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            width="800"
            height="500"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary)">
            {t(`courses.categories.${course.category}`)}
          </span>
          {course.duration ? (
            <span className="text-xs text-(--muted)">
              {t('courses.durationHours', { count: course.duration })}
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 font-display text-xl leading-snug tracking-[-0.02em] text-(--foreground)">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-(--muted)">{summary}</p>
        <p className="mt-5 text-xs font-medium leading-5 text-(--muted)">
          {t(`courses.availability.${course.availability}`)}
        </p>
        <Link
          to={`/${language}/courses/${course.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-(--primary) transition-colors hover:text-(--foreground) focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary)"
        >
          {t('courses.viewCourse')}
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  )
}
