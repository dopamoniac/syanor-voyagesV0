type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import FeatureGrid from "@/components/ui/FeatureGrid";
import PackComparisonCards from "@/components/ui/PackComparisonCards";
import { PACK_PRESETS } from "@/components/ui/PackComparisonCards";
import ActivityConfigurator from "@/components/ui/ActivityConfigurator";
import ConfiguratorSection from "@/components/sections/ConfiguratorSection";
import RelatedOffers from "@/components/ui/RelatedOffers";
import FaqSection from "@/components/sections/FaqSection";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Séjours Sur Mesure | SYANOR VOYAGES",
  description:
    "Composez votre voyage sur mesure : destination, dates, transport, hôtel, transferts, assistance, budget et options VIP. Un séjour conçu autour de vos envies.",
  alternates: { canonical: "/sejours-sur-mesure" },
};

const quoteHref = quoteUrl({ service: "Séjour sur mesure" });

const options = [
  { title: "Destination libre", desc: "Le voyage commence par votre envie.", icon: "globe" },
  { title: "Dates flexibles", desc: "Nous nous adaptons à votre calendrier.", icon: "clock" },
  { title: "Transport au choix", desc: "Avion, bateau ou formule mixte.", icon: "route" },
  { title: "Hôtel & confort", desc: "Du standard au VIP, selon vos goûts.", icon: "diamond" },
  { title: "Transferts & assistance", desc: "Une logistique prise en charge.", icon: "hand-heart" },
  { title: "Options VIP", desc: "Des prestations d'exception sur demande.", icon: "spark" },
];

export default function SejoursSurMesurePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Séjours sur mesure"
        title="Un voyage conçu entièrement autour de vous."
        subtitle="Destination, dates, transport, confort, budget et options VIP : composez un séjour qui vous ressemble, avec une assistance dédiée."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Séjours Sur Mesure" }]}
        primaryCta={{ label: "Composer mon séjour", href: "#configurateur" }}
        secondaryCta={{ label: "Voyages organisés", href: "/voyages-organises" }}
      />

      <Section
        eyebrow="Le sur mesure SYANOR"
        title="Tout est ajustable, rien n'est imposé"
        subtitle="Nous partons de vos envies pour construire une proposition personnalisée et claire."
      >
        <FeatureGrid features={options} columns={3} />
      </Section>

      {/* Pack comparison */}
      <Section
        variant="pearl"
        eyebrow="Nos formules"
        title="Choisissez votre formule séjour"
        subtitle="De la découverte au voyage d'exception — comparez et demandez votre devis personnalisé."
      >
        <PackComparisonCards formulas={PACK_PRESETS.sejour.formulas} />
      </Section>

      {/* Step-by-step configurator */}
      <Section
        variant="champagne"
        eyebrow="Configurateur séjour"
        title="Composez votre séjour en 5 étapes"
        subtitle="Destination, confort, transport, hôtel, voyageurs — créez votre devis en quelques clics."
      >
        <div className="mx-auto max-w-2xl">
          <ActivityConfigurator singleActivity="sejour" />
        </div>
      </Section>

      {/* Classic full configurator (advanced) */}
      <ConfiguratorSection service="Séjour sur mesure" />

      <RelatedOffers offers={getOffersByCategory(["Séjour sur mesure", "Pack personnalisé", "Voyage organisé"])} />

      <FaqSection
        items={[
          {
            question: "Comment fonctionne un séjour sur mesure ?",
            answer:
              "Vous nous indiquez votre destination, vos dates, votre budget et votre confort. Nous concevons ensuite un programme personnalisé : hôtel au choix, transferts et accompagnement dédié.",
          },
          {
            question: "Puis-je combiner avion et bateau ?",
            answer:
              "Oui, nous proposons des formules mixtes (avion + bateau) selon votre itinéraire et vos préférences.",
          },
          {
            question: "Proposez-vous des options VIP ?",
            answer:
              "Oui. Transferts privés, prestations haut de gamme et conciergerie voyage sont disponibles sur demande.",
          },
          {
            question: "Le configurateur engage-t-il un achat ?",
            answer:
              "Non. Le configurateur sert à préparer votre demande. Vous recevez ensuite une proposition sans engagement.",
          },
        ]}
      />

      <CTASection
        title="Imaginez-le, nous l'organisons."
        body="Composez votre séjour idéal et recevez une proposition personnalisée et sans engagement."
        ctaLabel="Demander un devis sur mesure"
        ctaHref={quoteHref}
        secondary={{ label: "Packs premium / VIP", href: "/services#packs" }}
      />

      <StickyMobileCTA label="Composer mon séjour" href="#configurateur" />
    </SiteLayout>
  );
}
