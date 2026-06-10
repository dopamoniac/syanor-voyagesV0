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
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-syanor-ivory"
    >
      {/* ── CINEMATIC FULL-BLEED IMAGE ── */}
      <img
        src="/brand/hero-cinematic.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "72% 54%" }}
        loading="eager"
        decoding="async"
      />

      {/* ── SMOKE / MIST PUFFS — rising from globe base ── */}
      <div
        className="smoke-a pointer-events-none absolute z-10 hidden lg:block"
        style={{
          bottom: "18%",
          left: "54%",
          width: "340px",
          height: "160px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,249,237,0.82) 0%, rgba(245,232,199,0.45) 45%, transparent 72%)",
          filter: "blur(28px)",
        }}
        aria-hidden="true"
      />
      <div
        className="smoke-b pointer-events-none absolute z-10 hidden lg:block"
        style={{
          bottom: "12%",
          left: "62%",
          width: "260px",
          height: "120px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,249,237,0.75) 0%, rgba(250,244,232,0.38) 50%, transparent 75%)",
          filter: "blur(22px)",
        }}
        aria-hidden="true"
      />
      <div
        className="smoke-c pointer-events-none absolute z-10 hidden lg:block"
        style={{
          bottom: "22%",
          left: "48%",
          width: "200px",
          height: "90px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,252,240,0.70) 0%, transparent 70%)",
          filter: "blur(18px)",
        }}
        aria-hidden="true"
      />

      {/* Vignette: left text-readability wash */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[65%]"
        style={{
          background:
            "linear-gradient(to right, #FFF9ED 0%, #FFF9ED 28%, rgba(255,249,237,0.93) 46%, rgba(255,249,237,0.55) 62%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Vignette: top (navbar bleed + plane clearance) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-52"
        style={{ background: "linear-gradient(to bottom, #FFF9ED 0%, rgba(255,249,237,0.65) 55%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Vignette: bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32"
        style={{ background: "linear-gradient(to top, #FFF9ED 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Decorative radial gold shimmer around globe zone */}
      <div
        className="pointer-events-none absolute z-10 hidden lg:block"
        style={{
          right: "4%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,162,74,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── CONTENT LAYER ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 md:px-8 pt-20 lg:pt-24">
        <div className="grid min-h-[calc(92vh-5rem)] items-center gap-0 lg:grid-cols-[52%_48%]">

          {/* ── TEXT COLUMN ── */}
          <div className="pb-16 pt-8 text-center lg:py-0 lg:text-left">
            <p className="eyebrow">BILLETS · OMRA &amp; HAJJ · SÉJOURS SUR MESURE</p>

            <h1 className="mt-4 font-playfair text-4xl font-bold leading-[1.08] text-syanor-ink sm:text-5xl md:text-h1 lg:text-[3.6rem]">
              Voyagez avec élégance,&nbsp;sérénité et confiance.
            </h1>

            <p className="mx-auto mt-6 max-w-lg font-inter text-base leading-relaxed text-syanor-ink/70 lg:mx-0">
              SYANOR VOYAGES accompagne vos billets d&apos;avion et de bateau, vos
              voyages spirituels, vos séjours organisés et vos projets sur mesure
              avec une exigence premium.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/contact#quote" className="btn-primary w-full sm:w-auto">
                Demander un devis personnalisé
              </Link>
              <Link href="/services" className="btn-secondary w-full sm:w-auto">
                Découvrir nos services
              </Link>
            </div>

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
