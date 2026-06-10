
import { useMemo, useState } from "react";
import OfferFilters, {
  type OfferFilterState,
  initialFilterState,
} from "@/components/ui/OfferFilters";
import OffersGrid from "@/components/ui/OffersGrid";
import { offers } from "@/data/offers";

const ROOM_KEY_MAP: Record<string, keyof NonNullable<(typeof offers)[0]["roomPrices"]>> = {
  Quadruple: "quad",
  Triple: "triple",
  Double: "double",
  Individuelle: "individual",
};

function hasFormation(services: string[]): boolean {
  const lower = services.join(" ").toLowerCase();
  return lower.includes("formation") || lower.includes("spirituel");
}

function hasZiyarat(services: string[]): boolean {
  return services.join(" ").toLowerCase().includes("ziyarat");
}

export default function OffersExplorer() {
  const [filters, setFilters] = useState<OfferFilterState>(initialFilterState);

  const cityOptions = useMemo(() => {
    const set = new Set<string>();
    offers.forEach((o) => { if (o.departureCity) set.add(o.departureCity); });
    return Array.from(set).sort();
  }, []);

  const monthOptions = useMemo(() => {
    const set = new Set<string>();
    offers.forEach((o) => { if (o.month) set.add(o.month); });
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    return offers.filter((offer) => {
      if (filters.type !== "Tous" && offer.category !== filters.type) return false;
      if (filters.year !== "Toutes" && offer.year !== filters.year) return false;
      if (filters.month !== "Tous" && offer.month !== filters.month) return false;
      if (filters.transport !== "Tous" && offer.transportType !== filters.transport) return false;
      if (filters.comfort !== "Tous" && offer.comfortLevel !== filters.comfort) return false;
      if (filters.city !== "Toutes" && offer.departureCity !== filters.city) return false;
      if (filters.availability !== "Toutes" && offer.availabilityStatus !== filters.availability) return false;

      // Room type filter
      if (filters.roomType !== "Tous") {
        const key = ROOM_KEY_MAP[filters.roomType];
        if (!key || !offer.roomPrices || !offer.roomPrices[key]) return false;
      }

      // Formation filter
      if (filters.formation === "Avec formation" && !hasFormation(offer.includedServices)) return false;
      if (filters.formation === "Sans formation" && hasFormation(offer.includedServices)) return false;

      // Ziyarat filter
      if (filters.ziyarat === "Avec Ziyarat" && !hasZiyarat(offer.includedServices)) return false;
      if (filters.ziyarat === "Sans Ziyarat" && hasZiyarat(offer.includedServices)) return false;

      return true;
    });
  }, [filters]);

  return (
    <>
      <div className="mb-8">
        <OfferFilters
          value={filters}
          onChange={setFilters}
          cityOptions={cityOptions}
          monthOptions={monthOptions}
        />
      </div>
      <p className="mb-6 text-sm text-syanor-ink/55">
        <span className="font-semibold text-syanor-emerald">{filtered.length}</span>{" "}
        offre{filtered.length > 1 ? "s" : ""} affichée{filtered.length > 1 ? "s" : ""}
      </p>
      {filtered.length > 0 ? (
        <OffersGrid offers={filtered} />
      ) : (
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-syanor-gold/15 bg-syanor-pearl/60 px-6 py-12 text-center">
          <p className="font-playfair text-xl text-syanor-ink/60">Aucune offre pour ces critères</p>
          <p className="text-sm text-syanor-ink/40">Essayez des filtres différents ou contactez-nous pour une offre sur mesure.</p>
        </div>
      )}
    </>
  );
}
