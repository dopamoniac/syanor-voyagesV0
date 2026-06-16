import type { Service } from "@/types";

/* ─────────────────────────────────────────────────────────────────
   SERVICE CATALOGUE — SYANOR VOYAGES
   Five groups: Billets, Séjours, Premium & VIP, Assistance, Omra & Hajj
───────────────────────────────────────────────────────────────── */

export const services: Service[] = [
  /* ── A. BILLETS & DÉPLACEMENTS ────────────────────────────── */
  {
    id: "billets-avion",
    title: "Billets Avion",
    description: "Vols internationaux, itinéraires optimisés et assistance complète, de la réservation au départ.",
    icon: "airplane",
    serviceType: "Billet avion",
    href: "/services/billets-avion",
    group: "Billets & déplacements",
  },
  {
    id: "billets-bateau",
    title: "Billets Bateau",
    description: "Traversées ferry, conseils sur les ports et horaires, avec ou sans véhicule.",
    icon: "anchor",
    serviceType: "Billet bateau",
    href: "/services/billets-bateau",
    group: "Billets & déplacements",
  },
  {
    id: "billets-multi",
    title: "Multi-destinations",
    description: "Itinéraires complexes, escales multiples et circuits ouverts sur mesure.",
    icon: "route",
    serviceType: "Billet avion",
    href: "/contact?service=Billet+avion#quote",
    group: "Billets & déplacements",
  },
  {
    id: "billets-groupes",
    title: "Billets Groupes",
    description: "Tarifs négociés pour groupes, coordination collective, gestion de plusieurs dossiers.",
    icon: "users",
    serviceType: "Billet avion",
    href: "/contact?service=Billet+avion#quote",
    group: "Billets & déplacements",
  },

  /* ── B. SÉJOURS & VOYAGES ─────────────────────────────────── */
  {
    id: "sejours-mesure",
    title: "Séjours sur Mesure",
    description: "Votre voyage conçu autour de vos dates, votre budget, votre confort et vos envies.",
    icon: "sliders",
    serviceType: "Séjour sur mesure",
    href: "/sejours-sur-mesure",
    group: "Séjours & voyages",
  },
  {
    id: "voyages-organises",
    title: "Voyages Organisés",
    description: "Des circuits pensés dans le moindre détail, avec programme structuré et accompagnement dédié.",
    icon: "map",
    serviceType: "Voyage organisé",
    href: "/voyages-organises",
    group: "Séjours & voyages",
  },
  {
    id: "voyages-famille",
    title: "Voyages Famille",
    description: "Séjours adaptés aux familles : hébergement spacieux, activités et rythme familial.",
    icon: "users",
    serviceType: "Séjour sur mesure",
    href: "/contact?service=S%C3%A9jour+sur+mesure#quote",
    group: "Séjours & voyages",
  },
  {
    id: "voyages-noces",
    title: "Voyages de Noces",
    description: "Une lune de miel sur mesure, élégante et pensée dans les moindres détails.",
    icon: "star",
    serviceType: "Séjour sur mesure",
    href: "/contact?service=S%C3%A9jour+sur+mesure#quote",
    group: "Séjours & voyages",
  },
  {
    id: "sejours-balneaires",
    title: "Séjours Balnéaires",
    description: "Plages, hôtels en bord de mer, stations thermales — en Europe et au Maghreb.",
    icon: "compass",
    serviceType: "Séjour sur mesure",
    href: "/contact?service=S%C3%A9jour+sur+mesure#quote",
    group: "Séjours & voyages",
  },
  {
    id: "city-breaks",
    title: "City Breaks & Week-ends",
    description: "Week-ends premium dans les plus belles capitales européennes et méditerranéennes.",
    icon: "building",
    serviceType: "Séjour sur mesure",
    href: "/contact?service=S%C3%A9jour+sur+mesure#quote",
    group: "Séjours & voyages",
  },

  /* ── C. PREMIUM & VIP ────────────────────────────────────── */
  {
    id: "packs-premium",
    title: "Packs Premium / VIP",
    description: "Une expérience d'exception : billet + hôtel premium + transfert privé + assistance.",
    icon: "diamond",
    serviceType: "Pack personnalisé",
    href: "/services#packs",
    group: "Premium & VIP",
  },
  {
    id: "hotels-premium",
    title: "Hôtels Premium",
    description: "Sélection d'hôtels 4 et 5 étoiles, palaces et riads de prestige. Réservation assistée.",
    icon: "building",
    serviceType: "Pack personnalisé",
    href: "/contact?service=Pack+personnalis%C3%A9#quote",
    group: "Premium & VIP",
  },
  {
    id: "transferts-prives",
    title: "Transferts Privés",
    description: "Chauffeur privé, minibus, véhicule de prestige — aéroport, hôtel, site.",
    icon: "bus",
    serviceType: "Pack personnalisé",
    href: "/contact?service=Pack+personnalis%C3%A9#quote",
    group: "Premium & VIP",
  },
  {
    id: "travel-concierge",
    title: "Travel Concierge",
    description: "Un conseiller dédié pour orchestrer l'ensemble de votre voyage, de A à Z.",
    icon: "sparkle",
    serviceType: "Pack personnalisé",
    href: "/contact?service=Pack+personnalis%C3%A9#quote",
    group: "Premium & VIP",
  },

  /* ── D. ASSISTANCE & DOCUMENTS ───────────────────────────── */
  {
    id: "assistance-visa",
    title: "Assistance Visa",
    description: "Constitution du dossier, accompagnement des démarches, suivi jusqu'à l'obtention.",
    icon: "clipboard",
    serviceType: "Visa",
    href: "/visas",
    group: "Assistance & documents",
  },
  {
    id: "assurance-voyage",
    title: "Assurance Voyage",
    description: "Couverture internationale premium : annulation, rapatriement, assistance 24h/24.",
    icon: "shield",
    serviceType: "Pack personnalisé",
    href: "/contact#quote",
    group: "Assistance & documents",
  },
  {
    id: "assistance-24h",
    title: "Assistance 24/7",
    description: "Un numéro joignable à tout moment pendant votre voyage pour toute urgence.",
    icon: "phone",
    serviceType: "Pack personnalisé",
    href: "/contact#quote",
    group: "Assistance & documents",
  },

  /* ── E. OMRA & HAJJ ──────────────────────────────────────── */
  {
    id: "omra-hajj",
    title: "Omra & Hajj",
    description: "Voyages spirituels organisés avec excellence : rites, hôtels sélectionnés, Ziyarat et accompagnement.",
    icon: "crescent",
    serviceType: "Omra",
    href: "/omra-hajj",
    group: "Omra & Hajj",
  },
  {
    id: "formation-omra",
    title: "Formation avant départ",
    description: "Préparation complète des rites, livrets pratiques et accompagnement spirituel.",
    icon: "book-open",
    serviceType: "Omra",
    href: "/formation",
    group: "Omra & Hajj",
  },
];

/* ─── Grouped helper ─────────────────────────────────────────── */
export type ServiceGroup =
  | "Billets & déplacements"
  | "Séjours & voyages"
  | "Premium & VIP"
  | "Assistance & documents"
  | "Omra & Hajj";

export const SERVICE_GROUPS: ServiceGroup[] = [
  "Billets & déplacements",
  "Séjours & voyages",
  "Premium & VIP",
  "Assistance & documents",
  "Omra & Hajj",
];

export const GROUP_ICONS: Record<ServiceGroup, string> = {
  "Billets & déplacements": "airplane",
  "Séjours & voyages":      "compass",
  "Premium & VIP":          "diamond",
  "Assistance & documents": "shield",
  "Omra & Hajj":            "crescent",
};

export function getServicesByGroup(group: ServiceGroup): Service[] {
  return services.filter((s) => s.group === group);
}
