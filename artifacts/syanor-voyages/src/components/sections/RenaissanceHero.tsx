import Link from "@/components/Link";
import Logo from "@/components/ui/Logo";

export default function RenaissanceHero() {
  return (
    <section
      id="renaissance"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ height: "100svh", minHeight: 620 }}
    >
      {/* ── BACKGROUND IMAGE — cinematic slow zoom ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true"
        style={{ animation: "rh-zoom 24s ease-in-out infinite alternate" }}>
        <img
          src="/hero-renaissance.jpg"
          alt=""
          className="h-full w-full"
          style={{ objectFit: "cover", objectPosition: "center center" }}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* ── OVERLAYS ── */}
      {/* Edge vignette */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 88% 88% at 50% 50%, transparent 18%, rgba(1,12,7,0.55) 100%)" }} />
      {/* Top dark band */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32" aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, rgba(1,12,7,0.50) 0%, transparent 100%)" }} />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24" aria-hidden="true"
        style={{ background: "linear-gradient(to top, rgba(1,12,7,0.32) 0%, transparent 100%)" }} />
      {/* Center dark ellipse — behind text block for legibility */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div style={{
          width: "min(580px, 90vw)",
          height: 340,
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(1,12,7,0.62) 0%, rgba(1,12,7,0.30) 60%, transparent 82%)",
        }} />
      </div>

      {/* ── LEFT GLASS CARD — desktop only ── */}
      <div className="pointer-events-none absolute hidden xl:block"
        style={{ left: "clamp(20px,3vw,52px)", top: "50%", transform: "translateY(-50%)", animation: "rh-in 0.7s 0.5s both" }}
        aria-hidden="true">
        <div className="flex flex-col gap-2 rounded-2xl px-5 py-4" style={{
          background: "rgba(255,249,237,0.80)", border: "1px solid rgba(212,176,106,0.58)",
          backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)", maxWidth: 200,
        }}>
          <p className="text-[0.56rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(170,120,30,0.90)" }}>
            Monde &amp; Voyages
          </p>
          <div className="h-px" style={{ background: "rgba(201,162,74,0.35)" }} />
          {["Billets avion","Billets bateau","Séjours sur mesure","Hôtels Premium","Expériences VIP"].map(s => (
            <p key={s} className="flex items-center gap-2 text-[0.67rem] font-medium" style={{ color: "#18120a" }}>
              <span style={{ color: "#C9A24A", fontSize: "0.46rem" }}>✦</span>{s}
            </p>
          ))}
        </div>
      </div>

      {/* ── RIGHT GLASS CARD — desktop only ── */}
      <div className="pointer-events-none absolute hidden xl:block"
        style={{ right: "clamp(20px,3vw,52px)", top: "50%", transform: "translateY(-50%)", animation: "rh-in 0.7s 0.6s both" }}
        aria-hidden="true">
        <div className="flex flex-col gap-2 rounded-2xl px-5 py-4" style={{
          background: "rgba(255,249,237,0.80)", border: "1px solid rgba(212,176,106,0.58)",
          backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)", maxWidth: 200,
        }}>
          <p className="text-[0.56rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(170,120,30,0.90)" }}>
            Omra Factory
          </p>
          <div className="h-px" style={{ background: "rgba(201,162,74,0.35)" }} />
          {["Omra 2026 & 2027","Hajj 2027","Ramadan","Ziyarat","Accompagnement spirituel"].map(s => (
            <p key={s} className="flex items-center gap-2 text-[0.67rem] font-medium" style={{ color: "#18120a" }}>
              <span style={{ color: "#C9A24A", fontSize: "0.46rem" }}>✦</span>{s}
            </p>
          ))}
        </div>
      </div>

      {/* ── CENTER CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center px-5 text-center" style={{ maxWidth: 620 }}>

        {/* Logo */}
        <div style={{ animation: "rh-in 0.7s 0.05s both" }}>
          <Logo className="h-auto w-[126px] sm:w-[148px]" />
        </div>

        {/* Gold rule */}
        <div style={{
          width: 40, height: 1, marginTop: 14, marginBottom: 14,
          background: "linear-gradient(to right, transparent, rgba(201,162,74,0.92), transparent)",
          animation: "rh-in 0.7s 0.15s both",
        }} aria-hidden="true" />

        {/* Eyebrow */}
        <p style={{
          fontSize: "0.56rem", fontWeight: 700, letterSpacing: "0.26em",
          textTransform: "uppercase", color: "rgba(255,249,237,0.52)",
          textShadow: "0 1px 8px rgba(0,0,0,0.55)",
          animation: "rh-in 0.7s 0.20s both",
        }}>
          SYANOR VOYAGES — depuis Nice &amp; Marseille
        </p>

        {/* Main title — single line at all breakpoints */}
        <h1 style={{
          marginTop: 10,
          fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
          fontWeight: 700,
          lineHeight: 1.04,
          fontSize: "clamp(2.0rem, 4.8vw, 3.8rem)",
          whiteSpace: "nowrap",
          textShadow: "0 2px 20px rgba(0,0,0,0.60), 0 0 2px rgba(0,0,0,0.25)",
          animation: "rh-in 0.7s 0.28s both",
        }}>
          <span style={{
            background: "linear-gradient(135deg,#fff9ed 0%,#f5e9c8 28%,#e8c87a 62%,#C9A24A 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            LA RENAISSANCE
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          marginTop: 10,
          fontFamily: "var(--font-playfair,'Playfair Display',serif)",
          fontSize: "clamp(1rem,2vw,1.2rem)",
          fontStyle: "italic",
          letterSpacing: "0.02em",
          color: "rgba(255,249,237,0.92)",
          textShadow: "0 1px 12px rgba(0,0,0,0.55)",
          animation: "rh-in 0.7s 0.35s both",
        }}>
          L&apos;Art de Voyager Sans Limites
        </p>

        {/* Tagline */}
        <p style={{
          marginTop: 6,
          fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,249,237,0.36)",
          textShadow: "0 1px 6px rgba(0,0,0,0.45)",
          animation: "rh-in 0.7s 0.40s both",
        }}>
          Deux univers. Une même exigence.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          style={{ animation: "rh-in 0.7s 0.48s both" }}>

          <Link href="/services"
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-[0_8px_28px_rgba(6,63,51,0.50)] active:scale-[0.97]"
            style={{ background:"#063F33", border:"1px solid rgba(201,162,74,0.50)", color:"#FFF9ED", boxShadow:"0 4px 20px rgba(0,0,0,0.30)" }}>
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Univers Voyages
          </Link>

          <Link href="/omra-hajj"
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:shadow-[0_8px_28px_rgba(201,162,74,0.30)] active:scale-[0.97]"
            style={{ background:"rgba(255,249,237,0.88)", border:"1px solid rgba(201,162,74,0.70)", color:"#063F33", backdropFilter:"blur(12px)", WebkitBackdropFilter:"blur(12px)", boxShadow:"0 4px 20px rgba(0,0,0,0.18)" }}>
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color:"#C9A24A" }}>
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            Omra Factory
          </Link>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ animation: "rh-in 0.7s 0.65s both" }} aria-hidden="true">
        <p style={{ fontSize:"0.50rem", fontWeight:700, letterSpacing:"0.26em", textTransform:"uppercase", color:"rgba(255,249,237,0.26)" }}>
          Découvrir
        </p>
        <div className="flex h-7 w-4 items-start justify-center rounded-full border"
          style={{ borderColor:"rgba(255,249,237,0.18)" }}>
          <div style={{ marginTop:6, width:1, height:8, borderRadius:9999, background:"rgba(201,162,74,0.72)", animation:"rh-dot 1.8s ease-in-out infinite" }} />
        </div>
      </div>

      <style>{`
        @keyframes rh-zoom {
          from { transform: scale(1.00); }
          to   { transform: scale(1.055); }
        }
        @keyframes rh-in {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rh-dot {
          0%,100% { opacity:.35; transform:translateY(0); }
          50%      { opacity:1;   transform:translateY(7px); }
        }
      `}</style>
    </section>
  );
}
