---
name: Pre-existing TypeScript errors
description: 5 TS errors in the SYANOR codebase that must NOT be touched — they predate the design-system work.
---

## Errors (do not fix)
1. `ConfiguratorSection.tsx(123,63)` — Dispatch type mismatch for TransportType
2. `ConfiguratorSection.tsx(126,59)` — Dispatch type mismatch for ComfortLevel
3. `ActivityConfigurator.tsx(270,17)` — string not assignable to union SetStateAction
4. `alert-dialog.tsx(5,32)` — button.tsx vs Button.tsx casing (TS1149)
5. `chart.tsx(212,31)` — cn() argument type

**Why:** These files are untouched shadcn/complex configurator components. Fixing them risks regressions outside the design-system scope.

**How to apply:** When running typecheck, expect exactly these 5 errors. Any additional errors are regressions introduced by recent changes and must be fixed.
