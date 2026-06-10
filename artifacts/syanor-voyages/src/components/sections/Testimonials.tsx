import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Aicha M.",
    tripType: "Omra Premium · Nice → Médine",
    stars: 5,
    quote:
      "Nous avons apprécié l'accompagnement, les explications et l'organisation sur place. Le voyage s'est déroulé avec beaucoup de sérénité — exactement ce que nous cherchions pour ce voyage spirituel.",
  },
  {
    name: "Farid B.",
    tripType: "Billets Avion · Marseille → Tunis",
    stars: 5,
    quote:
      "Une réservation claire, un suivi sérieux et une équipe disponible. Tout a été simple du premier échange jusqu'au départ. Je reviendrai sans hésiter pour mon prochain vol.",
  },
  {
    name: "Samira K.",
    tripType: "Séjour sur Mesure · Lyon → Istanbul",
    stars: 5,
    quote:
      "Le séjour a été préparé selon nos besoins, avec de bons conseils et une vraie attention aux détails. L'équipe a été d'une grande disponibilité tout au long du processus.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "#C9A24A" : "none"}
          stroke="#C9A24A"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad bg-syanor-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Ils nous font confiance"
          title="Ce que disent nos voyageurs"
          subtitle="Des retours authentiques de voyageurs qui ont choisi SYANOR VOYAGES pour leur Omra, leurs billets ou leurs séjours sur mesure."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                {/* Opening quote mark */}
                <svg
                  className="text-syanor-gold/35"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 7h4v4c0 3-1.5 5-4 6V15H5V9a2 2 0 0 1 2-2zm9 0h4v4c0 3-1.5 5-4 6V15h-2V9a2 2 0 0 1 2-2z" />
                </svg>

                {/* Quote */}
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-syanor-ink/80">
                  {t.quote}
                </blockquote>

                {/* Footer */}
                <figcaption className="mt-6 border-t border-syanor-gold/15 pt-4">
                  <StarRating count={t.stars} />
                  <p className="mt-2 font-playfair text-sm font-semibold text-syanor-emerald">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-syanor-ink/50">{t.tripType}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
