type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { type Formula } from "@/components/ui/PackComparisonCards";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Pack Premium / VIP | SYANOR VOYAGES",
  description:
    "Expérience de voyage haut de gamme : vols business class, hôtels 5★ sélectionnés, transferts privés, conciergerie voyage et assistance personnalisée 24h/24.",
  alternates: { canonical: "/agence/services/pack-premium-vip" },
};

const quoteHref = quoteUrl({ service: "Pack Premium VIP", comfort: "VIP" });

const PREMIUM_FORMULAS: Formula[] = [
  {
    name: "Premium",
    tagline: "Le luxe accessible, soigné dans les moindres détails.",
    badge: "Populaire",
    featured: true,
    hotelLevel: "4–5★ sélectionné",
    roomTypes: ["Chambre supérieure", "Chambre deluxe"],
    features: [
      { label: "Vol optimisé (classe affaires conseillée)", included: true },
      { label: "Hôtel 4–5★ sélectionné à la main", included: true },
      { label: "Transferts privés aéroport ↔ hôtel", included: true },
      { label: "Conciergerie voyage", included: true },
      { label: "Assistance personnalisée", included: true },
      { label: "Expériences exclusives", included: false },
    ],
    ctaLabel: "Demander Premium",
    ctaHref: quoteUrl({ service: "Pack Premium VIP", comfort: "Premium" }),
  },
  {
    name: "VIP",
    tagline: "L'expérience d'exception, sans aucun compromis.",
    hotelLevel: "5★ grand luxe",
    roomTypes: ["Suite", "Junior suite", "Chambre premium"],
    features: [
      { label: "Vol business class ou première", included: true },
      { label: "Hôtel 5★ grand luxe sélectionné", included: true },
      { label: "Transferts privés limousine ou SUV", included: true },
      { label: "Conciergerie voyage 24h/24", included: true },
      { label: "Assistance personnalisée dédiée", included: true },
      { label: "Expériences exclusives sur mesure", included: true },
    ],
    ctaLabel: "Demander VIP",
    ctaHref: quoteUrl({ service: "Pack Premium VIP", comfort: "VIP" }),
  },
];

const config: DeepServiceConfig = {
  heroImage: "/services/sur-mesure/pack-premium-vip.png",
  heroCategory: "Séjour sur mesure",
  eyebrow: "Pack Premium / VIP",
  title: "Voyages d'exception : hôtels 5★, business class et conciergerie dédiée.",
  subtitle:
    "Pour ceux qui ne veulent pas de compromis : vols premium, hébergements de grand luxe, transferts privés et un interlocuteur dédié du premier contact au retour.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/agence/services" },
    { label: "Pack Premium / VIP" },
  ],
  quoteHref,
  intro: {
    heading: "Chaque détail compte, aucun ne vous échappe.",
    paragraphs: [
      "Un voyage de luxe ne se résume pas à un hôtel 5 étoiles. C'est la cohérence de chaque moment — l'accueil à l'aéroport, la chambre qui surplombe la ville, le transfert silencieux, le restaurant réservé à votre nom et l'assistance disponible à toute heure.",
      "Notre équipe sélectionne les établissements, négocie les conditions et compose chaque séjour pour qu'il soit exactement ce que vous imaginez. Pas de standards génériques : votre voyage, votre façon.",
    ],
  },
  includedTitle: "L'expérience Premium / VIP SYANOR",
  included: [
    "Sélection personnalisée de l'hôtel (4–5★ ou 5★ grand luxe)",
    "Vols optimisés — business class ou première sur demande",
    "Transferts privés tout au long du séjour",
    "Conciergerie voyage : réservations, recommandations, accompagnement",
    "Assistance personnalisée disponible 24h/24",
    "Expériences exclusives sur mesure (gastronomie, culture, bien-être)",
  ],
  notIncluded: [
    "Dépenses personnelles et pourboires",
    "Activités non incluses dans le programme",
    "Assurance annulation (incluse sur demande dans le devis)",
  ],
  process: {
    title: "Votre expérience VIP en 5 étapes",
    steps: [
      { title: "Entretien découverte", text: "Vos envies, vos attentes, vos dates et votre destination." },
      { title: "Sélection sur mesure", text: "Hôtel, vol, transferts : nous composons votre programme." },
      { title: "Validation du dossier", text: "Vous validez chaque détail avant confirmation." },
      { title: "Préparation", text: "Dossier complet, contacts utiles, programme jour par jour." },
      { title: "Voyage d'exception", text: "Vous voyagez, nous restons disponibles à tout moment." },
    ],
  },
  benefits: {
    title: "Ce qui fait la différence avec SYANOR Premium",
    features: [
      { title: "Sélection rigoureuse", desc: "Uniquement des établissements testés et recommandés.", icon: "star" },
      { title: "Business class", desc: "Le confort aérien à la hauteur de votre voyage.", icon: "compass" },
      { title: "Transferts privés", desc: "Limousine, SUV haut de gamme — jamais de taxi collectif.", icon: "route" },
      { title: "Conciergerie 24h", desc: "Un interlocuteur disponible à toute heure du jour et de la nuit.", icon: "phone" },
      { title: "Expériences exclusives", desc: "Accès à des adresses et expériences hors circuit ordinaire.", icon: "shield" },
      { title: "100% personnalisé", desc: "Aucun itinéraire standard — chaque voyage est unique.", icon: "hand-heart" },
    ],
  },
  packComparison: {
    eyebrow: "Nos formules",
    title: "Premium ou VIP : choisissez votre niveau d'exception",
    subtitle: "Du luxe accessible à l'expérience d'exception absolue — comparez et demandez votre devis.",
    formulas: PREMIUM_FORMULAS,
  },
  activityConfigurator: {
    activity: "sejour",
    eyebrow: "Configurateur Premium",
    title: "Composez votre expérience Premium / VIP en 5 étapes",
    subtitle: "Destination, dates, niveau d'hôtel, classe de vol, options — préparez votre demande d'exception.",
  },
  related: getOffersByCategory(["Séjour sur mesure", "Voyage organisé"]),
  faq: [
    {
      question: "Quelle est la différence entre Premium et VIP ?",
      answer:
        "La formule Premium inclut hôtels 4–5★ sélectionnés, transferts privés et conciergerie. Le niveau VIP monte en gamme sur chaque poste : hôtel 5★ grand luxe, vol business class systématique, limousine et assistance 24h/24 avec interlocuteur dédié.",
    },
    {
      question: "Peut-on personnaliser des éléments du pack ?",
      answer:
        "Absolument. Les packs sont des bases de départ. Nous ajustons chaque élément selon vos préférences : type d'hébergement, compagnie aérienne favorite, activités souhaitées.",
    },
    {
      question: "Proposez-vous des voyages de noces dans cette gamme ?",
      answer:
        "Oui. Notre service Voyage de Noces est construit sur la même philosophie Premium / VIP, avec des attentions particulières pour les couples.",
    },
    {
      question: "Quels délais prévoir pour réserver un pack Premium / VIP ?",
      answer:
        "Les meilleurs établissements et vols business se réservent tôt. Nous recommandons de contacter notre équipe au minimum 6 à 8 semaines avant la date souhaitée.",
    },
  ],
  cta: {
    title: "Votre voyage d'exception commence ici.",
    body: "Partagez vos envies et votre destination : nous concevons une expérience qui vous ressemble, sans compromis.",
    ctaLabel: "Demander mon expérience VIP",
    ctaHref: quoteHref,
    secondary: { label: "Voyages de noces", href: "/agence/services/voyages-de-noces" },
  },
  stickyLabel: "Demander un devis Premium / VIP",
};

export default function PackPremiumVipPage() {
  return <DeepServicePage config={config} />;
}
