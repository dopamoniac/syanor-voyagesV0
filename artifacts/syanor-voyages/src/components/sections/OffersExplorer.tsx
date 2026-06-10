
import { useMemo, useState } from "react";
import OfferFilters, {
  type OfferFilterState,
  initialFilterState,
} from "@/components/ui/OfferFilters";
import OffersGrid from "@/components/ui/OffersGrid";
import { offers } from "@/data/offers";

export default function OffersExplorer() {
  const [filters, setFilters] = useState<OfferFilterState>(initialFilterState);

  const cityOptions = useMemo(() => {
    const set = new Set<string>();
    offers.forEach((o) => {
      if (o.departureCity) set.add(o.departureCity);
    });
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    return offers.filter((offer) => {
      if (filters.type !== "Tous" && offer.category !== filters.type) return false;
      if (filters.transport !== "Tous" && offer.transportType !== filters.transport)
        return false;
      if (filters.comfort !== "Tous" && offer.comfortLevel !== filters.comfort)
        return false;
      if (filters.city !== "Toutes" && offer.departureCity !== filters.city)
        return false;
      if (
        filters.availability !== "Toutes" &&
        offer.availabilityStatus !== filters.availability
      )
        return false;
      return true;
    });
  }, [filters]);

  return (
    <>
      <div className="mb-10">
        <OfferFilters value={filters} onChange={setFilters} cityOptions={cityOptions} />
      </div>
      <p className="mb-6 text-sm text-syanor-ink/60">
        {filtered.length} offre{filtered.length > 1 ? "s" : ""} affichée
        {filtered.length > 1 ? "s" : ""}
      </p>
      <OffersGrid offers={filtered} />
    </>
  );
}
