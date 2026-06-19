import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
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
  layout: "billets" | "portrait-grid" | "vip" | "assistance";
  theme: "ivory" | "warm" | "pearl" | "vip" | "trust";
}

const GROUPS: ServiceGroup[] = [
  {
    category: "Billets",
    groupIcon: "airplane",
    layout: "billets",
    theme: "ivory",
    services: [
      {
        icon: "airplane",
        title: "Billets Avion",
        badge: "Vols internationaux",
        desc: "Vols internationaux, réservation optimisée, assistance complète de A à Z",
        href: "/services/billets-avion",
        image: "/services/billets-avion.png",
        alt: "Billet d'avion international avec SYANOR VOYAGES",
      },
      {
        icon: "anchor",
        title: "Billets Bateau",
        badge: "Ferry & traversée",
        desc: "Ferry & traversées, avec ou sans véhicule, tous ports",
        href: "/services/billets-bateau",
        image: "/services/billets-bateau.png",
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
    category: "Séjours & Voyages",
    groupIcon: "compass",
    layout: "portrait-grid",
    theme: "pearl",
    services: [
      {
        icon: "route",
        title: "Voyages Organisés",
        badge: "Circuit guidé",
        desc: "Circuits avec programme, transport, hébergement et guide dédié.",
        href: "/voyages-organises",
        image: "/services/sur-mesure/voyages-organises.png",
        alt: "Voyages organisés avec guide dans un décor premium",
      },
      {
        icon: "compass",
        title: "Séjour sur Mesure",
        badge: "Sur mesure",
        desc: "Vos dates, votre budget, vos envies — un voyage unique.",
        href: "/sejours-sur-mesure",
        image: "/services/sur-mesure/sejour-sur-mesure.png",
        alt: "Séjour sur mesure dans un hôtel de luxe",
      },
      {
        icon: "diamond",
        title: "Pack Premium / VIP",
        badge: "VIP",
        desc: "Transferts privés, hôtels sélectionnés, assistance personnalisée.",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
        image: "/services/sur-mesure/pack-premium-vip.png",
        alt: "Pack Premium VIP terrasse orientale",
      },
      {
        icon: "star",
        title: "Voyage de Noces",
        badge: "Lune de miel",
        desc: "Lune de miel élégante, pensée dans les moindres détails.",
        href: "/contact?service=S%C3%A9jour+sur+mesure#quote",
        image: "/services/sur-mesure/voyage-de-noces.png",
        alt: "Voyage de noces romantique",
      },
    ],
  },
  {
    category: "Premium & VIP",
    groupIcon: "diamond",
    layout: "vip",
    theme: "vip",
    services: [
      {
        icon: "diamond",
        title: "Pack Premium / VIP",
        badge: "Service dédié",
        desc: "Billet + hôtel 5★ + transfert privé + assistance personnalisée",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
      },
      {
        icon: "building",
        title: "Hôtels Premium",
        badge: "5★ Sélection",
        desc: "4 & 5 étoiles, palaces et riads de prestige soigneusement choisis",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
      },
      {
        icon: "bus",
        title: "Transferts Privés",
        badge: "Transfert VIP",
        desc: "Chauffeur ou minibus VIP — aéroport, hôtel, lieux saints",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
      },
      {
        icon: "sparkle",
        title: "Travel Concierge",
        badge: "Conciergerie",
        desc: "Un conseiller dédié qui orchestre chaque détail de A à Z",
        href: "/contact?service=Pack+personnalis%C3%A9#quote",
      },
    ],
  },
  {
    category: "Assistance",
    groupIcon: "shield",
    layout: "assistance",
    theme: "trust",
    services: [
      {
        icon: "clipboard",
        title: "Assistance Visa",
        badge: "Accompagnement",
        desc: "Dossier complet, démarches simplifiées, suivi jusqu'à obtention",
        href: "/contact?service=Visa#quote",
        image: "/services/assistance-visa.png",
        alt: "Passeport et dossier visa SYANOR",
      },
      {
        icon: "building",
        title: "Hôtels & Transferts",
        badge: "Sur mesure",
        desc: "Hôtels 4–5★ sélectionnés, transferts privés, toutes destinations",
        href: "/sejours-sur-mesure#hotels",
        image: "/services/assistance-visa.png",
        alt: "Hôtels et transferts premium SYANOR",
      },
      {
        icon: "shield",
        title: "Assurance Voyage",
        badge: "Protection",
        desc: "Couverture internationale premium, assistance 24h/24",
        href: "/contact#quote",
        image: "/services/assurance-voyage.png",
        alt: "Assurance voyage premium",
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   THEME CONFIG
───────────────────────────────────────────────────────────── */
type Theme = ServiceGroup["theme"];

const THEME_PANEL: Record<Theme, {
  bg: string;
  border: string;
  title: string;
  desc: string;
  badge: string;
  cta: string;
  ctaArrow: string;
}> = {
  ivory: {
    bg: "bg-white",
    border: "border border-syanor-gold/20",
    title: "text-syanor-ink",
    desc: "text-syanor-ink/55",
    badge: "bg-syanor-emerald/8 text-syanor-emerald border-syanor-emerald/15",
    cta: "text-syanor-gold",
    ctaArrow: "text-syanor-gold",
  },
  warm: {
    bg: "bg-[#FBF5E8]",
    border: "border border-syanor-gold/22",
    title: "text-syanor-ink",
    desc: "text-syanor-ink/55",
    badge: "bg-syanor-gold/10 text-syanor-gold border-syanor-gold/20",
    cta: "text-syanor-emerald",
    ctaArrow: "text-syanor-emerald",
  },
  pearl: {
    bg: "bg-[#F5F5F0]",
    border: "border border-neutral-200",
    title: "text-syanor-ink",
    desc: "text-syanor-ink/55",
    badge: "bg-syanor-emerald/8 text-syanor-emerald border-syanor-emerald/15",
    cta: "text-syanor-emerald",
    ctaArrow: "text-syanor-emerald",
  },
  vip: {
    bg: "bg-syanor-emerald",
    border: "border border-syanor-gold/30",
    title: "text-syanor-ivory",
    desc: "text-syanor-ivory/50",
    badge: "bg-syanor-gold/15 text-syanor-gold border-syanor-gold/25",
    cta: "text-syanor-gold",
    ctaArrow: "text-syanor-gold",
  },
  trust: {
    bg: "bg-white",
    border: "border border-neutral-200",
    title: "text-syanor-emerald",
    desc: "text-syanor-ink/55",
    badge: "bg-syanor-emerald/8 text-syanor-emerald border-syanor-emerald/15",
    cta: "text-syanor-emerald",
    ctaArrow: "text-syanor-emerald",
  },
};

/* ─────────────────────────────────────────────────────────────
   ARROW ICON
───────────────────────────────────────────────────────────── */
function ArrowRight({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   PHOTO CARD  — image on top, content panel below
───────────────────────────────────────────────────────────── */
interface PhotoCardProps {
  svc: ServiceItem;
  theme: Theme;
  delay: number;
  imgHeight?: string; // Tailwind class e.g. "h-[200px]"
  featured?: boolean;
}

function PhotoCard({ svc, theme, delay, imgHeight = "h-[190px] sm:h-[240px]", featured = false }: PhotoCardProps) {
  const t = THEME_PANEL[theme];
  const isFloating = (
    svc.image?.includes("billets-avion.png") ||
    svc.image?.includes("billets-bateau.png") ||
    svc.image?.includes("voyages-organises.png") ||
    svc.image?.includes("voyage-de-noces.png") ||
    svc.image?.includes("sejour-sur-mesure.png")
  ) ?? false;

  return (
    <Reveal delay={delay}>
      <Link
        href={svc.href}
        className={`group flex flex-col overflow-hidden rounded-[24px] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] ${t.border} ${t.bg}`}
        aria-label={svc.title}
      >
        {/* ── Image area ── */}
        <div
          className={`relative overflow-hidden ${featured ? "h-[220px] sm:h-[320px]" : imgHeight}`}
          style={isFloating ? { background: "linear-gradient(145deg, #F5EFE0 0%, #EDE3CC 60%, #E3D5B5 100%)" } : undefined}
        >
          {svc.image ? (
            <img
              src={svc.image}
              alt={svc.alt ?? svc.title}
              loading="lazy"
              className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.05] ${isFloating ? "object-contain object-center" : "object-cover object-center"}`}
              style={isFloating ? { filter: "drop-shadow(0 18px 36px rgba(6,63,51,0.38)) drop-shadow(0 6px 12px rgba(0,0,0,0.22))" } : undefined}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-syanor-emerald/10">
              <Icon name={svc.icon} className="h-12 w-12 text-syanor-emerald/30" />
            </div>
          )}

          {/* Very soft bottom fade — skipped for floating transparent PNGs */}
          {!isFloating && (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-10"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08))" }}
              aria-hidden
            />
          )}

          {/* Badge */}
          {svc.badge && (
            <div
              className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-[0.57rem] font-bold uppercase tracking-[0.14em] backdrop-blur-sm ${t.badge}`}
            >
              {svc.badge}
            </div>
          )}
        </div>

        {/* ── Content panel ── */}
        <div className="flex flex-1 flex-col justify-between px-5 py-[18px]">
          <div>
            <p className={`font-playfair text-[1.05rem] font-semibold leading-snug ${t.title}`}>
              {svc.title}
            </p>
            <p className={`mt-1.5 text-[0.75rem] leading-relaxed ${t.desc}`}>
              {svc.desc}
            </p>
          </div>

          {/* CTA row */}
          <div className={`mt-4 flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-wide transition-gap duration-200 group-hover:gap-2.5 ${t.cta}`}>
            Découvrir
            <ArrowRight className={`h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 ${t.ctaArrow}`} />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ─────────────────────────────────────────────────────────────
   VIP CARD — emerald panel with icon, no image
───────────────────────────────────────────────────────────── */
function VIPCard({ svc, delay }: { svc: ServiceItem; delay: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={svc.href}
        className="group flex flex-col overflow-hidden rounded-[24px] border border-syanor-gold/30 bg-syanor-emerald shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(2,43,36,0.30)]"
        aria-label={svc.title}
      >
        {/* Top icon band */}
        <div
          className="flex items-center justify-between px-5 py-5"
          style={{ background: "linear-gradient(135deg, rgba(201,162,74,0.10) 0%, rgba(201,162,74,0.02) 100%)" }}
        >
          <span
            className="flex h-11 w-11 items-center justify-center rounded-[14px] text-syanor-gold"
            style={{ background: "rgba(201,162,74,0.12)", border: "1px solid rgba(201,162,74,0.24)" }}
            aria-hidden
          >
            <Icon name={svc.icon} className="h-5 w-5" />
          </span>

          {svc.badge && (
            <span
              className="rounded-full px-3 py-1 text-[0.55rem] font-bold uppercase tracking-widest text-syanor-gold/70"
              style={{ background: "rgba(201,162,74,0.10)", border: "1px solid rgba(201,162,74,0.18)" }}
            >
              {svc.badge}
            </span>
          )}
        </div>

        {/* Gold divider */}
        <div className="mx-5 h-px" style={{ background: "rgba(201,162,74,0.14)" }} aria-hidden />

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between px-5 py-5">
          <div>
            <p className="font-playfair text-[1.05rem] font-semibold leading-snug text-syanor-ivory">
              {svc.title}
            </p>
            <p className="mt-1.5 text-[0.74rem] leading-relaxed text-white/45">
              {svc.desc}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-wide text-syanor-gold transition-all duration-200 group-hover:gap-2.5">
            Découvrir
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ─────────────────────────────────────────────────────────────
   GROUP HEADER
───────────────────────────────────────────────────────────── */
function GroupHeader({ group, index }: { group: ServiceGroup; index: number }) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <span className="select-none font-mono text-[0.52rem] font-bold tracking-[0.28em] text-syanor-gold/38" aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold"
        aria-hidden
      >
        <Icon name={group.groupIcon} className="h-3.5 w-3.5" />
      </span>
      <h3 className="font-playfair text-xl font-semibold text-syanor-ink">{group.category}</h3>
      <div className="flex-1 border-t border-syanor-gold/12" aria-hidden />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────────── */
export default function ServicesGrid() {
  return (
    <section className="section-pad bg-syanor-pearl" id="services">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Nos services"
          title="Tout ce dont vous avez besoin pour voyager."
          subtitle="Billets, séjours sur mesure, voyages organisés, packs VIP, hôtels, transferts et assistance — un seul interlocuteur pour l'ensemble de votre projet voyage."
        />

        <div className="mt-14 space-y-16">
          {GROUPS.map((group, gi) => (
            <div key={group.category}>
              <GroupHeader group={group} index={gi} />

              {/* ── BILLETS: 3-col photo cards ── */}
              {group.layout === "billets" && (
                <div className="grid gap-[22px] sm:grid-cols-3">
                  {group.services.map((svc, si) => (
                    <PhotoCard
                      key={svc.title}
                      svc={svc}
                      theme={group.theme}
                      delay={gi * 50 + si * 60}
                    />
                  ))}
                </div>
              )}

              {/* ── PORTRAIT GRID: 2-col mobile, 4-col desktop (2×2) ── */}
              {group.layout === "portrait-grid" && (
                <div className="grid grid-cols-2 gap-[22px] sm:grid-cols-4">
                  {group.services.map((svc, si) => (
                    <PhotoCard
                      key={svc.title}
                      svc={svc}
                      theme={group.theme}
                      delay={gi * 50 + si * 60}
                      imgHeight="h-[170px] sm:h-[200px]"
                    />
                  ))}
                </div>
              )}

              {/* ── VIP: 2-col grid, emerald icon cards ── */}
              {group.layout === "vip" && (
                <div className="grid grid-cols-2 gap-[22px] sm:grid-cols-4">
                  {group.services.map((svc, si) => (
                    <VIPCard
                      key={svc.title}
                      svc={svc}
                      delay={gi * 50 + si * 60}
                    />
                  ))}
                </div>
              )}

              {/* ── ASSISTANCE: 3-col ── */}
              {group.layout === "assistance" && (
                <div className="grid gap-[22px] sm:grid-cols-3">
                  {group.services.map((svc, si) => (
                    <PhotoCard
                      key={svc.title}
                      svc={svc}
                      theme={group.theme}
                      delay={gi * 50 + si * 60}
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
