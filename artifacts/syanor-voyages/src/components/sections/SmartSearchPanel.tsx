import { useState } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";
import { departureCities } from "@/data/cities";
import { offers } from "@/data/offers";

type ServiceKey =
  | "Billet avion"
  | "Billet bateau"
  | "Voyage organisé"
  | "Séjour sur mesure"
  | "Pack personnalisé";

const SERVICE_TABS: { key: ServiceKey; icon: string; label: string; shortLabel: string }[] = [
  { key: "Billet avion",      icon: "airplane", label: "Billet Avion",      shortLabel: "Avion"   },
  { key: "Billet bateau",     icon: "anchor",   label: "Billet Bateau",     shortLabel: "Bateau"  },
  { key: "Voyage organisé",   icon: "route",    label: "Voyage Organisé",   shortLabel: "Voyages" },
  { key: "Séjour sur mesure", icon: "sparkle",  label: "Sur Mesure",        shortLabel: "Mesure"  },
  { key: "Pack personnalisé", icon: "diamond",  label: "Pack VIP",          shortLabel: "VIP"     },
];

const COMFORT_OPTIONS = ["Standard", "Premium", "VIP"] as const;
const BUDGET_OPTIONS  = ["< 1 000 €", "1 000–1 500 €", "1 500–2 500 €", "2 500–4 000 €", "> 4 000 €"] as const;

function hasMatchingOffers(service: string, city: string, destination: string): boolean {
  return offers.some((o) => {
    const matchService =
      !service ||
      o.category === service;
    const matchCity =
      !city ||
      (Array.isArray(o.cityTags) && o.cityTags.includes(city)) ||
      (o.departureCity ?? "").toLowerCase().includes(city.toLowerCase());
    const matchDest =
      !destination ||
      (o.arrivalCity ?? "").toLowerCase().includes(destination.toLowerCase());
    return matchService && matchCity && matchDest;
  });
}

/* ── Premium Input ─────────────────────────────────────── */
function PremiumField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-syanor-gold/80">
        {label}
      </span>
      {children}
    </div>
  );
}

const fieldClass =
  "w-full rounded-xl border border-syanor-gold/20 bg-syanor-ivory/80 px-3.5 py-2.5 text-sm text-syanor-ink placeholder:text-syanor-ink/35 transition-all duration-200 focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/12 hover:border-syanor-gold/40";

export default function SmartSearchPanel() {
  const [, setLocation] = useLocation();
  const [service, setService]           = useState<ServiceKey>("Billet avion");
  const [city, setCity]                 = useState("");
  const [destination, setDestination]   = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [travelers, setTravelers]       = useState(1);
  const [comfort, setComfort]           = useState<(typeof COMFORT_OPTIONS)[number] | "">("");
  const [budget, setBudget]             = useState<(typeof BUDGET_OPTIONS)[number] | "">("");
  const [expanded, setExpanded]         = useState(false);

  function handleSearch() {
    const sp = new URLSearchParams();
    if (service)      sp.set("service", service);
    if (city)         sp.set("city", city);
    if (destination)  sp.set("destination", destination);
    if (departureDate) sp.set("departureDate", departureDate);
    if (travelers > 1) sp.set("travelers", String(travelers));
    if (comfort)      sp.set("comfort", comfort);
    if (budget)       sp.set("budget", budget);

    if (hasMatchingOffers(service, city, destination)) {
      setLocation(`/offres?${sp.toString()}`);
    } else {
      setLocation(`/contact?${sp.toString()}#quote`);
    }
  }

  const isBillet = service === "Billet avion" || service === "Billet bateau";

  return (
    <section
      className="relative z-10 mx-auto -mt-7 max-w-5xl px-4 md:px-8"
      aria-label="Recherche de voyages"
    >
      {/* Glass card */}
      <div
        className="overflow-hidden rounded-2xl shadow-[0_8px_48px_rgba(6,63,51,0.12),0_2px_8px_rgba(6,63,51,0.06)]"
        style={{
          background: "rgba(255,249,237,0.97)",
          border: "1px solid rgba(201,162,74,0.22)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* ── Service tab bar ── */}
        <div
          className="border-b"
          style={{ borderColor: "rgba(201,162,74,0.14)", background: "rgba(255,249,237,0.6)" }}
        >
          <div className="no-scrollbar flex overflow-x-auto px-2 pt-2 pb-0">
            {SERVICE_TABS.map((s) => {
              const active = service === s.key;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setService(s.key)}
                  className={cn(
                    "group relative flex shrink-0 items-center gap-1.5 rounded-t-xl px-4 py-2.5 text-[0.8rem] font-medium transition-all duration-200",
                    active
                      ? "bg-white text-syanor-emerald shadow-[0_-1px_8px_rgba(6,63,51,0.06)] after:absolute after:bottom-[-1px] after:inset-x-0 after:h-px after:bg-white"
                      : "text-syanor-ink/55 hover:bg-white/60 hover:text-syanor-emerald"
                  )}
                  aria-pressed={active}
                >
                  <Icon
                    name={s.icon}
                    className={cn("h-3.5 w-3.5 transition-colors", active ? "text-syanor-gold" : "text-syanor-ink/40 group-hover:text-syanor-gold")}
                    aria-hidden="true"
                  />
                  <span className="hidden sm:inline">{s.label}</span>
                  <span className="sm:hidden">{s.shortLabel}</span>
                  {active && (
                    <span className="absolute bottom-[-1px] inset-x-3 h-[2px] rounded-t-full bg-gradient-to-r from-syanor-emerald to-syanor-gold" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Main search row ── */}
        <div className="grid gap-3 p-4 sm:grid-cols-[1fr_1fr_auto]">

          {/* City of departure */}
          <PremiumField label="Ville de départ">
            <div className="relative">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={cn(fieldClass, "cursor-pointer appearance-none pr-8")}
              >
                <option value="">Toutes les villes</option>
                {departureCities.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name} ({c.airportCode}){!c.confirmed ? " — sur demande" : ""}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-syanor-ink/35" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </PremiumField>

          {/* Destination */}
          <PremiumField label={isBillet ? "Destination" : "Destination / période"}>
            <input
              type="text"
              placeholder={isBillet ? "Ex. Tunis, Casablanca, Istanbul…" : "Ex. Turquie, Andalousie, Dubaï…"}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={fieldClass}
            />
          </PremiumField>

          {/* Search CTA */}
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleSearch}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-syanor-emerald px-5 py-2.5 text-sm font-semibold text-syanor-ivory shadow-[0_4px_16px_rgba(6,63,51,0.22)] transition-all duration-200 hover:bg-syanor-royal hover:shadow-[0_8px_24px_rgba(6,63,51,0.30)] active:scale-[0.97] sm:w-auto"
              aria-label="Rechercher"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Voir les options
            </button>
          </div>
        </div>

        {/* ── Advanced options toggle ── */}
        <div className="border-t px-4 pb-4" style={{ borderColor: "rgba(201,162,74,0.10)" }}>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 flex items-center gap-1.5 text-xs font-medium text-syanor-emerald/65 transition-colors hover:text-syanor-emerald"
          >
            <svg
              className={cn("h-3.5 w-3.5 transition-transform duration-200", expanded && "rotate-180")}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {expanded ? "Masquer les filtres avancés" : "Dates, voyageurs, confort, budget"}
          </button>

          {expanded && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Date */}
              <PremiumField label="Date de départ">
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className={fieldClass}
                />
              </PremiumField>

              {/* Travelers */}
              <PremiumField label="Voyageurs">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Retirer un voyageur"
                    onClick={() => setTravelers((t) => Math.max(1, t - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-syanor-gold/30 text-sm font-bold text-syanor-emerald transition-all hover:bg-syanor-emerald hover:border-syanor-emerald hover:text-syanor-ivory active:scale-[0.95]"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-syanor-ink">{travelers}</span>
                  <button
                    type="button"
                    aria-label="Ajouter un voyageur"
                    onClick={() => setTravelers((t) => Math.min(30, t + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-syanor-gold/30 text-sm font-bold text-syanor-emerald transition-all hover:bg-syanor-emerald hover:border-syanor-emerald hover:text-syanor-ivory active:scale-[0.95]"
                  >
                    +
                  </button>
                </div>
              </PremiumField>

              {/* Comfort */}
              <PremiumField label="Niveau de confort">
                <div className="flex flex-wrap gap-1.5">
                  {COMFORT_OPTIONS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setComfort(comfort === c ? "" : c)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 active:scale-[0.96]",
                        comfort === c
                          ? "border-syanor-emerald bg-syanor-emerald text-syanor-ivory shadow-sm"
                          : "border-syanor-gold/22 bg-white/60 text-syanor-ink/65 hover:border-syanor-gold/50 hover:bg-white"
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </PremiumField>

              {/* Budget — full width */}
              <PremiumField label="Budget indicatif (par personne)">
                <div className="flex flex-wrap gap-1.5">
                  {BUDGET_OPTIONS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(budget === b ? "" : b)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 active:scale-[0.96]",
                        budget === b
                          ? "border-syanor-gold bg-syanor-gold text-syanor-royal shadow-sm"
                          : "border-syanor-gold/22 bg-white/60 text-syanor-ink/65 hover:border-syanor-gold/50 hover:bg-white"
                      )}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </PremiumField>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
