type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessSteps from "@/components/ui/ProcessSteps";
import FaqSection from "@/components/sections/FaqSection";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { quoteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Formation & Préparation Spirituelle | SYANOR VOYAGES",
  description:
    "Préparez votre voyage spirituel : formation avant départ, préparation des rites, supports pratiques, Ziyarat, accompagnement sur place et suivi avant, pendant et après.",
  alternates: { canonical: "/formation" },
};

const quoteHref = quoteUrl({ service: "Omra" });

const pillars = [
  { title: "Formation avant départ", desc: "Comprendre le sens et le déroulement de votre voyage spirituel.", icon: "book" },
  { title: "Préparation des rites", desc: "Aborder chaque étape avec clarté et confiance.", icon: "crescent" },
  { title: "Supports pratiques", desc: "Guides, checklists et repères pour le séjour.", icon: "map" },
  { title: "Ziyarat", desc: "Découverte accompagnée des lieux historiques.", icon: "compass" },
  { title: "Accompagnement sur place", desc: "Une présence attentive durant tout le séjour.", icon: "users" },
  { title: "Suivi avant, pendant, après", desc: "Un accompagnement continu et rassurant.", icon: "shield" },
];

const journey = [
  { title: "Comprendre", text: "Le sens et les étapes du voyage." },
  { title: "Préparer", text: "Les rites et l'organisation." },
  { title: "Voyager", text: "Sereinement, accompagné." },
  { title: "Être accompagné", text: "Sur place, à chaque étape." },
  { title: "Revenir serein", text: "Avec un suivi attentif." },
];

export default function FormationPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Accompagnement & formation"
        title="Préparez votre voyage spirituel avec clarté et sérénité."
        subtitle="Une préparation complète, avant le départ, pendant les rites et tout au long du séjour, pour vivre votre voyage en confiance."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Formation" }]}
        primaryCta={{ label: "Être accompagné", href: quoteHref }}
        secondaryCta={{ label: "Omra & Hajj", href: "/omra-hajj" }}
      />

      <Section variant="ivory">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl leading-tight text-syanor-ink md:text-h2">
            Une préparation qui change tout.
          </h2>
          <div className="mx-auto mt-5 w-24 gold-divider" aria-hidden="true" />
          <p className="mt-5 font-inter leading-relaxed text-syanor-ink/70">
            Un voyage spirituel se vit pleinement lorsqu&apos;il est bien préparé.
            Notre accompagnement pédagogique vous aide à comprendre le sens et le
            déroulement de chaque étape, à préparer les rites et à voyager en
            confiance.
          </p>
          <p className="mt-5 font-inter leading-relaxed text-syanor-ink/70">
            Avant, pendant et après le séjour, nous restons à vos côtés : formation,
            supports pratiques, accompagnement sur place et suivi attentif.
          </p>
        </div>
      </Section>

      <Section
        variant="champagne"
        eyebrow="Nos piliers d'accompagnement"
        title="Tout ce dont vous avez besoin pour partir serein"
      >
        <FeatureGrid features={pillars} columns={3} />
      </Section>

      <Section
        variant="ivory"
        eyebrow="Votre parcours"
        title="Un cheminement clair, étape par étape"
      >
        <ProcessSteps steps={journey} />
      </Section>

      <Section
        variant="emerald"
        eyebrow="Pédagogie & sérénité"
        title="Un accompagnement humain et structuré"
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { title: "Approche pédagogique", desc: "Des explications claires, sans jargon.", icon: "book" },
            { title: "Présence attentive", desc: "Un interlocuteur disponible et bienveillant.", icon: "hand-heart" },
            { title: "Sérénité", desc: "Vous vous concentrez sur l'essentiel.", icon: "crescent" },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="card-emerald flex h-full items-start gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-syanor-gold/15 text-syanor-gold">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-playfair text-base text-syanor-ivory">{f.title}</h3>
                  <p className="mt-1 text-sm text-syanor-champagne/80">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FaqSection
        items={[
          {
            question: "La formation est-elle réservée à un programme particulier ?",
            answer:
              "Non. Notre accompagnement s'adresse à tous nos voyageurs spirituels (Omra, Hajj, Omra Plus, Ramadan) et s'adapte à votre formule.",
          },
          {
            question: "Quand débute la préparation ?",
            answer:
              "La préparation commence avant le départ, se poursuit pendant les rites et se prolonge par un suivi après le retour.",
          },
          {
            question: "Recevrai-je des supports pratiques ?",
            answer:
              "Oui, nous fournissons des guides et repères pratiques pour vous accompagner avant et pendant le séjour.",
          },
          {
            question: "L'accompagnement est-il assuré sur place ?",
            answer:
              "Oui, selon la formule, un accompagnement est assuré sur place, en plus de la préparation avant le départ.",
          },
        ]}
      />

      <CTASection
        title="Préparez votre voyage spirituel avec confiance."
        body="Bénéficiez d'une formation et d'un accompagnement complets, du premier échange jusqu'au retour."
        ctaLabel="Être accompagné"
        ctaHref={quoteHref}
        secondary={{ label: "Découvrir Omra & Hajj", href: "/omra-hajj" }}
      />

      <StickyMobileCTA label="Être accompagné" href={quoteHref} />
    </SiteLayout>
  );
}
