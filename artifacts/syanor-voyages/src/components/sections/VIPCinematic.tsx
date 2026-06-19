import Link from "@/components/Link";

const FEATURES = [
  {
    num: "I",
    title: "Transferts Privés",
    desc: "Chauffeur ou minibus VIP, de l'aéroport à chaque étape de votre voyage.",
  },
  {
    num: "II",
    title: "Hôtels 5★ Sélectionnés",
    desc: "Palaces et adresses de prestige soigneusement choisis pour chaque destination.",
  },
  {
    num: "III",
    title: "Conciergerie Dédiée",
    desc: "Un conseiller attitré qui orchestre chaque détail, de A à Z.",
  },
  {
    num: "IV",
    title: "Assistance Continue",
    desc: "Disponible avant, pendant et après votre voyage — 24h/24, 7j/7.",
  },
];

export default function VIPCinematic() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F8F4EE" }}
    >
      {/* Inner dark panel — full-bleed with generous padding */}
      <div
        className="relative mx-5 my-6 md:mx-8 md:my-8 rounded-[28px] md:rounded-[36px] overflow-hidden"
        style={{ background: "#0B1E3D" }}
      >
        {/* Decorative corner rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-10"
          style={{ border: "1px solid #D8B56A" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-07"
          style={{ border: "1px solid #D8B56A" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-10"
          style={{ border: "1px solid rgba(216,181,106,0.4)" }}
        />

        {/* Background hero image with overlay */}
        <div className="absolute inset-0 opacity-15">
          <img
            src="/img/hotel-view.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(135deg, rgba(11,30,61,0.85) 0%, rgba(11,30,61,0.50) 100%)" }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ background: "#D8B56A", opacity: 0.55 }} aria-hidden="true" />
            <p className="text-[0.52rem] font-bold uppercase tracking-[0.32em]" style={{ color: "#D8B56A" }}>
              Expérience Premium & VIP
            </p>
          </div>

          {/* Headline */}
          <h2
            className="font-playfair font-light leading-[1.04] mb-6"
            style={{ color: "#F8F4EE", fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
          >
            Votre voyage,<br />réinventé.
          </h2>

          {/* Sub */}
          <p
            className="text-sm leading-relaxed mb-14 max-w-lg"
            style={{ color: "rgba(248,244,238,0.55)" }}
          >
            Billets Business Class, hôtels 5 étoiles, transferts privés, conciergerie personnalisée —
            un service VIP complet pensé pour les voyageurs d'exception.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {FEATURES.map((f) => (
              <div key={f.num} className="flex flex-col gap-3">
                <span
                  className="font-playfair text-xs font-light"
                  style={{ color: "rgba(216,181,106,0.45)" }}
                >
                  {f.num}
                </span>
                <div className="h-px w-8" style={{ background: "rgba(216,181,106,0.28)" }} aria-hidden="true" />
                <p className="text-[0.78rem] font-semibold" style={{ color: "#F8F4EE" }}>{f.title}</p>
                <p className="text-[0.67rem] leading-relaxed" style={{ color: "rgba(248,244,238,0.42)" }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact?service=Pack+personnalis%C3%A9#quote"
            className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:shadow-[0_8px_28px_rgba(216,181,106,0.30)] hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, #D8B56A 0%, #c9a55e 100%)",
              color: "#0B1E3D",
            }}
          >
            Demander un pack VIP
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
