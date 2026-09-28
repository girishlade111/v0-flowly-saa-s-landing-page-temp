# Flowly — SaaS Landing Page

A modern SaaS landing page for **Flowly**, a workflow-automation product. Originally generated with [v0.app](https://v0.app): sticky navbar, hero section, feature grids, testimonials, pricing tiers, FAQ accordion, and footer — all built with shadcn/ui components.

Built by Girish Lade — https://ladestack.in

## What it does

Full landing-page experience for a SaaS product:

- **Navbar** (`lp-navbar-1.tsx`) — sticky nav with logo, links, theme toggle, CTA
- **Hero** (`hero-section-7.tsx`) — headline, CTA buttons, product imagery
- **Features** (`feature-section-3.tsx`, `feature-section-9.tsx`) — feature grids/cards
- **Testimonials** (`testimonials-section-5.tsx`) — customer quotes carousel/grid
- **Pricing** (`pricing-section-4.tsx`) — tiered pricing cards
- **FAQ** (`faq-section-1.tsx`) — accordion
- **Footer** (`footer-2.tsx`) — links, socials, branding
- **Dark / light mode** via `next-themes`
- Fully responsive (Tailwind CSS)

> Note: this is a landing-page template/demo with placeholder copy and images, not the real Flowly product.

## Tech stack

- [Next.js](https://nextjs.org/) 14 (App Router) + [React](https://react.dev/) 18 + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- Fonts: [Onest](https://fontsource.org/fonts/onest) via `next/font/google`
- [lucide-react](https://lucide.dev/) icons, [recharts](https://recharts.org/) (available in deps)
- [Vercel Analytics](https://vercel.com/analytics) (`@vercel/analytics`)
- Static export capable — no server routes, no server actions

## Quick start

Requires Node.js 18+ and npm.

```sh
# 1. Clone
git clone https://github.com/girishlade111/v0-flowly-saa-s-landing-page-temp.git
cd v0-flowly-saa-s-landing-page-temp

# 2. Install
npm install --legacy-peer-deps

# 3. Dev server
npm run dev
# → http://localhost:3000
```

Production:

```sh
npm run build   # static export to out/
npm run start   # runs next start (standard build mode only)
```

To preview the static export, serve `out/` with any static file server, e.g. `npx serve out`.

## Static export & basePath

`next.config.mjs` sets `output: "export"` so `npm run build` emits a fully static `out/` directory (deployable to GitHub Pages, Cloudflare Pages, Netlify, or any static host).

- **GitHub Pages deploy** uses `basePath: "/v0-flowly-saa-s-landing-page-temp"` so assets resolve under the repo subpath — live at https://girishlade111.github.io/v0-flowly-saa-s-landing-page-temp/
- **Root-domain / Vercel deploys**: remove the `basePath` line to serve from `/`.

## Project structure

```
v0-flowly-saa-s-landing-page-temp/
├── app/
│   ├── page.tsx        # Home: assembles all landing sections
│   ├── layout.tsx      # Root layout, metadata, Onest font, theme provider
│   └── globals.css     # Tailwind + theme CSS variables
├── components/
│   ├── lp-navbar-1.tsx
│   ├── hero-section-7.tsx
│   ├── feature-section-3.tsx
│   ├── feature-section-9.tsx
│   ├── testimonials-section-5.tsx
│   ├── pricing-section-4.tsx
│   ├── faq-section-1.tsx
│   ├── footer-2.tsx
│   ├── logo.tsx
│   ├── theme-provider.tsx
│   └── ui/             # shadcn/ui primitives (button, accordion, card…)
├── lib/utils.ts        # cn() helper
├── public/             # placeholder images / logos
├── styles/globals.css   # legacy styles entry
└── next.config.mjs     # static export config
```

## Environment variables

None. The page is fully static — no secrets, no API keys.

## Deployment notes

- **Static export**: `npm run build` → `out/` is a plain static site.
- GitHub Pages deploy script: `python3 ~/workspace/github-publicize/bin/gh-pages-push.py out/ girishlade111/v0-flowly-saa-s-landing-page-temp gh-pages "deploy: static site"`.
- If you move this to Vercel, delete `output: "export"` and the `basePath` to use standard SSR/SSG.

## Live demo

https://girishlade111.github.io/v0-flowly-saa-s-landing-page-temp/

---

Built by Girish Lade — https://ladestack.in
