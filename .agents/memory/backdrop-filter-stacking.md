---
name: backdrop-filter stacking context
description: backdrop-blur/backdrop-filter creates a CSS stacking context that traps child z-index values, causing absolutely-positioned dropdowns to appear behind sibling elements outside the container.
---

## Rule
Never put `backdrop-blur-*` (or any `backdrop-filter`) on a container that has absolutely-positioned children (dropdowns, tooltips, modals) that need to appear above siblings outside that container.

**Why:** `backdrop-filter` triggers a new stacking context in all browsers. A `z-index: 100` inside such a container is scoped to that context — elements outside the container (even with `z-index: 1`) will paint on top of the inner `z-100` child.

**How to apply:**
- Dropdown/popover containers: never set `backdrop-blur` on the wrapper. Apply blur only to a pseudo-element or a sibling background layer.
- If blur is needed and you can't restructure, use a React portal to render the dropdown at `document.body` level, outside the stacking context.
- In this project: OfferFilters.tsx wrapper had this issue — fixed by removing `backdrop-blur-sm`.
