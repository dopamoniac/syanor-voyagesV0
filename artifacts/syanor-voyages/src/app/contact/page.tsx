type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import SmartQuoteForm from "@/components/sections/SmartQuoteForm";
import ContactCards from "@/components/sections/ContactCards";
import FaqSection from "@/components/sections/FaqSection";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Contact & Devis | SYANOR VOYAGES",
  description:
    "Contactez SYANOR VOYAGES et demandez votre devis personnalisé : billets, Omra & Hajj, voyages organisés et séjours sur mesure. Téléphone, email et WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact & devis"
        title="Parlons de votre prochain voyage."
        subtitle="Remplissez le formulaire de devis en 4 étapes ou contactez-nous directement. Nous revenons vers vous rapidement avec une proposition adaptée."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      <SmartQuoteForm />

      <ContactCards withCta={false} />

      <div id="faq" className="scroll-mt-28">
        <FaqSection items={faq} title="Questions fréquentes — contact & devis" />
      </div>
    </SiteLayout>
  );
}
