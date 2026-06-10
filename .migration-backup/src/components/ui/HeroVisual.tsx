export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto flex w-full max-w-[480px] items-center justify-center"
      role="img"
      aria-label="Composition illustrant le voyage : globe, avion, ferry et destination spirituelle"
    >
      {/* LAYER 0 — soft radial glow */}
      <div
        className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,232,199,0.9),rgba(255,249,237,0)_70%)]"
        aria-hidden="true"
      />

      <div className="relative aspect-square w-full max-w-[420px]">
        {/* LAYER 6 — gold route lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M70 300 C 140 240, 260 360, 340 270"
            stroke="#C9A24A"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.5"
          />
          <path
            d="M60 120 C 160 60, 250 150, 350 90"
            stroke="#C9A24A"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.4"
          />
        </svg>

        {/* LAYER 1 — globe with orbital arcs */}
        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
            <defs>
              <radialGradient id="globeFill" cx="38%" cy="34%" r="70%">
                <stop offset="0%" stopColor="#FFFDF6" />
                <stop offset="100%" stopColor="#F5E8C7" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="78" fill="url(#globeFill)" />
            <circle
              cx="100"
              cy="100"
              r="78"
              fill="none"
              stroke="#063F33"
              strokeWidth="1.4"
              opacity="0.18"
            />
            {/* meridians / parallels */}
            <g stroke="#063F33" strokeWidth="0.8" opacity="0.14" fill="none">
              <ellipse cx="100" cy="100" rx="40" ry="78" />
              <ellipse cx="100" cy="100" rx="68" ry="78" />
              <line x1="22" y1="100" x2="178" y2="100" />
              <ellipse cx="100" cy="100" rx="78" ry="34" />
              <ellipse cx="100" cy="100" rx="78" ry="62" />
            </g>
            {/* abstract gold continents */}
            <g fill="#C9A24A" opacity="0.85">
              <path d="M96 52c8-2 16 2 18 9s-4 12-10 14-6 9-12 11-13-3-12-10 6-9 8-15 0-7 8-9z" />
              <path d="M118 96c6-1 11 3 11 9s-5 11-11 11-9-5-8-11 2-8 8-9z" />
              <path d="M70 110c5 0 9 5 8 10s-7 8-11 6-5-9-2-13 2-3 5-3z" />
            </g>
          </svg>

          {/* orbital ring */}
          <svg
            viewBox="0 0 220 220"
            className="orbit-spin absolute -inset-[18px] h-[calc(100%+36px)] w-[calc(100%+36px)]"
            aria-hidden="true"
          >
            <ellipse
              cx="110"
              cy="110"
              rx="104"
              ry="64"
              fill="none"
              stroke="#C9A24A"
              strokeWidth="1.2"
              strokeDasharray="2 8"
              opacity="0.6"
            />
            <circle cx="214" cy="110" r="3" fill="#C9A24A" />
          </svg>
        </div>

        {/* LAYER 2 — floating airplane */}
        <div className="float absolute right-[6%] top-[8%] text-syanor-emerald">
          <svg width="64" height="64" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13 18v-4.5z"
            />
          </svg>
        </div>

        {/* LAYER 3 — ferry glass card */}
        <div className="float-delay-1 absolute -left-2 top-[26%] rounded-xl border border-syanor-gold/40 bg-syanor-pearl/90 px-3 py-2 shadow-card backdrop-blur">
          <span className="flex items-center gap-2 text-[0.7rem] font-medium text-syanor-emerald">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M4 16h16l-2 4H6z" />
              <path d="M6 16V9l6-2 6 2v7M12 4v3" strokeLinecap="round" />
            </svg>
            Billet Bateau · Traversée
          </span>
        </div>

        {/* LAYER 4 — Kaaba cube (isometric) */}
        <div className="float-delay-2 absolute bottom-[10%] right-[10%]">
          <svg width="76" height="76" viewBox="0 0 80 80" aria-hidden="true">
            <g
              fill="none"
              stroke="#C9A24A"
              strokeWidth="1.4"
              strokeLinejoin="round"
            >
              <path d="M40 14 66 26 40 38 14 26z" fill="#063F33" opacity="0.92" />
              <path d="M14 26 14 54 40 66 40 38z" fill="#063F33" opacity="0.8" />
              <path d="M66 26 66 54 40 66 40 38z" fill="#063F33" opacity="0.7" />
              <path d="M14 33 40 45 66 33" stroke="#C9A24A" opacity="0.7" />
            </g>
          </svg>
        </div>

        {/* LAYER 5 — floating chips */}
        <span className="float absolute left-[4%] top-[4%] rounded-full border border-syanor-gold/40 bg-syanor-pearl px-3 py-1 text-[0.65rem] font-medium text-syanor-emerald shadow-card">
          Billets Avion
        </span>
        <span className="float-delay-2 absolute bottom-[2%] left-[18%] rounded-full border border-syanor-gold/40 bg-syanor-pearl px-3 py-1 text-[0.65rem] font-medium text-syanor-emerald shadow-card">
          Omra &amp; Hajj
        </span>
        <span className="float-delay-1 absolute right-[2%] bottom-[34%] rounded-full border border-syanor-gold/40 bg-syanor-pearl px-3 py-1 text-[0.65rem] font-medium text-syanor-emerald shadow-card">
          Séjours sur Mesure
        </span>
      </div>
    </div>
  );
}
