import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/toaster'
import { router } from './routes'
export function App() {
  return (
    <ThemeProvider storageKey="pizzaShop-theme" defaultTheme="dark">
      <HelmetProvider>
        <Helmet titleTemplate="%s |pizza.shop" />
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </ThemeProvider>
  )
}
