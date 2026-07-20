import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'

const links = [
  { group: 'Live',
    items: [
      { label: 'mapofpi.com', url: 'https://www.mapofpi.com' },
      { label: 'Map of Pi Live', url: 'https://www.mapofpi.com/live' },
      { label: 'App (Pi Browser)', url: 'https://mapofpi.pinet.com/' },
    ]
  },
  { group: 'Team',
    items: [
      { label: 'GitHub Repo', url: 'https://github.com/map-of-pi/map-of-pi-marketing' },
      { label: 'ClickUp', url: 'https://app.clickup.com' },
      { label: 'Discord', url: 'https://discord.com' },
    ]
  },
  { group: 'Ecosystem',
    items: [
      { label: 'M.A.C.', url: 'https://chatwithmac.com' },
      { label: 'EscrowPi', url: 'https://escrowpi-corporate-identity.lovable.app/' },
      { label: 'Frontend Repo', url: 'https://github.com/map-of-pi/map-of-pi-frontend' },
    ]
  },
]

export function QuickLinksCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          🔗 Quick Links
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {links.map(group => (
          <div key={group.group}>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5">
              {group.group}
            </p>
            <div className="space-y-1">
              {group.items.map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-3 h-3 shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
