
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="section-pad bg-syanor-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader eyebrow="Ils nous ont fait confiance" title="Ce que disent nos voyageurs" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.initials} delay={i * 80}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <svg
                  className="text-syanor-gold/40"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 7h4v4c0 3-1.5 5-4 6V15H5V9a2 2 0 0 1 2-2zm9 0h4v4c0 3-1.5 5-4 6V15h-2V9a2 2 0 0 1 2-2z" />
                </svg>
                <blockquote className="mt-3 flex-1 font-inter text-sm leading-relaxed text-syanor-ink/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-2 text-sm">
                  <span className="font-playfair font-bold text-syanor-emerald">
                    {t.initials}
                  </span>
                  <span className="text-syanor-gold">·</span>
                  <span className="text-syanor-ink/60">{t.context}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
