import { useEffect } from "react";
import { useLocation } from "wouter";
import { useCompare } from "@/context/CompareContext";
import Link from "@/components/Link";
import { quoteUrl, cn } from "@/lib/utils";
import type { TravelOffer } from "@/types";

function SpecRow({ label, values }: { label: string; values: (string | undefined)[] }) {
  const hasAny = values.some(Boolean);
  if (!hasAny) return null;
  return (
    <div className="flex gap-2 border-b border-syanor-gold/10 py-2 last:border-0">
      <span className="w-20 shrink-0 text-[0.62rem] font-bold uppercase tracking-wider text-syanor-ink/35 pt-0.5">
        {label}
      </span>
      {values.map((v, i) => (
        <span
          key={i}
          className={cn(
            "flex-1 text-[0.75rem] font-medium leading-snug",
            v ? "text-syanor-ink/80" : "text-syanor-ink/22 italic"
          )}
        >
          {v ?? "—"}
        </span>
      ))}
    </div>
  );
}

function MiniCard({ offer, onRemove }: { offer: TravelOffer; onRemove: () => void }) {
  return (
    <div className="relative flex-1 min-w-0 rounded-xl border border-syanor-gold/22 bg-syanor-ivory px-3 py-2.5">
      <button
        onClick={onRemove}
        aria-label="Retirer de la comparaison"
        className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-syanor-emerald text-syanor-champagne shadow-sm text-[0.65rem] font-bold leading-none hover:bg-red-600 transition-colors"
      >
        ×
      </button>
      <p className="text-[0.58rem] font-bold uppercase tracking-wider text-syanor-gold truncate">
        {offer.category}
      </p>
      <p className="mt-0.5 text-[0.72rem] font-semibold text-syanor-ink leading-tight line-clamp-2">
        {offer.title}
      </p>
    </div>
  );
}

function EmptySlot() {
  return (
    <div className="flex-1 rounded-xl border-2 border-dashed border-syanor-gold/22 bg-transparent px-3 py-2.5 flex items-center justify-center">
      <p className="text-[0.68rem] text-syanor-ink/30 text-center">
        Sélectionnez<br />une offre
      </p>
    </div>
  );
}

function buildCompareQuoteUrl(offers: TravelOffer[]): string {
  const a = offers[0];
  if (!a) return "/agence/contact#quote";
  return quoteUrl({
    service: a.category,
    offer: offers.map((o) => o.title).join(" vs "),
    ...(a.returnDate
      ? { programmed: true, departureDate: a.departureDate, returnDate: a.returnDate }
      : {}),
  });
}

export default function CompareDrawer() {
  const compare = useCompare();
  const [location] = useLocation();

  useEffect(() => {
    if (!compare) return;
    if (location === "/" || location === "") {
      compare.clear();
    }
  }, [location]);

  if (!compare) return null;

  const { selected, toggle, clear } = compare;
  const visible = selected.length > 0;

  return (
    <div
      aria-live="polite"
      role="region"
      aria-label="Comparaison d'offres"
      className={cn(
        "fixed bottom-0 inset-x-0 z-[60] transition-transform duration-300 ease-out will-change-transform",
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      )}
    >
      <div
        className="relative mx-auto max-w-2xl overflow-hidden rounded-t-2xl shadow-[0_-8px_40px_rgba(6,63,51,0.22)]"
        style={{
          background: "rgba(253,250,244,0.98)",
          border: "1px solid rgba(201,162,74,0.30)",
          borderBottom: "none",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {visible && selected[0] && (
          <>
            {/* Header bar */}
            <div
              className="flex items-center justify-between gap-3 px-4 pt-3 pb-2"
              style={{ borderBottom: "1px solid rgba(201,162,74,0.14)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] font-bold text-syanor-champagne"
                  style={{ background: "linear-gradient(135deg, #063f33 0%, #0d6650 100%)" }}
                >
                  {selected.length}
                </span>
                <p className="text-[0.72rem] font-bold text-syanor-ink/70">
                  {selected.length < 2
                    ? "Ajoutez une 2e offre pour comparer"
                    : "Comparaison côte à côte"}
                </p>
              </div>
              <button
                onClick={clear}
                aria-label="Fermer la comparaison"
                className="text-[0.65rem] font-semibold text-syanor-ink/35 hover:text-red-500 transition-colors px-2 py-1"
              >
                Fermer ×
              </button>
            </div>

            {/* Offer mini-cards */}
            <div className="flex gap-2.5 px-4 pt-3">
              <MiniCard offer={selected[0]} onRemove={() => toggle(selected[0]!)} />
              {selected[1]
                ? <MiniCard offer={selected[1]} onRemove={() => toggle(selected[1])} />
                : <EmptySlot />}
            </div>
          </>
        )}

        {/* Side-by-side specs — only when 2 selected */}
        {selected.length === 2 && (
          <div className="mt-3 px-4">
            <div
              className="rounded-xl px-3 py-1"
              style={{
                background: "rgba(6,63,51,0.04)",
                border: "1px solid rgba(201,162,74,0.12)",
              }}
            >
              <SpecRow label="Départ"  values={selected.map((o) => o.departureDate ?? o.month)} />
              <SpecRow label="Durée"   values={selected.map((o) => o.duration)} />
              <SpecRow label="Confort" values={selected.map((o) => o.comfortLevel)} />
              <SpecRow label="Prix"    values={selected.map((o) => o.priceFrom ?? "Sur demande")} />
              <SpecRow label="Dispo."  values={selected.map((o) => o.availabilityStatus)} />
            </div>
          </div>
        )}

        {/* CTA */}
        {visible && selected[0] && (
          <div className="px-4 pb-4 pt-3">
            {selected.length === 2 ? (
              <Link
                href={buildCompareQuoteUrl(selected)}
                className="block w-full rounded-full bg-syanor-emerald py-3 text-center text-[0.82rem] font-bold text-syanor-champagne shadow-sm transition-all duration-200 hover:bg-syanor-gold hover:text-syanor-royal hover:shadow-[0_4px_16px_rgba(201,162,74,0.32)]"
              >
                Demander un devis pour ces 2 offres →
              </Link>
            ) : (
              <p className="py-2 text-center text-[0.68rem] text-syanor-ink/35">
                Sélectionnez une deuxième offre depuis la liste pour comparer
              </p>
            )}
          </div>
        )}

        {/* iOS safe area */}
        <div className="h-[env(safe-area-inset-bottom,0px)]" />
      </div>
    </div>
  );
}
