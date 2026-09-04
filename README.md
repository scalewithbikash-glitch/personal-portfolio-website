# Scalewithbikash

Production-ready personal brand and consulting website for **Bikash Gurung** —
AI Digital Marketing Expert & Consultant.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Motion
(Framer Motion), React Hook Form, and Zod.

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router, React Server Components by default) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 (CSS-native `@theme` tokens, no config file) |
| Animation | Motion (`motion/react`) — scroll reveals, page transitions, micro-interactions |
| Icons | lucide-react |
| Forms | React Hook Form + Zod (shared schema between client and server) |
| Email | Resend, with a zero-config console-log fallback in development |
| Fonts | Geist Sans / Geist Mono, self-hosted via `geist` |

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # ESLint (flat config, zero warnings on main)
npm run typecheck  # tsc --noEmit
```

## Project structure

```
app/                      Routes (App Router)
  layout.tsx               Root layout, global metadata, JSON-LD
  page.tsx                 Homepage
  about/                    /about
  services/                 /services and /services/[slug]
  blog/                      /blog and /blog/[slug]
  contact/                    /contact
  api/contact/route.ts       Contact form submission endpoint
  sitemap.ts, robots.ts       Generated SEO files
  not-found.tsx, error.tsx, loading.tsx

components/
  layout/     Navbar, Footer, PageHero, Breadcrumbs, Logo
  ui/         Button, Card, Badge, SectionHeading, FormField, ...
  animations/ AnimatedMeshGradient, FloatingParticles, Reveal, GlowOrb, NeuralConstellation
  home/       Homepage sections (Hero, Process, Results, ...)
  services/   ServiceCard, ServiceProcess, FAQ
  blog/       BlogCard, BlogGrid, ArticleContent, TableOfContents
  contact/    ContactForm, ContactInfo

content/
  services.ts   Service catalogue (data, not UI)
  blog/         One file per article + an index that aggregates them

lib/
  content/      Async accessors over content/ — the seam for a future CMS
  validations/  Zod schemas (contact form)
  email/        Resend integration + dev fallback
  utils/        cn(), formatDate(), slugify(), rate limiter
  site.ts        Brand config: name, contact details, nav links, social links
  seo.ts          Metadata + JSON-LD builders

types/          Shared TypeScript types (Service, Post, ContentBlock, ...)
```

## Content architecture

**Services** and **blog posts** are plain TypeScript data objects, accessed
through async functions in `lib/content/`. Every page component calls those
functions rather than importing the arrays directly — so migrating to a CMS
(Sanity, Contentful, a database) later means rewriting the functions in
`lib/content/services.ts` and `lib/content/blog.ts` only. No component changes.

Blog articles use a small structured-content format (`ContentBlock[]` —
paragraphs, headings, lists, quotes, callouts, code) rendered by
`components/blog/ArticleContent.tsx`. This avoids `dangerouslySetInnerHTML`
entirely: content can never inject markup.

## Contact form

`components/contact/ContactForm.tsx` (client) submits to
`app/api/contact/route.ts` (server). Both share the Zod schema in
`lib/validations/contact.ts`, so client and server validation can never drift.

Anti-spam, in order:
1. **Honeypot** — a hidden `website` field real visitors never fill in.
2. **Minimum fill time** — submissions faster than 1.5s after the form
   rendered are treated as automated.
3. **Rate limiting** — 5 submissions per 10 minutes per IP (in-memory; see
   `lib/utils/rateLimit.ts` for notes on scaling this to multi-instance
   deployments).

### Configuring email delivery

Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=scalewithbikash@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev   # replace once a domain is verified
```

Without `RESEND_API_KEY`, submissions are validated and logged to the server
console instead of emailed — so `npm run dev` works with zero configuration.
Sign up at [resend.com](https://resend.com), verify a sending domain, and set
`CONTACT_FROM_EMAIL` to an address on that domain for production.

## Design system

Tokens live in `app/globals.css` under `@theme` (Tailwind v4's CSS-native
token syntax — no `tailwind.config.js`):

- **Colors**: `--color-brand-purple` (#7030EF), `--color-brand-blue`
  (#1E90FF), full purple/blue ramps, and the dark surface scale
  (`ink` → `surface` → `surface-2`).
- **Type**: fluid `display-sm/md/lg` sizes via `clamp()`.
- **Motion**: shared easing curves and keyframes (mesh drift, particle float,
  data-trace, shimmer).
- Utilities: `.gradient-text`, `.surface-card`, `.glass-panel`,
  `.gradient-border`, `.grid-lines`, `.prose-brand`.

All custom scales are registered with `tailwind-merge` in `lib/utils/cn.ts` —
without this, `cn()` would silently drop classes like `text-display-lg`.

## Animation

Built on `motion/react`. Every animated component reads
`prefers-reduced-motion` (via `useReducedMotion()` or the global CSS media
query in `globals.css`) and renders static markup when it's set — no
transform, no opacity transition, no layout shift.

The hero's ambient mesh gradient and floating particles are pure CSS
(`transform`-only keyframes), so they cost nothing in JavaScript and stay
GPU-composited.

## SEO

- Per-page metadata via `lib/seo.ts#buildMetadata()` (canonical URLs, Open
  Graph, Twitter cards).
- JSON-LD: `Person` + `ProfessionalService` + `WebSite` on every page (root
  layout), plus `BreadcrumbList`, `Service`, `FAQPage`, and `BlogPosting` on
  the relevant detail pages.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` from the same content accessors the pages use, so they can
  never drift from the actual route list.
- `app/opengraph-image.tsx` generates a branded social share image at
  request time via `next/og`.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`), skip-to-content
  link, visible focus rings (`:focus-visible`) throughout.
- Mobile menu: focus trap, `Escape` to close, focus restored to the trigger
  on close, `aria-expanded`/`aria-controls` wired correctly.
- FAQ accordions: real `<button>` elements with `aria-expanded` +
  `aria-controls`, not divs with click handlers.
- Forms: every input has a associated `<label>`, errors are announced via
  `role="alert"`, invalid fields get `aria-invalid` + `aria-describedby`.
- Color is never the only signal — active nav/tab states pair color with a
  dot, underline, or weight change.

## Deployment

Any Next.js-compatible host works (Vercel is the reference target). Set the
environment variables from `.env.example` in your host's dashboard, then:

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain — it's used for canonical
URLs, the sitemap, and JSON-LD.
