---
name: Emoji → SVG Icon migration
description: Rules for the SYANOR icon system — always use Icon component, never emoji or text glyphs in TSX.
---

## Rule
All visual icons must use `<Icon name="…" className="h-X w-X" />` from `@/components/ui/Icon.tsx`. Emoji and text glyphs (✈, 🕌, 📅, ⭐, etc.) are banned in TSX.

**Why:** Apple-level luxury design system. Emoji render inconsistently across OS/browser, break the premium aesthetic, and cause accessibility issues.

**How to apply:**
- Data arrays: store icon name strings (`"airplane"`, `"crescent"`, etc.), not emoji.
- Rendering: always `<Icon name={item.icon} className="h-X w-X" />`, never `<span>{item.icon}</span>`.
- ActivityConfigurator.tsx is the only known exception (pre-existing, untouched).

## Available icon names (Icon.tsx switch cases)
airplane, anchor, route, bus, map, compass, globe, crescent, building, diamond, clipboard, book, book-open, users, hand-heart, sliders, shield, check, check-circle, x-circle, arrow-right, chevron-right, clock, calendar, spark/sparkle, star, phone, mail

Default fallback: dot/compass rose (for unknown names).

## Casing conflict
`breadcrumb.tsx` (lowercase, shadcn leftover) conflicts with `Breadcrumb.tsx` (uppercase, real component) causing TS1261. Solution: delete the lowercase file. Only `Breadcrumb.tsx` should exist.
