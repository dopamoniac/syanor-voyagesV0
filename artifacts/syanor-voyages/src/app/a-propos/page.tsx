type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

export const metadata: Metadata = {
  title: "À propos | SYANOR VOYAGES",
  description:
    "SYANOR VOYAGES, La Renaissance du Voyage : notre histoire, notre mission, nos valeurs et notre philosophie d'un service de voyage premium et humain.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  { title: "Excellence", desc: "Une exigence de qualité à chaque étape.", icon: "diamond" },
  { title: "Confiance", desc: "Transparence et clarté dans nos échanges.", icon: "shield" },
  { title: "Bienveillance", desc: "Un accompagnement humain et attentif.", icon: "hand-heart" },
  { title: "Précision", desc: "Le souci du détail qui fait la différence.", icon: "compass" },
];

const trust = [
  { title: "Accompagnement humain", desc: "Un interlocuteur à votre écoute.", icon: "users" },
  { title: "Service réactif", desc: "Des réponses claires et rapides.", icon: "clock" },
  { title: "Expertise voyage", desc: "Des conseils fiables et avisés.", icon: "globe" },
  { title: "Assistance complète", desc: "Avant, pendant et après le voyage.", icon: "phone" },
];

const quality = [
  "Écoute attentive de votre projet",
  "Proposition claire et personnalisée",
  "Organisation soignée dans le détail",
  "Suivi et assistance jusqu'au retour",
];

export default function AProposPage() {
  return (
    <SiteLayout>
      <PageHero
        visual="identity"
        eyebrow="À propos"
        title="SYANOR VOYAGES — La Renaissance du Voyage."
        subtitle="Une agence de voyages premium dédiée à transformer chaque projet en une expérience claire, sereine et soignée."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
        primaryCta={{ label: "Nous contacter", href: "/agence/contact" }}
        secondaryCta={{ label: "Nos services", href: "/agence/services" }}
      />

      <Section variant="ivory">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Notre histoire</p>
            <h2 className="font-playfair text-3xl leading-tight text-syanor-ink md:text-h2">
              Le voyage, repensé avec exigence et attention.
            </h2>
            <p className="mt-5 font-inter leading-relaxed text-syanor-ink/70">
              SYANOR VOYAGES est née d&apos;une conviction simple : un voyage réussi
              commence par un accompagnement de confiance. Billets, voyages
              spirituels, séjours organisés ou sur mesure — nous mettons la même
              rigueur et la même bienveillance au service de chaque projet.
            </p>
            <p className="mt-5 font-inter leading-relaxed text-syanor-ink/70">
              Notre ambition : offrir une expérience premium, claire et humaine, du
              premier échange jusqu&apos;au retour.
            </p>
          </div>
          <Reveal className="lg:justify-self-end">
            <div className="card-emerald max-w-md p-8">
              <p className="eyebrow text-syanor-gold-soft">Notre mission</p>
              <h3 className="mt-3 font-playfair text-2xl text-syanor-ivory">
                Rendre chaque voyage simple, serein et soigné.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-syanor-champagne/85">
                Nous prenons en charge la complexité pour que vous ne gardiez que
                l&apos;essentiel : le plaisir et le sens de votre voyage.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section variant="champagne" eyebrow="Nos valeurs" title="Ce qui nous guide au quotidien">
        <FeatureGrid features={values} columns={4} />
      </Section>

      <Section variant="ivory" eyebrow="Notre méthode" title="Un processus de qualité, étape par étape">
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {quality.map((q, i) => (
            <Reveal key={q} delay={(i % 2) * 60}>
              <div className="flex items-start gap-3 rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-5 shadow-card">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-syanor-emerald font-playfair text-sm font-bold text-syanor-gold">
                  {i + 1}
                </span>
                <p className="text-sm text-syanor-ink/80">{q}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section variant="champagne" eyebrow="Pourquoi nous choisir" title="Des indicateurs de confiance">
        <FeatureGrid features={trust} columns={4} />
      </Section>

      <CTASection
        title="Construisons votre prochain voyage ensemble."
        body="Une équipe attentive et un service premium, à votre écoute."
        ctaLabel="Demander un devis"
        ctaHref="/agence/contact#quote"
        secondary={{ label: "Découvrir nos services", href: "/agence/services" }}
      />

      <StickyMobileCTA label="Nous contacter" href="/agence/contact" />
    </SiteLayout>
  );
}
