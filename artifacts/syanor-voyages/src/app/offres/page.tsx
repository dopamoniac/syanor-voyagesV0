type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import OffersExplorer from "@/components/sections/OffersExplorer";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Offres & Départs | SYANOR VOYAGES",
  description:
    "Découvrez les offres et départs SYANOR VOYAGES : Omra, Hajj, Ramadan, billets avion et bateau, voyages organisés et séjours sur mesure. Filtrez par type, transport, confort et ville.",
  alternates: { canonical: "/offres" },
};

export default function OffresPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Départs & offres"
        title="Nos offres & prochains départs"
        subtitle="Consultez nos départs disponibles et demandez votre place, ou sollicitez une proposition entièrement sur mesure selon vos dates et votre confort."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Offres & Départs" }]}
        primaryCta={{ label: "Demander une offre sur mesure", href: "/contact#quote" }}
      />

      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <OffersExplorer />
        </div>
      </section>

      <CTASection
        title="Vous ne trouvez pas le départ idéal ?"
        body="Indiquez-nous vos dates, votre ville de départ et votre confort : nous construisons une proposition sur mesure."
        ctaLabel="Demander une proposition"
        ctaHref="/contact#quote"
        secondary={{ label: "Séjours sur mesure", href: "/sejours-sur-mesure" }}
      />

      <StickyMobileCTA label="Demander un devis" href="/contact#quote" />
    </SiteLayout>
  );
}
