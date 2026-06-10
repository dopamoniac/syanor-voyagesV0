
import { cn } from "@/lib/utils";

export interface OfferFilterState {
  type: string;
  transport: string;
  comfort: string;
  city: string;
  availability: string;
}

export const initialFilterState: OfferFilterState = {
  type: "Tous",
  transport: "Tous",
  comfort: "Tous",
  city: "Toutes",
  availability: "Toutes",
};

interface OfferFiltersProps {
  value: OfferFilterState;
  onChange: (next: OfferFilterState) => void;
  /** Departure cities derived from the offer data. */
  cityOptions: string[];
}

const typeOptions = [
  "Tous",
  "Billet avion",
  "Billet bateau",
  "Omra",
  "Hajj",
  "Omra Plus",
  "Ramadan",
  "Voyage organisé",
  "Séjour sur mesure",
  "Pack personnalisé",
];
const transportOptions = ["Tous", "Avion", "Bateau", "Mixte", "Sur mesure"];
const comfortOptions = ["Tous", "Standard", "Premium", "VIP"];
const availabilityOptions = [
  "Toutes",
  "Disponible",
  "Places limitées",
  "Sur demande",
  "Complet",
];

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
      <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-ink/50">
        {label}
      </span>
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
        {options.map((opt) => {
          const isActive = active === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onSelect(opt)}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all duration-200",
                isActive
                  ? "border-syanor-emerald bg-syanor-emerald text-syanor-champagne"
                  : "border-syanor-gold/30 bg-syanor-pearl text-syanor-ink/70 hover:border-syanor-gold"
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
}: OfferFiltersProps) {
  return (
    <div className="grid gap-5 rounded-2xl border border-syanor-gold/20 bg-syanor-pearl/70 p-5 md:grid-cols-2 lg:grid-cols-3">
      <ChipGroup
        label="Type"
        options={typeOptions}
        active={value.type}
        onSelect={(v) => onChange({ ...value, type: v })}
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
        label="Ville de départ"
        options={["Toutes", ...cityOptions]}
        active={value.city}
        onSelect={(v) => onChange({ ...value, city: v })}
      />
      <ChipGroup
        label="Disponibilité"
        options={availabilityOptions}
        active={value.availability}
        onSelect={(v) => onChange({ ...value, availability: v })}
      />
    </div>
  );
}
