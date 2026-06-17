import Link from "@/components/Link";
import type { ReactNode } from "react";
import Breadcrumb, { type Crumb } from "@/components/ui/Breadcrumb";

export type PageHeroVisual = "services" | "editorial" | "routes" | "identity" | "spiritual" | "default";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  crumbs?: Crumb[];
  image?: string;
  visual?: PageHeroVisual;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  warm?: boolean;
  children?: ReactNode;
}

/* ─────────────────────────────────────────────────────────────
   DESKTOP visual components — right panel, lg+ only
   Adapted for light ivory background
───────────────────────────────────────────────────────────── */

function ServicesVisual() {
  const cards = [
    { symbol: "✈", label: "Billets Avion", sub: "International" },
    { symbol: "⚓", label: "Billets Bateau", sub: "Traversées" },
    { symbol: "☽", label: "Omra & Hajj", sub: "Spirituel" },
    { symbol: "⊕", label: "Voyages Org.", sub: "En groupe" },
    { symbol: "✦", label: "Sur Mesure", sub: "Premium" },
    { symbol: "⊞", label: "Assistance", sub: "Visa & Admin" },
  ];
  return (
    <div className="relative flex h-[460px] w-[420px] items-center justify-center">
      <div className="pointer-events-none absolute inset-0 rounded-full opacity-15" style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,162,74,0.40), transparent 65%)" }} aria-hidden="true" />
      <div className="relative z-10 grid grid-cols-3 gap-3">
        {cards.map((card, i) => (
          <div key={card.label} className="flex flex-col items-center gap-2 rounded-xl p-4" style={{ background: "rgba(6,63,51,0.07)", border: "1px solid rgba(201,162,74,0.30)", boxShadow: "0 4px 16px rgba(6,63,51,0.08)", transform: i === 1 || i === 4 ? "translateY(-6px)" : i === 2 ? "translateY(4px)" : "none" }} aria-hidden="true">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-lg" style={{ background: "linear-gradient(135deg, rgba(201,162,74,0.25), rgba(201,162,74,0.10))", border: "1px solid rgba(201,162,74,0.45)", color: "#C9A24A" }}>{card.symbol}</div>
            <div className="text-center">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em]" style={{ color: "rgba(2,43,36,0.85)" }}>{card.label}</p>
              <p className="text-[0.55rem]" style={{ color: "rgba(2,43,36,0.45)" }}>{card.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[0.63rem] font-semibold" style={{ background: "rgba(201,162,74,0.12)", border: "1px solid rgba(201,162,74,0.35)", color: "#C9A24A" }} aria-hidden="true">
        ✦ 6 services disponibles
      </div>
    </div>
  );
}

function RoutesVisual() {
  return (
    <div className="relative flex h-[460px] w-[420px] items-center justify-center" aria-hidden="true">
      <div className="pointer-events-none absolute inset-0 opacity-12" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(201,162,74,0.30), transparent 65%)" }} />
      <div className="relative z-10 flex w-full flex-col items-center gap-0">
        <svg viewBox="0 0 400 200" className="w-full max-w-[380px]">
          <path d="M 55 160 Q 200 30 345 160" fill="none" stroke="rgba(201,162,74,0.35)" strokeWidth="1.5" strokeDasharray="5 4" />
          <path d="M 55 160 Q 200 30 345 160" fill="none" stroke="rgba(201,162,74,0.65)" strokeWidth="0.75" />
          <circle cx="55" cy="160" r="6" fill="rgba(201,162,74,0.20)" stroke="rgba(201,162,74,0.75)" strokeWidth="1.5" />
          <circle cx="55" cy="160" r="2.5" fill="#C9A24A" />
          <circle cx="345" cy="160" r="6" fill="rgba(201,162,74,0.20)" stroke="rgba(201,162,74,0.75)" strokeWidth="1.5" />
          <circle cx="345" cy="160" r="2.5" fill="#C9A24A" />
          <g transform="translate(200,50) rotate(-5)">
            <polygon points="0,-10 18,0 0,5 5,0" fill="#C9A24A" />
            <polygon points="0,-10 -10,2 0,5" fill="rgba(201,162,74,0.45)" />
          </g>
          <text x="55" y="185" textAnchor="middle" fill="rgba(2,43,36,0.65)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.04em">Nice</text>
          <text x="55" y="197" textAnchor="middle" fill="rgba(2,43,36,0.40)" fontSize="7.5" fontFamily="Inter, sans-serif">Marseille</text>
          <text x="345" y="185" textAnchor="middle" fill="rgba(2,43,36,0.65)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.04em">Jeddah</text>
          <text x="345" y="197" textAnchor="middle" fill="rgba(2,43,36,0.40)" fontSize="7.5" fontFamily="Inter, sans-serif">Arabie Saoudite</text>
          <rect x="160" y="14" width="80" height="18" rx="9" fill="rgba(201,162,74,0.15)" stroke="rgba(201,162,74,0.40)" strokeWidth="1" />
          <text x="200" y="26.5" textAnchor="middle" fill="#C9A24A" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.06em">≈ 3 900 KM</text>
        </svg>
        <div className="mt-3 flex gap-2.5">
          {["Oct", "Nov", "Déc", "Jan", "Fév"].map((m) => (
            <div key={m} className="rounded-full px-3 py-1 text-[0.60rem] font-semibold" style={{ background: "rgba(6,63,51,0.06)", border: "1px solid rgba(6,63,51,0.18)", color: "rgba(2,43,36,0.55)" }}>{m}</div>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <div className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[0.62rem]" style={{ background: "rgba(201,162,74,0.10)", border: "1px solid rgba(201,162,74,0.30)" }}>
            <span style={{ color: "#C9A24A" }}>✈</span>
            <span style={{ color: "rgba(2,43,36,0.80)", fontWeight: 600 }}>Vols directs</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[0.62rem]" style={{ background: "rgba(6,63,51,0.06)", border: "1px solid rgba(6,63,51,0.15)" }}>
            <span style={{ color: "rgba(2,43,36,0.50)" }}>⊕</span>
            <span style={{ color: "rgba(2,43,36,0.60)", fontWeight: 600 }}>Départs réguliers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditorialVisual() {
  const articles = [
    { cat: "Destination", catColor: "#C9A24A", title: "Istanbul : guide pratique et incontournables", meta: "7 min • Destinations" },
    { cat: "Conseils", catColor: "rgba(2,43,36,0.60)", title: "Séjour sur mesure ou voyage organisé ?", meta: "5 min • Organisation" },
    { cat: "Visa", catColor: "rgba(2,43,36,0.40)", title: "Visa Schengen depuis le Maroc & l'Algérie", meta: "6 min • Administratif" },
  ];
  return (
    <div className="relative flex h-[460px] w-[400px] flex-col items-start justify-center gap-3.5 pl-2" aria-hidden="true">
      <div className="pointer-events-none absolute -left-8 top-0 h-full w-1 opacity-40" style={{ background: "linear-gradient(to bottom, transparent, rgba(201,162,74,0.70) 30%, rgba(201,162,74,0.70) 70%, transparent)" }} />
      <div className="mb-1 flex items-center gap-3 pl-1">
        <div className="h-px w-8" style={{ background: "rgba(201,162,74,0.60)" }} />
        <span className="text-[0.60rem] font-bold uppercase tracking-[0.18em]" style={{ color: "#C9A24A" }}>Le magazine SYANOR</span>
      </div>
      {articles.map((a, i) => (
        <div key={a.title} className="w-full rounded-xl p-4" style={{ background: i === 0 ? "rgba(6,63,51,0.07)" : "rgba(6,63,51,0.04)", border: i === 0 ? "1px solid rgba(201,162,74,0.30)" : "1px solid rgba(6,63,51,0.12)", opacity: i === 0 ? 1 : i === 1 ? 0.80 : 0.55, transform: `translateX(${i * 8}px)` }}>
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.10em]" style={{ background: "rgba(201,162,74,0.12)", color: a.catColor, border: `1px solid rgba(201,162,74,0.28)` }}>{a.cat}</span>
          </div>
          <p className="text-[0.72rem] font-semibold leading-snug" style={{ color: "rgba(2,43,36,0.85)" }}>{a.title}</p>
          <p className="mt-1.5 text-[0.60rem]" style={{ color: "rgba(2,43,36,0.45)" }}>{a.meta}</p>
        </div>
      ))}
      <div className="mt-1 flex items-center gap-2 pl-1">
        <div className="h-1 w-16 rounded-full" style={{ background: "rgba(201,162,74,0.25)" }}>
          <div className="h-full w-1/3 rounded-full" style={{ background: "#C9A24A" }} />
        </div>
        <span className="text-[0.58rem]" style={{ color: "rgba(2,43,36,0.40)" }}>Articles en ligne</span>
      </div>
    </div>
  );
}

function IdentityVisual() {
  return (
    <div className="relative flex h-[460px] w-[420px] items-center justify-center" aria-hidden="true">
      <div className="pointer-events-none absolute inset-0 opacity-15" style={{ background: "radial-gradient(circle at 50% 48%, rgba(201,162,74,0.45), transparent 65%)" }} />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <svg viewBox="0 0 280 280" width="240" height="240">
          <circle cx="140" cy="140" r="130" fill="none" stroke="rgba(201,162,74,0.35)" strokeWidth="1" />
          <circle cx="140" cy="140" r="118" fill="none" stroke="rgba(201,162,74,0.18)" strokeWidth="0.75" strokeDasharray="3 4" />
          <path id="top-arc" d="M 28 140 A 112 112 0 0 1 252 140" fill="none" />
          <text fontSize="11" fontFamily="'Playfair Display', serif" fontWeight="700" fill="rgba(2,43,36,0.75)" letterSpacing="0.22em"><textPath href="#top-arc" startOffset="10%">SYANOR VOYAGES</textPath></text>
          <path id="bot-arc" d="M 55 200 A 112 112 0 0 0 225 200" fill="none" />
          <text fontSize="8.5" fontFamily="'Inter', sans-serif" fill="rgba(2,43,36,0.40)" letterSpacing="0.24em"><textPath href="#bot-arc" startOffset="8%">AGENCE DE VOYAGES PREMIUM</textPath></text>
          <text x="16" y="145" textAnchor="middle" fill="#C9A24A" fontSize="10">✦</text>
          <text x="264" y="145" textAnchor="middle" fill="#C9A24A" fontSize="10">✦</text>
          <polygon points="140,72 175,140 140,208 105,140" fill="none" stroke="rgba(201,162,74,0.40)" strokeWidth="1" />
          <polygon points="140,88 168,140 140,192 112,140" fill="none" stroke="rgba(201,162,74,0.22)" strokeWidth="0.75" />
          <text x="140" y="152" textAnchor="middle" fontFamily="'Playfair Display', serif" fontWeight="700" fontSize="44" fill="#C9A24A">S</text>
          {[0, 90, 180, 270].map((deg) => (
            <circle key={deg} cx={140 + 130 * Math.sin((deg * Math.PI) / 180)} cy={140 - 130 * Math.cos((deg * Math.PI) / 180)} r="3" fill="#C9A24A" />
          ))}
        </svg>
        <div className="flex gap-2.5">
          {["Expertise", "Confiance", "Excellence"].map((v) => (
            <div key={v} className="rounded-full px-3.5 py-1.5 text-[0.60rem] font-semibold uppercase tracking-[0.10em]" style={{ background: "rgba(6,63,51,0.07)", border: "1px solid rgba(201,162,74,0.35)", color: "#C9A24A" }}>{v}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpiritualVisual() {
  return (
    <div className="relative flex h-[460px] w-[420px] items-center justify-center" aria-hidden="true">
      <div className="pointer-events-none absolute inset-0 opacity-18" style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,162,74,0.38), transparent 60%)" }} />
      <div className="relative z-10 flex flex-col items-center gap-5">
        <svg viewBox="0 0 300 300" width="280" height="280">
          <polygon points="150,20 220,60 260,130 260,170 220,240 150,280 80,240 40,170 40,130 80,60" fill="none" stroke="rgba(201,162,74,0.30)" strokeWidth="1" />
          <polygon points="150,42 206,72 236,128 236,172 206,228 150,258 94,228 64,172 64,128 94,72" fill="none" stroke="rgba(201,162,74,0.16)" strokeWidth="0.75" transform="rotate(22.5 150 150)" />
          <polygon points="150,55 163,118 220,100 178,148 220,196 163,178 150,242 137,178 80,196 122,148 80,100 137,118" fill="none" stroke="rgba(201,162,74,0.45)" strokeWidth="1" />
          <circle cx="150" cy="150" r="52" fill="rgba(6,63,51,0.04)" stroke="rgba(201,162,74,0.40)" strokeWidth="1" />
          <path d="M 138 130 Q 150 118 162 130 Q 158 148 150 162 Q 142 148 138 130 Z" fill="#C9A24A" />
          <circle cx="164" cy="127" r="4" fill="none" stroke="#C9A24A" strokeWidth="1.2" />
          <circle cx="168" cy="127" r="1.8" fill="#C9A24A" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <circle key={deg} cx={150 + 130 * Math.sin((deg * Math.PI) / 180)} cy={150 - 130 * Math.cos((deg * Math.PI) / 180)} r="2.5" fill={deg % 90 === 0 ? "#C9A24A" : "rgba(201,162,74,0.35)"} />
          ))}
        </svg>
        <div className="flex gap-3">
          {["Omra", "Hajj", "Ziyarat", "Formation"].map((v) => (
            <div key={v} className="rounded-full px-3 py-1 text-[0.60rem] font-semibold" style={{ background: "rgba(6,63,51,0.07)", border: "1px solid rgba(201,162,74,0.35)", color: "#C9A24A" }}>{v}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DefaultOrnament() {
  return (
    <div className="relative flex h-[420px] w-[400px] items-center justify-center" aria-hidden="true">
      <div className="pointer-events-none absolute inset-0 opacity-12" style={{ background: "radial-gradient(circle, rgba(201,162,74,0.40), transparent 65%)" }} />
      <svg viewBox="0 0 200 200" width="200" height="200">
        <polygon points="100,12 188,100 100,188 12,100" fill="none" stroke="rgba(201,162,74,0.40)" strokeWidth="1" />
        <polygon points="100,30 170,100 100,170 30,100" fill="none" stroke="rgba(201,162,74,0.25)" strokeWidth="0.75" />
        <line x1="100" y1="12" x2="100" y2="188" stroke="rgba(201,162,74,0.18)" strokeWidth="0.5" />
        <line x1="12" y1="100" x2="188" y2="100" stroke="rgba(201,162,74,0.18)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="24" fill="none" stroke="rgba(201,162,74,0.40)" strokeWidth="1" />
        <circle cx="100" cy="100" r="4" fill="#C9A24A" />
        {[[100, 12], [188, 100], [100, 188], [12, 100]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="#C9A24A" />
        ))}
        <line x1="100" y1="30" x2="170" y2="100" stroke="rgba(201,162,74,0.15)" strokeWidth="0.5" />
        <line x1="170" y1="100" x2="100" y2="170" stroke="rgba(201,162,74,0.15)" strokeWidth="0.5" />
        <line x1="100" y1="170" x2="30" y2="100" stroke="rgba(201,162,74,0.15)" strokeWidth="0.5" />
        <line x1="30" y1="100" x2="100" y2="30" stroke="rgba(201,162,74,0.15)" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOBILE visual components — below CTAs, lg:hidden
   Adapted for light ivory background
───────────────────────────────────────────────────────────── */

function MobileImageStrip({ image }: { image: string }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ height: "200px", border: "1px solid rgba(201,162,74,0.30)", boxShadow: "0 8px 32px rgba(6,63,51,0.12)" }}
      aria-hidden="true"
    >
      <img src={image} alt="" className="h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(6,63,51,0.30) 100%)" }} />
      <div className="absolute bottom-2.5 right-2.5 opacity-60">
        <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
          <path d="M40 0 Q40 40 0 40" stroke="rgba(201,162,74,0.8)" strokeWidth="1" />
          <circle cx="40" cy="40" r="2" fill="rgba(201,162,74,0.7)" />
        </svg>
      </div>
    </div>
  );
}

function MobileServicesVisual() {
  const cards = [
    { symbol: "✈", label: "Billets Avion" },
    { symbol: "⚓", label: "Billets Bateau" },
    { symbol: "☽", label: "Omra & Hajj" },
    { symbol: "⊕", label: "Voyages Org." },
    { symbol: "✦", label: "Sur Mesure" },
    { symbol: "⊞", label: "Assistance" },
  ];
  return (
    <div className="grid grid-cols-3 gap-2" aria-hidden="true">
      {cards.map((c, i) => (
        <div key={c.label} className="flex flex-col items-center gap-2 rounded-xl px-2 py-3" style={{ background: "rgba(6,63,51,0.06)", border: "1px solid rgba(201,162,74,0.28)", opacity: i >= 3 ? 0.65 : 1 }}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, rgba(201,162,74,0.22), rgba(201,162,74,0.09))", border: "1px solid rgba(201,162,74,0.40)", color: "#C9A24A", fontSize: "1rem" }}>{c.symbol}</div>
          <p className="text-center text-[0.57rem] font-bold uppercase tracking-[0.08em]" style={{ color: "rgba(2,43,36,0.80)" }}>{c.label}</p>
        </div>
      ))}
    </div>
  );
}

function MobileRoutesVisual() {
  return (
    <div
      className="w-full overflow-hidden rounded-xl"
      style={{ background: "rgba(6,63,51,0.05)", border: "1px solid rgba(201,162,74,0.25)", padding: "14px 12px 12px" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 340 96" width="100%" style={{ display: "block" }}>
        <path d="M 30 72 Q 170 10 310 72" fill="none" stroke="rgba(201,162,74,0.35)" strokeWidth="1.5" strokeDasharray="5 4" />
        <path d="M 30 72 Q 170 10 310 72" fill="none" stroke="rgba(201,162,74,0.65)" strokeWidth="0.75" />
        <circle cx="30" cy="72" r="5" fill="rgba(201,162,74,0.22)" stroke="rgba(201,162,74,0.70)" strokeWidth="1.5" />
        <circle cx="30" cy="72" r="2" fill="#C9A24A" />
        <circle cx="310" cy="72" r="5" fill="rgba(201,162,74,0.22)" stroke="rgba(201,162,74,0.70)" strokeWidth="1.5" />
        <circle cx="310" cy="72" r="2" fill="#C9A24A" />
        <g transform="translate(170,17) rotate(-2)">
          <polygon points="0,-7 13,0 0,3.5 3,0" fill="#C9A24A" />
        </g>
        <text x="30" y="88" textAnchor="middle" fill="rgba(2,43,36,0.55)" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">Nice / Marseille</text>
        <text x="310" y="88" textAnchor="middle" fill="rgba(2,43,36,0.55)" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">Jeddah</text>
        <rect x="135" y="2" width="70" height="14" rx="7" fill="rgba(201,162,74,0.14)" stroke="rgba(201,162,74,0.35)" strokeWidth="0.75" />
        <text x="170" y="12" textAnchor="middle" fill="#C9A24A" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="600">≈ 3 900 KM</text>
      </svg>
      <div className="mt-2 flex flex-wrap justify-center gap-1.5">
        {["Oct", "Nov", "Déc", "Jan", "Fév"].map((m) => (
          <div key={m} className="rounded-full px-2.5 py-0.5 text-[0.57rem] font-semibold" style={{ background: "rgba(6,63,51,0.05)", border: "1px solid rgba(6,63,51,0.18)", color: "rgba(2,43,36,0.55)" }}>{m}</div>
        ))}
      </div>
    </div>
  );
}

function MobileEditorialVisual() {
  const articles = [
    { cat: "Destination", title: "Istanbul : guide pratique et incontournables", meta: "7 min · Destinations" },
    { cat: "Visa", title: "Visa Schengen depuis le Maroc & l'Algérie", meta: "6 min · Administratif" },
  ];
  return (
    <div className="flex flex-col gap-2" aria-hidden="true">
      <div className="mb-0.5 flex items-center gap-2">
        <div className="h-px w-6" style={{ background: "rgba(201,162,74,0.55)" }} />
        <span className="text-[0.57rem] font-bold uppercase tracking-[0.16em]" style={{ color: "#C9A24A" }}>Le magazine SYANOR</span>
      </div>
      {articles.map((a, i) => (
        <div key={a.title} className="rounded-xl p-3.5" style={{ background: "rgba(6,63,51,0.06)", border: "1px solid rgba(201,162,74,0.25)", opacity: i === 0 ? 1 : 0.65 }}>
          <span className="mb-1.5 inline-block rounded-full px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.10em]" style={{ background: "rgba(201,162,74,0.12)", color: "#C9A24A", border: "1px solid rgba(201,162,74,0.28)" }}>{a.cat}</span>
          <p className="text-[0.70rem] font-semibold leading-snug" style={{ color: "rgba(2,43,36,0.82)" }}>{a.title}</p>
          <p className="mt-1 text-[0.58rem]" style={{ color: "rgba(2,43,36,0.45)" }}>{a.meta}</p>
        </div>
      ))}
    </div>
  );
}

function MobileIdentityVisual() {
  return (
    <div className="flex flex-col items-center gap-3" aria-hidden="true">
      <svg viewBox="0 0 200 200" width="160" height="160">
        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(201,162,74,0.35)" strokeWidth="1" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(201,162,74,0.18)" strokeWidth="0.75" strokeDasharray="3 4" />
        <path id="top-arc-m" d="M 18 100 A 82 82 0 0 1 182 100" fill="none" />
        <text fontSize="8.5" fontFamily="'Playfair Display', serif" fontWeight="700" fill="rgba(2,43,36,0.75)" letterSpacing="0.20em">
          <textPath href="#top-arc-m" startOffset="10%">SYANOR VOYAGES</textPath>
        </text>
        <path id="bot-arc-m" d="M 38 148 A 82 82 0 0 0 162 148" fill="none" />
        <text fontSize="6.5" fontFamily="Inter, sans-serif" fill="rgba(2,43,36,0.40)" letterSpacing="0.18em">
          <textPath href="#bot-arc-m" startOffset="5%">AGENCE DE VOYAGES PREMIUM</textPath>
        </text>
        <polygon points="100,42 130,100 100,158 70,100" fill="none" stroke="rgba(201,162,74,0.40)" strokeWidth="1" />
        <text x="100" y="112" textAnchor="middle" fontFamily="'Playfair Display', serif" fontWeight="700" fontSize="34" fill="#C9A24A">S</text>
        {[0, 90, 180, 270].map((deg) => (
          <circle key={deg} cx={100 + 90 * Math.sin((deg * Math.PI) / 180)} cy={100 - 90 * Math.cos((deg * Math.PI) / 180)} r="3" fill="#C9A24A" />
        ))}
      </svg>
      <div className="flex gap-2">
        {["Expertise", "Confiance", "Excellence"].map((v) => (
          <div key={v} className="rounded-full px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.08em]" style={{ background: "rgba(6,63,51,0.07)", border: "1px solid rgba(201,162,74,0.32)", color: "#C9A24A" }}>{v}</div>
        ))}
      </div>
    </div>
  );
}

function MobileSpiritualVisual() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <svg viewBox="0 0 200 200" width="160" height="160">
        <polygon points="100,8 124,60 180,76 140,116 148,174 100,148 52,174 60,116 20,76 76,60" fill="none" stroke="rgba(201,162,74,0.45)" strokeWidth="1" />
        <polygon points="100,24 118,70 168,84 132,118 140,166 100,142 60,166 68,118 32,84 82,70" fill="none" stroke="rgba(201,162,74,0.20)" strokeWidth="0.75" transform="rotate(22.5 100 100)" />
        <circle cx="100" cy="100" r="36" fill="rgba(6,63,51,0.04)" stroke="rgba(201,162,74,0.40)" strokeWidth="1" />
        <path d="M 90 86 Q 100 76 110 86 Q 107 98 100 108 Q 93 98 90 86 Z" fill="#C9A24A" />
        <circle cx="113" cy="83" r="3" fill="none" stroke="#C9A24A" strokeWidth="1" />
        <circle cx="116" cy="83" r="1.3" fill="#C9A24A" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <circle key={deg} cx={100 + 88 * Math.sin((deg * Math.PI) / 180)} cy={100 - 88 * Math.cos((deg * Math.PI) / 180)} r="2" fill={deg % 90 === 0 ? "#C9A24A" : "rgba(201,162,74,0.30)"} />
        ))}
      </svg>
    </div>
  );
}

function MobileDefaultOrnament() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <svg viewBox="0 0 140 140" width="120" height="120">
        <polygon points="70,5 135,70 70,135 5,70" fill="none" stroke="rgba(201,162,74,0.40)" strokeWidth="1" />
        <polygon points="70,20 120,70 70,120 20,70" fill="none" stroke="rgba(201,162,74,0.22)" strokeWidth="0.75" />
        <circle cx="70" cy="70" r="18" fill="none" stroke="rgba(201,162,74,0.40)" strokeWidth="1" />
        <circle cx="70" cy="70" r="3" fill="#C9A24A" />
        {[[70, 5], [135, 70], [70, 135], [5, 70]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="#C9A24A" />
        ))}
      </svg>
    </div>
  );
}

function MobileVisual({ image, visual }: { image?: string; visual: PageHeroVisual }) {
  if (image) return <MobileImageStrip image={image} />;
  switch (visual) {
    case "services":  return <MobileServicesVisual />;
    case "routes":    return <MobileRoutesVisual />;
    case "editorial": return <MobileEditorialVisual />;
    case "identity":  return <MobileIdentityVisual />;
    case "spiritual": return <MobileSpiritualVisual />;
    default:          return <MobileDefaultOrnament />;
  }
}

/* ─────────────────────────────────────────────────────────────
   PageHero component
───────────────────────────────────────────────────────────── */

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  image,
  visual = "default",
  primaryCta,
  secondaryCta,
  warm: _warm,
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative flex"
      style={{ minHeight: "max(88vh, 640px)" }}
    >
      {/* ── Background images — clipped to section bounds ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src="/brand/hero-bg.png"
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
          loading="eager"
          decoding="async"
        />
        <img
          src="/brand/hero-mobile-bg.png"
          alt=""
          className="absolute inset-0 block h-full w-full object-cover object-center lg:hidden"
          loading="eager"
          decoding="async"
        />
      </div>


      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 pt-[88px] pb-12 md:px-8 lg:pt-[96px] lg:pb-16">
        <div className="grid w-full grid-cols-1 gap-0 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_480px]">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col justify-center">
            {crumbs && (
              <div className="mb-8">
                <Breadcrumb items={crumbs} />
              </div>
            )}

            {eyebrow && (
              <div className="mb-5 inline-flex">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                  style={{ background: "rgba(201,162,74,0.14)", border: "1px solid rgba(201,162,74,0.40)", color: "#C9A24A" }}
                >
                  <span className="h-1 w-1 rounded-full" style={{ background: "#C9A24A" }} aria-hidden="true" />
                  {eyebrow}
                </span>
              </div>
            )}

            <h1
              className="font-playfair font-bold leading-[1.06] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", color: "#022B24" }}
            >
              {title}
            </h1>

            <div className="mt-5 flex items-center gap-3" aria-hidden="true">
              <div className="h-px w-16" style={{ background: "linear-gradient(to right, #C9A24A, transparent)" }} />
              <div className="h-1 w-1 rounded-full" style={{ background: "rgba(201,162,74,0.70)" }} />
              <div className="h-px w-8" style={{ background: "linear-gradient(to right, rgba(201,162,74,0.45), transparent)" }} />
            </div>

            {subtitle && (
              <p
                className="mt-6 max-w-xl text-base leading-relaxed md:text-[1.05rem]"
                style={{ color: "rgba(2,43,36,0.72)" }}
              >
                {subtitle}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-syanor-royal transition-all duration-200 hover:opacity-90 hover:shadow-[0_8px_24px_rgba(201,162,74,0.30)] active:scale-[0.97]"
                    style={{ background: "linear-gradient(135deg, #C9A24A 0%, #e8c87a 50%, #C9A24A 100%)" }}
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
                    style={{ border: "1.5px solid rgba(2,43,36,0.28)", color: "rgba(2,43,36,0.80)" }}
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}

            {/* Mobile visual — below CTAs, hidden on lg+ */}
            <div className="mt-8 block lg:hidden">
              <MobileVisual image={image} visual={visual} />
            </div>

            {children}
          </div>

          {/* ── RIGHT: Desktop visual (lg+ only) ── */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:relative">
            {image ? (
              <div className="relative w-full">
                <div
                  className="absolute -inset-4 rounded-3xl opacity-25"
                  style={{ background: "radial-gradient(ellipse, rgba(201,162,74,0.50), transparent 70%)" }}
                  aria-hidden="true"
                />
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ border: "1px solid rgba(201,162,74,0.35)", boxShadow: "0 32px 64px rgba(6,63,51,0.18), 0 0 0 1px rgba(201,162,74,0.15)" }}
                >
                  <img src={image} alt="" aria-hidden="true" className="h-[480px] w-full object-cover" loading="eager" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,43,36,0.45) 0%, transparent 50%)" }} aria-hidden="true" />
                </div>
                <div className="absolute -bottom-3 -right-3 h-16 w-16 opacity-55" aria-hidden="true">
                  <svg viewBox="0 0 64 64" fill="none">
                    <path d="M64 0 Q64 64 0 64" stroke="rgba(201,162,74,0.65)" strokeWidth="1" fill="none" />
                    <circle cx="64" cy="64" r="3" fill="rgba(201,162,74,0.55)" />
                  </svg>
                </div>
              </div>
            ) : (
              <>
                {visual === "services"  && <ServicesVisual />}
                {visual === "editorial" && <EditorialVisual />}
                {visual === "routes"    && <RoutesVisual />}
                {visual === "identity"  && <IdentityVisual />}
                {visual === "spiritual" && <SpiritualVisual />}
                {(visual === "default" || !visual) && <DefaultOrnament />}
              </>
            )}
          </div>

        </div>
      </div>

      {/* ── Subtle ivory bottom fade — blends into page content below ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24" style={{ background: "linear-gradient(to bottom, transparent, rgba(255,249,237,0.80))" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,162,74,0.30), transparent)" }} aria-hidden="true" />
    </section>
  );
}
