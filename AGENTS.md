# lp-preselix — Agent instructions

> **If asked a question, just answer — do not change code directly.**

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- **TypeScript** (strict), **pnpm** (v9+)
- **shadcn/ui** (new-york style, `components.json` at root)
- **Firebase** (deps present — env vars needed, `.env*` gitignored)
- **Lucide** icons, **DM Sans** font via `next/font`

## Commands

```sh
pnpm dev          # dev server at http://localhost:3000
pnpm build        # production build
pnpm start        # start production server
pnpm lint         # ESLint flat config (eslint.config.mjs)
```

No typecheck or test scripts exist.

## Project structure

- `app/` — Next.js App Router: `layout.tsx` (root layout + SEO metadata), `page.tsx` (landing page), `sitemap.ts`, `robots.ts`, `privacy-policy/`, `terms/`
- `components/` — page sections (Hero, About, HowItWorks, Illustration, CtaSection, Navbar, Footer) + `ui/` (shadcn primitives)
- `lib/` — `utils.ts` (cn helper), `whatsapp.ts` (WA link generator)
- `docs/` — project notes (revamp summary)
- Path alias `@/*` → repo root (tsconfig paths)

## Key conventions

- **"use client"** on any component using hooks/interactivity
- **`cn()`** from `@/lib/utils` for class merging (clsx + tailwind-merge)
- Custom `<Button>` wrapper in `components/Button.tsx` — use this over raw `ui/button` (adds `min-w-28`, loading spinner, scale animation)
- All text is **Indonesian** (id_ID locale, site is for Indonesian schools)
- WhatsApp number default: `6285824528625`
- Images via `next/image`; remote host `i.pravatar.cc` allowed in `next.config.ts`
- Footer "Dukungan" section currently commented out

## Assorted

- Primary brand color: `#155dfc` (set in CSS, overrides oklch default)
- CSS in `app/globals.css` — `@theme inline` block + `:root`/`.dark` variables, no separate config file
- OpenGraph image at `/og-image.png`, Twitter card at `/logo.webp`
- Firebase config expected via env vars (no example `.env` committed)
