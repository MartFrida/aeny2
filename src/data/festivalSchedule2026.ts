export type FestivalScheduleItem = {
  startTime: string
  endTime?: string
  title: string
  type: 'film' | 'forum' | 'discussion' | 'opening' | 'ceremony' | 'closing'
  filmId?: number
  specialKey?: string
}

export type FestivalScheduleDay = {
  date: string
  dayLabelKey: string
  items: FestivalScheduleItem[]
}

export const festivalSchedule2026: FestivalScheduleDay[] = [
  {
    date: '2026-11-08',
    dayLabelKey: 'festivalSchedule2026.days.opening',
    items: [
      { startTime: '15:00', endTime: '15:45', title: 'Cueva de los Tayos', type: 'film', filmId: 1 },
      { startTime: '16:00', endTime: '16:10', title: 'Yo vivo libre de violencia', type: 'film', filmId: 2 },
      { startTime: '16:20', endTime: '17:15', title: 'Extraños Seres', type: 'film', filmId: 3 },
      { startTime: '17:30', endTime: '17:45', title: 'DUSSHISHIK', type: 'film', filmId: 4 },
      {
        startTime: '18:00',
        endTime: '18:30',
        title: 'festivalSchedule2026.activities.opening',
        type: 'opening',
      },
    ],
  },
  {
    date: '2026-11-09',
    dayLabelKey: 'festivalSchedule2026.days.shortFilms',
    items: [
      { startTime: '15:00', endTime: '15:15', title: 'Iliana', type: 'film' },
      { startTime: '15:25', endTime: '15:35', title: 'Identidades culturales inmigrantes', type: 'film' },
      { startTime: '15:45', endTime: '16:00', title: 'Canta Sing', type: 'film', filmId: 7 },
      { startTime: '16:10', endTime: '16:15', title: 'Tratar', type: 'film', filmId: 8 },
      { startTime: '16:25', endTime: '16:35', title: 'Abuelo Montaña', type: 'film', filmId: 9 },
      { startTime: '16:45', endTime: '17:05', title: 'Morenada', type: 'film', filmId: 10 },
      {
        startTime: '17:15',
        endTime: '17:45',
        title: 'festivalSchedule2026.activities.participantForum',
        type: 'forum',
      },
    ],
  },
  {
    date: '2026-11-10',
    dayLabelKey: 'festivalSchedule2026.days.november10',
    items: [
      { startTime: '15:00', endTime: '16:05', title: 'Pachakutik', type: 'film' },
      { startTime: '16:15', endTime: '16:45', title: 'En alas del intento', type: 'film', filmId: 12 },
      { startTime: '16:55', endTime: '17:30', title: 'Yachana Wasi Rurarkkuna', type: 'film' },
      { startTime: '17:40', endTime: '18:00', title: 'Mariposas de Sangre', type: 'film', filmId: 15 },
      {
        startTime: '18:10',
        endTime: '18:40',
        title: 'festivalSchedule2026.activities.directorForum',
        type: 'forum',
      },
    ],
  },
  {
    date: '2026-11-11',
    dayLabelKey: 'festivalSchedule2026.days.november11',
    items: [
      { startTime: '15:00', endTime: '18:05', title: 'Cantuña, la película', type: 'film', filmId: 14 },
      { startTime: '18:20', endTime: '18:25', title: 'The Last Trip', type: 'film', filmId: 16 },
      { startTime: '18:35', endTime: '18:45', title: 'El oportuno arte de hacer', type: 'film' },
      { startTime: '18:55', endTime: '19:10', title: 'Conocer el Mar', type: 'film' },
      {
        startTime: '19:20',
        endTime: '19:40',
        title: 'festivalSchedule2026.activities.audienceForum',
        type: 'forum',
      },
    ],
  },
  {
    date: '2026-11-12',
    dayLabelKey: 'festivalSchedule2026.days.november12',
    items: [
      { startTime: '15:00', endTime: '16:00', title: 'Amazonas', type: 'film' },
      { startTime: '16:15', endTime: '16:25', title: 'Muerte Pungo', type: 'film' },
      { startTime: '16:40', endTime: '17:25', title: 'Amawtas en Cataluña', type: 'film', filmId: 18 },
      { startTime: '17:40', endTime: '17:55', title: 'Allpamanda', type: 'film', filmId: 24 },
      {
        startTime: '18:00',
        endTime: '18:30',
        title: 'festivalSchedule2026.activities.filmmakerForum',
        type: 'forum',
      },
    ],
  },
  {
    date: '2026-11-13',
    dayLabelKey: 'festivalSchedule2026.days.november13',
    items: [
      { startTime: '15:00', endTime: '15:05', title: 'Voz Inmigrante', type: 'film' },
      { startTime: '15:15', endTime: '16:05', title: 'Diáspora del Arte', type: 'film', filmId: 21 },
      { startTime: '16:25', endTime: '17:55', title: 'Alfaro la Revolución', type: 'film' },
      { startTime: '17:55', endTime: '18:00', title: 'Karanakuy', type: 'film', filmId: 26 },
      {
        startTime: '18:05',
        endTime: '18:30',
        title: 'festivalSchedule2026.activities.directorMeeting',
        type: 'forum',
      },
    ],
  },
  {
    date: '2026-11-14',
    dayLabelKey: 'festivalSchedule2026.days.november14',
    items: [
      { startTime: '15:00', endTime: '15:15', title: 'Muñecas Rusas', type: 'film', filmId: 29 },
      { startTime: '15:25', endTime: '15:35', title: 'Patrones de Conducta', type: 'film', filmId: 31 },
      { startTime: '15:45', endTime: '15:50', title: 'El Pincho', type: 'film', filmId: 30 },
      { startTime: '16:00', endTime: '16:15', title: 'Los Yachaks', type: 'film', filmId: 32 },
      { startTime: '17:00', endTime: '18:35', title: 'Angélica', type: 'film', filmId: 27 },
      {
        startTime: '18:45',
        endTime: '19:10',
        title: 'festivalSchedule2026.activities.filmmakerAudienceMeeting',
        type: 'discussion',
      },
    ],
  },
  {
    date: '2026-11-15',
    dayLabelKey: 'festivalSchedule2026.days.closing',
    items: [
      {
        startTime: '15:00',
        endTime: '16:30',
        title: 'ADDICTUS',
        type: 'film',
        filmId: 33,
        specialKey: 'festivalSchedule2026.specialScreening',
      },
      {
        startTime: '16:45',
        endTime: '17:30',
        title: 'festivalSchedule2026.activities.filmDiscussion',
        type: 'discussion',
      },
      {
        startTime: '17:30',
        endTime: '18:15',
        title: 'festivalSchedule2026.activities.finalMeeting',
        type: 'discussion',
      },
      {
        startTime: '18:30',
        title: 'festivalSchedule2026.activities.awardsCeremony',
        type: 'ceremony',
      },
      {
        startTime: '19:30',
        title: 'festivalSchedule2026.activities.festivalClosing',
        type: 'closing',
      },
    ],
  },
]
