import { useState } from "react";
import Link from "@/components/Link";
import { cn } from "@/lib/utils";

export interface ConfigStep {
  key: string;
  label: string;
  type: "chips" | "input" | "counter";
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

export interface ActivityConfig {
  id: string;
  label: string;
  icon: string;
  steps: ConfigStep[];
  buildUrl: (vals: Record<string, string>) => string;
}

const OMRA_CONFIG: ActivityConfig = {
  id: "omra",
  label: "Omra",
  icon: "🌙",
  steps: [
    {
      key: "month",
      label: "Quel mois souhaitez-vous partir ?",
      type: "chips",
      options: ["Oct. 2026", "Nov. 2026", "Déc. 2026", "Janv. 2027", "Fév. 2027", "Mars 2027", "Avr. 2027"],
      required: true,
    },
    {
      key: "city",
      label: "Votre ville de départ",
      type: "chips",
      options: ["Nice", "Marseille", "Lyon", "Paris", "Toulouse", "Bruxelles"],
      required: true,
    },
    {
      key: "comfort",
      label: "Votre formule",
      type: "chips",
      options: ["Essentiel", "Premium", "VIP"],
      required: true,
    },
    {
      key: "roomType",
      label: "Type de chambre",
      type: "chips",
      options: ["Quadruple", "Triple", "Double", "Individuelle"],
    },
    {
      key: "travelers",
      label: "Nombre de voyageurs",
      type: "counter",
    },
  ],
  buildUrl: (vals) => {
    const p = new URLSearchParams({ service: "Omra" });
    if (vals.month) p.set("month", vals.month);
    if (vals.city) p.set("city", vals.city);
    if (vals.comfort) p.set("comfort", vals.comfort);
    if (vals.roomType) p.set("roomType", vals.roomType);
    if (vals.travelers) p.set("travelers", vals.travelers);
    return `/contact?${p.toString()}#quote`;
  },
};

const AVION_CONFIG: ActivityConfig = {
  id: "avion",
  label: "Billet Avion",
  icon: "✈",
  steps: [
    {
      key: "tripType",
      label: "Type de billet",
      type: "chips",
      options: ["Aller-retour", "Aller simple", "Multi-destinations"],
      required: true,
    },
    {
      key: "city",
      label: "Ville de départ",
      type: "input",
      placeholder: "Ex : Nice, Paris, Lyon…",
      required: true,
    },
    {
      key: "destination",
      label: "Destination",
      type: "input",
      placeholder: "Ex : Médine, Istanbul, Djeddah…",
      required: true,
    },
    {
      key: "comfort",
      label: "Classe",
      type: "chips",
      options: ["Économique", "Premium Éco", "Affaires"],
    },
    {
      key: "travelers",
      label: "Nombre de voyageurs",
      type: "counter",
    },
  ],
  buildUrl: (vals) => {
    const p = new URLSearchParams({ service: "Billet avion", transport: "Avion" });
    if (vals.tripType) p.set("tripType", vals.tripType);
    if (vals.city) p.set("city", vals.city);
    if (vals.destination) p.set("destination", vals.destination);
    if (vals.comfort) p.set("comfort", vals.comfort);
    if (vals.travelers) p.set("travelers", vals.travelers);
    return `/contact?${p.toString()}#quote`;
  },
};

const BATEAU_CONFIG: ActivityConfig = {
  id: "bateau",
  label: "Billet Bateau",
  icon: "⚓",
  steps: [
    {
      key: "tripType",
      label: "Type de traversée",
      type: "chips",
      options: ["Aller-retour", "Aller simple"],
      required: true,
    },
    {
      key: "city",
      label: "Port de départ",
      type: "chips",
      options: ["Marseille", "Nice / Toulon", "Sète", "Autre"],
      required: true,
    },
    {
      key: "destination",
      label: "Destination",
      type: "chips",
      options: ["Tunis", "Alger", "Oran", "Annaba", "Ghazaouet", "Autre"],
      required: true,
    },
    {
      key: "vehicle",
      label: "Embarquement d'un véhicule ?",
      type: "chips",
      options: ["Oui", "Non"],
    },
    {
      key: "cabin",
      label: "Type de place",
      type: "chips",
      options: ["Fauteuil", "Cabine 2 pers.", "Cabine 4 pers.", "Suite"],
    },
  ],
  buildUrl: (vals) => {
    const p = new URLSearchParams({ service: "Billet bateau", transport: "Bateau" });
    if (vals.tripType) p.set("tripType", vals.tripType);
    if (vals.city) p.set("city", vals.city);
    if (vals.destination) p.set("destination", vals.destination);
    if (vals.vehicle) p.set("vehicle", vals.vehicle);
    if (vals.cabin) p.set("cabin", vals.cabin);
    return `/contact?${p.toString()}#quote`;
  },
};

const SEJOUR_CONFIG: ActivityConfig = {
  id: "sejour",
  label: "Séjour sur mesure",
  icon: "✏",
  steps: [
    {
      key: "destination",
      label: "Votre destination",
      type: "input",
      placeholder: "Ex : Istanbul, Médine, Dubaï…",
      required: true,
    },
    {
      key: "comfort",
      label: "Niveau de confort",
      type: "chips",
      options: ["Standard", "Premium", "VIP"],
      required: true,
    },
    {
      key: "transport",
      label: "Transport",
      type: "chips",
      options: ["Avion", "Bateau", "Mixte", "Sur mesure"],
    },
    {
      key: "hotel",
      label: "Hôtel inclus ?",
      type: "chips",
      options: ["Oui", "Non"],
    },
    {
      key: "travelers",
      label: "Nombre de voyageurs",
      type: "counter",
    },
  ],
  buildUrl: (vals) => {
    const p = new URLSearchParams({ service: "Séjour sur mesure" });
    if (vals.destination) p.set("destination", vals.destination);
    if (vals.comfort) p.set("comfort", vals.comfort);
    if (vals.transport) p.set("transport", vals.transport);
    if (vals.travelers) p.set("travelers", vals.travelers);
    return `/contact?${p.toString()}#quote`;
  },
};

export const ACTIVITY_CONFIGS: ActivityConfig[] = [
  OMRA_CONFIG,
  AVION_CONFIG,
  BATEAU_CONFIG,
  SEJOUR_CONFIG,
];

interface ActivityConfiguratorProps {
  defaultActivity?: "omra" | "avion" | "bateau" | "sejour";
  singleActivity?: "omra" | "avion" | "bateau" | "sejour";
  className?: string;
}

export default function ActivityConfigurator({
  defaultActivity = "omra",
  singleActivity,
  className,
}: ActivityConfiguratorProps) {
  const configs = singleActivity
    ? ACTIVITY_CONFIGS.filter((c) => c.id === singleActivity)
    : ACTIVITY_CONFIGS;

  const [activeId, setActiveId] = useState(singleActivity ?? defaultActivity);
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [counters, setCounters] = useState<Record<string, number>>({ travelers: 2 });

  const config = configs.find((c) => c.id === activeId) ?? configs[0];
  const currentStep = config.steps[stepIndex];
  const isLastStep = stepIndex === config.steps.length - 1;

  const currentVal = currentStep.type === "counter"
    ? String(counters[currentStep.key] ?? 2)
    : values[currentStep.key] ?? "";

  function handleSelect(key: string, val: string) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  function handleNext() {
    if (stepIndex < config.steps.length - 1) {
      setStepIndex((i) => i + 1);
    }
  }

  function handleBack() {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  }

  function handleActivityChange(id: string) {
    setActiveId(id);
    setStepIndex(0);
    setValues({});
    setCounters({ travelers: 2 });
  }

  const canNext = currentStep.required ? currentVal !== "" : true;
  const allValues: Record<string, string> = {
    ...values,
    ...Object.fromEntries(
      Object.entries(counters).map(([k, v]) => [k, String(v)])
    ),
  };
  const ctaHref = config.buildUrl(allValues);

  const requiredFilled = config.steps
    .filter((s) => s.required)
    .every((s) => {
      if (s.type === "counter") return true;
      return (values[s.key] ?? "") !== "";
    });

  return (
    <div
      id="configurateur"
      className={cn("scroll-mt-28 rounded-2xl border border-syanor-gold/20 bg-syanor-pearl shadow-card", className)}
    >
      {/* Activity tabs (hidden if singleActivity) */}
      {!singleActivity && (
        <div className="flex overflow-x-auto rounded-t-2xl border-b border-syanor-gold/15 bg-syanor-champagne/30">
          {configs.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => handleActivityChange(c.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 px-5 py-3.5 text-sm font-medium transition-all",
                c.id === activeId
                  ? "border-b-2 border-syanor-gold bg-syanor-pearl text-syanor-emerald"
                  : "text-syanor-ink/60 hover:text-syanor-ink"
              )}
            >
              <span aria-hidden="true">{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Progress */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex flex-1 gap-1.5">
            {config.steps.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-all duration-300",
                  i < stepIndex
                    ? "bg-syanor-emerald"
                    : i === stepIndex
                    ? "bg-syanor-gold"
                    : "bg-syanor-gold/20"
                )}
              />
            ))}
          </div>
          <span className="shrink-0 text-xs text-syanor-ink/50">
            Étape {stepIndex + 1} / {config.steps.length}
          </span>
        </div>

        {/* Step label */}
        <h3 className="mb-5 font-playfair text-xl text-syanor-ink">{currentStep.label}</h3>

        {/* Step content */}
        {currentStep.type === "chips" && currentStep.options && (
          <div className="flex flex-wrap gap-2">
            {currentStep.options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleSelect(currentStep.key, opt)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all duration-200",
                  values[currentStep.key] === opt
                    ? "border-syanor-emerald bg-syanor-emerald text-syanor-champagne"
                    : "border-syanor-gold/30 bg-white text-syanor-ink/70 hover:border-syanor-gold"
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {currentStep.type === "input" && (
          <input
            type="text"
            value={values[currentStep.key] ?? ""}
            onChange={(e) => handleSelect(currentStep.key, e.target.value)}
            placeholder={currentStep.placeholder ?? ""}
            className="w-full max-w-sm rounded-xl border border-syanor-gold/30 bg-white px-4 py-3 text-sm focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10"
          />
        )}

        {currentStep.type === "counter" && (
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Retirer"
              onClick={() => setCounters((p) => ({ ...p, [currentStep.key]: Math.max(1, (p[currentStep.key] ?? 2) - 1) }))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-syanor-gold/40 text-lg text-syanor-emerald hover:bg-syanor-emerald hover:text-white"
            >
              −
            </button>
            <span className="w-10 text-center text-xl font-semibold text-syanor-ink">
              {counters[currentStep.key] ?? 2}
            </span>
            <button
              type="button"
              aria-label="Ajouter"
              onClick={() => setCounters((p) => ({ ...p, [currentStep.key]: Math.min(20, (p[currentStep.key] ?? 2) + 1) }))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-syanor-gold/40 text-lg text-syanor-emerald hover:bg-syanor-emerald hover:text-white"
            >
              +
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center gap-3">
          {stepIndex > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="rounded-full border border-syanor-gold/30 px-5 py-2.5 text-sm text-syanor-ink/70 transition hover:border-syanor-gold"
            >
              ← Retour
            </button>
          )}

          {!isLastStep && (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canNext}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200",
                canNext
                  ? "bg-syanor-emerald text-syanor-champagne hover:bg-syanor-gold hover:text-syanor-royal"
                  : "cursor-not-allowed bg-syanor-ink/10 text-syanor-ink/30"
              )}
            >
              Étape suivante →
            </button>
          )}

          {isLastStep && (
            <Link
              href={ctaHref}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200",
                requiredFilled
                  ? "bg-syanor-emerald text-syanor-champagne hover:bg-syanor-gold hover:text-syanor-royal"
                  : "bg-syanor-emerald/70 text-syanor-champagne"
              )}
            >
              Créer mon devis →
            </Link>
          )}
        </div>

        {/* Summary chips */}
        {Object.keys(values).length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2 border-t border-syanor-gold/15 pt-4">
            {Object.entries(values).map(([k, v]) => v && (
              <span
                key={k}
                className="rounded-full bg-syanor-emerald/10 px-3 py-1 text-xs text-syanor-emerald"
              >
                {v}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
