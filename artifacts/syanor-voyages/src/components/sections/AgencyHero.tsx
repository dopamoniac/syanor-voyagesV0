import Link from "@/components/Link";
import HeroVisual from "@/components/ui/HeroVisual";

const trustPills = [
  "Billets avion & bateau",
  "Séjours sur mesure",
  "Voyages organisés",
  "Packs Premium / VIP",
  "Assistance visa",
];

export default function AgencyHero() {
  return (
    <section
      id="accueil"
      className="relative flex flex-col justify-start overflow-hidden bg-syanor-ivory"
      style={{ minHeight: "max(92vh, 780px)" }}
    >
      {/* ── HERO BACKGROUND — static image ── */}
      <picture className="absolute inset-0 h-full w-full" aria-hidden="true">
        <source media="(min-width: 1024px)" srcSet="/hero-bg-new.png" />
        <img
          src="/hero-bg-new.png"
          alt=""
          className="h-full w-full object-cover"
          style={{ objectPosition: "65% center" }}
          loading="eager"
          decoding="async"
        />
      </picture>
      {/* ── OVERLAYS ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40"
        style={{ background: "linear-gradient(to bottom, rgba(255,249,237,0.62) 0%, rgba(255,249,237,0.22) 55%, transparent 100%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28"
        style={{ background: "linear-gradient(to top, #FFF9ED 0%, rgba(255,249,237,0.55) 55%, transparent 100%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute z-10 hidden lg:block"
        style={{
          right: "8%", top: "50%", transform: "translateY(-50%)",
          width: "560px", height: "560px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,162,74,0.06) 0%, transparent 68%)",
        }}
        aria-hidden="true"
      />
      {/* ── CONTENT LAYER ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-[82px] md:px-10 lg:pt-[96px]">
        <div className="grid items-center gap-0 lg:grid-cols-[52%_48%]" style={{ minHeight: "calc(92vh - 5rem)" }}>

          {/* ── TEXT COLUMN ── */}
          <div className="pb-16 pt-3 text-left lg:py-0">

            {/* Brand eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-syanor-gold/50" aria-hidden="true" />
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-syanor-gold">Agence de voyages </p>
            </div>

            {/* Headline */}
            <h1
              className="font-playfair font-bold leading-[1.08] text-[clamp(2.6rem,5.5vw,4rem)]"
              style={{ color: "#0e0a02" }}
            >
              Voyagez en toute{" "}
              <span
                className="lg:hidden"
                style={{
                  background: "linear-gradient(135deg,#C9A24A 0%,#e8c97a 50%,#C9A24A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                sérénité.
              </span>
              <span className="hidden lg:inline text-[#c9a24a]">sérénité.</span>
            </h1>

            {/* Sub */}
            <p className="mt-6 max-w-[520px] font-inter text-base leading-relaxed text-syanor-ink/68">
              SYANOR VOYAGES vous accompagne pour vos billets d&apos;avion et de bateau,
              vos séjours sur mesure, vos voyages organisés, vos packs VIP et toutes
              vos démarches visa &amp; assistance.
            </p>

            {/* ── CTA — agency only, no cross-space link ── */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/agence/services"
                className="group inline-flex items-center gap-2.5 rounded-full bg-syanor-emerald px-6 py-3.5 text-sm font-semibold text-syanor-ivory shadow-[0_4px_20px_rgba(6,63,51,0.25)] transition-all duration-200 hover:bg-syanor-royal hover:shadow-[0_8px_32px_rgba(6,63,51,0.35)] active:scale-[0.97]"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Nos voyages & services
              </Link>

              <Link
                href="/agence/contact#quote"
                className="group inline-flex items-center gap-2.5 rounded-full border border-syanor-gold/40 bg-syanor-gold/8 px-6 py-3.5 text-sm font-semibold text-syanor-ink/80 transition-all duration-200 hover:border-syanor-gold hover:bg-syanor-gold/15 hover:text-syanor-ink active:scale-[0.97]"
              >
                <svg className="h-4 w-4 shrink-0 text-syanor-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Demander un devis
              </Link>
            </div>

            {/* Service pills */}
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {trustPills.map((pill) => (
                <li key={pill} className="flex items-center gap-2 text-sm text-syanor-ink/60">
                  <span className="text-syanor-gold" aria-hidden="true">✦</span>
                  {pill}
                </li>
              ))}
            </ul>
          </div>

          {/* ── CHIPS COLUMN (desktop only) ── */}
          <div className="hidden lg:flex lg:h-full lg:items-center lg:justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
