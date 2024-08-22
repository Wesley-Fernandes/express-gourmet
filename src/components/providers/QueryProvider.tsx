"use client"
import { QueryClient, QueryClientProvider, QueryCache} from '@tanstack/react-query'
import { ReactNode } from 'react'

interface Props{
  children:ReactNode;
}
export default function QueryProvider({children}:Props) {
    const client = new QueryClient({
        defaultOptions: {
          queries: {
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
          },
        },
      })
  return (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}
