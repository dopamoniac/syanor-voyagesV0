import OfferCard from "@/components/ui/OfferCard";
import PremiumDepartureCard from "@/components/ui/PremiumDepartureCard";
import Reveal from "@/components/ui/Reveal";
import type { TravelOffer } from "@/types";

const DEPARTURE_CATEGORIES = new Set(["Omra", "Hajj", "Omra Plus", "Ramadan"]);

function isDepartureOffer(offer: TravelOffer): boolean {
  return (
    DEPARTURE_CATEGORIES.has(offer.category) &&
    !!offer.departureDate &&
    /^\d{1,2}\s/.test(offer.departureDate)
  );
}

export default function OffersGrid({ offers }: { offers: TravelOffer[] }) {
  if (offers.length === 0) {
    return (
      <p className="mt-12 text-center text-syanor-ink/60">
        Aucune offre ne correspond à ces critères. Demandez une proposition sur
        mesure.
      </p>
    );
  }
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {offers.map((offer, i) =>
        isDepartureOffer(offer) ? (
          <PremiumDepartureCard
            key={offer.id}
            offer={offer}
            index={i}
            delay={(i % 3) * 60}
          />
        ) : (
          <Reveal key={offer.id} delay={(i % 3) * 60}>
            <OfferCard offer={offer} />
          </Reveal>
        )
      )}
    </div>
  );
}
