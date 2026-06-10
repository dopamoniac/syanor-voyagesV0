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
  const m = getMonthBySlug(month, "2026");
  if (!m) return { title: "Omra 2026 — SYANOR VOYAGES" };
  return {
    title: m.seoTitle,
    description: m.seoDescription,
    canonical: `https://www.syanorvoyages.com/omra-2026/${month}`,
  };
}

export default function OmraMonthPage2026({ month: monthParam }: Props) {
  const month = getMonthBySlug(monthParam, "2026");
  const departures = getOffersByMonth(monthParam, "2026").filter(
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
          <Link href="/omra-2026" className="btn-primary">Retour Omra 2026</Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`Omra ${month.year}`}
        title={`Omra ${month.labelFull} — Départs Nice & Marseille`}
        subtitle={month.description}
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Omra 2026", href: "/omra-2026" },
          { label: month.label },
        ]}
        primaryCta={{
          label: `Demander ce départ`,
          href: quoteUrl({ service: "Omra", month: month.slug, city: "Nice / Marseille" }),
        }}
        secondaryCta={{ label: "Tous les mois 2026", href: "/omra-2026" }}
      />

      {/* Departures */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow={`Départs — ${month.labelFull}`}
            title={departures.length > 0 ? `${departures.length} départ${departures.length > 1 ? "s" : ""} en ${month.label} 2026` : `Départs ${month.label} 2026`}
            subtitle="Tous les départs partent depuis Nice ou Marseille vers Médine, avec retour depuis Djeddah. Les prix sont communiqués sur demande."
          />

          {departures.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {departures.map((offer) => (
                <div key={offer.id} className="rounded-2xl border border-syanor-gold/30 bg-white p-6 shadow-card">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="rounded-full bg-syanor-emerald/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-emerald">
                        {offer.category}
                      </span>
                      <h3 className="mt-3 font-playfair text-xl font-bold text-syanor-ink">{offer.title}</h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                      {offer.availabilityStatus}
                    </span>
                  </div>

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
                    <li className="flex items-center gap-2">
                      <span aria-hidden="true">✈</span>
                      <span>{offer.outboundRoute}</span>
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
                    href={quoteUrl({ service: "Omra", offer: offer.title, departureDate: offer.departureDate, city: "Nice / Marseille" })}
                    className="mt-4 block w-full rounded-full bg-syanor-emerald px-5 py-2.5 text-center text-sm font-medium text-syanor-champagne transition hover:bg-syanor-gold hover:text-syanor-royal"
                  >
                    Demander ce départ
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-10 text-center">
              <p className="font-playfair text-xl text-syanor-ink">
                Départs {month.labelFull} en cours de confirmation
              </p>
              <p className="mt-3 text-syanor-ink/70">
                Inscrivez-vous pour être informé en priorité dès l'ouverture des réservations.
              </p>
              <Link
                href={quoteUrl({ service: "Omra", month: month.slug })}
                className="btn-primary mt-6 inline-flex"
              >
                Être informé en priorité
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Route */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Itinéraire"
            title="Votre circuit spirituel"
            subtitle="Tous nos départs suivent le même circuit : vol depuis Nice ou Marseille, arrivée à Médine, puis Makkah, retour depuis Djeddah."
          />
          <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">
            {[
              { city: "Nice / Marseille", desc: "Départ en France", icon: "✈" },
              { city: "Médine", desc: "4–5 jours, Ziyarat", icon: "🕌" },
              { city: "Makkah", desc: "Omra + prières", icon: "🕋" },
              { city: "Djeddah", desc: "Vol retour", icon: "🛬" },
            ].map((step, i) => (
              <div key={step.city} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-syanor-gold/30 bg-syanor-pearl text-lg">
                    {step.icon}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-syanor-ink">{step.city}</p>
                  <p className="text-xs text-syanor-ink/55">{step.desc}</p>
                </div>
                {i < 3 && <div className="hidden h-px w-6 bg-syanor-gold/40 md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader eyebrow="Inclus" title="Ce qui est inclus dans votre Omra" align="left" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Vol international aller-retour depuis Nice / Marseille",
              "Hébergement à Médine (4–5 nuits)",
              "Hébergement à Makkah (5–6 nuits)",
              "Transferts internes Nice/Marseille ↔ Médine ↔ Makkah ↔ Djeddah",
              "Accompagnement spirituel tout au long du séjour",
              "Ziyarat des sites historiques de Médine et Makkah",
              "Assistance pour le dossier visa Omra",
              "Numéro d'urgence SYANOR disponible 24h/7j",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-syanor-ink/80">
                <span className="mt-0.5 text-syanor-gold" aria-hidden="true">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <SectionHeader eyebrow="Questions fréquentes" title={`FAQ — Omra ${month.labelFull}`} />
          <div className="mt-10 space-y-4">
            {[
              {
                q: `Puis-je réserver l'Omra de ${month.label} depuis une autre ville ?`,
                a: "Nos départs 2026 sont depuis Nice et Marseille. Pour d'autres villes (Lyon, Paris, Toulouse, Bruxelles), contactez-nous pour une proposition sur mesure.",
              },
              {
                q: "Comment obtenir le prix exact ?",
                a: "Nos prix sont communiqués sur devis personnalisé selon le type de chambre (quad/triple/double/individuelle) et vos dates. Remplissez le formulaire pour recevoir une proposition.",
              },
              {
                q: "Puis-je réserver pour plusieurs personnes ?",
                a: "Oui, nous acceptons les réservations pour des familles et des groupes. Indiquez le nombre de personnes et le type de chambre souhaité dans votre demande.",
              },
              {
                q: "Que se passe-t-il si la date est complète ?",
                a: "Nous vous informons immédiatement et vous proposons une alternative sur le même mois ou un mois voisin selon vos préférences.",
              },
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
        body="Places limitées — contactez-nous pour connaître les disponibilités et recevoir votre proposition personnalisée."
        ctaLabel={`Demander l'Omra ${month.label}`}
        ctaHref={quoteUrl({ service: "Omra", month: month.slug, city: "Nice / Marseille" })}
        secondary={{ label: "Voir tous les mois 2026", href: "/omra-2026" }}
      />

      <StickyMobileCTA label={`Omra ${month.label} 2026`} href={quoteUrl({ service: "Omra", month: month.slug })} />
    </SiteLayout>
  );
}
