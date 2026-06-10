
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const items = [
  { title: "Accompagnement humain", desc: "Une équipe à votre écoute.", icon: "hand-heart" },
  { title: "Organisation complète", desc: "Chaque détail est pensé.", icon: "route" },
  { title: "Offres personnalisées", desc: "Adaptées à vos envies.", icon: "sliders" },
  { title: "Expertise voyage", desc: "Conseils fiables et précis.", icon: "compass" },
  { title: "Service réactif", desc: "Des réponses rapides.", icon: "clock" },
  { title: "Expérience premium", desc: "Une exigence constante.", icon: "diamond" },
  { title: "Clarté des démarches", desc: "Tout est transparent.", icon: "check" },
  { title: "Sérénité départ → retour", desc: "Voyagez l'esprit léger.", icon: "shield" },
  { title: "Départs & offres lisibles", desc: "Des informations claires.", icon: "map" },
  { title: "Assistance complète", desc: "Avant, pendant et après.", icon: "phone" },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-syanor-champagne/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader eyebrow="Nos engagements" title="Pourquoi choisir SYANOR VOYAGES ?" />

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 5) * 60}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-playfair text-sm leading-snug text-syanor-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-syanor-ink/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
