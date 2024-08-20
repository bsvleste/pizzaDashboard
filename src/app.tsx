import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/toaster'
import { queryClient } from './lib/react-query'
import { router } from './routes'
export function App() {
  return (
    <ThemeProvider storageKey="pizzaShop-theme" defaultTheme="dark">
      <HelmetProvider>
        <Helmet titleTemplate="%s |pizza.shop" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Toaster />
      </HelmetProvider>
    </ThemeProvider>
  )
}
