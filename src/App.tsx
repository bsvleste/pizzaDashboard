import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router'

import { Toaster } from './components/ui/toaster'
import { router } from './routes'
export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s |pizza.shop" />
      <RouterProvider router={router} />
      <Toaster />
    </HelmetProvider>
  )
}
