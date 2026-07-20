import type { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export const metadata = {
  title: 'Map of Pi — Team Dashboard',
  robots: 'noindex, nofollow',
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  )
}
