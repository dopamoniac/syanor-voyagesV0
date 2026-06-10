type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import { getMonthsByYear } from "@/data/months";
import { getUpcomingOffers } from "@/data/offers";
import { quoteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Omra 2026 — Tous les départs depuis Nice et Marseille | SYANOR VOYAGES",
  description:
    "Découvrez tous les départs Omra 2026 depuis Nice et Marseille. Octobre, novembre, décembre 2026 avec accompagnement spirituel, hôtels sélectionnés et Ziyarat. Demandez votre devis.",
  alternates: { canonical: "/omra-2026" },
};

const months2026 = getMonthsByYear("2026");
const departures2026 = getUpcomingOffers().filter((o) => o.year === "2026");

export default function Omra2026Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Programme Omra 2026"
        title="Omra 2026 — Départs depuis Nice & Marseille"
        subtitle="Trois mois de départs confirmés : octobre, novembre et décembre 2026. Accompagnement spirituel complet, hôtels sélectionnés, transferts et Ziyarat inclus."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Omra 2026" }]}
        primaryCta={{ label: "Demander un devis Omra 2026", href: quoteUrl({ service: "Omra", month: "2026" }) }}
        secondaryCta={{ label: "Voir Omra 2027", href: "/omra-2027" }}
      />

      {/* Month navigator */}
      <section className="border-b border-syanor-gold/20 bg-syanor-pearl py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-syanor-gold">
              Mois disponibles
            </span>
            {months2026.map((m) => (
              <Link
                key={m.slug}
                href={m.href}
                className="rounded-full border border-syanor-emerald/30 bg-white px-4 py-1.5 text-sm font-medium text-syanor-emerald transition hover:border-syanor-emerald hover:bg-syanor-emerald hover:text-syanor-ivory"
              >
                {m.label}
                {m.departureCount > 0 && (
                  <span className="ml-1.5 text-xs text-syanor-gold">({m.departureCount})</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Route visualization */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Itinéraire"
            title="L'itinéraire de votre Omra 2026"
            subtitle="Tous nos départs 2026 suivent le même circuit spirituel : Nice ou Marseille → Médine → Makkah → retour depuis Djeddah."
          />

          <div className="mt-12 flex flex-col items-center gap-4 md:flex-row md:justify-center">
            {[
              { city: "Nice / Marseille", desc: "Votre ville de départ", icon: "airplane" },
              { city: "Médine", desc: "Arrivée & séjour spirituel", icon: "crescent" },
              { city: "Makkah", desc: "Accomplissement de la Omra", icon: "crescent" },
              { city: "Djeddah", desc: "Vol retour vers la France", icon: "airplane" },
            ].map((step, i) => (
              <div key={step.city} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-syanor-gold/40 bg-syanor-pearl shadow-card text-syanor-emerald">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </div>
                  <p className="mt-2 font-playfair text-sm font-semibold text-syanor-ink">{step.city}</p>
                  <p className="text-xs text-syanor-ink/60">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden h-px w-8 bg-gradient-to-r from-syanor-gold to-syanor-gold/30 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Month cards */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Calendrier des départs"
            title="Choisissez votre mois de départ"
            subtitle="Chaque mois propose des départs spécifiques depuis Nice et Marseille. Cliquez sur un mois pour voir les dates disponibles."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {months2026.map((month) => (
              <Link key={month.slug} href={month.href} className="group">
                <div className="flex h-full flex-col rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-syanor-gold/60 hover:shadow-card-hover">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="eyebrow mb-1">Omra {month.year}</p>
                      <h3 className="font-playfair text-xl font-bold text-syanor-ink group-hover:text-syanor-emerald">
                        {month.labelFull}
                      </h3>
                    </div>
                    {month.hasConfirmedDates ? (
                      <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {month.departureCount} départ{month.departureCount > 1 ? "s" : ""}
                      </span>
                    ) : (
                      <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                        À confirmer
                      </span>
                    )}
                  </div>
                  <div className="my-4 h-px bg-gradient-to-r from-syanor-gold to-transparent" />
                  <p className="flex-1 text-sm leading-relaxed text-syanor-ink/70">{month.description}</p>
                  <p className="mt-4 text-xs font-semibold text-syanor-gold">{month.dateRange}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-syanor-emerald">
                    Voir les départs <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services included */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Inclus dans tous nos départs"
            title="Ce que comprend votre Omra SYANOR"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "airplane", title: "Vol international A/R", desc: "Depuis Nice ou Marseille vers Médine, retour depuis Djeddah" },
              { icon: "building", title: "Hébergement Médine & Makkah", desc: "Hôtels sélectionnés à proximité des Lieux Saints" },
              { icon: "bus", title: "Transferts internes", desc: "Transport organisé entre les villes saintes" },
              { icon: "sparkle", title: "Accompagnement spirituel", desc: "Guide et encadrement à chaque étape" },
              { icon: "route", title: "Ziyarat accompagnée", desc: "Visites des sites historiques de Médine et Makkah" },
              { icon: "clipboard", title: "Assistance visa Omra", desc: "Prise en charge de votre dossier visa" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl bg-white p-5 shadow-card">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold" aria-hidden="true">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-syanor-ink">{item.title}</p>
                  <p className="mt-1 text-sm text-syanor-ink/65">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming departures */}
      {departures2026.length > 0 && (
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader
              eyebrow="Prochains départs"
              title="Tous les départs Omra 2026"
            />
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-syanor-gold/20 text-left text-xs uppercase tracking-widest text-syanor-gold">
                    <th className="pb-3 pr-6">Départ</th>
                    <th className="pb-3 pr-6">Retour</th>
                    <th className="pb-3 pr-6">Durée</th>
                    <th className="pb-3 pr-6">Mois</th>
                    <th className="pb-3 pr-6">Statut</th>
                    <th className="pb-3" />
                  </tr>
                </thead>
                <tbody>
                  {departures2026.map((o) => (
                    <tr key={o.id} className="border-b border-syanor-gold/10 hover:bg-syanor-pearl/40">
                      <td className="py-3 pr-6 font-medium text-syanor-ink">{o.departureDate}</td>
                      <td className="py-3 pr-6 text-syanor-ink/70">{o.returnDate ?? "—"}</td>
                      <td className="py-3 pr-6 text-syanor-ink/70">{o.duration}</td>
                      <td className="py-3 pr-6">
                        <Link href={`/${o.year ? `omra-${o.year}` : "omra-2026"}/${o.monthSlug}`} className="text-syanor-emerald hover:underline">
                          {o.month}
                        </Link>
                      </td>
                      <td className="py-3 pr-6">
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                          {o.availabilityStatus}
                        </span>
                      </td>
                      <td className="py-3">
                        <Link href={quoteUrl({ service: "Omra", departureDate: o.departureDate, month: o.monthSlug })} className="text-xs font-medium text-syanor-gold hover:underline">
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

      <CTASection
        title="Prêt pour votre Omra 2026 ?"
        body="Indiquez-nous votre mois préféré et votre ville de départ. Nous revenons vers vous avec une proposition adaptée."
        ctaLabel="Demander mon Omra 2026"
        ctaHref={quoteUrl({ service: "Omra", month: "2026" })}
        secondary={{ label: "Voir Omra 2027", href: "/omra-2027" }}
      />

      <StickyMobileCTA label="Demander mon Omra 2026" href={quoteUrl({ service: "Omra", month: "2026" })} />
    </SiteLayout>
  );
}
