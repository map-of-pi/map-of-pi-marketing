import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Circle, Clock } from 'lucide-react'

const buildItems = [
  { page: 'README', branch: 'docs/add-readme', wix: false, status: 'merged' },
  { page: 'Membership tabs', branch: 'feat/membership-tabs', wix: false, status: 'in-progress' },
  { page: 'Tier pages', branch: 'feat/membership-tabs', wix: false, status: 'planned' },
  { page: '/live page', branch: 'redesign/v2-marketing', wix: true, status: 'planned' },
  { page: 'V2 hero update', branch: 'redesign/v2-marketing', wix: false, status: 'planned' },
  { page: 'Homepage reorder', branch: 'redesign/v2-marketing', wix: false, status: 'planned' },
]

const statusConfig = {
  merged:      { label: 'Merged',      icon: CheckCircle, color: 'text-green-600' },
  'in-progress': { label: 'Building',  icon: Clock,       color: 'text-yellow-600' },
  planned:     { label: 'Planned',     icon: Circle,      color: 'text-muted-foreground' },
}

export function BuildStatusCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          🏗️ Build Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {buildItems.map((item, i) => {
            const cfg = statusConfig[item.status as keyof typeof statusConfig]
            const Icon = cfg.icon
            return (
              <div key={i} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${cfg.color}`} />
                  <span className="text-sm truncate">{item.page}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {item.wix && (
                    <Badge variant="outline" className="text-xs py-0">Wix ✓</Badge>
                  )}
                  <Badge variant="secondary" className="text-xs py-0">{cfg.label}</Badge>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
