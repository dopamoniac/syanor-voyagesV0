import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "billets-avion",
    title: "Billets Avion",
    description:
      "Vols internationaux, itinéraires optimisés et assistance complète, de la réservation au départ.",
    icon: "airplane",
    serviceType: "Billet avion",
    href: "/services/billets-avion",
  },
  {
    id: "billets-bateau",
    title: "Billets Bateau",
    description:
      "Traversées ferry, conseils sur les ports et horaires, avec une organisation claire et sereine.",
    icon: "anchor",
    serviceType: "Billet bateau",
    href: "/services/billets-bateau",
  },
  {
    id: "omra-hajj",
    title: "Omra & Hajj",
    description:
      "Voyages spirituels organisés avec excellence : rites, hôtels sélectionnés, Ziyarat et accompagnement.",
    icon: "crescent",
    serviceType: "Omra",
    href: "/omra-hajj",
  },
  {
    id: "voyages-organises",
    title: "Voyages Organisés",
    description:
      "Des séjours pensés dans le moindre détail, avec un programme structuré et un accompagnement dédié.",
    icon: "route",
    serviceType: "Voyage organisé",
    href: "/voyages-organises",
  },
  {
    id: "sejours-mesure",
    title: "Séjours sur Mesure",
    description:
      "Votre voyage conçu autour de vos dates, votre budget, votre confort et vos envies.",
    icon: "sliders",
    serviceType: "Séjour sur mesure",
    href: "/sejours-sur-mesure",
  },
  {
    id: "packs-premium",
    title: "Packs Premium / VIP",
    description:
      "Une expérience d'exception : prestations haut de gamme, transferts privés et assistance personnalisée.",
    icon: "diamond",
    serviceType: "Pack personnalisé",
    href: "/services#packs",
  },
];
