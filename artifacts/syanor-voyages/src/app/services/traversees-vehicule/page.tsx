type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { PACK_PRESETS } from "@/components/ui/PackComparisonCards";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Traversées avec Véhicule | SYANOR VOYAGES",
  description:
    "Traversées ferry avec embarquement véhicule : voiture, utilitaire ou camping-car. Conseils ports, horaires, cabines et assistance complète pour votre traversée.",
  alternates: { canonical: "/agence/services/traversees-vehicule" },
};

const quoteHref = quoteUrl({ service: "Traversée véhicule", transport: "Bateau" });

const config: DeepServiceConfig = {
  heroImage: "/services/billets-bateau.png",
  eyebrow: "Traversées avec véhicule",
  title: "Embarquez votre véhicule : traversées ferry organisées et sans stress.",
  subtitle:
    "Voiture, utilitaire ou camping-car — nous gérons la réservation du fret, la cabine et tous les documents pour une traversée maritime sereine.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/agence/services" },
    { label: "Traversées avec Véhicule" },
  ],
  quoteHref,
  intro: {
    heading: "Votre voiture embarque avec vous.",
    paragraphs: [
      "Traverser la Méditerranée ou le détroit avec un véhicule implique des contraintes spécifiques : dimensions du véhicule, places fret disponibles, compagnies acceptant les utilitaires ou camping-cars, et documents exigés à l'embarquement.",
      "Nous identifions la traversée adaptée à votre type de véhicule, réservons la place fret et la cabine, et vous fournissons toutes les informations nécessaires pour embarquer sans imprévu.",
    ],
  },
  includedTitle: "Notre accompagnement traversée avec véhicule",
  included: [
    "Sélection de la compagnie selon type et dimensions du véhicule",
    "Réservation place fret + espace passagers",
    "Conseils ports d'embarquement et horaires optimaux",
    "Option cabine privée (2 ou 4 personnes)",
    "Liste documents requis pour le véhicule",
    "Assistance et suivi avant départ",
  ],
  notIncluded: [
    "Prix de la traversée et du fret véhicule (selon compagnie et période)",
    "Carburant et péages sur route",
    "Assurances véhicule pour la traversée (sur demande)",
  ],
  process: {
    title: "Votre traversée avec véhicule en 5 étapes",
    steps: [
      { title: "Données véhicule", text: "Type, marque, dimensions et nombre de passagers." },
      { title: "Sélection compagnie", text: "Nous choisissons la meilleure option fret disponible." },
      { title: "Réservation complète", text: "Place fret + cabine réservées simultanément." },
      { title: "Documents & check-list", text: "Vous recevez la liste exacte à préparer." },
      { title: "Embarquement serein", text: "Arrivez au port prêt, sans stress ni file d'attente." },
    ],
  },
  benefits: {
    title: "Pourquoi réserver votre traversée véhicule avec SYANOR",
    features: [
      { title: "Expertise fret", desc: "Maîtrise des compagnies et contraintes véhicules.", icon: "bus" },
      { title: "Cabine garantie", desc: "Repos assuré pendant la traversée.", icon: "shield" },
      { title: "Documents clairs", desc: "Vous savez exactement quoi préparer.", icon: "book" },
      { title: "Ports optimisés", desc: "Le bon port au bon horaire pour votre trajet.", icon: "anchor" },
      { title: "Gain de temps", desc: "Pas de file d'attente le jour J grâce à la réservation.", icon: "clock" },
      { title: "Suivi humain", desc: "Un interlocuteur disponible jusqu'à l'embarquement.", icon: "hand-heart" },
    ],
  },
  packComparison: {
    eyebrow: "Nos formules",
    title: "Choisissez votre formule traversée avec véhicule",
    subtitle: "Fauteuil, cabine ou pack véhicule complet — comparez et demandez votre devis.",
    formulas: PACK_PRESETS.bateau.formulas,
  },
  activityConfigurator: {
    activity: "bateau",
    eyebrow: "Configurateur traversée",
    title: "Préparez votre traversée avec véhicule en 5 étapes",
    subtitle: "Type de véhicule, port, date, cabine et options — composez votre demande en quelques clics.",
  },
  related: getOffersByCategory(["Billet bateau", "Voyage organisé"]),
  faq: [
    {
      question: "Quels types de véhicules peuvent embarquer ?",
      answer:
        "La plupart des compagnies acceptent voitures, SUV, utilitaires légers et camping-cars. Des restrictions de hauteur ou de longueur s'appliquent selon les ferries. Indiquez-nous les dimensions exactes de votre véhicule.",
    },
    {
      question: "Faut-il des documents spéciaux pour embarquer avec un véhicule ?",
      answer:
        "Oui : carte grise, assurance, et selon la destination, un carnet de passages en douanes peut être exigé. Nous vous communiquons la liste complète à la réservation.",
    },
    {
      question: "Peut-on accéder au véhicule pendant la traversée ?",
      answer:
        "Non, l'accès au pont garage est interdit en mer sur la plupart des compagnies. Prévoyez tout le nécessaire avant d'embarquer.",
    },
    {
      question: "Proposez-vous des cabines pour les longues traversées ?",
      answer:
        "Oui. Pour les traversées nocturnes ou longues durées, nous réservons systématiquement une cabine privée afin de vous garantir confort et repos.",
    },
  ],
  cta: {
    title: "Traversez avec votre véhicule, sans complications.",
    body: "Indiquez-nous votre type de véhicule, vos ports et vos dates : nous vous proposons la meilleure traversée disponible.",
    ctaLabel: "Demander ma traversée véhicule",
    ctaHref: quoteHref,
    secondary: { label: "Billets bateau sans véhicule", href: "/agence/services/billets-bateau" },
  },
  stickyLabel: "Demander une traversée véhicule",
};

export default function TraverseesVehiculePage() {
  return <DeepServicePage config={config} />;
}
