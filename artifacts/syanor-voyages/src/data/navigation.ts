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
      { label: "Visas & assistance", href: "/visas", desc: "Démarches & visa Omra" },
    ],
  },
  { label: "Offres & Départs", href: "/offres" },
  {
    label: "Omra & Hajj",
    href: "/omra-hajj",
    children: [
      { label: "Omra 2026", href: "/omra-2026", desc: "Oct., Nov., Déc. depuis Nice/Marseille" },
      { label: "Omra 2027", href: "/omra-2027", desc: "Janv., Fév., Mars, Avr. 2027" },
      { label: "Hajj 2027", href: "/hajj-2027", desc: "Pré-inscription ouverte" },
      { label: "Omra Plus", href: "/omra-hajj/omra-plus", desc: "Expérience premium / VIP" },
      { label: "Ramadan", href: "/omra-hajj/ramadan", desc: "Vivre le Ramadan aux lieux saints" },
      { label: "Visa Omra", href: "/visas", desc: "Assistance & démarches" },
      { label: "Formation", href: "/formation", desc: "Préparation spirituelle" },
    ],
  },
  {
    label: "Villes départ",
    href: "/offres",
    children: [
      { label: "Départ Nice", href: "/depart/nice", desc: "Omra depuis NCE" },
      { label: "Départ Marseille", href: "/depart/marseille", desc: "Omra depuis MRS" },
      { label: "Départ Lyon", href: "/depart/lyon", desc: "Itinéraire sur demande" },
      { label: "Départ Paris", href: "/depart/paris", desc: "CDG / Orly" },
      { label: "Départ Toulouse", href: "/depart/toulouse", desc: "Itinéraire sur demande" },
      { label: "Départ Bruxelles", href: "/depart/bruxelles", desc: "Pèlerins de Belgique" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavChild[] = [
  { label: "Billets Avion", href: "/services/billets-avion" },
  { label: "Billets Bateau", href: "/services/billets-bateau" },
  { label: "Omra 2026", href: "/omra-2026" },
  { label: "Omra 2027", href: "/omra-2027" },
  { label: "Hajj 2027", href: "/hajj-2027" },
  { label: "Omra Plus", href: "/omra-hajj/omra-plus" },
  { label: "Ramadan", href: "/omra-hajj/ramadan" },
  { label: "Voyages Organisés", href: "/voyages-organises" },
  { label: "Séjours Sur Mesure", href: "/sejours-sur-mesure" },
  { label: "Formation", href: "/formation" },
  { label: "Visas", href: "/visas" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export const footerLinks: NavChild[] = [
  { label: "Omra 2026", href: "/omra-2026" },
  { label: "Omra 2027", href: "/omra-2027" },
  { label: "Hajj 2027", href: "/hajj-2027" },
  { label: "Départ Nice", href: "/depart/nice" },
  { label: "Départ Marseille", href: "/depart/marseille" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Visas", href: "/visas" },
];

export const CONTACT = {
  phone: "+33 1 84 80 00 00",
  phoneHref: "tel:+33184800000",
  email: "info@syanorvoyages.com",
  emailHref: "mailto:info@syanorvoyages.com",
  site: "www.syanorvoyages.com",
  siteHref: "https://www.syanorvoyages.com",
  whatsapp: "+33 1 84 80 00 00",
  whatsappHref: "https://wa.me/33184800000",
};
