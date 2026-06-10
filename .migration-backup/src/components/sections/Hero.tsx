import Link from "next/link";
import HeroVisual from "@/components/ui/HeroVisual";

const trustPills = [
  "Assistance personnalisée",
  "Offres sur mesure",
  "Départs accompagnés",
  "Service premium",
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-syanor-ivory pt-28 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,232,199,0.6),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 md:px-8 md:pb-24 lg:grid-cols-[55%_45%]">
        <div className="text-center lg:text-left">
          <p className="eyebrow">BILLETS · OMRA &amp; HAJJ · SÉJOURS SUR MESURE</p>
          <h1 className="mt-4 font-playfair text-4xl font-bold leading-[1.1] text-syanor-ink sm:text-5xl md:text-h1">
            Voyagez avec élégance, sérénité et confiance.
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-inter text-base leading-relaxed text-syanor-ink/70 lg:mx-0">
            SYANOR VOYAGES accompagne vos billets d&apos;avion et de bateau, vos
            voyages spirituels, vos séjours organisés et vos projets sur mesure
            avec une exigence premium.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center">
            <Link href="/contact#quote" className="btn-primary w-full sm:w-auto">
              Demander un devis personnalisé
            </Link>
            <Link href="/services" className="btn-secondary w-full sm:w-auto">
              Découvrir nos services
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
            {trustPills.map((pill) => (
              <li key={pill} className="flex items-center gap-2 text-sm text-syanor-ink/70">
                <span className="text-syanor-gold" aria-hidden="true">✦</span>
                {pill}
              </li>
            ))}
          </ul>
        </div>

        <div className="origin-center scale-90 sm:scale-100">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
