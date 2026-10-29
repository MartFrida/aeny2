import { NotFoundPage } from '../pages/NotFound'
import { publicPageRoutes, filmRoutePrefix } from '../data/routes'
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { LegacyFestivalRedirect, LegacyFilmRedirect } from './LegacyFestivalRedirect'
import { LegacyNewsRedirect } from './LegacyNewsRedirect'
import { ScrollToTop } from '../components/ScrollToTop'

const pageLoaders = {
  home: () => import('../pages/Home').then((module) => ({ Component: module.HomePage })),
  about: () => import('../pages/About').then((module) => ({ Component: module.AboutPage })),
  ourWork: () => import('../pages/OurWork').then((module) => ({ Component: module.OurWorkPage })),
  communityAid: () => import('../pages/OurWork/HumanitarianAidPage').then((module) => ({ Component: module.HumanitarianAidPage })),
  projects: () => import('../pages/Projects').then((module) => ({ Component: module.ProjectsPage })),
  projectParque: () => import('../pages/Projects/ParqueDelMigrantePage').then((module) => ({ Component: module.ParqueDelMigrantePage })),
  events: () => import('../pages/Events').then((module) => ({ Component: module.EventsPage })),
  chasqui2026: () => import('../pages/Events/ChasquiMigrante2026Page').then((module) => ({ Component: module.ChasquiMigrante2026Page })),
  festival2026: () => import('../pages/Events/AndeanFilmFestival2026Page').then((module) => ({ Component: module.AndeanFilmFestival2026Page })),
  eventKuri2023: () => import('../pages/Events/KuriChasqui2023Page').then((module) => ({ Component: module.KuriChasqui2023Page })),
  courses: () => import('../pages/Courses').then((module) => ({ Component: module.CoursesPage })),
  getInvolved: () => import('../pages/GetInvolved').then((module) => ({ Component: module.GetInvolvedPage })),
  donate: () => import('../pages/Donate').then((module) => ({ Component: module.DonatePage })),
  contact: () => import('../pages/Contact').then((module) => ({ Component: module.ContactPage })),
} as const

export const router = createBrowserRouter([
  {
    HydrateFallback: () => null,
    element: (
      <>
        <ScrollToTop />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/en" replace />,
      },
      {
        path: '/:lang',
        element: <AppLayout />,
        children: [
          ...publicPageRoutes.map(({ id, path }) => ({
            ...(path ? { path } : { index: true as const }),
            lazy: pageLoaders[id],
          })),
          {
            path: `${filmRoutePrefix}:slug`,
            lazy: () => import('../pages/Events/KuriChasquiFilmDetailPage').then((module) => ({ Component: module.KuriChasquiFilmDetailPage })),
          },
          { path: 'events/kuri-chasqui-2026', element: <LegacyFestivalRedirect /> },
          { path: 'events/kuri-chasqui-2026/films/:slug', element: <LegacyFilmRedirect /> },
          { path: 'courses/:slug', lazy: () => import('../pages/Courses/CourseDetailPage').then((module) => ({ Component: module.CourseDetailPage })) },
          { path: 'news', element: <LegacyNewsRedirect /> },
          { path: 'news/*', element: <LegacyNewsRedirect /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
