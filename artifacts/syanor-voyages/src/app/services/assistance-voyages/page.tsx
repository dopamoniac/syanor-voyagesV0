type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { type Formula } from "@/components/ui/PackComparisonCards";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Assistance Voyages | SYANOR VOYAGES",
  description:
    "Assistance voyage complète : coordination administrative, suivi de dossier, assistance en cas d'imprévu, interlocuteur dédié avant et pendant votre séjour.",
  alternates: { canonical: "/agence/services/assistance-voyages" },
};

const quoteHref = quoteUrl({ service: "Assistance voyages" });

const ASSISTANCE_FORMULAS: Formula[] = [
  {
    name: "Essentielle",
    tagline: "L'assistance de base pour voyager sans inquiétude.",
    hotelLevel: "—",
    roomTypes: [],
    features: [
      { label: "Coordination administrative pré-départ", included: true },
      { label: "Vérification dossier de voyage", included: true },
      { label: "Rappels documents et check-list", included: true },
      { label: "Assistance téléphonique pendant le voyage", included: false },
      { label: "Gestion des imprévus en temps réel", included: false },
      { label: "Interlocuteur dédié 24h/24", included: false },
    ],
    ctaLabel: "Demander Essentielle",
    ctaHref: quoteUrl({ service: "Assistance voyages", comfort: "Standard" }),
  },
  {
    name: "Premium",
    tagline: "Un interlocuteur actif de A à Z.",
    badge: "Recommandé",
    featured: true,
    hotelLevel: "—",
    roomTypes: [],
    features: [
      { label: "Coordination administrative pré-départ", included: true },
      { label: "Vérification dossier de voyage", included: true },
      { label: "Rappels documents et check-list", included: true },
      { label: "Assistance téléphonique pendant le voyage", included: true },
      { label: "Gestion des imprévus en temps réel", included: true },
      { label: "Interlocuteur dédié 24h/24", included: false },
    ],
    ctaLabel: "Demander Premium",
    ctaHref: quoteUrl({ service: "Assistance voyages", comfort: "Premium" }),
  },
  {
    name: "Conciergerie 24h",
    tagline: "Une présence constante, à toute heure du jour et de la nuit.",
    hotelLevel: "—",
    roomTypes: [],
    features: [
      { label: "Coordination administrative pré-départ", included: true },
      { label: "Vérification dossier de voyage", included: true },
      { label: "Rappels documents et check-list", included: true },
      { label: "Assistance téléphonique pendant le voyage", included: true },
      { label: "Gestion des imprévus en temps réel", included: true },
      { label: "Interlocuteur dédié 24h/24", included: true },
    ],
    ctaLabel: "Demander Conciergerie 24h",
    ctaHref: quoteUrl({ service: "Assistance voyages", comfort: "VIP" }),
  },
];

const config: DeepServiceConfig = {
  heroImage: "/services/assurance-voyage.png",
  eyebrow: "Assistance voyages",
  title: "L'assistance voyage qui anticipe chaque imprévu.",
  subtitle:
    "Un interlocuteur dédié avant votre départ, pendant votre séjour et jusqu'au retour — pour que vous voyagiez l'esprit entièrement libre, quoi qu'il arrive.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/agence/services" },
    { label: "Assistance Voyages" },
  ],
  quoteHref,
  intro: {
    heading: "Quelqu'un dans votre équipe, à toute heure.",
    paragraphs: [
      "Un vol annulé, un hôtel qui n'a pas la réservation, un document oublié au mauvais moment — les imprévus existent dans chaque voyage. Ce qui change tout, c'est d'avoir quelqu'un à appeler qui connaît votre dossier, qui agit immédiatement et qui trouve une solution.",
      "Notre service d'assistance voyages s'active dès la réservation : nous vérifions chaque document, vous envoyons des rappels utiles, et restons joignables pendant tout votre séjour. Vous voyagez. Nous veillons.",
    ],
  },
  includedTitle: "Notre accompagnement assistance voyages",
  included: [
    "Vérification complète du dossier de voyage avant départ",
    "Check-list personnalisée : documents, vaccins, visas, devises",
    "Rappels pré-départ automatisés (J-7, J-3, J-1)",
    "Ligne d'assistance directe pendant le séjour",
    "Gestion des modifications, annulations et imprévus",
    "Coordination avec compagnies, hôtels et partenaires locaux",
  ],
  notIncluded: [
    "Coûts de modification ou d'annulation facturés par les prestataires",
    "Assurance voyage (service complémentaire, sur demande)",
    "Frais médicaux ou rapatriement (couvert par assurance dédiée)",
  ],
  process: {
    title: "Votre assistance voyage en 5 étapes",
    steps: [
      { title: "Réception du dossier", text: "Nous analysons votre réservation et vos documents." },
      { title: "Vérification complète", text: "Chaque élément est validé : billets, hôtel, visas, assurance." },
      { title: "Check-list personnalisée", text: "Vous recevez un guide préparation clair et précis." },
      { title: "Rappels pré-départ", text: "Nous vous contactons à J-7, J-3 et J-1." },
      { title: "Assistance active", text: "Pendant votre voyage, nous répondons à tout imprévu." },
    ],
  },
  benefits: {
    title: "Pourquoi choisir l'assistance SYANOR pour votre voyage",
    features: [
      { title: "Dossier vérifié", desc: "Aucune mauvaise surprise due à un document manquant.", icon: "book" },
      { title: "Réactivité immédiate", desc: "En cas d'imprévu, nous agissons avant que vous paniquiez.", icon: "phone" },
      { title: "Expertise locale", desc: "Contacts directs avec partenaires sur place.", icon: "compass" },
      { title: "Disponibilité 24h", desc: "Joignable même en dehors des heures de bureau.", icon: "clock" },
      { title: "Sérénité totale", desc: "Voyagez sans charge mentale — nous gérons.", icon: "shield" },
      { title: "Accompagnement humain", desc: "Un vrai interlocuteur, pas un bot.", icon: "hand-heart" },
    ],
  },
  packComparison: {
    eyebrow: "Nos formules",
    title: "Choisissez votre niveau d'assistance voyage",
    subtitle: "Essentielle, Premium ou Conciergerie 24h — comparez et demandez votre devis.",
    formulas: ASSISTANCE_FORMULAS,
  },
  activityConfigurator: {
    activity: "sejour",
    eyebrow: "Configurateur assistance",
    title: "Préparez votre demande d'assistance en 5 étapes",
    subtitle: "Type de voyage, destination, dates, niveau d'assistance souhaité — composez votre demande.",
  },
  related: getOffersByCategory(["Séjour sur mesure", "Voyage organisé"]),
  faq: [
    {
      question: "L'assistance voyage remplace-t-elle l'assurance voyage ?",
      answer:
        "Non. L'assistance voyage est un service de coordination et d'accompagnement humain. L'assurance voyage couvre les risques financiers (annulation, rapatriement médical, perte bagages). Les deux sont complémentaires.",
    },
    {
      question: "Êtes-vous disponibles si un problème survient à l'étranger la nuit ?",
      answer:
        "Avec la formule Conciergerie 24h, oui. Un interlocuteur dédié est joignable à toute heure pour gérer toute situation urgente : vol raté, hôtel fermé, perte de documents.",
    },
    {
      question: "Pouvez-vous gérer un changement de vol de dernière minute ?",
      answer:
        "Oui. Nous contactons directement la compagnie, vérifions les alternatives disponibles et vous proposons une solution en temps réel, sans que vous ayez à attendre en file d'attente.",
    },
    {
      question: "L'assistance voyage est-elle disponible pour tous types de voyages ?",
      answer:
        "Oui : voyages en famille, voyages d'affaires, groupes, séjours de noces, pèlerinages — nous adaptons le niveau d'assistance à la nature et aux enjeux de chaque voyage.",
    },
  ],
  cta: {
    title: "Voyagez l'esprit libre. Nous veillons.",
    body: "Décrivez-nous votre voyage et le niveau d'assistance que vous souhaitez : nous vous proposons la formule adaptée.",
    ctaLabel: "Activer mon assistance voyage",
    ctaHref: quoteHref,
    secondary: { label: "Assurance Voyage", href: "/agence/contact?service=Assurance#quote" },
  },
  stickyLabel: "Activer mon assistance voyage",
};

export default function AssistanceVoyagesPage() {
  return <DeepServicePage config={config} />;
}
