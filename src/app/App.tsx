import { RouterProvider } from 'react-router-dom'
import '../i18n'
import { router } from './router'

export function App() {
  return <RouterProvider router={router} />
}
