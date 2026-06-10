import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import type { Crumb } from "@/components/ui/Breadcrumb";

export interface LegalBlock {
  heading: string;
  paragraphs: string[];
}

interface LegalPageProps {
  title: string;
  intro: string;
  crumbs: Crumb[];
  blocks: LegalBlock[];
  note?: string;
}

export default function LegalPage({
  title,
  intro,
  crumbs,
  blocks,
  note,
}: LegalPageProps) {
  return (
    <SiteLayout>
      <PageHero eyebrow="Informations légales" title={title} subtitle={intro} crumbs={crumbs} />

      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          {note && (
            <p className="mb-10 rounded-xl border border-syanor-gold/30 bg-syanor-champagne/40 px-5 py-4 text-sm text-syanor-ink/75">
              {note}
            </p>
          )}
          <div className="space-y-10">
            {blocks.map((block) => (
              <article key={block.heading}>
                <h2 className="font-playfair text-xl text-syanor-ink md:text-2xl">
                  {block.heading}
                </h2>
                <div className="mt-3 w-12 gold-divider" aria-hidden="true" />
                <div className="mt-4 space-y-3">
                  {block.paragraphs.map((p, i) => (
                    <p key={i} className="font-inter text-sm leading-relaxed text-syanor-ink/70">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
