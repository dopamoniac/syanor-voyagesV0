type Metadata = Record<string, unknown>;
import DeepServicePage, { type DeepServiceConfig } from "@/components/sections/DeepServicePage";
import { PACK_PRESETS } from "@/components/ui/PackComparisonCards";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Vols Internationaux | SYANOR VOYAGES",
  description:
    "Vols internationaux long-courriers, business class et multi-destinations. Recherche d'itinéraires optimisés, tarifs négociés et accompagnement personnalisé.",
  alternates: { canonical: "/agence/services/vols-internationaux" },
};

const quoteHref = quoteUrl({ service: "Vols internationaux", transport: "Avion" });

const config: DeepServiceConfig = {
  heroImage: "/services/billets-avion.png",
  heroFloating: true,
  heroCategory: "Billet avion",
  eyebrow: "Vols internationaux",
  title: "Vols internationaux : long-courriers, business class et multi-destinations.",
  subtitle:
    "Europe, Afrique, Amériques, Asie — nous recherchons les meilleurs itinéraires, négocions les tarifs et vous accompagnons pour chaque étape de votre voyage international.",
  crumbs: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/agence/services" },
    { label: "Vols Internationaux" },
  ],
  quoteHref,
  intro: {
    heading: "Le monde entier, à portée de siège.",
    paragraphs: [
      "Un vol international n'est pas qu'un billet : c'est un itinéraire à construire — compagnies, correspondances, classes, franchises bagages, conditions de modification. Nous décryptons chaque paramètre pour vous proposer l'option la plus adaptée à votre voyage et à votre budget.",
      "Aller simple vers une destination lointaine, aller-retour avec escale optimisée ou circuit multi-destinations sur plusieurs semaines : nous concevons l'itinéraire et vous accompagnons jusqu'au départ.",
    ],
  },
  includedTitle: "Notre accompagnement vols internationaux",
  included: [
    "Recherche d'itinéraire sur toutes destinations mondiales",
    "Comparaison multi-compagnies et classes (éco, affaires, première)",
    "Options aller simple, aller-retour, multi-destinations",
    "Conseils escales, correspondances et durées optimales",
    "Assistance à la réservation et émission du billet",
    "Suivi pré-départ et rappels documents",
  ],
  notIncluded: [
    "Prix des billets (variables selon compagnie, classe et période)",
    "Bagages supplémentaires et upgrades compagnie",
    "Visa et formalités d'entrée (sur demande via notre service visas)",
  ],
  process: {
    title: "Votre vol international en 5 étapes",
    steps: [
      { title: "Brief voyage", text: "Destination, dates, classe souhaitée et préférences compagnie." },
      { title: "Sélection d'itinéraires", text: "Nous présentons les meilleures options disponibles." },
      { title: "Validation", text: "Vous choisissez, nous réservons immédiatement." },
      { title: "Dossier de vol", text: "Confirmation, e-tickets et informations escales." },
      { title: "Départ serein", text: "Vous êtes prêt, nous restons disponibles en cas de besoin." },
    ],
  },
  benefits: {
    title: "Pourquoi confier vos vols internationaux à SYANOR",
    features: [
      { title: "Couverture mondiale", desc: "Toutes compagnies, toutes destinations, toutes classes.", icon: "compass" },
      { title: "Tarifs optimisés", desc: "Accès à des tarifs négociés et des itinéraires alternatifs.", icon: "star" },
      { title: "Multi-destinations", desc: "Circuits complexes gérés comme une formalité.", icon: "route" },
      { title: "Business & Premium", desc: "Conseils sur les classes affaires et options premium.", icon: "shield" },
      { title: "Gain de temps", desc: "Nous comparons à votre place, vous validez en un clic.", icon: "clock" },
      { title: "Suivi humain", desc: "Un interlocuteur disponible de la réservation au retour.", icon: "hand-heart" },
    ],
  },
  packComparison: {
    eyebrow: "Nos formules",
    title: "Choisissez votre formule vol international",
    subtitle: "Billet simple, flexible ou avec assistance dédiée — comparez et demandez votre devis.",
    formulas: PACK_PRESETS.avion.formulas,
  },
  activityConfigurator: {
    activity: "avion",
    eyebrow: "Configurateur vol",
    title: "Composez votre vol international en 5 étapes",
    subtitle: "Classe, destination, dates, options — préparez votre demande en quelques clics.",
  },
  related: getOffersByCategory(["Billet avion", "Voyage organisé"]),
  faq: [
    {
      question: "Proposez-vous des billets business class ou première classe ?",
      answer:
        "Oui. Nous recherchons les meilleures disponibilités en classe affaires et première, ainsi que les options d'upgrade selon les compagnies.",
    },
    {
      question: "Pouvez-vous organiser des circuits multi-destinations complexes ?",
      answer:
        "Absolument. Nous concevons des itinéraires sur mesure avec plusieurs étapes, en optimisant les correspondances et les durées de vol à chaque segment.",
    },
    {
      question: "Les tarifs varient-ils en fonction de la période ?",
      answer:
        "Oui, les tarifs aériens sont dynamiques. Nous vous informons des meilleures fenêtres de réservation et vous communiquons le prix exact au moment de la confirmation.",
    },
    {
      question: "Gérez-vous également les formalités d'entrée (visa, passeport) ?",
      answer:
        "Nous vous orientons sur les documents nécessaires. Pour une assistance visa complète, notre service dédié prend en charge les démarches consulaires.",
    },
  ],
  cta: {
    title: "Votre prochaine destination, partout dans le monde.",
    body: "Indiquez-nous votre destination, vos dates et votre classe souhaitée : nous revenons vers vous avec les meilleures options disponibles.",
    ctaLabel: "Demander mon vol international",
    ctaHref: quoteHref,
    secondary: { label: "Billets groupe", href: "/agence/services/billets-groupe" },
  },
  stickyLabel: "Demander un vol international",
};

export default function VolsInternationauxPage() {
  return <DeepServicePage config={config} />;
}
