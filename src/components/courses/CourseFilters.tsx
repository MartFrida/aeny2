import { Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { CourseCategory } from '../../data/courses'

type CourseFiltersProps = {
  category: CourseCategory | 'all'
  onCategoryChange: (category: CourseCategory | 'all') => void
  search: string
  onSearchChange: (value: string) => void
}

const filters: Array<CourseCategory | 'all'> = [
  'all',
  'safety',
  'scaffold',
  'trades',
  'construction',
]

export function CourseFilters({
  category,
  onCategoryChange,
  search,
  onSearchChange,
}: CourseFiltersProps) {
  const { t } = useTranslation()

  return (
    <div className="space-y-5">
      <div className="relative max-w-xl">
        <label htmlFor="course-search" className="sr-only">
          {t('courses.searchLabel')}
        </label>
        <Search aria-hidden="true" size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--muted)" />
        <input
          id="course-search"
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={t('courses.searchLabel')}
          className="w-full rounded-md border border-(--border) bg-(--surface) py-3 pl-11 pr-4 text-sm text-(--foreground) outline-none transition focus-visible:border-(--primary) focus-visible:ring-2 focus-visible:ring-(--ring)"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label={t('courses.filtersLabel')}>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={category === filter}
            onClick={() => onCategoryChange(filter)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary) ${
              category === filter
                ? 'border-(--primary) bg-(--primary) text-white'
                : 'border-(--border) bg-(--surface) text-(--foreground) hover:border-(--primary)/60'
            }`}
          >
            {t(`courses.filters.${filter}`)}
          </button>
        ))}
      </div>
    </div>
  )
}
