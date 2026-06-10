import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const items = [
  {
    title: "Accompagnement humain",
    desc: "Une équipe disponible avant, pendant et après votre voyage. Vous n'êtes jamais seul face à l'imprévu.",
    icon: "hand-heart",
  },
  {
    title: "Formation avant départ",
    desc: "Séances de préparation spirituelle, guides pratiques et soutien pédagogique pour que chaque rite soit accompli avec sérénité.",
    icon: "book-open",
  },
  {
    title: "Hôtels sélectionnés",
    desc: "Chaque hébergement est évalué pour son emplacement, sa propreté et son rapport confort/prix — aucune surprise à l'arrivée.",
    icon: "building",
  },
  {
    title: "Assistance administrative",
    desc: "Visa, passeport, assurance, documents sanitaires — nous traitons chaque formalité avec rigueur pour que vous partiez l'esprit libre.",
    icon: "clipboard",
  },
  {
    title: "Transferts inclus",
    desc: "Aéroport, hôtel, lieux saints, port d'embarquement : tous vos transferts sont organisés et inclus dans votre formule.",
    icon: "bus",
  },
  {
    title: "Support avant / pendant / après",
    desc: "Numéro direct, WhatsApp, suivi de groupe sur place et debriefing post-voyage. SYANOR reste joignable à chaque étape.",
    icon: "phone",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-syanor-champagne/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Nos engagements"
          title="Pourquoi choisir SYANOR VOYAGES ?"
          subtitle="6 engagements concrets qui font la différence — parce que bien voyager, c'est aussi être bien accompagné."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-syanor-emerald text-syanor-gold">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-playfair text-base leading-snug text-syanor-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-syanor-ink/65">
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
