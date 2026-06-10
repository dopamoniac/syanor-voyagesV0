type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Omra (Classique, Premium, Sur Mesure) | SYANOR VOYAGES",
  description:
    "Omra classique, premium ou sur mesure : programme, services inclus, préparation des rites, Ziyarat et départs. Accompagnement spirituel complet.",
  alternates: { canonical: "/omra-hajj/omra" },
};

const quoteHref = quoteUrl({ service: "Omra" });

const config: DeepServiceConfig = {
  eyebrow: "Omra",
  title: "Omra : accomplissez votre voyage spirituel avec sérénité.",
  subtitle:
    "Formules classique, premium ou entièrement sur mesure, avec préparation des rites, hôtels sélectionnés, transferts, Ziyarat et accompagnement.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Omra & Hajj", href: "/omra-hajj" },
    { label: "Omra" },
  ],
  quoteHref,
  intro: {
    heading: "Une Omra organisée du premier échange au retour.",
    paragraphs: [
      "Nous proposons plusieurs niveaux de formules : l'Omra classique pour un voyage accessible et bien encadré, l'Omra premium pour des hôtels plus proches et un confort renforcé, et l'Omra sur mesure pour composer votre séjour selon vos dates et vos préférences.",
      "Avant le départ, nous vous aidons à comprendre et préparer les rites. Sur place, vous bénéficiez d'un accompagnement attentif et d'une Ziyarat des lieux historiques.",
    ],
  },
  includedTitle: "Ce que comprend une Omra SYANOR",
  included: [
    "Vols internationaux",
    "Hébergement à Makkah et Madinah",
    "Transferts internes organisés",
    "Préparation et accompagnement des rites",
    "Ziyarat accompagnée",
    "Assistance et conseils visa",
  ],
  notIncluded: [
    "Frais de visa (assistance incluse)",
    "Repas non mentionnés",
    "Dépenses personnelles",
  ],
  process: {
    eyebrow: "Votre parcours",
    title: "Choisir, préparer, accomplir, revenir serein",
    steps: [
      { title: "Choisir la formule", text: "Classique, premium ou sur mesure." },
      { title: "Préparer les rites", text: "Formation et supports pratiques." },
      { title: "Voyager", text: "Vols, hôtels et transferts organisés." },
      { title: "Ziyarat", text: "Visite accompagnée des lieux saints." },
      { title: "Retour accompagné", text: "Assistance jusqu'au retour." },
    ],
  },
  benefits: {
    title: "Pourquoi accomplir votre Omra avec SYANOR",
    features: [
      { title: "Préparation claire", desc: "Comprendre chaque étape sereinement.", icon: "book" },
      { title: "Hôtels sélectionnés", desc: "Proximité des lieux saints selon formule.", icon: "diamond" },
      { title: "Accompagnement", desc: "Une présence attentive sur place.", icon: "hand-heart" },
      { title: "Ziyarat", desc: "Découverte des lieux historiques.", icon: "compass" },
      { title: "Assistance visa", desc: "Conseils sur les démarches.", icon: "shield" },
      { title: "Sérénité", desc: "Vous vous concentrez sur l'essentiel.", icon: "crescent" },
    ],
  },
  related: getOffersByCategory(["Omra", "Omra Plus", "Ramadan"]),
  faq: [
    {
      question: "Quelle est la durée d'une Omra ?",
      answer:
        "Selon la formule, l'Omra dure généralement entre 10 et 14 jours. Des durées différentes sont possibles dans le cadre d'un programme sur mesure.",
    },
    {
      question: "Puis-je partir tout au long de l'année ?",
      answer:
        "Oui, l'Omra peut s'accomplir toute l'année. Certaines périodes, comme le Ramadan, font l'objet de formules spécifiques.",
    },
    {
      question: "La préparation des rites est-elle incluse ?",
      answer:
        "Oui, nous proposons une préparation avant le départ et un accompagnement sur place pour vous aider à accomplir les rites sereinement.",
    },
    {
      question: "Proposez-vous une Omra sur mesure ?",
      answer:
        "Absolument. Nous composons votre Omra selon vos dates, votre ville de départ, votre niveau de confort et vos préférences.",
    },
  ],
  cta: {
    title: "Préparez votre Omra dès maintenant.",
    body: "Indiquez-nous vos dates et votre formule souhaitée : nous revenons vers vous avec une proposition adaptée.",
    ctaLabel: "Demander mon Omra",
    ctaHref: quoteHref,
    secondary: { label: "Découvrir Omra Plus", href: "/omra-hajj/omra-plus" },
  },
  stickyLabel: "Demander mon Omra",
};

export default function OmraPage() {
  return <DeepServicePage config={config} />;
}
