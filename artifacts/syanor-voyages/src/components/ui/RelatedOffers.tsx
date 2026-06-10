import SectionHeader from "@/components/ui/SectionHeader";
import OffersGrid from "@/components/ui/OffersGrid";
import type { TravelOffer } from "@/types";

export default function RelatedOffers({ offers }: { offers: TravelOffer[] }) {
  if (offers.length === 0) return null;
  return (
    <section className="section-pad bg-syanor-champagne/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader eyebrow="À découvrir aussi" title="Offres associées" />
        <div className="mt-12">
          <OffersGrid offers={offers} />
        </div>
      </div>
    </section>
  );
}
