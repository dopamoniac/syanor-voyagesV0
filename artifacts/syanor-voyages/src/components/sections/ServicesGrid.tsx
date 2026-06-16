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
        desc: "Vols internationaux, réservation optimisée, assistance complète de A à Z",
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
   ARROW ICON
─────────────────────────────────────────────────────────────── */
function ArrowIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ───────────────────────────────────────────────────────────────
   1. CINEMA PHOTO CARD
   — frosted glass content panel, fill or aspect-ratio mode
─────────────────────────────────────────────────────────────── */
interface PhotoCardProps {
  svc: ServiceItem;
  delay: number;
  aspectRatio?: string;
  /** Use fill mode: card stretches to 100% of its container's height */
  fill?: boolean;
  /** Use fixed-height panoramic mode for featured cards */
  featured?: boolean;
  titleSize?: "lg" | "xl" | "2xl" | "3xl";
}

function CinemaPhotoCard({
  svc,
  delay,
  aspectRatio = "4/3",
  fill = false,
  featured = false,
  titleSize = "xl",
}: PhotoCardProps) {
  const titleClass =
    titleSize === "3xl" ? "text-3xl lg:text-4xl"
    : titleSize === "2xl" ? "text-2xl lg:text-3xl"
    : titleSize === "lg" ? "text-lg"
    : "text-xl";

  return (
    <Reveal delay={delay} className={fill ? "h-full" : undefined}>
      <Link
        href={svc.href}
        className={[
          "group relative block cursor-pointer overflow-hidden rounded-[24px]",
          fill ? "h-full w-full" : "",
          featured ? "h-56 sm:h-72 lg:h-[400px]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={!fill && !featured ? { aspectRatio } : undefined}
        aria-label={svc.title}
      >
        {/* Photo — zooms on hover */}
        <img
          src={svc.image}
          alt={svc.alt ?? svc.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08]"
          loading="lazy"
        />

        {/* Subtle top vignette */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-28"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, transparent 100%)" }}
          aria-hidden="true"
        />

        {/* Hover: emerald top wash */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-25"
          style={{ background: "linear-gradient(to bottom, rgba(6,63,51,0.65) 0%, transparent 50%)" }}
          aria-hidden="true"
        />

        {/* Badge — top left */}
        {svc.badge && (
          <div
            className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.15em] text-syanor-gold/95 backdrop-blur-md"
            style={{ background: "rgba(2,43,36,0.65)", border: "1px solid rgba(201,162,74,0.40)" }}
          >
            {svc.badge}
          </div>
        )}

        {/* ── FROSTED GLASS CONTENT PANEL ── */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-5"
          style={{
            background: "rgba(2, 14, 10, 0.90)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderTop: "1px solid rgba(201,162,74,0.24)",
          }}
        >
          {/* Gold accent line — expands on hover */}
          <div
            className="mb-3 h-[1.5px] rounded-full transition-all duration-500 group-hover:w-16"
            style={{ width: "2.5rem", background: "linear-gradient(to right, #C9A24A, rgba(201,162,74,0.12))" }}
            aria-hidden="true"
          />

          {/* Title */}
          <p
            className={`font-playfair font-bold leading-tight text-white ${titleClass}`}
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.35)" }}
          >
            {svc.title}
          </p>

          {/* Description */}
          <p className="mt-1.5 line-clamp-2 text-[0.74rem] leading-relaxed text-white/55">
            {svc.desc}
          </p>

          {/* CTA pill button */}
          <div
            className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.72rem] font-bold tracking-wide text-syanor-gold transition-all duration-300 group-hover:bg-syanor-gold group-hover:text-[#021A12] group-hover:shadow-[0_4px_24px_rgba(201,162,74,0.40)]"
            style={{
              background: "rgba(201,162,74,0.12)",
              border: "1px solid rgba(201,162,74,0.42)",
            }}
          >
            Découvrir
            <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Bottom gold reveal line */}
        <div
          className="absolute inset-x-0 bottom-0 z-20 h-[2.5px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
          style={{ background: "linear-gradient(to right, #C9A24A, rgba(201,162,74,0.10))" }}
          aria-hidden="true"
        />
      </Link>
    </Reveal>
  );
}

/* ───────────────────────────────────────────────────────────────
   2. PREMIUM VIP CARD
   — horizontal strip: icon panel left, content right
─────────────────────────────────────────────────────────────── */
function PremiumVIPCard({ svc, delay, index }: { svc: ServiceItem; delay: number; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={delay}>
      <Link
        href={svc.href}
        className="group relative flex min-h-[156px] overflow-hidden rounded-[22px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_64px_rgba(2,43,36,0.45)]"
        style={{
          background: "linear-gradient(125deg, #011915 0%, #022B24 50%, #041e16 100%)",
          border: "1px solid rgba(201,162,74,0.22)",
        }}
      >
        {/* Left: icon + number section */}
        <div
          className="relative flex w-[30%] shrink-0 flex-col items-center justify-center gap-2 px-4 py-5"
          style={{
            background: "linear-gradient(145deg, rgba(201,162,74,0.06) 0%, rgba(201,162,74,0.02) 100%)",
            borderRight: "1px solid rgba(201,162,74,0.10)",
          }}
        >
          {/* Radial ambient glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-15 transition-opacity duration-500 group-hover:opacity-35"
            style={{ background: "radial-gradient(circle at 50% 42%, rgba(201,162,74,0.55), transparent 68%)" }}
            aria-hidden="true"
          />

          {/* Large faded number behind icon */}
          <span
            className="absolute select-none font-serif text-[3rem] font-bold leading-none text-syanor-gold/[0.07] transition-colors duration-300 group-hover:text-syanor-gold/[0.14]"
            aria-hidden="true"
          >
            {num}
          </span>

          {/* Icon */}
          <span
            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl text-syanor-gold transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_18px_rgba(201,162,74,0.28)]"
            style={{
              background: "rgba(201,162,74,0.10)",
              border: "1px solid rgba(201,162,74,0.26)",
            }}
            aria-hidden="true"
          >
            <Icon name={svc.icon} className="h-5 w-5" />
          </span>
        </div>

        {/* Right: content */}
        <div className="relative flex flex-1 flex-col justify-between px-5 py-5">
          {/* Hover border highlight overlay */}
          <div
            className="pointer-events-none absolute inset-0 rounded-r-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 0 1px rgba(201,162,74,0.32)" }}
            aria-hidden="true"
          />

          <div>
            {/* Badge chip */}
            {svc.badge && (
              <span
                className="mb-3 inline-block rounded-full px-2 py-0.5 text-[0.52rem] font-bold uppercase tracking-widest text-syanor-gold/50"
                style={{ border: "1px solid rgba(201,162,74,0.20)" }}
              >
                {svc.badge}
              </span>
            )}

            <h4 className="font-playfair text-[1.1rem] font-semibold leading-snug text-syanor-ivory">
              {svc.title}
            </h4>

            {/* Expanding gold rule */}
            <div
              className="my-2.5 h-px rounded-full transition-all duration-400 group-hover:w-12"
              style={{ width: "1.75rem", background: "linear-gradient(to right, rgba(201,162,74,0.60), transparent)" }}
              aria-hidden="true"
            />

            <p className="text-[0.74rem] leading-relaxed text-white/32">
              {svc.desc}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-4 flex items-center gap-2 text-[0.68rem] font-semibold tracking-wide text-syanor-gold/55 transition-all duration-200 group-hover:gap-3 group-hover:text-syanor-gold">
            Découvrir
            <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ───────────────────────────────────────────────────────────────
   3. ASSISTANCE CARD
   — horizontal: photo left, content right with background number
─────────────────────────────────────────────────────────────── */
function AssistanceCard({ svc, delay, index }: { svc: ServiceItem; delay: number; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={delay}>
      <Link
        href={svc.href}
        className="group flex overflow-hidden rounded-[22px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(6,63,51,0.13)]"
        style={{
          background: "linear-gradient(135deg, #FDFAF4 0%, #FFF9ED 100%)",
          border: "1px solid rgba(201,162,74,0.18)",
          minHeight: "200px",
        }}
      >
        {/* Left: photo */}
        {svc.image ? (
          <div className="relative w-[42%] shrink-0 overflow-hidden">
            <img
              src={svc.image}
              alt={svc.alt ?? svc.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.07]"
            />
            {/* Subtle right-edge fade */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-12"
              style={{ background: "linear-gradient(to right, transparent, #FFF9ED)" }}
              aria-hidden="true"
            />
            {/* Number chip over image */}
            <div
              className="absolute left-3 top-3 rounded-full px-2 py-0.5 font-mono text-[0.55rem] font-bold tracking-[0.22em] text-white/80 backdrop-blur-sm"
              style={{ background: "rgba(2,43,36,0.48)", border: "1px solid rgba(201,162,74,0.25)" }}
              aria-hidden="true"
            >
              {num}
            </div>
          </div>
        ) : (
          <div
            className="flex w-[42%] shrink-0 items-center justify-center"
            style={{ background: "linear-gradient(148deg, #022B24, #063F33)" }}
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-syanor-gold"
              style={{ background: "rgba(201,162,74,0.12)", border: "1px solid rgba(201,162,74,0.22)" }}
              aria-hidden="true"
            >
              <Icon name={svc.icon} className="h-7 w-7" />
            </span>
          </div>
        )}

        {/* Right: content */}
        <div className="relative flex flex-1 flex-col justify-between p-5">
          {/* Large ghost number in background */}
          <span
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 select-none font-serif text-[5.5rem] font-bold leading-none text-syanor-ink/[0.04]"
            aria-hidden="true"
          >
            {num}
          </span>

          {/* Left gold accent bar */}
          <div
            className="absolute inset-y-4 left-0 w-[2px] rounded-r-full transition-all duration-300 group-hover:inset-y-2"
            style={{ background: "linear-gradient(to bottom, rgba(201,162,74,0.60), rgba(201,162,74,0.06))" }}
            aria-hidden="true"
          />

          <div className="relative pl-3">
            {/* Badge */}
            {svc.badge && (
              <span
                className="mb-2.5 inline-block rounded-full px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-syanor-emerald/75"
                style={{ background: "rgba(6,63,51,0.07)", border: "1px solid rgba(6,63,51,0.12)" }}
              >
                {svc.badge}
              </span>
            )}

            <p className="font-playfair text-[1.05rem] font-semibold leading-snug text-syanor-ink transition-colors duration-200 group-hover:text-syanor-emerald">
              {svc.title}
            </p>

            <div
              className="my-2 h-px rounded-full transition-all duration-300 group-hover:w-10"
              style={{ width: "1.5rem", background: "linear-gradient(to right, rgba(201,162,74,0.48), transparent)" }}
              aria-hidden="true"
            />

            <p className="text-[0.72rem] leading-relaxed text-syanor-ink/52">{svc.desc}</p>
          </div>

          <div className="relative mt-4 flex items-center gap-1.5 pl-3 text-[0.68rem] font-semibold text-syanor-gold transition-all duration-200 group-hover:gap-2.5 group-hover:text-syanor-emerald">
            En savoir plus
            <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ───────────────────────────────────────────────────────────────
   GROUP HEADER
─────────────────────────────────────────────────────────────── */
function GroupHeader({ group, index }: { group: ServiceGroup; index: number }) {
  return (
    <div className="mb-7 flex items-center gap-3">
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

              {/* ── BILLETS: panoramic featured + 2 landscape ── */}
              {group.photoLayout === "landscape" && (
                <div className="space-y-4">
                  {/* Featured panoramic card */}
                  <CinemaPhotoCard
                    svc={group.services[0]}
                    delay={gi * 60}
                    featured
                    titleSize="3xl"
                  />
                  {/* Two smaller landscape cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {group.services.slice(1).map((svc, si) => (
                      <CinemaPhotoCard
                        key={svc.title}
                        svc={svc}
                        delay={gi * 60 + (si + 1) * 80}
                        aspectRatio="4/3"
                        titleSize="xl"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* ── PORTRAIT: panoramic featured + 3 portrait cards ── */}
              {group.photoLayout === "portrait" && (
                <div className="space-y-4">
                  {/* Featured panoramic card */}
                  <CinemaPhotoCard
                    svc={group.services[0]}
                    delay={gi * 60}
                    featured
                    titleSize="2xl"
                  />
                  {/* Three portrait cards — handle mobile orphan for 3-card rows */}
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {group.services.slice(1).map((svc, si, arr) => {
                      const isOrphan = si === arr.length - 1 && arr.length % 2 === 1;
                      return (
                        <div
                          key={svc.title}
                          className={
                            isOrphan
                              ? "col-span-2 aspect-[16/9] sm:col-span-1 sm:aspect-[3/4]"
                              : "aspect-[3/4]"
                          }
                        >
                          <CinemaPhotoCard
                            svc={svc}
                            delay={gi * 60 + (si + 1) * 70}
                            fill
                            titleSize="lg"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── PREMIUM VIP: horizontal strip cards, 2-col grid ── */}
              {group.photoLayout === "premium" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {group.services.map((svc, si) => (
                    <PremiumVIPCard
                      key={svc.title}
                      svc={svc}
                      delay={gi * 60 + si * 60}
                      index={si}
                    />
                  ))}
                </div>
              )}

              {/* ── ASSISTANCE: horizontal photo cards, 3-col ── */}
              {group.photoLayout === "assistance" && (
                <div className="grid gap-4 sm:grid-cols-3">
                  {group.services.map((svc, si) => (
                    <AssistanceCard
                      key={svc.title}
                      svc={svc}
                      delay={gi * 60 + si * 60}
                      index={si}
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
