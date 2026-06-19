type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { PACK_PRESETS } from "@/components/ui/PackComparisonCards";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Billets Avion | SYANOR VOYAGES",
  description:
    "Réservez vos billets d'avion avec accompagnement, itinéraires optimisés et suivi personnalisé. Vols internationaux, aller simple, aller-retour et multi-destinations.",
  alternates: { canonical: "/services/billets-avion" },
};

const quoteHref = quoteUrl({ service: "Billet avion", transport: "Avion" });

const config: DeepServiceConfig = {
  heroImage: "/services/billets-avion.png",
  heroFloating: true,
  eyebrow: "Billets avion",
  title: "Billets d'avion : itinéraires optimisés et accompagnement complet.",
  subtitle:
    "Vols internationaux, aller simple, aller-retour ou multi-destinations : nous recherchons les meilleures options et vous accompagnons jusqu'au départ.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Billets Avion" },
  ],
  quoteHref,
  intro: {
    heading: "Un billet d'avion réservé sans stress.",
    paragraphs: [
      "Plutôt que de comparer seul des dizaines d'itinéraires, confiez-nous votre projet : ville de départ, destination, dates et préférences. Nous identifions les options les plus pertinentes en termes de prix, de durée et de correspondances.",
      "De la réservation au départ, vous bénéficiez d'un interlocuteur clair et d'un suivi attentif, pour voyager l'esprit tranquille.",
    ],
  },
  includedTitle: "Notre accompagnement billets avion",
  included: [
    "Recherche d'itinéraire personnalisée",
    "Vols internationaux aller simple ou aller-retour",
    "Options multi-destinations",
    "Conseils sur les correspondances et durées",
    "Assistance à la réservation",
    "Suivi et rappels avant départ",
  ],
  notIncluded: [
    "Prix des billets (selon disponibilité au moment de la réservation)",
    "Bagages additionnels et options compagnie",
    "Assurances voyage (sur demande)",
  ],
  process: {
    title: "5 étapes simples, du besoin au décollage",
    steps: [
      { title: "Recherche de vol", text: "Vous nous indiquez départ, destination et dates." },
      { title: "Itinéraire confirmé", text: "Nous proposons les meilleures options." },
      { title: "Réservation", text: "Nous réservons le billet adapté à votre choix." },
      { title: "Accompagnement", text: "Nous répondons à vos questions avant départ." },
      { title: "Voyage serein", text: "Vous partez avec un dossier clair." },
    ],
  },
  benefits: {
    title: "Pourquoi réserver vos billets avec SYANOR",
    features: [
      { title: "Itinéraires optimisés", desc: "Le meilleur équilibre prix / durée / confort.", icon: "compass" },
      { title: "Gain de temps", desc: "Nous comparons à votre place.", icon: "clock" },
      { title: "Suivi humain", desc: "Un interlocuteur dédié, des réponses claires.", icon: "hand-heart" },
      { title: "Flexibilité", desc: "Aller simple, retour ou multi-destinations.", icon: "route" },
      { title: "Clarté", desc: "Un dossier de voyage limpide.", icon: "check" },
      { title: "Assistance", desc: "Disponibilité avant le départ.", icon: "phone" },
    ],
  },
  packComparison: {
    eyebrow: "Nos formules",
    title: "Choisissez votre formule billet avion",
    subtitle: "Du billet simple à l'assistance dédiée — comparez nos formules et demandez votre devis.",
    formulas: PACK_PRESETS.avion.formulas,
  },
  activityConfigurator: {
    activity: "avion",
    eyebrow: "Configurateur billet",
    title: "Trouvez votre billet en 5 étapes",
    subtitle: "Type, départ, destination, classe, passagers : préparez votre demande en quelques clics.",
  },
  related: getOffersByCategory(["Billet avion", "Voyage organisé"]),
  faq: [
    {
      question: "Quelles informations fournir pour un billet d'avion ?",
      answer:
        "Votre ville de départ, votre destination, vos dates souhaitées (ou une fourchette), le nombre de voyageurs et vos préférences éventuelles (direct, classe, compagnie).",
    },
    {
      question: "Proposez-vous des billets multi-destinations ?",
      answer:
        "Oui. Nous organisons les itinéraires multi-villes et vous conseillons sur les correspondances et l'ordre des étapes.",
    },
    {
      question: "Les prix affichés sont-ils garantis ?",
      answer:
        "Les tarifs aériens varient en temps réel. Nous vous communiquons le prix au moment de la réservation ; il est confirmé une fois le billet émis.",
    },
    {
      question: "Pouvez-vous gérer un aller simple ?",
      answer:
        "Bien sûr, nous traitons aussi bien les allers simples que les aller-retours et les itinéraires complexes.",
    },
  ],
  cta: {
    title: "Réservez votre billet d'avion en toute sérénité.",
    body: "Indiquez-nous votre trajet et vos dates : nous revenons vers vous avec les meilleures options.",
    ctaLabel: "Demander mon billet",
    ctaHref: quoteHref,
    secondary: { label: "Billets bateau", href: "/services/billets-bateau" },
  },
  stickyLabel: "Demander un billet avion",
};

export default function BilletsAvionPage() {
  return <DeepServicePage config={config} />;
}
