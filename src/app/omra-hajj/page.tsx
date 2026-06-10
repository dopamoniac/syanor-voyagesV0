import type { Metadata } from "next";
import Link from "next/link";
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
import { getOffersByCategory } from "@/data/offers";
import { quoteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Omra & Hajj Premium | SYANOR VOYAGES",
  description:
    "Préparez votre voyage spirituel avec accompagnement, formation, hôtels, transferts, visas et ziyarat. Omra, Hajj, Omra Plus et formules Ramadan.",
  alternates: { canonical: "/omra-hajj" },
};

const pillars = [
  { title: "Omra", desc: "Classique, premium ou sur mesure, toute l'année.", icon: "crescent", href: "/omra-hajj/omra" },
  { title: "Hajj", desc: "Organisation complète et assistance administrative.", icon: "compass", href: "/omra-hajj/hajj" },
  { title: "Omra Plus", desc: "Expérience premium / VIP et formation.", icon: "spark", href: "/omra-hajj/omra-plus" },
  { title: "Ramadan", desc: "Vivre le Ramadan aux lieux saints.", icon: "star", href: "/omra-hajj/ramadan" },
];

const includes = [
  { title: "Préparation des rites", desc: "Comprendre et accomplir sereinement chaque étape.", icon: "book" },
  { title: "Hôtels sélectionnés", desc: "À proximité des mosquées selon la formule.", icon: "diamond" },
  { title: "Transferts organisés", desc: "Aéroport, Makkah, Madinah et internes.", icon: "route" },
  { title: "Assistance visas", desc: "Conseils et accompagnement administratif.", icon: "shield" },
  { title: "Ziyarat", desc: "Visite des lieux historiques avec accompagnement.", icon: "map" },
  { title: "Accompagnement", desc: "Une présence avant, pendant et après.", icon: "hand-heart" },
];

const quoteHref = quoteUrl({ service: "Omra" });

export default function OmraHajjPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Voyages spirituels"
        title="Omra & Hajj : un voyage spirituel organisé avec excellence."
        subtitle="De la préparation des rites à l'accompagnement sur place, nous prenons soin de chaque détail pour que vous puissiez vous concentrer sur l'essentiel."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Omra & Hajj" }]}
        primaryCta={{ label: "Préparer mon voyage", href: quoteHref }}
        secondaryCta={{ label: "La formation", href: "/formation" }}
      />

      <Section
        eyebrow="Nos programmes spirituels"
        title="Choisissez le programme qui vous correspond"
        subtitle="Chaque programme dispose de sa page dédiée, avec son fonctionnement, ses inclusions et ses départs."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 60}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-playfair text-h3 text-syanor-ink group-hover:text-syanor-emerald">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-syanor-ink/70">{p.desc}</p>
                <span className="mt-4 text-sm font-medium text-syanor-gold">Découvrir →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="ziyarat"
        variant="champagne"
        eyebrow="Ce que nous prenons en charge"
        title="Un accompagnement spirituel complet"
        subtitle="Hôtels, transferts, visas, Ziyarat et préparation : une organisation pensée dans le moindre détail."
      >
        <FeatureGrid features={includes} columns={3} />
      </Section>

      <RelatedOffers offers={getOffersByCategory(["Omra", "Omra Plus", "Hajj", "Ramadan"])} />

      <FaqSection
        items={[
          {
            question: "Quelle est la différence entre Omra et Hajj ?",
            answer:
              "Le Hajj est le pèlerinage majeur, accompli à une période précise et soumis à des quotas officiels. L'Omra peut être accomplie tout au long de l'année. Nous accompagnons les deux avec des programmes adaptés.",
          },
          {
            question: "Proposez-vous des packs famille, groupe ou VIP ?",
            answer:
              "Oui. Nous composons des formules adaptées aux familles, aux groupes et aux voyageurs recherchant une expérience premium ou VIP.",
          },
          {
            question: "Les hôtels sont-ils proches des lieux saints ?",
            answer:
              "Selon la formule, nous sélectionnons des hôtels à proximité du Haram à Makkah et de la Mosquée du Prophète à Madinah.",
          },
          {
            question: "Aidez-vous pour le visa ?",
            answer:
              "Oui, nous vous conseillons et vous accompagnons dans les démarches administratives et de visa liées à votre voyage.",
          },
        ]}
      />

      <CTASection
        title="Préparez votre voyage spirituel avec sérénité."
        body="Indiquez-nous votre programme souhaité, vos dates et votre confort : nous construisons une proposition adaptée."
        ctaLabel="Demander un devis"
        ctaHref={quoteHref}
        secondary={{ label: "Découvrir la formation", href: "/formation" }}
      />

      <StickyMobileCTA label="Préparer mon voyage" href={quoteHref} />
    </SiteLayout>
  );
}
