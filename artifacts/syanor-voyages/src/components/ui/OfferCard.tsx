import Link from "@/components/Link";
import { cn, quoteUrl } from "@/lib/utils";
import GoldDivider from "@/components/ui/GoldDivider";
import type { AvailabilityStatus, TravelOffer } from "@/types";

const statusClass: Record<AvailabilityStatus, string> = {
  Disponible: "bg-emerald-50 text-emerald-700",
  "Places limitées": "bg-amber-50 text-amber-700",
  "Sur demande": "bg-blue-50 text-blue-700",
  Complet: "bg-red-50 text-red-700",
  "À confirmer": "bg-slate-100 text-slate-600",
};

export default function OfferCard({ offer }: { offer: TravelOffer }) {
  const isComplete = offer.availabilityStatus === "Complet";

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl bg-syanor-pearl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        offer.featured
          ? "border-2 border-syanor-gold/60 shadow-gold"
          : "border border-syanor-gold/20"
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="rounded-full bg-syanor-emerald/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-emerald">
          {offer.category}
        </span>
        {offer.availabilityStatus && (
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[0.7rem] font-semibold",
              statusClass[offer.availabilityStatus]
            )}
          >
            {offer.availabilityStatus}
          </span>
        )}
      </div>

      <h3 className="font-playfair text-xl font-bold text-syanor-ink">
        <Link href={`/offres/${offer.slug}`} className="transition hover:text-syanor-emerald">
          {offer.title}
        </Link>
      </h3>

      <GoldDivider className="my-4" />

      <ul className="space-y-2 text-sm text-syanor-ink/75">
        {(offer.departureDate || offer.returnDate) && (
          <li className="flex items-center gap-2">
            <span aria-hidden="true">📅</span>
            <span>
              {offer.departureDate ?? "Dates flexibles"}
              {offer.returnDate ? ` → ${offer.returnDate}` : ""}
            </span>
          </li>
        )}
        {offer.duration && (
          <li className="flex items-center gap-2">
            <span aria-hidden="true">⏱</span>
            <span>{offer.duration}</span>
          </li>
        )}
        {offer.outboundRoute && (
          <li className="flex items-center gap-2">
            <span aria-hidden="true">✈</span>
            <span>{offer.outboundRoute}</span>
          </li>
        )}
        {!offer.outboundRoute && offer.transportType && (
          <li className="flex items-center gap-2">
            <span aria-hidden="true">🧭</span>
            <span>Transport : {offer.transportType}</span>
          </li>
        )}
        {offer.hotelLevel && (
          <li className="flex items-center gap-2">
            <span aria-hidden="true">🏨</span>
            <span>{offer.hotelLevel}</span>
          </li>
        )}
      </ul>

      <GoldDivider className="my-4" />

      <div className="flex-1">
        <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-gold">
          Inclus
        </p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-syanor-ink/70">
          {offer.includedServices.slice(0, 6).map((item) => (
            <li key={item} className="flex items-center gap-1">
              <span className="text-syanor-gold" aria-hidden="true">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <GoldDivider className="my-4" />

      <div className="flex items-center justify-between gap-3">
        <span className="font-playfair text-sm font-semibold text-syanor-emerald">
          {offer.priceFrom}
        </span>
        <Link
          href={`/offres/${offer.slug}`}
          className="text-sm font-medium text-syanor-gold underline-offset-4 hover:underline"
        >
          Voir détails →
        </Link>
      </div>

      <Link
        href={
          isComplete
            ? `/offres/${offer.slug}`
            : quoteUrl({ service: offer.category, offer: offer.title })
        }
        className={cn(
          "mt-4 w-full rounded-full px-5 py-2.5 text-center text-sm font-medium transition-all duration-300",
          isComplete
            ? "cursor-not-allowed bg-syanor-ink/10 text-syanor-ink/40"
            : "bg-syanor-emerald text-syanor-champagne hover:bg-syanor-gold hover:text-syanor-royal"
        )}
        aria-disabled={isComplete}
      >
        {isComplete ? "Complet" : "Demander ce départ"}
      </Link>
    </article>
  );
}
