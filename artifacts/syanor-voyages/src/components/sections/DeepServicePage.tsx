import type { ComponentType, ReactNode } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import IncludedList from "@/components/ui/IncludedList";
import ProcessSteps, { type Step } from "@/components/ui/ProcessSteps";
import FeatureGrid, { type Feature } from "@/components/ui/FeatureGrid";
import FaqSection from "@/components/sections/FaqSection";
import RelatedOffers from "@/components/ui/RelatedOffers";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import PackComparisonCards, { type Formula } from "@/components/ui/PackComparisonCards";
import ActivityConfigurator from "@/components/ui/ActivityConfigurator";
import type { Crumb } from "@/components/ui/Breadcrumb";
import type { FaqItem, TravelOffer } from "@/types";

export interface PackComparisonConfig {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  formulas: Formula[];
}

export interface ActivityConfiguratorConfig {
  activity: "omra" | "avion" | "bateau" | "sejour";
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export interface DeepServiceConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  crumbs: Crumb[];
  heroImage?: string;
  quoteHref: string;
  intro: { heading: string; paragraphs: string[] };
  included: string[];
  notIncluded?: string[];
  includedTitle?: string;
  process: { eyebrow?: string; title: string; steps: Step[] };
  benefits: { eyebrow?: string; title: string; features: Feature[] };
  related?: TravelOffer[];
  faq: FaqItem[];
  cta: { title: string; body?: string; ctaLabel: string; ctaHref: string; secondary?: { label: string; href: string } };
  stickyLabel: string;
  /** Optional pack comparison section inserted after Benefits. */
  packComparison?: PackComparisonConfig;
  /** Optional activity configurator section inserted after Comparison (or Benefits). */
  activityConfigurator?: ActivityConfiguratorConfig;
}

export default function DeepServicePage({
  config,
  LayoutComponent = SiteLayout,
}: {
  config: DeepServiceConfig;
  LayoutComponent?: ComponentType<{ children: ReactNode }>;
}) {
  return (
    <LayoutComponent>
      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        subtitle={config.subtitle}
        crumbs={config.crumbs}
        image={config.heroImage}
        primaryCta={{ label: "Demander un devis", href: config.quoteHref }}
        secondaryCta={{ label: "Voir les offres", href: "/offres" }}
      />

      {/* Explanation */}
      <Section variant="ivory">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl leading-tight text-syanor-ink md:text-h2">
            {config.intro.heading}
          </h2>
          <div className="mx-auto mt-5 w-24 gold-divider" aria-hidden="true" />
          {config.intro.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 font-inter leading-relaxed text-syanor-ink/70">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* Included / not included */}
      <Section
        variant="pearl"
        eyebrow="Prestations"
        title={config.includedTitle ?? "Ce qui est inclus"}
        subtitle="Le détail exact dépend de la formule choisie ; nous le confirmons dans votre devis."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <IncludedList title="Inclus" items={config.included} tone="included" />
          {config.notIncluded && config.notIncluded.length > 0 && (
            <IncludedList title="Non inclus / à confirmer" items={config.notIncluded} tone="excluded" />
          )}
        </div>
      </Section>

      {/* Process */}
      <Section
        variant="champagne"
        eyebrow={config.process.eyebrow ?? "Comment ça marche"}
        title={config.process.title}
      >
        <ProcessSteps steps={config.process.steps} />
      </Section>

      {/* Benefits */}
      <Section
        variant="ivory"
        eyebrow={config.benefits.eyebrow ?? "Vos avantages"}
        title={config.benefits.title}
      >
        <FeatureGrid features={config.benefits.features} columns={3} />
      </Section>

      {/* Pack comparison (optional) */}
      {config.packComparison && (
        <Section variant="pearl">
          <PackComparisonCards
            eyebrow={config.packComparison.eyebrow}
            title={config.packComparison.title}
            subtitle={config.packComparison.subtitle}
            formulas={config.packComparison.formulas}
          />
        </Section>
      )}

      {/* Activity configurator (optional) */}
      {config.activityConfigurator && (
        <Section
          variant="champagne"
          eyebrow={config.activityConfigurator.eyebrow ?? "Configurateur"}
          title={config.activityConfigurator.title ?? "Composez votre voyage en 5 étapes"}
          subtitle={config.activityConfigurator.subtitle ?? "Sélectionnez vos préférences : nous revenons vers vous avec une proposition personnalisée."}
        >
          <div className="mx-auto max-w-2xl">
            <ActivityConfigurator singleActivity={config.activityConfigurator.activity} />
          </div>
        </Section>
      )}

      {config.related && config.related.length > 0 && (
        <RelatedOffers offers={config.related} />
      )}

      <FaqSection items={config.faq} title="Questions fréquentes" />

      <CTASection
        title={config.cta.title}
        body={config.cta.body}
        ctaLabel={config.cta.ctaLabel}
        ctaHref={config.cta.ctaHref}
        secondary={config.cta.secondary}
      />

      <StickyMobileCTA label={config.stickyLabel} href={config.quoteHref} />
    </LayoutComponent>
  );
}
