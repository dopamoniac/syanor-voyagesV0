import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/sections/Hero";
import {
  ServicesPreview,
  OffersPreview,
  TicketsPreview,
  SpiritualPreview,
  FormationPreview,
  CustomStaysPreview,
} from "@/components/sections/HomePreviews";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FaqSection from "@/components/sections/FaqSection";
import CTASection from "@/components/ui/CTASection";
import ContactCards from "@/components/sections/ContactCards";
import SmartSearchPanel from "@/components/sections/SmartSearchPanel";
import NextDepartures from "@/components/sections/NextDepartures";
import OmraByMonth from "@/components/sections/OmraByMonth";
import CityGrid from "@/components/sections/CityGrid";
import OmraStepTimeline from "@/components/sections/OmraStepTimeline";
import PackComparisonCards, { PACK_PRESETS } from "@/components/ui/PackComparisonCards";
import { faq } from "@/data/faq";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />

      {/* Smart search panel — floats below hero */}
      <SmartSearchPanel />

      {/* Next Omra departures strip */}
      <NextDepartures />

      {/* Services overview — 14 activities in 4 groups */}
      <ServicesGrid />

      {/* Featured offers */}
      <OffersPreview />

      {/* Omra pack comparison */}
      <section className="section-pad bg-syanor-champagne/20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <PackComparisonCards
            eyebrow="Formules Omra"
            title="Choisissez votre formule Omra"
            subtitle="Essentiel, Premium ou VIP — chaque formule est pensée pour un niveau de confort différent, toujours avec un accompagnement spirituel complet."
            formulas={PACK_PRESETS.omra.formulas}
          />
        </div>
      </section>

      {/* Spiritual services feature */}
      <SpiritualPreview />

      {/* 9-step Omra journey timeline */}
      <OmraStepTimeline />

      {/* Omra by month */}
      <OmraByMonth />

      {/* Departures by city */}
      <CityGrid />

      {/* Formation */}
      <FormationPreview />

      {/* Custom stays */}
      <CustomStaysPreview />

      {/* Plane & boat tickets */}
      <TicketsPreview />

      {/* Trust + why choose us */}
      <WhyChooseUs />

      {/* Bottom CTA */}
      <CTASection
        title="Votre prochain voyage commence ici."
        body="Billets, voyages spirituels, séjours organisés ou sur mesure : confiez-nous votre projet et recevez une proposition adaptée."
        ctaLabel="Demander un devis"
        ctaHref="/contact#quote"
        secondary={{ label: "Voir les offres", href: "/offres" }}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FaqSection items={faq.slice(0, 5)} moreHref="/faq" />

      {/* Contact cards */}
      <ContactCards />
    </SiteLayout>
  );
}
