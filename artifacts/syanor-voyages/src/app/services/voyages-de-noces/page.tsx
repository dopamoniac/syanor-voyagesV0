type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { type Formula } from "@/components/ui/PackComparisonCards";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Voyage de Noces | SYANOR VOYAGES",
  description:
    "Organisez votre voyage de noces de rêve : destinations romantiques, hôtels 5★ vue mer, transferts privés, surprises romantiques et accompagnement personnalisé.",
  alternates: { canonical: "/agence/services/voyages-de-noces" },
};

const quoteHref = quoteUrl({ service: "Voyage de noces", comfort: "VIP" });

const NOCES_FORMULAS: Formula[] = [
  {
    name: "Romantique",
    tagline: "Le voyage de noces essentiel, avec une touche d'élégance.",
    hotelLevel: "4★ vue mer ou piscine",
    roomTypes: ["Chambre double supérieure"],
    features: [
      { label: "Destination romantique sélectionnée", included: true },
      { label: "Hôtel 4★ avec décoration chambre", included: true },
      { label: "Transferts privés A/R", included: true },
      { label: "Dîner romantique inclus", included: true },
      { label: "Surprise d'accueil (pétales, champagne)", included: false },
      { label: "Expériences exclusives sur mesure", included: false },
    ],
    ctaLabel: "Demander Romantique",
    ctaHref: quoteUrl({ service: "Voyage de noces", comfort: "Standard" }),
  },
  {
    name: "Prestige",
    tagline: "L'expérience de noces haut de gamme, pleine de douceur.",
    badge: "Coup de cœur",
    featured: true,
    hotelLevel: "5★ vue mer, suite",
    roomTypes: ["Suite junior", "Suite romantique"],
    features: [
      { label: "Destination romantique sélectionnée", included: true },
      { label: "Hôtel 5★ suite romantique", included: true },
      { label: "Transferts privés A/R", included: true },
      { label: "Dîner romantique inclus", included: true },
      { label: "Surprise d'accueil (pétales, champagne)", included: true },
      { label: "Expériences exclusives sur mesure", included: false },
    ],
    ctaLabel: "Demander Prestige",
    ctaHref: quoteUrl({ service: "Voyage de noces", comfort: "Premium" }),
  },
  {
    name: "Exception",
    tagline: "Le voyage de noces dont vous avez toujours rêvé.",
    hotelLevel: "5★ grand luxe, villa privée",
    roomTypes: ["Suite de luxe", "Villa privée avec piscine"],
    features: [
      { label: "Destination romantique sélectionnée", included: true },
      { label: "Villa ou suite 5★ grand luxe", included: true },
      { label: "Transferts privés limousine", included: true },
      { label: "Dîner romantique inclus", included: true },
      { label: "Surprise d'accueil (pétales, champagne)", included: true },
      { label: "Expériences exclusives sur mesure", included: true },
    ],
    ctaLabel: "Demander Exception",
    ctaHref: quoteUrl({ service: "Voyage de noces", comfort: "VIP" }),
  },
];

const config: DeepServiceConfig = {
  heroImage: "/services/sur-mesure/voyage-de-noces.png",
  heroFloating: true,
  heroCategory: "Séjour sur mesure",
  eyebrow: "Voyage de noces",
  title: "Votre voyage de noces : romantique, luxueux, inoubliable.",
  subtitle:
    "Des Maldives à Santorini, de l'Italie au Maroc — nous créons le voyage de noces dont vous rêvez : hôtels de charme, surprises romantiques et chaque moment pensé pour vous deux.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/agence/services" },
    { label: "Voyage de Noces" },
  ],
  quoteHref,
  intro: {
    heading: "Ce moment mérite une attention particulière.",
    paragraphs: [
      "Le voyage de noces est unique. Il doit l'être vraiment — dans le choix de la destination, dans l'hôtel qui vous attend avec pétales et champagne, dans le dîner les pieds dans l'eau, dans les petites attentions qui font les grands souvenirs.",
      "Nous construisons votre voyage de noces sur mesure : vous exprimez vos envies (mer, ville, aventure, total repos), nous proposons la destination idéale, sélectionnons l'hébergement parfait et pré-arrangeons chaque surprise. Vous n'avez qu'à vous laisser porter.",
    ],
  },
  includedTitle: "Notre accompagnement voyage de noces",
  included: [
    "Consultation personnalisée : destination, style, budget",
    "Sélection de l'hôtel romantique (4★ à villa privée 5★)",
    "Vol aller-retour optimisé — classe selon formule",
    "Transferts privés tout au long du séjour",
    "Décoration chambre et surprise d'accueil (selon formule)",
    "Dîner romantique réservé à votre nom",
  ],
  notIncluded: [
    "Dépenses personnelles et pourboires",
    "Activités optionnelles non prévues au programme",
    "Assurance annulation (recommandée, incluse sur demande)",
  ],
  process: {
    title: "Votre voyage de noces en 5 étapes",
    steps: [
      { title: "Entretien romantique", text: "Vos envies, votre style, votre destination de rêve." },
      { title: "Proposition sur mesure", text: "Hôtel, vol, activités romantiques sélectionnés pour vous." },
      { title: "Validation & surprises", text: "Vous confirmez, nous organisons les attentions secrètes." },
      { title: "Dossier complet", text: "Tout est prévu, documenté et réservé avant votre départ." },
      { title: "Le voyage commence", text: "Profitez — nous restons disponibles si besoin." },
    ],
  },
  benefits: {
    title: "Pourquoi confier votre voyage de noces à SYANOR",
    features: [
      { title: "Destinations romantiques", desc: "Des adresses triées sur le volet, réellement romantiques.", icon: "star" },
      { title: "Attentions sur mesure", desc: "Pétales, champagne, dîner privé — arrangés à l'avance.", icon: "hand-heart" },
      { title: "Hôtels d'exception", desc: "Charme, luxe et vue imprenable — jamais de compromis.", icon: "shield" },
      { title: "Transferts privés", desc: "Aucun taxi collectif — vous êtes toujours seuls tous les deux.", icon: "route" },
      { title: "Discrétion garantie", desc: "Votre voyage reste votre secret jusqu'au bout.", icon: "compass" },
      { title: "Disponibilité 24h", desc: "Un interlocuteur joignable à toute heure pendant le voyage.", icon: "phone" },
    ],
  },
  packComparison: {
    eyebrow: "Nos formules noces",
    title: "Choisissez votre formule voyage de noces",
    subtitle: "Romantique, Prestige ou Exception — comparez et demandez votre devis.",
    formulas: NOCES_FORMULAS,
  },
  activityConfigurator: {
    activity: "sejour",
    eyebrow: "Configurateur noces",
    title: "Composez votre voyage de noces en 5 étapes",
    subtitle: "Destination, style, hôtel, surprises, dates — préparez votre demande idéale.",
  },
  related: getOffersByCategory(["Séjour sur mesure", "Voyage organisé"]),
  faq: [
    {
      question: "Combien de temps à l'avance faut-il réserver un voyage de noces ?",
      answer:
        "Idéalement 3 à 6 mois avant le mariage pour les destinations les plus prisées. Certaines villas et suites romantiques se réservent 1 an à l'avance en haute saison.",
    },
    {
      question: "Pouvez-vous organiser des surprises à l'insu du conjoint ?",
      answer:
        "Absolument. Nous travaillons en lien avec les hôtels et restaurants pour préparer des surprises coordonnées discrètement : chambre décorée, dîner privé, activité surprise.",
    },
    {
      question: "Quelles destinations proposez-vous pour un voyage de noces ?",
      answer:
        "Maldives, Santorini, Seychelles, Bali, Italie, Maroc, île Maurice, Dubai et bien d'autres. Nous adaptons notre recommandation à votre style de couple et à votre budget.",
    },
    {
      question: "La villa ou la suite est-elle déjà préparée à notre arrivée ?",
      answer:
        "Oui. Selon la formule, nous pré-arrangeons la décoration de la chambre (pétales, bougies, champagne) et prévenons l'hôtel de votre arrivée en couple de mariés pour un accueil privilégié.",
    },
  ],
  cta: {
    title: "Le voyage de noces de vos rêves, organisé pour vous.",
    body: "Partagez vos envies et votre destination de rêve : nous créons une expérience romantique et inoubliable, pensée rien que pour vous deux.",
    ctaLabel: "Organiser mon voyage de noces",
    ctaHref: quoteHref,
    secondary: { label: "Pack Premium / VIP", href: "/agence/services/pack-premium-vip" },
  },
  stickyLabel: "Organiser mon voyage de noces",
};

export default function VoyagesDeNocesPage() {
  return <DeepServicePage config={config} />;
}
