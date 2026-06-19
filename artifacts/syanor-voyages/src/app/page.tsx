import SiteLayout from "@/components/layout/SiteLayout";
import RenaissanceHero from "@/components/sections/RenaissanceHero";
import HeroTransition from "@/components/sections/HeroTransition";
import Hero from "@/components/sections/Hero";
import SmartSearchPanel from "@/components/sections/SmartSearchPanel";
import DestinationsShowcase from "@/components/sections/DestinationsShowcase";
import ServicesEditorial from "@/components/sections/ServicesEditorial";
import VIPCinematic from "@/components/sections/VIPCinematic";
import JourneySteps from "@/components/sections/JourneySteps";
import TestimonialsEditorial from "@/components/sections/TestimonialsEditorial";
import FaqSection from "@/components/sections/FaqSection";
import ContactEditorial from "@/components/sections/ContactEditorial";
import { faq } from "@/data/faq";

export default function Home() {
  return (
    <SiteLayout>

      {/* 1. Renaissance hero — full screen split universe — DO NOT TOUCH */}
      <RenaissanceHero />

      {/* 1→2. Luxury cinematic transition */}
      <HeroTransition />

      {/* 2. Original cinematic hero — DO NOT TOUCH */}
      <Hero />

      {/* 3. Luxury concierge booking panel */}
      <SmartSearchPanel />

      {/* 4. Cinematic destinations bento + mobile horizontal scroll */}
      <DestinationsShowcase />

      {/* 5. Three alternating editorial service storytelling blocks */}
      <ServicesEditorial />

      {/* 6. Full-width dark VIP luxury showcase */}
      <VIPCinematic />

      {/* 7. Five-step journey process — horizontal timeline desktop / vertical mobile */}
      <JourneySteps />

      {/* 8. Editorial pull-quote testimonials — dark navy */}
      <TestimonialsEditorial />

      {/* 9. FAQ accordion */}
      <FaqSection items={faq.slice(0, 5)} moreHref="/faq" />

      {/* 10. Premium editorial contact */}
      <ContactEditorial />

    </SiteLayout>
  );
}
