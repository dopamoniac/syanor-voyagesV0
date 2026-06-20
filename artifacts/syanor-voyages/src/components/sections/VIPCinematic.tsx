import Link from "@/components/Link";

const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" strokeLinecap="round" />
        <rect x="9" y="11" width="14" height="10" rx="2" />
        <path d="M13 16h4M15 14v4" strokeLinecap="round" />
      </svg>
    ),
    title: "Transferts Privés",
    desc: "Chauffeur ou minibus VIP, de l'aéroport à chaque étape de votre voyage.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" />
      </svg>
    ),
    title: "Hôtels 5★ Sélectionnés",
    desc: "Palaces et adresses de prestige soigneusement choisis pour chaque destination.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Conciergerie Dédiée",
    desc: "Un conseiller attitré qui orchestre chaque détail, de A à Z.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.49 2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 16z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Assistance Continue",
    desc: "Disponible avant, pendant et après votre voyage — 24h/24, 7j/7.",
  },
];

export default function VIPCinematic() {
  return (
    <section
      id="vip"
      className="overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FFFDF8, #F8F2E8)" }}
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 lg:py-24 xl:px-12">

        {/* ── Editorial split: text left / image right ── */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* LEFT — text content */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#B88A44", opacity: 0.6 }} aria-hidden="true" />
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.25em]" style={{ color: "#B88A44" }}>
                Expérience Premium &amp; VIP
              </p>
            </div>

            {/* Headline */}
            <h2
              className="font-playfair font-semibold leading-[0.97]"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", color: "#1B1B1B", letterSpacing: "-0.035em" }}
            >
              Votre voyage,<br />
              <span style={{ color: "#B88A44" }}>réinventé.</span>
            </h2>

            {/* Gold rule */}
            <div className="my-8 h-px w-14" style={{ background: "linear-gradient(to right, #B88A44, rgba(184,138,68,0.15))" }} aria-hidden="true" />

            {/* Description */}
            <p
              className="leading-[1.80]"
              style={{ fontSize: "clamp(1.05rem, 1.35vw, 1.20rem)", color: "#5E5A54", maxWidth: 520 }}
            >
              Billets Business Class, hôtels 5 étoiles, transferts privés, conciergerie personnalisée —
              un service VIP complet pensé pour les voyageurs d'exception.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/agence/contact?service=Pack+personnalis%C3%A9#quote"
                className="inline-flex items-center gap-3 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(184,138,68,0.32)] active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #C9A24A 0%, #e0c070 50%, #C9A24A 100%)",
                  color: "#1A0F00",
                  padding: "16px 36px",
                  fontSize: "1.05rem",
                  letterSpacing: "-0.01em",
                  fontWeight: 600,
                }}
              >
                Demander un pack VIP
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* Trust signal */}
              <p className="mt-4 text-[0.68rem] font-medium" style={{ color: "rgba(6,63,51,0.40)", letterSpacing: "0.02em" }}>
                ✦ Disponible pour tous nos séjours &amp; voyages organisés
              </p>
            </div>
          </div>

          {/* RIGHT — cinematic image card */}
          <div className="relative">
            {/* Glow halo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[44px] opacity-30"
              style={{ background: "radial-gradient(ellipse at center, rgba(184,138,68,0.30) 0%, transparent 70%)" }}
            />

            {/* Main image card */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: 32,
                border: "1px solid rgba(184,138,68,0.35)",
                boxShadow: "0 32px 80px rgba(16,44,39,0.18), 0 8px 24px rgba(184,138,68,0.12)",
                aspectRatio: "4 / 3",
              }}
            >
              <img
                src="/img/vip-cinematic-hero.png"
                alt="Expérience VIP — hôtel de luxe"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              {/* Subtle dark-to-transparent gradient at bottom for label */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5"
                style={{ background: "linear-gradient(to top, rgba(10,26,20,0.65) 0%, transparent 100%)" }}
              />
              {/* Floating label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[0.52rem] font-bold uppercase tracking-[0.24em]" style={{ color: "rgba(216,181,106,0.80)" }}>
                    Syanor Voyages
                  </p>
                  <p className="mt-0.5 font-playfair text-lg font-semibold leading-tight text-white">
                    Prestige &amp; Confort
                  </p>
                </div>
                {/* Gold star badge */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(201,162,74,0.20)", border: "1px solid rgba(201,162,74,0.50)", backdropFilter: "blur(8px)" }}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#C9A24A" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Gold accent corner ornament */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-br-[32px]"
              style={{ border: "1px solid rgba(184,138,68,0.22)", borderTop: "none", borderLeft: "none" }}
            />
          </div>
        </div>

        {/* ── Four ivory-glass pillars ── */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col gap-4 rounded-[22px] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(16,44,39,0.10)] sm:p-6"
              style={{
                background: "linear-gradient(145deg, rgba(255,253,248,0.95), rgba(248,242,232,0.88))",
                border: "1px solid rgba(184,138,68,0.20)",
                boxShadow: "0 8px 24px rgba(16,44,39,0.06)",
              }}
            >
              {/* Icon circle */}
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(184,138,68,0.25)]"
                style={{
                  background: "rgba(184,138,68,0.10)",
                  border: "1px solid rgba(184,138,68,0.25)",
                  color: "#B88A44",
                }}
              >
                {p.icon}
              </div>

              <div>
                <h3
                  className="font-playfair font-semibold leading-tight"
                  style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", color: "#1B1B1B" }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-2 leading-relaxed"
                  style={{ fontSize: "clamp(0.88rem, 1.15vw, 0.95rem)", color: "#6B665F" }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
