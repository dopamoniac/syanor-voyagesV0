type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { PACK_PRESETS } from "@/components/ui/PackComparisonCards";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Billets Bateau & Ferry | SYANOR VOYAGES",
  description:
    "Organisez vos traversées ferry avec assistance, conseils ports et horaires, option véhicule et accompagnement client. Aller simple ou aller-retour.",
  alternates: { canonical: "/services/billets-bateau" },
};

const quoteHref = quoteUrl({ service: "Billet bateau", transport: "Bateau" });

const config: DeepServiceConfig = {
  heroImage: "/services/billets-bateau.png",
  eyebrow: "Billets bateau / ferry",
  title: "Traversées ferry : organisées, claires et accompagnées.",
  subtitle:
    "Aller simple ou aller-retour, conseils sur les ports et horaires, option véhicule lorsque cela s'applique : nous facilitons vos traversées maritimes.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Billets Bateau" },
  ],
  quoteHref,
  intro: {
    heading: "Votre traversée en bateau, sans mauvaise surprise.",
    paragraphs: [
      "Les traversées ferry impliquent ports, horaires, formules cabines et parfois l'embarquement d'un véhicule. Nous vous orientons vers la solution la plus adaptée à votre trajet et à votre confort.",
      "Vous recevez des informations claires sur les documents nécessaires et un accompagnement avant le départ.",
    ],
  },
  includedTitle: "Notre accompagnement billets bateau",
  included: [
    "Traversées ferry aller simple ou aller-retour",
    "Conseils sur les ports et les horaires",
    "Option véhicule (selon compagnie et disponibilité)",
    "Informations sur les documents requis",
    "Assistance à la réservation",
    "Suivi avant départ",
  ],
  notIncluded: [
    "Prix des traversées (selon compagnie et période)",
    "Suppléments cabine / véhicule",
    "Assurances (sur demande)",
  ],
  process: {
    title: "Votre traversée en 5 étapes",
    steps: [
      { title: "Choix de la traversée", text: "Vous indiquez ports, dates et passagers." },
      { title: "Port & date confirmés", text: "Nous validons l'itinéraire le plus adapté." },
      { title: "Option véhicule", text: "Ajout du véhicule si nécessaire." },
      { title: "Documents", text: "Vous recevez les informations utiles." },
      { title: "Traversée accompagnée", text: "Vous voyagez l'esprit tranquille." },
    ],
  },
  benefits: {
    title: "Pourquoi réserver vos traversées avec SYANOR",
    features: [
      { title: "Conseils ports & horaires", desc: "Le bon départ au bon moment.", icon: "anchor" },
      { title: "Option véhicule", desc: "Embarquez votre voiture facilement.", icon: "route" },
      { title: "Documents clairs", desc: "Vous savez exactement quoi préparer.", icon: "book" },
      { title: "Gain de temps", desc: "Nous gérons les démarches.", icon: "clock" },
      { title: "Assistance", desc: "Un interlocuteur dédié.", icon: "hand-heart" },
      { title: "Sérénité", desc: "Une traversée bien préparée.", icon: "shield" },
    ],
  },
  packComparison: {
    eyebrow: "Nos formules",
    title: "Choisissez votre formule traversée",
    subtitle: "Fauteuil, cabine, véhicule — comparez les formules et demandez votre devis.",
    formulas: PACK_PRESETS.bateau.formulas,
  },
  activityConfigurator: {
    activity: "bateau",
    eyebrow: "Configurateur traversée",
    title: "Préparez votre traversée en 5 étapes",
    subtitle: "Type, port, destination, véhicule, cabine : composez votre traversée idéale.",
  },
  related: getOffersByCategory(["Billet bateau", "Voyage organisé"]),
  faq: [
    {
      question: "Puis-je embarquer mon véhicule ?",
      answer:
        "Oui, selon la compagnie et la disponibilité. Indiquez le type et les dimensions du véhicule pour que nous confirmions l'option et le tarif.",
    },
    {
      question: "Quels documents sont nécessaires pour une traversée ?",
      answer:
        "Cela dépend de la destination et de la compagnie. Nous vous communiquons la liste précise des documents à prévoir lors de la réservation.",
    },
    {
      question: "Proposez-vous des allers simples ?",
      answer:
        "Oui, nous organisons aussi bien les allers simples que les aller-retours selon vos besoins.",
    },
    {
      question: "Comment obtenir un devis pour une traversée ?",
      answer:
        "Indiquez vos ports de départ et d'arrivée, vos dates, le nombre de passagers et l'option véhicule éventuelle dans le formulaire de devis.",
    },
  ],
  cta: {
    title: "Organisez votre traversée ferry en toute simplicité.",
    body: "Précisez vos ports, vos dates et l'option véhicule : nous vous proposons la meilleure solution.",
    ctaLabel: "Demander une traversée",
    ctaHref: quoteHref,
    secondary: { label: "Billets avion", href: "/services/billets-avion" },
  },
  stickyLabel: "Demander une traversée",
};

export default function BilletsBateauPage() {
  return <DeepServicePage config={config} />;
}
