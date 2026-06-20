import Link from "@/components/Link";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

interface ServiceBlock {
  id?: string;
  title: string;
  icon: string;
  desc: string;
  points: string[];
  href: string;
  image: string;
  badge: string;
  overlayTint: string;
  floating?: boolean;
}

const blocks: ServiceBlock[] = [
  {
    title: "Billets Avion",
    icon: "airplane",
    desc: "Vols internationaux, itinéraires optimisés et assistance complète, de la réservation au départ.",
    points: ["Vols internationaux", "Aller simple / aller-retour", "Multi-destinations", "Suivi avant départ"],
    href: "/agence/services/billets-avion",
    image: "/services/billets-avion.png",
    badge: "Vols internationaux",
    overlayTint: "rgba(0,0,0,0)",
    floating: true,
  },
  {
    title: "Billets Bateau / Ferry",
    icon: "anchor",
    desc: "Traversées ferry organisées avec conseils sur les ports et horaires, et option véhicule lorsque cela s'applique.",
    points: ["Traversées ferry", "Aller simple / aller-retour", "Conseils ports & horaires", "Option véhicule"],
    href: "/agence/services/billets-bateau",
    image: "/services/billets-bateau.png",
    badge: "Ferry & traversée",
    overlayTint: "rgba(0,0,0,0)",
    floating: true,
  },
  {
    title: "Voyages Organisés",
    icon: "route",
    desc: "Des séjours pensés dans le moindre détail, avec un programme structuré et un accompagnement dédié.",
    points: ["Voyages en groupe", "Programmes culturels", "Transferts & hôtels", "Accompagnement"],
    href: "/agence/voyages-organises",
    image: "/services/sur-mesure/voyages-organises.png",
    badge: "Circuit guidé",
    overlayTint: "rgba(0,0,0,0)",
    floating: true,
  },
  {
    title: "Séjours Sur Mesure",
    icon: "sliders",
    desc: "Votre voyage conçu autour de vos dates, votre budget, votre confort et vos envies.",
    points: ["Composition libre", "Transport au choix", "Hôtel & confort", "Assistance dédiée"],
    href: "/agence/sejours-sur-mesure",
    image: "/services/sur-mesure/sejour-sur-mesure.png",
    badge: "Sur mesure",
    overlayTint: "rgba(0,0,0,0)",
    floating: true,
  },
];

const logistique = [
  { title: "Hôtels sélectionnés",       desc: "Établissements choisis selon votre confort et votre destination.", icon: "diamond"    },
  { title: "Transferts organisés",       desc: "Transferts aéroport, port et internes assurés et coordonnés.",     icon: "route"      },
  { title: "Assistance visas Schengen",  desc: "Conseils et accompagnement pour visa Europe, USA, Canada et plus.", icon: "book"       },
  { title: "Accompagnement & assistance",desc: "Un interlocuteur dédié avant, pendant et après le voyage.",        icon: "hand-heart" },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3 transition-transform duration-200 group-hover/cta:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function AgenceServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        visual="services"
        eyebrow="Nos services"
        title="Un univers de voyage complet, pensé pour votre sérénité."
        subtitle="De la réservation d'un simple billet à l'organisation complète d'un séjour premium, SYANOR VOYAGES couvre l'ensemble de vos besoins de voyage."
        crumbs={[{ label: "Accueil", href: "/agence" }, { label: "Services" }]}
        primaryCta={{ label: "Demander un devis", href: "/agence/contact#quote" }}
        secondaryCta={{ label: "Voir les offres", href: "/agence/offres" }}
      />

      <Section
        eyebrow="Domaines d'expertise"
        title="Tous nos services en un seul endroit"
        subtitle="Chaque service dispose d'une page dédiée avec son fonctionnement, ses inclusions et ses offres."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 60}>
              <article
                id={b.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-[22px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(2,43,36,0.14)] scroll-mt-28"
                style={{
                  border: "1px solid rgba(201,162,74,0.18)",
                  boxShadow: "0 2px 16px rgba(6,63,51,0.07)",
                }}
              >
                <div
                  className="relative h-44 shrink-0 overflow-hidden"
                  style={b.floating ? { background: "linear-gradient(145deg, #F5EFE0 0%, #EDE3CC 60%, #E3D5B5 100%)" } : undefined}
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06] ${b.floating ? "object-contain object-center" : "object-cover"}`}
                    style={b.floating ? { filter: "drop-shadow(0 18px 36px rgba(6,63,51,0.38)) drop-shadow(0 6px 12px rgba(0,0,0,0.22))" } : undefined}
                  />
                  {!b.floating && (
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(170deg, transparent 20%, ${b.overlayTint} 100%)` }}
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl text-syanor-gold backdrop-blur-sm"
                    style={{ background: "rgba(2,43,36,0.58)", border: "1px solid rgba(201,162,74,0.30)" }}
                    aria-hidden="true"
                  >
                    <Icon name={b.icon} className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-3.5 left-4">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-syanor-gold/90 backdrop-blur-sm"
                      style={{ background: "rgba(2,43,36,0.62)", border: "1px solid rgba(201,162,74,0.30)" }}
                    >
                      {b.badge}
                    </span>
                  </div>
                  <div
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: "linear-gradient(to right, rgba(201,162,74,0.80), rgba(201,162,74,0.10))" }}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className="flex flex-1 flex-col p-6"
                  style={{ background: "linear-gradient(160deg, #FDFAF4 0%, #FFF9ED 100%)" }}
                >
                  <h3 className="font-playfair text-xl font-semibold leading-snug text-syanor-ink transition-colors duration-200 group-hover:text-syanor-emerald">
                    {b.title}
                  </h3>
                  <div
                    className="my-3 h-px rounded-full transition-all duration-300 group-hover:w-12"
                    style={{ width: "2rem", background: "linear-gradient(to right, rgba(201,162,74,0.55), transparent)" }}
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-syanor-ink/65">{b.desc}</p>
                  <ul className="mt-4 flex-1 space-y-1.5 text-sm text-syanor-ink/70">
                    {b.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5">
                        <span className="shrink-0 text-[0.65rem] text-syanor-gold" aria-hidden="true">✦</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={b.href}
                    className="group/cta mt-6 inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-[0.76rem] font-semibold text-syanor-gold transition-all duration-200 hover:bg-syanor-emerald hover:text-syanor-ivory hover:shadow-[0_4px_20px_rgba(6,63,51,0.22)]"
                    style={{ background: "rgba(201,162,74,0.09)", border: "1px solid rgba(201,162,74,0.28)" }}
                  >
                    Découvrir
                    <ArrowIcon />
                  </Link>
                </div>
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
              <div
                className="group flex h-full flex-col rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(6,63,51,0.10)]"
                style={{ background: "linear-gradient(160deg, #FDFAF4 0%, #FFF9ED 100%)", border: "1px solid rgba(201,162,74,0.16)" }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-syanor-gold transition-all duration-300 group-hover:shadow-[0_4px_20px_rgba(201,162,74,0.20)]"
                  style={{ background: "linear-gradient(145deg, #063F33 0%, #022B24 100%)" }}
                >
                  <Icon name={f.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-playfair text-base font-semibold text-syanor-ink">{f.title}</h3>
                <div
                  className="my-2 h-px rounded-full transition-all duration-300 group-hover:w-10"
                  style={{ width: "1.5rem", background: "linear-gradient(to right, rgba(201,162,74,0.45), transparent)" }}
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-syanor-ink/60">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Un projet de voyage en tête ?"
        body="Décrivez-nous votre besoin et recevez une proposition claire et personnalisée."
        ctaLabel="Demander un devis"
        ctaHref="/agence/contact#quote"
        secondary={{ label: "Parcourir les offres", href: "/agence/offres" }}
      />

      <StickyMobileCTA label="Demander un devis" href="/agence/contact#quote" />
    </SiteLayout>
  );
}
