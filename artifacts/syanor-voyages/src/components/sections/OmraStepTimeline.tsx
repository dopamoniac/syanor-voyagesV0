import { cn } from "@/lib/utils";
import Link from "@/components/Link";

const steps = [
  {
    num: "01",
    title: "Prise de contact",
    desc: "Formulaire, WhatsApp ou téléphone. Réponse sous 24h.",
    icon: "💬",
  },
  {
    num: "02",
    title: "Choix de formule",
    desc: "Essentiel, Premium ou VIP selon vos attentes.",
    icon: "⭐",
  },
  {
    num: "03",
    title: "Devis personnalisé",
    desc: "Vol, hôtel, transferts et accompagnement selon vos dates.",
    icon: "📋",
  },
  {
    num: "04",
    title: "Inscription & documents",
    desc: "Passeport, vaccinations, visa — nous vous guidons.",
    icon: "📄",
  },
  {
    num: "05",
    title: "Préparation spirituelle",
    desc: "Formation pré-départ : rites, lieux, pratiques.",
    icon: "🕌",
  },
  {
    num: "06",
    title: "Départ & vol",
    desc: "Accompagnement à l'aéroport jusqu'à l'embarquement.",
    icon: "✈️",
  },
  {
    num: "07",
    title: "Séjour à Médine",
    desc: "Mosquée du Prophète ﷺ, Ziyarat et prières guidées.",
    icon: "🌿",
  },
  {
    num: "08",
    title: "Omra à Makkah",
    desc: "Ihrâm, Tawaf, Sa'y — rites accomplis en toute sérénité.",
    icon: "🕋",
  },
  {
    num: "09",
    title: "Retour & suivi",
    desc: "Vol retour, debriefing et accompagnement post-voyage.",
    icon: "🏡",
  },
];

const ROW1 = steps.slice(0, 5);
const ROW2 = steps.slice(5);

function StepNode({
  step,
  align = "center",
}: {
  step: (typeof steps)[0];
  align?: "center";
}) {
  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-syanor-gold/40 bg-syanor-royal text-2xl shadow-md">
        <span aria-hidden="true">{step.icon}</span>
      </div>
      <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-widest text-syanor-gold">
        {step.num}
      </p>
      <p className="mt-1 px-1 font-playfair text-[0.75rem] leading-snug text-syanor-ivory">
        {step.title}
      </p>
      <p className="mt-0.5 hidden px-1 text-[0.58rem] leading-snug text-syanor-champagne/55 lg:block">
        {step.desc}
      </p>
    </div>
  );
}

export default function OmraStepTimeline() {
  return (
    <section className="section-pad overflow-hidden bg-syanor-emerald">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="eyebrow mb-3 text-syanor-gold-soft">Votre Omra de A à Z</p>
          <h2 className="font-playfair text-3xl leading-tight text-syanor-ivory md:text-h2">
            9 étapes pour un voyage spirituel réussi
          </h2>
          <div className="mx-auto mt-5 w-24 gold-divider" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-xl text-base text-syanor-champagne/80">
            De votre première prise de contact au retour chez vous, SYANOR VOYAGES vous accompagne à chaque étape.
          </p>
        </div>

        {/* ── Desktop: snake route map ── */}
        <div className="mt-14 hidden md:block" aria-hidden="false">
          {/* Row 1 → steps 01–05 */}
          <div className="relative flex items-start">
            <div className="absolute top-7 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-syanor-gold/40 to-syanor-gold/60" />
            {ROW1.map((step) => (
              <StepNode key={step.num} step={step} />
            ))}
          </div>

          {/* U-turn connector (right side) */}
          <div className="my-0 flex justify-end pr-[8%]">
            <div className="h-10 w-[4%] rounded-br-3xl border-b-2 border-r-2 border-syanor-gold/40" />
          </div>

          {/* Row 2 → steps 06–09 reversed (06 on far right, 09 on far left) */}
          <div className="relative flex flex-row-reverse items-start">
            <div className="absolute top-7 left-[18%] right-[5%] h-px bg-gradient-to-l from-transparent via-syanor-gold/40 to-syanor-gold/60" />
            {ROW2.map((step) => (
              <StepNode key={step.num} step={step} />
            ))}
            {/* Spacer so row 2 stays right-aligned under rows 1+5 */}
            <div className="flex-1" />
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="mt-10 md:hidden">
          <div className="relative pl-12">
            {/* Vertical line */}
            <div className="absolute left-5 top-5 bottom-5 w-px bg-syanor-gold/25" />

            {steps.map((step, i) => (
              <div
                key={step.num}
                className={cn(
                  "relative mb-6 last:mb-0",
                )}
              >
                {/* Dot */}
                <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full border border-syanor-gold/40 bg-syanor-royal text-lg">
                  <span aria-hidden="true">{step.icon}</span>
                </div>

                {/* Content */}
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-widest text-syanor-gold">
                    {step.num}
                  </p>
                  <p className="mt-0.5 font-playfair text-sm text-syanor-ivory">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-syanor-champagne/70">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link href="/contact#quote" className="btn-primary">
            Commencer mon Omra
          </Link>
          <p className="mt-4 text-sm text-syanor-champagne/55">
            Réponse garantie sous 24h · Accompagnement du premier contact au retour
          </p>
        </div>
      </div>
    </section>
  );
}
