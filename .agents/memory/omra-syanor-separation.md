---
name: Omra-SYANOR content separation
description: Architecture rules for keeping main SYANOR site (general travel) cleanly separated from Omra Factory (Omra/Hajj/Ramadan/Formation).
---

## Rule
Main SYANOR site = general travel only (billets, séjours, voyages organisés, packs VIP, visas).
All Omra/Hajj/Ramadan/Ziyarat/Formation content = inside Omra Factory at `/omra-hajj`.

## What was done (completed)
- `navigation.ts`: Omra Factory = plain `{ label, href }` — no `children`. Renders as golden crescent pill in desktop nav, compact gateway card in mobile menu.
- `Hero.tsx`: trust pills are general only ("Packs Premium / VIP" not "Omra & Hajj"); sub-headline is general.
- `ServicesGrid.tsx`: "Voyages Religieux" group removed entirely. "Formation Omra" → "Hôtels & Transferts".
- `page.tsx`: NextDepartures (Omra-specific) removed.
- `SmartSearchPanel.tsx`: "Omra" tab removed → "Pack VIP". No `isOmra` logic. Destination = always text input.
- `Header.tsx`: OmraMegaPanel function removed. MegaMenuWrapper no longer has `href` prop or split-button pattern. Omra Factory = golden pill `<Link>`.
- `MobileMenu.tsx`: MonthChips + OMRA_LINKS removed. Omra Factory section = single compact gateway card.
- `offres/[slug]/page.tsx`: CTA label is smart — "Faire une préinscription" for Omra/Hajj/Ramadan/Omra Plus/Formation; "Demander cette offre" for general.

## Offers
13 general travel offers added to `offers.ts` (Londres, Istanbul, Bali, Dubaï, Marrakech, Rome, Barcelone, Maldives, Égypte, Grèce, Thaïlande, Doha, Tunisie). All priced "Sur demande".

**Why:** Brand clarity — SYANOR Voyages is a premium general travel agency. Omra Factory is a distinct sub-brand. Mixing them on the main site diluted both.

**How to apply:** Never add Omra/Hajj/Ramadan/Formation items to main nav, hero, services grid, or search panel. Only allowed gateway: a single link/button to /omra-hajj labeled "Omra Factory".
