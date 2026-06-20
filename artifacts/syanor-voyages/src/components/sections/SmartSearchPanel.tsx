import { useState } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";
import { departureCities } from "@/data/cities";
import { offers } from "@/data/offers";

/* ─────────────────────────── Types & Constants ───────────────────────── */

type ServiceKey =
  | "Billet avion"
  | "Billet bateau"
  | "Voyage organisé"
  | "Séjour sur mesure"
  | "Pack personnalisé";

const SERVICE_TABS: { key: ServiceKey; icon: string; label: string }[] = [
  { key: "Billet avion",      icon: "airplane", label: "Billet Avion"    },
  { key: "Billet bateau",     icon: "anchor",   label: "Billet Bateau"   },
  { key: "Voyage organisé",   icon: "route",    label: "Voyage Organisé" },
  { key: "Séjour sur mesure", icon: "sparkle",  label: "Sur Mesure"      },
  { key: "Pack personnalisé", icon: "diamond",  label: "Pack VIP"        },
];

const COMFORT_OPTIONS = ["Standard", "Premium", "VIP"] as const;
const BUDGET_OPTIONS  = ["< 1 000 €", "1 000–1 500 €", "1 500–2 500 €", "2 500–4 000 €", "> 4 000 €"] as const;

function hasMatchingOffers(service: string, city: string, destination: string): boolean {
  return offers.some((o) => {
    const matchService = !service || o.category === service;
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

/* ─────────────────────────── Sub-components ─────────────────────────── */

/** Gold uppercase label above an input */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="block text-[0.58rem] font-bold uppercase tracking-[0.22em]"
      style={{ color: "rgba(180,130,40,0.88)" }}
    >
      {children}
    </span>
  );
}

/** Decorative gold line separator */
function GoldRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-px", className)}
      style={{ background: "linear-gradient(to right, transparent, rgba(201,162,74,0.40), transparent)" }}
      aria-hidden="true"
    />
  );
}

/** Shared input/select base styles */
const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,253,247,0.90)",
  border: "1px solid rgba(201,162,74,0.22)",
  borderRadius: 12,
  padding: "12px 14px 12px 40px",
  fontSize: "0.875rem",
  color: "#18120a",
  transition: "border-color .18s, box-shadow .18s",
  outline: "none",
  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.04)",
  appearance: "none" as const,
};

/** Icon-prefixed select wrapper */
function SelectField({
  label, value, onChange, iconName, children,
}: {
  label: string; value: string;
  onChange: (v: string) => void;
  iconName: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <FieldLabel>{label}</FieldLabel>
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 left-3 flex items-center"
          aria-hidden="true"
          style={{ color: "rgba(201,162,74,0.70)" }}
        >
          <Icon name={iconName} className="h-4 w-4" />
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={inputBase}
          className="cursor-pointer pr-8 focus:border-[#063F33] focus:shadow-[0_0_0_3px_rgba(6,63,51,0.10)] hover:border-[rgba(201,162,74,0.50)]"
        >
          {children}
        </select>
        <span
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center"
          aria-hidden="true"
          style={{ color: "rgba(0,0,0,0.28)" }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

/** Icon-prefixed text input */
function TextField({
  label, value, onChange, iconName, placeholder,
}: {
  label: string; value: string;
  onChange: (v: string) => void;
  iconName: string; placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <FieldLabel>{label}</FieldLabel>
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 left-3 flex items-center"
          aria-hidden="true"
          style={{ color: "rgba(201,162,74,0.70)" }}
        >
          <Icon name={iconName} className="h-4 w-4" />
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{ ...inputBase, paddingRight: 14 }}
          className="focus:border-[#063F33] focus:shadow-[0_0_0_3px_rgba(6,63,51,0.10)] hover:border-[rgba(201,162,74,0.50)]"
        />
      </div>
    </div>
  );
}

/** Luxury pill tab button */
function PillTab({
  active, onClick, iconName, label,
}: {
  active: boolean; onClick: () => void; iconName: string; label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={
        active
          ? {
              background: "#063F33",
              border: "1px solid rgba(201,162,74,0.60)",
              color: "#FFF9ED",
              boxShadow: "0 2px 12px rgba(6,63,51,0.28), inset 0 1px 0 rgba(201,162,74,0.20)",
            }
          : {
              background: "rgba(255,253,247,0.70)",
              border: "1px solid rgba(201,162,74,0.18)",
              color: "rgba(6,63,51,0.70)",
            }
      }
      className={cn(
        "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[0.78rem] font-semibold transition-all duration-200 active:scale-[0.97]",
        !active && "hover:border-[rgba(201,162,74,0.55)] hover:bg-white hover:text-[#063F33] hover:shadow-[0_2px_8px_rgba(201,162,74,0.15)]"
      )}
    >
      <span
        aria-hidden="true"
        style={active ? { color: "rgba(201,162,74,0.90)" } : { color: "currentColor", opacity: 0.65 }}
      >
        <Icon name={iconName} className="h-3.5 w-3.5 shrink-0" />
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}

/** Traveler stepper */
function TravelerStepper({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Retirer un voyageur"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="flex h-9 w-9 items-center justify-center rounded-full text-base font-bold transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ border: "1px solid rgba(201,162,74,0.40)", color: "#063F33", background: "rgba(255,253,247,0.90)" }}
      >
        −
      </button>
      <span className="w-5 text-center text-sm font-bold" style={{ color: "#18120a" }}>{value}</span>
      <button
        type="button"
        aria-label="Ajouter un voyageur"
        onClick={() => onChange(Math.min(30, value + 1))}
        className="flex h-9 w-9 items-center justify-center rounded-full text-base font-bold transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ border: "1px solid rgba(201,162,74,0.40)", color: "#063F33", background: "rgba(255,253,247,0.90)" }}
      >
        +
      </button>
      <span className="text-[0.72rem] font-medium" style={{ color: "rgba(24,18,10,0.45)" }}>
        {value === 1 ? "voyageur" : "voyageurs"}
      </span>
    </div>
  );
}

/** Pill toggle group (comfort / budget) */
function PillGroup<T extends string>({
  options, value, onChange, gold,
}: {
  options: readonly T[]; value: T | ""; onChange: (v: T | "") => void; gold?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(active ? "" : o)}
            style={
              active
                ? gold
                  ? { background: "rgba(201,162,74,0.15)", border: "1px solid rgba(201,162,74,0.70)", color: "#18120a" }
                  : { background: "#063F33", border: "1px solid rgba(6,63,51,0.60)", color: "#FFF9ED" }
                : { background: "rgba(255,253,247,0.80)", border: "1px solid rgba(201,162,74,0.18)", color: "rgba(24,18,10,0.60)" }
            }
            className="rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:border-[rgba(201,162,74,0.50)] hover:bg-white active:scale-[0.96]"
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

/* ─────────────────────────── Main Component ─────────────────────────── */

export default function SmartSearchPanel() {
  const [, setLocation] = useLocation();
  const [service, setService]             = useState<ServiceKey>("Billet avion");
  const [city, setCity]                   = useState("");
  const [destination, setDestination]     = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [travelers, setTravelers]         = useState(1);
  const [comfort, setComfort]             = useState<(typeof COMFORT_OPTIONS)[number] | "">("");
  const [budget, setBudget]               = useState<(typeof BUDGET_OPTIONS)[number] | "">("");
  const [expanded, setExpanded]           = useState(false);

  const isBillet = service === "Billet avion" || service === "Billet bateau";

  function handleSearch() {
    const sp = new URLSearchParams();
    if (service)       sp.set("service", service);
    if (city)          sp.set("city", city);
    if (destination)   sp.set("destination", destination);
    if (departureDate) sp.set("departureDate", departureDate);
    if (travelers > 1) sp.set("travelers", String(travelers));
    if (comfort)       sp.set("comfort", comfort);
    if (budget)        sp.set("budget", budget);

    if (hasMatchingOffers(service, city, destination)) {
      setLocation(`/offres?${sp.toString()}`);
    } else {
      setLocation(`/contact?${sp.toString()}#quote`);
    }
  }

  return (
    <section
      className="relative z-10 mx-auto px-4 md:px-6 lg:px-8"
      style={{ maxWidth: 1120, marginTop: "-56px" }}
      aria-label="Recherche de voyages"
    >

      {/* ═══════════════════════════════════════
          LUXURY CONCIERGE CARD
      ════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 28,
          background: "rgba(255,252,244,0.97)",
          border: "1px solid rgba(201,162,74,0.30)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: [
            "0 24px 64px rgba(6,63,51,0.12)",
            "0 4px 16px rgba(6,63,51,0.06)",
            "inset 0 1px 0 rgba(255,255,255,0.80)",
          ].join(", "),
        }}
      >
        {/* Subtle inner corner glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px]"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(201,162,74,0.06) 0%, transparent 70%)" }}
        />

        {/* ── HEADER: eyebrow title ── */}
        <div className="px-6 pt-6 pb-5 sm:px-8 sm:pt-7">
          <div className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-[0.58rem] font-bold uppercase tracking-[0.26em]"
                style={{ color: "rgba(201,162,74,0.75)" }}
              >
                ✦ Votre concierge de voyage
              </p>
              <h2
                className="mt-1 font-playfair text-xl font-bold sm:text-2xl"
                style={{ color: "#063F33", letterSpacing: "0.01em" }}
              >
                Votre voyage commence ici
              </h2>
              <p
                className="mt-0.5 text-[0.72rem] font-medium"
                style={{ color: "rgba(24,18,10,0.45)", maxWidth: 440 }}
              >
                Billets, séjours, expériences premium et accompagnement sur mesure.
              </p>
            </div>
            {/* Active service badge — desktop only */}
            <div
              className="hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1"
              style={{
                background: "rgba(6,63,51,0.06)",
                border: "1px solid rgba(6,63,51,0.10)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#063F33]" aria-hidden="true" />
              <span className="text-[0.60rem] font-bold uppercase tracking-[0.18em]" style={{ color: "#063F33" }}>
                {service}
              </span>
            </div>
          </div>
        </div>

        <GoldRule />

        {/* ── SERVICE TABS ── */}
        <div className="px-4 pt-4 pb-3 sm:px-8 sm:pt-5 sm:pb-4">
          <div className="no-scrollbar flex gap-2 overflow-x-auto">
            {SERVICE_TABS.map((s) => (
              <PillTab
                key={s.key}
                active={service === s.key}
                onClick={() => setService(s.key)}
                iconName={s.icon}
                label={s.label}
              />
            ))}
          </div>
        </div>

        <GoldRule />

        {/* ── MAIN SEARCH ROW ──
            Desktop: 3 columns [departure | destination | CTA]
            Mobile: stacked column
        ── */}
        <div className="px-4 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-5">

            {/* Departure city */}
            <div className="w-full lg:flex-1">
              <SelectField
                label="Ville de départ"
                value={city}
                onChange={setCity}
                iconName="airplane"
              >
                <option value="">Toutes les villes</option>
                {departureCities.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name} ({c.airportCode}){!c.confirmed ? " — sur demande" : ""}
                  </option>
                ))}
              </SelectField>
            </div>

            {/* Vertical divider — desktop only */}
            <div
              className="hidden lg:block shrink-0 self-stretch"
              style={{ width: 1, background: "rgba(201,162,74,0.18)", marginBottom: 0 }}
              aria-hidden="true"
            />

            {/* Destination */}
            <div className="w-full lg:flex-1">
              <TextField
                label={isBillet ? "Destination" : "Destination / période"}
                value={destination}
                onChange={setDestination}
                iconName="globe"
                placeholder={isBillet ? "Ex. Tunis, Casablanca, Istanbul…" : "Ex. Turquie, Andalousie, Dubaï…"}
              />
            </div>

            {/* Vertical divider — desktop only */}
            <div
              className="hidden lg:block shrink-0 self-stretch"
              style={{ width: 1, background: "rgba(201,162,74,0.18)" }}
              aria-hidden="true"
            />

            {/* CTA */}
            <div className="flex shrink-0 items-end">
              <button
                type="button"
                onClick={handleSearch}
                className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(6,63,51,0.35)] active:scale-[0.97] lg:w-auto"
                style={{
                  background: "linear-gradient(135deg, #063F33 0%, #0a5c46 60%, #063F33 100%)",
                  border: "1px solid rgba(201,162,74,0.45)",
                  color: "#FFF9ED",
                  boxShadow: "0 6px 20px rgba(6,63,51,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
                  minWidth: 190,
                }}
              >
                {/* Gold shimmer on hover */}
                <span
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(105deg, transparent 30%, rgba(201,162,74,0.12) 50%, transparent 70%)" }}
                />
                <svg className="relative h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="relative">Explorer les offres</span>
                <svg
                  className="relative h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── ADVANCED FILTERS — collapsible ── */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(201,162,74,0.12)" }}
        >
          {/* Toggle */}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="group flex w-full items-center justify-between px-6 py-3.5 text-left transition-colors hover:bg-[rgba(201,162,74,0.04)] sm:px-8"
            aria-expanded={expanded}
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-3.5 w-3.5 shrink-0"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                aria-hidden="true"
                style={{ color: "rgba(201,162,74,0.75)" }}
              >
                <path d="M3 6h18M7 12h10M11 18h2" strokeLinecap="round" />
              </svg>
              <span
                className="text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                style={{ color: "rgba(6,63,51,0.62)" }}
              >
                {expanded ? "Masquer les filtres" : "Affiner la recherche"}
              </span>
              {(comfort || budget || departureDate || travelers > 1) && (
                <span
                  className="rounded-full px-2 py-0.5 text-[0.60rem] font-bold"
                  style={{ background: "rgba(6,63,51,0.08)", color: "#063F33" }}
                >
                  Filtres actifs
                </span>
              )}
            </div>
            <svg
              className={cn("h-4 w-4 transition-transform duration-200", expanded ? "rotate-180" : "")}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
              aria-hidden="true"
              style={{ color: "rgba(24,18,10,0.35)" }}
            >
              <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Expanded filters */}
          {expanded && (
            <div className="px-6 pb-6 sm:px-8 sm:pb-7">
              <GoldRule className="mb-5" />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {/* Date */}
                <div className="flex flex-col gap-1.5">
                  <FieldLabel>Date de départ</FieldLabel>
                  <div className="relative">
                    <span
                      className="pointer-events-none absolute inset-y-0 left-3 flex items-center"
                      aria-hidden="true"
                      style={{ color: "rgba(201,162,74,0.70)" }}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
                      </svg>
                    </span>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      style={inputBase}
                      className="focus:border-[#063F33] focus:shadow-[0_0_0_3px_rgba(6,63,51,0.10)] hover:border-[rgba(201,162,74,0.50)]"
                    />
                  </div>
                </div>

                {/* Travelers */}
                <div className="flex flex-col gap-1.5">
                  <FieldLabel>Voyageurs</FieldLabel>
                  <div
                    className="flex items-center rounded-xl px-4 py-2.5"
                    style={{
                      background: "rgba(255,253,247,0.90)",
                      border: "1px solid rgba(201,162,74,0.22)",
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.04)",
                      minHeight: 46,
                    }}
                  >
                    <TravelerStepper value={travelers} onChange={setTravelers} />
                  </div>
                </div>

                {/* Comfort */}
                <div className="flex flex-col gap-1.5">
                  <FieldLabel>Niveau de confort</FieldLabel>
                  <PillGroup options={COMFORT_OPTIONS} value={comfort} onChange={(v) => setComfort(v)} />
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <FieldLabel>Budget / personne</FieldLabel>
                  <PillGroup options={BUDGET_OPTIONS} value={budget} onChange={(v) => setBudget(v)} gold />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom gold accent line */}
        <div
          className="h-[3px] w-full"
          aria-hidden="true"
          style={{ background: "linear-gradient(to right, transparent 0%, rgba(201,162,74,0.55) 20%, rgba(6,63,51,0.55) 50%, rgba(201,162,74,0.55) 80%, transparent 100%)" }}
        />
      </div>

      {/* No-scrollbar utility */}
      <style>{`
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
