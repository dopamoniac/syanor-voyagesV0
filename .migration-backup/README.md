# SYANOR VOYAGES — La Renaissance du Voyage

## Project Overview
- **Name**: SYANOR VOYAGES (V2 — multi-page premium travel platform)
- **Goal**: A complete premium travel agency website: billets avion/bateau, Omra & Hajj, Omra Plus & Ramadan, voyages organisés, séjours sur mesure, packs premium, formation, offers & departures, and a smart quote funnel.
- **Style**: Luxury light mode (ivory/pearl/champagne dominant; emerald + gold accents; dark emerald only for footer/CTA bands). Mobile-first.
- **Stack**: Next.js 14 (App Router, TypeScript strict) · Tailwind CSS · Cloudflare Pages (edge API) · PM2.

## URLs
- **Dev (sandbox)**: https://3000-iyjnm975wrkb3tct28h2q-2e1b9533.sandbox.novita.ai
- **Production**: not deployed yet (Cloudflare Pages target)

## Site Architecture (routes)
| Route | Purpose |
|---|---|
| `/` | Gateway homepage (preview sections, each links deeper) |
| `/services` | Services hub (+ `#packs`, `#logistique` anchors) |
| `/services/billets-avion` | Deep flight-ticket service page |
| `/services/billets-bateau` | Deep ferry/boat service page |
| `/omra-hajj` | Spiritual travel hub (+ `#ziyarat`) |
| `/omra-hajj/omra` | Deep Omra page |
| `/omra-hajj/hajj` | Deep Hajj page |
| `/omra-hajj/omra-plus` | Deep Omra Plus (premium/VIP) page |
| `/omra-hajj/ramadan` | Deep Ramadan page |
| `/formation` | Formation & spiritual accompaniment |
| `/offres` | Offers & departures listing (filters) |
| `/offres/[slug]` | Offer detail pages (11 generated) |
| `/voyages-organises` | Organized trips |
| `/sejours-sur-mesure` | Custom stays (luxury configurator) |
| `/a-propos` | About / brand story |
| `/contact` | Quote form + contact cards + FAQ |
| `/mentions-legales`, `/politique-confidentialite`, `/conditions-generales` | Legal pages |
| `POST /api/quote` | Edge runtime quote handler |

## Offer System
- **Model** (`src/types/index.ts`): `TravelOffer` with `slug, title, category, dates, routes, transportType, comfortLevel, hotelLevel, includedServices, notIncluded, program[], documents, notes, priceFrom, availabilityStatus, featured`.
- **Data** (`src/data/offers.ts`): 11 placeholder offers across all categories + helpers `getOfferBySlug`, `getOffersByCategory`, `getRelatedOffers`. Non-final data marked « à confirmer » / « sur demande ».
- **Components**: `OfferCard`, `OffersGrid`, `OfferFilters` (type/transport/comfort/city/availability), `OffersExplorer` (interactive), `RelatedOffers`, offer detail page (hero, key facts, included/not-included, documents, day-by-day program, notes, related, sticky mobile CTA).

## Quote Funnel
- Smart form (`QuoteForm`) with conditional fields per service category, transport/comfort chips, traveler stepper.
- Cross-page prefill via `quoteUrl()` → `/contact?service=…&offer=…#quote`, read by `useQuoteForm` (`useSearchParams`, wrapped in `<Suspense>`).
- Every service/offer CTA preselects the service and prefills the offer.

## Navigation
- **Desktop**: sticky header with mega menus (Services, Omra & Hajj) + "Demander un devis" CTA.
- **Mobile**: full-screen grouped emerald menu.
- **Footer**: services, contact (phone/email/site/WhatsApp), legal links.
- **WhatsApp**: floating button (desktop) + per-page sticky mobile CTA bar.

## How to Run
```bash
cd /home/user/webapp
npm run build                      # build
pm2 start ecosystem.config.cjs     # start (npm run start, port 3000)
curl http://localhost:3000         # test
pm2 logs syanor --nostream         # logs
```

## Deployment
- **Platform**: Cloudflare Pages (target) · **Status**: ✅ Active in sandbox, not yet deployed to production.
- **Build**: ✅ `npm run build` passes (32 routes) · **tsc**: ✅ 0 errors · no SIYAJJ, no console.log.

## What Still Needs Real Business Data
- Real offers: dates, prices, routes, hotels, airlines (placeholders are illustrative).
- Real contact details + WhatsApp business number (`src/data/navigation.ts → CONTACT`).
- Legal content (mentions légales, confidentialité, CGV) to be validated/completed.
- `/api/quote`: wire an email provider (Resend) or persistence (KV/D1) — currently validates and returns success.
- Real logo asset at `public/brand/syanor-logo.png` (text fallback in place).

## Last Updated
V2 — complete multi-page platform.
