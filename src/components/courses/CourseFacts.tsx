import { useTranslation } from 'react-i18next'
import type { Course } from '../../data/courses'

type CourseFactsProps = {
  course: Course
}

export function CourseFacts({ course }: CourseFactsProps) {
  const { t } = useTranslation()

  return (
    <dl className="grid gap-4 border-y border-(--border) py-5 sm:grid-cols-2">
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-(--muted)">
          {t('courses.facts.duration')}
        </dt>
        <dd className="mt-2 font-medium text-(--foreground)">
          {course.duration
            ? t('courses.durationHours', { count: course.duration })
            : t('courses.facts.notSpecified')}
        </dd>
      </div>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-(--muted)">
          {t('courses.facts.availability')}
        </dt>
        <dd className="mt-2 font-medium text-(--foreground)">
          {t(`courses.availability.${course.availability}`)}
        </dd>
      </div>
    </dl>
  )
}
