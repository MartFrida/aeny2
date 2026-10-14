import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { LegacyFestivalRedirect, LegacyFilmRedirect } from './LegacyFestivalRedirect'
import { HomePage } from '../pages/Home'
import { AboutPage } from '../pages/About'
import { OurWorkPage } from '../pages/OurWork'
import { ProjectsPage } from '../pages/Projects'
import { ParqueDelMigrantePage } from '../pages/Projects/ParqueDelMigrantePage'
import { EventsPage } from '../pages/Events'
import { AndeanFilmFestival2026Page } from '../pages/Events/AndeanFilmFestival2026Page'
import { KuriChasquiFilmDetailPage } from '../pages/Events/KuriChasquiFilmDetailPage'
import { KuriChasqui2023Page } from '../pages/Events/KuriChasqui2023Page'
import { NewsPage } from '../pages/News'
import { GetInvolvedPage } from '../pages/GetInvolved'
import { DonatePage } from '../pages/Donate'
import { ContactPage } from '../pages/Contact'
import { NotFoundPage } from '../pages/NotFound'

export const router = createBrowserRouter([
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
      { path: 'news', element: <NewsPage /> },
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
])
