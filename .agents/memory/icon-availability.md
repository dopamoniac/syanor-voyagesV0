---
name: Icon availability
description: Which icon names are valid in the custom Icon.tsx component; common traps for non-existent names.
---

## Rule
Before using any new icon name in `services.ts`, `ServicesGrid.tsx`, `WhyChooseUs.tsx`, or any data file, grep Icon.tsx first:

```
grep -n '"<name>"' artifacts/syanor-voyages/src/components/ui/Icon.tsx
```

## Known missing icons (will silently render nothing)
- `car` → use `bus` instead
- `heart` → use `star` or `sparkle` instead

## Confirmed available icons (partial list)
airplane, anchor, route, sparkle, crescent, building, clipboard, shield, book-open, phone, map, sliders, clock, bus, star, hand-heart, diamond, arrow-right, check, chevron-down, home, globe, luggage, compass, moon, sun, alert, info, x, plus, minus, search, filter, calendar, user, users, lock, unlock, eye, eye-off, edit, trash, share, link, external-link, refresh, loader, whatsapp, facebook, instagram, youtube, twitter/x-social

**Why:** Icon.tsx is a large manual switch-case; names not in the switch silently render nothing with no runtime error, making it very hard to notice missing icons without visual inspection.

**How to apply:** Always grep before adding icon names to any data file or component, especially when adding a new service group or card.
