import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité | SYANOR VOYAGES",
  description:
    "Politique de confidentialité de SYANOR VOYAGES : collecte, utilisation et protection de vos données personnelles dans le cadre des demandes de devis.",
  alternates: { canonical: "/politique-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      intro="La manière dont SYANOR VOYAGES collecte, utilise et protège vos données personnelles."
      crumbs={[{ label: "Accueil", href: "/" }, { label: "Politique de confidentialité" }]}
      note="Modèle de politique de confidentialité à adapter à vos pratiques réelles et à la réglementation applicable (RGPD)."
      blocks={[
        {
          heading: "Données collectées",
          paragraphs: [
            "Dans le cadre d'une demande de devis, nous collectons les informations que vous nous transmettez : nom, téléphone, email, type de service, dates, destination et préférences de voyage.",
          ],
        },
        {
          heading: "Utilisation des données",
          paragraphs: [
            "Vos données sont utilisées uniquement pour traiter votre demande, vous recontacter et vous proposer une offre adaptée. Elles ne sont pas revendues à des tiers.",
          ],
        },
        {
          heading: "Conservation",
          paragraphs: [
            "Vos données sont conservées pendant la durée nécessaire au traitement de votre demande et au respect de nos obligations légales.",
          ],
        },
        {
          heading: "Vos droits",
          paragraphs: [
            "Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, contactez-nous à info@syanorvoyages.com.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. La politique détaillée relative aux cookies est à compléter selon les outils réellement utilisés.",
          ],
        },
      ]}
    />
  );
}
