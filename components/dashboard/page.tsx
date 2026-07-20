import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { SiteHealthCard } from '@/components/dashboard/site-health-card'
import { GithubCard } from '@/components/dashboard/github-card'
import { ClickUpCard } from '@/components/dashboard/clickup-card'
import { DiscordCard } from '@/components/dashboard/discord-card'
import { BuildStatusCard } from '@/components/dashboard/build-status-card'
import { QuickLinksCard } from '@/components/dashboard/quick-links-card'

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <SiteHealthCard />
        <GithubCard />
        <ClickUpCard />
        <DiscordCard />
        <BuildStatusCard />
        <QuickLinksCard />
      </div>
    </DashboardShell>
  )
}
