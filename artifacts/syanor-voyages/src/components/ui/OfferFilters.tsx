
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface OfferFilterState {
  type: string;
  year: string;
  month: string;
  transport: string;
  comfort: string;
  city: string;
  availability: string;
  roomType: string;
  formation: string;
  ziyarat: string;
}

export const initialFilterState: OfferFilterState = {
  type: "Tous",
  year: "Toutes",
  month: "Tous",
  transport: "Tous",
  comfort: "Tous",
  city: "Toutes",
  availability: "Toutes",
  roomType: "Tous",
  formation: "Tous",
  ziyarat: "Tous",
};

interface OfferFiltersProps {
  value: OfferFilterState;
  onChange: (next: OfferFilterState) => void;
  cityOptions: string[];
  monthOptions: string[];
}

const typeOptions = [
  "Tous",
  "Omra",
  "Hajj",
  "Omra Plus",
  "Ramadan",
  "Billet avion",
  "Billet bateau",
  "Voyage organisé",
  "Séjour sur mesure",
  "Pack personnalisé",
];
const yearOptions = ["Toutes", "2026", "2027"];
const transportOptions = ["Tous", "Avion", "Bateau", "Mixte", "Sur mesure"];
const comfortOptions = ["Tous", "Standard", "Premium", "VIP"];
const availabilityOptions = [
  "Toutes",
  "Disponible",
  "Places limitées",
  "Sur demande",
  "À confirmer",
  "Complet",
];
const roomTypeOptions = ["Tous", "Quadruple", "Triple", "Double", "Individuelle"];
const formationOptions = ["Tous", "Avec formation", "Sans formation"];
const ziyaratOptions = ["Tous", "Avec Ziyarat", "Sans Ziyarat"];

function ChipGroup({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: string[];
  active: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-syanor-ink/45">
        {label}
      </span>
      <div className="no-scrollbar flex gap-1.5 overflow-x-auto pb-1">
        {options.map((opt) => {
          const isActive = active === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onSelect(opt)}
              className={cn(
                "whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                isActive
                  ? "border-syanor-emerald bg-syanor-emerald text-syanor-champagne"
                  : "border-syanor-gold/25 bg-syanor-pearl text-syanor-ink/65 hover:border-syanor-gold"
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function OfferFilters({
  value,
  onChange,
  cityOptions,
  monthOptions,
}: OfferFiltersProps) {
  const [expanded, setExpanded] = useState(false);

  const activeCount = [
    value.type !== "Tous",
    value.year !== "Toutes",
    value.month !== "Tous",
    value.transport !== "Tous",
    value.comfort !== "Tous",
    value.city !== "Toutes",
    value.availability !== "Toutes",
    value.roomType !== "Tous",
    value.formation !== "Tous",
    value.ziyarat !== "Tous",
  ].filter(Boolean).length;

  function resetAll() {
    onChange(initialFilterState);
  }

  return (
    <div className="rounded-2xl border border-syanor-gold/20 bg-syanor-pearl/70 p-5 shadow-card">
      {/* Top row: primary filters */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ChipGroup
          label="Type"
          options={typeOptions.slice(0, 5)}
          active={value.type}
          onSelect={(v) => onChange({ ...value, type: v })}
        />
        <ChipGroup
          label="Année"
          options={yearOptions}
          active={value.year}
          onSelect={(v) => onChange({ ...value, year: v })}
        />
        <ChipGroup
          label="Ville de départ"
          options={["Toutes", ...cityOptions]}
          active={value.city}
          onSelect={(v) => onChange({ ...value, city: v })}
        />
        <ChipGroup
          label="Disponibilité"
          options={availabilityOptions.slice(0, 4)}
          active={value.availability}
          onSelect={(v) => onChange({ ...value, availability: v })}
        />
      </div>

      {/* More filters */}
      {expanded && (
        <div className="mt-4 grid gap-4 border-t border-syanor-gold/15 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          <ChipGroup
            label="Tous les types"
            options={typeOptions}
            active={value.type}
            onSelect={(v) => onChange({ ...value, type: v })}
          />
          <ChipGroup
            label="Mois"
            options={["Tous", ...monthOptions]}
            active={value.month}
            onSelect={(v) => onChange({ ...value, month: v })}
          />
          <ChipGroup
            label="Transport"
            options={transportOptions}
            active={value.transport}
            onSelect={(v) => onChange({ ...value, transport: v })}
          />
          <ChipGroup
            label="Confort"
            options={comfortOptions}
            active={value.comfort}
            onSelect={(v) => onChange({ ...value, comfort: v })}
          />
          <ChipGroup
            label="Type de chambre"
            options={roomTypeOptions}
            active={value.roomType}
            onSelect={(v) => onChange({ ...value, roomType: v })}
          />
          <ChipGroup
            label="Formation incluse"
            options={formationOptions}
            active={value.formation}
            onSelect={(v) => onChange({ ...value, formation: v })}
          />
          <ChipGroup
            label="Ziyarat"
            options={ziyaratOptions}
            active={value.ziyarat}
            onSelect={(v) => onChange({ ...value, ziyarat: v })}
          />
          <ChipGroup
            label="Disponibilité (complète)"
            options={availabilityOptions}
            active={value.availability}
            onSelect={(v) => onChange({ ...value, availability: v })}
          />
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-syanor-gold/10 pt-3">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-1.5 text-xs text-syanor-ink/55 transition hover:text-syanor-emerald"
        >
          <svg
            className={cn("h-3.5 w-3.5 transition-transform", expanded && "rotate-180")}
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m4 6 4 4 4-4" strokeLinecap="round" />
          </svg>
          {expanded ? "Moins de filtres" : "Plus de filtres"}
        </button>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={resetAll}
            className="flex items-center gap-1.5 rounded-full border border-syanor-gold/30 px-3.5 py-1.5 text-xs text-syanor-ink/60 transition hover:border-syanor-gold hover:text-syanor-ink"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-syanor-emerald text-[0.6rem] font-bold text-white">
              {activeCount}
            </span>
            Réinitialiser
          </button>
        )}
      </div>
    </div>
  );
}
