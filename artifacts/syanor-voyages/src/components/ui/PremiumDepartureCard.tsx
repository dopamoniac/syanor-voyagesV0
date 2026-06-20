import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { quoteUrl } from "@/lib/utils";
import type { TravelOffer } from "@/types";
import { useEffect, useRef } from "react";
import { useCompare } from "@/context/CompareContext";

const CATEGORY_IMAGES: Record<string, string[]> = {
  "Hajj":     ["/services/religieux/hajj.png"],
  "Ramadan":  ["/services/religieux/omra-ramadan.png"],
  "Omra Plus":["/services/religieux/omra-plus.png"],
  "Omra":     [
    "/services/religieux/omra.png",
    "/services/religieux/omra-plus.png",
    "/services/religieux/hajj.png",
    "/services/religieux/omra-ramadan.png",
  ],
};

const CHIP_RULES: { match: string; label: string }[] = [
  { match: "Vol",            label: "Vols" },
  { match: "Hébergement",   label: "Hébergement" },
  { match: "Transfert",     label: "Transferts" },
  { match: "Ziyarat",       label: "Ziyarat" },
  { match: "Accompagnement",label: "Accompagnement" },
  { match: "visa",          label: "Visa" },
];

const STATUS_STYLE: Record<string, string> = {
  "À confirmer":    "bg-amber-500/85 text-white",
  "Disponible":     "bg-emerald-600/85 text-white",
  "Sur demande":    "bg-sky-600/85 text-white",
  "Places limitées":"bg-orange-500/85 text-white",
  "Complet":        "bg-gray-600/85 text-white",
};

interface Props {
  offer: TravelOffer;
  index?: number;
  delay?: number;
}

/* ── Parallax-lite hook (mobile only) ───────────────────────────── */
function useParallax(strength = 18) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef  = useRef<HTMLImageElement>(null);

  useEffect(() => {
    /* Only activate on touch-capable (mobile) viewports */
    if (typeof window === "undefined" || !window.matchMedia("(hover: none)").matches) return;

    const wrap = wrapRef.current;
    const img  = imgRef.current;
    if (!wrap || !img) return;

    function onScroll() {
      const rect   = wrap!.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vy     = window.innerHeight / 2;
      const ratio  = (center - vy) / vy;            /* -1 … +1 */
      const clamp  = Math.max(-1, Math.min(1, ratio));
      img!.style.transform = `scale(1.12) translateY(${clamp * strength}px)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return { wrapRef, imgRef };
}

/* ── Compare toggle button ──────────────────────────────────────── */
function CompareToggle({ offer }: { offer: TravelOffer }) {
  const compare = useCompare();
  if (!compare) return null;

  const { isSelected, canAdd, toggle } = compare;
  const selected = isSelected(offer.id);
  const disabled = !selected && !canAdd;

  return (
    <button
      type="button"
      onClick={(e) => { e.preventDefault(); if (!disabled) toggle(offer); }}
      disabled={disabled}
      aria-pressed={selected}
      aria-label={selected ? "Retirer de la comparaison" : "Comparer cette offre"}
      className={[
        "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold transition-all duration-200",
        selected
          ? "border-syanor-emerald/60 bg-syanor-emerald text-syanor-champagne"
          : disabled
          ? "cursor-not-allowed border-syanor-ink/10 text-syanor-ink/20"
          : "border-syanor-gold/25 text-syanor-ink/45 hover:border-syanor-emerald/50 hover:text-syanor-emerald",
      ].filter(Boolean).join(" ")}
    >
      <span
        className={[
          "flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border text-[0.5rem] font-bold",
          selected ? "border-syanor-champagne/60 bg-syanor-champagne/20" : "border-current",
        ].filter(Boolean).join(" ")}
        aria-hidden="true"
      >
        {selected ? "✓" : "+"}
      </span>
      {selected ? "Sélectionné" : "Comparer"}
    </button>
  );
}

export default function PremiumDepartureCard({ offer, index = 0, delay = 0 }: Props) {
  const pool = CATEGORY_IMAGES[offer.category] ?? CATEGORY_IMAGES["Omra"];
  const image = pool[index % pool.length];
  const statusCls = STATUS_STYLE[offer.availabilityStatus ?? ""] ?? "bg-gray-600/85 text-white";

  const chips = CHIP_RULES.filter((r) =>
    offer.includedServices.some((s) => s.toLowerCase().includes(r.match.toLowerCase()))
  );

  const monthBadge = (() => {
    const d = offer.departureDate ?? offer.month ?? "";
    const m = d.match(/([A-Za-z\u00C0-\u00FF]{3,})/);
    return m ? m[1] : d.slice(0, 3);
  })();

  const cta = quoteUrl({
    service: offer.category,
    offer: offer.title,
    city: offer.departureCity,
    ...(offer.returnDate
      ? { programmed: true, departureDate: offer.departureDate, returnDate: offer.returnDate }
      : {}),
  });

  const { wrapRef, imgRef } = useParallax(18);

  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-syanor-gold/20 bg-syanor-pearl shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-syanor-gold/45 hover:shadow-card-hover">

        {/* ── IMAGE ── */}
        <div ref={wrapRef} className="relative h-48 shrink-0 overflow-hidden">
          <img
            ref={imgRef}
            src={image}
            alt={`${offer.category} — ${offer.departureDate ?? offer.month}`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              transform: "scale(1.12) translateY(0px)",
              transition: "transform 0.1s linear",
              willChange: "transform",
            }}
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(2,15,10,0.90) 0%, rgba(2,15,10,0.42) 45%, rgba(2,15,10,0.08) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Top badges */}
          <div className="absolute inset-x-3.5 top-3 flex items-start justify-between gap-2">
            <span className="rounded-full border border-syanor-gold/55 bg-syanor-royal/75 px-3 py-1 text-[0.63rem] font-bold uppercase tracking-widest text-syanor-gold backdrop-blur-sm">
              {monthBadge}
            </span>
            {offer.availabilityStatus && (
              <span className={`rounded-full px-3 py-1 text-[0.63rem] font-semibold backdrop-blur-sm ${statusCls}`}>
                {offer.availabilityStatus}
              </span>
            )}
          </div>

          {/* Bottom of image — dates + duration */}
          <div className="absolute inset-x-3.5 bottom-3 flex items-end justify-between gap-2">
            <div>
              <p className="font-playfair text-base font-semibold leading-tight text-white drop-shadow">
                {offer.departureDate}
              </p>
              {offer.returnDate && (
                <p className="text-[0.7rem] text-white/65">↩ {offer.returnDate}</p>
              )}
            </div>
            {offer.duration && (
              <span className="rounded-full bg-white/12 px-2.5 py-1 text-[0.63rem] font-medium text-white/90 backdrop-blur-sm">
                {offer.duration}
              </span>
            )}
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="flex flex-1 flex-col p-5">

          {/* Category + title */}
          <p className="text-[0.63rem] font-bold uppercase tracking-[0.18em] text-syanor-gold">
            {offer.category}
          </p>
          <h3 className="mt-1 font-playfair text-base font-semibold leading-snug text-syanor-ink">
            {offer.title}
          </h3>

          {/* Route */}
          {(offer.outboundRoute || offer.inboundRoute) && (
            <div className="mt-3 space-y-1.5 text-xs text-syanor-ink/60">
              {offer.outboundRoute && (
                <div className="flex items-center gap-1.5">
                  <Icon name="airplane" className="h-3 w-3 shrink-0 text-syanor-gold/70" aria-hidden="true" />
                  <span>{offer.outboundRoute}</span>
                </div>
              )}
              {offer.inboundRoute && (
                <div className="flex items-center gap-1.5">
                  <Icon name="route" className="h-3 w-3 shrink-0 text-syanor-gold/70" aria-hidden="true" />
                  <span>{offer.inboundRoute}</span>
                </div>
              )}
            </div>
          )}

          {/* City + comfort */}
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-syanor-ink/50">
            {offer.departureCity && (
              <span className="flex items-center gap-1">
                <Icon name="map" className="h-3 w-3 text-syanor-gold/55" aria-hidden="true" />
                {offer.departureCity}
              </span>
            )}
            {offer.comfortLevel && (
              <span className="flex items-center gap-1">
                <Icon name="star" className="h-3 w-3 text-syanor-gold/55" aria-hidden="true" />
                {offer.comfortLevel}
              </span>
            )}
          </div>

          {/* Service chips */}
          {chips.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {chips.map((c) => (
                <span
                  key={c.label}
                  className="rounded-full border border-syanor-gold/18 bg-syanor-champagne/50 px-2.5 py-0.5 text-[0.6rem] font-medium text-syanor-emerald"
                >
                  {c.label}
                </span>
              ))}
            </div>
          )}

          {/* CTA block */}
          <div className="mt-auto pt-4">
            <div className="mb-2.5 flex items-center justify-between gap-2">
              <span className="text-xs text-syanor-ink/40">
                {offer.priceFrom ?? "Sur demande"}
              </span>
              {offer.slug && (
                <Link
                  href={`/offres/${offer.slug}`}
                  className="text-xs font-semibold text-syanor-emerald/65 transition-colors hover:text-syanor-emerald"
                >
                  Voir détails →
                </Link>
              )}
            </div>
            <div className="mb-2 flex justify-start">
              <CompareToggle offer={offer} />
            </div>
            <Link
              href={offer.slug ? `/offres/${offer.slug}` : cta}
              className="btn-primary block w-full text-center text-sm"
            >
              Choisir ce départ
            </Link>
          </div>

        </div>
      </article>
    </Reveal>
  );
}
