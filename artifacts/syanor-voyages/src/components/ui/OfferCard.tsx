import Link from "@/components/Link";
import { cn, quoteUrl } from "@/lib/utils";
import type { AvailabilityStatus, TravelOffer } from "@/types";

const statusClass: Record<AvailabilityStatus, string> = {
  Disponible: "bg-emerald-50 text-emerald-700",
  "Places limitées": "bg-amber-50 text-amber-700",
  "Sur demande": "bg-blue-50 text-blue-700",
  Complet: "bg-red-50 text-red-700",
  "À confirmer": "bg-slate-100 text-slate-500",
};

const SERVICE_CHIPS = [
  { key: "formation", label: "Formation", match: (s: string) => /formation/i.test(s) },
  { key: "ziyarat", label: "Ziyarat", match: (s: string) => /ziyarat/i.test(s) },
  { key: "transferts", label: "Transferts", match: (s: string) => /transfert/i.test(s) },
  { key: "visa", label: "Visa", match: (s: string) => /visa/i.test(s) },
];

function detectServiceChips(services: string[]) {
  return SERVICE_CHIPS.filter((chip) =>
    services.some((s) => chip.match(s))
  );
}

export default function OfferCard({ offer }: { offer: TravelOffer }) {
  const isComplete = offer.availabilityStatus === "Complet";
  const chips = detectServiceChips(offer.includedServices);
  const hasPrices = offer.roomPrices &&
    Object.values(offer.roomPrices).some((v) => v && v !== "Sur demande");

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl bg-syanor-pearl transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        offer.featured
          ? "border-2 border-syanor-gold/60 shadow-gold"
          : "border border-syanor-gold/20 shadow-card"
      )}
    >
      {/* Top: category + status */}
      <div className="flex items-center justify-between gap-2 rounded-t-2xl bg-syanor-champagne/40 px-5 py-3">
        <span className="rounded-full bg-syanor-emerald/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-syanor-emerald">
          {offer.category}
        </span>
        {offer.availabilityStatus && (
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[0.68rem] font-semibold",
              statusClass[offer.availabilityStatus]
            )}
          >
            {offer.availabilityStatus}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Date badge + title */}
        {offer.departureDate && (
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-syanor-gold/30 bg-syanor-gold/10 px-3 py-1 text-xs font-semibold text-syanor-gold">
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M5 1a1 1 0 012 0v1h2V1a1 1 0 012 0v1h2a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h2V1zm-2 4v7h10V5H3z" />
              </svg>
              {offer.departureDate}
            </span>
          </div>
        )}

        <h3 className="font-playfair text-lg font-bold leading-snug text-syanor-ink">
          <Link href={`/offres/${offer.slug}`} className="transition hover:text-syanor-emerald">
            {offer.title}
          </Link>
        </h3>

        {/* Route arrow */}
        {(offer.outboundRoute || (offer.departureCity && offer.arrivalCity)) && (
          <div className="mt-2.5 flex items-center gap-2 text-sm text-syanor-ink/65">
            <span className="text-syanor-gold" aria-hidden="true">✈</span>
            <span>
              {offer.outboundRoute ?? `${offer.departureCity} → ${offer.arrivalCity}`}
            </span>
          </div>
        )}

        {/* Duration + comfort */}
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-syanor-ink/60">
          {offer.duration && (
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="8" cy="8" r="6" /><path d="M8 5v3l2 2" strokeLinecap="round" />
              </svg>
              {offer.duration}
            </span>
          )}
          {offer.comfortLevel && (
            <span className="flex items-center gap-1">
              <span aria-hidden="true">🏨</span>
              {offer.comfortLevel}
            </span>
          )}
        </div>

        {/* Service chips */}
        {chips.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <span
                key={c.key}
                className="rounded-full bg-syanor-emerald/8 px-2.5 py-1 text-[0.68rem] font-medium text-syanor-emerald"
              >
                {c.label}
              </span>
            ))}
          </div>
        )}

        {/* Room price summary */}
        {offer.roomPrices && (
          <div className="mt-4 rounded-xl border border-syanor-gold/15 bg-white p-3">
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-wider text-syanor-gold/70">
              Tarifs chambre
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              {offer.roomPrices.quad && (
                <div className="flex items-center justify-between gap-1">
                  <span className="text-syanor-ink/55">Quad.</span>
                  <span className="font-medium text-syanor-ink">{offer.roomPrices.quad}</span>
                </div>
              )}
              {offer.roomPrices.triple && (
                <div className="flex items-center justify-between gap-1">
                  <span className="text-syanor-ink/55">Triple</span>
                  <span className="font-medium text-syanor-ink">{offer.roomPrices.triple}</span>
                </div>
              )}
              {offer.roomPrices.double && (
                <div className="flex items-center justify-between gap-1">
                  <span className="text-syanor-ink/55">Double</span>
                  <span className="font-medium text-syanor-ink">{offer.roomPrices.double}</span>
                </div>
              )}
              {offer.roomPrices.individual && (
                <div className="flex items-center justify-between gap-1">
                  <span className="text-syanor-ink/55">Indiv.</span>
                  <span className="font-medium text-syanor-ink">{offer.roomPrices.individual}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Dual CTAs */}
        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`/offres/${offer.slug}`}
            className="flex-1 rounded-full border border-syanor-gold/30 px-4 py-2.5 text-center text-sm font-medium text-syanor-ink/70 transition hover:border-syanor-gold hover:text-syanor-gold"
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
              "flex-1 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-all duration-300",
              isComplete
                ? "cursor-not-allowed bg-syanor-ink/10 text-syanor-ink/40"
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
