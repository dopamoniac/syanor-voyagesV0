export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function scrollToQuote(): void {
  if (typeof window === "undefined") return;
  const el = document.getElementById("quote");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToId(id: string): void {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function quoteUrl(params: {
  service?: string;
  offer?: string;
  destination?: string;
  transport?: string;
  comfort?: string;
  city?: string;
  month?: string;
  departureDate?: string;
  roomType?: string;
}): string {
  const sp = new URLSearchParams();
  if (params.service) sp.set("service", params.service);
  if (params.offer) sp.set("offer", params.offer);
  if (params.destination) sp.set("destination", params.destination);
  if (params.transport) sp.set("transport", params.transport);
  if (params.comfort) sp.set("comfort", params.comfort);
  if (params.city) sp.set("city", params.city);
  if (params.month) sp.set("month", params.month);
  if (params.departureDate) sp.set("departureDate", params.departureDate);
  if (params.roomType) sp.set("roomType", params.roomType);
  const qs = sp.toString();
  return qs ? `/contact?${qs}#quote` : "/contact#quote";
}
