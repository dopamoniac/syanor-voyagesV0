import Link from "@/components/Link";
import { cn, quoteUrl } from "@/lib/utils";
import type { AvailabilityStatus, TravelOffer } from "@/types";

/* ── Category visual config ─────────────────────────────────────── */
const CATEGORY_BG: Record<string, string> = {
  "Omra":              "linear-gradient(140deg, #022b24 0%, #063f33 60%, #0a5244 100%)",
  "Omra Plus":         "linear-gradient(140deg, #063f33 0%, #0d6655 100%)",
  "Hajj":              "linear-gradient(140deg, #011a14 0%, #022b24 100%)",
  "Ramadan":           "linear-gradient(140deg, #022b24 0%, #0a4d3e 100%)",
  "Billet avion":      "linear-gradient(140deg, #1a3a50 0%, #0d2d40 100%)",
  "Billet bateau":     "linear-gradient(140deg, #0d3d55 0%, #154d65 100%)",
  "Voyage organisé":   "linear-gradient(140deg, #3d2800 0%, #5c3f00 100%)",
  "Séjour sur mesure": "linear-gradient(140deg, #4a3000 0%, #6b4500 100%)",
  "Pack personnalisé": "linear-gradient(140deg, #3a1a40 0%, #522a55 100%)",
};

const CATEGORY_ICON: Record<string, string> = {
  "Omra": "crescent",
  "Omra Plus": "crescent",
  "Hajj": "crescent",
  "Ramadan": "crescent",
  "Billet avion": "airplane",
  "Billet bateau": "anchor",
  "Voyage organisé": "route",
  "Séjour sur mesure": "compass",
  "Pack personnalisé": "sparkle",
};

const STATUS_CLASS: Record<AvailabilityStatus, string> = {
  Disponible:      "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Places limitées": "bg-amber-50 text-amber-700 border-amber-100",
  "Sur demande":   "bg-sky-50 text-sky-700 border-sky-100",
  Complet:         "bg-red-50 text-red-700 border-red-100",
  "À confirmer":   "bg-slate-100 text-slate-500 border-slate-200",
};

const SERVICE_CHIPS = [
  { key: "formation", label: "Formation",  match: (s: string) => /formation/i.test(s) },
  { key: "ziyarat",   label: "Ziyarat",    match: (s: string) => /ziyarat/i.test(s) },
  { key: "transferts",label: "Transferts", match: (s: string) => /transfert/i.test(s) },
  { key: "visa",      label: "Visa",       match: (s: string) => /visa/i.test(s) },
];

function detectChips(services: string[]) {
  return SERVICE_CHIPS.filter((chip) => services.some((s) => chip.match(s)));
}

/* ── Category visual header ─────────────────────────────────────── */
function CategoryHeader({ category, featured }: { category: string; featured?: boolean }) {
  const bg = CATEGORY_BG[category] ?? "linear-gradient(140deg, #063f33, #022b24)";
  const iconName = CATEGORY_ICON[category] ?? "compass";

  return (
    <div
      className="relative flex h-[72px] items-center justify-center overflow-hidden rounded-t-2xl"
      style={{ background: bg }}
      aria-hidden="true"
    >
      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(201,162,74,0.5) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Gold glow halo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,74,0.12),transparent_65%)]" />
      {/* Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(201,162,74,0.75)"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative h-9 w-9"
        aria-hidden="true"
      >
        {iconSvgPath(iconName)}
      </svg>
      {/* Featured shine */}
      {featured && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-syanor-gold to-transparent opacity-70" />
      )}
    </div>
  );
}

/** Returns the inner SVG path for a given icon name (mirrors Icon.tsx paths). */
function iconSvgPath(name: string) {
  switch (name) {
    case "crescent":
      return (
        <>
          <path d="M16 3a9 9 0 1 0 4 14 7 7 0 0 1-4-13z" />
          <path d="M19 5l.6 1.4L21 7l-1.4.6L19 9l-.6-1.4L17 7l1.4-.6z" />
        </>
      );
    case "airplane":
      return <path d="M10.5 13.5 3 12l.5-2 8 1.5 4-6.5c.5-.8 1.7-1 2.4-.3.6.6.5 1.6-.1 2.3L14 13l1.5 6.5-1.8.5-3-5-3 1.2-.2 2.3-1.3.3-.5-3 .5-2 4.3.9z" />;
    case "anchor":
      return (
        <>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v13M5 13a7 7 0 0 0 14 0M5 13H3m16 0h2" />
        </>
      );
    case "route":
      return (
        <>
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="18" r="2.2" />
          <path d="M8 6h6a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h6" />
        </>
      );
    case "compass":
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5z" />
        </>
      );
    case "sparkle":
    default:
      return <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />;
  }
}

/* ── Main component ─────────────────────────────────────────────── */
export default function OfferCard({ offer }: { offer: TravelOffer }) {
  const isComplete = offer.availabilityStatus === "Complet";
  const chips = detectChips(offer.includedServices);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-syanor-pearl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover",
        offer.featured
          ? "border-2 border-syanor-gold/60 shadow-gold"
          : "border border-syanor-gold/20 shadow-card"
      )}
    >
      {/* Featured top shine */}
      {offer.featured && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-syanor-gold to-transparent" aria-hidden="true" />
      )}

      {/* Visual header */}
      <CategoryHeader category={offer.category} featured={offer.featured} />

      {/* Status badge — overlaps header */}
      {offer.availabilityStatus && (
        <div className="absolute right-3 top-3">
          <span className={cn("rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold", STATUS_CLASS[offer.availabilityStatus])}>
            {offer.availabilityStatus}
          </span>
        </div>
      )}

      {/* Category label — overlaps header bottom */}
      <div className="absolute left-3 top-[52px]">
        <span className="rounded-full bg-syanor-emerald/10 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-syanor-emerald ring-1 ring-syanor-emerald/15">
          {offer.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-6">
        {/* Date badge */}
        {offer.departureDate && (
          <div className="mb-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-syanor-gold/30 bg-syanor-gold/8 px-3 py-1 text-xs font-semibold text-syanor-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M3 9h18M8 2v4M16 2v4" />
              </svg>
              {offer.departureDate}
              {offer.returnDate && (
                <span className="text-syanor-gold/60">→ {offer.returnDate}</span>
              )}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="font-playfair text-base font-bold leading-snug text-syanor-ink">
          <Link
            href={`/offres/${offer.slug}`}
            className="transition-colors duration-200 hover:text-syanor-emerald"
          >
            {offer.title}
          </Link>
        </h3>

        {/* Route */}
        {(offer.outboundRoute || (offer.departureCity && offer.arrivalCity)) && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-syanor-ink/60">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0 text-syanor-emerald/60" aria-hidden="true">
              <path d="M10.5 13.5 3 12l.5-2 8 1.5 4-6.5c.5-.8 1.7-1 2.4-.3.6.6.5 1.6-.1 2.3L14 13l1.5 6.5-1.8.5-3-5-3 1.2-.2 2.3-1.3.3-.5-3 .5-2 4.3.9z" />
            </svg>
            <span className="truncate">
              {offer.outboundRoute ?? `${offer.departureCity} → ${offer.arrivalCity}`}
            </span>
          </div>
        )}

        {/* Duration + comfort */}
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-syanor-ink/55">
          {offer.duration && (
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {offer.duration}
            </span>
          )}
          {offer.comfortLevel && (
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="m12 3 2.6 5.5 6 .8-4.3 4.1 1 6L12 16.8 6.7 19.4l1-6L3.4 9.3l6-.8z" />
              </svg>
              {offer.comfortLevel}
            </span>
          )}
          {offer.year && (
            <span className="font-medium text-syanor-emerald/70">{offer.year}</span>
          )}
        </div>

        {/* Service chips */}
        {chips.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <span
                key={c.key}
                className="rounded-full bg-syanor-emerald/8 px-2.5 py-0.5 text-[0.65rem] font-medium text-syanor-emerald ring-1 ring-syanor-emerald/15"
              >
                {c.label}
              </span>
            ))}
          </div>
        )}

        {/* Room prices */}
        {offer.roomPrices &&
          Object.values(offer.roomPrices).some((v) => !!v) && (
            <div className="mt-4 rounded-xl border border-syanor-gold/15 bg-white/70 p-3">
              <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-wider text-syanor-gold/70">
                Tarifs chambre
              </p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
                {offer.roomPrices.quad && (
                  <div className="flex items-center justify-between gap-1 border-b border-syanor-gold/8 pb-1">
                    <span className="text-syanor-ink/45">Quad.</span>
                    <span className="font-semibold text-syanor-ink/80">{offer.roomPrices.quad}</span>
                  </div>
                )}
                {offer.roomPrices.triple && (
                  <div className="flex items-center justify-between gap-1 border-b border-syanor-gold/8 pb-1">
                    <span className="text-syanor-ink/45">Triple</span>
                    <span className="font-semibold text-syanor-ink/80">{offer.roomPrices.triple}</span>
                  </div>
                )}
                {offer.roomPrices.double && (
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-syanor-ink/45">Double</span>
                    <span className="font-semibold text-syanor-ink/80">{offer.roomPrices.double}</span>
                  </div>
                )}
                {offer.roomPrices.individual && (
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-syanor-ink/45">Indiv.</span>
                    <span className="font-semibold text-syanor-ink/80">{offer.roomPrices.individual}</span>
                  </div>
                )}
              </div>
            </div>
          )}

        <div className="flex-1" />

        {/* CTAs */}
        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`/offres/${offer.slug}`}
            className="flex-1 rounded-full border border-syanor-gold/25 px-4 py-2.5 text-center text-xs font-medium text-syanor-ink/65 transition-all duration-200 hover:border-syanor-gold hover:text-syanor-gold"
          >
            Voir détails
          </Link>
          <Link
            href={
              isComplete
                ? `/offres/${offer.slug}`
                : quoteUrl({ service: offer.category, offer: offer.title })
            }
            className={cn(
              "flex-1 rounded-full px-4 py-2.5 text-center text-xs font-semibold transition-all duration-200",
              isComplete
                ? "cursor-not-allowed bg-syanor-ink/8 text-syanor-ink/30"
                : "bg-syanor-emerald text-syanor-champagne hover:bg-syanor-gold hover:text-syanor-royal"
            )}
            aria-disabled={isComplete}
          >
            {isComplete ? "Complet" : "Choisir →"}
          </Link>
        </div>
      </div>
    </article>
  );
}
