import Link from "@/components/Link";

/* ─── Color tokens ───────────────────────────────────────
   Deep Navy  : #0B1E3D
   Champagne  : #D8B56A
   Ivory      : #F8F4EE
──────────────────────────────────────────────────────── */

export default function RenaissanceHero() {
  return (
    <section
      id="renaissance"
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: 620 }}
    >

      {/* ══ BACKGROUND — 15s cinematic zoom ══ */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ animation: "rh-zoom 15s ease-in-out infinite alternate" }}
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

      {/* ══ ATMOSPHERIC OVERLAYS ══ */}

      {/* Top vignette — navy */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        aria-hidden="true"
        style={{ height: "40%", background: "linear-gradient(to bottom, rgba(11,30,61,0.52) 0%, transparent 100%)" }}
      />

      {/* Bottom vignette — navy */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0"
        aria-hidden="true"
        style={{ height: "28%", background: "linear-gradient(to top, rgba(11,30,61,0.38) 0%, transparent 100%)" }}
      />

      {/* Horizon haze — soft champagne warmth, 10-15% only */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 65% 38% at 50% 46%, rgba(255,249,237,0.09) 0%, transparent 72%)",
        }}
      />

      {/* Dark navy vignette — ONLY behind the center text block */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: [
            "radial-gradient(circle at 50% 44%, rgba(8,20,45,0.38) 0%, rgba(8,20,45,0.22) 35%, transparent 70%)",
          ].join(", "),
        }}
      />

      {/* ══ CENTER CONTENT ══ */}
      <div
        className="absolute left-1/2 z-10 flex flex-col items-center px-5 text-center"
        style={{
          top: "44%",
          transform: "translate(-50%, -50%)",
          width: "min(700px, 94vw)",
        }}
      >

        {/* Eyebrow */}
        <p
          style={{
            fontSize: "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#D8B56A",
            animation: "rh-up 0.8s 0s both",
          }}
        >
          SYANOR VOYAGES
        </p>

        {/* ── Gold micro-rule ── */}
        <div
          aria-hidden="true"
          style={{
            marginTop: 12,
            width: 38,
            height: 1,
            background: "linear-gradient(to right, transparent, #D8B56A, transparent)",
            opacity: 0.7,
            animation: "rh-up 0.8s 0.08s both",
          }}
        />

        {/* Main title */}
        <h1
          className="rh-title font-playfair"
          style={{
            marginTop: 14,
            fontWeight: 500,
            lineHeight: 1.02,
            color: "#F8F4EE",
            textShadow: "0 2px 12px rgba(0,0,0,.20), 0 0 40px rgba(255,215,140,.08)",
            animation: "rh-up 0.8s 0.0s both",
          }}
        >
          LA RENAISSANCE
        </h1>

        {/* Subtitle */}
        <p
          className="rh-subtitle font-playfair"
          style={{
            marginTop: 16,
            fontStyle: "italic",
            color: "#D8B56A",
            letterSpacing: "0.01em",
            textShadow: "0 2px 10px rgba(0,0,0,.25)",
            animation: "rh-up 1.0s 0.2s both",
          }}
        >
          L&apos;Art de Voyager Sans Limites
        </p>

        {/* Secondary line */}
        <p
          style={{
            marginTop: 10,
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(248,244,238,.56)",
            animation: "rh-up 1.0s 0.28s both",
          }}
        >
          Deux univers. Une même exigence.
        </p>

        {/* ── BUTTONS ── */}
        <div
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          style={{ animation: "rh-up 1.2s 0.4s both" }}
        >
          {/* Button 1 — Univers Voyages */}
          <Link
            href="/agence"
            className="rh-btn inline-flex items-center justify-center gap-2.5 rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
            style={{
              background: "#0B1E3D",
              border: "1px solid #D8B56A",
              color: "#FFFFFF",
              boxShadow: "0 4px 18px rgba(11,30,61,0.30)",
            }}
          >
            <svg className="h-4 w-4 shrink-0 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Univers Voyages
          </Link>

          {/* Button 2 — Omra Factory */}
          <Link
            href="/omra-factory"
            className="rh-btn inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
            style={{
              background: "rgba(255,255,255,.92)",
              border: "1px solid #D8B56A",
              color: "#0B1E3D",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
            }}
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: "#D8B56A" }}>
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            Omra Factory
          </Link>
        </div>

        {/* ── MOBILE CHIPS — replaces side labels on mobile ── */}
        <div
          className="mt-5 flex items-center gap-3 sm:hidden"
          style={{ animation: "rh-fadein 1.0s 0.6s both" }}
        >
          {[
            { label: "Monde & Voyages", icon: "globe" },
            { label: "Omra Factory",   icon: "crescent" },
          ].map(({ label, icon }) => (
            <div
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(216,181,106,0.32)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {icon === "globe" ? (
                <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" style={{ color: "#D8B56A" }}>
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: "#D8B56A" }}>
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
              <span style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(248,244,238,0.72)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ LEFT SIDE LABEL — sm+ only ══ */}
      <div
        className="pointer-events-none absolute hidden sm:block"
        style={{
          left: "5%",
          top: "57%",
          transform: "translateY(-50%)",
          animation: "rh-fadein 0.8s 0.8s both",
        }}
        aria-hidden="true"
      >
        <div style={{
          maxWidth: 220,
          padding: "15px 20px",
          borderRadius: 20,
          background: "rgba(255,255,255,.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(216,181,106,.30)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}>
          <p style={{ fontSize: "0.57rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D8B56A", marginBottom: 5 }}>
            Monde &amp; Voyages
          </p>
          <p style={{ fontSize: "0.69rem", color: "#F8F4EE", lineHeight: 1.5, opacity: 0.82 }}>
            Billets · Séjours · Croisières · Hôtels · VIP
          </p>
        </div>
      </div>

      {/* ══ RIGHT SIDE LABEL — sm+ only ══ */}
      <div
        className="pointer-events-none absolute hidden sm:block"
        style={{
          right: "5%",
          top: "57%",
          transform: "translateY(-50%)",
          animation: "rh-fadein 0.8s 0.9s both",
        }}
        aria-hidden="true"
      >
        <div style={{
          maxWidth: 220,
          padding: "15px 20px",
          borderRadius: 20,
          background: "rgba(255,255,255,.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(216,181,106,.30)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}>
          <p style={{ fontSize: "0.57rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D8B56A", marginBottom: 5 }}>
            Omra Factory
          </p>
          <p style={{ fontSize: "0.69rem", color: "#F8F4EE", lineHeight: 1.5, opacity: 0.82 }}>
            Omra · Hajj · Ramadan · Ziyarat · Accompagnement
          </p>
        </div>
      </div>

      {/* ══ SCROLL INDICATOR ══ */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "rh-fadein 0.8s 1.0s both" }}
        aria-hidden="true"
      >
        <p style={{
          fontSize: "0.50rem",
          fontWeight: 700,
          letterSpacing: "0.30em",
          textTransform: "uppercase",
          color: "rgba(248,244,238,0.24)",
        }}>
          Découvrir
        </p>
        <div className="relative flex flex-col items-center" style={{ height: 36 }}>
          <div style={{ width: 1, height: "100%", background: "rgba(216,181,106,0.32)" }} />
          <div style={{
            position: "absolute",
            top: 0,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#D8B56A",
            boxShadow: "0 0 8px rgba(216,181,106,0.60)",
            animation: "rh-dot 1.9s ease-in-out infinite",
          }} />
        </div>
      </div>

      {/* ══ CSS ══ */}
      <style>{`
        /* Title — responsive */
        .rh-title {
          font-size: clamp(40px, 11vw, 64px);
          white-space: normal;
          word-break: keep-all;
        }
        @media (min-width: 640px) {
          .rh-title {
            font-size: clamp(72px, 7vw, 120px);
            white-space: nowrap;
          }
        }

        /* Subtitle — responsive */
        .rh-subtitle {
          font-size: 22px;
        }
        @media (min-width: 640px) {
          .rh-subtitle {
            font-size: 32px;
          }
        }

        /* Buttons — height 58px, padding 0 34px */
        .rh-btn {
          height: 58px;
          padding: 0 34px;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
        }
        .rh-btn:hover {
          box-shadow: 0 12px 30px rgba(216,181,106,.18) !important;
        }
        @media (max-width: 639px) {
          .rh-btn {
            width: 100%;
            max-width: 280px;
            height: 52px;
          }
        }

        /* Keyframes */
        @keyframes rh-zoom {
          from { transform: scale(1.00); }
          to   { transform: scale(1.04); }
        }
        @keyframes rh-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rh-fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes rh-dot {
          0%,100% { opacity: 0.35; transform: translateY(0); }
          50%      { opacity: 1;    transform: translateY(28px); }
        }
      `}</style>
    </section>
  );
}
