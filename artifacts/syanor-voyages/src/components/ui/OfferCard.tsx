import Link from "@/components/Link";
import { cn, quoteUrl } from "@/lib/utils";
import type { AvailabilityStatus, TravelOffer } from "@/types";

/* ── Category → photo mapping ───────────────────────────────────── */
const CATEGORY_IMAGE: Record<string, string> = {
  "Omra":              "/services/religieux/omra.png",
  "Omra Plus":         "/services/religieux/omra-plus.png",
  "Hajj":              "/services/religieux/hajj.png",
  "Ramadan":           "/services/religieux/omra-ramadan.png",
  "Billet avion":      "/services/billets-avion.jpg",
  "Billet bateau":     "/services/billets-bateau.jpg",
  "Voyage organisé":   "/services/sur-mesure/voyages-organises.png",
  "Séjour sur mesure": "/services/sur-mesure/sejour-sur-mesure.png",
  "Pack personnalisé": "/services/sur-mesure/pack-premium-vip.png",
  "Hôtel & Transferts":"/img/hotel-view.jpg",
  "Visa":              "/img/kaaba-family.jpg",
  "Formation":         "/services/religieux/omra-plus.png",
  "Assurance":         "/img/hotel-view.jpg",
};

/* ── Status badge styles ────────────────────────────────────────── */
const STATUS_STYLE: Record<AvailabilityStatus, string> = {
  Disponible:          "bg-emerald-600/85 text-white",
  "Places limitées":   "bg-orange-500/85 text-white",
  "Sur demande":       "bg-sky-600/85 text-white",
  Complet:             "bg-gray-600/85 text-white",
  "À confirmer":       "bg-amber-500/85 text-white",
};

/* ── Service chips ──────────────────────────────────────────────── */
const CHIP_RULES = [
  { key: "formation",  label: "Formation",   match: /formation/i },
  { key: "ziyarat",    label: "Ziyarat",     match: /ziyarat/i },
  { key: "transferts", label: "Transferts",  match: /transfert/i },
  { key: "visa",       label: "Visa",        match: /visa/i },
  { key: "hebergement",label: "Hébergement", match: /h[eé]bergement/i },
  { key: "vols",       label: "Vols",        match: /^vol/i },
];

function detectChips(services: string[]) {
  return CHIP_RULES.filter((c) => services.some((s) => c.match.test(s)));
}

/* ── Photo header ───────────────────────────────────────────────── */
function PhotoHeader({
  category,
  status,
  featured,
  dateLabel,
}: {
  category: string;
  status?: AvailabilityStatus;
  featured?: boolean;
  dateLabel?: string;
}) {
  const img = CATEGORY_IMAGE[category] ?? "/services/religieux/omra.png";
  const statusCls = status ? STATUS_STYLE[status] : undefined;

  return (
    <div className="relative h-[168px] shrink-0 overflow-hidden rounded-t-2xl">
      <img
        src={img}
        alt={category}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      {/* Cinematic smoke overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(2,15,10,0.88) 0%, rgba(2,15,10,0.38) 50%, rgba(2,15,10,0.06) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Featured gold shine */}
      {featured && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-syanor-gold to-transparent opacity-80" aria-hidden="true" />
      )}

      {/* Top badges row */}
      <div className="absolute inset-x-3.5 top-3 flex items-start justify-between gap-2">
        <span className="rounded-full border border-syanor-gold/55 bg-syanor-royal/75 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-syanor-gold backdrop-blur-sm">
          {category}
        </span>
        {status && (
          <span className={cn("rounded-full px-2.5 py-0.5 text-[0.62rem] font-semibold backdrop-blur-sm", statusCls)}>
            {status}
          </span>
        )}
      </div>

      {/* Bottom of image — optional date badge */}
      {dateLabel && (
        <div className="absolute inset-x-3.5 bottom-3">
          <p className="font-playfair text-sm font-semibold text-white drop-shadow">
            {dateLabel}
          </p>
        </div>
      )}
    </div>
  );
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
      {/* Photo header */}
      <PhotoHeader
        category={offer.category}
        status={offer.availabilityStatus}
        featured={offer.featured}
        dateLabel={offer.departureDate}
      />

      {/* Card body */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">

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

        {/* Duration + comfort + year */}
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-syanor-ink/55">
          {offer.duration && (
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
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

        {/* Summary (for service cards without route) */}
        {!offer.outboundRoute && !offer.departureCity && offer.summary && (
          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-syanor-ink/55">
            {offer.summary}
          </p>
        )}

        {/* Service chips */}
        {chips.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <span
                key={c.key}
                className="rounded-full border border-syanor-gold/18 bg-syanor-champagne/50 px-2.5 py-0.5 text-[0.6rem] font-medium text-syanor-emerald"
              >
                {c.label}
              </span>
            ))}
          </div>
        )}

        {/* Room prices */}
        {offer.roomPrices && Object.values(offer.roomPrices).some((v) => !!v) && (
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

        {/* Price + CTAs */}
        <div className="mt-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-syanor-ink/45">
              {offer.priceFrom ?? "Sur demande"}
            </span>
            <Link
              href={`/offres/${offer.slug}`}
              className="text-xs font-semibold text-syanor-emerald/65 transition-colors hover:text-syanor-emerald"
            >
              Voir détails →
            </Link>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/offres/${offer.slug}`}
              className="flex-1 rounded-full border border-syanor-gold/25 px-3 py-2.5 text-center text-xs font-medium text-syanor-ink/65 transition-all duration-200 hover:border-syanor-gold hover:text-syanor-gold"
            >
              Détails
            </Link>
            <Link
              href={
                isComplete
                  ? `/offres/${offer.slug}`
                  : quoteUrl({ service: offer.category, offer: offer.title })
              }
              className={cn(
                "flex-[2] rounded-full px-3 py-2.5 text-center text-xs font-semibold transition-all duration-200",
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
      </div>
    </article>
  );
}
