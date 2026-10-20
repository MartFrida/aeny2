import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { LegacyFestivalRedirect, LegacyFilmRedirect } from './LegacyFestivalRedirect'
import { LegacyNewsRedirect } from './LegacyNewsRedirect'
import { ScrollToTop } from '../components/ScrollToTop'
import { HomePage } from '../pages/Home'
import { AboutPage } from '../pages/About'
import { OurWorkPage } from '../pages/OurWork'
import { ProjectsPage } from '../pages/Projects'
import { ParqueDelMigrantePage } from '../pages/Projects/ParqueDelMigrantePage'
import { EventsPage } from '../pages/Events'
import { AndeanFilmFestival2026Page } from '../pages/Events/AndeanFilmFestival2026Page'
import { KuriChasquiFilmDetailPage } from '../pages/Events/KuriChasquiFilmDetailPage'
import { KuriChasqui2023Page } from '../pages/Events/KuriChasqui2023Page'
import { ChasquiMigrante2026Page } from '../pages/Events/ChasquiMigrante2026Page'
import { CoursesPage } from '../pages/Courses'
import { CourseDetailPage } from '../pages/Courses/CourseDetailPage'
import { GetInvolvedPage } from '../pages/GetInvolved'
import { DonatePage } from '../pages/Donate'
import { ContactPage } from '../pages/Contact'
import { NotFoundPage } from '../pages/NotFound'

export const router = createBrowserRouter([
  {
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
          { index: true, element: <HomePage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'our-work', element: <OurWorkPage /> },
          { path: 'projects', element: <ProjectsPage /> },
          { path: 'projects/parque-del-migrante', element: <ParqueDelMigrantePage /> },
          { path: 'events', element: <EventsPage /> },
          { path: 'events/chasqui-migrante-2026', element: <ChasquiMigrante2026Page /> },
          {
            path: 'events/festival-internacional-de-cine-andino-2026',
            element: <AndeanFilmFestival2026Page />,
          },
          {
            path: 'events/festival-internacional-de-cine-andino-2026/films/:slug',
            element: <KuriChasquiFilmDetailPage />,
          },
          { path: 'events/kuri-chasqui-2026', element: <LegacyFestivalRedirect /> },
          { path: 'events/kuri-chasqui-2026/films/:slug', element: <LegacyFilmRedirect /> },
          { path: 'events/kuri-chasqui-2023', element: <KuriChasqui2023Page /> },
          { path: 'courses', element: <CoursesPage /> },
          { path: 'courses/:slug', element: <CourseDetailPage /> },
          { path: 'news', element: <LegacyNewsRedirect /> },
          { path: 'news/*', element: <LegacyNewsRedirect /> },
          { path: 'get-involved', element: <GetInvolvedPage /> },
          { path: 'donate', element: <DonatePage /> },
          { path: 'contact', element: <ContactPage /> },
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
