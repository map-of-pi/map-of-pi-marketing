import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GitBranch, GitPullRequest, Clock } from 'lucide-react'

async function getGithubData() {
  try {
    const [branchRes, prRes] = await Promise.all([
      fetch('https://api.github.com/repos/map-of-pi/map-of-pi-marketing/branches', {
        next: { revalidate: 300 }
      }),
      fetch('https://api.github.com/repos/map-of-pi/map-of-pi-marketing/pulls?state=open', {
        next: { revalidate: 300 }
      })
    ])
    const branches = await branchRes.json()
    const prs = await prRes.json()
    return { branches, prs }
  } catch {
    return { branches: [], prs: [] }
  }
}

export async function GithubCard() {
  const { branches, prs } = await getGithubData()

  const branchList = [
    { name: 'dev', label: 'Default', color: 'default' },
    { name: 'feat/membership-tabs', label: 'In Progress', color: 'secondary' },
    { name: 'redesign/v2-marketing', label: 'Planned', color: 'outline' },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <GitBranch className="w-4 h-4" />
          GitHub Repo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">

        {/* Branches */}
        <div>
          <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Branches</p>
          <div className="space-y-1.5">
            {branchList.map(b => (
              <div key={b.name} className="flex items-center justify-between">
                <span className="text-sm font-mono truncate max-w-[180px]">{b.name}</span>
                <Badge variant={b.color as any}>{b.label}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Open PRs */}
        <div>
          <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
            Open PRs ({Array.isArray(prs) ? prs.length : 0})
          </p>
          {Array.isArray(prs) && prs.length > 0 ? (
            <div className="space-y-1.5">
              {prs.slice(0, 3).map((pr: any) => (
                <a
                  key={pr.id}
                  href={pr.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <GitPullRequest className="w-3 h-3 shrink-0" />
                  <span className="truncate">{pr.title}</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No open PRs</p>
          )}
        </div>

        {/* Repo link */}
        <a
          href="https://github.com/map-of-pi/map-of-pi-marketing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline"
        >
          Open repo →
        </a>
      </CardContent>
    </Card>
  )
}
