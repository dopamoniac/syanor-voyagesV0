type Metadata = Record<string, unknown>;
import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import SiteLayout from "@/components/layout/SiteLayout";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Section from "@/components/ui/Section";
import IncludedList from "@/components/ui/IncludedList";
import RoomPriceGrid from "@/components/ui/RoomPriceGrid";
import RelatedOffers from "@/components/ui/RelatedOffers";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import FaqSection from "@/components/sections/FaqSection";
import { cn, quoteUrl } from "@/lib/utils";
import { offers, getOfferBySlug, getRelatedOffers } from "@/data/offers";
import type { AvailabilityStatus } from "@/types";

export function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const offer = getOfferBySlug(params.slug);
  if (!offer) {
    return { title: "Offre introuvable | SYANOR VOYAGES" };
  }
  return {
    title: `${offer.title} | SYANOR VOYAGES`,
    description:
      offer.summary ??
      `${offer.title} — offre ${offer.category} proposée par SYANOR VOYAGES.`,
    alternates: { canonical: `/offres/${offer.slug}` },
  };
}

const statusClass: Record<AvailabilityStatus, string> = {
  Disponible: "bg-emerald-50 text-emerald-700",
  "Places limitées": "bg-amber-50 text-amber-700",
  "Sur demande": "bg-blue-50 text-blue-700",
  Complet: "bg-red-50 text-red-700",
  "À confirmer": "bg-slate-100 text-slate-500",
};

function InfoRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-1 border-b border-syanor-gold/15 py-3 sm:flex-row sm:items-center sm:justify-between">
      <dt className="text-sm text-syanor-ink/55">{label}</dt>
      <dd className="text-sm font-medium text-syanor-ink sm:text-right">{value}</dd>
    </div>
  );
}

const OMRA_FAQ = [
  {
    question: "Comment se déroule l'inscription pour ce départ ?",
    answer:
      "Vous envoyez votre demande via le formulaire ou WhatsApp. Nous revenons vers vous sous 24 h avec les détails de disponibilité, le programme complet et les conditions de réservation.",
  },
  {
    question: "Quels documents sont nécessaires pour l'Omra ?",
    answer:
      "Passeport valide au moins 6 mois après le retour, photos d'identité fond blanc, carnet de vaccination à jour (méningite obligatoire). Nous vous guidons dans la constitution de votre dossier visa.",
  },
  {
    question: "Le vol est-il inclus dans le prix ?",
    answer:
      "Oui, le vol international aller-retour est inclus dans tous nos packs Omra. L'itinéraire précis (compagnie, escales) est confirmé à la réservation.",
  },
  {
    question: "Puis-je annuler ou modifier ma réservation ?",
    answer:
      "Des conditions d'annulation et de modification s'appliquent selon le délai avant départ. Nous vous communiquons le détail lors de votre demande de réservation.",
  },
];

const HAJJ_FAQ = [
  {
    question: "Comment fonctionne la pré-inscription Hajj ?",
    answer:
      "La pré-inscription est sans engagement. Vous réservez votre place dans le contingent, et nous finalisons les détails (quota, programme, tarif) dès confirmation des autorités saoudiennes.",
  },
  {
    question: "Quels documents sont nécessaires pour le Hajj ?",
    answer:
      "Passeport valide, photos d'identité fond blanc, carnet de vaccination complet (méningite, fièvre jaune selon pays). Nous accompagnons chaque pèlerin dans le montage de son dossier.",
  },
];

const GENERIC_FAQ = [
  {
    question: "Comment puis-je réserver cette offre ?",
    answer:
      "Cliquez sur le bouton de réservation ou contactez-nous par WhatsApp. Nous confirmons la disponibilité et vous envoyons le programme et les conditions sous 24 h.",
  },
  {
    question: "Puis-je personnaliser cette offre ?",
    answer:
      "Oui. Dates, chambre, transport et options supplémentaires sont ajustables. Demandez votre devis sur mesure via le formulaire.",
  },
];

function getFaqForOffer(category: string) {
  if (category === "Omra" || category === "Omra Plus" || category === "Ramadan") return OMRA_FAQ;
  if (category === "Hajj") return HAJJ_FAQ;
  return GENERIC_FAQ;
}

export default function OfferDetailPage({ slug }: { slug: string }) {
  const offer = getOfferBySlug(slug);
  if (!offer) {
    return (
      <SiteLayout>
        <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
          <h1 className="font-playfair text-3xl font-bold text-syanor-ink md:text-4xl">
            Offre introuvable
          </h1>
          <p className="mt-4 text-syanor-ink/70">
            L&apos;offre que vous recherchez n&apos;existe pas ou n&apos;est plus disponible.
          </p>
          <Link href="/agence/offres" className="btn-primary mt-8">
            Voir toutes les offres
          </Link>
        </section>
      </SiteLayout>
    );
  }

  const isComplete = offer.availabilityStatus === "Complet";
  const ctaHref = quoteUrl({
    service: offer.category,
    offer: offer.title,
    destination: offer.arrivalCity,
    transport: offer.transportType,
    comfort: offer.comfortLevel,
    ...(offer.returnDate
      ? { programmed: true, departureDate: offer.departureDate, returnDate: offer.returnDate }
      : {}),
  });
  const related = getRelatedOffers(offer, 3);
  const faqItems = getFaqForOffer(offer.category);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-syanor-ivory pt-28 md:pt-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,232,199,0.6),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 pb-12 md:px-8 md:pb-16">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Offres & Départs", href: "/agence/offres" },
                { label: offer.title },
              ]}
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-syanor-emerald/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-emerald">
              {offer.category}
            </span>
            {offer.availabilityStatus && (
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-[0.7rem] font-semibold",
                  statusClass[offer.availabilityStatus]
                )}
              >
                {offer.availabilityStatus}
              </span>
            )}
            {offer.comfortLevel && (
              <span className="rounded-full bg-syanor-gold/15 px-3 py-1 text-[0.7rem] font-semibold text-syanor-gold">
                {offer.comfortLevel}
              </span>
            )}
          </div>
          <h1 className="mt-5 max-w-3xl font-playfair text-4xl font-bold leading-[1.1] text-syanor-ink md:text-5xl">
            {offer.title}
          </h1>
          {offer.summary && (
            <p className="mt-5 max-w-2xl font-inter text-base leading-relaxed text-syanor-ink/70 md:text-lg">
              {offer.summary}
            </p>
          )}
          {/* Route display */}
          {offer.outboundRoute && (
            <div className="mt-4 flex items-center gap-2 text-sm text-syanor-ink/60">
              <Icon name="airplane" className="h-3.5 w-3.5 text-syanor-gold" aria-hidden="true" />
              <span>{offer.outboundRoute}</span>
              {offer.inboundRoute && (
                <>
                  <span className="text-syanor-gold/40 mx-1" aria-hidden="true">·</span>
                  <span>{offer.inboundRoute}</span>
                </>
              )}
            </div>
          )}
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href={isComplete ? "/agence/offres" : ctaHref}
              className={cn("btn-primary", isComplete && "pointer-events-none opacity-60")}
            >
              {isComplete
                ? "Complet"
                : (offer.category === "Omra" || offer.category === "Omra Plus" || offer.category === "Hajj" || offer.category === "Ramadan" || offer.category === "Formation")
                  ? "Faire une préinscription"
                  : "Demander cette offre"}
            </Link>
            <Link href="/agence/offres" className="btn-secondary">
              Toutes les offres
            </Link>
            {offer.priceFrom && (
              <span className="font-playfair text-lg font-semibold text-syanor-emerald sm:ml-2">
                {offer.priceFrom}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Key facts + included */}
      <Section variant="pearl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Sticky facts sidebar */}
          <div className="rounded-2xl border border-syanor-gold/20 bg-white p-6 shadow-card md:p-7 lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-playfair text-xl text-syanor-ink">Informations clés</h2>
            <div className="mt-3 w-12 gold-divider" aria-hidden="true" />
            <dl className="mt-4">
              <InfoRow label="Catégorie" value={offer.category} />
              <InfoRow label="Date de départ" value={offer.departureDate} />
              <InfoRow label="Date de retour" value={offer.returnDate} />
              <InfoRow label="Durée" value={offer.duration} />
              <InfoRow label="Ville de départ" value={offer.departureCity} />
              <InfoRow label="Destination" value={offer.arrivalCity} />
              <InfoRow label="Aller" value={offer.outboundRoute} />
              <InfoRow label="Retour" value={offer.inboundRoute} />
              <InfoRow label="Transport" value={offer.transportType} />
              <InfoRow label="Compagnie" value={offer.airlineOrCompany} />
              <InfoRow label="Confort" value={offer.comfortLevel} />
              <InfoRow label="Hébergement" value={offer.hotelLevel} />
              <InfoRow label="À partir de" value={offer.priceFrom} />
            </dl>
            {!isComplete && (
              <Link href={ctaHref} className="btn-primary mt-6 w-full">
                Réserver ce départ
              </Link>
            )}
          </div>

          {/* Included / not included / documents */}
          <div className="space-y-6">
            <IncludedList
              title="Services inclus"
              items={offer.includedServices}
              tone="included"
            />
            {offer.notIncluded && offer.notIncluded.length > 0 && (
              <IncludedList
                title="Non inclus / à confirmer"
                items={offer.notIncluded}
                tone="excluded"
              />
            )}
            {offer.documents && offer.documents.length > 0 && (
              <IncludedList title="Documents à prévoir" items={offer.documents} tone="included" />
            )}
          </div>
        </div>
      </Section>

      {/* Room prices */}
      {offer.roomPrices && (
        <Section variant="ivory" eyebrow="Chambres" title="Tarifs par type de chambre">
          <RoomPriceGrid
            prices={offer.roomPrices}
            ctaBaseHref={quoteUrl({ service: offer.category, offer: offer.title })}
            offerTitle={offer.title}
          />
        </Section>
      )}

      {/* Program */}
      {offer.program && offer.program.length > 0 && (
        <Section
          variant="champagne"
          eyebrow="Déroulé"
          title="Programme jour par jour"
          subtitle="Programme indicatif, susceptible d'ajustement selon la logistique."
        >
          <ol className="relative mx-auto max-w-3xl space-y-6 pl-8">
            <span
              className="absolute bottom-2 left-[15px] top-2 w-px bg-syanor-gold/40"
              aria-hidden="true"
            />
            {offer.program.map((p) => (
              <li key={p.day} className="relative">
                <span className="absolute -left-8 flex h-8 w-8 items-center justify-center rounded-full border-2 border-syanor-gold bg-syanor-ivory text-[0.7rem] font-bold text-syanor-emerald">
                  {p.day}
                </span>
                <h3 className="font-playfair text-base text-syanor-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-syanor-ink/70">{p.description}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* Payment notes */}
      {offer.paymentNotes && offer.paymentNotes.length > 0 && (
        <Section variant="pearl" eyebrow="Paiement" title="Conditions de paiement">
          <ul className="mx-auto max-w-3xl space-y-2.5">
            {offer.paymentNotes.map((n) => (
              <li
                key={n}
                className="flex items-start gap-3 rounded-xl border border-syanor-gold/20 bg-syanor-champagne/40 p-4 text-sm text-syanor-ink/75"
              >
                <span className="text-syanor-gold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                {n}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Notes */}
      {offer.notes && offer.notes.length > 0 && (
        <Section variant="champagne" title="Informations importantes">
          <ul className="mx-auto max-w-3xl space-y-3">
            {offer.notes.map((n) => (
              <li
                key={n}
                className="flex items-start gap-3 rounded-xl border border-syanor-gold/20 bg-syanor-pearl p-4 text-sm text-syanor-ink/75"
              >
                <span className="text-syanor-gold" aria-hidden="true">⚑</span>
                {n}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* FAQ accordion (offer-specific) */}
      <FaqSection
        eyebrow="Questions fréquentes"
        title={`Questions sur ce départ`}
        items={faqItems}
      />

      {related.length > 0 && <RelatedOffers offers={related} />}

      {!isComplete && (
        <StickyMobileCTA
          label={
            (offer.category === "Omra" || offer.category === "Omra Plus" || offer.category === "Hajj" || offer.category === "Ramadan" || offer.category === "Formation")
              ? "Faire une préinscription"
              : "Demander cette offre"
          }
          href={ctaHref}
          priceLabel={offer.priceFrom}
        />
      )}
    </SiteLayout>
  );
}
