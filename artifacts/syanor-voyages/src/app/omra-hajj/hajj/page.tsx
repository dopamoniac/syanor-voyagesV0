type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import OmraFactoryLayout from "@/components/layout/OmraFactoryLayout";
import { omraQuoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Hajj : Organisation & Accompagnement | SYANOR VOYAGES",
  description:
    "Accomplissez le Hajj dans les meilleures conditions : organisation complète, assistance administrative, préparation des rites, hébergement, transferts et accompagnement.",
  alternates: { canonical: "/omra-hajj/hajj" },
};

const quoteHref = omraQuoteUrl({ service: "Hajj" });

const config: DeepServiceConfig = {
  eyebrow: "Hajj",
  heroCategory: "Hajj",
  title: "Hajj : un accompagnement complet pour un pèlerinage serein.",
  subtitle:
    "Organisation, assistance administrative, préparation des rites, hébergement, transferts et accompagnement : nous vous épaulons à chaque étape du Hajj.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Omra & Hajj", href: "/omra-hajj" },
    { label: "Hajj" },
  ],
  quoteHref,
  intro: {
    heading: "Le Hajj, accompagné avec rigueur et bienveillance.",
    paragraphs: [
      "Le Hajj est un voyage majeur, soumis à un calendrier et à des quotas officiels. Notre rôle est de vous accompagner dans l'organisation, les démarches administratives et la préparation, afin que vous puissiez vivre ce moment dans les meilleures conditions.",
      "Les dates et modalités exactes dépendent du calendrier officiel ; nous vous communiquons les détails confirmés sur demande.",
    ],
  },
  includedTitle: "Notre accompagnement Hajj",
  included: [
    "Organisation complète du voyage",
    "Assistance administrative et démarches",
    "Préparation aux rites du Hajj",
    "Hébergement selon la formule",
    "Transferts organisés",
    "Accompagnement avant, pendant et après",
  ],
  notIncluded: [
    "Frais officiels selon réglementation",
    "Dépenses personnelles",
    "Prestations optionnelles (sur demande)",
  ],
  process: {
    eyebrow: "Votre parcours",
    title: "De l'inscription au retour, étape par étape",
    steps: [
      { title: "Échange initial", text: "Nous étudions votre projet et vos besoins." },
      { title: "Démarches", text: "Assistance administrative et dossier." },
      { title: "Préparation", text: "Comprendre et préparer les rites." },
      { title: "Pèlerinage", text: "Hébergement, transferts et accompagnement." },
      { title: "Retour", text: "Suivi jusqu'au retour." },
    ],
  },
  benefits: {
    title: "Pourquoi préparer votre Hajj avec SYANOR",
    features: [
      { title: "Assistance administrative", desc: "Un dossier suivi avec rigueur.", icon: "book" },
      { title: "Préparation des rites", desc: "Aborder le Hajj sereinement.", icon: "crescent" },
      { title: "Organisation complète", desc: "Hébergement et transferts gérés.", icon: "route" },
      { title: "Accompagnement", desc: "Une présence à chaque étape.", icon: "hand-heart" },
      { title: "Clarté", desc: "Des informations transparentes.", icon: "check" },
      { title: "Sérénité", desc: "Vous vous concentrez sur l'essentiel.", icon: "shield" },
    ],
  },
  related: getOffersByCategory(["Hajj", "Omra", "Omra Plus"]),
  faq: [
    {
      question: "Quand a lieu le Hajj ?",
      answer:
        "Le Hajj se déroule à une période précise du calendrier, déterminée chaque année. Les dates exactes et les modalités dépendent du calendrier et des quotas officiels.",
    },
    {
      question: "M'accompagnez-vous pour les démarches administratives ?",
      answer:
        "Oui. Nous vous assistons dans la constitution du dossier et les démarches liées au Hajj, dans le respect de la réglementation en vigueur.",
    },
    {
      question: "La préparation aux rites est-elle prévue ?",
      answer:
        "Oui, nous proposons une préparation avant le départ et un accompagnement sur place pour aborder les rites du Hajj sereinement.",
    },
    {
      question: "Comment obtenir les détails et un devis ?",
      answer:
        "Les modalités du Hajj étant encadrées, nous confirmons les détails sur demande. Remplissez le formulaire de devis pour être recontacté.",
    },
  ],
  cta: {
    title: "Préparez votre Hajj avec un accompagnement de confiance.",
    body: "Les détails du Hajj sont confirmés sur demande. Laissez-nous vos coordonnées pour être recontacté.",
    ctaLabel: "Être accompagné pour le Hajj",
    ctaHref: quoteHref,
    secondary: { label: "Découvrir l'Omra", href: "/omra-hajj/omra" },
  },
  stickyLabel: "Demander un accompagnement Hajj",
};

export default function HajjPage() {
  return <DeepServicePage config={config} LayoutComponent={OmraFactoryLayout} />;
}
