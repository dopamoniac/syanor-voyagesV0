import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import FeatureGrid from "@/components/ui/FeatureGrid";
import RelatedOffers from "@/components/ui/RelatedOffers";
import FaqSection from "@/components/sections/FaqSection";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { quoteUrl } from "@/lib/utils";
import { getOffersByCategory } from "@/data/offers";

export const metadata: Metadata = {
  title: "Voyages Organisés | SYANOR VOYAGES",
  description:
    "Voyages organisés en famille, en groupe ou culturels : programmes structurés, transport, hôtels, transferts et accompagnement dédié. Des séjours pensés dans le moindre détail.",
  alternates: { canonical: "/voyages-organises" },
};

const quoteHref = quoteUrl({ service: "Voyage organisé" });

const itineraries = [
  { title: "Voyages en famille", desc: "Des séjours adaptés au rythme et au confort de toute la famille.", icon: "users" },
  { title: "Voyages en groupe", desc: "Une organisation fluide pour partir à plusieurs, l'esprit tranquille.", icon: "route" },
  { title: "Voyages culturels", desc: "Découverte de destinations riches, avec un programme structuré.", icon: "compass" },
  { title: "Séjours premium", desc: "Une expérience soignée, avec prestations haut de gamme.", icon: "diamond" },
];

const included = [
  { title: "Transport", desc: "Vols ou traversées coordonnés.", icon: "airplane" },
  { title: "Hôtels sélectionnés", desc: "Confort adapté à la formule.", icon: "diamond" },
  { title: "Transferts", desc: "Déplacements organisés sur place.", icon: "route" },
  { title: "Programme structuré", desc: "Un déroulé clair, jour par jour.", icon: "map" },
  { title: "Accompagnement", desc: "Une présence dédiée durant le séjour.", icon: "hand-heart" },
  { title: "Assistance", desc: "Un interlocuteur avant, pendant et après.", icon: "phone" },
];

export default function VoyagesOrganisesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Voyages organisés"
        title="Des voyages organisés, pensés dans le moindre détail."
        subtitle="Famille, groupe, culture ou premium : un programme structuré, un transport coordonné et un accompagnement dédié, pour voyager l'esprit léger."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Voyages Organisés" }]}
        primaryCta={{ label: "Demander un devis", href: quoteHref }}
        secondaryCta={{ label: "Séjours sur mesure", href: "/sejours-sur-mesure" }}
      />

      <Section
        eyebrow="Nos formules"
        title="Choisissez le type de voyage qui vous ressemble"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {itineraries.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) * 60}>
              <article className="flex h-full flex-col rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold">
                  <Icon name={it.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-playfair text-h3 text-syanor-ink">{it.title}</h3>
                <p className="mt-2 text-sm text-syanor-ink/70">{it.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        variant="champagne"
        eyebrow="Ce qui est compris"
        title="Une organisation complète"
        subtitle="Transport, hôtels, transferts, programme et accompagnement : nous prenons tout en charge."
      >
        <FeatureGrid features={included} columns={3} />
      </Section>

      <RelatedOffers offers={getOffersByCategory(["Voyage organisé", "Séjour sur mesure"])} />

      <FaqSection
        items={[
          {
            question: "Puis-je voyager en groupe constitué ?",
            answer:
              "Oui. Nous organisons des voyages pour des groupes déjà constitués (familles, amis, associations) avec un programme adapté.",
          },
          {
            question: "Les programmes sont-ils personnalisables ?",
            answer:
              "Les voyages organisés suivent un programme structuré, mais nous pouvons l'ajuster selon vos besoins ou vous orienter vers un séjour sur mesure.",
          },
          {
            question: "L'accompagnement est-il assuré sur place ?",
            answer:
              "Selon la formule, un accompagnement est prévu durant le séjour, en plus de l'assistance avant et après le voyage.",
          },
          {
            question: "Comment obtenir un devis ?",
            answer:
              "Indiquez votre destination ou thème, vos dates et le nombre de voyageurs dans le formulaire de devis : nous revenons vers vous rapidement.",
          },
        ]}
      />

      <CTASection
        title="Prêt à partir l'esprit tranquille ?"
        body="Confiez-nous l'organisation de votre prochain voyage en groupe ou en famille."
        ctaLabel="Demander un devis"
        ctaHref={quoteHref}
        secondary={{ label: "Voir les offres", href: "/offres" }}
      />

      <StickyMobileCTA label="Demander un devis" href={quoteHref} />
    </SiteLayout>
  );
}
