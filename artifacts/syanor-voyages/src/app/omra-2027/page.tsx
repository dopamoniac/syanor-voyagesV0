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
  title: "Omra 2027 — Départs depuis Nice et Marseille | SYANOR VOYAGES",
  description:
    "Découvrez tous les départs Omra 2027 depuis Nice et Marseille. Janvier, février, mars et avril 2027. Accompagnement spirituel, hôtels sélectionnés, Ziyarat. Demandez votre devis.",
  alternates: { canonical: "/omra-2027" },
};

const months2027 = getMonthsByYear("2027");
const departures2027 = getUpcomingOffers().filter((o) => o.year === "2027");

export default function Omra2027Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Programme Omra 2027"
        title="Omra 2027 — Départs depuis Nice & Marseille"
        subtitle="Quatre mois de départs au programme : janvier, février, mars et avril 2027, dont un séjour exceptionnel de 34 jours. Accompagnement spirituel complet, hôtels et Ziyarat."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Omra 2027" }]}
        primaryCta={{ label: "Demander un devis Omra 2027", href: quoteUrl({ service: "Omra", month: "2027" }) }}
        secondaryCta={{ label: "Voir Omra 2026", href: "/omra-2026" }}
      />

      {/* Month navigator */}
      <section className="border-b border-syanor-gold/20 bg-syanor-pearl py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-syanor-gold">
              Mois disponibles
            </span>
            {months2027.map((m) => (
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

      {/* Route */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Itinéraire"
            title="Le circuit spirituel de votre Omra 2027"
            subtitle="Depuis Nice ou Marseille vers Médine, puis Makkah, avec retour depuis Djeddah. Un voyage entièrement organisé."
          />

          <div className="mt-12 flex flex-col items-center gap-4 md:flex-row md:justify-center">
            {[
              { city: "Nice / Marseille", desc: "Votre ville de départ", icon: "airplane" },
              { city: "Médine", desc: "Arrivée & Ziyarat", icon: "crescent" },
              { city: "Makkah", desc: "Accomplissement de la Omra", icon: "crescent" },
              { city: "Djeddah", desc: "Vol retour", icon: "airplane" },
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
            eyebrow="Calendrier 2027"
            title="Choisissez votre mois de départ"
            subtitle="Retrouvez tous les départs 2027 par mois. Février propose 3 dates distinctes ; mars propose un séjour exceptionnel de 34 jours."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {months2027.map((month) => (
              <Link key={month.slug} href={month.href} className="group">
                <div className={`flex h-full flex-col rounded-2xl border bg-syanor-pearl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${month.featured ? "border-syanor-gold/50 shadow-gold" : "border-syanor-gold/20 hover:border-syanor-gold/60"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="eyebrow mb-1">Omra {month.year}</p>
                      <h3 className="font-playfair text-xl font-bold text-syanor-ink group-hover:text-syanor-emerald">
                        {month.labelFull}
                      </h3>
                    </div>
                    {month.hasConfirmedDates && (
                      <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {month.departureCount} départ{month.departureCount > 1 ? "s" : ""}
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

      {/* Table */}
      {departures2027.length > 0 && (
        <section className="section-pad bg-syanor-ivory">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeader eyebrow="Prochains départs" title="Tous les départs Omra 2027" align="left" />
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
                  {departures2027.map((o) => (
                    <tr key={o.id} className="border-b border-syanor-gold/10 hover:bg-white">
                      <td className="py-3 pr-6 font-medium text-syanor-ink">{o.departureDate}</td>
                      <td className="py-3 pr-6 text-syanor-ink/70">{o.returnDate ?? "—"}</td>
                      <td className="py-3 pr-6 text-syanor-ink/70">{o.duration}</td>
                      <td className="py-3 pr-6">
                        <Link href={`/omra-2027/${o.monthSlug}`} className="text-syanor-emerald hover:underline">
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
        title="Votre Omra 2027 vous attend."
        body="Indiquez votre mois de départ souhaité et votre ville. Nous vous revenons rapidement avec une proposition adaptée."
        ctaLabel="Demander mon Omra 2027"
        ctaHref={quoteUrl({ service: "Omra", month: "2027" })}
        secondary={{ label: "Séjour 34 jours", href: "/omra-2027/mars" }}
      />

      <StickyMobileCTA label="Demander mon Omra 2027" href={quoteUrl({ service: "Omra", month: "2027" })} />
    </SiteLayout>
  );
}
