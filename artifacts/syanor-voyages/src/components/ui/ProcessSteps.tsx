import Reveal from "@/components/ui/Reveal";

export interface Step {
  title: string;
  text?: string;
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <>
      {/* Desktop horizontal */}
      <div className="relative hidden md:block">
        {/* Connector line */}
        <div
          className="absolute left-[10%] right-[10%] top-6 h-px bg-gradient-to-r from-transparent via-syanor-gold/50 to-transparent"
          aria-hidden="true"
        />
        <ol
          className="relative grid gap-6"
          style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0,1fr))` }}
        >
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90}>
              <div className="flex flex-col items-center text-center">
                {/* Step number bubble */}
                <div className="relative">
                  <div className="absolute inset-0 scale-125 rounded-full bg-syanor-gold/12 blur-sm" aria-hidden="true" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-syanor-gold bg-syanor-ivory font-playfair text-lg font-bold text-syanor-emerald shadow-gold-sm">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-playfair text-base leading-snug text-syanor-ink">
                  {step.title}
                </h3>
                {step.text && (
                  <p className="mt-2 text-sm leading-relaxed text-syanor-ink/60">{step.text}</p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Mobile vertical */}
      <ol className="relative space-y-7 pl-7 md:hidden">
        <span
          className="absolute bottom-2 left-[13px] top-2 w-px bg-gradient-to-b from-syanor-gold/50 via-syanor-gold/30 to-transparent"
          aria-hidden="true"
        />
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <span className="absolute -left-7 flex h-6 w-6 items-center justify-center rounded-full border border-syanor-gold bg-syanor-ivory text-xs font-bold text-syanor-emerald shadow-gold-sm">
              {i + 1}
            </span>
            <h3 className="font-playfair text-base leading-snug text-syanor-ink">{step.title}</h3>
            {step.text && (
              <p className="mt-1.5 text-sm leading-relaxed text-syanor-ink/60">{step.text}</p>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}
