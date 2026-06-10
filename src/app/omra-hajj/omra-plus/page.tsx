import type { Metadata } from "next";
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Omra Plus : Expérience Premium & VIP | SYANOR VOYAGES",
  description:
    "Omra Plus : programme premium, hôtels haut de gamme proches du Haram, expérience guidée, formation avant départ, Ziyarat complète et options VIP.",
  alternates: { canonical: "/omra-hajj/omra-plus" },
};

const quoteHref = quoteUrl({ service: "Omra Plus", comfort: "VIP" });

const config: DeepServiceConfig = {
  eyebrow: "Omra Plus",
  title: "Omra Plus : l'expérience spirituelle premium et VIP.",
  subtitle:
    "Hôtels haut de gamme, expérience guidée, formation avant départ et Ziyarat complète : notre programme spirituel le plus abouti.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Omra & Hajj", href: "/omra-hajj" },
    { label: "Omra Plus" },
  ],
  quoteHref,
  intro: {
    heading: "Une Omra premium, pensée dans le moindre détail.",
    paragraphs: [
      "Omra Plus s'adresse aux voyageurs recherchant une expérience renforcée : hôtels 5★ très proches des lieux saints, transferts privés, accompagnement spirituel renforcé et formation complète avant le départ.",
      "Chaque détail est personnalisé selon vos préférences pour une expérience d'exception, sereine et confortable.",
    ],
  },
  includedTitle: "Ce que comprend Omra Plus",
  included: [
    "Vols internationaux",
    "Hébergement premium proche du Haram",
    "Transferts privés",
    "Formation avant départ",
    "Ziyarat complète accompagnée",
    "Accompagnement spirituel renforcé",
  ],
  notIncluded: [
    "Options VIP additionnelles (sur demande)",
    "Dépenses personnelles",
    "Prestations spécifiques hors programme",
  ],
  process: {
    eyebrow: "Votre parcours premium",
    title: "Une expérience guidée de bout en bout",
    steps: [
      { title: "Composition premium", text: "Nous définissons votre formule." },
      { title: "Formation", text: "Préparation complète avant départ." },
      { title: "Voyage VIP", text: "Hôtels premium et transferts privés." },
      { title: "Ziyarat complète", text: "Accompagnement renforcé sur place." },
      { title: "Retour serein", text: "Suivi attentif jusqu'au retour." },
    ],
  },
  benefits: {
    title: "Les atouts d'Omra Plus",
    features: [
      { title: "Hôtels haut de gamme", desc: "5★ très proches du Haram.", icon: "diamond" },
      { title: "Transferts privés", desc: "Confort et fluidité à chaque trajet.", icon: "route" },
      { title: "Formation complète", desc: "Préparation approfondie avant départ.", icon: "book" },
      { title: "Accompagnement renforcé", desc: "Une présence dédiée et attentive.", icon: "hand-heart" },
      { title: "Ziyarat complète", desc: "Découverte étendue des lieux historiques.", icon: "compass" },
      { title: "Expérience VIP", desc: "Options premium personnalisables.", icon: "spark" },
    ],
  },
  related: getOffersByCategory(["Omra Plus", "Omra", "Ramadan"]),
  faq: [
    {
      question: "Qu'est-ce qui distingue Omra Plus d'une Omra classique ?",
      answer:
        "Omra Plus propose des hôtels premium plus proches des lieux saints, des transferts privés, une formation complète et un accompagnement renforcé, pour une expérience d'exception.",
    },
    {
      question: "La formation avant départ est-elle incluse ?",
      answer:
        "Oui, Omra Plus inclut une formation complète avant le départ ainsi qu'un accompagnement spirituel renforcé sur place.",
    },
    {
      question: "Puis-je ajouter des options VIP ?",
      answer:
        "Oui, des options VIP additionnelles sont disponibles sur demande pour personnaliser davantage votre expérience.",
    },
    {
      question: "Omra Plus est-elle adaptée aux familles ?",
      answer:
        "Tout à fait. Nous composons des formules premium adaptées aux familles, aux couples et aux groupes.",
    },
  ],
  cta: {
    title: "Vivez une Omra d'exception avec Omra Plus.",
    body: "Composons ensemble votre expérience premium, selon vos dates et vos préférences.",
    ctaLabel: "Demander Omra Plus",
    ctaHref: quoteHref,
    secondary: { label: "Formules Ramadan", href: "/omra-hajj/ramadan" },
  },
  stickyLabel: "Demander Omra Plus",
};

export default function OmraPlusPage() {
  return <DeepServicePage config={config} />;
}
