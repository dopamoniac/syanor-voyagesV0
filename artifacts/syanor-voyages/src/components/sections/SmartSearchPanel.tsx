import { useState } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";
import { departureCities } from "@/data/cities";
import { omraMonths } from "@/data/months";
import { offers } from "@/data/offers";

type ServiceKey =
  | "Omra"
  | "Billet avion"
  | "Billet bateau"
  | "Séjour sur mesure"
  | "Voyage organisé";

const services: { key: ServiceKey; icon: string; label: string }[] = [
  { key: "Omra", icon: "crescent", label: "Omra & Hajj" },
  { key: "Billet avion", icon: "airplane", label: "Billet avion" },
  { key: "Billet bateau", icon: "anchor", label: "Billet bateau" },
  { key: "Voyage organisé", icon: "route", label: "Voyage organisé" },
  { key: "Séjour sur mesure", icon: "sparkle", label: "Sur mesure" },
];

const COMFORT_OPTIONS = ["Standard", "Premium", "VIP"] as const;
const BUDGET_OPTIONS = ["< 1 000 €", "1 000–1 500 €", "1 500–2 500 €", "2 500–4 000 €", "> 4 000 €"] as const;

/** Returns true if at least one offer matches the given filters */
function hasMatchingOffers(service: string, city: string, month: string): boolean {
  return offers.some((o) => {
    const matchService =
      !service ||
      o.category === service ||
      (service === "Omra" &&
        (o.category === "Omra Plus" || o.category === "Ramadan" || o.category === "Hajj"));
    const matchCity =
      !city ||
      (Array.isArray(o.cityTags) && o.cityTags.includes(city)) ||
      (o.departureCity ?? "").toLowerCase().includes(city.toLowerCase());
    const matchMonth = !month || o.monthSlug === month;
    return matchService && matchCity && matchMonth;
  });
}

export default function SmartSearchPanel() {
  const [, setLocation] = useLocation();
  const [service, setService] = useState<ServiceKey>("Omra");
  const [city, setCity] = useState("");
  const [month, setMonth] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [comfort, setComfort] = useState<(typeof COMFORT_OPTIONS)[number] | "">("");
  const [budget, setBudget] = useState<(typeof BUDGET_OPTIONS)[number] | "">("");
  const [expanded, setExpanded] = useState(false);

  function handleSearch() {
    const sp = new URLSearchParams();
    if (service) sp.set("service", service);
    if (city) sp.set("city", city);
    if (month) sp.set("month", month);
    if (destination) sp.set("destination", destination);
    if (departureDate) sp.set("departureDate", departureDate);
    if (travelers > 1) sp.set("travelers", String(travelers));
    if (comfort) sp.set("comfort", comfort);
    if (budget) sp.set("budget", budget);

    // Route to /offres if matching offers exist, otherwise prefill /contact#quote
    if (hasMatchingOffers(service, city, month)) {
      setLocation(`/offres?${sp.toString()}`);
    } else {
      setLocation(`/contact?${sp.toString()}#quote`);
    }
  }

  const isOmra = service === "Omra";
  const isBillet = service === "Billet avion" || service === "Billet bateau";

  return (
    <section className="relative z-10 -mt-8 mx-auto max-w-5xl px-4 md:px-8">
      <div className="rounded-2xl border border-syanor-gold/20 bg-white/96 shadow-card-hover backdrop-blur-sm">
        {/* Service tabs */}
        <div className="flex flex-wrap gap-1 border-b border-syanor-gold/15 p-3 sm:p-4">
          {services.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setService(s.key)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-all sm:px-4",
                service === s.key
                  ? "bg-syanor-emerald text-syanor-ivory shadow-sm"
                  : "text-syanor-ink/65 hover:bg-syanor-emerald/8 hover:text-syanor-emerald"
              )}
            >
              <Icon name={s.icon} className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden">{s.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Main search row */}
        <div className="grid gap-3 p-4 sm:grid-cols-[1fr_1fr_auto]">
          {/* City */}
          <div>
            <label className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-wider text-syanor-gold">
              Ville de départ
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-xl border border-syanor-gold/25 bg-syanor-ivory px-3 py-2.5 text-sm text-syanor-ink focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10"
            >
              <option value="">Toutes les villes</option>
              {departureCities.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} ({c.airportCode}){!c.confirmed ? " — sur demande" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Month (Omra) or destination (others) */}
          <div>
            <label className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-wider text-syanor-gold">
              {isOmra ? "Mois de départ" : isBillet ? "Destination" : "Période / destination"}
            </label>
            {isOmra ? (
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full rounded-xl border border-syanor-gold/25 bg-syanor-ivory px-3 py-2.5 text-sm text-syanor-ink focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10"
              >
                <option value="">Tous les mois</option>
                {omraMonths.map((m) => (
                  <option key={`${m.year}-${m.slug}`} value={m.slug}>
                    {m.labelFull}
                    {m.departureCount > 0
                      ? ` — ${m.departureCount} départ${m.departureCount > 1 ? "s" : ""}`
                      : ""}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                placeholder={isBillet ? "Ex. Tunis, Casablanca…" : "Ex. Turquie, Andalousie…"}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full rounded-xl border border-syanor-gold/25 bg-syanor-ivory px-3 py-2.5 text-sm text-syanor-ink placeholder:text-syanor-ink/35 focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10"
              />
            )}
          </div>

          {/* CTA */}
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleSearch}
              className="btn-primary w-full justify-center sm:w-auto whitespace-nowrap"
            >
              Voir les options
            </button>
          </div>
        </div>

        {/* Expand / collapse advanced fields */}
        <div className="px-4 pb-3">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="text-xs font-medium text-syanor-emerald/70 hover:text-syanor-emerald flex items-center gap-1"
          >
            {expanded ? "Moins de critères ▲" : "Plus de critères (dates, voyageurs, confort, budget) ▼"}
          </button>

          {expanded && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Departure date */}
              <div>
                <label className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-wider text-syanor-gold">
                  Date de départ
                </label>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full rounded-xl border border-syanor-gold/25 bg-syanor-ivory px-3 py-2.5 text-sm text-syanor-ink focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10"
                />
              </div>

              {/* Travelers */}
              <div>
                <label className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-wider text-syanor-gold">
                  Voyageurs
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Retirer un voyageur"
                    onClick={() => setTravelers((t) => Math.max(1, t - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-syanor-gold/30 text-syanor-emerald hover:bg-syanor-emerald hover:text-white transition"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold text-syanor-ink text-sm">{travelers}</span>
                  <button
                    type="button"
                    aria-label="Ajouter un voyageur"
                    onClick={() => setTravelers((t) => Math.min(30, t + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-syanor-gold/30 text-syanor-emerald hover:bg-syanor-emerald hover:text-white transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Comfort */}
              <div>
                <label className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-wider text-syanor-gold">
                  Confort
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {COMFORT_OPTIONS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setComfort(comfort === c ? "" : c)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                        comfort === c
                          ? "border-syanor-emerald bg-syanor-emerald text-syanor-ivory"
                          : "border-syanor-gold/25 bg-white text-syanor-ink/65 hover:border-syanor-gold"
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget range */}
              <div className="sm:col-span-2 lg:col-span-4">
                <label className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-wider text-syanor-gold">
                  Budget indicatif (par personne)
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_OPTIONS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(budget === b ? "" : b)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-xs font-medium transition",
                        budget === b
                          ? "border-syanor-emerald bg-syanor-emerald text-syanor-ivory"
                          : "border-syanor-gold/25 bg-white text-syanor-ink/65 hover:border-syanor-gold"
                      )}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
