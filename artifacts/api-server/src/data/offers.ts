export interface TravelOffer {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  price: number;
  currency: string;
  departures: string[];
  category: "circuit" | "sejour" | "croisiere" | "city-break";
  highlights: string[];
  description: string;
  rating: number;
  reviews: number;
}

export interface OmraPackage {
  id: string;
  title: string;
  duration: string;
  price: number;
  currency: string;
  departures: string[];
  departure_city: string;
  hotel_mecca: string;
  hotel_medina: string;
  stars_mecca: number;
  stars_medina: number;
  nights_mecca: number;
  nights_medina: number;
  includes: string[];
  description: string;
  type: "economique" | "standard" | "premium" | "vip";
}

export const travelOffers: TravelOffer[] = [
  {
    id: "maroc-imperial",
    title: "Villes Impériales du Maroc",
    destination: "Marrakech, Fès, Meknès, Rabat",
    country: "Maroc",
    duration: "9 jours / 8 nuits",
    price: 1490,
    currency: "EUR",
    departures: ["15 Juil", "5 Août", "2 Sep", "7 Oct"],
    category: "circuit",
    highlights: ["Médina de Fès", "Palais Bahia", "Souk de Marrakech", "Jardins de Majorelle"],
    description: "Plongez dans la magie des villes impériales marocaines. Un voyage inoubliable entre culture millénaire, palais somptueux et marchés animés.",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "turquie-istanbul",
    title: "Istanbul & Cappadoce",
    destination: "Istanbul, Cappadoce, Pamukkale",
    country: "Turquie",
    duration: "10 jours / 9 nuits",
    price: 1690,
    currency: "EUR",
    departures: ["20 Juil", "10 Août", "14 Sep", "12 Oct"],
    category: "circuit",
    highlights: ["Sainte-Sophie", "Balloon Cappadoce", "Pamukkale", "Grand Bazar"],
    description: "Voyage entre deux continents, entre Orient et Occident. Découvrez les merveilles de la Turquie de la Bosphore aux cheminées de fée.",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "egypte-pharaons",
    title: "Egypte des Pharaons",
    destination: "Le Caire, Louxor, Assouan, Alexandrie",
    country: "Egypte",
    duration: "9 jours / 8 nuits",
    price: 1350,
    currency: "EUR",
    departures: ["18 Oct", "15 Nov", "10 Jan", "7 Fév"],
    category: "circuit",
    highlights: ["Pyramides de Gizeh", "Vallée des Rois", "Croisière sur le Nil", "Temple de Karnak"],
    description: "Remontez le temps aux côtés des pharaons. Ce circuit vous emmène au cœur de l'une des plus grandes civilisations de l'Histoire.",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: "dubai-abu-dhabi",
    title: "Dubaï & Abu Dhabi",
    destination: "Dubaï, Abu Dhabi",
    country: "Émirats Arabes Unis",
    duration: "7 jours / 6 nuits",
    price: 1890,
    currency: "EUR",
    departures: ["1 Sep", "15 Oct", "1 Nov", "20 Déc"],
    category: "city-break",
    highlights: ["Burj Khalifa", "Désert Safari", "Mosquée Sheikh Zayed", "Palm Jumeirah"],
    description: "Vivez l'expérience ultra-moderne des Émirats. Entre gratte-ciels vertigineux, désert doré et luxe absolu.",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: "andalousie",
    title: "Andalousie & Grenade",
    destination: "Séville, Cordoue, Grenade, Malaga",
    country: "Espagne",
    duration: "8 jours / 7 nuits",
    price: 1250,
    currency: "EUR",
    departures: ["5 Avr", "10 Mai", "20 Sep", "5 Oct"],
    category: "circuit",
    highlights: ["Alhambra de Grenade", "Mosquée-Cathédrale de Cordoue", "Alcázar de Séville", "Tapas Tour"],
    description: "Découvrez l'Andalousie, terre de rencontres entre l'Europe et le monde arabe, entre flamenco et architecture mauresque.",
    rating: 4.8,
    reviews: 91,
  },
  {
    id: "maldives-sejour",
    title: "Maldives Luxe",
    destination: "Atoll de Malé, North Malé",
    country: "Maldives",
    duration: "8 jours / 7 nuits",
    price: 3490,
    currency: "EUR",
    departures: ["15 Jan", "1 Fév", "15 Mar", "5 Avr"],
    category: "sejour",
    highlights: ["Bungalow sur l'eau", "Snorkeling", "Spa & Bien-être", "Gastronomie"],
    description: "Paradis de l'océan Indien, les Maldives vous offrent des lagons turquoise, des récifs coralliens et une hospitalité hors du commun.",
    rating: 5.0,
    reviews: 45,
  },
];

export const omraPackages: OmraPackage[] = [
  {
    id: "omra-economique-paris",
    title: "Omra Économique",
    duration: "14 jours / 13 nuits",
    price: 2190,
    currency: "EUR",
    departures: ["10 Sep", "1 Oct", "15 Oct", "5 Nov"],
    departure_city: "Paris CDG",
    hotel_mecca: "Hôtel Al Marwa Rayhaan",
    hotel_medina: "Hôtel Pullman Zamzam",
    stars_mecca: 4,
    stars_medina: 4,
    nights_mecca: 7,
    nights_medina: 6,
    includes: ["Vol A/R", "Hébergement", "Petit-déjeuner & dîner", "Transferts", "Guide accompagnateur", "Visa Omra"],
    description: "Package idéal pour accomplir votre Omra dans les meilleures conditions, avec un hébergement de qualité à proximité des Lieux Saints.",
    type: "economique",
  },
  {
    id: "omra-standard-lyon",
    title: "Omra Standard",
    duration: "14 jours / 13 nuits",
    price: 2590,
    currency: "EUR",
    departures: ["8 Sep", "20 Oct", "10 Nov", "2 Déc"],
    departure_city: "Lyon",
    hotel_mecca: "Hôtel Millenium Makkah",
    hotel_medina: "Hôtel Oberoi Madinah",
    stars_mecca: 5,
    stars_medina: 5,
    nights_mecca: 7,
    nights_medina: 6,
    includes: ["Vol A/R", "Hébergement 5★", "Demi-pension", "Transferts VIP", "Guide religieux", "Visa Omra", "Ziyarat"],
    description: "Offrez-vous un séjour spirituel dans le confort et la sérénité. Hôtels 5 étoiles à 200m de la Mosquée Al-Haram.",
    type: "standard",
  },
  {
    id: "omra-premium-nice",
    title: "Omra Premium",
    duration: "14 jours / 13 nuits",
    price: 3290,
    currency: "EUR",
    departures: ["3 Sep", "15 Oct", "5 Nov", "12 Déc"],
    departure_city: "Nice",
    hotel_mecca: "Hôtel Raffles Makkah Palace",
    hotel_medina: "Anwar Al Madinah Mövenpick",
    stars_mecca: 5,
    stars_medina: 5,
    nights_mecca: 8,
    nights_medina: 6,
    includes: ["Vol A/R Business", "Suite hôtel 5★", "Pension complète", "Transferts limousine", "Imam accompagnateur", "Visa Omra", "Ziyarat complet", "Assurance voyage"],
    description: "La quintessence du voyage spirituel. Suites luxueuses avec vue sur la Kaaba, accompagnement personnalisé et confort absolu.",
    type: "premium",
  },
  {
    id: "omra-vip-marseille",
    title: "Omra VIP Exclusif",
    duration: "10 jours / 9 nuits",
    price: 4890,
    currency: "EUR",
    departures: ["Sur demande"],
    departure_city: "Marseille",
    hotel_mecca: "Hôtel Swissôtel Makkah",
    hotel_medina: "Hôtel Anwar Al Madinah",
    stars_mecca: 5,
    stars_medina: 5,
    nights_mecca: 5,
    nights_medina: 4,
    includes: ["Vol A/R Première Classe", "Suite présidentielle", "Pension complète + snacks", "Chauffeur privé", "Imam dédié", "Visa Express", "Ziyarat privé", "Assurance premium", "Cadeau de bienvenue"],
    description: "Une expérience spirituelle d'exception, tout en intimité et exclusivité. Service personnalisé 24h/24 pour les pèlerins exigeants.",
    type: "vip",
  },
];
