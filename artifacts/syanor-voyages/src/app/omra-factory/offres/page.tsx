import { useMemo, useState } from "react";
import { useSearch } from "wouter";
import OmraFactoryLayout from "@/components/layout/OmraFactoryLayout";
import PageHero from "@/components/ui/PageHero";
import OffersGrid from "@/components/ui/OffersGrid";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "@/components/Link";
import { offers } from "@/data/offers";
import { omraQuoteUrl } from "@/lib/utils";
import { departureCities } from "@/data/cities";

const OMRA_CATS = ["Omra", "Hajj", "Omra Plus", "Ramadan", "Formation", "Ziyarat"];
const SERVICE_IDS = [
  "visa-assistance",
  "hotel-transferts",
  "assurance-voyage",
  "accompagnement-admin",
  "assistance-24h",
];

const ALL_TYPES = ["Tous", "Omra", "Omra Plus", "Ramadan", "Hajj"];

const quoteHref = omraQuoteUrl({ service: "Omra" });

const SERVICES = [
  {
    icon: "clipboard",
    title: "Visa Assistance",
    badge: "Omra & Hajj",
    desc: "Constitution du dossier, démarches consulaires et suivi jusqu'à l'obtention de votre visa Omra ou Hajj.",
  },
  {
    icon: "building",
    title: "Hôtel + Transferts",
    badge: "La Mecque & Médine",
    desc: "Hôtel à Makkah ou Médine avec transferts aéroport inclus — pour les pèlerins qui préfèrent organiser leur vol eux-mêmes.",
  },
  {
    icon: "shield",
    title: "Assurance Voyage",
    badge: "Pèlerinage",
    desc: "Couverture annulation, frais médicaux, rapatriement et bagages — spécialement conçue pour les voyages religieux.",
  },
  {
    icon: "book",
    title: "Accompagnement Administratif",
    badge: "Démarches",
    desc: "Visa, vaccination, passeport, traductions — un interlocuteur unique pour toutes vos démarches administratives.",
  },
  {
    icon: "phone",
    title: "Assistance Voyage 24h/24",
    badge: "Sur place",
    desc: "Ligne directe disponible à toute heure : urgences, modifications de réservation et soutien sur place.",
  },
];

export default function OmraOffresPage() {
  const search = useSearch();
  const [activeType, setActiveType] = useState<string>(() => {
    const sp = new URLSearchParams(search);
    return sp.get("category") || "Tous";
  });

  const departureOffers = useMemo(
    () => offers.filter((o) => OMRA_CATS.includes(o.category)),
    [],
  );

  const cityOptions = useMemo(() => {
    const set = new Set<string>();
    departureOffers.forEach((o) => { if (o.departureCity) set.add(o.departureCity); });
    return Array.from(set).sort();
  }, [departureOffers]);

  const filtered = useMemo(() => {
    if (activeType === "Tous") return departureOffers;
    return departureOffers.filter((o) => o.category === activeType);
  }, [activeType, departureOffers]);

  const serviceOffers = useMemo(
    () => offers.filter((o) => SERVICE_IDS.includes(o.id)),
    [],
  );

  void cityOptions;
  void serviceOffers;

  return (
    <OmraFactoryLayout>
      <PageHero
        visual="spiritual"
        eyebrow="Omra Factory — Offres"
        title="Tous nos programmes & services pèlerinage"
        subtitle="Omra, Omra Plus, Ramadan, Hajj — consultez nos départs disponibles, choisissez votre formule et demandez votre devis en quelques instants."
        crumbs={[{ label: "Omra Factory", href: "/omra-factory" }, { label: "Offres" }]}
        primaryCta={{ label: "Demander un devis", href: quoteHref }}
        secondaryCta={{ label: "Voir les programmes", href: "/omra-factory#programmes" }}
      />

      {/* ── Departures ── */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-2">Programmes de pèlerinage</p>
              <h2 className="font-playfair text-3xl font-bold text-syanor-ink">Départs disponibles</h2>
            </div>
            <p className="text-sm text-syanor-ink/50">
              <span className="font-semibold text-syanor-emerald">{filtered.length}</span>{" "}
              départ{filtered.length > 1 ? "s" : ""} affiché{filtered.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Filter tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {ALL_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  activeType === t
                    ? "border-syanor-gold bg-syanor-gold text-syanor-royal shadow-sm"
                    : "border-syanor-gold/25 bg-transparent text-syanor-ink/65 hover:border-syanor-gold/50 hover:text-syanor-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <OffersGrid offers={filtered} />
          ) : (
            <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-syanor-gold/15 bg-syanor-pearl/60 px-6 py-12 text-center">
              <p className="font-playfair text-xl text-syanor-ink/60">Aucun départ pour ce filtre</p>
              <p className="text-sm text-syanor-ink/40">Contactez-nous pour une offre sur mesure.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #022B24 0%, #063F33 100%)" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-syanor-gold">
              Services inclus & à la carte
            </p>
            <h2 className="font-playfair text-3xl font-bold text-syanor-ivory">
              Visa, hébergement & assistance
            </h2>
            <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-syanor-gold/40 to-transparent" aria-hidden="true" />
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-syanor-champagne/55">
              Disponibles seuls ou combinés à votre programme — nous gérons chaque démarche pour vous.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 50}>
                <div className="group flex flex-col gap-3 rounded-2xl border border-syanor-gold/12 bg-white/[0.05] p-5 transition-all duration-300 hover:border-syanor-gold/30 hover:bg-white/[0.08]">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl text-syanor-gold"
                    style={{ background: "rgba(201,162,74,0.12)", border: "1px solid rgba(201,162,74,0.22)" }}
                  >
                    <Icon name={svc.icon} className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="inline-block w-fit rounded-full border border-syanor-gold/20 bg-syanor-gold/10 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-widest text-syanor-gold">
                    {svc.badge}
                  </span>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-syanor-ivory">{svc.title}</h3>
                    <p className="text-xs leading-relaxed text-syanor-champagne/45">{svc.desc}</p>
                  </div>
                  <Link
                    href={quoteHref}
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-syanor-gold/70 transition-colors hover:text-syanor-gold"
                  >
                    Demander ce service
                    <Icon name="arrow-right" className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Vous ne trouvez pas le départ idéal ?"
        body="Indiquez-nous vos dates, votre ville de départ et votre confort : nous construisons une proposition sur mesure."
        ctaLabel="Demander un devis personnalisé"
        ctaHref={quoteHref}
        secondary={{ label: "Découvrir nos programmes", href: "/omra-factory" }}
      />

      <StickyMobileCTA label="Demander un devis" href={quoteHref} />
    </OmraFactoryLayout>
  );
}
