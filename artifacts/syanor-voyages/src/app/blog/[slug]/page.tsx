type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "@/components/Link";
import { getArticleBySlug, blogArticles } from "@/data/blog";
import { quoteUrl } from "@/lib/utils";

interface Props {
  slug: string;
}

export default function BlogArticlePage({ slug }: Props) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <SiteLayout>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-syanor-ivory px-6 text-center">
          <h1 className="font-playfair text-3xl text-syanor-ink">Article introuvable</h1>
          <Link href="/blog" className="btn-primary">Retour au blog</Link>
        </div>
      </SiteLayout>
    );
  }

  const related = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <header className="bg-syanor-royal py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-syanor-champagne/60">
            <Link href="/" className="hover:text-syanor-gold">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-syanor-gold">Blog</Link>
            <span>/</span>
            <span className="text-syanor-champagne/90">{article.category}</span>
          </nav>

          <span className="rounded-full bg-syanor-gold/20 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-syanor-gold">
            {article.category}
          </span>

          <h1 className="mt-4 font-playfair text-3xl font-bold leading-tight text-syanor-ivory md:text-4xl">
            {article.title}
          </h1>

          <div className="mt-6 flex items-center gap-4 text-sm text-syanor-champagne/70">
            <span>SYANOR VOYAGES</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} de lecture</span>
          </div>

          <p className="mt-6 text-base leading-relaxed text-syanor-champagne/80">{article.excerpt}</p>
        </div>
      </header>

      {/* Content + Sidebar */}
      <div className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">

            {/* Article content */}
            <article className="min-w-0">
              <div className="prose-syanor space-y-6">
                {article.content.map((section, i) => {
                  if (section.type === "h2") {
                    return (
                      <h2 key={i} className="font-playfair text-2xl font-bold text-syanor-ink">
                        {section.content as string}
                      </h2>
                    );
                  }
                  if (section.type === "h3") {
                    return (
                      <h3 key={i} className="font-playfair text-xl font-semibold text-syanor-ink">
                        {section.content as string}
                      </h3>
                    );
                  }
                  if (section.type === "p") {
                    return (
                      <p key={i} className="text-base leading-relaxed text-syanor-ink/80">
                        {section.content as string}
                      </p>
                    );
                  }
                  if (section.type === "ul") {
                    return (
                      <ul key={i} className="space-y-2">
                        {(section.content as string[]).map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-base text-syanor-ink/80">
                            <span className="mt-1 shrink-0 text-syanor-gold" aria-hidden="true">✦</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (section.type === "tip") {
                    return (
                      <div key={i} className="rounded-xl border-l-4 border-syanor-gold bg-syanor-pearl px-5 py-4">
                        <p className="text-sm font-semibold text-syanor-gold">💡 Conseil SYANOR</p>
                        <p className="mt-2 text-sm leading-relaxed text-syanor-ink/80">{section.content as string}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 border-t border-syanor-gold/20 pt-6">
                <p className="text-xs text-syanor-ink/50">Catégorie : <span className="text-syanor-emerald">{article.category}</span></p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA card */}
              <div className="rounded-2xl border-2 border-syanor-gold/40 bg-syanor-pearl p-6 shadow-gold">
                <p className="eyebrow mb-3">Prêt à partir ?</p>
                <h3 className="font-playfair text-lg font-bold text-syanor-ink">
                  Demandez votre devis Omra
                </h3>
                <p className="mt-2 text-sm text-syanor-ink/70">
                  Notre équipe vous recontacte rapidement avec une proposition adaptée à votre projet.
                </p>
                <Link
                  href={quoteUrl({ service: "Omra" })}
                  className="btn-primary mt-4 w-full"
                >
                  Demander un devis
                </Link>
              </div>

              {/* Useful links */}
              <div className="rounded-xl border border-syanor-gold/20 bg-white p-5">
                <p className="eyebrow mb-4">Pages utiles</p>
                <ul className="space-y-2">
                  {[
                    { label: "Départs Omra 2026", href: "/omra-2026" },
                    { label: "Départs Omra 2027", href: "/omra-2027" },
                    { label: "Assistance visa", href: "/visas" },
                    { label: "FAQ", href: "/faq" },
                    { label: "Hajj 2027", href: "/hajj-2027" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-syanor-emerald hover:underline">
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <h2 className="font-playfair text-2xl font-bold text-syanor-ink">Articles connexes</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group">
                  <div className="rounded-xl border border-syanor-gold/20 bg-syanor-pearl p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-gold">
                      {rel.category}
                    </span>
                    <h3 className="mt-2 font-playfair text-base font-bold text-syanor-ink group-hover:text-syanor-emerald transition leading-tight">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-sm text-syanor-ink/60 line-clamp-2">{rel.excerpt}</p>
                    <p className="mt-3 text-xs font-medium text-syanor-gold">Lire →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Cet article vous a aidé ?"
        body="Passez à l'action. Demandez votre devis Omra personnalisé — nous revenons vers vous rapidement."
        ctaLabel="Demander mon devis Omra"
        ctaHref={quoteUrl({ service: "Omra" })}
        secondary={{ label: "Voir tous les articles", href: "/blog" }}
      />

      <StickyMobileCTA label="Demander un devis" href={quoteUrl({ service: "Omra" })} />
    </SiteLayout>
  );
}
