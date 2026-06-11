import Link from "@/components/Link";
import HeroVisual from "@/components/ui/HeroVisual";

const trustPills = [
  "Assistance personnalisée",
  "Offres sur mesure",
  "Départs accompagnés",
  "Service premium",
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[92vh] flex-col justify-start overflow-hidden bg-syanor-ivory"
      style={{ minHeight: "max(92vh, 780px)" }}
    >
      {/* ── HERO BACKGROUND IMAGE ── */}
      <picture className="absolute inset-0 h-full w-full" aria-hidden="true">
        {/* Mobile — 9:16 premium shot (objects bottom-right, open space top-left) */}
        <source media="(max-width: 1023px)" srcSet="/hero/mobile-hero.png" />
        {/* Desktop — landscape scene */}
        <img
          src="/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
          style={{ objectPosition: "65% center" }}
          loading="eager"
          decoding="async"
        />
      </picture>
      {/* ── OVERLAY 0 (mobile only): soft dark smoke for text legibility ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10 lg:hidden"
        style={{
          background:
            "linear-gradient(175deg, rgba(2,20,14,0.38) 0%, rgba(2,20,14,0.22) 40%, rgba(2,20,14,0.10) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* ── OVERLAY 1: Left-to-right ivory wash for text legibility ── */}
      {/* Solid ivory left 30%, fades softly to transparent at 72% */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-full"
        style={{
          background:
            "linear-gradient(to right, #FFF9ED 0%, #FFF9ED 26%, rgba(255,249,237,0.94) 40%, rgba(255,249,237,0.72) 54%, rgba(255,249,237,0.28) 68%, transparent 82%)",
        }}
        aria-hidden="true"
      />
      {/* ── OVERLAY 2: Top fade — navbar bleed ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,249,237,0.80) 0%, rgba(255,249,237,0.30) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* ── OVERLAY 3: Bottom fade — smooth transition to page ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28"
        style={{
          background:
            "linear-gradient(to top, #FFF9ED 0%, rgba(255,249,237,0.55) 55%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* ── OVERLAY 4: Subtle gold shimmer behind visual zone ── */}
      <div
        className="pointer-events-none absolute z-10 hidden lg:block"
        style={{
          right: "8%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,162,74,0.06) 0%, transparent 68%)",
        }}
        aria-hidden="true"
      />
      {/* ── CONTENT LAYER ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-[82px] md:px-10 lg:pt-[96px] text-[color:var(--color-amber-400)]">
        <div className="grid min-h-[calc(92vh-5rem)] items-center gap-0 lg:grid-cols-[52%_48%]">

          {/* ── TEXT COLUMN ── */}
          <div className="pb-16 pt-3 text-center lg:py-0 lg:text-left">

            {/* Eyebrow */}
            <p className="eyebrow">
              BILLETS · OMRA &amp; HAJJ · SÉJOURS SUR MESURE
            </p>

            {/* Headline */}
            <h1 className="mt-4 font-playfair text-5xl font-bold leading-[1.08] sm:text-5xl md:text-h1 lg:text-[3.6rem] text-[#0e0a02]">
              Voyagez en toute sérénité.
            </h1>

            {/* Sub */}
            <p className="mx-auto mt-6 max-w-[540px] font-inter text-base leading-relaxed text-syanor-ink/68 lg:mx-0">
              SYANOR VOYAGES vous accompagne pour vos billets d&apos;avion et de bateau,
              vos voyages spirituels, vos séjours organisés et vos projets sur
              mesure selon vos exigences.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/contact#quote" className="btn-primary w-full sm:w-auto">
                Demander un devis personnalisé
              </Link>
              <Link href="/services" className="btn-secondary w-full sm:w-auto">
                Découvrir nos services
              </Link>
            </div>

            {/* Trust pills */}
            <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
              {trustPills.map((pill) => (
                <li
                  key={pill}
                  className="flex items-center gap-2 text-sm text-syanor-ink/65"
                >
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
