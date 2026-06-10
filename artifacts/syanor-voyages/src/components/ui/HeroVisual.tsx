export default function HeroVisual() {
  return (
    <div
      className="relative h-[500px] w-full max-w-[560px]"
      role="presentation"
      aria-hidden="true"
    >
      {/* Gold dashed route lines */}
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
        {/* Star dots */}
        <circle cx="320" cy="68" r="2.5" fill="#C9A24A" opacity="0.55" />
        <circle cx="450" cy="100" r="2"   fill="#C9A24A" opacity="0.42" />
        <circle cx="200" cy="92" r="2"   fill="#C9A24A" opacity="0.35" />
        <circle cx="410" cy="330" r="2.5" fill="#C9A24A" opacity="0.4" />
      </svg>

      {/* ── Premium badge — top-left ── */}
      <div className="float absolute left-[6%] top-[10%] flex items-center gap-1.5 rounded-full border border-syanor-gold/55 bg-syanor-ivory/92 px-3 py-1.5 shadow-card backdrop-blur-sm">
        <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true">
          <path
            d="M6 1 L7.2 4.5 L11 4.5 L8 6.8 L9.2 10 L6 7.8 L2.8 10 L4 6.8 L1 4.5 L4.8 4.5 Z"
            fill="#C9A24A"
          />
        </svg>
        <span className="text-[0.62rem] font-bold uppercase tracking-widest text-syanor-emerald">
          Premium
        </span>
      </div>

      {/* ── Billets Avion — top right, near airplane ── */}
      <span className="float absolute right-[5%] top-[14%] rounded-full border border-syanor-gold/45 bg-syanor-pearl/95 px-3 py-1.5 text-[0.68rem] font-semibold text-syanor-emerald shadow-card backdrop-blur-sm">
        Billets Avion
      </span>

      {/* ── Billet Bateau glass card — mid-left, near ship ── */}
      <div className="float-delay-1 absolute left-[3%] top-[43%] rounded-xl border border-syanor-gold/40 bg-syanor-pearl/95 px-3.5 py-2.5 shadow-card backdrop-blur-sm">
        <span className="flex items-center gap-2 text-[0.72rem] font-semibold text-syanor-emerald">
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

      {/* ── Séjours sur Mesure — right center ── */}
      <span className="float-delay-1 absolute right-[4%] top-[55%] rounded-full border border-syanor-gold/45 bg-syanor-pearl/95 px-3 py-1.5 text-[0.68rem] font-semibold text-syanor-emerald shadow-card backdrop-blur-sm">
        Séjours sur Mesure
      </span>

      {/* ── Omra & Hajj — bottom center-left, near Kaaba ── */}
      <span className="float-delay-2 absolute bottom-[18%] left-[28%] rounded-full border border-syanor-gold/45 bg-syanor-pearl/95 px-3 py-1.5 text-[0.68rem] font-semibold text-syanor-emerald shadow-card backdrop-blur-sm">
        Omra &amp; Hajj
      </span>
    </div>
  );
}
