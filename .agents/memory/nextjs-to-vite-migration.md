---
name: Next.js App Router -> Vite + React migration
description: Recurring conversion steps and gotchas when migrating imported v0/Vercel Next.js apps into the Replit pnpm_workspace (react-vite + Express) stack.
---

# Next.js App Router -> Vite + React (wouter) migration

Used when an imported app uses Next.js App Router (`src/app/**/page.tsx`) and must
become a `react-vite` artifact, with API routes moving to the `api-server` Express artifact.

## Conversion map
- `next/link` -> custom shim at `src/components/Link.tsx` backed by wouter `useLocation`.
  The shim must: render a real `<a>`; pass through external protocols
  (`http(s)`/`mailto`/`tel`/`sms`/`wa.me`/protocol-relative/`target=_blank`) as plain anchors;
  intercept only plain left-clicks (skip on meta/ctrl/shift/alt/middle); `navigate(href)` for
  internal routes; for same-page hash use `history.replaceState` + scroll; scroll to hash with a
  requestAnimationFrame retry loop because the target may not be mounted yet after a route change.
- `next/image` -> plain `<img>` (drop `priority`).
- `import type { Metadata } from "next"` -> local `type Metadata = Record<string, unknown>` so
  unused `export const metadata`/`generateMetadata`/`generateStaticParams` survive as dead code.
- `useSearchParams` (next/navigation) -> wouter `useSearch()`, then `new URLSearchParams(search)`;
  depend the effect on the `search` **string**, not a fresh object (avoids loops).
- `notFound()` -> render an in-app not-found component (no throw).
- Dynamic `app/x/[slug]/page.tsx` whose default export took `{ params }` -> change to take a plain
  prop (`{ slug }`) and wire via wouter render-prop: `<Route path="/x/:slug">{(p)=><Page slug={p.slug}/>}</Route>`.
- Delete `app/layout.tsx`, `app/globals.css`, `app/api/`. Port providers into `App.tsx`
  (wrap with the app's context provider + `<WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/,"")}>`).

## CSS (Tailwind v4)
Port `globals.css` into the artifact `src/index.css`: keep `@import "tailwindcss"`, move palette/
fonts/type-scale/shadows into `@theme` (`--color-*`, `--font-*`, `--text-h1` with
`--text-h1--line-height`/`--font-weight`, `--shadow-*`), and recreate custom component/utility
classes inside `@layer components`/`@layer utilities`. Do NOT keep the react-vite scaffold's
red-placeholder shadcn token theme or its `body { @apply bg-background }` base — it overrides the
imported brand background.

## API routes
Mirror the original validation exactly (required fields, email regex, localized error messages,
`{success:true}` shape). Mount the new router under the existing `/api` prefix and register it in
`artifacts/api-server/src/routes/index.ts`. Frontend keeps fetching `/api/<route>` (the preview
proxy path-routes `/api` to the api-server artifact).

## Gotcha
`next-themes` is a standalone package (used by shadcn `sonner.tsx`) — it is NOT `next`; leave it
installed. Only remove `next` (and unused server libs like `resend`) from the artifact package.json,
then `pnpm install` at the workspace root.
