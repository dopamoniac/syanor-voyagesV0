type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "@/components/Link";
import { blogArticles } from "@/data/blog";
import { quoteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog Voyage — Destinations, Conseils & Visa | SYANOR VOYAGES",
  description:
    "Guides pratiques, idées de destinations et conseils visa pour voyager mieux. Istanbul, Dubaï, Marrakech, Bali — articles rédigés par l'équipe SYANOR VOYAGES.",
  alternates: { canonical: "/blog" },
};

const categories = Array.from(new Set(blogArticles.map((a) => a.category)));

const CATEGORY_COLOR: Record<string, string> = {
  "Omra":          "linear-gradient(140deg, #022b24, #063f33)",
  "Hajj":          "linear-gradient(140deg, #011a14, #022b24)",
  "Conseils":      "linear-gradient(140deg, #3d2800, #5c3f00)",
  "Visa":          "linear-gradient(140deg, #1a3a50, #0d2d40)",
  "Spiritualité":  "linear-gradient(140deg, #3d2400, #5c3800)",
};

function getCategoryBg(category: string): string {
  return CATEGORY_COLOR[category] ?? "linear-gradient(140deg, #063f33, #022b24)";
}

export default function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        visual="editorial"
        eyebrow="Le magazine SYANOR"
        title="Blog — Conseils & guides voyage"
        subtitle="Idées de destinations, conseils pratiques, astuces visa et guides voyage — rédigés par l'équipe SYANOR VOYAGES."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Blog" }]}
      />

      {/* Category filters */}
      <section className="border-b border-syanor-gold/20 bg-syanor-pearl py-5">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="no-scrollbar flex flex-wrap gap-2 overflow-x-auto">
            <span className="chip chip-active">Tous</span>
            {categories.map((cat) => (
              <span key={cat} className="chip">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-8 flex items-baseline gap-3">
            <span className="eyebrow">{blogArticles.length} articles</span>
            <div className="flex-1 h-px bg-gradient-to-r from-syanor-gold/20 to-transparent" aria-hidden="true" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-syanor-gold/20 bg-syanor-pearl shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  {/* Color header band */}
                  <div
                    className="relative flex h-14 items-center justify-between overflow-hidden px-5"
                    style={{ background: getCategoryBg(article.category) }}
                    aria-hidden="true"
                  >
                    {/* Pattern overlay */}
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
                        Lire l'article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à partir ?"
        body="Nos articles vous ont donné envie de voyager ? Faites le premier pas : demandez votre devis personnalisé ou consultez nos offres disponibles."
        ctaLabel="Demander un devis"
        ctaHref={quoteUrl({})}
        secondary={{ label: "Voir toutes nos offres", href: "/offres" }}
      />

      <StickyMobileCTA label="Demander un devis" href={quoteUrl({})} />
    </SiteLayout>
  );
}
