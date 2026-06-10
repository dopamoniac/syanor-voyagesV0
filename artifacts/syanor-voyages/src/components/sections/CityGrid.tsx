import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { departureCities } from "@/data/cities";
import { offers } from "@/data/offers";
import { quoteUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

function getDepartureCount(citySlug: string): number {
  return offers.filter(
    (o) =>
      Array.isArray(o.cityTags) &&
      o.cityTags.includes(citySlug) &&
      (o.category === "Omra" || o.category === "Omra Plus")
  ).length;
}

export default function CityGrid() {
  return (
    <section className="section-pad bg-syanor-pearl">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="eyebrow mb-3">Départs par ville</p>
          <h2 className="font-playfair text-3xl leading-tight text-syanor-ink md:text-h2">
            Partez depuis votre ville
          </h2>
          <div className="mx-auto mt-5 w-24 gold-divider" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-xl text-base text-syanor-ink/70">
            SYANOR organise des départs depuis Nice et Marseille avec des vols confirmés.
            Depuis Lyon, Paris, Toulouse et Bruxelles, nous construisons votre itinéraire sur mesure.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {departureCities.map((city, i) => {
            const count = getDepartureCount(city.slug);
            return (
              <Reveal key={city.slug} delay={i * 60}>
                <article
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-2xl border shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
                    city.confirmed
                      ? "border-syanor-gold/25 bg-white"
                      : "border-syanor-gold/15 bg-syanor-ivory"
                  )}
                >
                  {/* Top accent */}
                  <div
                    className={cn(
                      "flex items-center justify-between px-5 py-3",
                      city.confirmed ? "bg-syanor-emerald" : "bg-syanor-emerald/80"
                    )}
                  >
                    <div>
                      <span className="font-playfair text-lg text-syanor-ivory">{city.name}</span>
                      <span className="ml-2 text-xs text-syanor-champagne/70">({city.airportCode})</span>
                    </div>
                    {city.confirmed ? (
                      <span className="rounded-full bg-syanor-gold/20 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-syanor-gold">
                        Confirmé
                      </span>
                    ) : (
                      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-syanor-champagne/70">
                        Sur demande
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs text-syanor-ink/55">{city.region}, {city.country}</p>
                    <p className="mt-2 text-sm leading-relaxed text-syanor-ink/70 line-clamp-3">
                      {city.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs text-syanor-ink/50">
                      <Icon name="airplane" className="h-3 w-3 shrink-0 text-syanor-gold/60" aria-hidden="true" />
                      <span>{city.outboundRoute}</span>
                    </div>

                    {count > 0 && (
                      <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-syanor-emerald">
                        <Icon name="calendar" className="h-3 w-3 shrink-0" aria-hidden="true" />
                        {count} départ{count > 1 ? "s" : ""} au programme
                      </div>
                    )}

                    {city.travelNote && (
                      <p className="mt-2 text-[0.68rem] italic text-syanor-ink/40">
                        {city.travelNote}
                      </p>
                    )}

                    <div className="mt-auto pt-5 flex gap-2">
                      <Link
                        href={`/depart/${city.slug}`}
                        className="flex-1 text-center text-xs font-semibold text-syanor-emerald hover:underline py-2"
                      >
                        Voir les départs
                      </Link>
                      <Link
                        href={quoteUrl({ service: "Omra", city: city.slug })}
                        className="btn-primary flex-1 text-xs py-2"
                      >
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
