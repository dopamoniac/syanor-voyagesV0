type Metadata = Record<string, unknown>;
import { useEffect } from "react";
import OmraFactoryLayout from "@/components/layout/OmraFactoryLayout";
import Link from "@/components/Link";
import { getOmraArticleBySlug, omraBlogArticles, type OmraBlogSection } from "@/data/omraFactoryBlog";
import { omraQuoteUrl } from "@/lib/utils";

interface Props {
  slug: string;
}

export function generateMetadata({ slug }: Props): Metadata {
  const article = getOmraArticleBySlug(slug);
  if (!article) return { title: "Blog — Omra Factory" };
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `/omra-hajj/blog/${slug}` },
  };
}

function renderSection(section: OmraBlogSection, i: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-10 font-playfair text-2xl font-bold text-syanor-ink">
          {section.content as string}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-7 font-playfair text-xl font-bold text-syanor-ink">
          {section.content as string}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="mt-5 font-inter leading-relaxed text-syanor-ink/75">
          {section.content as string}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-2.5">
          {(section.content as string[]).map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-syanor-ink/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-syanor-gold" aria-hidden="true" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div key={i} className="mt-7 rounded-2xl border border-syanor-gold/25 bg-syanor-champagne/40 p-5">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-syanor-gold text-syanor-royal text-xs font-bold">
              ✦
            </span>
            <p className="text-sm leading-relaxed text-syanor-ink/80 font-medium">
              {section.content as string}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function OmraBlogArticlePage({ slug }: Props) {
  const article = getOmraArticleBySlug(slug);

  useEffect(() => {
    if (article) {
      document.title = article.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", article.seoDescription);
    }
  }, [article]);

  if (!article) {
    return (
      <OmraFactoryLayout>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 pt-20 text-center" style={{ background: "#FFF9ED" }}>
          <h1 className="font-playfair text-3xl text-syanor-ink">Article introuvable</h1>
          <Link href="/omra-factory/blog" className="btn-primary">Retour au blog Omra</Link>
        </div>
      </OmraFactoryLayout>
    );
  }

  const related = omraBlogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <OmraFactoryLayout>

      {/* ── Hero ── */}
      <header
        className="pt-28 pb-16 md:pt-36 md:pb-20"
        style={{ background: "linear-gradient(135deg, #022B24 0%, #063F33 80%, #011A15 100%)" }}
      >
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs" style={{ color: "rgba(255,249,237,0.45)" }}>
            <Link href="/" style={{ color: "rgba(255,249,237,0.45)" }} className="hover:text-syanor-gold transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/omra-factory" style={{ color: "rgba(255,249,237,0.45)" }} className="hover:text-syanor-gold transition-colors">Omra Factory</Link>
            <span>/</span>
            <Link href="/omra-factory/blog" style={{ color: "rgba(255,249,237,0.45)" }} className="hover:text-syanor-gold transition-colors">Blog</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,249,237,0.75)" }}>{article.category}</span>
          </nav>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span
              className="inline-flex rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-syanor-gold"
              style={{ background: "rgba(201,162,74,0.15)", border: "1px solid rgba(201,162,74,0.25)" }}
            >
              {article.category}
            </span>
            <span className="text-xs" style={{ color: "rgba(255,249,237,0.40)" }}>
              {article.readTime} de lecture · {article.date}
            </span>
          </div>

          <h1 className="font-playfair text-3xl font-bold leading-snug text-syanor-ivory md:text-4xl lg:text-[2.75rem]">
            {article.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed" style={{ color: "rgba(255,249,237,0.60)" }}>
            {article.excerpt}
          </p>
        </div>
      </header>

      {/* ── Article body ── */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            {/* Content */}
            <article className="prose-custom">
              {article.content.map((section, i) => renderSection(section, i))}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA box */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "linear-gradient(135deg, #022B24, #063F33)", border: "1px solid rgba(201,162,74,0.20)" }}
              >
                <p className="mb-1 text-[0.62rem] font-bold uppercase tracking-widest text-syanor-gold">Omra Factory</p>
                <h3 className="font-playfair text-lg font-bold text-syanor-ivory leading-snug">
                  Réservez votre Omra
                </h3>
                <p className="mt-3 text-xs leading-relaxed" style={{ color: "rgba(255,249,237,0.55)" }}>
                  Départs depuis Nice, Marseille, Lyon et Paris. Formules classique, premium et VIP.
                </p>
                <Link
                  href={omraQuoteUrl({ service: "Omra" })}
                  className="mt-5 block rounded-full py-2.5 text-center text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.97]"
                  style={{ background: "linear-gradient(135deg, #C9A24A, #e8c87a, #C9A24A)", color: "#022B24" }}
                >
                  Demander un devis
                </Link>
                <Link
                  href="/omra-factory"
                  className="mt-2 block rounded-full py-2.5 text-center text-sm font-medium transition-all hover:bg-white/8"
                  style={{ border: "1px solid rgba(255,249,237,0.18)", color: "rgba(255,249,237,0.65)" }}
                >
                  Voir les programmes
                </Link>
              </div>

              {/* Articles récents */}
              <div className="rounded-2xl border border-syanor-gold/15 bg-syanor-pearl p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-syanor-ink/55">Articles récents</h3>
                <div className="space-y-4">
                  {related.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/omra-factory/blog/${a.slug}`}
                      className="group block"
                    >
                      <span className="text-[0.6rem] font-bold uppercase tracking-wider text-syanor-gold/70">{a.category}</span>
                      <p className="mt-0.5 text-sm font-medium leading-snug text-syanor-ink/80 transition-colors group-hover:text-syanor-emerald">
                        {a.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related articles ── */}
      <section className="section-pad bg-syanor-champagne/30">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="eyebrow mb-8">D'autres articles qui pourraient vous aider</p>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((a) => (
              <Link key={a.slug} href={`/omra-factory/blog/${a.slug}`} className="group">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-syanor-gold/18 bg-syanor-pearl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div
                    className="h-2 w-full"
                    style={{ background: "linear-gradient(to right, #C9A24A, #e8c87a, #C9A24A)" }}
                    aria-hidden="true"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-2 text-[0.6rem] font-bold uppercase tracking-wider text-syanor-gold/70">{a.category}</span>
                    <h3 className="font-playfair text-base font-bold leading-snug text-syanor-ink transition-colors group-hover:text-syanor-emerald">
                      {a.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-syanor-ink/55">{a.excerpt}</p>
                    <span className="mt-4 text-xs font-semibold text-syanor-gold">Lire →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </OmraFactoryLayout>
  );
}
