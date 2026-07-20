'use client'

import { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [piPrice, setPiPrice] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/pi-price')
      .then(r => r.json())
      .then(d => setPiPrice(d?.price ?? null))
      .catch(() => null)
  }, [])

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="border-b bg-background px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold">🗺️ Map of Pi</span>
          <span className="text-muted-foreground text-sm">Team Dashboard</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          {piPrice && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-mono">
              π {piPrice}
            </span>
          )}
          <span className="text-muted-foreground">
            {new Date().toLocaleDateString('en-GB', {
              weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
            })}
          </span>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
