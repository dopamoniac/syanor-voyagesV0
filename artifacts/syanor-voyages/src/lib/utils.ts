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

// Service categories considered "programmed" — only these get auto-filled dates
const PROGRAMMED_SERVICES = new Set(["omra", "hajj", "omra-plus", "ramadan", "Omra", "Hajj", "Omra Plus", "Ramadan"]);

export function quoteUrl(params: {
  service?: string;
  offer?: string;
  destination?: string;
  transport?: string;
  comfort?: string;
  city?: string;
  month?: string;
  departureDate?: string;
  returnDate?: string;
  programmed?: boolean;
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
  if (params.roomType) sp.set("roomType", params.roomType);

  // Only pass fixed dates for programmed Omra/Hajj offers
  const isOmraType = params.service ? PROGRAMMED_SERVICES.has(params.service) : false;
  if (params.programmed && isOmraType) {
    sp.set("programmed", "true");
    if (params.departureDate) sp.set("departureDate", params.departureDate);
    if (params.returnDate) sp.set("returnDate", params.returnDate);
  } else if (!params.programmed && params.departureDate && isOmraType) {
    // Legacy: departureDate without programmed flag — treat as non-programmed, pass no dates
  }

  const qs = sp.toString();
  return qs ? `/contact?${qs}#quote` : "/contact#quote";
}
