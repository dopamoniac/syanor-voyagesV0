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
  { label: "Accueil", href: "/agence" },
  {
    label: "Billets",
    href: "/agence/services",
    children: [
      { label: "Billets Avion",            href: "/agence/services/billets-avion",           desc: "Vols internationaux & itinéraires" },
      { label: "Billets Bateau",           href: "/agence/services/billets-bateau",          desc: "Ferry & traversées" },
      { label: "Billets Groupe",           href: "/agence/services/billets-avion#groupe",    desc: "Groupes & délégations" },
      { label: "Vols Internationaux",      href: "/agence/services/billets-avion#intl",      desc: "Destinations mondiales" },
      { label: "Traversées avec véhicule", href: "/agence/services/billets-bateau#vehicule", desc: "Ferry voiture incluse" },
    ],
  },
  {
    label: "Séjours & Voyages",
    href: "/agence/voyages-organises",
    children: [
      { label: "Voyages Organisés",    href: "/agence/voyages-organises",            desc: "Séjours en groupe encadrés" },
      { label: "Séjours Sur Mesure",   href: "/agence/sejours-sur-mesure",           desc: "Voyages composés pour vous" },
      { label: "Packs Premium / VIP",  href: "/agence/services#packs",               desc: "Expérience d'exception" },
      { label: "Voyages de Noces",     href: "/agence/sejours-sur-mesure#noces",     desc: "Lune de miel sur mesure" },
      { label: "Hôtels & Transferts",  href: "/agence/sejours-sur-mesure#hotels",    desc: "Hébergement & transport" },
      { label: "Assistance Voyage",    href: "/agence/visas#assistance",             desc: "Support & démarches" },
      { label: "Visas",                href: "/agence/visas",                        desc: "Visa & formalités" },
    ],
  },
  { label: "Offres",  href: "/agence/offres"  },
  { label: "Blog",    href: "/agence/blog"    },
  { label: "Contact", href: "/agence/contact" },
];

export const footerServices: NavChild[] = [
  { label: "Billets Avion",       href: "/agence/services/billets-avion"  },
  { label: "Billets Bateau",      href: "/agence/services/billets-bateau" },
  { label: "Voyages Organisés",   href: "/agence/voyages-organises"       },
  { label: "Séjours Sur Mesure",  href: "/agence/sejours-sur-mesure"      },
  { label: "Packs Premium / VIP", href: "/agence/services#packs"          },
  { label: "Visas & Assistance",  href: "/agence/visas"                   },
  { label: "FAQ",                 href: "/agence/faq"                     },
  { label: "Blog",                href: "/agence/blog"                    },
];

export const footerLinks: NavChild[] = [
  { label: "Nos offres",  href: "/agence/offres"   },
  { label: "FAQ",         href: "/agence/faq"      },
  { label: "Blog",        href: "/agence/blog"     },
  { label: "Visas",       href: "/agence/visas"    },
  { label: "Contact",     href: "/agence/contact"  },
  { label: "À propos",    href: "/agence/a-propos" },
];

export const CONTACT = {
  phone:        "+33 1 84 80 00 00",
  phoneHref:    "tel:+33184800000",
  email:        "info@syanorvoyages.com",
  emailHref:    "mailto:info@syanorvoyages.com",
  site:         "www.syanorvoyages.com",
  siteHref:     "https://www.syanorvoyages.com",
  whatsapp:     "+33 1 84 80 00 00",
  whatsappHref: "https://wa.me/33184800000",
};
