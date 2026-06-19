const FEATURED = {
  quote:
    "Nous avons apprécié l'accompagnement, les explications et l'organisation sur place. Le voyage s'est déroulé avec beaucoup de sérénité — exactement ce que nous cherchions.",
  author: "Aicha M.",
  trip: "Omra Premium · Nice → Médine",
  stars: 5,
};

const SECONDARY = [
  {
    quote:
      "Une réservation claire, un suivi sérieux et une équipe disponible. Tout a été simple du premier échange jusqu'au départ. Je reviendrai sans hésiter.",
    author: "Farid B.",
    trip: "Billets Avion · Marseille → Tunis",
    stars: 5,
  },
  {
    quote:
      "Le séjour a été préparé selon nos besoins, avec de bons conseils et une vraie attention aux détails. Une grande disponibilité tout au long du processus.",
    author: "Samira K.",
    trip: "Séjour Sur Mesure · Lyon → Istanbul",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#D8B56A" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsEditorial() {
  return (
    <section
      className="section-pad"
      style={{ background: "#0B1E3D" }}
      id="temoignages"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="h-px w-10" style={{ background: "#D8B56A", opacity: 0.45 }} aria-hidden="true" />
          <p className="text-[0.52rem] font-bold uppercase tracking-[0.30em]" style={{ color: "#D8B56A" }}>
            Témoignages
          </p>
        </div>

        {/* Featured quote */}
        <figure className="mb-14 md:mb-20">
          {/* Opening mark */}
          <svg
            className="mb-6"
            width="48"
            height="36"
            viewBox="0 0 48 36"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 36V22.8C0 10.4 7.2 3.2 21.6 0l2.4 3.6C16.4 5.6 12.4 9.6 12 16h8.8V36H0zm25.6 0V22.8C25.6 10.4 32.8 3.2 47.2 0l2.4 3.6C42 5.6 38 9.6 37.6 16H46.4V36H25.6z"
              fill="#D8B56A"
              fillOpacity="0.20"
            />
          </svg>

          <blockquote
            className="font-playfair font-light leading-[1.20] mb-8"
            style={{
              color: "#F8F4EE",
              fontSize: "clamp(1.45rem, 3.2vw, 2.4rem)",
              maxWidth: "820px",
            }}
          >
            "{FEATURED.quote}"
          </blockquote>

          <figcaption className="flex items-center gap-5">
            <div>
              <Stars count={FEATURED.stars} />
              <p className="mt-2 text-[0.75rem] font-semibold" style={{ color: "#F8F4EE" }}>
                {FEATURED.author}
              </p>
              <p className="mt-0.5 text-[0.63rem]" style={{ color: "rgba(248,244,238,0.38)" }}>
                {FEATURED.trip}
              </p>
            </div>
          </figcaption>
        </figure>

        {/* Divider */}
        <div className="mb-12 h-px" style={{ background: "rgba(216,181,106,0.12)" }} aria-hidden="true" />

        {/* Two secondary quotes */}
        <div className="grid gap-8 sm:grid-cols-2">
          {SECONDARY.map((t) => (
            <figure key={t.author}>
              <blockquote
                className="text-sm leading-relaxed mb-6 font-light"
                style={{ color: "rgba(248,244,238,0.60)" }}
              >
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(216,181,106,0.14)" }}
                  aria-hidden="true"
                />
                <div className="text-right">
                  <Stars count={t.stars} />
                  <p className="mt-1.5 text-[0.68rem] font-semibold" style={{ color: "#F8F4EE" }}>{t.author}</p>
                  <p className="mt-0.5 text-[0.60rem]" style={{ color: "rgba(248,244,238,0.34)" }}>{t.trip}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
