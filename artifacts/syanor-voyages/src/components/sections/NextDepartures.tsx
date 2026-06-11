import Link from "@/components/Link";
import { offers } from "@/data/offers";
import PremiumDepartureCard from "@/components/ui/PremiumDepartureCard";

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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {departures.map((offer, i) => (
            <PremiumDepartureCard
              key={offer.id}
              offer={offer}
              index={i}
              delay={i * 60}
            />
          ))}
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
