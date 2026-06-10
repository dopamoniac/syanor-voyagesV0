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
        <div
          className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-syanor-gold/60 to-transparent"
          aria-hidden="true"
        />
        <ol
          className="relative grid gap-6"
          style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0,1fr))` }}
        >
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-syanor-gold bg-syanor-ivory font-playfair text-lg font-bold text-syanor-emerald">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-playfair text-base text-syanor-ink">
                  {step.title}
                </h3>
                {step.text && (
                  <p className="mt-2 text-sm text-syanor-ink/65">{step.text}</p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Mobile vertical */}
      <ol className="relative space-y-8 pl-6 md:hidden">
        <span
          className="absolute bottom-2 left-[11px] top-2 w-px bg-syanor-gold/50"
          aria-hidden="true"
        />
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <span className="absolute -left-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-syanor-gold bg-syanor-ivory text-xs font-bold text-syanor-emerald">
              {i + 1}
            </span>
            <h3 className="font-playfair text-base text-syanor-ink">{step.title}</h3>
            {step.text && <p className="mt-1 text-sm text-syanor-ink/65">{step.text}</p>}
          </li>
        ))}
      </ol>
    </>
  );
}
