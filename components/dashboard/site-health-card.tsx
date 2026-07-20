import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

const pages = [
  { page: 'Hero',            wix: true,  repo: true  },
  { page: 'Pi price ticker', wix: true,  repo: true  },
  { page: 'Hackathon win',   wix: true,  repo: true  },
  { page: 'EscrowPi',        wix: true,  repo: true  },
  { page: 'M.A.C.',          wix: true,  repo: true  },
  { page: 'Instagram feed',  wix: true,  repo: false },
  { page: '/membership',     wix: false, repo: true  },
  { page: '/live',           wix: true,  repo: false },
  { page: '/roadmap',        wix: false, repo: true  },
  { page: '/team',           wix: false, repo: true  },
  { page: '/about',          wix: false, repo: true  },
]

export function SiteHealthCard() {
  const gaps = pages.filter(p => p.wix !== p.repo).length

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-base">
          <span>📊 Site Health</span>
          <span className="text-xs font-normal text-muted-foreground">
            {gaps} gap{gaps !== 1 ? 's' : ''}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 gap-y-1.5 text-sm">
          <span className="text-xs text-muted-foreground">Page</span>
          <span className="text-xs text-muted-foreground text-center">Wix</span>
          <span className="text-xs text-muted-foreground text-center">Repo</span>
          {pages.map(p => (
            <>
              <span key={p.page} className="truncate">{p.page}</span>
              <span className="flex justify-center">
                {p.wix
                  ? <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                  : <XCircle className="w-3.5 h-3.5 text-muted-foreground/40" />
                }
              </span>
              <span className="flex justify-center">
                {p.repo
                  ? <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                  : <XCircle className="w-3.5 h-3.5 text-muted-foreground/40" />
                }
              </span>
            </>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
