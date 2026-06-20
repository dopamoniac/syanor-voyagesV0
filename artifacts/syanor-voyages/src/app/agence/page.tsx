import SiteLayout from "@/components/layout/SiteLayout";
import AgencyHero from "@/components/sections/AgencyHero";
import SmartSearchPanel from "@/components/sections/SmartSearchPanel";
import DestinationsShowcase from "@/components/sections/DestinationsShowcase";
import ServicesEditorial from "@/components/sections/ServicesEditorial";
import VIPCinematic from "@/components/sections/VIPCinematic";
import JourneySteps from "@/components/sections/JourneySteps";
import TestimonialsEditorial from "@/components/sections/TestimonialsEditorial";
import FaqSection from "@/components/sections/FaqSection";
import ContactEditorial from "@/components/sections/ContactEditorial";
import type { FaqItem } from "@/types";

const agenceFaq: FaqItem[] = [
  {
    question: "Quels services propose SYANOR VOYAGES ?",
    answer: "SYANOR organise des billets avion & bateau, des voyages organisés, des séjours sur mesure, des packs Premium / VIP et l'assistance visa. De la simple réservation à l'organisation complète.",
  },
  {
    question: "Comment demander un devis ?",
    answer: "Remplissez le formulaire de devis sur notre site ou contactez-nous par téléphone ou WhatsApp. Nous revenons vers vous rapidement avec une proposition personnalisée et sans engagement.",
  },
  {
    question: "Proposez-vous des billets avion seuls ?",
    answer: "Oui. SYANOR recherche les meilleurs itinéraires aériens pour toutes destinations selon vos dates, avec assistance à la réservation et suivi avant départ.",
  },
  {
    question: "Organisez-vous des voyages de noces ?",
    answer: "Absolument. Nos séjours sur mesure incluent une formule lune de miel avec hôtel sélectionné, transferts privés et programme romantique personnalisé selon vos envies.",
  },
  {
    question: "Combien de temps à l'avance faut-il réserver ?",
    answer: "Nous recommandons 2 à 4 mois avant le départ pour les séjours classiques. Pour les périodes de forte demande (été, vacances scolaires), comptez 4 à 6 mois minimum.",
  },
];

export default function AgenceHome() {
  return (
    <SiteLayout>
      <AgencyHero />
      <SmartSearchPanel />
      <DestinationsShowcase />
      <ServicesEditorial />
      <VIPCinematic />
      <JourneySteps />
      <TestimonialsEditorial />
      <FaqSection
        items={agenceFaq}
        moreHref="/agence/faq"
        moreLabel="Voir toutes les questions"
      />
      <ContactEditorial />
    </SiteLayout>
  );
}
