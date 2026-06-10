type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "@/components/Link";
import { blogArticles } from "@/data/blog";
import { quoteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog Voyage — Conseils Omra, Hajj & Visa | SYANOR VOYAGES",
  description:
    "Guides pratiques, conseils de préparation et informations spirituelles pour votre Omra, Hajj et visa Arabie Saoudite. Articles rédigés par l'équipe SYANOR VOYAGES.",
  alternates: { canonical: "/blog" },
};

const categories = Array.from(new Set(blogArticles.map((a) => a.category)));

export default function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Le magazine SYANOR"
        title="Blog — Conseils & guides voyage"
        subtitle="Guides pratiques, conseils de préparation spirituelle, informations visa et astuces de voyage rédigés par l'équipe SYANOR VOYAGES."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Blog" }]}
      />

      {/* Category filters */}
      <section className="border-b border-syanor-gold/20 bg-syanor-pearl py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-syanor-emerald px-4 py-1.5 text-sm font-medium text-syanor-ivory">
              Tous
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-syanor-emerald/30 px-4 py-1.5 text-sm font-medium text-syanor-emerald"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow={`${blogArticles.length} articles`}
            title="Tous nos articles"
            align="left"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                <article className="flex h-full flex-col rounded-2xl border border-syanor-gold/20 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-syanor-emerald/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-emerald">
                      {article.category}
                    </span>
                    <span className="text-xs text-syanor-ink/50">{article.readTime} de lecture</span>
                  </div>

                  <div className="my-4 h-px bg-gradient-to-r from-syanor-gold to-transparent" />

                  <h2 className="font-playfair text-lg font-bold leading-tight text-syanor-ink group-hover:text-syanor-emerald transition">
                    {article.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-syanor-ink/65">{article.excerpt}</p>

                  <div className="mt-6 flex items-center justify-between text-xs text-syanor-ink/50">
                    <span>{article.date}</span>
                    <span className="font-medium text-syanor-gold group-hover:underline">Lire l'article →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à partir ?"
        body="Nos articles vous ont aidé à vous préparer ? Faites le premier pas : demandez votre devis Omra personnalisé."
        ctaLabel="Demander mon devis Omra"
        ctaHref={quoteUrl({ service: "Omra" })}
        secondary={{ label: "Voir les départs 2026", href: "/omra-2026" }}
      />

      <StickyMobileCTA label="Demander un devis" href={quoteUrl({ service: "Omra" })} />
    </SiteLayout>
  );
}
