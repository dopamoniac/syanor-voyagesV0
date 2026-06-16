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
  alt?: string;
}

interface ServiceGroup {
  category: string;
  groupIcon: string;
  services: ServiceItem[];
  photoLayout?: "landscape" | "portrait" | "assistance";
}

const GROUPS: ServiceGroup[] = [
  {
    category: "Billets",
    groupIcon: "airplane",
    photoLayout: "landscape",
    services: [
      {
        icon: "airplane",
        title: "Billets Avion",
        desc: "Vols internationaux, réservation optimisée, assistance complète",
        href: "/services/billets-avion",
        image: "/services/billets-avion.jpg",
        alt: "Billet d'avion international avec SYANOR VOYAGES",
      },
      {
        icon: "anchor",
        title: "Billets Bateau",
        desc: "Ferry & traversées, avec ou sans véhicule, tous ports",
        href: "/services/billets-bateau",
        image: "/services/billets-bateau.jpg",
        alt: "Ferry et traversée maritime avec SYANOR VOYAGES",
      },
      {
        icon: "users",
        title: "Billets Groupes",
        desc: "Tarifs groupes, coordination collective, départs multiples",
        href: "/contact?service=Billet+avion#quote",
        image: "/services/billets-groupes.jpg",
        alt: "Billets groupes et voyages collectifs avec SYANOR VOYAGES",
      },
    ],
  },
  {
    category: "Voyages Religieux",
    groupIcon: "crescent",
    photoLayout: "portrait",
    services: [
      {
        icon: "crescent",
        title: "Omra",
        desc: "Petit pèlerinage toute l'année, rites et accompagnement complet.",
        href: "/omra-hajj",
        image: "/services/religieux/omra.png",
        alt: "Voyage Omra avec accompagnement SYANOR",
      },
      {
        icon: "crescent",
        title: "Omra Plus",
        desc: "Séjour prolongé 21–34 nuits, programme approfondi.",
        href: "/omra-hajj",
        image: "/services/religieux/omra-plus.png",
        alt: "Omra Plus premium avec séjour prolongé",
      },
      {
        icon: "crescent",
        title: "Hajj",
        desc: "Grand pèlerinage annuel, accompagnement structuré.",
        href: "/omra-hajj",
        image: "/services/religieux/hajj.png",
        alt: "Voyage Hajj avec accompagnement structuré",
      },
      {
        icon: "sparkle",
        title: "Omra Ramadan",
        desc: "Expérience spirituelle du mois sacré, atmosphère unique.",
        href: "/omra-hajj",
        image: "/services/religieux/omra-ramadan.png",
        alt: "Omra Ramadan en atmosphère spirituelle",
      },
    ],
  },
  {
    category: "Sur Mesure",
    groupIcon: "compass",
    photoLayout: "portrait",
    services: [
      {
        icon: "route",
        title: "Voyages Organisés",
        desc: "Circuits structurés avec programme, transport, hébergement et accompagnement dédié.",
        href: "/voyages-organises",
        image: "/services/sur-mesure/voyages-organises.png",
        alt: "Voyages organisés avec guide dans un décor islamique premium",
      },
      {
        icon: "compass",
        title: "Séjour sur Mesure",
        desc: "Vos dates, votre budget, votre confort et vos envies réunis dans un voyage unique.",
        href: "/sejours-sur-mesure",
        image: "/services/sur-mesure/sejour-sur-mesure.png",
        alt: "Séjour sur mesure avec arrivée privée dans un hôtel islamique de luxe",
      },
      {
        icon: "diamond",
        title: "Pack Premium / VIP",
        desc: "Transferts privés, hôtels sélectionnés et assistance personnalisée.",
        href: "/services#packs",
        image: "/services/sur-mesure/pack-premium-vip.png",
        alt: "Pack Premium VIP avec terrasse orientale au coucher du soleil",
      },
      {
        icon: "star",
        title: "Voyage de Noces",
        desc: "Une lune de miel sur mesure, élégante et pensée dans les moindres détails.",
        href: "/contact?service=S%C3%A9jour+sur+mesure#quote",
        image: "/services/sur-mesure/voyage-de-noces.png",
        alt: "Voyage de noces halal dans une terrasse orientale romantique",
      },
    ],
  },
  {
    category: "Premium & VIP",
    groupIcon: "diamond",
    services: [
      {
        icon: "diamond",
        title: "Pack Premium / VIP",
        desc: "Billet + hôtel 5★ + transfert privé + assistance complète",
        href: "/services#packs",
      },
      {
        icon: "building",
        title: "Hôtels Premium",
        desc: "Sélection 4 & 5 étoiles, palaces et riads de prestige",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
      },
      {
        icon: "bus",
        title: "Transferts Privés",
        desc: "Chauffeur privé ou minibus VIP — aéroport, hôtel, site",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
      },
      {
        icon: "sparkle",
        title: "Travel Concierge",
        desc: "Un conseiller dédié qui orchestre votre voyage de A à Z",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
      },
    ],
  },
  {
    category: "Assistance",
    groupIcon: "shield",
    photoLayout: "assistance",
    services: [
      {
        icon: "clipboard",
        title: "Assistance Visa",
        desc: "Dossier complet, démarches simplifiées, suivi jusqu'à obtention",
        href: "/contact?service=Visa#quote",
        image: "/services/assistance-visa.png",
        alt: "Documents de voyage, passeport et dossier visa SYANOR",
      },
      {
        icon: "book-open",
        title: "Formation Omra",
        desc: "Préparation spirituelle pré-départ, rites et pratiques",
        href: "/omra-hajj#formation",
        image: "/services/formation-omra.png",
        alt: "Préparation spirituelle pour le pèlerinage Omra",
      },
      {
        icon: "shield",
        title: "Assurance Voyage",
        desc: "Couverture internationale premium, assistance 24h/24",
        href: "/contact#quote",
        image: "/services/assurance-voyage.png",
        alt: "Assurance voyage premium avec protection internationale",
      },
    ],
  },
];

interface PhotoCardProps {
  svc: ServiceItem;
  delay: number;
  aspectRatio?: string;
}

function PhotoCard({ svc, delay, aspectRatio = "3/2" }: PhotoCardProps) {
  return (
    <Reveal delay={delay}>
      <Link
        href={svc.href}
        className="group relative block overflow-hidden rounded-2xl"
        style={{ aspectRatio }}
      >
        {/* Background photo */}
        <img
          src={svc.image}
          alt={svc.alt ?? svc.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Dark smoke overlay — heavy at bottom, transparent at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(2,15,10,0.92) 0%, rgba(2,15,10,0.60) 38%, rgba(2,15,10,0.22) 65%, rgba(2,15,10,0.04) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Subtle top vignette so icon is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.28) 0%, transparent 60%)",
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
            <p className="font-playfair text-lg font-semibold leading-tight text-white drop-shadow-sm">
              {svc.title}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/75">
              {svc.desc}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-[0.68rem] font-semibold tracking-wide text-syanor-gold transition-colors duration-200 group-hover:text-white">
              En savoir plus
              <svg
                className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function AssistanceCard({ svc, delay }: { svc: ServiceItem; delay: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={svc.href}
        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(6,63,51,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(6,63,51,0.13)]"
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
          <img
            src={svc.image}
            alt={svc.alt ?? svc.title}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          {/* Subtle bottom fade so icon badge blends in */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
            style={{ background: "linear-gradient(to top, rgba(255,249,237,0.55) 0%, transparent 100%)" }}
            aria-hidden="true"
          />
        </div>

        {/* Icon badge — sits right below the image edge */}
        <div className="px-5 pt-4 pb-5 flex flex-col gap-2">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald transition-colors duration-200 group-hover:bg-syanor-emerald group-hover:text-syanor-gold"
            aria-hidden="true"
          >
            <Icon name={svc.icon} className="h-5 w-5" />
          </span>

          <p className="font-playfair text-base font-semibold text-syanor-ink transition-colors group-hover:text-syanor-emerald">
            {svc.title}
          </p>
          <p className="text-xs leading-relaxed text-syanor-ink/55">{svc.desc}</p>

          <span className="mt-1 inline-flex items-center gap-1 text-[0.68rem] font-semibold tracking-wide text-syanor-gold transition-colors duration-200 group-hover:text-syanor-emerald">
            En savoir plus
            <svg
              className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
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
        />

        <div className="mt-12 space-y-10">
          {GROUPS.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 80}>
              <div>
                {/* Category label */}
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold"
                    aria-hidden="true"
                  >
                    <Icon name={group.groupIcon} className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="font-playfair text-lg text-syanor-ink">{group.category}</h3>
                  <div className="flex-1 border-t border-syanor-gold/20" aria-hidden="true" />
                </div>

                {/* Photo cards for Billets (landscape) */}
                {group.photoLayout === "landscape" && (
                  <div className="grid gap-4 sm:grid-cols-3">
                    {group.services.map((svc, si) => (
                      <PhotoCard
                        key={svc.title}
                        svc={svc}
                        delay={gi * 80 + si * 60}
                        aspectRatio="3/2"
                      />
                    ))}
                  </div>
                )}

                {/* Photo cards for Voyages Religieux (portrait, 4-col) */}
                {group.photoLayout === "portrait" && (
                  <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                    {group.services.map((svc, si) => (
                      <PhotoCard
                        key={svc.title}
                        svc={svc}
                        delay={gi * 80 + si * 60}
                        aspectRatio="3/4"
                      />
                    ))}
                  </div>
                )}

                {/* Assistance cards — image top, content below */}
                {group.photoLayout === "assistance" && (
                  <div className="grid gap-5 sm:grid-cols-3">
                    {group.services.map((svc, si) => (
                      <AssistanceCard
                        key={svc.title}
                        svc={svc}
                        delay={gi * 80 + si * 60}
                      />
                    ))}
                  </div>
                )}

                {/* White cards for other groups */}
                {!group.photoLayout && (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {group.services.map((svc, si) => (
                      <Reveal key={svc.title} delay={gi * 80 + si * 50}>
                        <Link
                          href={svc.href}
                          className="group flex flex-col rounded-2xl border border-syanor-gold/15 bg-white p-5 transition-all duration-250 hover:-translate-y-0.5 hover:border-syanor-gold/35 hover:shadow-card"
                        >
                          <span
                            className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald transition-colors duration-200 group-hover:bg-syanor-emerald group-hover:text-syanor-gold"
                            aria-hidden="true"
                          >
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
