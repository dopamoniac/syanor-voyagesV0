type Metadata = Record<string, unknown>;
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales | SYANOR VOYAGES",
  description:
    "Mentions légales de SYANOR VOYAGES : informations sur l'éditeur du site, l'hébergement et les conditions d'utilisation.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      intro="Informations légales relatives au site SYANOR VOYAGES."
      crumbs={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
      note="Modèle de mentions légales à compléter avec les informations officielles de l'entreprise (raison sociale, immatriculation, hébergeur, etc.)."
      blocks={[
        {
          heading: "Éditeur du site",
          paragraphs: [
            "Le site SYANOR VOYAGES est édité par SYANOR VOYAGES.",
            "Raison sociale, forme juridique, capital social, numéro d'immatriculation, adresse du siège social, numéro de TVA et directeur de la publication : à compléter.",
          ],
        },
        {
          heading: "Coordonnées",
          paragraphs: [
            "Email : info@syanorvoyages.com",
            "Site : www.syanorvoyages.com",
            "Téléphone : à confirmer.",
          ],
        },
        {
          heading: "Hébergement",
          paragraphs: [
            "Le site est hébergé sur une infrastructure cloud (Cloudflare Pages).",
            "Coordonnées complètes de l'hébergeur : à compléter.",
          ],
        },
        {
          heading: "Propriété intellectuelle",
          paragraphs: [
            "L'ensemble des contenus présents sur ce site (textes, visuels, logos) est protégé. Toute reproduction sans autorisation est interdite.",
          ],
        },
        {
          heading: "Responsabilité",
          paragraphs: [
            "Les informations relatives aux offres, dates, prix et disponibilités sont fournies à titre indicatif et confirmées lors de l'établissement du devis.",
          ],
        },
      ]}
    />
  );
}
