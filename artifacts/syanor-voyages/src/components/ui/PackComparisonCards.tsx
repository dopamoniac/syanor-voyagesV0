import Link from "@/components/Link";
import { cn } from "@/lib/utils";

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
      { label: "Assistance dédédicacée", included: false },
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
      { label: "Assistance dédédicacée", included: false },
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
      { label: "Assistance dédédicacée", included: true },
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
    tagline: "Traversée complète avec voiture et cabin.",
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
  omra: { eyebrow: "Nos formules", title: "Choisissez votre formule Omra", formulas: OMRA_FORMULAS },
  avion: { eyebrow: "Nos formules", title: "Choisissez votre formule billet avion", formulas: AVION_FORMULAS },
  bateau: { eyebrow: "Nos formules", title: "Choisissez votre formule traversée", formulas: BATEAU_FORMULAS },
  sejour: { eyebrow: "Nos formules", title: "Choisissez votre formule séjour", formulas: SEJOUR_FORMULAS },
} as const;

export default function PackComparisonCards({
  eyebrow,
  title,
  subtitle,
  formulas,
  className,
}: PackComparisonCardsProps) {
  return (
    <div className={cn("mx-auto w-full", className)}>
      {(eyebrow || title) && (
        <div className="mb-10 text-center">
          {eyebrow && (
            <p className="eyebrow mb-3">{eyebrow}</p>
          )}
          {title && (
            <h2 className="font-playfair text-3xl text-syanor-ink md:text-h2">{title}</h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-syanor-ink/65">{subtitle}</p>
          )}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {formulas.map((formula) => (
          <div
            key={formula.name}
            className={cn(
              "relative flex flex-col rounded-2xl p-6 transition-all duration-300",
              formula.featured
                ? "border-2 border-syanor-gold bg-syanor-royal shadow-gold"
                : "border border-syanor-gold/20 bg-syanor-pearl shadow-card hover:shadow-card-hover"
            )}
          >
            {formula.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-syanor-gold px-4 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-syanor-royal">
                  {formula.badge}
                </span>
              </div>
            )}

            <div className="mb-5">
              <h3
                className={cn(
                  "font-playfair text-2xl font-bold",
                  formula.featured ? "text-syanor-ivory" : "text-syanor-ink"
                )}
              >
                {formula.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-sm",
                  formula.featured ? "text-syanor-champagne/70" : "text-syanor-ink/60"
                )}
              >
                {formula.tagline}
              </p>
            </div>

            {formula.hotelLevel && formula.hotelLevel !== "—" && (
              <div
                className={cn(
                  "mb-5 rounded-xl px-4 py-3 text-sm",
                  formula.featured
                    ? "bg-syanor-gold/20 text-syanor-ivory"
                    : "bg-syanor-champagne/50 text-syanor-ink/70"
                )}
              >
                <span className="font-semibold">Hébergement : </span>
                {formula.hotelLevel}
                {formula.roomTypes.length > 0 && (
                  <p className="mt-1 text-xs opacity-75">
                    {formula.roomTypes.join(", ")}
                  </p>
                )}
              </div>
            )}

            <ul className="mb-6 flex-1 space-y-2.5">
              {formula.features.map((f) => (
                <li key={f.label} className="flex items-start gap-2.5 text-sm">
                  <span
                    className={cn(
                      "mt-0.5 shrink-0 text-sm",
                      f.included
                        ? formula.featured
                          ? "text-syanor-gold"
                          : "text-syanor-emerald"
                        : formula.featured
                        ? "text-syanor-ivory/30"
                        : "text-syanor-ink/25"
                    )}
                    aria-hidden="true"
                  >
                    {f.included ? "✓" : "—"}
                  </span>
                  <span
                    className={cn(
                      f.included
                        ? formula.featured
                          ? "text-syanor-ivory"
                          : "text-syanor-ink/80"
                        : formula.featured
                        ? "text-syanor-ivory/40 line-through"
                        : "text-syanor-ink/35 line-through"
                    )}
                  >
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className={cn("mb-4 text-center text-sm", formula.featured ? "text-syanor-gold/80" : "text-syanor-ink/50")}>
              Prix <span className="font-semibold">Sur demande</span>
            </div>

            <Link
              href={formula.ctaHref}
              className={cn(
                "w-full rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-all duration-300",
                formula.featured
                  ? "bg-syanor-gold text-syanor-royal hover:bg-syanor-champagne"
                  : "bg-syanor-emerald text-syanor-champagne hover:bg-syanor-gold hover:text-syanor-royal"
              )}
            >
              {formula.ctaLabel}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
