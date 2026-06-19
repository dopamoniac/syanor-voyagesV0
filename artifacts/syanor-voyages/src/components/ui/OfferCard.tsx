import Link from "@/components/Link";
import { cn, quoteUrl } from "@/lib/utils";
import type { AvailabilityStatus, TravelOffer } from "@/types";

/* ── Category → photo mapping ───────────────────────────────────── */
const CATEGORY_IMAGE: Record<string, string> = {
  "Omra":              "/services/religieux/omra.png",
  "Omra Plus":         "/services/religieux/omra-plus.png",
  "Hajj":              "/services/religieux/hajj.png",
  "Ramadan":           "/services/religieux/omra-ramadan.png",
  "Billet avion":      "/services/billets-avion.png",
  "Billet bateau":     "/services/billets-bateau.png",
  "Voyage organisé":   "/services/sur-mesure/voyages-organises.png",
  "Séjour sur mesure": "/services/sur-mesure/sejour-sur-mesure.png",
  "Pack personnalisé": "/services/sur-mesure/pack-premium-vip.png",
  "Hôtel & Transferts":"/img/hotel-view.jpg",
  "Visa":              "/img/kaaba-family.jpg",
  "Formation":         "/services/religieux/omra-plus.png",
  "Assurance":         "/img/hotel-view.jpg",
};

/* ── Status config ──────────────────────────────────────────────── */
const STATUS_CONFIG: Record<AvailabilityStatus, { bg: string; text: string; dot: string }> = {
  Disponible:        { bg: "rgba(22,163,74,0.85)",  text: "#fff", dot: "#6ee7b7" },
  "Places limitées": { bg: "rgba(234,88,12,0.85)",  text: "#fff", dot: "#fdba74" },
  "Sur demande":     { bg: "rgba(2,132,199,0.85)",  text: "#fff", dot: "#93c5fd" },
  Complet:           { bg: "rgba(75,85,99,0.85)",   text: "#fff", dot: "#d1d5db" },
  "À confirmer":     { bg: "rgba(217,119,6,0.85)",  text: "#fff", dot: "#fde68a" },
};

/* ── Service chips ──────────────────────────────────────────────── */
const CHIP_RULES = [
  { key: "formation",   label: "Formation",   match: /formation/i },
  { key: "ziyarat",     label: "Ziyarat",     match: /ziyarat/i },
  { key: "transferts",  label: "Transferts",  match: /transfert/i },
  { key: "visa",        label: "Visa",        match: /visa/i },
  { key: "hebergement", label: "Hébergement", match: /h[eé]bergement/i },
  { key: "vols",        label: "Vols",        match: /^vol/i },
];

function detectChips(services: string[]) {
  return CHIP_RULES.filter((c) => services.some((s) => c.match.test(s)));
}

/* ── Cinematic photo header ──────────────────────────────────────── */
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
  const statusConf = status ? STATUS_CONFIG[status] : undefined;
  const isFloating = category === "Billet bateau";

  return (
    <div
      className="relative h-[160px] shrink-0 overflow-hidden rounded-t-2xl"
      style={isFloating ? { background: "linear-gradient(145deg, #F5EFE0 0%, #EDE3CC 60%, #E3D5B5 100%)" } : undefined}
    >
      <img
        src={img}
        alt={category}
        className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06] ${isFloating ? "object-contain object-center" : "object-cover"}`}
        style={isFloating ? { filter: "drop-shadow(0 16px 32px rgba(6,63,51,0.38)) drop-shadow(0 5px 10px rgba(0,0,0,0.22))" } : undefined}
        loading="lazy"
      />

      {/* Cinematic multi-stop gradient — hidden for floating transparent PNGs */}
      {!isFloating && (
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,8,6,0) 0%, rgba(2,8,6,0.08) 32%, rgba(2,8,6,0.55) 65%, rgba(2,8,6,0.88) 88%, rgba(2,8,6,0.94) 100%)",
        }}
        aria-hidden="true"
      />
      )}

      {/* Featured: gold top shine */}
      {featured && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(201,162,74,0.9) 40%, rgba(201,162,74,0.9) 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Top row: category badge + status */}
      <div className="absolute inset-x-3.5 top-3 flex items-start justify-between gap-2">
        <span
          className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-syanor-gold backdrop-blur-sm"
          style={{
            background: "rgba(2,43,36,0.60)",
            border: "1px solid rgba(201,162,74,0.28)",
          }}
        >
          {category}
        </span>
        {statusConf && status && (
          <span
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.58rem] font-semibold backdrop-blur-sm"
            style={{ background: statusConf.bg, color: statusConf.text }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: statusConf.dot }}
              aria-hidden="true"
            />
            {status}
          </span>
        )}
      </div>

      {/* Bottom: optional departure date */}
      {dateLabel && (
        <div className="absolute inset-x-3.5 bottom-3">
          <p
            className="font-playfair text-sm font-semibold text-white"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
          >
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
  const hasPriceFrom = !!offer.priceFrom;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(6,63,51,0.14)]",
        offer.featured
          ? "shadow-[0_4px_24px_rgba(201,162,74,0.16)]"
          : "shadow-[0_2px_12px_rgba(6,63,51,0.07)]"
      )}
      style={{
        background: "linear-gradient(180deg, #FDFAF4 0%, #FFF9ED 100%)",
        border: offer.featured
          ? "1.5px solid rgba(201,162,74,0.55)"
          : "1px solid rgba(201,162,74,0.18)",
      }}
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
          <div className="mt-2 flex items-center gap-1.5 text-xs text-syanor-ink/55">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 shrink-0 text-syanor-emerald/55"
              aria-hidden="true"
            >
              <path d="M10.5 13.5 3 12l.5-2 8 1.5 4-6.5c.5-.8 1.7-1 2.4-.3.6.6.5 1.6-.1 2.3L14 13l1.5 6.5-1.8.5-3-5-3 1.2-.2 2.3-1.3.3-.5-3 .5-2 4.3.9z" />
            </svg>
            <span className="truncate">
              {offer.outboundRoute ?? `${offer.departureCity} → ${offer.arrivalCity}`}
            </span>
          </div>
        )}

        {/* Duration + comfort + year */}
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-syanor-ink/48">
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
            <span className="font-medium text-syanor-emerald/65">{offer.year}</span>
          )}
        </div>

        {/* Summary */}
        {!offer.outboundRoute && !offer.departureCity && offer.summary && (
          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-syanor-ink/52">
            {offer.summary}
          </p>
        )}

        {/* Chips */}
        {chips.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <span
                key={c.key}
                className="rounded-full px-2.5 py-0.5 text-[0.58rem] font-semibold text-syanor-emerald"
                style={{
                  background: "rgba(6,63,51,0.06)",
                  border: "1px solid rgba(6,63,51,0.10)",
                }}
              >
                {c.label}
              </span>
            ))}
          </div>
        )}

        {/* Room prices */}
        {offer.roomPrices && Object.values(offer.roomPrices).some((v) => !!v) && (
          <div
            className="mt-4 rounded-xl p-3"
            style={{
              background: "rgba(255,249,237,0.8)",
              border: "1px solid rgba(201,162,74,0.14)",
            }}
          >
            <p className="mb-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-syanor-gold/65">
              Tarifs chambre
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
              {offer.roomPrices.quad && (
                <div className="flex items-center justify-between gap-1">
                  <span className="text-syanor-ink/40">Quad.</span>
                  <span className="font-semibold text-syanor-ink/78">{offer.roomPrices.quad}</span>
                </div>
              )}
              {offer.roomPrices.triple && (
                <div className="flex items-center justify-between gap-1">
                  <span className="text-syanor-ink/40">Triple</span>
                  <span className="font-semibold text-syanor-ink/78">{offer.roomPrices.triple}</span>
                </div>
              )}
              {offer.roomPrices.double && (
                <div className="flex items-center justify-between gap-1">
                  <span className="text-syanor-ink/40">Double</span>
                  <span className="font-semibold text-syanor-ink/78">{offer.roomPrices.double}</span>
                </div>
              )}
              {offer.roomPrices.individual && (
                <div className="flex items-center justify-between gap-1">
                  <span className="text-syanor-ink/40">Indiv.</span>
                  <span className="font-semibold text-syanor-ink/78">{offer.roomPrices.individual}</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex-1" />

        {/* ── Price + CTAs ── */}
        <div className="mt-5">
          {/* Gold separator */}
          <div
            className="mb-4 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(201,162,74,0.28) 0%, rgba(201,162,74,0.08) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Price row */}
          <div className="mb-3.5 flex items-center justify-between gap-2">
            {hasPriceFrom ? (
              <div>
                <p className="text-[0.58rem] font-semibold uppercase tracking-wider text-syanor-ink/35">
                  À partir de
                </p>
                <p className="font-playfair text-base font-bold text-syanor-emerald">
                  {offer.priceFrom}
                </p>
              </div>
            ) : (
              <p className="text-xs font-medium text-syanor-ink/40">Sur demande</p>
            )}
            <Link
              href={`/offres/${offer.slug}`}
              className="text-[0.68rem] font-semibold text-syanor-gold/65 transition-colors hover:text-syanor-gold"
            >
              Voir détails →
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-2">
            <Link
              href={`/offres/${offer.slug}`}
              className="flex-1 rounded-full border border-syanor-gold/22 px-3 py-2.5 text-center text-[0.72rem] font-medium text-syanor-ink/60 transition-all duration-200 hover:border-syanor-gold/50 hover:text-syanor-gold"
            >
              Détails
            </Link>
            <Link
              href={
                isComplete
                  ? `/offres/${offer.slug}`
                  : quoteUrl({
                      service: offer.category,
                      offer: offer.title,
                      ...(offer.returnDate
                        ? {
                            programmed: true,
                            departureDate: offer.departureDate,
                            returnDate: offer.returnDate,
                          }
                        : {}),
                    })
              }
              className={cn(
                "flex-[2] rounded-full px-3 py-2.5 text-center text-[0.72rem] font-semibold transition-all duration-200",
                isComplete
                  ? "cursor-not-allowed bg-syanor-ink/8 text-syanor-ink/28"
                  : "bg-syanor-emerald text-syanor-champagne hover:bg-syanor-gold hover:text-syanor-royal hover:shadow-[0_4px_16px_rgba(201,162,74,0.28)]"
              )}
              aria-disabled={isComplete}
            >
              {isComplete ? "Complet" : "Choisir ce départ →"}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
