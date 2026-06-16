import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const items = [
  {
    title: "Conseiller dédié",
    desc: "Un interlocuteur unique, joignable par téléphone ou WhatsApp. Vous avez toujours quelqu'un à qui parler.",
    icon: "hand-heart",
    stat: "1 conseiller",
    statLabel: "par dossier",
  },
  {
    title: "Voyages & billets sur mesure",
    desc: "Avion, bateau, séjour, visa, hôtel : nous gérons l'ensemble de votre projet voyage, de la recherche à la confirmation.",
    icon: "sliders",
    stat: "Tout inclus",
    statLabel: "en un dossier",
  },
  {
    title: "Hôtels & prestations sélectionnés",
    desc: "Chaque hébergement est évalué pour son emplacement, sa qualité et son rapport confort/prix — aucune surprise à l'arrivée.",
    icon: "building",
    stat: "4 & 5 étoiles",
    statLabel: "disponibles",
  },
  {
    title: "Assistance documents",
    desc: "Visa, passeport, assurance, formalités sanitaires : nous traitons chaque démarche pour que vous partiez l'esprit libre.",
    icon: "clipboard",
    stat: "Visa & docs",
    statLabel: "pris en charge",
  },
  {
    title: "Omra & Hajj organisés",
    desc: "Un univers dédié aux voyages spirituels — rites, formation, hôtels proches du Haram, Ziyarat et accompagnement complet.",
    icon: "crescent",
    stat: "2026 & 2027",
    statLabel: "Omra & Hajj",
  },
  {
    title: "Support 24/7",
    desc: "Avant le départ, pendant le voyage et au retour : un numéro direct et un suivi WhatsApp pour toute question ou imprévu.",
    icon: "phone",
    stat: "24 / 7",
    statLabel: "Disponibilité",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-syanor-champagne/25">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Nos engagements"
          title="Pourquoi choisir SYANOR VOYAGES ?"
          subtitle="Une agence premium à taille humaine. Six engagements concrets qui font la différence — parce que bien voyager, c'est aussi être bien accompagné."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="group flex h-full flex-col rounded-2xl border border-syanor-gold/18 bg-syanor-pearl p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-syanor-gold/35 hover:shadow-card-hover">
                {/* Icon + stat row */}
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-syanor-emerald text-syanor-gold transition-all duration-200 group-hover:shadow-[0_4px_16px_rgba(6,63,51,0.25)]">
                    <Icon name={item.icon} className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="text-right">
                    <p className="font-playfair text-lg font-bold text-syanor-gold leading-none">{item.stat}</p>
                    <p className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-widest text-syanor-ink/35">{item.statLabel}</p>
                  </div>
                </div>

                <h3 className="mt-4 font-playfair text-base font-semibold leading-snug text-syanor-ink">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-syanor-ink/65">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
