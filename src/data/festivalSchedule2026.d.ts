type FestivalScheduleItem = {
  startTime: string
  endTime?: string
  title: string
  type: 'film' | 'forum' | 'discussion' | 'opening' | 'ceremony' | 'closing'
  filmId?: number
  specialKey?: string
}

type FestivalScheduleDay = {
  date: string
  dayLabelKey: string
  items: FestivalScheduleItem[]
}

export const festivalSchedule2026: FestivalScheduleDay[]
