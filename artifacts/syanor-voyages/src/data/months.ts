export interface OmraMonth {
  slug: string;
  label: string;
  labelFull: string;
  year: "2026" | "2027";
  yearPath: string;
  href: string;
  dateRange: string;
  departureCount: number;
  hasConfirmedDates: boolean;
  description: string;
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
}

export const omraMonths: OmraMonth[] = [
  {
    slug: "septembre",
    label: "Septembre",
    labelFull: "Septembre 2026",
    year: "2026",
    yearPath: "omra-2026",
    href: "/omra-factory/omra-2026/septembre",
    dateRange: "Septembre 2026",
    departureCount: 0,
    hasConfirmedDates: false,
    description:
      "Départs Omra depuis Nice et Marseille en septembre 2026. Dates en cours de confirmation — inscrivez-vous pour être contacté en priorité.",
    seoTitle: "Omra Septembre 2026 | SYANOR VOYAGES",
    seoDescription:
      "Découvrez les départs Omra de septembre 2026 depuis Nice et Marseille. Accompagnement, hôtels sélectionnés, transferts et devis personnalisé.",
  },
  {
    slug: "octobre",
    label: "Octobre",
    labelFull: "Octobre 2026",
    year: "2026",
    yearPath: "omra-2026",
    href: "/omra-factory/omra-2026/octobre",
    dateRange: "18 Oct. et 28 Oct. 2026",
    departureCount: 2,
    hasConfirmedDates: true,
    description:
      "Deux départs Omra en octobre 2026 depuis Nice / Marseille : le 18 et le 28 octobre. Séjours de 12 jours incluant Médine et Makkah.",
    seoTitle: "Omra Octobre 2026 | SYANOR VOYAGES",
    seoDescription:
      "Omra octobre 2026 depuis Nice et Marseille — 2 départs disponibles, accompagnement complet, hôtels et Ziyarat inclus. Demandez votre devis.",
    featured: true,
  },
  {
    slug: "novembre",
    label: "Novembre",
    labelFull: "Novembre 2026",
    year: "2026",
    yearPath: "omra-2026",
    href: "/omra-factory/omra-2026/novembre",
    dateRange: "11 Nov. et 25 Nov. 2026",
    departureCount: 2,
    hasConfirmedDates: true,
    description:
      "Deux départs Omra en novembre 2026 depuis Nice / Marseille : le 11 et le 25 novembre. Accompagnement spirituel, hôtels et Ziyarat inclus.",
    seoTitle: "Omra Novembre 2026 | SYANOR VOYAGES",
    seoDescription:
      "Omra novembre 2026 depuis Nice et Marseille — 2 départs confirmés, hôtels sélectionnés, Ziyarat et accompagnement. Devis personnalisé.",
    featured: true,
  },
  {
    slug: "decembre",
    label: "Décembre",
    labelFull: "Décembre 2026",
    year: "2026",
    yearPath: "omra-2026",
    href: "/omra-factory/omra-2026/decembre",
    dateRange: "20 Déc. et 22 Déc. 2026",
    departureCount: 2,
    hasConfirmedDates: true,
    description:
      "Terminez l'année aux Lieux Saints avec deux départs Omra en décembre 2026 depuis Nice / Marseille : le 20 et le 22 décembre.",
    seoTitle: "Omra Décembre 2026 | SYANOR VOYAGES",
    seoDescription:
      "Omra décembre 2026 depuis Nice et Marseille — partez en fin d'année aux Lieux Saints avec accompagnement complet et hôtels sélectionnés.",
    featured: true,
  },
  {
    slug: "janvier",
    label: "Janvier",
    labelFull: "Janvier 2027",
    year: "2027",
    yearPath: "omra-2027",
    href: "/omra-factory/omra-2027/janvier",
    dateRange: "17–28 Janv. 2027",
    departureCount: 1,
    hasConfirmedDates: true,
    description:
      "Départ Omra depuis Nice / Marseille le 17 janvier 2027, retour le 28 janvier. Commencez l'année 2027 par un séjour spirituel de 12 jours.",
    seoTitle: "Omra Janvier 2027 | SYANOR VOYAGES",
    seoDescription:
      "Omra janvier 2027 depuis Nice et Marseille — départ le 17 janvier, 12 jours aux Lieux Saints avec accompagnement, hôtels et Ziyarat.",
  },
  {
    slug: "fevrier",
    label: "Février",
    labelFull: "Février 2027",
    year: "2027",
    yearPath: "omra-2027",
    href: "/omra-factory/omra-2027/fevrier",
    dateRange: "4, 16 et 27 Fév. 2027",
    departureCount: 3,
    hasConfirmedDates: true,
    description:
      "Trois départs Omra en février 2027 depuis Nice / Marseille : les 4, 16 et 27 février. Le mois avec le plus de départs disponibles.",
    seoTitle: "Omra Février 2027 | SYANOR VOYAGES",
    seoDescription:
      "Omra février 2027 depuis Nice et Marseille — 3 départs au choix (4, 16, 27 fév.), hôtels sélectionnés, accompagnement et Ziyarat inclus.",
    featured: true,
  },
  {
    slug: "mars",
    label: "Mars",
    labelFull: "Mars 2027",
    year: "2027",
    yearPath: "omra-2027",
    href: "/omra-factory/omra-2027/mars",
    dateRange: "9 Mar. et 22 Mar. 2027 + Séjour 34j",
    departureCount: 3,
    hasConfirmedDates: true,
    description:
      "Plusieurs départs Omra en mars 2027, dont un séjour exceptionnel de 34 jours. Depuis Nice / Marseille avec accompagnement spirituel complet.",
    seoTitle: "Omra Mars 2027 | SYANOR VOYAGES",
    seoDescription:
      "Omra mars 2027 depuis Nice et Marseille — départs les 9 et 22 mars, plus un séjour exceptionnel de 34 jours. Devis personnalisé.",
    featured: true,
  },
  {
    slug: "avril",
    label: "Avril",
    labelFull: "Avril 2027",
    year: "2027",
    yearPath: "omra-2027",
    href: "/omra-factory/omra-2027/avril",
    dateRange: "5–16 Avr. 2027",
    departureCount: 1,
    hasConfirmedDates: true,
    description:
      "Dernier départ Omra du programme 2026-2027 : Nice / Marseille le 5 avril 2027, retour le 16 avril. Profitez du printemps aux Lieux Saints.",
    seoTitle: "Omra Avril 2027 | SYANOR VOYAGES",
    seoDescription:
      "Omra avril 2027 depuis Nice et Marseille — départ le 5 avril, retour le 16. 12 jours spirituels avec accompagnement, hôtels et Ziyarat.",
  },
];

export function getMonthBySlug(slug: string, year?: "2026" | "2027"): OmraMonth | undefined {
  return omraMonths.find((m) => m.slug === slug && (year === undefined || m.year === year));
}

export function getMonthsByYear(year: "2026" | "2027"): OmraMonth[] {
  return omraMonths.filter((m) => m.year === year);
}
