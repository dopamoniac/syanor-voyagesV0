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
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FaqSection from "@/components/sections/FaqSection";
import CTASection from "@/components/ui/CTASection";
import ContactCards from "@/components/sections/ContactCards";
import { faq } from "@/data/faq";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesPreview />
      <OffersPreview />
      <TicketsPreview />
      <SpiritualPreview />
      <FormationPreview />
      <CustomStaysPreview />
      <WhyChooseUs />
      <CTASection
        title="Votre prochain voyage commence ici."
        body="Billets, voyages spirituels, séjours organisés ou sur mesure : confiez-nous votre projet et recevez une proposition adaptée."
        ctaLabel="Demander un devis"
        ctaHref="/contact#quote"
        secondary={{ label: "Voir les offres", href: "/offres" }}
      />
      <Testimonials />
      <FaqSection items={faq.slice(0, 5)} moreHref="/contact#faq" />
      <ContactCards />
    </SiteLayout>
  );
}
