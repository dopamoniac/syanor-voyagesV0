export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[580px]"
      role="img"
      aria-label="Composition cinématique SYANOR VOYAGES : globe doré, avion, ferry, Kaaba et passeport"
    >
      {/* Soft radial glow behind the whole composition */}
      <div
        className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_60%_50%,rgba(245,232,199,0.75),transparent_70%)]"
        aria-hidden="true"
      />

      {/* ── CINEMATIC IMAGE with gradient dissolves ── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/2" }}>
        <img
          src="/brand/hero-cinematic.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "64% center" }}
          loading="eager"
          decoding="async"
        />

        {/* Left dissolve — blends into ivory page background */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[32%]"
          style={{
            background:
              "linear-gradient(to right, #FFF9ED 0%, rgba(255,249,237,0.82) 40%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Top dissolve */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[18%]"
          style={{
            background: "linear-gradient(to bottom, #FFF9ED, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Bottom dissolve */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[24%]"
          style={{
            background: "linear-gradient(to top, #FFF9ED, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Right edge soften */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[10%]"
          style={{
            background: "linear-gradient(to left, rgba(255,249,237,0.5), transparent)",
          }}
          aria-hidden="true"
        />

        {/* ── Gold dashed route lines overlay ── */}
        <svg
          className="pointer-events-none absolute inset-0 z-20 h-full w-full"
          viewBox="0 0 580 387"
          fill="none"
          aria-hidden="true"
        >
          {/* Arc from ship zone → globe → top-right (airplane path) */}
          <path
            d="M60 310 C 160 230, 320 290, 490 160"
            stroke="#C9A24A"
            strokeWidth="1.4"
            strokeDasharray="5 7"
            opacity="0.45"
          />
          {/* Short arc upper area */}
          <path
            d="M140 90 C 240 55, 370 110, 500 75"
            stroke="#C9A24A"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            opacity="0.35"
          />
          {/* Small star dots along the top arc */}
          <circle cx="310" cy="75" r="2.5" fill="#C9A24A" opacity="0.5" />
          <circle cx="420" cy="92" r="2" fill="#C9A24A" opacity="0.4" />
          <circle cx="200" cy="88" r="2" fill="#C9A24A" opacity="0.35" />
        </svg>
      </div>

      {/* ── Floating UI chips — positioned on the outer container ── */}

      {/* Billets Avion — top right, near the plane */}
      <span
        className="float absolute right-[8%] top-[4%] z-30 rounded-full border border-syanor-gold/45 bg-syanor-pearl/95 px-3 py-1 text-[0.67rem] font-semibold text-syanor-emerald shadow-card backdrop-blur-sm"
        aria-hidden="true"
      >
        Billets Avion
      </span>

      {/* Billet Bateau card — left side, near the ship */}
      <div
        className="float-delay-1 absolute left-[2%] top-[30%] z-30 rounded-xl border border-syanor-gold/40 bg-syanor-pearl/95 px-3 py-2 shadow-card backdrop-blur-sm"
        aria-hidden="true"
      >
        <span className="flex items-center gap-2 text-[0.7rem] font-semibold text-syanor-emerald">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <path d="M4 16h16l-2 4H6z" />
            <path d="M6 16V9l6-2 6 2v7M12 4v3" strokeLinecap="round" />
          </svg>
          Billet Bateau · Traversée
        </span>
      </div>

      {/* Séjours sur Mesure — right center */}
      <span
        className="float-delay-1 absolute bottom-[28%] right-[2%] z-30 rounded-full border border-syanor-gold/45 bg-syanor-pearl/95 px-3 py-1 text-[0.67rem] font-semibold text-syanor-emerald shadow-card backdrop-blur-sm"
        aria-hidden="true"
      >
        Séjours sur Mesure
      </span>

      {/* Omra & Hajj — bottom center, near the Kaaba */}
      <span
        className="float-delay-2 absolute bottom-[6%] left-[26%] z-30 rounded-full border border-syanor-gold/45 bg-syanor-pearl/95 px-3 py-1 text-[0.67rem] font-semibold text-syanor-emerald shadow-card backdrop-blur-sm"
        aria-hidden="true"
      >
        Omra &amp; Hajj
      </span>

      {/* ── Luxury badge top-left ── */}
      <div
        className="float absolute left-[5%] top-[6%] z-30 flex items-center gap-1.5 rounded-full border border-syanor-gold/50 bg-syanor-ivory/90 px-2.5 py-1 shadow-gold backdrop-blur-sm"
        aria-hidden="true"
      >
        <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true">
          <path
            d="M6 1 L7.2 4.5 L11 4.5 L8 6.8 L9.2 10 L6 7.8 L2.8 10 L4 6.8 L1 4.5 L4.8 4.5 Z"
            fill="#C9A24A"
          />
        </svg>
        <span className="text-[0.6rem] font-bold uppercase tracking-widest text-syanor-emerald">
          Premium
        </span>
      </div>
    </div>
  );
}
