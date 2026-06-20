import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/sections/Hero";
import SmartSearchPanel from "@/components/sections/SmartSearchPanel";
import DestinationsShowcase from "@/components/sections/DestinationsShowcase";
import ServicesEditorial from "@/components/sections/ServicesEditorial";
import VIPCinematic from "@/components/sections/VIPCinematic";
import JourneySteps from "@/components/sections/JourneySteps";
import TestimonialsEditorial from "@/components/sections/TestimonialsEditorial";
import ContactEditorial from "@/components/sections/ContactEditorial";

export default function AgenceHome() {
  return (
    <SiteLayout>
      <Hero />
      <SmartSearchPanel />
      <DestinationsShowcase />
      <ServicesEditorial />
      <VIPCinematic />
      <JourneySteps />
      <TestimonialsEditorial />
      <ContactEditorial />
    </SiteLayout>
  );
}
