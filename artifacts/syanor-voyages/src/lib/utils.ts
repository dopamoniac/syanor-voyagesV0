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

// Convert French offer date strings ("18 Oct. 2026") → ISO format ("2026-10-18")
const FR_MONTHS: Record<string, string> = {
  "jan": "01", "fév": "02", "mar": "03", "avr": "04",
  "mai": "05", "juin": "06", "juil": "07", "août": "08",
  "sept": "09", "oct": "10", "nov": "11", "déc": "12",
};
export function parseFrenchDate(str?: string): string | undefined {
  if (!str) return undefined;
  const m = str.match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ]+)\.?\s+(\d{4})$/);
  if (!m) return undefined;
  const [, day, mon, year] = m;
  const month = FR_MONTHS[mon.toLowerCase().slice(0, 4)];
  if (!month) return undefined;
  return `${year}-${month}-${day.padStart(2, "0")}`;
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

  // Only pass fixed dates for programmed Omra/Hajj offers — convert to ISO for date inputs
  const isOmraType = params.service ? PROGRAMMED_SERVICES.has(params.service) : false;
  if (params.programmed && isOmraType) {
    sp.set("programmed", "true");
    const dep = parseFrenchDate(params.departureDate) ?? params.departureDate;
    const ret = parseFrenchDate(params.returnDate) ?? params.returnDate;
    if (dep) sp.set("departureDate", dep);
    if (ret) sp.set("returnDate", ret);
  }

  const qs = sp.toString();
  return qs ? `/contact?${qs}#quote` : "/contact#quote";
}
