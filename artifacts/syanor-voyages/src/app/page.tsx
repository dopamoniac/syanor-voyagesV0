import SiteLayout from "@/components/layout/SiteLayout";
import RenaissanceHero from "@/components/sections/RenaissanceHero";
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
      <div className="relative">
        <RenaissanceHero />
        {/* Soft ivory fade-out over Hero 1 bottom — no content touched */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(248,244,238,0.95) 100%)" }}
          aria-hidden="true"
        />
      </div>

      {/* Thin champagne gold divider */}
      <div className="relative z-10 flex justify-center" style={{ marginTop: "-1px" }}>
        <div style={{ width: 120, height: 1, background: "rgba(216,181,106,0.45)" }} />
      </div>

      {/* 2. Original cinematic hero — pulled up to overlap the ivory fade — DO NOT TOUCH */}
      <div className="-mt-[60px] max-sm:-mt-[30px]">
        <Hero />
      </div>

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
