import Link from "@/components/Link";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────
   TYPES (unchanged — same interface for all callers)
───────────────────────────────────────────────────────────────── */

export interface FormulaFeature {
  label: string;
  included: boolean;
}

export interface Formula {
  name: string;
  tagline: string;
  badge?: string;
  featured?: boolean;
  hotelLevel: string;
  roomTypes: string[];
  features: FormulaFeature[];
  ctaLabel: string;
  ctaHref: string;
}

interface PackComparisonCardsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  formulas: Formula[];
  className?: string;
}

/* ─────────────────────────────────────────────────────────────────
   DATA (unchanged)
───────────────────────────────────────────────────────────────── */

const OMRA_FORMULAS: Formula[] = [
  {
    name: "Essentiel",
    tagline: "L'Omra bien encadrée, accessible à tous.",
    hotelLevel: "3–4★ à 800m des lieux saints",
    roomTypes: ["Quadruple", "Triple"],
    features: [
      { label: "Vol international A/R", included: true },
      { label: "Hébergement Médine & Makkah", included: true },
      { label: "Transferts groupés", included: true },
      { label: "Accompagnement spirituel", included: true },
      { label: "Ziyarat accompagnée", included: true },
      { label: "Assistance visa", included: true },
      { label: "Formation pré-départ", included: false },
      { label: "Transferts privés", included: false },
    ],
    ctaLabel: "Demander Essentiel",
    ctaHref: "/contact?service=Omra&comfort=Standard#quote",
  },
  {
    name: "Premium",
    tagline: "Le confort renforcé pour un voyage serein.",
    badge: "Le plus demandé",
    featured: true,
    hotelLevel: "4–5★ proche Haram (< 300m)",
    roomTypes: ["Triple", "Double"],
    features: [
      { label: "Vol international A/R", included: true },
      { label: "Hébergement Médine & Makkah", included: true },
      { label: "Transferts groupés", included: true },
      { label: "Accompagnement spirituel", included: true },
      { label: "Ziyarat accompagnée", included: true },
      { label: "Assistance visa", included: true },
      { label: "Formation pré-départ", included: true },
      { label: "Transferts privés", included: false },
    ],
    ctaLabel: "Demander Premium",
    ctaHref: "/contact?service=Omra&comfort=Premium#quote",
  },
  {
    name: "VIP",
    tagline: "L'expérience d'exception aux Lieux Saints.",
    hotelLevel: "5★ vue Ka'ba ou proche Haram",
    roomTypes: ["Double", "Individuelle"],
    features: [
      { label: "Vol international A/R", included: true },
      { label: "Hébergement Médine & Makkah", included: true },
      { label: "Transferts privés", included: true },
      { label: "Accompagnement spirituel", included: true },
      { label: "Ziyarat privée", included: true },
      { label: "Assistance visa", included: true },
      { label: "Formation pré-départ", included: true },
      { label: "Conciergerie voyage", included: true },
    ],
    ctaLabel: "Demander VIP",
    ctaHref: "/contact?service=Omra+Plus&comfort=VIP#quote",
  },
];

const AVION_FORMULAS: Formula[] = [
  {
    name: "Simple",
    tagline: "Billet réservé rapidement, sans frais.",
    hotelLevel: "—",
    roomTypes: [],
    features: [
      { label: "Recherche d'itinéraire", included: true },
      { label: "Réservation billet", included: true },
      { label: "Conseils compagnies", included: true },
      { label: "Dossier de voyage", included: false },
      { label: "Modification incluse", included: false },
      { label: "Assistance dédiée", included: false },
    ],
    ctaLabel: "Demander un billet",
    ctaHref: "/contact?service=Billet+avion&transport=Avion#quote",
  },
  {
    name: "Flexible",
    tagline: "Billet modifiable avec accompagnement.",
    badge: "Recommandé",
    featured: true,
    hotelLevel: "—",
    roomTypes: [],
    features: [
      { label: "Recherche d'itinéraire", included: true },
      { label: "Réservation billet", included: true },
      { label: "Conseils compagnies", included: true },
      { label: "Dossier de voyage", included: true },
      { label: "Modification incluse", included: true },
      { label: "Assistance dédiée", included: false },
    ],
    ctaLabel: "Demander Flexible",
    ctaHref: "/contact?service=Billet+avion&transport=Avion&comfort=Premium#quote",
  },
  {
    name: "Assistance Premium",
    tagline: "Prise en charge complète avec interlocuteur dédié.",
    hotelLevel: "—",
    roomTypes: [],
    features: [
      { label: "Recherche d'itinéraire", included: true },
      { label: "Réservation billet", included: true },
      { label: "Conseils compagnies", included: true },
      { label: "Dossier de voyage", included: true },
      { label: "Modification incluse", included: true },
      { label: "Assistance dédiée", included: true },
    ],
    ctaLabel: "Demander Assistance Premium",
    ctaHref: "/contact?service=Billet+avion&transport=Avion&comfort=VIP#quote",
  },
];

const BATEAU_FORMULAS: Formula[] = [
  {
    name: "Standard",
    tagline: "Traversée en fauteuil, essentiel et rapide.",
    hotelLevel: "Pont / fauteuil",
    roomTypes: ["Fauteuil inclinable"],
    features: [
      { label: "Billet traversée", included: true },
      { label: "Conseils port & horaires", included: true },
      { label: "Documents requis", included: true },
      { label: "Option cabine", included: false },
      { label: "Embarquement véhicule", included: false },
      { label: "Assistance dédiée", included: false },
    ],
    ctaLabel: "Demander traversée",
    ctaHref: "/contact?service=Billet+bateau&transport=Bateau#quote",
  },
  {
    name: "Avec Cabine",
    tagline: "Traversée confortable avec cabine privée.",
    badge: "Confort +",
    featured: true,
    hotelLevel: "Cabine 2–4 pers.",
    roomTypes: ["Cabine 2 pers.", "Cabine 4 pers."],
    features: [
      { label: "Billet traversée", included: true },
      { label: "Conseils port & horaires", included: true },
      { label: "Documents requis", included: true },
      { label: "Option cabine", included: true },
      { label: "Embarquement véhicule", included: false },
      { label: "Assistance dédiée", included: false },
    ],
    ctaLabel: "Demander avec cabine",
    ctaHref: "/contact?service=Billet+bateau&transport=Bateau&comfort=Premium#quote",
  },
  {
    name: "Véhicule + Cabine",
    tagline: "Traversée complète avec voiture et cabine.",
    hotelLevel: "Cabine & parking véhicule",
    roomTypes: ["Cabine 2 pers.", "Suite"],
    features: [
      { label: "Billet traversée", included: true },
      { label: "Conseils port & horaires", included: true },
      { label: "Documents requis", included: true },
      { label: "Option cabine", included: true },
      { label: "Embarquement véhicule", included: true },
      { label: "Assistance dédiée", included: true },
    ],
    ctaLabel: "Demander Véhicule + Cabine",
    ctaHref: "/contact?service=Billet+bateau&transport=Bateau&comfort=VIP#quote",
  },
];

const SEJOUR_FORMULAS: Formula[] = [
  {
    name: "Découverte",
    tagline: "Un séjour bien organisé au meilleur prix.",
    hotelLevel: "3–4★",
    roomTypes: ["Double", "Triple"],
    features: [
      { label: "Transport au choix", included: true },
      { label: "Hébergement sélectionné", included: true },
      { label: "Transferts aéroport", included: true },
      { label: "Programme culturel", included: false },
      { label: "Guide accompagnateur", included: false },
      { label: "Options VIP", included: false },
    ],
    ctaLabel: "Demander Découverte",
    ctaHref: "/contact?service=S%C3%A9jour+sur+mesure&comfort=Standard#quote",
  },
  {
    name: "Premium",
    tagline: "Confort renforcé avec programme enrichi.",
    badge: "Le plus populaire",
    featured: true,
    hotelLevel: "4–5★",
    roomTypes: ["Double", "Individuelle"],
    features: [
      { label: "Transport au choix", included: true },
      { label: "Hébergement sélectionné", included: true },
      { label: "Transferts aéroport", included: true },
      { label: "Programme culturel", included: true },
      { label: "Guide accompagnateur", included: true },
      { label: "Options VIP", included: false },
    ],
    ctaLabel: "Demander Premium",
    ctaHref: "/contact?service=S%C3%A9jour+sur+mesure&comfort=Premium#quote",
  },
  {
    name: "Signature VIP",
    tagline: "Le voyage d'exception avec conciergerie.",
    hotelLevel: "5★ sélectionné",
    roomTypes: ["Individuelle", "Suite"],
    features: [
      { label: "Transport au choix", included: true },
      { label: "Hébergement sélectionné", included: true },
      { label: "Transferts privés", included: true },
      { label: "Programme culturel", included: true },
      { label: "Guide accompagnateur", included: true },
      { label: "Conciergerie voyage", included: true },
    ],
    ctaLabel: "Demander Signature VIP",
    ctaHref: "/contact?service=S%C3%A9jour+sur+mesure&comfort=VIP#quote",
  },
];

export const PACK_PRESETS = {
  omra:   { eyebrow: "Nos formules", title: "Choisissez votre formule Omra",           formulas: OMRA_FORMULAS },
  avion:  { eyebrow: "Nos formules", title: "Choisissez votre formule billet avion",   formulas: AVION_FORMULAS },
  bateau: { eyebrow: "Nos formules", title: "Choisissez votre formule traversée",      formulas: BATEAU_FORMULAS },
  sejour: { eyebrow: "Nos formules", title: "Choisissez votre formule séjour",         formulas: SEJOUR_FORMULAS },
} as const;

/* ─────────────────────────────────────────────────────────────────
   CARD VISUAL CONFIG
───────────────────────────────────────────────────────────────── */

type CardTheme = {
  card: string;
  innerShadow: string;
  headerFrom: string;
  headerTo: string;
  headerGlow?: string;
  accentLine: string;
  symbolColor: string;
  levelPill: string;
  nameColor: string;
  taglineColor: string;
  hotelPanel: string;
  hotelLabel: string;
  hotelText: string;
  roomPill: string;
  featureOn: string;
  featureOff: string;
  iconOn: string;
  iconOff: string;
  divider: string;
  priceMeta: string;
  priceValue: string;
  cta: string;
};

const THEME_DEFAULT: CardTheme = {
  card: "bg-gradient-to-b from-[#fdfaf3] to-white border border-syanor-gold/20 shadow-card",
  innerShadow: "shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.03)]",
  headerFrom: "#f5eed8",
  headerTo: "#fdf8f0",
  headerGlow: undefined,
  accentLine: "from-transparent via-syanor-gold/25 to-transparent",
  symbolColor: "text-syanor-emerald/50",
  levelPill: "border border-syanor-gold/20 bg-syanor-gold/6 text-syanor-ink/40",
  nameColor: "text-syanor-ink",
  taglineColor: "text-syanor-ink/50",
  hotelPanel: "bg-[#f5eed8]/55 border border-syanor-gold/18",
  hotelLabel: "text-syanor-gold/70",
  hotelText: "text-syanor-ink/70",
  roomPill: "bg-syanor-emerald/8 text-syanor-emerald/70 border border-syanor-emerald/12",
  featureOn: "text-syanor-ink/80",
  featureOff: "text-syanor-ink/28 line-through decoration-syanor-ink/20",
  iconOn: "bg-syanor-emerald/10 text-syanor-emerald ring-1 ring-syanor-emerald/15",
  iconOff: "bg-syanor-ink/5 text-syanor-ink/20",
  divider: "border-syanor-gold/12",
  priceMeta: "text-syanor-ink/38",
  priceValue: "text-syanor-ink/65",
  cta: "bg-syanor-emerald text-syanor-champagne hover:bg-syanor-royal hover:shadow-[0_8px_24px_rgba(6,63,51,0.35)]",
};

const THEME_FEATURED: CardTheme = {
  card: "bg-gradient-to-b from-[#063f33] via-[#052f26] to-[#022b24] border-2 border-syanor-gold/60 shadow-[0_8px_40px_rgba(6,63,51,0.45),0_0_0_1px_rgba(201,162,74,0.12)]",
  innerShadow: "shadow-[inset_0_1px_0_rgba(201,162,74,0.18),inset_0_-1px_0_rgba(0,0,0,0.2)]",
  headerFrom: "#0a5244",
  headerTo: "#063f33",
  headerGlow: "radial-gradient(ellipse at 65% 0%, rgba(201,162,74,0.32) 0%, transparent 65%)",
  accentLine: "from-transparent via-syanor-gold/60 to-transparent",
  symbolColor: "text-syanor-gold/65",
  levelPill: "border border-syanor-gold/40 bg-syanor-gold/15 text-syanor-gold",
  nameColor: "text-syanor-ivory",
  taglineColor: "text-syanor-champagne/55",
  hotelPanel: "bg-syanor-gold/10 border border-syanor-gold/30",
  hotelLabel: "text-syanor-gold/80",
  hotelText: "text-syanor-ivory/75",
  roomPill: "bg-syanor-gold/12 text-syanor-gold border border-syanor-gold/25",
  featureOn: "text-syanor-ivory/90",
  featureOff: "text-syanor-ivory/28 line-through decoration-syanor-ivory/20",
  iconOn: "bg-syanor-gold/18 text-syanor-gold ring-1 ring-syanor-gold/25",
  iconOff: "bg-white/6 text-white/20",
  divider: "border-syanor-gold/20",
  priceMeta: "text-syanor-gold/55",
  priceValue: "text-syanor-gold",
  cta: "bg-syanor-gold text-syanor-royal hover:bg-[#d4ae56] hover:shadow-[0_8px_24px_rgba(201,162,74,0.45)] font-bold",
};

const THEME_VIP: CardTheme = {
  card: "bg-gradient-to-b from-[#0d1a14] via-[#091410] to-[#060e09] border border-syanor-gold/35 shadow-[0_4px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,162,74,0.08)]",
  innerShadow: "shadow-[inset_0_1px_0_rgba(201,162,74,0.12),inset_0_-1px_0_rgba(0,0,0,0.25)]",
  headerFrom: "#1a3020",
  headerTo: "#0d1a14",
  headerGlow: "radial-gradient(ellipse at 35% 0%, rgba(201,162,74,0.22) 0%, transparent 60%)",
  accentLine: "from-transparent via-syanor-gold/35 to-transparent",
  symbolColor: "text-syanor-gold/45",
  levelPill: "border border-syanor-gold/30 bg-syanor-gold/8 text-syanor-gold/65",
  nameColor: "text-syanor-champagne",
  taglineColor: "text-syanor-champagne/45",
  hotelPanel: "bg-syanor-gold/8 border border-syanor-gold/22",
  hotelLabel: "text-syanor-gold/65",
  hotelText: "text-syanor-champagne/65",
  roomPill: "bg-syanor-gold/10 text-syanor-gold/65 border border-syanor-gold/20",
  featureOn: "text-syanor-champagne/85",
  featureOff: "text-syanor-champagne/22 line-through decoration-syanor-champagne/15",
  iconOn: "bg-syanor-gold/14 text-syanor-gold/65 ring-1 ring-syanor-gold/20",
  iconOff: "bg-white/4 text-white/15",
  divider: "border-syanor-gold/15",
  priceMeta: "text-syanor-gold/45",
  priceValue: "text-syanor-gold/75",
  cta: "border border-syanor-gold/45 bg-transparent text-syanor-gold hover:bg-syanor-gold/12 hover:border-syanor-gold/70",
};

function getTheme(formula: Formula, index: number): CardTheme {
  if (formula.featured) return THEME_FEATURED;
  if (index === 2) return THEME_VIP;
  return THEME_DEFAULT;
}

/* ─────────────────────────────────────────────────────────────────
   ICONS
───────────────────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
      <path d="M2.5 7l3 3 6-6" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3 w-3" aria-hidden="true">
      <path d="M3.5 7h7" />
    </svg>
  );
}

/* Crescent + star — luxury sacred travel symbol */
function CrescentSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M24 8a14 14 0 1 0 0 24 11 11 0 0 1 0-24z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M30 11l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

/* Diamond / VIP ornament */
function DiamondSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M20 6l8 8-8 20-8-20z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M12 14h16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/* Compass — general / essentiel */
function CompassSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 9v3M20 28v3M9 20h3M28 20h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M16 16l3 8 1-3 3-1-8-3z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  );
}

function getSymbol(formula: Formula, index: number) {
  if (formula.featured) return CrescentSymbol;
  if (index === 2) return DiamondSymbol;
  return CompassSymbol;
}

const LEVEL_LABELS = ["Formule I", "Formule II", "Formule III"];

/* ─────────────────────────────────────────────────────────────────
   SINGLE CARD
───────────────────────────────────────────────────────────────── */

function FormulaCard({ formula, index, totalCards }: { formula: Formula; index: number; totalCards: number }) {
  const t = getTheme(formula, index);
  const Symbol = getSymbol(formula, index);
  const isFeatured = formula.featured;
  const isVip = !isFeatured && index === totalCards - 1;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500",
        t.card,
        t.innerShadow,
        /* Desktop elevation for featured */
        isFeatured ? "md:scale-[1.04] md:-my-3 md:z-10" : "hover:-translate-y-1.5",
      )}
    >
      {/* Top gold accent line */}
      <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r", t.accentLine)} aria-hidden="true" />

      {/* ── HEADER STRIP ── */}
      <div
        className="relative flex h-[90px] shrink-0 items-end justify-between overflow-hidden px-6 pb-4"
        style={{
          background: `linear-gradient(160deg, ${t.headerFrom} 0%, ${t.headerTo} 100%)`,
        }}
        aria-hidden="true"
      >
        {/* Optional radial glow on featured/vip */}
        {t.headerGlow && (
          <div className="pointer-events-none absolute inset-0" style={{ background: t.headerGlow }} />
        )}

        {/* Subtle dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(201,162,74,0.8) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Symbol */}
        <Symbol className={cn("h-10 w-10 shrink-0", t.symbolColor)} />

        {/* Level pill */}
        <span className={cn("rounded-full border px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.15em]", t.levelPill)}>
          {LEVEL_LABELS[index] ?? `Formule ${index + 1}`}
        </span>
      </div>

      {/* Badge floats above header/body boundary */}
      {formula.badge && (
        <div className="absolute right-4 top-[70px] z-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-syanor-gold px-3.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-syanor-royal shadow-[0_4px_14px_rgba(201,162,74,0.50)]">
            <svg viewBox="0 0 12 12" fill="currentColor" className="h-2.5 w-2.5" aria-hidden="true">
              <path d="M6 0l1.35 3.9H11l-3 2.18 1.14 3.9L6 8l-3.14 1.98L4 5.08 1 2.9h3.65z" />
            </svg>
            {formula.badge}
          </span>
        </div>
      )}

      {/* ── BODY ── */}
      <div className="flex flex-1 flex-col px-6 pb-7 pt-5">

        {/* Formula name + tagline */}
        <div className="mb-5">
          <h3 className={cn("font-playfair text-[1.6rem] font-bold leading-none tracking-tight", t.nameColor)}>
            {formula.name}
          </h3>
          <p className={cn("mt-2 text-[0.82rem] leading-relaxed", t.taglineColor)}>
            {formula.tagline}
          </p>
        </div>

        {/* Hotel / comfort module */}
        {formula.hotelLevel && formula.hotelLevel !== "—" && (
          <div className={cn("mb-5 rounded-2xl px-4 py-3.5", t.hotelPanel)}>
            <p className={cn("mb-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em]", t.hotelLabel)}>
              ★ Hébergement
            </p>
            <p className={cn("text-[0.83rem] font-semibold leading-snug", t.hotelText)}>
              {formula.hotelLevel}
            </p>
            {formula.roomTypes.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {formula.roomTypes.map((r) => (
                  <span key={r} className={cn("rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium", t.roomPill)}>
                    {r}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Features list */}
        <ul className="mb-6 flex-1 space-y-3">
          {formula.features.map((f) => (
            <li key={f.label} className="flex items-center gap-3">
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform duration-200",
                  f.included ? t.iconOn : t.iconOff
                )}
              >
                {f.included ? <CheckIcon /> : <MinusIcon />}
              </span>
              <span className={cn("text-[0.82rem] leading-tight", f.included ? t.featureOn : t.featureOff)}>
                {f.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className={cn("mb-5 border-t", t.divider)} />

        {/* Price zone */}
        <div className="mb-5 text-center">
          <p className={cn("mb-0.5 text-[0.6rem] font-bold uppercase tracking-[0.16em]", t.priceMeta)}>
            Tarif
          </p>
          <p className={cn("font-playfair text-lg font-semibold", t.priceValue)}>
            Sur demande
          </p>
        </div>

        {/* CTA button */}
        <Link
          href={formula.ctaHref}
          className={cn(
            "block w-full rounded-full px-6 py-3.5 text-center text-sm font-semibold",
            "transition-all duration-300 hover:-translate-y-0.5",
            t.cta
          )}
        >
          {formula.ctaLabel}
        </Link>

        {/* VIP quiet note */}
        {isVip && (
          <p className="mt-3 text-center text-[0.62rem] text-syanor-gold/40 tracking-wide">
            Service réservé · sur invitation
          </p>
        )}
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────── */

export default function PackComparisonCards({
  eyebrow,
  title,
  subtitle,
  formulas,
  className,
}: PackComparisonCardsProps) {
  return (
    <div className={cn("mx-auto w-full", className)}>

      {/* Section heading */}
      {(eyebrow || title) && (
        <div className="mb-12 text-center">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          {title && (
            <h2 className="font-playfair text-3xl text-syanor-ink md:text-h2">{title}</h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-syanor-ink/60">{subtitle}</p>
          )}
        </div>
      )}

      {/* ── MOBILE: horizontal snap scroll ── */}
      <div className="md:hidden">
        {/* Scroll hint label */}
        <p className="mb-4 text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] text-syanor-ink/35">
          Faites glisser pour comparer
        </p>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 px-4 -mx-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {formulas.map((formula, i) => (
            <div
              key={formula.name}
              className={cn(
                "snap-center shrink-0 w-[82vw] max-w-[340px]",
                formula.featured ? "snap-always" : ""
              )}
            >
              <FormulaCard formula={formula} index={i} totalCards={formulas.length} />
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        <div className="mt-2 flex items-center justify-center gap-2">
          {formulas.map((f, i) => (
            <span
              key={f.name}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                f.featured ? "w-5 bg-syanor-gold" : "w-1.5 bg-syanor-ink/15"
              )}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP: 3-col grid with featured card elevated ── */}
      <div className="hidden md:grid md:grid-cols-3 md:items-center md:gap-6 md:px-0 lg:gap-8">
        {formulas.map((formula, i) => (
          <FormulaCard key={formula.name} formula={formula} index={i} totalCards={formulas.length} />
        ))}
      </div>

    </div>
  );
}
