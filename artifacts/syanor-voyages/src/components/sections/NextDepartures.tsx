import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import { offers } from "@/data/offers";
import { quoteUrl } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const MONTH_ORDER: Record<string, number> = {
  Jan: 0,
  "Fév": 1, "Feb": 1,
  Mar: 2,
  "Avr": 3, "Apr": 3,
  Mai: 4,
  Juin: 5, Jun: 5,
  Juil: 6, Jul: 6,
  "Août": 7, "Aou": 7, Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  "Déc": 11, "Dec": 11,
};

function parseDepartureDate(dateStr: string): number {
  if (!dateStr) return Infinity;
  // [A-Za-z\u00C0-\u00FF]+ matches accented French abbreviations: Fév, Déc, Août, Avr…
  const m = dateStr.match(/^(\d{1,2})\s+([A-Za-z\u00C0-\u00FF]+)\.?\s+(\d{4})/);
  if (!m) return Infinity;
  const [, day, mon, year] = m;
  const month = MONTH_ORDER[mon] ?? 0;
  return new Date(Number(year), month, Number(day)).getTime();
}

function getNextDepartures(limit = 6) {
  return offers
    .filter(
      (o) =>
        (o.category === "Omra" || o.category === "Omra Plus" || o.category === "Hajj") &&
        o.departureDate &&
        /^\d{1,2}\s/.test(o.departureDate)
    )
    .sort((a, b) => parseDepartureDate(a.departureDate ?? "") - parseDepartureDate(b.departureDate ?? ""))
    .slice(0, limit);
}

const STATUS_COLORS: Record<string, string> = {
  "À confirmer": "bg-amber-50 text-amber-700 border-amber-200",
  Disponible: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Sur demande": "bg-blue-50 text-blue-700 border-blue-200",
};

export default function NextDepartures() {
  const departures = getNextDepartures(6);
  if (departures.length === 0) return null;

  return (
    <section className="section-pad bg-syanor-champagne/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Programme 2026–2027</p>
            <h2 className="font-playfair text-2xl leading-tight text-syanor-ink md:text-h2">
              Nos prochains départs Omra
            </h2>
          </div>
          <Link href="/omra-hajj" className="btn-secondary shrink-0">
            Voir tous les départs
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departures.map((offer, i) => {
            const statusClass =
              STATUS_COLORS[offer.availabilityStatus ?? ""] ??
              "bg-gray-50 text-gray-600 border-gray-200";
            return (
              <Reveal key={offer.id} delay={i * 50}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-syanor-gold/20 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex items-center justify-between bg-syanor-emerald px-5 py-3">
                    <span className="font-playfair text-lg text-syanor-ivory">
                      {offer.departureDate}
                    </span>
                    {offer.returnDate && (
                      <span className="text-xs text-syanor-champagne/70">
                        → {offer.returnDate}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-syanor-gold">
                      {offer.category}
                    </p>
                    <h3 className="mt-1 font-playfair text-base leading-snug text-syanor-ink">
                      {offer.title}
                    </h3>

                    <div className="mt-3 space-y-1.5 text-xs text-syanor-ink/60">
                      <div className="flex items-center gap-1.5">
                        <Icon name="airplane" className="h-3 w-3 shrink-0 text-syanor-gold/60" aria-hidden="true" />
                        {offer.departureCity}
                      </div>
                      {offer.duration && (
                        <div className="flex items-center gap-1.5">
                          <Icon name="calendar" className="h-3 w-3 shrink-0 text-syanor-gold/60" aria-hidden="true" />
                          {offer.duration}
                        </div>
                      )}
                      {offer.comfortLevel && (
                        <div className="flex items-center gap-1.5">
                          <Icon name="star" className="h-3 w-3 shrink-0 text-syanor-gold/60" aria-hidden="true" />
                          {offer.comfortLevel}
                        </div>
                      )}
                    </div>

                    <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium ${statusClass}`}
                      >
                        {offer.availabilityStatus}
                      </span>
                      {offer.slug ? (
                        <Link
                          href={`/offres/${offer.slug}`}
                          className="text-xs font-semibold text-syanor-emerald underline-offset-2 hover:underline"
                        >
                          Voir détails →
                        </Link>
                      ) : (
                        <Link
                          href={quoteUrl({
                            service: offer.category,
                            offer: offer.title,
                            departureDate: offer.departureDate,
                          })}
                          className="text-xs font-semibold text-syanor-emerald underline-offset-2 hover:underline"
                        >
                          Demander ce départ →
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-syanor-ink/55">
          Tarifs sur devis ·{" "}
          <Link href="/contact#quote" className="font-medium text-syanor-emerald hover:underline">
            Demander une proposition personnalisée
          </Link>
        </p>
      </div>
    </section>
  );
}
