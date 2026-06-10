type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Omra Ramadan : Formules & Départs | SYANOR VOYAGES",
  description:
    "Vivez le Ramadan aux lieux saints : formules 10 premiers jours, Express et personnalisées, atmosphère spirituelle unique, hôtels sélectionnés et accompagnement.",
  alternates: { canonical: "/omra-hajj/ramadan" },
};

const quoteHref = quoteUrl({ service: "Ramadan" });

const config: DeepServiceConfig = {
  eyebrow: "Ramadan",
  title: "Omra Ramadan : vivez le mois sacré aux lieux saints.",
  subtitle:
    "Une atmosphère spirituelle unique, des formules adaptées (10 premiers jours, Express ou sur mesure) et un accompagnement attentif tout au long du séjour.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Omra & Hajj", href: "/omra-hajj" },
    { label: "Ramadan" },
  ],
  quoteHref,
  intro: {
    heading: "Le Ramadan à Makkah et Madinah, dans la sérénité.",
    paragraphs: [
      "Vivre le Ramadan aux lieux saints est une expérience spirituelle intense. Nous proposons plusieurs formules : un séjour sur les 10 premiers jours, une formule Express plus courte, ou une organisation entièrement personnalisée.",
      "Les places sont particulièrement demandées sur cette période ; nous vous conseillons d'anticiper votre demande pour sécuriser votre voyage.",
    ],
  },
  includedTitle: "Ce que comprend une Omra Ramadan",
  included: [
    "Vols internationaux",
    "Hébergement proche des mosquées",
    "Transferts organisés",
    "Assistance visa",
    "Accompagnement spirituel",
    "Atmosphère et cadre du Ramadan",
  ],
  notIncluded: [
    "Repas non mentionnés",
    "Dépenses personnelles",
    "Options additionnelles (sur demande)",
  ],
  process: {
    eyebrow: "Votre parcours",
    title: "Anticiper, préparer, vivre le Ramadan",
    steps: [
      { title: "Choix de la formule", text: "10 jours, Express ou sur mesure." },
      { title: "Réservation anticipée", text: "Sécuriser les places demandées." },
      { title: "Préparation", text: "Conseils et accompagnement." },
      { title: "Séjour spirituel", text: "Vivre le Ramadan aux lieux saints." },
      { title: "Retour serein", text: "Suivi jusqu'au retour." },
    ],
  },
  benefits: {
    title: "Pourquoi vivre le Ramadan avec SYANOR",
    features: [
      { title: "Atmosphère unique", desc: "Le Ramadan aux lieux saints.", icon: "star" },
      { title: "Formules adaptées", desc: "10 jours, Express ou sur mesure.", icon: "sliders" },
      { title: "Hôtels sélectionnés", desc: "Proches des mosquées.", icon: "diamond" },
      { title: "Accompagnement", desc: "Une présence attentive.", icon: "hand-heart" },
      { title: "Anticipation", desc: "Sécuriser les places demandées.", icon: "clock" },
      { title: "Sérénité", desc: "Une organisation claire.", icon: "shield" },
    ],
  },
  related: getOffersByCategory(["Ramadan", "Omra", "Omra Plus"]),
  faq: [
    {
      question: "Quelles formules Ramadan proposez-vous ?",
      answer:
        "Nous proposons notamment une formule sur les 10 premiers jours du Ramadan, une formule Express plus courte, et des séjours entièrement personnalisés selon vos dates.",
    },
    {
      question: "Faut-il réserver longtemps à l'avance ?",
      answer:
        "Le Ramadan est une période très demandée. Nous vous recommandons d'anticiper votre demande afin de sécuriser au mieux les places et les hôtels.",
    },
    {
      question: "Les hôtels sont-ils proches des mosquées ?",
      answer:
        "Selon la formule, nous sélectionnons des hôtels à proximité des mosquées pour faciliter vos prières durant le mois sacré.",
    },
    {
      question: "Les dates exactes sont-elles confirmées ?",
      answer:
        "Les dates dépendent du calendrier du Ramadan et des disponibilités. Nous vous confirmons les détails sur demande.",
    },
  ],
  cta: {
    title: "Réservez votre Omra Ramadan en anticipant.",
    body: "Les places sont limitées sur cette période. Faites votre demande dès maintenant.",
    ctaLabel: "Demander une Omra Ramadan",
    ctaHref: quoteHref,
    secondary: { label: "Découvrir Omra Plus", href: "/omra-hajj/omra-plus" },
  },
  stickyLabel: "Demander une Omra Ramadan",
};

export default function RamadanPage() {
  return <DeepServicePage config={config} />;
}
