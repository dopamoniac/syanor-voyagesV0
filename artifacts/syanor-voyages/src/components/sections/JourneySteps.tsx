const STEPS = [
  {
    num: "01",
    label: "Pré-inscription",
    desc: "Décrivez votre voyage : destination, dates, budget et préférences. Votre dossier est ouvert.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "Validation",
    desc: "Un conseiller dédié confirme les disponibilités et vous propose un programme personnalisé.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Billets & Documents",
    desc: "Réservation des billets, constitution du dossier visa et traitement des formalités.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    label: "Hébergement",
    desc: "Sélection de vos hôtels, organisation des transferts et finalisation du programme.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "05",
    label: "Accompagnement",
    desc: "Suivi WhatsApp avant le départ, assistance pendant le voyage et suivi au retour.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function JourneySteps() {
  return (
    <section className="section-pad overflow-hidden" style={{ background: "#F8F4EE" }} id="processus">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="mb-14 md:mb-18">
          <p className="text-[0.52rem] font-bold uppercase tracking-[0.30em] mb-4" style={{ color: "#D8B56A" }}>
            Notre approche
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-playfair font-light leading-[1.04]"
              style={{ color: "#1A1712", fontSize: "clamp(1.9rem, 4vw, 3.0rem)" }}
            >
              Votre voyage, étape par étape.
            </h2>
            <p className="text-sm leading-relaxed max-w-sm md:text-right" style={{ color: "rgba(26,23,18,0.52)" }}>
              De votre première demande à votre retour, un conseiller dédié
              vous accompagne à chaque étape.
            </p>
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-12">
            <div
              className="absolute top-7 left-0 right-0 h-px"
              aria-hidden="true"
              style={{ background: "linear-gradient(to right, transparent, #D8B56A 15%, #D8B56A 85%, transparent)", opacity: 0.25 }}
            />
            <div className="grid grid-cols-5 gap-6">
              {STEPS.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center group">
                  {/* Icon circle */}
                  <div
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full mb-6 transition-all duration-300 group-hover:shadow-[0_8px_24px_rgba(216,181,106,0.25)]"
                    style={{
                      background: "#063F33",
                      border: "1px solid rgba(216,181,106,0.30)",
                      color: "#D8B56A",
                    }}
                  >
                    {step.icon}
                  </div>
                  <p
                    className="text-[0.48rem] font-mono font-bold tracking-[0.28em] mb-2"
                    style={{ color: "rgba(216,181,106,0.50)" }}
                  >
                    {step.num}
                  </p>
                  <p className="text-[0.82rem] font-semibold mb-2" style={{ color: "#1A1712" }}>
                    {step.label}
                  </p>
                  <p className="text-[0.67rem] leading-relaxed" style={{ color: "rgba(26,23,18,0.50)" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex gap-5">
              {/* Left: line + circle */}
              <div className="flex flex-col items-center">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: "#063F33",
                    border: "1px solid rgba(216,181,106,0.30)",
                    color: "#D8B56A",
                  }}
                >
                  {step.icon}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="mt-2 w-px flex-1 min-h-[40px]"
                    aria-hidden="true"
                    style={{ background: "rgba(216,181,106,0.18)" }}
                  />
                )}
              </div>
              {/* Right: content */}
              <div className="pb-10 pt-1.5">
                <p
                  className="text-[0.48rem] font-mono font-bold tracking-[0.26em] mb-1"
                  style={{ color: "rgba(216,181,106,0.50)" }}
                >
                  {step.num}
                </p>
                <p className="text-[0.85rem] font-semibold mb-1.5" style={{ color: "#1A1712" }}>
                  {step.label}
                </p>
                <p className="text-[0.72rem] leading-relaxed" style={{ color: "rgba(26,23,18,0.52)" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
