type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { type Formula } from "@/components/ui/PackComparisonCards";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Billets Groupe | SYANOR VOYAGES",
  description:
    "Réservation de billets avion en groupe : tarifs négociés, coordination complète, accompagnement de A à Z pour associations, familles, comités d'entreprise.",
  alternates: { canonical: "/agence/services/billets-groupe" },
};

const quoteHref = quoteUrl({ service: "Billet groupe", transport: "Avion" });

const GROUPE_FORMULAS: Formula[] = [
  {
    name: "Groupe Essentiel",
    tagline: "Vol groupe bien organisé, tarif optimisé.",
    hotelLevel: "—",
    roomTypes: [],
    features: [
      { label: "Recherche tarifaire groupe", included: true },
      { label: "Réservation bloc de sièges", included: true },
      { label: "Liste passagers gérée", included: true },
      { label: "Dossier de voyage", included: false },
      { label: "Accompagnateur dédié", included: false },
      { label: "Assistance aéroport", included: false },
    ],
    ctaLabel: "Demander Groupe Essentiel",
    ctaHref: quoteUrl({ service: "Billet groupe", transport: "Avion" }),
  },
  {
    name: "Groupe Premium",
    tagline: "Coordination complète, confort garanti.",
    badge: "Recommandé",
    featured: true,
    hotelLevel: "—",
    roomTypes: [],
    features: [
      { label: "Recherche tarifaire groupe", included: true },
      { label: "Réservation bloc de sièges", included: true },
      { label: "Liste passagers gérée", included: true },
      { label: "Dossier de voyage", included: true },
      { label: "Accompagnateur dédié", included: true },
      { label: "Assistance aéroport", included: false },
    ],
    ctaLabel: "Demander Groupe Premium",
    ctaHref: quoteUrl({ service: "Billet groupe", transport: "Avion", comfort: "Premium" }),
  },
  {
    name: "Groupe VIP",
    tagline: "Prise en charge totale, expérience sans friction.",
    hotelLevel: "—",
    roomTypes: [],
    features: [
      { label: "Recherche tarifaire groupe", included: true },
      { label: "Réservation bloc de sièges", included: true },
      { label: "Liste passagers gérée", included: true },
      { label: "Dossier de voyage", included: true },
      { label: "Accompagnateur dédié", included: true },
      { label: "Assistance aéroport", included: true },
    ],
    ctaLabel: "Demander Groupe VIP",
    ctaHref: quoteUrl({ service: "Billet groupe", transport: "Avion", comfort: "VIP" }),
  },
];

const config: DeepServiceConfig = {
  heroImage: "/services/billets-groupes.jpg",
  eyebrow: "Billets groupe",
  title: "Vols en groupe : tarifs négociés et coordination sans faille.",
  subtitle:
    "Associations, familles nombreuses, comités d'entreprise — nous gérons chaque détail : recherche de tarifs, bloc de sièges, liste passagers et accompagnement jusqu'au départ.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/agence/services" },
    { label: "Billets Groupe" },
  ],
  quoteHref,
  intro: {
    heading: "Voyager en groupe, simplement.",
    paragraphs: [
      "Organiser un vol pour 10, 30 ou 100 personnes est une toute autre réalité qu'un billet individuel. Les tarifs groupe, la gestion des documents, la coordination des passagers et les imprévus de dernière minute demandent une expertise spécifique.",
      "Confiez-nous votre dossier : nous négocions les tarifs, bloquons les sièges ensemble et vous livrons un dossier clair pour chaque voyageur. Vous partez l'esprit libre, le groupe aussi.",
    ],
  },
  includedTitle: "Notre accompagnement billets groupe",
  included: [
    "Recherche et négociation des tarifs groupe",
    "Réservation d'un bloc de sièges homogène",
    "Gestion de la liste passagers (documents, noms, dates)",
    "Coordination avec la compagnie aérienne",
    "Dossier individuel par voyageur",
    "Assistance avant et pendant le départ",
  ],
  notIncluded: [
    "Prix des billets (variables selon compagnie et disponibilité)",
    "Bagages supplémentaires et options compagnie",
    "Hébergement et transferts (sur demande séparée)",
  ],
  process: {
    title: "Votre vol groupe en 5 étapes",
    steps: [
      { title: "Cahier des charges", text: "Nombre de voyageurs, destination, dates, contraintes spécifiques." },
      { title: "Recherche tarifaire", text: "Nous négocions le meilleur bloc disponible." },
      { title: "Confirmation du groupe", text: "Validation de la liste passagers et des documents." },
      { title: "Dossiers individuels", text: "Chaque voyageur reçoit ses informations claires." },
      { title: "Départ coordonné", text: "Accompagnement jusqu'au check-in collectif." },
    ],
  },
  benefits: {
    title: "Pourquoi réserver vos billets groupe avec SYANOR",
    features: [
      { title: "Tarifs négociés", desc: "Des prix groupe inaccessibles en réservation individuelle.", icon: "star" },
      { title: "Bloc de sièges", desc: "Votre groupe voyage ensemble, sans dispersion.", icon: "users" },
      { title: "Coordination complète", desc: "Un interlocuteur unique pour tout le groupe.", icon: "hand-heart" },
      { title: "Dossiers clairs", desc: "Chaque voyageur sait exactement ce qu'il doit préparer.", icon: "book" },
      { title: "Flexibilité", desc: "Gestion des modifications et imprévus de dernière minute.", icon: "route" },
      { title: "Expérience groupe", desc: "Des centaines de groupes accompagnés avec succès.", icon: "shield" },
    ],
  },
  packComparison: {
    eyebrow: "Nos formules groupe",
    title: "Choisissez votre formule billet groupe",
    subtitle: "De l'essentiel à l'accompagnement VIP — comparez et demandez votre devis groupe.",
    formulas: GROUPE_FORMULAS,
  },
  activityConfigurator: {
    activity: "avion",
    eyebrow: "Configurateur groupe",
    title: "Préparez votre vol groupe en 5 étapes",
    subtitle: "Nombre de voyageurs, destination, dates, classe et options : composez votre demande groupe.",
  },
  related: getOffersByCategory(["Billet avion", "Voyage organisé"]),
  faq: [
    {
      question: "À partir de combien de personnes parle-t-on de vol groupe ?",
      answer:
        "En général dès 10 passagers, les compagnies proposent des tarifs groupe spécifiques. Nous gérons des groupes de 10 à plusieurs centaines de voyageurs.",
    },
    {
      question: "Peut-on avoir des sièges côte à côte pour tout le groupe ?",
      answer:
        "Nous travaillons à bloquer un maximum de sièges contigus. Pour les très grands groupes, des affrètements partiels ou totaux sont envisageables.",
    },
    {
      question: "Comment gérez-vous les modifications ou annulations dans la liste passagers ?",
      answer:
        "Nous anticipons les aléas avec des conditions de modification adaptées aux contrats groupe. Chaque changement est géré directement avec la compagnie.",
    },
    {
      question: "Proposez-vous également le transport et l'hébergement pour les groupes ?",
      answer:
        "Oui, nous pouvons prendre en charge l'intégralité du séjour groupe : vol, hôtel, transferts et activités sur mesure. Mentionnez-le dans votre demande.",
    },
  ],
  cta: {
    title: "Votre vol groupe, géré de A à Z.",
    body: "Indiquez-nous votre nombre de voyageurs, votre destination et vos dates : nous revenons vers vous avec une proposition groupe complète.",
    ctaLabel: "Demander un devis groupe",
    ctaHref: quoteHref,
    secondary: { label: "Billets avion individuels", href: "/agence/services/billets-avion" },
  },
  stickyLabel: "Demander un devis groupe",
};

export default function BilletsGroupePage() {
  return <DeepServicePage config={config} />;
}
