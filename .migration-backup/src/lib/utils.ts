/**
 * Lightweight className combiner (no external deps).
 * Filters falsy values and joins with a space.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Smoothly scroll to the quote section.
 * Guarded for SSR / React Native portability (typeof window).
 */
export function scrollToQuote(): void {
  if (typeof window === "undefined") return;
  const el = document.getElementById("quote");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Smoothly scroll to any section id.
 */
export function scrollToId(id: string): void {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Build a /contact URL with prefill query params for cross-page quote CTAs.
 */
export function quoteUrl(params: {
  service?: string;
  offer?: string;
  destination?: string;
  transport?: string;
  comfort?: string;
}): string {
  const sp = new URLSearchParams();
  if (params.service) sp.set("service", params.service);
  if (params.offer) sp.set("offer", params.offer);
  if (params.destination) sp.set("destination", params.destination);
  if (params.transport) sp.set("transport", params.transport);
  if (params.comfort) sp.set("comfort", params.comfort);
  const qs = sp.toString();
  return qs ? `/contact?${qs}#quote` : "/contact#quote";
}
