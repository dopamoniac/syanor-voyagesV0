import Link from "@/components/Link";

export default function RenaissanceHero() {
  return (
    <section
      id="renaissance"
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: 620 }}
    >
      {/* ── BACKGROUND — cinematic slow zoom ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ animation: "rh-zoom 14s ease-in-out infinite alternate" }}
      >
        <img
          src="/hero-renaissance.png"
          alt=""
          className="h-full w-full"
          style={{ objectFit: "cover", objectPosition: "center center" }}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* ── OVERLAYS — light touch only ── */}
      {/* Top gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        aria-hidden="true"
        style={{ height: "38%", background: "linear-gradient(to bottom, rgba(3,24,22,0.45) 0%, transparent 100%)" }}
      />
      {/* Bottom gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0"
        aria-hidden="true"
        style={{ height: "30%", background: "linear-gradient(to top, rgba(3,24,22,0.35) 0%, transparent 100%)" }}
      />
      {/* Very subtle center glow — warm ivory, almost invisible */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 52% 44% at 50% 46%, rgba(255,249,237,0.07) 0%, transparent 72%)" }}
      />

      {/* ── CENTER TEXT — positioned at 43% from top ── */}
      <div
        className="absolute left-1/2 z-10 flex flex-col items-center px-5 text-center"
        style={{
          top: "43%",
          transform: "translate(-50%, -50%)",
          width: "min(680px, 92vw)",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "0.60rem",
            fontWeight: 700,
            letterSpacing: "0.30em",
            textTransform: "uppercase",
            color: "rgba(212,175,55,0.80)",
            animation: "rh-up 0.8s 0.1s both",
          }}
        >
          SYANOR VOYAGES
        </p>

        {/* Main title */}
        <h1
          className="rh-title font-playfair font-bold leading-[1.02]"
          style={{
            marginTop: 10,
            color: "#FFF9ED",
            textShadow: "0 2px 16px rgba(0,0,0,0.18), 0 0 1px rgba(0,0,0,0.10)",
            animation: "rh-up 0.8s 0.22s both",
          }}
        >
          LA RENAISSANCE
        </h1>

        {/* Subtitle */}
        <p
          className="font-playfair"
          style={{
            marginTop: 14,
            fontSize: "clamp(1.05rem, 2.2vw, 1.7rem)",
            fontStyle: "italic",
            color: "rgba(212,175,55,0.92)",
            letterSpacing: "0.015em",
            textShadow: "0 1px 10px rgba(0,0,0,0.22)",
            animation: "rh-up 0.8s 0.34s both",
          }}
        >
          L&apos;Art de Voyager Sans Limites
        </p>

        {/* Tag line */}
        <p
          style={{
            marginTop: 8,
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgba(255,249,237,0.42)",
            animation: "rh-up 0.8s 0.42s both",
          }}
        >
          Deux univers. Une même exigence.
        </p>

        {/* ── BUTTONS ── */}
        <div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          style={{ animation: "rh-up 1.0s 0.52s both" }}
        >
          {/* Univers Voyages */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,175,55,0.28)] active:scale-[0.97]"
            style={{
              background: "#063F35",
              border: "1.5px solid rgba(212,175,55,0.65)",
              color: "#FFF9ED",
              boxShadow: "0 4px 20px rgba(6,63,51,0.32)",
            }}
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Univers Voyages
          </Link>

          {/* Omra Factory */}
          <Link
            href="/omra-hajj"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,175,55,0.22)] active:scale-[0.97]"
            style={{
              background: "rgba(255,255,255,0.82)",
              border: "1.5px solid rgba(212,175,55,0.65)",
              color: "#063F35",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.14)",
            }}
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: "rgba(212,175,55,0.85)" }}>
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            Omra Factory
          </Link>
        </div>

        {/* ── MOBILE CHIPS (shown only on mobile, below buttons) ── */}
        <div
          className="mt-5 flex items-center gap-3 sm:hidden"
          style={{ animation: "rh-up 1.0s 0.65s both" }}
        >
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(212,175,55,0.38)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" style={{ color: "rgba(212,175,55,0.80)" }}>
              <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,249,237,0.72)" }}>
              Monde &amp; Voyages
            </span>
          </div>
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(212,175,55,0.38)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: "rgba(212,175,55,0.80)" }}>
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span style={{ fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,249,237,0.72)" }}>
              Omra Factory
            </span>
          </div>
        </div>
      </div>

      {/* ── LEFT SIDE LABEL — desktop only ── */}
      <div
        className="pointer-events-none absolute hidden sm:block"
        style={{
          left: "5%",
          top: "56%",
          transform: "translateY(-50%)",
          animation: "rh-fadein 0.9s 1.2s both",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            maxWidth: 240,
            padding: "18px 22px",
            borderRadius: 22,
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(212,175,55,0.45)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          }}
        >
          <p
            style={{
              fontSize: "0.60rem",
              fontWeight: 700,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "rgba(212,175,55,0.90)",
              marginBottom: 6,
            }}
          >
            Monde &amp; Voyages
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,249,237,0.80)", lineHeight: 1.55 }}>
            Billets · Séjours · Croisières · Hôtels · VIP
          </p>
        </div>
      </div>

      {/* ── RIGHT SIDE LABEL — desktop only ── */}
      <div
        className="pointer-events-none absolute hidden sm:block"
        style={{
          right: "5%",
          top: "56%",
          transform: "translateY(-50%)",
          animation: "rh-fadein 0.9s 1.3s both",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            maxWidth: 240,
            padding: "18px 22px",
            borderRadius: 22,
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(212,175,55,0.45)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          }}
        >
          <p
            style={{
              fontSize: "0.60rem",
              fontWeight: 700,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "rgba(212,175,55,0.90)",
              marginBottom: 6,
            }}
          >
            Omra Factory
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,249,237,0.80)", lineHeight: 1.55 }}>
            Omra · Hajj · Ramadan · Ziyarat · Accompagnement
          </p>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "rh-fadein 0.9s 1.4s both" }}
        aria-hidden="true"
      >
        <p
          style={{
            fontSize: "0.52rem",
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,249,237,0.28)",
          }}
        >
          Découvrir
        </p>
        {/* Thin gold vertical line with animated dot */}
        <div className="relative flex flex-col items-center" style={{ height: 36 }}>
          <div style={{ width: 1, height: "100%", background: "rgba(212,175,55,0.35)" }} />
          <div
            style={{
              position: "absolute",
              top: 0,
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "rgba(212,175,55,0.80)",
              boxShadow: "0 0 6px rgba(212,175,55,0.50)",
              animation: "rh-dot 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* ── KEYFRAMES ── */}
      <style>{`
        /* Responsive title sizing */
        .rh-title {
          font-size: clamp(42px, 12vw, 68px);
          white-space: normal;
          word-break: keep-all;
        }
        @media (min-width: 640px) {
          .rh-title {
            font-size: clamp(64px, 8vw, 118px);
            white-space: nowrap;
          }
        }

        @keyframes rh-zoom {
          from { transform: scale(1.00); }
          to   { transform: scale(1.04); }
        }
        @keyframes rh-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rh-fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes rh-dot {
          0%,100% { opacity: 0.4; transform: translateY(0); }
          50%      { opacity: 1;   transform: translateY(28px); }
        }
      `}</style>
    </section>
  );
}
