import type { TravelOffer } from "@/types";

/**
 * TODO: Replace placeholder offers with real, confirmed data from the agency.
 * Dates, prices and routes below are illustrative ("à confirmer" / "sur demande"
 * where not final) and must not be presented as official confirmed offers.
 */
export const offers: TravelOffer[] = [
  // ───────────── OMRA ─────────────
  {
    id: "omra-dec",
    slug: "omra-decembre-premium",
    title: "Omra Décembre — Premium",
    category: "Omra",
    summary:
      "Une Omra premium au cœur de l'hiver, avec hôtels sélectionnés à proximité des lieux saints et accompagnement spirituel complet.",
    departureDate: "20 Déc. 2025",
    returnDate: "31 Déc. 2025",
    duration: "12 jours / 11 nuits",
    departureCity: "Nice",
    arrivalCity: "Djeddah",
    outboundRoute: "Nice → Istanbul → Djeddah",
    inboundRoute: "Djeddah → Istanbul → Nice",
    transportType: "Avion",
    airlineOrCompany: "Compagnie régulière (à confirmer)",
    comfortLevel: "Premium",
    hotelLevel: "Hôtels sélectionnés 4★ (proximité Haram)",
    includedServices: [
      "Vols internationaux",
      "Hébergement Makkah & Madinah",
      "Transferts internes",
      "Ziyarat accompagnée",
      "Accompagnement spirituel",
      "Assistance 24/7",
    ],
    notIncluded: [
      "Visa Omra (assistance incluse)",
      "Repas non mentionnés",
      "Dépenses personnelles",
    ],
    program: [
      { day: "J1", title: "Départ de Nice", description: "Vol vers Djeddah via Istanbul, accueil et transfert vers Makkah." },
      { day: "J2–J6", title: "Séjour à Makkah", description: "Accomplissement de la Omra, prières au Haram et accompagnement spirituel." },
      { day: "J7", title: "Route vers Madinah", description: "Transfert vers Madinah et installation à l'hôtel." },
      { day: "J8–J11", title: "Séjour à Madinah", description: "Prières à la Mosquée du Prophète et Ziyarat des lieux historiques." },
      { day: "J12", title: "Retour", description: "Transfert vers l'aéroport et vol retour vers Nice." },
    ],
    documents: ["Passeport valide 6 mois", "Photos d'identité", "Carnet de vaccination (selon exigences)"],
    notes: ["Programme indicatif susceptible d'ajustement selon les vols et la logistique sur place."],
    priceFrom: "À partir de 1 790 €",
    availabilityStatus: "Places limitées",
    featured: true,
  },
  {
    id: "omra-classique",
    slug: "omra-classique-toute-annee",
    title: "Omra Classique — Toute l'année",
    category: "Omra",
    summary:
      "Une formule Omra accessible et bien encadrée, disponible selon vos dates tout au long de l'année.",
    duration: "10 à 12 jours",
    departureCity: "Paris / Province",
    transportType: "Avion",
    comfortLevel: "Standard",
    hotelLevel: "Hôtels 3★ / 4★ selon formule",
    includedServices: [
      "Vols internationaux",
      "Hébergement Makkah & Madinah",
      "Transferts",
      "Assistance visa",
      "Accompagnement",
    ],
    notIncluded: ["Repas non mentionnés", "Dépenses personnelles"],
    priceFrom: "Sur demande",
    availabilityStatus: "Disponible",
  },

  // ───────────── OMRA PLUS ─────────────
  {
    id: "omra-plus",
    slug: "omra-plus-vip",
    title: "Omra Plus — Expérience VIP",
    category: "Omra Plus",
    summary:
      "Notre programme spirituel le plus complet : hébergement premium, accompagnement renforcé et formation avant départ.",
    duration: "12 à 14 jours",
    transportType: "Avion",
    comfortLevel: "VIP",
    hotelLevel: "Hôtels 5★ très proches du Haram",
    departureCity: "Paris / Nice / Marseille",
    includedServices: [
      "Vols",
      "Hébergement premium",
      "Transferts privés",
      "Formation avant départ",
      "Ziyarat complète",
      "Accompagnement spirituel renforcé",
    ],
    notIncluded: ["Dépenses personnelles", "Options VIP additionnelles"],
    notes: ["Formule premium à composer selon vos préférences."],
    priceFrom: "À confirmer",
    availabilityStatus: "Sur demande",
    featured: true,
  },

  // ───────────── RAMADAN ─────────────
  {
    id: "omra-ramadan-10j",
    slug: "omra-ramadan-10-premiers-jours",
    title: "Omra Ramadan — 10 premiers jours",
    category: "Ramadan",
    summary:
      "Vivez les premiers jours du Ramadan à Makkah et Madinah dans un cadre serein et bien encadré.",
    duration: "10 nuits (± 1 jour)",
    departureCity: "Paris / Province",
    transportType: "Avion",
    comfortLevel: "Premium",
    hotelLevel: "Hôtels sélectionnés proches des mosquées",
    includedServices: [
      "Vols internationaux",
      "Hébergement",
      "Transferts",
      "Assistance visa",
      "Accompagnement spirituel",
    ],
    notIncluded: ["Repas non mentionnés", "Dépenses personnelles"],
    program: [
      { day: "J1", title: "Départ & arrivée à Makkah", description: "Vol vers Djeddah, accueil et transfert vers l'hôtel à Makkah." },
      { day: "J2–J6", title: "Premiers jours de Ramadan", description: "Prières au Haram, accomplissement de la Omra et accompagnement spirituel." },
      { day: "J7", title: "Route vers Madinah", description: "Transfert vers Madinah et installation." },
      { day: "J8–J10", title: "Séjour à Madinah", description: "Prières à la Mosquée du Prophète et Ziyarat." },
      { day: "J11", title: "Retour", description: "Transfert vers l'aéroport et vol retour." },
    ],
    documents: ["Passeport valide 6 mois", "Photos d'identité", "Carnet de vaccination (selon exigences)"],
    notes: ["Période très demandée : réservation anticipée recommandée. Dates confirmées sur demande."],
    priceFrom: "Sur demande",
    availabilityStatus: "Sur demande",
    featured: true,
  },
  {
    id: "omra-ramadan-express",
    slug: "omra-ramadan-express",
    title: "Omra Ramadan — Express",
    category: "Ramadan",
    summary:
      "Une formule courte pour vivre l'atmosphère spirituelle du Ramadan, plusieurs départs possibles.",
    duration: "5 nuits (± 1 jour)",
    departureCity: "Plusieurs villes",
    transportType: "Avion",
    comfortLevel: "Standard",
    hotelLevel: "Hôtels sélectionnés",
    includedServices: ["Vols", "Hébergement", "Transferts", "Assistance"],
    priceFrom: "Sur demande",
    availabilityStatus: "Places limitées",
  },

  // ───────────── HAJJ ─────────────
  {
    id: "hajj-2026",
    slug: "hajj-2026-accompagne",
    title: "Hajj 2026 — Programme accompagné",
    category: "Hajj",
    summary:
      "Un accompagnement complet pour accomplir le Hajj dans les meilleures conditions : organisation, préparation et assistance administrative.",
    duration: "À confirmer selon le calendrier officiel",
    departureCity: "France",
    transportType: "Avion",
    comfortLevel: "Premium",
    hotelLevel: "Hébergement selon formule",
    includedServices: [
      "Organisation complète",
      "Hébergement",
      "Transferts",
      "Préparation aux rites",
      "Accompagnement",
      "Assistance administrative",
    ],
    notIncluded: ["Dépenses personnelles"],
    notes: [
      "Les dates et modalités du Hajj dépendent du calendrier et des quotas officiels. Détails confirmés sur demande.",
    ],
    priceFrom: "Sur demande",
    availabilityStatus: "Sur demande",
  },

  // ───────────── BILLET AVION ─────────────
  {
    id: "billet-avion",
    slug: "billet-avion-international",
    title: "Billet Avion International",
    category: "Billet avion",
    summary:
      "Recherche d'itinéraires, réservation et suivi avant départ pour vos vols partout dans le monde.",
    transportType: "Avion",
    includedServices: [
      "Recherche d'itinéraire",
      "Aller simple ou aller-retour",
      "Assistance réservation",
      "Suivi avant départ",
    ],
    priceFrom: "Sur demande",
    availabilityStatus: "Disponible",
  },

  // ───────────── BILLET BATEAU ─────────────
  {
    id: "billet-bateau",
    slug: "billet-bateau-ferry",
    title: "Billet Bateau / Ferry",
    category: "Billet bateau",
    summary:
      "Traversées ferry en aller simple ou aller-retour, avec conseils ports et horaires et option véhicule.",
    transportType: "Bateau",
    includedServices: [
      "Traversée ferry",
      "Aller simple ou aller-retour",
      "Conseils ports et horaires",
      "Option véhicule si applicable",
      "Assistance client",
    ],
    priceFrom: "Sur demande",
    availabilityStatus: "Disponible",
  },

  // ───────────── VOYAGE ORGANISÉ ─────────────
  {
    id: "voyage-istanbul",
    slug: "voyage-organise-istanbul",
    title: "Voyage Organisé — Istanbul",
    category: "Voyage organisé",
    summary:
      "Découverte culturelle d'Istanbul en groupe : programme structuré, hôtels confortables et accompagnement.",
    duration: "5 jours / 4 nuits",
    departureCity: "Paris / Nice",
    arrivalCity: "Istanbul",
    transportType: "Avion",
    comfortLevel: "Premium",
    hotelLevel: "Hôtels 4★ centraux",
    includedServices: [
      "Vols",
      "Hébergement",
      "Transferts",
      "Programme culturel",
      "Accompagnement",
    ],
    notIncluded: ["Déjeuners libres", "Dépenses personnelles", "Visites optionnelles"],
    program: [
      { day: "J1", title: "Arrivée à Istanbul", description: "Accueil à l'aéroport, transfert et installation à l'hôtel." },
      { day: "J2", title: "Istanbul historique", description: "Découverte de la vieille ville et de ses monuments emblématiques." },
      { day: "J3", title: "Bosphore & bazars", description: "Balade le long du Bosphore et visite des bazars." },
      { day: "J4", title: "Quartiers & culture", description: "Exploration des quartiers et temps libre." },
      { day: "J5", title: "Départ", description: "Transfert vers l'aéroport et vol retour." },
    ],
    documents: ["Passeport ou pièce d'identité valide", "Visa selon nationalité (à vérifier)"],
    notes: ["Programme indicatif susceptible d'ajustement selon les conditions locales."],
    priceFrom: "Sur demande",
    availabilityStatus: "Disponible",
  },

  // ───────────── SÉJOUR SUR MESURE ─────────────
  {
    id: "sejour-mesure",
    slug: "sejour-premium-sur-mesure",
    title: "Séjour Premium Sur Mesure",
    category: "Séjour sur mesure",
    summary:
      "Un voyage entièrement composé autour de vos dates, votre confort et vos envies, avec assistance dédiée.",
    transportType: "Sur mesure",
    comfortLevel: "VIP",
    includedServices: [
      "Hôtel au choix",
      "Transferts privés",
      "Programme personnalisé",
      "Assistance dédiée",
    ],
    priceFrom: "Sur demande",
    availabilityStatus: "Sur demande",
  },

  // ───────────── PACK PERSONNALISÉ ─────────────
  {
    id: "pack-vip",
    slug: "pack-premium-vip",
    title: "Pack Premium / VIP",
    category: "Pack personnalisé",
    summary:
      "Prestations haut de gamme, transferts privés et accompagnement personnalisé pour une expérience d'exception.",
    transportType: "Mixte",
    comfortLevel: "VIP",
    includedServices: [
      "Prestations premium",
      "Transferts privés",
      "Conciergerie voyage",
      "Assistance personnalisée",
    ],
    priceFrom: "Sur demande",
    availabilityStatus: "Sur demande",
  },
];

export function getOfferBySlug(slug: string): TravelOffer | undefined {
  return offers.find((o) => o.slug === slug);
}

export function getOffersByCategory(
  categories: TravelOffer["category"][]
): TravelOffer[] {
  return offers.filter((o) => categories.includes(o.category));
}

export function getRelatedOffers(
  offer: TravelOffer,
  limit = 3
): TravelOffer[] {
  const sameCat = offers.filter(
    (o) => o.category === offer.category && o.slug !== offer.slug
  );
  const others = offers.filter(
    (o) => o.category !== offer.category && o.slug !== offer.slug
  );
  return [...sameCat, ...others].slice(0, limit);
}
