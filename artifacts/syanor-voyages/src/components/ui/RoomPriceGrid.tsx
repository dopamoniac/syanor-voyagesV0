import Link from "@/components/Link";
import { cn } from "@/lib/utils";
import type { RoomPrices } from "@/types";

interface RoomPriceGridProps {
  prices?: RoomPrices;
  ctaBaseHref: string;
  offerTitle?: string;
}

const ROOMS = [
  {
    key: "quad" as keyof RoomPrices,
    label: "Chambre Quadruple",
    sub: "4 voyageurs",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 7v13h18V7M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2M8 11v4m8-4v4" />
      </svg>
    ),
  },
  {
    key: "triple" as keyof RoomPrices,
    label: "Chambre Triple",
    sub: "3 voyageurs",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 7v13h18V7M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2M8 11v4m8-4v4" />
      </svg>
    ),
  },
  {
    key: "double" as keyof RoomPrices,
    label: "Chambre Double",
    sub: "2 voyageurs",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M3 8v11h18V8M3 8V6a2 2 0 012-2h14a2 2 0 012 2v2M9 12v4m6-4v4" />
      </svg>
    ),
  },
  {
    key: "individual" as keyof RoomPrices,
    label: "Chambre Individuelle",
    sub: "1 voyageur",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8v11h14V8M5 8V6a1 1 0 011-1h12a1 1 0 011 1v2M12 12v4" />
      </svg>
    ),
  },
];

export default function RoomPriceGrid({ prices, ctaBaseHref, offerTitle }: RoomPriceGridProps) {
  return (
    <div>
      <p className="eyebrow mb-4">Tarifs par chambre</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {ROOMS.map((room) => {
          const price = prices?.[room.key];
          // Strip any existing fragment from the base URL before appending roomType,
          // then re-add the #quote fragment so the param stays in the query string.
          const baseWithoutHash = ctaBaseHref.split("#")[0];
          const sep = baseWithoutHash.includes("?") ? "&" : "?";
          const ctaHref = `${baseWithoutHash}${sep}roomType=${encodeURIComponent(room.label)}#quote`;
          return (
            <div
              key={room.key}
              className="group flex flex-col items-center rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-5 text-center shadow-card transition-all duration-300 hover:border-syanor-gold hover:shadow-gold"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-syanor-emerald/10 text-syanor-emerald group-hover:bg-syanor-gold/15 group-hover:text-syanor-gold">
                {room.icon}
              </div>
              <h4 className="font-playfair text-sm font-bold text-syanor-ink">{room.label}</h4>
              <p className="mt-0.5 text-xs text-syanor-ink/50">{room.sub}</p>
              <div className="my-3 h-px w-8 bg-syanor-gold/30" />
              <p
                className={cn(
                  "text-sm font-semibold",
                  price && price !== "Sur demande"
                    ? "text-syanor-emerald"
                    : "text-syanor-ink/50"
                )}
              >
                {price ?? "Sur demande"}
              </p>
              <Link
                href={ctaHref}
                className="mt-4 w-full rounded-full border border-syanor-gold/30 px-3 py-1.5 text-xs font-medium text-syanor-emerald transition hover:border-syanor-gold hover:text-syanor-gold"
              >
                Choisir
              </Link>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-center text-xs text-syanor-ink/45">
        Les prix sont communiqués sur devis — ils dépendent des dates, de la disponibilité et du niveau de confort.
      </p>
    </div>
  );
}
