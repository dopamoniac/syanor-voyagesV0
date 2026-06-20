type Metadata = Record<string, unknown>;
import { useEffect } from "react";
import OmraFactoryLayout from "@/components/layout/OmraFactoryLayout";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "@/components/Link";
import { getCityBySlug } from "@/data/cities";
import { getOffersByCity } from "@/data/offers";
import { omraQuoteUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

interface Props {
  city: string;
}

export function generateMetadata({ city }: Props): Metadata {
  const c = getCityBySlug(city);
  if (!c) return { title: "Omra par ville — SYANOR VOYAGES" };
  return {
    title: c.seoTitle,
    description: c.seoDescription,
    canonical: `https://www.syanorvoyages.com/depart/${city}`,
  };
}

export default function DepartCityPage({ city: cityParam }: Props) {
  const city = getCityBySlug(cityParam);
  const departures = getOffersByCity(cityParam).filter(
    (o) => o.category === "Omra" || o.category === "Omra Plus"
  );

  useEffect(() => {
    if (city) {
      document.title = city.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", city.seoDescription);
    }
  }, [city]);

  if (!city) {
    return (
      <OmraFactoryLayout>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-syanor-ivory px-6 text-center">
          <h1 className="font-playfair text-3xl text-syanor-ink">Ville introuvable</h1>
          <Link href="/agence/offres" className="btn-primary">Voir les offres</Link>
        </div>
      </OmraFactoryLayout>
    );
  }

  const year2026 = departures.filter((o) => o.year === "2026");
  const year2027 = departures.filter((o) => o.year === "2027");

  return (
    <OmraFactoryLayout>
      <PageHero
        visual="routes"
        eyebrow={`Départ ${city.name}`}
        title={city.seoTitle.replace(" | SYANOR VOYAGES", "")}
        subtitle={city.heroDescription}
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Offres & Départs", href: "/offres" },
          { label: `Départ ${city.name}` },
        ]}
        primaryCta={{
          label: `Demander depuis ${city.name}`,
          href: omraQuoteUrl({ service: "Omra", city: city.name }),
        }}
        secondaryCta={{ label: "Voir toutes les offres", href: "/offres" }}
      />

      {/* City info */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow={`${city.airportCode} — ${city.country}`}
                title={`Votre départ Omra depuis ${city.name}`}
                align="left"
              />
              <p className="mt-6 text-base leading-relaxed text-syanor-ink/75">{city.description}</p>
              {city.travelNote && (
                <div className="mt-6 rounded-xl border border-syanor-gold/30 bg-white p-4 text-sm text-syanor-ink/70">
                  <span className="font-semibold text-syanor-gold">ℹ Note : </span>
                  {city.travelNote}
                </div>
              )}
            </div>
            <div className="rounded-2xl border border-syanor-gold/20 bg-white p-6 shadow-card">
              <p className="eyebrow mb-4">Informations pratiques</p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-syanor-gold">✦</span>
                  <span><strong>Aéroport :</strong> {city.airportName} ({city.airportCode})</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-syanor-gold">✦</span>
                  <span><strong>Itinéraire aller :</strong> {city.outboundRoute}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-syanor-gold">✦</span>
                  <span><strong>Retour :</strong> {city.inboundRoute}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-syanor-gold">✦</span>
                  <span>
                    <strong>Départs confirmés :</strong>{" "}
                    {city.confirmed ? (
                      <span className="text-emerald-700">Oui — voir ci-dessous</span>
                    ) : (
                      <span className="text-slate-500">Sur demande</span>
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Route visualization */}
      <section className="bg-syanor-royal py-10">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
            {[
              { city: city.name, desc: "Votre départ", icon: "airplane" },
              { city: "Médine", desc: "Arrivée & Ziyarat", icon: "crescent" },
              { city: "Makkah", desc: "La Omra", icon: "building" },
              { city: city.country === "Belgique" ? "Bruxelles" : city.name, desc: "Retour", icon: "airplane" },
            ].map((step, i) => (
              <div key={`${step.city}-${i}`} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-syanor-gold/40 bg-syanor-royal">
                    <Icon name={step.icon} className="h-5 w-5 text-syanor-champagne" />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-syanor-ivory">{step.city}</p>
                  <p className="text-xs text-syanor-champagne/70">{step.desc}</p>
                </div>
                {i < 3 && <div className="hidden h-px w-8 bg-syanor-gold/40 md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departures 2026 */}
      {year2026.length > 0 && (
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              eyebrow={`Départs depuis ${city.name} — 2026`}
              title={`Omra 2026 depuis ${city.name}`}
              align="left"
            />
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-syanor-gold/20 text-left text-xs uppercase tracking-widest text-syanor-gold">
                    <th className="pb-3 pr-6">Départ</th>
                    <th className="pb-3 pr-6">Retour</th>
                    <th className="pb-3 pr-6">Durée</th>
                    <th className="pb-3 pr-6">Mois</th>
                    <th className="pb-3" />
                  </tr>
                </thead>
                <tbody>
                  {year2026.map((o) => (
                    <tr key={o.id} className="border-b border-syanor-gold/10 hover:bg-syanor-pearl/40">
                      <td className="py-3 pr-6 font-medium text-syanor-ink">{o.departureDate}</td>
                      <td className="py-3 pr-6 text-syanor-ink/70">{o.returnDate ?? "—"}</td>
                      <td className="py-3 pr-6 text-syanor-ink/70">{o.duration}</td>
                      <td className="py-3 pr-6">
                        <Link href={`/omra-2026/${o.monthSlug}`} className="text-syanor-emerald hover:underline">
                          {o.month} 2026
                        </Link>
                      </td>
                      <td className="py-3">
                        <Link
                          href={omraQuoteUrl({
                            service: "Omra",
                            offer: o.title,
                            city: city.name,
                            ...(o.returnDate
                              ? { programmed: true, departureDate: o.departureDate, returnDate: o.returnDate }
                              : {}),
                          })}
                          className="text-xs font-medium text-syanor-gold hover:underline"
                        >
                          Demander →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Departures 2027 */}
      {year2027.length > 0 && (
        <section className="section-pad bg-syanor-ivory">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              eyebrow={`Départs depuis ${city.name} — 2027`}
              title={`Omra 2027 depuis ${city.name}`}
              align="left"
            />
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-syanor-gold/20 text-left text-xs uppercase tracking-widest text-syanor-gold">
                    <th className="pb-3 pr-6">Départ</th>
                    <th className="pb-3 pr-6">Retour</th>
                    <th className="pb-3 pr-6">Durée</th>
                    <th className="pb-3 pr-6">Mois</th>
                    <th className="pb-3" />
                  </tr>
                </thead>
                <tbody>
                  {year2027.map((o) => (
                    <tr key={o.id} className="border-b border-syanor-gold/10 hover:bg-white">
                      <td className="py-3 pr-6 font-medium text-syanor-ink">{o.departureDate}</td>
                      <td className="py-3 pr-6 text-syanor-ink/70">{o.returnDate ?? "—"}</td>
                      <td className="py-3 pr-6 text-syanor-ink/70">{o.duration}</td>
                      <td className="py-3 pr-6">
                        <Link href={`/omra-2027/${o.monthSlug}`} className="text-syanor-emerald hover:underline">
                          {o.month} 2027
                        </Link>
                      </td>
                      <td className="py-3">
                        <Link
                          href={omraQuoteUrl({
                            service: "Omra",
                            offer: o.title,
                            city: city.name,
                            ...(o.returnDate
                              ? { programmed: true, departureDate: o.departureDate, returnDate: o.returnDate }
                              : {}),
                          })}
                          className="text-xs font-medium text-syanor-gold hover:underline"
                        >
                          Demander →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <SectionHeader eyebrow="FAQ" title={`Questions fréquentes — Départ ${city.name}`} />
          <div className="mt-10 space-y-4">
            {[
              {
                q: `SYANOR organise-t-il des départs depuis ${city.name} ?`,
                a: city.confirmed
                  ? `Oui. Nos départs Omra 2026 et 2027 depuis ${city.name} sont confirmés. Consultez le tableau ci-dessus pour les dates disponibles.`
                  : `Nous organisons des départs depuis ${city.name} sur demande. Contactez-nous pour connaître les disponibilités et construire un itinéraire personnalisé depuis ${city.airportName}.`,
              },
              {
                q: "Comment se passe le vol depuis cet aéroport ?",
                a: `Depuis ${city.name}, le vol s'effectue ${city.travelNote ?? "avec ou sans correspondance selon les dates"}. L'itinéraire exact est confirmé sur devis.`,
              },
              {
                q: "Les prix sont-ils les mêmes depuis toutes les villes ?",
                a: "Les tarifs varient selon la ville de départ, la compagnie aérienne et les disponibilités. Demandez un devis spécifique à votre ville pour obtenir le prix exact.",
              },
              {
                q: "Puis-je demander un départ depuis une autre ville ?",
                a: "Oui. Nous organisons des départs depuis Nice, Marseille, Lyon, Paris, Toulouse et Bruxelles. Contactez-nous pour toute autre ville.",
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
        title={`Votre Omra depuis ${city.name} — demandez votre proposition.`}
        body={`Indiquez vos dates souhaitées et votre confort. Nous construisons votre programme depuis ${city.name}.`}
        ctaLabel={`Demander depuis ${city.name}`}
        ctaHref={omraQuoteUrl({ service: "Omra", city: city.name })}
        secondary={{ label: "Voir tous les départs", href: "/agence/offres" }}
      />

      <StickyMobileCTA label={`Omra depuis ${city.name}`} href={omraQuoteUrl({ service: "Omra", city: city.name })} />
    </OmraFactoryLayout>
  );
}
