import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

/* ───────────────────────────────────────────────────────────────
   DATA
─────────────────────────────────────────────────────────────── */
interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  href: string;
  badge?: string;
  image?: string;
  alt?: string;
}

interface ServiceGroup {
  category: string;
  groupIcon: string;
  services: ServiceItem[];
  photoLayout?: "landscape" | "portrait" | "premium" | "assistance";
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
        badge: "Vols internationaux",
        desc: "Vols internationaux, réservation optimisée, assistance complète",
        href: "/services/billets-avion",
        image: "/services/billets-avion.jpg",
        alt: "Billet d'avion international avec SYANOR VOYAGES",
      },
      {
        icon: "anchor",
        title: "Billets Bateau",
        badge: "Ferry & traversée",
        desc: "Ferry & traversées, avec ou sans véhicule, tous ports",
        href: "/services/billets-bateau",
        image: "/services/billets-bateau.jpg",
        alt: "Ferry et traversée maritime avec SYANOR VOYAGES",
      },
      {
        icon: "users",
        title: "Billets Groupes",
        badge: "Tarif groupe",
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
        badge: "Petit pèlerinage",
        desc: "Petit pèlerinage toute l'année, rites et accompagnement complet.",
        href: "/omra-hajj",
        image: "/services/religieux/omra.png",
        alt: "Voyage Omra avec accompagnement SYANOR",
      },
      {
        icon: "crescent",
        title: "Omra Plus",
        badge: "Séjour 21–34 nuits",
        desc: "Séjour prolongé 21–34 nuits, programme approfondi.",
        href: "/omra-hajj",
        image: "/services/religieux/omra-plus.png",
        alt: "Omra Plus premium avec séjour prolongé",
      },
      {
        icon: "crescent",
        title: "Hajj",
        badge: "Grand pèlerinage",
        desc: "Grand pèlerinage annuel, accompagnement structuré.",
        href: "/omra-hajj",
        image: "/services/religieux/hajj.png",
        alt: "Voyage Hajj avec accompagnement structuré",
      },
      {
        icon: "sparkle",
        title: "Omra Ramadan",
        badge: "Mois sacré",
        desc: "Expérience spirituelle du mois sacré, atmosphère unique.",
        href: "/omra-hajj",
        image: "/services/religieux/omra-ramadan.png",
        alt: "Omra Ramadan en atmosphère spirituelle",
      },
    ],
  },
  {
    category: "Séjours & Voyages",
    groupIcon: "compass",
    photoLayout: "portrait",
    services: [
      {
        icon: "route",
        title: "Voyages Organisés",
        badge: "Circuit guidé",
        desc: "Circuits structurés avec programme, transport, hébergement et accompagnement dédié.",
        href: "/voyages-organises",
        image: "/services/sur-mesure/voyages-organises.png",
        alt: "Voyages organisés avec guide dans un décor premium",
      },
      {
        icon: "compass",
        title: "Séjour sur Mesure",
        badge: "Sur mesure",
        desc: "Vos dates, votre budget, votre confort et vos envies réunis dans un voyage unique.",
        href: "/sejours-sur-mesure",
        image: "/services/sur-mesure/sejour-sur-mesure.png",
        alt: "Séjour sur mesure avec arrivée privée dans un hôtel de luxe",
      },
      {
        icon: "diamond",
        title: "Pack Premium / VIP",
        badge: "VIP",
        desc: "Transferts privés, hôtels sélectionnés et assistance personnalisée.",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
        image: "/services/sur-mesure/pack-premium-vip.png",
        alt: "Pack Premium VIP avec terrasse orientale au coucher du soleil",
      },
      {
        icon: "star",
        title: "Voyage de Noces",
        badge: "Lune de miel",
        desc: "Une lune de miel sur mesure, élégante et pensée dans les moindres détails.",
        href: "/contact?service=S%C3%A9jour+sur+mesure#quote",
        image: "/services/sur-mesure/voyage-de-noces.png",
        alt: "Voyage de noces dans une terrasse orientale romantique",
      },
    ],
  },
  {
    category: "Premium & VIP",
    groupIcon: "diamond",
    photoLayout: "premium",
    services: [
      {
        icon: "diamond",
        title: "Pack Premium / VIP",
        badge: "Service dédié",
        desc: "Billet + hôtel 5★ + transfert privé + assistance personnalisée complète",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
      },
      {
        icon: "building",
        title: "Hôtels Premium",
        badge: "5★ Sélection",
        desc: "Sélection rigoureuse de 4 & 5 étoiles, palaces et riads de prestige",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
      },
      {
        icon: "bus",
        title: "Transferts Privés",
        badge: "Transfert VIP",
        desc: "Chauffeur privé ou minibus VIP — aéroport, hôtel, lieux saints",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
      },
      {
        icon: "sparkle",
        title: "Travel Concierge",
        badge: "Conciergerie",
        desc: "Un conseiller dédié qui orchestre chaque détail de votre voyage de A à Z",
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
        badge: "Accompagnement",
        desc: "Dossier complet, démarches simplifiées, suivi jusqu'à obtention",
        href: "/contact?service=Visa#quote",
        image: "/services/assistance-visa.png",
        alt: "Documents de voyage, passeport et dossier visa SYANOR",
      },
      {
        icon: "book-open",
        title: "Formation Omra",
        badge: "Formation",
        desc: "Préparation spirituelle pré-départ, rites et pratiques",
        href: "/omra-hajj#formation",
        image: "/services/formation-omra.png",
        alt: "Préparation spirituelle pour le pèlerinage Omra",
      },
      {
        icon: "shield",
        title: "Assurance Voyage",
        badge: "Protection",
        desc: "Couverture internationale premium, assistance 24h/24",
        href: "/contact#quote",
        image: "/services/assurance-voyage.png",
        alt: "Assurance voyage premium avec protection internationale",
      },
    ],
  },
];

/* ───────────────────────────────────────────────────────────────
   ARROW ICON — shared micro-element
─────────────────────────────────────────────────────────────── */
function ArrowIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ───────────────────────────────────────────────────────────────
   1. CINEMA PHOTO CARD  (Billets landscape + Religieux / Séjours portrait)
─────────────────────────────────────────────────────────────── */
interface PhotoCardProps {
  svc: ServiceItem;
  delay: number;
  aspectRatio?: string;
}

function CinemaPhotoCard({ svc, delay, aspectRatio = "4/3" }: PhotoCardProps) {
  return (
    <Reveal delay={delay}>
      <Link
        href={svc.href}
        className="group relative block overflow-hidden rounded-[22px]"
        style={{ aspectRatio }}
        aria-label={svc.title}
      >
        {/* Photo */}
        <img
          src={svc.image}
          alt={svc.alt ?? svc.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.07]"
          loading="lazy"
        />

        {/* Deep cinematic gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,8,6,0) 0%, rgba(2,8,6,0.06) 28%, rgba(2,8,6,0.55) 60%, rgba(2,8,6,0.90) 82%, rgba(2,8,6,0.96) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hover tint — warm emerald wash from top */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-25"
          style={{ background: "linear-gradient(180deg, rgba(6,63,51,0.5) 0%, transparent 55%)" }}
          aria-hidden="true"
        />

        {/* Premium badge — top-left */}
        {svc.badge && (
          <div
            className="absolute left-3.5 top-3.5 rounded-full px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-syanor-gold/90 backdrop-blur-sm"
            style={{
              background: "rgba(2,43,36,0.62)",
              border: "1px solid rgba(201,162,74,0.30)",
            }}
          >
            {svc.badge}
          </div>
        )}

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p
            className="font-playfair text-xl font-bold leading-tight text-white"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.45)" }}
          >
            {svc.title}
          </p>
          <p className="mt-1.5 text-[0.72rem] leading-relaxed text-white/62">{svc.desc}</p>

          {/* CTA bar */}
          <div className="mt-4 flex items-center gap-2.5 border-t border-white/10 pt-3.5">
            <span className="flex-1 text-[0.68rem] font-semibold tracking-wide text-syanor-gold transition-colors duration-200 group-hover:text-white">
              Découvrir
            </span>
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-syanor-gold transition-all duration-300 group-hover:bg-syanor-gold group-hover:text-syanor-royal"
              style={{ background: "rgba(201,162,74,0.18)", border: "1px solid rgba(201,162,74,0.25)" }}
              aria-hidden="true"
            >
              <ArrowIcon className="h-2.5 w-2.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>

        {/* Bottom-edge gold reveal line */}
        <div
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
          style={{ background: "linear-gradient(to right, rgba(201,162,74,0.8), rgba(201,162,74,0.2))" }}
          aria-hidden="true"
        />
      </Link>
    </Reveal>
  );
}

/* ───────────────────────────────────────────────────────────────
   2. PREMIUM VIP CARD  (dark emerald glass — no image)
─────────────────────────────────────────────────────────────── */
function PremiumVIPCard({
  svc,
  delay,
  index,
}: {
  svc: ServiceItem;
  delay: number;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={delay}>
      <Link
        href={svc.href}
        className="group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_56px_rgba(2,43,36,0.40)]"
        style={{
          background: "linear-gradient(148deg, #022B24 0%, #063F33 55%, #083e2e 100%)",
          border: "1px solid rgba(201,162,74,0.20)",
        }}
      >
        {/* Ambient gold glow top-right */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 transition-opacity duration-500 group-hover:opacity-22"
          style={{ background: "radial-gradient(circle, rgba(201,162,74,0.7), transparent 70%)" }}
          aria-hidden="true"
        />

        {/* Border brightens overlay on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: "inset 0 0 0 1px rgba(201,162,74,0.38)" }}
          aria-hidden="true"
        />

        {/* Number + icon row */}
        <div className="mb-5 flex items-start justify-between">
          <span className="select-none font-mono text-[0.52rem] font-bold tracking-[0.32em] text-syanor-gold/32">
            {num}
          </span>
          <span
            className="flex h-11 w-11 items-center justify-center rounded-xl text-syanor-gold transition-all duration-300 group-hover:shadow-[0_4px_20px_rgba(201,162,74,0.22)]"
            style={{
              background: "rgba(201,162,74,0.10)",
              border: "1px solid rgba(201,162,74,0.20)",
            }}
            aria-hidden="true"
          >
            <Icon name={svc.icon} className="h-5 w-5" />
          </span>
        </div>

        {/* Title */}
        <h4 className="font-playfair text-lg font-semibold leading-snug text-syanor-ivory">
          {svc.title}
        </h4>

        {/* Gold divider — expands on hover */}
        <div
          className="my-3.5 h-px rounded-full transition-all duration-300 group-hover:w-14"
          style={{
            width: "2rem",
            background: "linear-gradient(to right, rgba(201,162,74,0.55), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Desc */}
        <p className="flex-1 text-[0.75rem] leading-relaxed text-syanor-champagne/48">
          {svc.desc}
        </p>

        {/* CTA + badge row */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-wide text-syanor-gold/60 transition-all duration-200 group-hover:gap-3 group-hover:text-syanor-gold">
            Découvrir
            <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
          {svc.badge && (
            <span
              className="rounded-full px-2 py-0.5 text-[0.52rem] font-bold uppercase tracking-widest text-syanor-gold/50"
              style={{ border: "1px solid rgba(201,162,74,0.18)" }}
            >
              {svc.badge}
            </span>
          )}
        </div>
      </Link>
    </Reveal>
  );
}

/* ───────────────────────────────────────────────────────────────
   3. ASSISTANCE CARD  (horizontal: image left, content right)
─────────────────────────────────────────────────────────────── */
function AssistanceCard({ svc, delay }: { svc: ServiceItem; delay: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={svc.href}
        className="group flex overflow-hidden rounded-[22px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(6,63,51,0.12)]"
        style={{
          background: "linear-gradient(135deg, #FFF9ED 0%, #f8f2e1 100%)",
          border: "1px solid rgba(201,162,74,0.16)",
          minHeight: "172px",
        }}
      >
        {/* Left: photo or icon block */}
        {svc.image ? (
          <div className="relative w-[38%] shrink-0 overflow-hidden">
            <img
              src={svc.image}
              alt={svc.alt ?? svc.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            {/* Right-edge fade to card bg */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-10"
              style={{ background: "linear-gradient(to right, transparent, #FFF9ED)" }}
              aria-hidden="true"
            />
          </div>
        ) : (
          <div
            className="flex w-[38%] shrink-0 items-center justify-center"
            style={{
              background: "linear-gradient(148deg, #022B24, #063F33)",
            }}
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-syanor-gold"
              style={{
                background: "rgba(201,162,74,0.12)",
                border: "1px solid rgba(201,162,74,0.22)",
              }}
              aria-hidden="true"
            >
              <Icon name={svc.icon} className="h-7 w-7" />
            </span>
          </div>
        )}

        {/* Right: content */}
        <div className="relative flex flex-1 flex-col justify-between p-5">
          {/* Gold left accent */}
          <div
            className="absolute inset-y-4 left-0 w-[2px] rounded-r-full transition-all duration-300 group-hover:inset-y-2"
            style={{
              background:
                "linear-gradient(to bottom, rgba(201,162,74,0.58), rgba(201,162,74,0.06))",
            }}
            aria-hidden="true"
          />

          <div className="pl-2">
            {/* Badge */}
            {svc.badge && (
              <span
                className="mb-2.5 inline-block rounded-full px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-syanor-emerald/70"
                style={{
                  background: "rgba(6,63,51,0.07)",
                  border: "1px solid rgba(6,63,51,0.10)",
                }}
              >
                {svc.badge}
              </span>
            )}

            <p className="font-playfair text-base font-semibold leading-snug text-syanor-ink transition-colors duration-200 group-hover:text-syanor-emerald">
              {svc.title}
            </p>

            {/* Gold micro divider */}
            <div
              className="my-2 h-px rounded-full transition-all duration-300 group-hover:w-10"
              style={{
                width: "1.5rem",
                background:
                  "linear-gradient(to right, rgba(201,162,74,0.42), transparent)",
              }}
              aria-hidden="true"
            />

            <p className="text-[0.72rem] leading-relaxed text-syanor-ink/52">{svc.desc}</p>
          </div>

          {/* CTA */}
          <div className="mt-4 flex items-center gap-1.5 pl-2 text-[0.68rem] font-semibold text-syanor-gold transition-all duration-200 group-hover:gap-2.5 group-hover:text-syanor-emerald">
            En savoir plus
            <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ───────────────────────────────────────────────────────────────
   GROUP HEADER  (editorial numbered section indicator)
─────────────────────────────────────────────────────────────── */
function GroupHeader({ group, index }: { group: ServiceGroup; index: number }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="select-none font-mono text-[0.52rem] font-bold tracking-[0.28em] text-syanor-gold/38">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold"
        aria-hidden="true"
      >
        <Icon name={group.groupIcon} className="h-3.5 w-3.5" />
      </span>
      <h3 className="font-playfair text-xl font-semibold text-syanor-ink">{group.category}</h3>
      <div className="flex-1 border-t border-syanor-gold/12" aria-hidden="true" />
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   SECTION
─────────────────────────────────────────────────────────────── */
export default function ServicesGrid() {
  return (
    <section className="section-pad bg-syanor-pearl" id="services">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Nos services"
          title="Tout ce dont vous avez besoin pour voyager."
          subtitle="Billets, séjours, voyages organisés, pèlerinages, packs VIP et assistance — un seul interlocuteur pour l'ensemble de votre projet voyage."
        />

        <div className="mt-14 space-y-16">
          {GROUPS.map((group, gi) => (
            <div key={group.category}>
              <GroupHeader group={group} index={gi} />

              {/* ── BILLETS (landscape 3-col) ── */}
              {group.photoLayout === "landscape" && (
                <div className="grid gap-4 sm:grid-cols-3">
                  {group.services.map((svc, si) => (
                    <CinemaPhotoCard
                      key={svc.title}
                      svc={svc}
                      delay={gi * 60 + si * 55}
                      aspectRatio="4/3"
                    />
                  ))}
                </div>
              )}

              {/* ── PORTRAIT (Religieux + Séjours — 4-col) ── */}
              {group.photoLayout === "portrait" && (
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                  {group.services.map((svc, si) => (
                    <CinemaPhotoCard
                      key={svc.title}
                      svc={svc}
                      delay={gi * 60 + si * 55}
                      aspectRatio="2/3"
                    />
                  ))}
                </div>
              )}

              {/* ── PREMIUM VIP (dark glass 2×2 → 4-col on xl) ── */}
              {group.photoLayout === "premium" && (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {group.services.map((svc, si) => (
                    <PremiumVIPCard
                      key={svc.title}
                      svc={svc}
                      delay={gi * 60 + si * 55}
                      index={si}
                    />
                  ))}
                </div>
              )}

              {/* ── ASSISTANCE (horizontal cards) ── */}
              {group.photoLayout === "assistance" && (
                <div className="grid gap-4 sm:grid-cols-3">
                  {group.services.map((svc, si) => (
                    <AssistanceCard
                      key={svc.title}
                      svc={svc}
                      delay={gi * 60 + si * 55}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
