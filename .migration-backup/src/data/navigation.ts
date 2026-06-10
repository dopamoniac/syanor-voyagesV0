export interface NavChild {
  label: string;
  href: string;
  desc?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Billets Avion", href: "/services/billets-avion", desc: "Vols internationaux & itinéraires" },
      { label: "Billets Bateau", href: "/services/billets-bateau", desc: "Traversées ferry & véhicules" },
      { label: "Voyages Organisés", href: "/voyages-organises", desc: "Séjours en groupe encadrés" },
      { label: "Séjours Sur Mesure", href: "/sejours-sur-mesure", desc: "Voyages composés pour vous" },
      { label: "Packs Premium / VIP", href: "/services#packs", desc: "Expérience d'exception" },
      { label: "Hôtels, transferts, visas", href: "/services#logistique", desc: "Logistique & assistance" },
    ],
  },
  { label: "Offres & Départs", href: "/offres" },
  {
    label: "Omra & Hajj",
    href: "/omra-hajj",
    children: [
      { label: "Omra", href: "/omra-hajj/omra", desc: "Classique, premium, sur mesure" },
      { label: "Hajj", href: "/omra-hajj/hajj", desc: "Programme accompagné" },
      { label: "Omra Plus", href: "/omra-hajj/omra-plus", desc: "Expérience premium / VIP" },
      { label: "Ramadan", href: "/omra-hajj/ramadan", desc: "Vivre le Ramadan aux lieux saints" },
      { label: "Formation", href: "/formation", desc: "Préparation spirituelle" },
      { label: "Ziyarat", href: "/omra-hajj#ziyarat", desc: "Visites des lieux historiques" },
    ],
  },
  { label: "Formation", href: "/formation" },
  { label: "Sur Mesure", href: "/sejours-sur-mesure" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavChild[] = [
  { label: "Billets Avion", href: "/services/billets-avion" },
  { label: "Billets Bateau", href: "/services/billets-bateau" },
  { label: "Omra & Hajj", href: "/omra-hajj" },
  { label: "Omra Plus", href: "/omra-hajj/omra-plus" },
  { label: "Ramadan", href: "/omra-hajj/ramadan" },
  { label: "Voyages Organisés", href: "/voyages-organises" },
  { label: "Séjours Sur Mesure", href: "/sejours-sur-mesure" },
  { label: "Formation", href: "/formation" },
];

export const CONTACT = {
  phone: "+33 1 84 80 00 00",
  phoneHref: "tel:+33184800000",
  email: "info@syanorvoyages.com",
  emailHref: "mailto:info@syanorvoyages.com",
  site: "www.syanorvoyages.com",
  siteHref: "https://www.syanorvoyages.com",
  // TODO: replace with real WhatsApp business number
  whatsapp: "+33 1 84 80 00 00",
  whatsappHref: "https://wa.me/33184800000",
};
