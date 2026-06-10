import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    num: "01",
    title: "Prise de contact",
    desc: "Vous nous contactez par formulaire, WhatsApp ou téléphone. Nous répondons sous 24h avec une première proposition.",
    icon: "💬",
  },
  {
    num: "02",
    title: "Choix de votre formule",
    desc: "Essentiel, Premium ou VIP — nous vous guidons vers la formule la mieux adaptée à votre budget et vos attentes.",
    icon: "⭐",
  },
  {
    num: "03",
    title: "Devis personnalisé",
    desc: "Nous préparons un devis détaillé avec vol, hébergement, transferts et accompagnement selon vos dates.",
    icon: "📋",
  },
  {
    num: "04",
    title: "Inscription & documents",
    desc: "Vous confirmez votre place. Nous vous accompagnons pour les documents nécessaires : passeport, vaccinations, visa.",
    icon: "📄",
  },
  {
    num: "05",
    title: "Préparation spirituelle",
    desc: "Formation pré-départ sur les rites, les lieux et les pratiques. Guides, supports et séances de préparation.",
    icon: "🕌",
  },
  {
    num: "06",
    title: "Départ & vol",
    desc: "Retrouvez votre groupe à l'aéroport. Nous vous accompagnons dès l'enregistrement jusqu'à l'embarquement.",
    icon: "✈️",
  },
  {
    num: "07",
    title: "Séjour à Médine",
    desc: "Arrivée à Médine, installation à l'hôtel sélectionné. Prières à la Mosquée du Prophète et Ziyarat accompagnée.",
    icon: "🌿",
  },
  {
    num: "08",
    title: "Omra à Makkah",
    desc: "Transfert vers Makkah, mise en état d'ihrâm. Accomplissement de la Omra : tawaf, sa'y et accompagnement spirituel.",
    icon: "🕋",
  },
  {
    num: "09",
    title: "Retour & suivi",
    desc: "Vol retour depuis Djeddah. Debriefing et suivi post-voyage. Nous restons disponibles après votre retour.",
    icon: "🏡",
  },
];

export default function OmraStepTimeline() {
  return (
    <section className="section-pad bg-syanor-emerald">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="eyebrow mb-3 text-syanor-gold-soft">Votre Omra de A à Z</p>
          <h2 className="font-playfair text-3xl leading-tight text-syanor-ivory md:text-h2">
            9 étapes pour un voyage spirituel réussi
          </h2>
          <div className="mx-auto mt-5 w-24 gold-divider" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-xl text-base text-syanor-champagne/80">
            De votre première prise de contact au retour chez vous, SYANOR VOYAGES vous accompagne à chaque étape avec précision et bienveillance.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 60}>
              <div
                className={cn(
                  "relative rounded-2xl border border-syanor-gold/20 bg-syanor-royal/60 p-6 transition-all duration-300 hover:border-syanor-gold/40 hover:bg-syanor-royal/80",
                  i === 7 && "md:col-span-2 lg:col-span-1"
                )}
              >
                {/* Step number badge */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-syanor-gold/15 font-playfair text-sm font-bold text-syanor-gold">
                    {step.num}
                  </span>
                  <span className="text-2xl" aria-hidden="true">
                    {step.icon}
                  </span>
                </div>

                <h3 className="font-playfair text-lg text-syanor-ivory">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-syanor-champagne/75">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a href="/contact#quote" className="btn-primary">
            Commencer mon Omra
          </a>
          <p className="mt-4 text-sm text-syanor-champagne/55">
            Réponse garantie sous 24h · Accompagnement du premier contact au retour
          </p>
        </div>
      </div>
    </section>
  );
}
