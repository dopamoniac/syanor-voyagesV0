type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { type Formula } from "@/components/ui/PackComparisonCards";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Hôtel & Transferts | SYANOR VOYAGES",
  description:
    "Réservation d'hôtels sélectionnés et transferts privés pour tous vos voyages. De 3★ à 5★ grand luxe, avec chauffeur privé, ponctualité garantie.",
  alternates: { canonical: "/agence/services/hotel-transferts" },
};

const quoteHref = quoteUrl({ service: "Hôtel & Transferts" });

const HOTEL_FORMULAS: Formula[] = [
  {
    name: "Confort",
    tagline: "L'hôtel bien choisi, le transfert bien préparé.",
    hotelLevel: "3–4★ sélectionné",
    roomTypes: ["Chambre standard", "Chambre supérieure"],
    features: [
      { label: "Sélection hôtel selon vos critères", included: true },
      { label: "Réservation & confirmation hôtel", included: true },
      { label: "Transfert privé aéroport ↔ hôtel", included: true },
      { label: "Transferts inter-villes", included: false },
      { label: "Chauffeur privé journée", included: false },
      { label: "Conciergerie hôtelière", included: false },
    ],
    ctaLabel: "Demander Confort",
    ctaHref: quoteUrl({ service: "Hôtel & Transferts", comfort: "Standard" }),
  },
  {
    name: "Premium",
    tagline: "Des adresses d'exception et des transferts impeccables.",
    badge: "Recommandé",
    featured: true,
    hotelLevel: "4–5★ premium",
    roomTypes: ["Chambre deluxe", "Chambre vue mer / ville"],
    features: [
      { label: "Sélection hôtel selon vos critères", included: true },
      { label: "Réservation & confirmation hôtel", included: true },
      { label: "Transfert privé aéroport ↔ hôtel", included: true },
      { label: "Transferts inter-villes", included: true },
      { label: "Chauffeur privé journée", included: false },
      { label: "Conciergerie hôtelière", included: true },
    ],
    ctaLabel: "Demander Premium",
    ctaHref: quoteUrl({ service: "Hôtel & Transferts", comfort: "Premium" }),
  },
  {
    name: "Grand Luxe",
    tagline: "L'hôtel de vos rêves avec chauffeur privé à disposition.",
    hotelLevel: "5★ grand luxe",
    roomTypes: ["Suite", "Junior suite", "Villa privée"],
    features: [
      { label: "Sélection hôtel selon vos critères", included: true },
      { label: "Réservation & confirmation hôtel", included: true },
      { label: "Transfert privé aéroport ↔ hôtel", included: true },
      { label: "Transferts inter-villes", included: true },
      { label: "Chauffeur privé journée", included: true },
      { label: "Conciergerie hôtelière", included: true },
    ],
    ctaLabel: "Demander Grand Luxe",
    ctaHref: quoteUrl({ service: "Hôtel & Transferts", comfort: "VIP" }),
  },
];

const config: DeepServiceConfig = {
  heroImage: "/img/hotel-view.jpg",
  heroCategory: "Hôtel & Transferts",
  eyebrow: "Hôtel & Transferts",
  title: "Hôtels sélectionnés et transferts privés : l'excellence du bout en bout.",
  subtitle:
    "Du 3★ bien choisi à la villa 5★ grand luxe, avec chauffeur privé ponctuel et silencieux — chaque nuit et chaque trajet sont soignés comme vous le méritez.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/agence/services" },
    { label: "Hôtel & Transferts" },
  ],
  quoteHref,
  intro: {
    heading: "Plus jamais de mauvaise surprise hôtelière.",
    paragraphs: [
      "Un hôtel bien choisi transforme un voyage ordinaire en souvenir mémorable. Nous ne nous contentons pas de réserver : nous sélectionnons les établissements qui correspondent réellement à vos critères — emplacement, vue, confort, rapport qualité-prix — et nous éliminons les options décevantes que les photos trop retouchées ne montrent pas.",
      "Les transferts suivent la même logique : chauffeur privé ponctuel, véhicule propre et silencieux, itinéraire préparé à l'avance. Votre arrivée et votre départ méritent autant d'attention que votre séjour.",
    ],
  },
  includedTitle: "Notre accompagnement hôtel & transferts",
  included: [
    "Sélection personnalisée de l'hôtel (critères, emplacement, standing)",
    "Réservation et confirmation écrite avec conditions d'annulation claires",
    "Transferts privés aéroport ↔ hôtel (chauffeur panneau nominatif)",
    "Suivi du vol pour adaptation en cas de retard",
    "Coordination hôtel : arrivée tardive, demandes spéciales, préférences chambre",
    "Contact d'urgence disponible pendant tout le séjour",
  ],
  notIncluded: [
    "Prix de l'hôtel et des transferts (fournis dans le devis)",
    "Repas non inclus dans le forfait hôtelier",
    "Activités et excursions (sur demande séparée)",
  ],
  process: {
    title: "Hôtel & transferts en 5 étapes",
    steps: [
      { title: "Vos critères", text: "Destination, standing souhaité, dates et préférences spécifiques." },
      { title: "Sélection hôtelière", text: "Nous proposons 2 à 3 établissements adaptés à votre profil." },
      { title: "Réservation", text: "Confirmation hôtel et chauffeur dès votre accord." },
      { title: "Coordination", text: "Heure de pick-up, accueil à l'arrivée et préférences transmises." },
      { title: "Séjour sans friction", text: "Vous arrivez attendu, tout est en ordre." },
    ],
  },
  benefits: {
    title: "Pourquoi réserver hôtel & transferts avec SYANOR",
    features: [
      { title: "Hôtels vérifiés", desc: "Des établissements sélectionnés, pas juste réservés.", icon: "star" },
      { title: "Transferts fiables", desc: "Ponctualité garantie, suivi de vol inclus.", icon: "route" },
      { title: "Arrivée VIP", desc: "Panneau nominatif, assistance bagages, aucune attente.", icon: "shield" },
      { title: "Coordination discrète", desc: "L'hôtel vous connaît avant votre arrivée.", icon: "compass" },
      { title: "Disponibilité", desc: "Joignable en cas d'imprévu à n'importe quelle heure.", icon: "phone" },
      { title: "Gain de temps", desc: "Zéro recherche, zéro comparaison — nous le faisons.", icon: "clock" },
    ],
  },
  packComparison: {
    eyebrow: "Nos formules",
    title: "Choisissez votre formule hôtel & transferts",
    subtitle: "Confort, Premium ou Grand Luxe — comparez et demandez votre devis.",
    formulas: HOTEL_FORMULAS,
  },
  activityConfigurator: {
    activity: "sejour",
    eyebrow: "Configurateur hôtel",
    title: "Préparez votre réservation hôtel & transferts en 5 étapes",
    subtitle: "Destination, standing, dates, transferts, options — composez votre demande.",
  },
  related: getOffersByCategory(["Séjour sur mesure", "Voyage organisé"]),
  faq: [
    {
      question: "Comment sélectionnez-vous les hôtels ?",
      answer:
        "Nous nous appuyons sur des retours clients, des évaluations terrain et des partenariats directs avec les établissements. Nous écartons systématiquement les hôtels dont les photos ne correspondent pas à la réalité.",
    },
    {
      question: "Le chauffeur m'attend si mon vol est en retard ?",
      answer:
        "Oui. Nous suivons votre vol en temps réel et ajustons l'heure de prise en charge automatiquement. Vous n'avez aucune démarche à faire.",
    },
    {
      question: "Peut-on réserver uniquement les transferts sans l'hôtel ?",
      answer:
        "Oui. Les deux services peuvent être réservés ensemble ou séparément selon vos besoins.",
    },
    {
      question: "Proposez-vous des véhicules grand standing (van VIP, limousine) ?",
      answer:
        "Oui. Selon la formule choisie, nous proposons berlines de luxe, vans VIP ou limousines selon la taille du groupe et le niveau de prestation souhaité.",
    },
  ],
  cta: {
    title: "Votre hôtel vous attend, votre chauffeur aussi.",
    body: "Indiquez-nous votre destination, vos dates et votre standing souhaité : nous nous occupons du reste.",
    ctaLabel: "Réserver mon hôtel & transferts",
    ctaHref: quoteHref,
    secondary: { label: "Pack Premium / VIP", href: "/agence/services/pack-premium-vip" },
  },
  stickyLabel: "Réserver hôtel & transferts",
};

export default function HotelTransfertsPage() {
  return <DeepServicePage config={config} />;
}
