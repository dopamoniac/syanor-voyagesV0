import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  href: string;
  image?: string;
}

interface ServiceGroup {
  category: string;
  groupIcon: string;
  services: ServiceItem[];
}

const GROUPS: ServiceGroup[] = [
  {
    category: "Billets",
    groupIcon: "airplane",
    services: [
      {
        icon: "airplane",
        title: "Billets Avion",
        desc: "Vols internationaux, réservation optimisée, assistance complète",
        href: "/services/billets-avion",
        image: "/services/billets-avion.jpg",
      },
      {
        icon: "anchor",
        title: "Billets Bateau",
        desc: "Ferry & traversées, avec ou sans véhicule, tous ports",
        href: "/services/billets-bateau",
        image: "/services/billets-bateau.jpg",
      },
      {
        icon: "users",
        title: "Billets Groupes",
        desc: "Tarifs groupes, coordination collective, départs multiples",
        href: "/contact?service=Billet+avion#quote",
        image: "/services/billets-groupes.jpg",
      },
    ],
  },
  {
    category: "Voyages Religieux",
    groupIcon: "crescent",
    services: [
      { icon: "crescent", title: "Omra", desc: "Petit pèlerinage toute l'année, rites et accompagnement complet", href: "/omra-hajj" },
      { icon: "crescent", title: "Omra Plus", desc: "Séjour prolongé 21–34 nuits, programme approfondi", href: "/omra-hajj" },
      { icon: "crescent", title: "Hajj", desc: "Grand pèlerinage annuel, contingent agréé", href: "/omra-hajj" },
      { icon: "sparkle", title: "Omra Ramadan", desc: "Le mois sacré en Terres Saintes, atmosphère unique", href: "/omra-hajj" },
    ],
  },
  {
    category: "Sur Mesure",
    groupIcon: "compass",
    services: [
      { icon: "route", title: "Voyages Organisés", desc: "Circuits structurés avec programme et accompagnement dédié", href: "/voyages-organises" },
      { icon: "compass", title: "Séjour sur Mesure", desc: "Vos dates, votre budget, votre confort, vos envies", href: "/sejours-sur-mesure" },
      { icon: "diamond", title: "Pack Premium / VIP", desc: "Transferts privés, hôtels 5★, assistance personnalisée", href: "/services#packs" },
      { icon: "star", title: "Voyage de Noces", desc: "Lune de miel sur mesure, destinations de rêve", href: "/contact?service=S%C3%A9jour+sur+mesure#quote" },
    ],
  },
  {
    category: "Assistance",
    groupIcon: "shield",
    services: [
      { icon: "clipboard", title: "Assistance Visa", desc: "Dossier complet, démarches simplifiées, suivi jusqu'à obtention", href: "/contact?service=Visa#quote" },
      { icon: "book-open", title: "Formation Omra", desc: "Préparation spirituelle pré-départ, rites et pratiques", href: "/omra-hajj#formation" },
      { icon: "shield", title: "Assurance Voyage", desc: "Couverture internationale premium, assistance 24h/24", href: "/contact#quote" },
    ],
  },
];

function PhotoCard({ svc, delay }: { svc: ServiceItem; delay: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={svc.href}
        className="group relative block overflow-hidden rounded-2xl"
        style={{ aspectRatio: "3/2" }}
      >
        {/* Background photo */}
        <img
          src={svc.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Dark smoke overlay — heavy at bottom, lighter at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(2,15,10,0.88) 0%, rgba(2,15,10,0.55) 40%, rgba(2,15,10,0.20) 70%, rgba(2,15,10,0.05) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Subtle top vignette so icon is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.25) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          {/* Icon top-left */}
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-syanor-gold backdrop-blur-sm transition-colors duration-200 group-hover:bg-syanor-emerald group-hover:border-syanor-emerald"
            aria-hidden="true"
          >
            <Icon name={svc.icon} className="h-4 w-4" />
          </span>

          {/* Text bottom */}
          <div>
            <p className="font-playfair text-lg font-semibold leading-tight text-white">
              {svc.title}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/70">
              {svc.desc}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-[0.68rem] font-semibold tracking-wide text-syanor-gold transition-colors duration-200 group-hover:text-white">
              En savoir plus
              <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function ServicesGrid() {
  return (
    <section className="section-pad bg-syanor-pearl">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Nos services"
          title="Tout ce dont vous avez besoin pour voyager."
          subtitle="14 services organisés en 4 pôles — billets, voyages spirituels, sur mesure et assistance — pour couvrir chaque projet de voyage."
        />

        <div className="mt-12 space-y-10">
          {GROUPS.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 80}>
              <div>
                {/* Category label */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold" aria-hidden="true">
                    <Icon name={group.groupIcon} className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="font-playfair text-lg text-syanor-ink">{group.category}</h3>
                  <div className="flex-1 border-t border-syanor-gold/20" aria-hidden="true" />
                </div>

                {/* Photo cards for Billets, regular cards for others */}
                {group.category === "Billets" ? (
                  <div className="grid gap-4 sm:grid-cols-3">
                    {group.services.map((svc, si) => (
                      <PhotoCard key={svc.title} svc={svc} delay={gi * 80 + si * 60} />
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {group.services.map((svc, si) => (
                      <Reveal key={svc.title} delay={gi * 80 + si * 50}>
                        <Link
                          href={svc.href}
                          className="group flex flex-col rounded-2xl border border-syanor-gold/15 bg-white p-5 transition-all duration-250 hover:-translate-y-0.5 hover:border-syanor-gold/35 hover:shadow-card"
                        >
                          <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald transition-colors duration-200 group-hover:bg-syanor-emerald group-hover:text-syanor-gold" aria-hidden="true">
                            <Icon name={svc.icon} className="h-4.5 w-4.5" />
                          </span>
                          <p className="font-playfair text-sm font-medium text-syanor-ink transition-colors group-hover:text-syanor-emerald">
                            {svc.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-syanor-ink/55">{svc.desc}</p>
                          <span className="mt-3 text-[0.65rem] font-semibold text-syanor-gold transition-colors group-hover:text-syanor-emerald">
                            En savoir plus →
                          </span>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
