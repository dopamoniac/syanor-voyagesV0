import Link from "@/components/Link";

/* ── CHIP DEFINITIONS ─────────────────────────────────────────── */
const CHIPS = [
  {
    label: "Voyages Organisés",
    href: "/voyages-organises",
    pos: "left-[6%] top-[10%]",
    anim: "float",
    icon: (
      /* Route / road-fork */
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="5" r="2" />
        <path d="M12 19V7M12 7l-4-4M12 7l4-4" />
      </svg>
    ),
  },
  {
    label: "Billets Avion",
    href: "/services/billets-avion",
    pos: "right-[5%] top-[14%]",
    anim: "float",
    icon: (
      /* Airplane */
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 21 4s-2 0-3.5 1.5L14 9 5.8 6.2c-.5-.2-1.1 0-1.4.5L4 7.5l7 4.5-2.5 2.5L7 13l-1.5 1.5 2 2 2-1 1.5-1.5L12 16.5l4.5 7 1.5-.5.8-4.3z" />
      </svg>
    ),
  },
  {
    label: "Billet Bateau · Traversée",
    href: "/services/billets-bateau",
    pos: "left-[3%] top-[43%]",
    anim: "float-delay-1",
    icon: (
      /* Ship / anchor */
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 16h16l-2 4H6z" />
        <path d="M6 16V9l6-2 6 2v7" />
        <path d="M12 4v3" />
      </svg>
    ),
  },
  {
    label: "Omra & Hajj",
    href: "/omra-hajj",
    pos: "right-[4%] top-[55%]",
    anim: "float-delay-1",
    icon: (
      /* Crescent moon */
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    label: "Séjours sur Mesure",
    href: "/sejours-sur-mesure",
    pos: "bottom-[18%] left-[28%]",
    anim: "float-delay-2",
    icon: (
      /* Compass */
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor" stroke="none" opacity="0.6" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

/* ── SINGLE CHIP COMPONENT ────────────────────────────────────── */
function HeroChip({
  label,
  href,
  pos,
  anim,
  icon,
}: (typeof CHIPS)[number]) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`${anim} ${pos} absolute flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(201,162,74,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-syanor-gold`}
      style={{
        background: "rgba(255,249,237,0.95)",
        border: "1px solid rgba(201,162,74,0.42)",
        boxShadow: "0 2px 12px rgba(6,63,51,0.09)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {/* Icon container */}
      <span
        className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-lg text-syanor-gold"
        style={{ background: "rgba(201,162,74,0.12)" }}
        aria-hidden="true"
      >
        {icon}
      </span>

      {/* Label */}
      <span className="whitespace-nowrap text-[0.68rem] font-semibold leading-none text-syanor-emerald">
        {label}
      </span>

      {/* Arrow hint — subtle, reveals on hover */}
      <span
        className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-syanor-gold/60 text-[0.55rem]"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}

/* ── HERO VISUAL ──────────────────────────────────────────────── */
export default function HeroVisual() {
  return (
    <div
      className="relative h-[500px] w-full max-w-[560px]"
      role="region"
      aria-label="Services rapides"
    >
      {/* Gold dashed route lines — decorative */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 560 500"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M60 400 C 180 300, 360 370, 510 210"
          stroke="#C9A24A"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          opacity="0.45"
        />
        <path
          d="M140 85 C 270 48, 420 125, 530 72"
          stroke="#C9A24A"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity="0.38"
        />
        {/* Dot accents */}
        <circle cx="320" cy="68"  r="2.5" fill="#C9A24A" opacity="0.55" />
        <circle cx="450" cy="100" r="2"   fill="#C9A24A" opacity="0.42" />
        <circle cx="200" cy="92"  r="2"   fill="#C9A24A" opacity="0.35" />
        <circle cx="410" cy="330" r="2.5" fill="#C9A24A" opacity="0.4" />
      </svg>

      {/* Chips */}
      {CHIPS.map((chip) => (
        <HeroChip key={chip.label} {...chip} />
      ))}
    </div>
  );
}
