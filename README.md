# Map of Pi — Marketing Site

> **Repo:** `map-of-pi/map-of-pi-marketing`
> **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui · next-intl · pnpm
> **Live site:** [mapofpi.com](https://www.mapofpi.com) — currently on Wix

---

## What This Repo Is

The GitHub-based marketing site for Map of Pi. It runs alongside the live Wix site and is being built to eventually replace it.

**The hybrid workflow:**
- Build and preview locally with `pnpm dev`
- Review via PR on GitHub before anything touches the live site
- Approved content gets ported to Wix by the marketing team
- When this repo is production-ready it replaces Wix entirely

**The build philosophy:**
- HTML snippets first — build the smallest working piece, preview it, then expand
- Components are self-contained and reusable — the same tier data that powers the marketing page can inform the real app
- `messages/en.json` is the single source of truth for all copy — no hardcoded strings in components
- The UI library (shadcn/ui + Radix) is fully installed — use what's there before adding anything new

---

## Getting Started

```bash
pnpm install
pnpm dev
# open http://localhost:3000
