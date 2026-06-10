import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Nos Services | SYANOR VOYAGES",
  description:
    "Billets avion et bateau, Omra & Hajj, Omra Plus & Ramadan, voyages organisés, séjours sur mesure, packs premium, hôtels, transferts et visas : découvrez tous les services SYANOR VOYAGES.",
  alternates: { canonical: "/services" },
};

interface ServiceBlock {
  id?: string;
  title: string;
  icon: string;
  desc: string;
  points: string[];
  href: string;
}

const blocks: ServiceBlock[] = [
  {
    title: "Billets Avion",
    icon: "airplane",
    desc: "Vols internationaux, itinéraires optimisés et assistance complète, de la réservation au départ.",
    points: ["Vols internationaux", "Aller simple / aller-retour", "Multi-destinations", "Suivi avant départ"],
    href: "/services/billets-avion",
  },
  {
    title: "Billets Bateau / Ferry",
    icon: "anchor",
    desc: "Traversées ferry organisées avec conseils sur les ports et horaires, et option véhicule lorsque cela s'applique.",
    points: ["Traversées ferry", "Aller simple / aller-retour", "Conseils ports & horaires", "Option véhicule"],
    href: "/services/billets-bateau",
  },
  {
    title: "Omra & Hajj",
    icon: "crescent",
    desc: "Voyages spirituels organisés avec excellence : rites, hôtels sélectionnés, Ziyarat et accompagnement.",
    points: ["Omra & Hajj", "Préparation des rites", "Hôtels & transferts", "Accompagnement"],
    href: "/omra-hajj",
  },
  {
    id: "packs",
    title: "Omra Plus & Ramadan",
    icon: "spark",
    desc: "Programmes premium et formules Ramadan pour vivre les lieux saints dans un cadre d'exception.",
    points: ["Omra Plus premium / VIP", "Formules Ramadan", "Hôtels haut de gamme", "Formation avant départ"],
    href: "/omra-hajj/omra-plus",
  },
  {
    title: "Voyages Organisés",
    icon: "route",
    desc: "Des séjours pensés dans le moindre détail, avec un programme structuré et un accompagnement dédié.",
    points: ["Voyages en groupe", "Programmes culturels", "Transferts & hôtels", "Accompagnement"],
    href: "/voyages-organises",
  },
  {
    title: "Séjours Sur Mesure",
    icon: "sliders",
    desc: "Votre voyage conçu autour de vos dates, votre budget, votre confort et vos envies.",
    points: ["Composition libre", "Transport au choix", "Hôtel & confort", "Assistance dédiée"],
    href: "/sejours-sur-mesure",
  },
];

const logistique = [
  { title: "Hôtels sélectionnés", desc: "Établissements choisis selon votre confort et votre destination.", icon: "diamond" },
  { title: "Transferts organisés", desc: "Transferts aéroport, port et internes assurés et coordonnés.", icon: "route" },
  { title: "Assistance visas", desc: "Conseils et accompagnement sur les démarches administratives.", icon: "book" },
  { title: "Accompagnement & assistance", desc: "Un interlocuteur dédié avant, pendant et après le voyage.", icon: "hand-heart" },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nos services"
        title="Un univers de voyage complet, pensé pour votre sérénité."
        subtitle="De la réservation d'un simple billet à l'organisation complète d'un séjour premium, SYANOR VOYAGES couvre l'ensemble de vos besoins de voyage."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
        primaryCta={{ label: "Demander un devis", href: "/contact#quote" }}
        secondaryCta={{ label: "Voir les offres", href: "/offres" }}
      />

      <Section
        eyebrow="Domaines d'expertise"
        title="Tous nos services en un seul endroit"
        subtitle="Chaque service dispose d'une page dédiée avec son fonctionnement, ses inclusions et ses offres."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 60}>
              <article
                id={b.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover scroll-mt-28"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-playfair text-h3 text-syanor-ink">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-syanor-ink/70">{b.desc}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-syanor-ink/75">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="text-syanor-gold" aria-hidden="true">✦</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={b.href}
                  className="mt-6 self-start text-sm font-medium text-syanor-gold underline-offset-4 transition hover:underline"
                >
                  En savoir plus →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="logistique"
        variant="champagne"
        eyebrow="Logistique & assistance"
        title="Hôtels, transferts, visas et accompagnement"
        subtitle="Au-delà des billets et des séjours, nous prenons en charge la logistique complète de votre voyage."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {logistique.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-playfair text-base text-syanor-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-syanor-ink/65">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Un projet de voyage en tête ?"
        body="Décrivez-nous votre besoin et recevez une proposition claire et personnalisée."
        ctaLabel="Demander un devis"
        ctaHref="/contact#quote"
        secondary={{ label: "Parcourir les offres", href: "/offres" }}
      />

      <StickyMobileCTA label="Demander un devis" href="/contact#quote" />
    </SiteLayout>
  );
}
