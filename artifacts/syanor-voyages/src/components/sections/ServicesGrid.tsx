import Link from "@/components/Link";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const GROUPS = [
  {
    category: "Billets",
    eyebrow: "✈️ ⚓",
    services: [
      { icon: "✈️", title: "Billets Avion", desc: "Vols internationaux, réservation optimisée, assistance complète", href: "/services/billets-avion" },
      { icon: "⚓", title: "Billets Bateau", desc: "Ferry & traversées, avec ou sans véhicule, tous ports", href: "/services/billets-bateau" },
      { icon: "👥", title: "Billets Groupes", desc: "Tarifs groupes, coordination collective, départs multiples", href: "/contact?service=Billet+avion#quote" },
    ],
  },
  {
    category: "Voyages Religieux",
    eyebrow: "🕌 🕋",
    services: [
      { icon: "🕌", title: "Omra", desc: "Petit pèlerinage toute l'année, rites et accompagnement complet", href: "/omra-hajj" },
      { icon: "🌙", title: "Omra Plus", desc: "Séjour prolongé 21–34 nuits, programme approfondi", href: "/omra-hajj" },
      { icon: "🕋", title: "Hajj", desc: "Grand pèlerinage annuel, contingent agréé", href: "/omra-hajj" },
      { icon: "✨", title: "Omra Ramadan", desc: "Le mois sacré en Terres Saintes, atmosphère unique", href: "/omra-hajj" },
    ],
  },
  {
    category: "Sur Mesure",
    eyebrow: "⭐ 🗺️",
    services: [
      { icon: "🗺️", title: "Voyages Organisés", desc: "Circuits structurés avec programme et accompagnement dédié", href: "/voyages-organises" },
      { icon: "🎯", title: "Séjour sur Mesure", desc: "Vos dates, votre budget, votre confort, vos envies", href: "/sejours-sur-mesure" },
      { icon: "💎", title: "Pack Premium / VIP", desc: "Transferts privés, hôtels 5★, assistance personnalisée", href: "/services#packs" },
      { icon: "💍", title: "Voyage de Noces", desc: "Lune de miel sur mesure, destinations de rêve", href: "/contact?service=S%C3%A9jour+sur+mesure#quote" },
    ],
  },
  {
    category: "Assistance",
    eyebrow: "🛡️ 🛂",
    services: [
      { icon: "🛂", title: "Assistance Visa", desc: "Dossier complet, démarches simplifiées, suivi jusqu'à obtention", href: "/contact?service=Visa#quote" },
      { icon: "📚", title: "Formation Omra", desc: "Préparation spirituelle pré-départ, rites et pratiques", href: "/omra-hajj#formation" },
      { icon: "🛡️", title: "Assurance Voyage", desc: "Couverture internationale premium, assistance 24h/24", href: "/contact#quote" },
    ],
  },
] as const;

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
                  <span className="text-lg" aria-hidden="true">{group.eyebrow}</span>
                  <h3 className="font-playfair text-lg text-syanor-ink">{group.category}</h3>
                  <div className="flex-1 border-t border-syanor-gold/20" />
                </div>

                {/* Service cards */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {(group.services as readonly { icon: string; title: string; desc: string; href: string }[]).map((svc, si) => (
                    <Reveal key={svc.title} delay={gi * 80 + si * 50}>
                      <Link
                        href={svc.href}
                        className="group flex flex-col rounded-2xl border border-syanor-gold/15 bg-white p-5 transition-all duration-250 hover:-translate-y-0.5 hover:border-syanor-gold/35 hover:shadow-card"
                      >
                        <span className="mb-3 text-2xl" aria-hidden="true">{svc.icon}</span>
                        <p className="font-playfair text-sm font-medium text-syanor-ink group-hover:text-syanor-emerald transition-colors">
                          {svc.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-syanor-ink/55">{svc.desc}</p>
                        <span className="mt-3 text-[0.65rem] font-semibold text-syanor-gold group-hover:text-syanor-emerald transition-colors">
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
