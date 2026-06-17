type Metadata = Record<string, unknown>;
import OmraFactoryLayout from "@/components/layout/OmraFactoryLayout";
import Link from "@/components/Link";
import { omraBlogArticles } from "@/data/omraFactoryBlog";
import { quoteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog Omra & Hajj — Guides et Conseils | Omra Factory",
  description:
    "Guides pratiques, conseils spirituels, informations sur les départs Omra 2026 et 2027, Hajj, Ramadan et préparation au pèlerinage. Articles rédigés par l'équipe Omra Factory.",
  alternates: { canonical: "/omra-hajj/blog" },
};

const CATEGORY_COLOR: Record<string, string> = {
  "Préparation":  "linear-gradient(140deg, #022b24, #063f33)",
  "Spiritualité": "linear-gradient(140deg, #1a0f00, #3d2800)",
  "Conseils":     "linear-gradient(140deg, #3d2800, #5c3f00)",
  "Hajj":         "linear-gradient(140deg, #011a14, #022b24)",
  "Actualité":    "linear-gradient(140deg, #0d2d40, #1a3a50)",
  "Logistique":   "linear-gradient(140deg, #1a1a00, #3d3a00)",
};

function getCategoryBg(category: string): string {
  return CATEGORY_COLOR[category] ?? "linear-gradient(140deg, #022B24, #063F33)";
}

const categories = Array.from(new Set(omraBlogArticles.map((a) => a.category)));

export default function OmraBlogPage() {
  const featured = omraBlogArticles[0];
  const rest = omraBlogArticles.slice(1);

  return (
    <OmraFactoryLayout>

      {/* ── Hero ── */}
      <section
        className="pt-28 pb-16 md:pt-36 md:pb-20"
        style={{ background: "linear-gradient(135deg, #022B24 0%, #063F33 70%, #011A15 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8" style={{ background: "rgba(201,162,74,0.60)" }} aria-hidden="true" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em]" style={{ color: "#a07c32" }}>
              Omra Factory — Blog
            </span>
          </div>
          <h1 className="font-playfair text-4xl font-bold text-syanor-ivory md:text-5xl">
            Guides, conseils &<br />
            <span style={{ background: "linear-gradient(90deg, #C9A24A, #e8c87a, #C9A24A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              actualités Omra
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,249,237,0.62)" }}>
            Préparez votre pèlerinage avec nos guides complets : rites, documents, départs 2026–2027, Hajj et conseils spirituels.
          </p>

          {/* Category chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold text-syanor-ivory" style={{ background: "rgba(201,162,74,0.18)", border: "1px solid rgba(201,162,74,0.30)" }}>
              Tous
            </span>
            {categories.map((cat) => (
              <span key={cat} className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,249,237,0.60)" }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured article ── */}
      <section className="section-pad bg-syanor-champagne/30">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="eyebrow mb-6">Article à la une</p>
          <Link href={`/omra-hajj/blog/${featured.slug}`} className="group block">
            <article className="overflow-hidden rounded-3xl border border-syanor-gold/20 bg-syanor-pearl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:flex">
              {/* Color band */}
              <div
                className="flex w-full items-end justify-between p-8 md:w-[280px] md:flex-col md:items-start"
                style={{ background: getCategoryBg(featured.category) }}
              >
                <div>
                  <span className="inline-flex rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-syanor-gold" style={{ background: "rgba(201,162,74,0.15)", border: "1px solid rgba(201,162,74,0.25)" }}>
                    {featured.category}
                  </span>
                  <p className="mt-6 font-playfair text-2xl font-bold leading-snug text-syanor-ivory md:text-3xl">
                    {featured.title}
                  </p>
                </div>
                <span className="text-sm text-syanor-ivory/40 md:mt-auto">{featured.readTime} de lecture</span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-8">
                <p className="text-base leading-relaxed text-syanor-ink/65">{featured.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-syanor-ink/45">{featured.date}</span>
                  <span className="text-sm font-semibold text-syanor-gold transition-colors duration-200 group-hover:text-syanor-emerald">
                    Lire l'article →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* ── Articles grid ── */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-8 flex items-baseline gap-3">
            <span className="eyebrow">{rest.length} articles</span>
            <div className="h-px flex-1 bg-gradient-to-r from-syanor-gold/20 to-transparent" aria-hidden="true" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <Link key={article.slug} href={`/omra-hajj/blog/${article.slug}`} className="group">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-syanor-gold/20 bg-syanor-pearl shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <div
                    className="relative flex h-14 items-center justify-between overflow-hidden px-5"
                    style={{ background: getCategoryBg(article.category) }}
                    aria-hidden="true"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-10"
                      style={{ backgroundImage: "radial-gradient(circle, rgba(201,162,74,0.5) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
                    />
                    <span className="relative text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold/80">
                      {article.category}
                    </span>
                    <span className="relative text-xs text-syanor-pearl/50">{article.readTime} de lecture</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-playfair text-lg font-bold leading-snug text-syanor-ink transition-colors duration-200 group-hover:text-syanor-emerald">
                      {article.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-syanor-ink/60">{article.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-syanor-gold/10 pt-4 text-xs text-syanor-ink/45">
                      <span>{article.date}</span>
                      <span className="font-semibold text-syanor-gold transition-colors duration-200 group-hover:text-syanor-emerald">
                        Lire →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #022B24 0%, #063F33 100%)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-syanor-gold">Omra Factory</p>
          <h2 className="font-playfair text-3xl font-bold text-syanor-ivory">
            Prêt à accomplir votre Omra ?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed" style={{ color: "rgba(255,249,237,0.58)" }}>
            Nos articles vous ont aidé à vous préparer ? Faites le premier pas : demandez votre devis Omra personnalisé.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={quoteUrl({ service: "Omra" })}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:opacity-90 hover:shadow-[0_8px_24px_rgba(201,162,74,0.35)] active:scale-[0.97]"
              style={{ background: "linear-gradient(135deg, #C9A24A 0%, #e8c87a 50%, #C9A24A 100%)", color: "#022B24" }}
            >
              Demander un devis Omra
            </Link>
            <Link
              href="/omra-hajj"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:bg-white/10 active:scale-[0.97]"
              style={{ border: "1.5px solid rgba(255,249,237,0.20)", color: "rgba(255,249,237,0.75)" }}
            >
              Voir les programmes
            </Link>
          </div>
        </div>
      </section>

    </OmraFactoryLayout>
  );
}
