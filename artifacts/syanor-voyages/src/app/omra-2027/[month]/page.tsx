type Metadata = Record<string, unknown>;
import { useEffect } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "@/components/Link";
import { getMonthBySlug } from "@/data/months";
import { getOffersByMonth } from "@/data/offers";
import { quoteUrl } from "@/lib/utils";

interface Props {
  month: string;
}

export function generateMetadata({ month }: Props): Metadata {
  const m = getMonthBySlug(month, "2027");
  if (!m) return { title: "Omra 2027 — SYANOR VOYAGES" };
  return {
    title: m.seoTitle,
    description: m.seoDescription,
    canonical: `https://www.syanorvoyages.com/omra-2027/${month}`,
  };
}

export default function OmraMonthPage2027({ month: monthParam }: Props) {
  const month = getMonthBySlug(monthParam, "2027");
  const departures = getOffersByMonth(monthParam, "2027").filter(
    (o) => o.category === "Omra" || o.category === "Omra Plus"
  );

  useEffect(() => {
    if (month) {
      document.title = month.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", month.seoDescription);
    }
  }, [month]);

  if (!month) {
    return (
      <SiteLayout>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-syanor-ivory px-6 text-center">
          <h1 className="font-playfair text-3xl text-syanor-ink">Mois introuvable</h1>
          <Link href="/omra-2027" className="btn-primary">Retour Omra 2027</Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        image="/services/religieux/omra-plus.png"
        eyebrow={`Omra ${month.year}`}
        title={`Omra ${month.labelFull} — Départs Nice & Marseille`}
        subtitle={month.description}
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Omra 2027", href: "/omra-2027" },
          { label: month.label },
        ]}
        primaryCta={{
          label: `Demander ce départ`,
          href: quoteUrl({ service: "Omra", month: month.slug, city: "Nice / Marseille" }),
        }}
        secondaryCta={{ label: "Tous les mois 2027", href: "/omra-2027" }}
      />

      {/* Departures */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow={`Départs — ${month.labelFull}`}
            title={departures.length > 0 ? `${departures.length} départ${departures.length > 1 ? "s" : ""} en ${month.label} 2027` : `Départs ${month.label} 2027`}
            subtitle="Depuis Nice ou Marseille vers Médine, retour Djeddah. Prix sur demande — formulaire de devis ci-dessous."
          />

          {departures.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {departures.map((offer) => (
                <div key={offer.id} className={`rounded-2xl border bg-white p-6 shadow-card ${offer.featured ? "border-syanor-gold/50 shadow-gold" : "border-syanor-gold/30"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="rounded-full bg-syanor-emerald/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-emerald">
                        {offer.category}
                      </span>
                      {offer.featured && (
                        <span className="ml-2 rounded-full bg-syanor-gold/15 px-3 py-1 text-[0.7rem] font-semibold text-syanor-gold">
                          ✦ Recommandé
                        </span>
                      )}
                      <h3 className="mt-3 font-playfair text-xl font-bold text-syanor-ink">{offer.title}</h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                      {offer.availabilityStatus}
                    </span>
                  </div>

                  <div className="my-4 h-px bg-gradient-to-r from-syanor-gold to-transparent" />
                  <p className="text-sm text-syanor-ink/70">{offer.summary}</p>
                  <div className="my-4 h-px bg-gradient-to-r from-syanor-gold to-transparent" />

                  <ul className="space-y-2 text-sm text-syanor-ink/75">
                    <li className="flex items-center gap-2">
                      <span aria-hidden="true">📅</span>
                      <span>Départ : <strong>{offer.departureDate}</strong></span>
                    </li>
                    {offer.returnDate && (
                      <li className="flex items-center gap-2">
                        <span aria-hidden="true">🔄</span>
                        <span>Retour : {offer.returnDate}</span>
                      </li>
                    )}
                    <li className="flex items-center gap-2">
                      <span aria-hidden="true">⏱</span>
                      <span>{offer.duration}</span>
                    </li>
                  </ul>

                  <div className="my-4 h-px bg-gradient-to-r from-syanor-gold to-transparent" />

                  <div className="mb-3">
                    <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-gold">Prix chambre</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { label: "Quadruple", value: offer.roomPrices?.quad },
                        { label: "Triple", value: offer.roomPrices?.triple },
                        { label: "Double", value: offer.roomPrices?.double },
                        { label: "Individuelle", value: offer.roomPrices?.individual },
                      ].map(({ label, value }) => value && (
                        <div key={label} className="rounded-lg bg-syanor-pearl px-3 py-2">
                          <p className="text-syanor-ink/50">{label}</p>
                          <p className="font-semibold text-syanor-emerald">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={quoteUrl({
                      service: "Omra",
                      offer: offer.title,
                      city: "Nice / Marseille",
                      ...(offer.returnDate
                        ? { programmed: true, departureDate: offer.departureDate, returnDate: offer.returnDate }
                        : {}),
                    })}
                    className="mt-4 block w-full rounded-full bg-syanor-emerald px-5 py-2.5 text-center text-sm font-medium text-syanor-champagne transition hover:bg-syanor-gold hover:text-syanor-royal"
                  >
                    Demander ce départ
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-10 text-center">
              <p className="font-playfair text-xl text-syanor-ink">Départs en cours de confirmation</p>
              <p className="mt-3 text-syanor-ink/70">Inscrivez-vous pour être informé en priorité.</p>
              <Link href={quoteUrl({ service: "Omra", month: month.slug })} className="btn-primary mt-6 inline-flex">
                Être informé en priorité
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <SectionHeader eyebrow="Questions" title={`FAQ — Omra ${month.labelFull}`} />
          <div className="mt-10 space-y-4">
            {[
              { q: `Quels sont les prix pour l'Omra de ${month.label} 2027 ?`, a: "Les prix sont communiqués sur devis personnalisé, selon le type de chambre souhaité (quadruple, triple, double, individuelle) et le nombre de personnes. Contactez-nous pour recevoir une proposition." },
              { q: "L'accompagnement spirituel est-il inclus ?", a: "Oui. Un accompagnateur qualifié est présent tout au long du séjour pour vous guider dans les rites, les prières et la Ziyarat des lieux historiques." },
              { q: "Puis-je déposer une demande dès maintenant ?", a: "Absolument. Les demandes anticipées sont traitées en priorité. Plus vous réservez tôt, plus vous avez de chances d'obtenir le type de chambre souhaité." },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-syanor-gold/20 bg-syanor-pearl">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-semibold text-syanor-ink">
                  {q}
                  <span className="shrink-0 text-syanor-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-syanor-ink/70">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Réservez votre Omra ${month.labelFull} dès aujourd'hui.`}
        body="Places limitées — contactez-nous pour une proposition personnalisée selon votre confort et votre budget."
        ctaLabel={`Demander l'Omra ${month.label} 2027`}
        ctaHref={quoteUrl({ service: "Omra", month: month.slug, city: "Nice / Marseille" })}
        secondary={{ label: "Voir tous les mois 2027", href: "/omra-2027" }}
      />

      <StickyMobileCTA label={`Omra ${month.label} 2027`} href={quoteUrl({ service: "Omra", month: month.slug })} />
    </SiteLayout>
  );
}
