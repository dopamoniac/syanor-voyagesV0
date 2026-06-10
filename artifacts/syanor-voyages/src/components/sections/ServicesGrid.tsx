import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

interface ServiceGroup {
  category: string;
  groupIcon: string;
  services: ServiceItem[];
}

const GROUPS: ServiceGroup[] = [
  {
    category: "Billets",
    groupIcon: "airplane",
    services: [
      { icon: "airplane", title: "Billets Avion", desc: "Vols internationaux, réservation optimisée, assistance complète", href: "/services/billets-avion" },
      { icon: "anchor", title: "Billets Bateau", desc: "Ferry & traversées, avec ou sans véhicule, tous ports", href: "/services/billets-bateau" },
      { icon: "users", title: "Billets Groupes", desc: "Tarifs groupes, coordination collective, départs multiples", href: "/contact?service=Billet+avion#quote" },
    ],
  },
  {
    category: "Voyages Religieux",
    groupIcon: "crescent",
    services: [
      { icon: "crescent", title: "Omra", desc: "Petit pèlerinage toute l'année, rites et accompagnement complet", href: "/omra-hajj" },
      { icon: "crescent", title: "Omra Plus", desc: "Séjour prolongé 21–34 nuits, programme approfondi", href: "/omra-hajj" },
      { icon: "crescent", title: "Hajj", desc: "Grand pèlerinage annuel, contingent agréé", href: "/omra-hajj" },
      { icon: "sparkle", title: "Omra Ramadan", desc: "Le mois sacré en Terres Saintes, atmosphère unique", href: "/omra-hajj" },
    ],
  },
  {
    category: "Sur Mesure",
    groupIcon: "compass",
    services: [
      { icon: "route", title: "Voyages Organisés", desc: "Circuits structurés avec programme et accompagnement dédié", href: "/voyages-organises" },
      { icon: "compass", title: "Séjour sur Mesure", desc: "Vos dates, votre budget, votre confort, vos envies", href: "/sejours-sur-mesure" },
      { icon: "diamond", title: "Pack Premium / VIP", desc: "Transferts privés, hôtels 5★, assistance personnalisée", href: "/services#packs" },
      { icon: "star", title: "Voyage de Noces", desc: "Lune de miel sur mesure, destinations de rêve", href: "/contact?service=S%C3%A9jour+sur+mesure#quote" },
    ],
  },
  {
    category: "Assistance",
    groupIcon: "shield",
    services: [
      { icon: "clipboard", title: "Assistance Visa", desc: "Dossier complet, démarches simplifiées, suivi jusqu'à obtention", href: "/contact?service=Visa#quote" },
      { icon: "book-open", title: "Formation Omra", desc: "Préparation spirituelle pré-départ, rites et pratiques", href: "/omra-hajj#formation" },
      { icon: "shield", title: "Assurance Voyage", desc: "Couverture internationale premium, assistance 24h/24", href: "/contact#quote" },
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-pad bg-syanor-pearl">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Nos services"
          title="Tout ce dont vous avez besoin pour voyager."
          subtitle="14 services organisés en 4 pôles — billets, voyages spirituels, sur mesure et assistance — pour couvrir chaque projet de voyage."
        />

        <div className="mt-12 space-y-10">
          {GROUPS.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 80}>
              <div>
                {/* Category label */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold" aria-hidden="true">
                    <Icon name={group.groupIcon} className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="font-playfair text-lg text-syanor-ink">{group.category}</h3>
                  <div className="flex-1 border-t border-syanor-gold/20" aria-hidden="true" />
                </div>

                {/* Service cards */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {group.services.map((svc, si) => (
                    <Reveal key={svc.title} delay={gi * 80 + si * 50}>
                      <Link
                        href={svc.href}
                        className="group flex flex-col rounded-2xl border border-syanor-gold/15 bg-white p-5 transition-all duration-250 hover:-translate-y-0.5 hover:border-syanor-gold/35 hover:shadow-card"
                      >
                        <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald transition-colors duration-200 group-hover:bg-syanor-emerald group-hover:text-syanor-gold" aria-hidden="true">
                          <Icon name={svc.icon} className="h-4.5 w-4.5" />
                        </span>
                        <p className="font-playfair text-sm font-medium text-syanor-ink transition-colors group-hover:text-syanor-emerald">
                          {svc.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-syanor-ink/55">{svc.desc}</p>
                        <span className="mt-3 text-[0.65rem] font-semibold text-syanor-gold transition-colors group-hover:text-syanor-emerald">
                          En savoir plus →
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
