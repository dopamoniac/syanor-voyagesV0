import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────
   FILTER STATE
───────────────────────────────────────────────────────────────────────── */

export interface OfferFilterState {
  type: string;
  year: string;
  month: string;
  transport: string;
  comfort: string;
  city: string;
  destination: string;
  budget: string;
  duration: string;
  availability: string;
  roomType: string;
}

export const initialFilterState: OfferFilterState = {
  type: "Tous",
  year: "Toutes",
  month: "Tous",
  transport: "Tous",
  comfort: "Tous",
  city: "Toutes",
  destination: "Toutes",
  budget: "Tous",
  duration: "Tous",
  availability: "Toutes",
  roomType: "Tous",
};

/* ─────────────────────────────────────────────────────────────────────────
   STATIC OPTIONS
───────────────────────────────────────────────────────────────────────── */

const typeOptions = [
  "Tous",
  "Billet avion",
  "Billet bateau",
  "Voyage organisé",
  "Séjour sur mesure",
  "Pack personnalisé",
  "Visa",
  "Assurance",
  "Hôtel & Transferts",
];

const destinationOptions = [
  "Toutes",
  "Istanbul",
  "Dubaï",
  "Tunis",
  "Maroc",
  "Égypte",
];

const budgetOptions = [
  "Tous",
  "Moins de 500 €",
  "500 € – 1 000 €",
  "1 000 € – 2 000 €",
  "2 000 € – 3 000 €",
  "Plus de 3 000 €",
];

const durationOptions = [
  "Tous",
  "3 à 5 jours",
  "6 à 10 jours",
  "11 à 15 jours",
  "Plus de 15 jours",
];

/* ─────────────────────────────────────────────────────────────────────────
   FILTER DROPDOWN — reusable single field
───────────────────────────────────────────────────────────────────────── */

interface FilterDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  placeholder?: string;
}

function FilterDropdown({
  label,
  value,
  options,
  onChange,
  placeholder,
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isDefault = value === options[0];

  // Close on click outside
  const handleOutside = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open, handleOutside]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      {/* Field button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "flex h-[54px] w-full items-center justify-between gap-2 rounded-xl border px-4 text-left",
          "bg-white transition-all duration-200",
          open
            ? "border-syanor-emerald shadow-[0_0_0_3px_rgba(6,63,51,0.09)]"
            : [
                "border-syanor-gold/30 shadow-[0_2px_8px_rgba(6,63,51,0.05)]",
                "hover:border-syanor-emerald/50 hover:shadow-[0_4px_16px_rgba(6,63,51,0.08)]",
              ]
        )}
      >
        <div className="min-w-0 flex-1">
          <p className="text-[0.62rem] font-bold uppercase tracking-widest text-syanor-ink/38 leading-none mb-0.5">
            {label}
          </p>
          <p
            className={cn(
              "truncate text-[0.86rem] font-medium leading-none",
              isDefault ? "text-syanor-ink/38" : "text-syanor-emerald"
            )}
          >
            {isDefault ? (placeholder ?? options[0]) : value}
          </p>
        </div>

        {/* Chevron */}
        <svg
          className={cn(
            "h-4 w-4 shrink-0 text-syanor-ink/30 transition-transform duration-200",
            open && "rotate-180 text-syanor-emerald"
          )}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          role="listbox"
          aria-label={label}
          className={cn(
            "absolute left-0 right-0 z-[100] mt-1.5 overflow-hidden rounded-xl",
            "border border-syanor-gold/20 bg-white",
            "shadow-[0_16px_48px_rgba(6,63,51,0.15)]",
            "animate-in fade-in-0 slide-in-from-top-1 duration-150"
          )}
          style={{
            animation: "dropdownIn 150ms ease-out forwards",
          }}
        >
          <div className="max-h-56 overflow-y-auto py-1">
            {options.map((opt) => {
              const isSelected = opt === value;
              return (
                <button
                  key={opt}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors duration-100",
                    isSelected
                      ? "bg-syanor-emerald/6 text-syanor-emerald font-medium"
                      : "text-syanor-ink/70 hover:bg-syanor-champagne/40 hover:text-syanor-ink"
                  )}
                >
                  <span>{opt}</span>
                  {isSelected && (
                    <svg
                      className="h-3.5 w-3.5 shrink-0 text-syanor-gold"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 13 4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   OFFER FILTERS BAR
───────────────────────────────────────────────────────────────────────── */

interface OfferFiltersProps {
  value: OfferFilterState;
  onChange: (next: OfferFilterState) => void;
  cityOptions: string[];
  monthOptions: string[];
}

export default function OfferFilters({
  value,
  onChange,
  cityOptions,
  monthOptions,
}: OfferFiltersProps) {
  const activeCount = [
    value.type !== "Tous",
    value.city !== "Toutes",
    value.destination !== "Toutes",
    value.month !== "Tous",
    value.budget !== "Tous",
    value.duration !== "Tous",
  ].filter(Boolean).length;

  function resetAll() {
    onChange(initialFilterState);
  }

  const allMonths = ["Tous", ...monthOptions];
  const allCities = ["Toutes", ...cityOptions];

  return (
    <div className="rounded-2xl border border-syanor-gold/20 bg-syanor-pearl/60 p-5 shadow-glass">
      {/* 6-column filter grid */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <FilterDropdown
          label="Type de voyage"
          value={value.type}
          options={typeOptions}
          onChange={(v) => onChange({ ...value, type: v })}
          placeholder="Tous types"
        />
        <FilterDropdown
          label="Ville de départ"
          value={value.city}
          options={allCities}
          onChange={(v) => onChange({ ...value, city: v })}
          placeholder="Toutes villes"
        />
        <FilterDropdown
          label="Destination"
          value={value.destination}
          options={destinationOptions}
          onChange={(v) => onChange({ ...value, destination: v })}
          placeholder="Toutes destinations"
        />
        <FilterDropdown
          label="Mois de départ"
          value={value.month}
          options={allMonths}
          onChange={(v) => onChange({ ...value, month: v })}
          placeholder="Tous les mois"
        />
        <FilterDropdown
          label="Budget"
          value={value.budget}
          options={budgetOptions}
          onChange={(v) => onChange({ ...value, budget: v })}
          placeholder="Tous budgets"
        />
        <FilterDropdown
          label="Durée"
          value={value.duration}
          options={durationOptions}
          onChange={(v) => onChange({ ...value, duration: v })}
          placeholder="Toutes durées"
        />
      </div>

      {/* Active filter count + reset */}
      {activeCount > 0 && (
        <div className="mt-4 flex items-center justify-between border-t border-syanor-gold/10 pt-3">
          <p className="text-xs text-syanor-ink/50">
            <span className="font-semibold text-syanor-emerald">{activeCount}</span>{" "}
            filtre{activeCount > 1 ? "s" : ""} actif{activeCount > 1 ? "s" : ""}
          </p>
          <button
            type="button"
            onClick={resetAll}
            className="flex items-center gap-2 rounded-full border border-syanor-gold/30 px-4 py-1.5 text-xs font-medium text-syanor-ink/55 transition-all duration-150 hover:border-syanor-emerald hover:text-syanor-emerald"
          >
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}
