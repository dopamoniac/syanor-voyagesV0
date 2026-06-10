type Metadata = Record<string, unknown>;
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales | SYANOR VOYAGES",
  description:
    "Conditions générales de SYANOR VOYAGES : modalités relatives aux devis, réservations, prix, paiements et responsabilités.",
  alternates: { canonical: "/conditions-generales" },
};

export default function ConditionsGeneralesPage() {
  return (
    <LegalPage
      title="Conditions générales"
      intro="Les conditions générales applicables aux services proposés par SYANOR VOYAGES."
      crumbs={[{ label: "Accueil", href: "/" }, { label: "Conditions générales" }]}
      note="Modèle de conditions générales à faire valider et compléter avec vos conditions de vente réelles et la réglementation applicable au secteur du voyage."
      blocks={[
        {
          heading: "Objet",
          paragraphs: [
            "Les présentes conditions encadrent les prestations de SYANOR VOYAGES : billets avion et bateau, voyages spirituels, voyages organisés et séjours sur mesure.",
          ],
        },
        {
          heading: "Devis et réservations",
          paragraphs: [
            "Toute demande de devis est sans engagement. Une réservation devient ferme après validation explicite et selon les modalités communiquées dans l'offre.",
          ],
        },
        {
          heading: "Prix et disponibilités",
          paragraphs: [
            "Les prix, dates et disponibilités sont indicatifs et confirmés lors de l'établissement du devis. Certaines offres sont signalées « à confirmer » ou « sur demande ».",
          ],
        },
        {
          heading: "Paiement",
          paragraphs: [
            "Les modalités de paiement (acompte, solde, échéances) sont précisées dans chaque offre et à compléter selon vos pratiques.",
          ],
        },
        {
          heading: "Documents de voyage",
          paragraphs: [
            "Le voyageur est responsable de la validité de ses documents (passeport, visa, vaccinations). Nous vous conseillons et vous accompagnons dans ces démarches.",
          ],
        },
        {
          heading: "Responsabilité",
          paragraphs: [
            "SYANOR VOYAGES met en œuvre tous les moyens pour assurer la qualité de ses prestations. Les conditions détaillées de responsabilité et d'annulation sont à compléter.",
          ],
        },
      ]}
    />
  );
}
