import { useState } from "react";
import Link from "@/components/Link";
import { cn } from "@/lib/utils";
import { omraMonths } from "@/data/months";
import { offers } from "@/data/offers";
import { quoteUrl } from "@/lib/utils";

function getOffersForMonth(monthSlug: string) {
  return offers.filter(
    (o) =>
      o.monthSlug === monthSlug &&
      (o.category === "Omra" || o.category === "Omra Plus" || o.category === "Hajj")
  );
}

export default function OmraByMonth() {
  const [activeSlug, setActiveSlug] = useState(omraMonths[0].slug);
  const activeMonth = omraMonths.find((m) => m.slug === activeSlug) ?? omraMonths[0];
  const monthOffers = getOffersForMonth(activeSlug);

  return (
    <section className="section-pad bg-syanor-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="eyebrow mb-3">Programme par mois</p>
          <h2 className="font-playfair text-3xl leading-tight text-syanor-ink md:text-h2">
            Omra par mois — 2026 &amp; 2027
          </h2>
          <div className="mx-auto mt-5 w-24 gold-divider" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-xl text-base text-syanor-ink/70">
            Choisissez votre mois de départ et découvrez les départs disponibles depuis Nice et Marseille.
          </p>
        </div>

        {/* Month chips */}
        <div
          role="tablist"
          aria-label="Sélectionner un mois"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {omraMonths.map((m) => (
            <button
              key={`${m.year}-${m.slug}`}
              role="tab"
              aria-selected={activeSlug === m.slug}
              type="button"
              onClick={() => setActiveSlug(m.slug)}
              className={cn(
                "relative rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
                activeSlug === m.slug
                  ? "border-syanor-emerald bg-syanor-emerald text-syanor-ivory shadow-sm"
                  : "border-syanor-gold/25 bg-white text-syanor-ink/70 hover:border-syanor-emerald/50 hover:text-syanor-emerald"
              )}
            >
              {m.label}
              <span className="ml-2 text-[0.65rem] opacity-70">{m.year.slice(2)}</span>
              {m.departureCount > 0 && (
                <span
                  className={cn(
                    "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[0.6rem] font-bold",
                    activeSlug === m.slug
                      ? "bg-syanor-gold text-syanor-royal"
                      : "bg-syanor-emerald text-syanor-ivory"
                  )}
                >
                  {m.departureCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="mt-10 rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-playfair text-xl text-syanor-ink">{activeMonth.labelFull}</h3>
              <p className="mt-1 text-sm text-syanor-ink/65">{activeMonth.description}</p>
              {activeMonth.dateRange && (
                <p className="mt-2 text-xs font-medium text-syanor-gold">
                  📅 {activeMonth.dateRange}
                </p>
              )}
            </div>
            <Link
              href={activeMonth.href}
              className="shrink-0 text-sm font-semibold text-syanor-emerald hover:underline"
            >
              Voir la page {activeMonth.label} →
            </Link>
          </div>

          {monthOffers.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {monthOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="rounded-xl border border-syanor-gold/15 bg-white p-4 shadow-sm"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-syanor-gold">
                    {offer.category}
                  </p>
                  <p className="mt-1 font-playfair text-sm font-semibold text-syanor-ink">
                    {offer.departureDate}
                    {offer.returnDate ? ` → ${offer.returnDate}` : ""}
                  </p>
                  {offer.duration && (
                    <p className="mt-0.5 text-xs text-syanor-ink/55">{offer.duration}</p>
                  )}
                  <Link
                    href={quoteUrl({ service: offer.category, offer: offer.title, departureDate: offer.departureDate })}
                    className="mt-3 block text-xs font-semibold text-syanor-emerald hover:underline"
                  >
                    Demander ce départ →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-syanor-gold/30 p-6 text-center">
              <p className="text-sm text-syanor-ink/55">
                Dates en cours de confirmation pour {activeMonth.labelFull}.
              </p>
              <Link
                href={quoteUrl({ service: "Omra", month: activeMonth.slug })}
                className="mt-3 inline-block text-sm font-semibold text-syanor-emerald hover:underline"
              >
                M&apos;inscrire pour être contacté en priorité
              </Link>
            </div>
          )}

          <div className="mt-6 border-t border-syanor-gold/15 pt-5 text-center">
            <Link href={quoteUrl({ service: "Omra", month: activeMonth.slug })} className="btn-primary">
              Demander un devis pour {activeMonth.labelFull}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
