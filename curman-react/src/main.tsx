import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import './index.css'

const CLOUDFLARE_CACHE_RESET_KEY = 'cml-cloudflare-cache-reset-v1'

async function retireLegacyServiceWorker(): Promise<void> {
  if (sessionStorage.getItem(CLOUDFLARE_CACHE_RESET_KEY) === 'done') return

  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations()
    await Promise.all(registrations.map((registration) => registration.unregister()))
  }

  if ('caches' in window) {
    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)))
  }

  sessionStorage.setItem(CLOUDFLARE_CACHE_RESET_KEY, 'done')
}

void retireLegacyServiceWorker().catch(() => {
  // Cache cleanup is defensive and must not block the application startup.
})

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 5 * 60 * 1000, retry: 1, refetchOnWindowFocus: false } } })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)
