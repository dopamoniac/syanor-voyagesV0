export interface DepartureCity {
  slug: string;
  name: string;
  region: string;
  country: string;
  airportCode: string;
  airportName: string;
  outboundRoute: string;
  inboundRoute: string;
  priority: 1 | 2 | 3;
  confirmed: boolean;
  description: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  travelNote?: string;
}

export const departureCities: DepartureCity[] = [
  {
    slug: "nice",
    name: "Nice",
    region: "Provence-Alpes-Côte d'Azur",
    country: "France",
    airportCode: "NCE",
    airportName: "Aéroport Nice Côte d'Azur",
    outboundRoute: "Nice → Médine",
    inboundRoute: "Djeddah → Nice",
    priority: 1,
    confirmed: true,
    description:
      "Départs Omra confirmés depuis Nice. SYANOR organise des vols au départ de l'aéroport Nice Côte d'Azur vers Médine, avec retour depuis Djeddah. La solution idéale pour les pèlerins du Sud-Est de la France.",
    heroDescription:
      "Votre Omra commence à Nice. Depuis l'aéroport Nice Côte d'Azur, SYANOR vous accompagne directement vers Médine avec programme complet et assistance du premier contact au retour.",
    seoTitle: "Omra Départ Nice | SYANOR VOYAGES",
    seoDescription:
      "Consultez les départs Omra depuis Nice avec vols, hébergement Médine et Makkah, transferts, accompagnement spirituel et devis personnalisé.",
    travelNote: "Vol direct ou avec correspondance selon les dates. Itinéraire confirmé sur devis.",
  },
  {
    slug: "marseille",
    name: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    country: "France",
    airportCode: "MRS",
    airportName: "Aéroport Marseille Provence",
    outboundRoute: "Marseille → Médine",
    inboundRoute: "Djeddah → Marseille",
    priority: 1,
    confirmed: true,
    description:
      "Départs Omra confirmés depuis Marseille. SYANOR organise des vols au départ de l'aéroport Marseille Provence vers Médine, avec retour depuis Djeddah. La porte d'entrée Omra pour les pèlerins du Sud.",
    heroDescription:
      "Votre Omra commence à Marseille. Depuis l'aéroport Marseille Provence, SYANOR vous accompagne vers Médine avec programme spirituel complet, hôtels sélectionnés et assistance dédiée.",
    seoTitle: "Omra Départ Marseille | SYANOR VOYAGES",
    seoDescription:
      "Consultez les départs Omra depuis Marseille avec vols, hébergement, transferts, accompagnement spirituel et devis personnalisé.",
    travelNote: "Itinéraire identique à Nice selon les dates. Vol confirmé sur devis.",
  },
  {
    slug: "lyon",
    name: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
    airportCode: "LYS",
    airportName: "Aéroport Lyon Saint-Exupéry",
    outboundRoute: "Lyon → Médine (via correspondance)",
    inboundRoute: "Djeddah → Lyon (via correspondance)",
    priority: 2,
    confirmed: false,
    description:
      "Départs Omra depuis Lyon selon disponibilité. SYANOR recherche les meilleurs itinéraires au départ de Lyon Saint-Exupéry vers les Lieux Saints, avec ou sans correspondance.",
    heroDescription:
      "Votre Omra depuis Lyon. SYANOR organise votre départ depuis l'aéroport de Lyon Saint-Exupéry avec assistance complète pour votre voyage spirituel.",
    seoTitle: "Omra Départ Lyon | SYANOR VOYAGES",
    seoDescription:
      "Consultez les départs Omra depuis Lyon avec itinéraires, hébergement, accompagnement et devis personnalisé selon vos dates.",
    travelNote: "Itinéraire via correspondance. Disponibilité confirmée sur demande.",
  },
  {
    slug: "paris",
    name: "Paris",
    region: "Île-de-France",
    country: "France",
    airportCode: "CDG",
    airportName: "Aéroport Paris Charles de Gaulle",
    outboundRoute: "Paris CDG → Médine",
    inboundRoute: "Djeddah → Paris CDG",
    priority: 2,
    confirmed: false,
    description:
      "Départs Omra depuis Paris. SYANOR recherche les meilleurs vols au départ de Paris Charles de Gaulle ou Orly vers Médine, avec accompagnement spirituel complet.",
    heroDescription:
      "Votre Omra depuis Paris. Depuis CDG ou Orly, SYANOR vous accompagne vers les Lieux Saints avec programme complet, hôtels sélectionnés et assistance administrative.",
    seoTitle: "Omra Départ Paris | SYANOR VOYAGES",
    seoDescription:
      "Consultez les départs Omra depuis Paris avec vols, hébergement Médine et Makkah, transferts, accompagnement et demande de devis.",
    travelNote: "Plusieurs compagnies disponibles depuis CDG/Orly. Itinéraire sur devis.",
  },
  {
    slug: "toulouse",
    name: "Toulouse",
    region: "Occitanie",
    country: "France",
    airportCode: "TLS",
    airportName: "Aéroport Toulouse-Blagnac",
    outboundRoute: "Toulouse → Médine (via correspondance)",
    inboundRoute: "Djeddah → Toulouse (via correspondance)",
    priority: 3,
    confirmed: false,
    description:
      "Départs Omra depuis Toulouse sur demande. SYANOR organise des itinéraires personnalisés au départ de Toulouse-Blagnac vers les Lieux Saints.",
    heroDescription:
      "Votre Omra depuis Toulouse. SYANOR construit votre itinéraire depuis Toulouse-Blagnac avec accompagnement spirituel, hôtels et programme sur mesure.",
    seoTitle: "Omra Départ Toulouse | SYANOR VOYAGES",
    seoDescription:
      "Consultez les départs Omra depuis Toulouse avec itinéraire personnalisé, hébergement, accompagnement et devis sur demande.",
    travelNote: "Itinéraire avec correspondance selon les dates. Contactez-nous pour un devis.",
  },
  {
    slug: "bruxelles",
    name: "Bruxelles",
    region: "Région de Bruxelles-Capitale",
    country: "Belgique",
    airportCode: "BRU",
    airportName: "Aéroport de Bruxelles-Zaventem",
    outboundRoute: "Bruxelles → Médine (via correspondance)",
    inboundRoute: "Djeddah → Bruxelles (via correspondance)",
    priority: 3,
    confirmed: false,
    description:
      "Départs Omra depuis Bruxelles sur demande. SYANOR accompagne les pèlerins belges et frontaliers dans l'organisation de leur Omra depuis l'aéroport de Bruxelles-Zaventem.",
    heroDescription:
      "Votre Omra depuis Bruxelles. SYANOR organise votre départ depuis Zaventem avec programme spirituel complet, hôtels et assistance administrative.",
    seoTitle: "Omra Départ Bruxelles | SYANOR VOYAGES",
    seoDescription:
      "Consultez les départs Omra depuis Bruxelles avec itinéraire, hébergement, accompagnement spirituel et devis personnalisé.",
    travelNote: "Itinéraire avec correspondance. Disponibilité sur demande.",
  },
];

export function getCityBySlug(slug: string): DepartureCity | undefined {
  return departureCities.find((c) => c.slug === slug);
}

export function getPriorityCities(): DepartureCity[] {
  return departureCities.filter((c) => c.priority === 1);
}
