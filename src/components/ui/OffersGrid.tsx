import OfferCard from "@/components/ui/OfferCard";
import Reveal from "@/components/ui/Reveal";
import type { TravelOffer } from "@/types";

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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {offers.map((offer, i) => (
        <Reveal key={offer.id} delay={(i % 3) * 60}>
          <OfferCard offer={offer} />
        </Reveal>
      ))}
    </div>
  );
}
