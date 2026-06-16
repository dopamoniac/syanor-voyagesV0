import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/sections/Hero";
import SmartSearchPanel from "@/components/sections/SmartSearchPanel";
import ServicesGrid from "@/components/sections/ServicesGrid";
import UniversesSection from "@/components/sections/UniversesSection";
import { OffersPreview } from "@/components/sections/HomePreviews";
import NextDepartures from "@/components/sections/NextDepartures";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FaqSection from "@/components/sections/FaqSection";
import CTASection from "@/components/ui/CTASection";
import ContactCards from "@/components/sections/ContactCards";
import { faq } from "@/data/faq";

export default function Home() {
  return (
    <SiteLayout>

      {/* 1. Cinematic hero — 90% premium agency, 10% Omra */}
      <Hero />

      {/* 2. Smart booking panel — floats below hero */}
      <SmartSearchPanel />

      {/* 3. Full service catalogue in photo-card groups */}
      <ServicesGrid />

      {/* 4. Two universes — brand positioning */}
      <UniversesSection />

      {/* 5. Featured offers & upcoming departures */}
      <OffersPreview />

      {/* 6. Next Omra departures strip */}
      <NextDepartures />

      {/* 7. Trust / why choose us */}
      <WhyChooseUs />

      {/* 8. Bottom CTA */}
      <CTASection
        title="Votre prochain voyage commence ici."
        body="Billets, séjours sur mesure, voyages organisés ou pèlerinage spirituel : confiez-nous votre projet et recevez une proposition adaptée."
        ctaLabel="Demander un devis gratuit"
        ctaHref="/contact#quote"
        secondary={{ label: "Voir toutes les offres", href: "/offres" }}
      />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. FAQ */}
      <FaqSection items={faq.slice(0, 5)} moreHref="/faq" />

      {/* 11. Contact cards */}
      <ContactCards />

    </SiteLayout>
  );
}
