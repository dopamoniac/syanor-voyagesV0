import { useState, useEffect, useRef, Suspense, Fragment } from "react";
import { useSearch } from "wouter";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";
import Link from "@/components/Link";
import { departureCities } from "@/data/cities";
import { CONTACT } from "@/data/navigation";
import type { ComfortLevel, ServiceCategory, TransportType } from "@/types";

/* ─────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────── */
type SubmitState = "idle" | "loading" | "success" | "error";
type ContactMethod = "Téléphone" | "WhatsApp" | "Email";
type FlightType = "Aller-retour" | "Aller simple";
type CabinClass = "Économique" | "Affaires" | "Première";
type RoomType = "Quadruple" | "Triple" | "Double" | "Individuelle";

interface FormData {
  universe: "" | "syanor" | "omra-hajj";
  serviceType: ServiceCategory | "Visa" | "";
  departureCity: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  travelers: number;
  transport: TransportType | "";
  flightType: FlightType | "";
  cabinClass: CabinClass | "";
  withVehicle: boolean;
  vehicleType: string;
  comfort: ComfortLevel | "";
  roomType: RoomType | "";
  withFormation: boolean;
  withZiyarat: boolean;
  withVisaAssistance: boolean;
  withPrivateTransfers: boolean;
  withHotel: boolean;
  withInsurance: boolean;
  flexibilityLevel: string;
  budgetRange: string;
  fullName: string;
  phone: string;
  email: string;
  contactMethod: ContactMethod | "";
  message: string;
  selectedOffer: string;
  month: string;
}

const initialData: FormData = {
  universe: "",
  serviceType: "",
  departureCity: "",
  destination: "",
  departureDate: "",
  returnDate: "",
  travelers: 1,
  transport: "",
  flightType: "",
  cabinClass: "",
  withVehicle: false,
  vehicleType: "",
  comfort: "",
  roomType: "",
  withFormation: false,
  withZiyarat: true,
  withVisaAssistance: true,
  withPrivateTransfers: false,
  withHotel: false,
  withInsurance: false,
  flexibilityLevel: "",
  budgetRange: "",
  fullName: "",
  phone: "",
  email: "",
  contactMethod: "",
  message: "",
  selectedOffer: "",
  month: "",
};

/* ─────────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────────── */
const SERVICE_OPTIONS_SYANOR: { key: ServiceCategory | "Visa"; icon: string; label: string; desc: string }[] = [
  { key: "Billet avion",     icon: "airplane",  label: "Billet avion",   desc: "Vol international" },
  { key: "Billet bateau",    icon: "anchor",    label: "Billet bateau",  desc: "Ferry & traversées" },
  { key: "Voyage organisé",  icon: "route",     label: "Voyage organisé",desc: "Circuit & séjour groupe" },
  { key: "Séjour sur mesure",icon: "compass",   label: "Sur mesure",     desc: "Voyage entièrement personnalisé" },
  { key: "Pack personnalisé",icon: "diamond",   label: "Pack VIP",       desc: "Billet + hôtel + transferts" },
  { key: "Visa",             icon: "clipboard", label: "Visa",           desc: "Assistance & démarches" },
];

const SERVICE_OPTIONS_OMRA: { key: ServiceCategory | "Visa"; icon: string; label: string; desc: string }[] = [
  { key: "Omra",             icon: "crescent",  label: "Omra",           desc: "Petit pèlerinage, toute l'année" },
  { key: "Hajj",             icon: "crescent",  label: "Hajj",           desc: "Grand pèlerinage annuel" },
  { key: "Omra Plus",        icon: "crescent",  label: "Omra Plus",      desc: "Séjour prolongé 21–34 jours" },
  { key: "Ramadan",          icon: "sparkle",   label: "Ramadan",        desc: "Omra pendant le mois sacré" },
  { key: "Séjour sur mesure",icon: "book-open", label: "Ziyarat",        desc: "Visites des lieux saints" },
  { key: "Visa",             icon: "shield",    label: "Accompagnement", desc: "Suivi spirituel & formation" },
];

const SERVICE_OPTIONS = [...SERVICE_OPTIONS_SYANOR, ...SERVICE_OPTIONS_OMRA];

const COMFORT_OPTIONS: ComfortLevel[] = ["Standard", "Premium", "VIP"];
const ROOM_TYPES: RoomType[] = ["Quadruple", "Triple", "Double", "Individuelle"];
const TRANSPORT_OPTIONS: TransportType[] = ["Avion", "Bateau", "Mixte", "Sur mesure"];
const BUDGET_OPTIONS = ["< 1 000 €", "1 000 – 1 500 €", "1 500 – 2 500 €", "2 500 – 4 000 €", "> 4 000 €"];
const CABIN_OPTIONS: CabinClass[] = ["Économique", "Affaires", "Première"];
const FLIGHT_TYPE_OPTIONS: FlightType[] = ["Aller-retour", "Aller simple"];
const CONTACT_METHODS: ContactMethod[] = ["WhatsApp", "Téléphone", "Email"];
const STEP_LABELS = ["Univers", "Service", "Voyage", "Options", "Contact"];
const STEP_TITLES: Record<number, string> = {
  1: "Quel univers vous intéresse ?",
  2: "Choisissez votre service",
  3: "Détails du voyage",
  4: "Confort & options",
  5: "Vos coordonnées",
};

/* ─────────────────────────────────────────────────────────────────
   PROGRESS STEPPER
───────────────────────────────────────────────────────────────── */
function ProgressStepper({ step, onBack }: { step: number; onBack: (s: number) => void }) {
  return (
    <div className="mb-8 flex items-start" aria-label="Progression du formulaire">
      {STEP_LABELS.map((label, i) => {
        const idx = i + 1;
        const done = idx < step;
        const active = idx === step;
        const last = i === STEP_LABELS.length - 1;
        return (
          <Fragment key={label}>
            <div className="flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={() => done && onBack(idx)}
                disabled={!done}
                aria-label={done ? `Retour étape ${idx} — ${label}` : `Étape ${idx} — ${label}`}
                aria-current={active ? "step" : undefined}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300",
                  done  && "cursor-pointer bg-syanor-emerald text-syanor-ivory hover:ring-2 hover:ring-syanor-emerald/30 hover:ring-offset-1",
                  active && "cursor-default bg-syanor-gold text-syanor-royal ring-4 ring-syanor-gold/20",
                  !done && !active && "cursor-default bg-syanor-champagne/70 text-syanor-ink/30"
                )}
              >
                {done ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span>{idx}</span>
                )}
              </button>
              <span className={cn(
                "hidden text-[0.6rem] font-semibold uppercase tracking-widest sm:block",
                active ? "text-syanor-gold" : done ? "text-syanor-emerald" : "text-syanor-ink/30"
              )}>
                {label}
              </span>
            </div>

            {!last && (
              <div className="relative mx-1.5 mt-5 h-[2px] flex-1">
                <div className="absolute inset-0 rounded-full bg-syanor-champagne" />
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-syanor-emerald transition-all duration-500"
                  style={{ width: done ? "100%" : "0%" }}
                  aria-hidden="true"
                />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PREFILL BANNER
───────────────────────────────────────────────────────────────── */
function PrefillBanner({ data }: { data: FormData }) {
  const items: { label: string; value: string }[] = [];
  if (data.serviceType)   items.push({ label: "Service",     value: data.serviceType });
  if (data.selectedOffer) items.push({ label: "Offre",       value: data.selectedOffer });
  if (data.departureDate) items.push({ label: "Départ",      value: data.departureDate });
  if (data.departureCity) items.push({ label: "Ville",       value: data.departureCity });
  if (data.comfort)       items.push({ label: "Confort",     value: data.comfort });
  if (items.length < 2)   return null;

  return (
    <div className="mb-6 flex items-start gap-3 rounded-2xl border border-syanor-gold/30 bg-gradient-to-r from-syanor-gold/6 to-syanor-champagne/25 p-4">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-syanor-gold/20 text-syanor-gold" aria-hidden="true">
        <Icon name="check-circle" className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold">Votre sélection</p>
        <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1">
          {items.map(({ label, value }) => (
            <span key={label} className="text-sm">
              <span className="text-syanor-ink/45">{label} </span>
              <span className="font-semibold text-syanor-ink">{value}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────────────────────────── */
function ServiceCard({
  svc, selected, onClick,
}: {
  svc: typeof SERVICE_OPTIONS[number];
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex flex-col items-start rounded-2xl border p-3.5 text-left transition-all duration-200 active:scale-[0.97] cursor-pointer select-none",
        selected
          ? "border-syanor-gold bg-syanor-gold/5 shadow-[0_0_0_1px_rgba(201,162,74,0.22),0_4px_20px_rgba(201,162,74,0.10)]"
          : "border-syanor-gold/18 bg-syanor-pearl hover:border-syanor-gold/50 hover:shadow-card hover:-translate-y-0.5"
      )}
    >
      <span className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200",
        selected
          ? "bg-syanor-emerald text-syanor-gold"
          : "bg-syanor-emerald/8 text-syanor-emerald group-hover:bg-syanor-emerald/15"
      )} aria-hidden="true">
        <Icon name={svc.icon} className="h-5 w-5" />
      </span>
      <span className={cn(
        "mt-2.5 block text-sm font-semibold transition-colors",
        selected ? "text-syanor-ink" : "text-syanor-ink/80"
      )}>{svc.label}</span>
      <span className="mt-0.5 block text-[0.67rem] leading-snug text-syanor-ink/45">{svc.desc}</span>
      {selected && (
        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-syanor-emerald/10 px-2 py-0.5 text-[0.6rem] font-semibold text-syanor-emerald">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
            <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Sélectionné
        </span>
      )}
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CHIP GROUP (uses .chip / .chip-active from global CSS)
───────────────────────────────────────────────────────────────── */
function ChipGroup<T extends string>({
  label, options, value, onChange, required = false,
}: {
  label: string; options: T[]; value: T | ""; onChange: (v: T) => void; required?: boolean;
}) {
  return (
    <div>
      <span className="mb-2 block text-sm font-medium text-syanor-ink/75">
        {label}{required && <span className="ml-0.5 text-syanor-gold"> *</span>}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cn("chip", value === opt && "chip-active")}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   TOGGLE CARD (replaces native checkboxes)
───────────────────────────────────────────────────────────────── */
function ToggleCard({
  checked, onChange, title, desc,
}: {
  checked: boolean; onChange: () => void; title: string; desc: string;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={cn(
        "flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 active:scale-[0.98] cursor-pointer select-none",
        checked
          ? "border-syanor-emerald/40 bg-syanor-emerald/5 shadow-[0_2px_12px_rgba(6,63,51,0.06)]"
          : "border-syanor-gold/20 bg-syanor-pearl/70 hover:border-syanor-gold/40 hover:bg-syanor-pearl"
      )}
    >
      <span className={cn(
        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200",
        checked
          ? "border-syanor-emerald bg-syanor-emerald text-syanor-ivory"
          : "border-syanor-gold/35 bg-transparent"
      )} aria-hidden="true">
        {checked && (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <div className="min-w-0">
        <p className={cn("text-sm font-semibold", checked ? "text-syanor-emerald" : "text-syanor-ink/80")}>
          {title}
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-syanor-ink/45">{desc}</p>
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SELECT FIELD
───────────────────────────────────────────────────────────────── */
function SelectField({
  id, label, value, onChange, required = false, error, children,
}: {
  id: string; label: string; value: string; onChange: (v: string) => void;
  required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-syanor-ink/75">
        {label}{required && <span className="ml-0.5 text-syanor-gold"> *</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "input-base cursor-pointer appearance-none pr-10",
            error && "border-red-400 ring-2 ring-red-400/15"
          )}
        >
          {children}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-syanor-ink/35" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" strokeLinecap="round"/></svg>
          {error}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   TEXT / DATE FIELD
───────────────────────────────────────────────────────────────── */
function TextField({
  id, label, type = "text", value, onChange, placeholder, required = false, error, autoComplete, readOnly = false,
}: {
  id: string; label: string; type?: string; value: string; onChange: (v: string) => void;
  placeholder?: string; required?: boolean; error?: string; autoComplete?: string; readOnly?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-syanor-ink/75">
        {label}{required && <span className="ml-0.5 text-syanor-gold"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={readOnly ? () => {} : (e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        readOnly={readOnly}
        className={cn(
          "input-base",
          error && "border-red-400 ring-2 ring-red-400/15",
          readOnly && "cursor-not-allowed bg-syanor-pearl/70 text-syanor-ink/60"
        )}
      />
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" strokeLinecap="round"/></svg>
          {error}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   INNER FORM (all state logic)
───────────────────────────────────────────────────────────────── */
function SmartQuoteFormInner() {
  const search = useSearch();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isProgrammedOmra, setIsProgrammedOmra] = useState(false);
  const wasPrefilled = useRef(false);

  /* URL prefill */
  useEffect(() => {
    const sp = new URLSearchParams(search);
    const service      = sp.get("service");
    const offer        = sp.get("offer");
    const city         = sp.get("city");
    const month        = sp.get("month");
    const comfort      = sp.get("comfort");
    const transport    = sp.get("transport");
    const destination  = sp.get("destination");
    const departureDate = sp.get("departureDate");
    const returnDate   = sp.get("returnDate");
    const roomType     = sp.get("roomType");
    const programmed   = sp.get("programmed");

    const universe  = sp.get("universe");

    if (service || offer || city || universe) wasPrefilled.current = true;

    // Normalise service slug → ServiceCategory
    const serviceMap: Record<string, ServiceCategory | "Visa"> = {
      "omra": "Omra", "hajj": "Hajj", "omra-plus": "Omra Plus", "ramadan": "Ramadan",
      "billet-avion": "Billet avion", "billet-bateau": "Billet bateau",
      "voyage-organise": "Voyage organisé", "sejour-sur-mesure": "Séjour sur mesure",
      "pack-vip": "Pack personnalisé", "visa": "Visa",
      // already-normalised variants
      "Omra": "Omra", "Hajj": "Hajj", "Billet avion": "Billet avion",
    };
    const normService = service ? (serviceMap[service] ?? service as ServiceCategory) : "";

    // Only auto-fill fixed dates for programmed Omra/Hajj offers
    const omraTypes = new Set(["Omra", "Hajj", "Omra Plus", "Ramadan"]);
    const isOmraProgrammed =
      programmed === "true" &&
      !!normService &&
      omraTypes.has(normService);

    setIsProgrammedOmra(isOmraProgrammed);

    const omraServices = new Set(["Omra", "Hajj", "Omra Plus", "Ramadan"]);
    const normUniverse: "" | "syanor" | "omra-hajj" =
      universe === "omra-hajj" ? "omra-hajj" :
      universe === "syanor"    ? "syanor" :
      normService && omraServices.has(normService) ? "omra-hajj" :
      normService ? "syanor" : "";

    setData((d) => ({
      ...d,
      universe:      normUniverse || d.universe,
      serviceType:   normService || d.serviceType,
      selectedOffer: offer        ?? d.selectedOffer,
      departureCity: city
        ? (departureCities.find((c) => c.slug === city)?.name ?? city)
        : d.departureCity,
      month:         month        ?? d.month,
      comfort:       (comfort      as ComfortLevel) || d.comfort,
      transport:     (transport    as TransportType) || d.transport,
      destination:   destination  ?? d.destination,
      departureDate: isOmraProgrammed ? (departureDate ?? d.departureDate) : d.departureDate,
      returnDate:    isOmraProgrammed ? (returnDate   ?? d.returnDate)    : d.returnDate,
      roomType:      (roomType     as RoomType) || d.roomType,
    }));

    if (service) setStep(3);
    else if (universe) setStep(2);
  }, [search]);

  const update = <K extends keyof FormData>(key: K, val: FormData[K]) =>
    setData((d) => ({ ...d, [key]: val }));

  /* Service helpers */
  const isSpiritual =
    data.serviceType === "Omra"   || data.serviceType === "Hajj" ||
    data.serviceType === "Omra Plus" || data.serviceType === "Ramadan";
  const isFlightTicket = data.serviceType === "Billet avion";
  const isBoatTicket   = data.serviceType === "Billet bateau";
  const isTicket       = isFlightTicket || isBoatTicket;
  const isCustom       =
    data.serviceType === "Séjour sur mesure" ||
    data.serviceType === "Pack personnalisé"  ||
    data.serviceType === "Voyage organisé";
  const isVisa = data.serviceType === "Visa";

  /* Per-step validation */
  function validateStep(s: number): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (s === 1 && !data.universe)
      e.universe = "Veuillez choisir un univers.";
    if (s === 2 && !data.serviceType)
      e.serviceType = "Veuillez choisir un service.";
    if (s === 3) {
      if (!data.departureCity.trim())
        e.departureCity = "Indiquez au moins une ville de départ.";
      if (!data.departureDate)
        e.departureDate = "Indiquez une date de départ souhaitée.";
    }
    if (s === 5) {
      if (!data.fullName.trim())
        e.fullName = "Veuillez renseigner votre nom complet.";
      if (!data.phone.trim() && !data.email.trim())
        e.phone = "Ajoutez un numéro de téléphone ou une adresse email.";
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = "Cette adresse email ne semble pas valide.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function nextStep() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 5));
  }

  function goBack(targetStep: number) {
    setStep(targetStep);
    setErrors({});
  }

  function prevStep() { goBack(Math.max(step - 1, 1)); }

  /* Submit */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(5)) return;
    setSubmitState("loading");
    setErrorMsg("");
    try {
      const apiRes = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await apiRes.json();
      if (!apiRes.ok || !json.success) throw new Error(json.error || "Erreur inconnue");
      setSubmitState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Erreur");
      setSubmitState("error");
    }
  }

  /* ── SUCCESS STATE ── */
  if (submitState === "success") {
    return (
      <div
        className="relative overflow-hidden rounded-3xl"
        style={{ background: "linear-gradient(135deg, #022B24 0%, #063F33 60%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #C9A24A 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-syanor-gold/6 blur-3xl" aria-hidden="true" />

        <div className="relative p-8 text-center md:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-syanor-gold/35 bg-syanor-gold/12">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A24A" strokeWidth="2" aria-hidden="true">
              <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h3 className="mt-6 font-playfair text-2xl text-syanor-ivory md:text-3xl">
            Votre demande a bien été envoyée.
          </h3>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-syanor-champagne/70">
            Merci. L'équipe SYANOR VOYAGES va analyser votre projet et vous contactera avec une proposition personnalisée.
          </p>

          {data.serviceType && (
            <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-syanor-gold/25 bg-syanor-royal/60 px-4 py-2 text-sm">
              <span className="text-syanor-champagne/55">Votre demande :</span>
              <span className="font-semibold text-syanor-gold">{data.serviceType}</span>
              {data.selectedOffer && (
                <span className="text-syanor-champagne/55">— {data.selectedOffer}</span>
              )}
            </div>
          )}

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Continuer sur WhatsApp
            </a>
            <Link
              href="/offres"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-syanor-gold/25 px-7 py-3.5 text-sm font-semibold text-syanor-champagne/80 transition hover:border-syanor-gold hover:text-syanor-gold"
            >
              Voir nos départs
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-syanor-champagne/45 transition hover:text-syanor-champagne/70"
            >
              Retour à l'accueil
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-syanor-champagne/40">
            <span>{CONTACT.phone}</span>
            <span aria-hidden="true">·</span>
            <span>{CONTACT.email}</span>
          </div>
        </div>
      </div>
    );
  }

  /* ── FORM ── */
  return (
    <form onSubmit={handleSubmit} noValidate>
      <ProgressStepper step={step} onBack={goBack} />

      {/* Prefill banner — only shown after step 1 */}
      {step > 1 && wasPrefilled.current && <PrefillBanner data={data} />}

      {/* Step heading */}
      <div className="mb-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-syanor-gold/80">
          Étape {step} sur 5
        </p>
        <p className="mt-1 font-playfair text-xl text-syanor-ink">
          {STEP_TITLES[step]}
          {step === 3 && data.serviceType && (
            <span className="ml-2 font-sans text-sm font-normal text-syanor-gold">— {data.serviceType}</span>
          )}
        </p>
      </div>

      {/* Animated step content */}
      <div key={step} style={{ animation: "stepFadeIn 0.26s cubic-bezier(0.22,1,0.36,1) both" }}>

        {/* ── STEP 1: Universe selector ── */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* SYANOR VOYAGES — general travel */}
              <button
                type="button"
                onClick={() => { update("universe", "syanor"); update("serviceType", ""); setErrors({}); }}
                className={`group flex flex-col items-start rounded-2xl border p-5 text-left transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                  data.universe === "syanor"
                    ? "border-syanor-emerald bg-syanor-emerald/5 shadow-[0_0_0_1px_rgba(6,63,51,0.18),0_4px_20px_rgba(6,63,51,0.10)]"
                    : "border-syanor-gold/18 bg-syanor-pearl hover:border-syanor-gold/50 hover:shadow-card hover:-translate-y-0.5"
                }`}
              >
                <div className="mb-3 flex gap-2">
                  {["airplane","anchor","compass"].map((ic) => (
                    <span key={ic} className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${data.universe === "syanor" ? "bg-syanor-emerald text-syanor-gold" : "bg-syanor-emerald/8 text-syanor-emerald group-hover:bg-syanor-emerald/15"}`} aria-hidden="true">
                      <Icon name={ic} className="h-4 w-4" />
                    </span>
                  ))}
                </div>
                <span className={`mb-1 text-[0.65rem] font-bold uppercase tracking-widest ${data.universe === "syanor" ? "text-syanor-emerald" : "text-syanor-ink/40"}`}>
                  Agence de voyages premium
                </span>
                <span className="block text-base font-bold text-syanor-ink">SYANOR VOYAGES</span>
                <span className="mt-1.5 block text-[0.72rem] leading-relaxed text-syanor-ink/50">
                  Billets, séjours, voyages organisés, packs premium, visas, transferts et assistance voyage.
                </span>
                {data.universe === "syanor" && (
                  <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-syanor-emerald/10 px-2.5 py-1 text-[0.62rem] font-semibold text-syanor-emerald">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Sélectionné
                  </span>
                )}
              </button>

              {/* Omra & Hajj universe */}
              <button
                type="button"
                onClick={() => { update("universe", "omra-hajj"); update("serviceType", ""); setErrors({}); }}
                className={`group relative flex flex-col items-start overflow-hidden rounded-2xl border p-5 text-left transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                  data.universe === "omra-hajj"
                    ? "border-syanor-gold bg-syanor-gold/5 shadow-[0_0_0_1px_rgba(201,162,74,0.22),0_4px_20px_rgba(201,162,74,0.10)]"
                    : "border-syanor-gold/18 bg-syanor-pearl hover:border-syanor-gold/50 hover:shadow-card hover:-translate-y-0.5"
                }`}
                style={data.universe === "omra-hajj" ? { background: "linear-gradient(135deg, #fdf6e8 0%, #fff9ed 100%)" } : undefined}
              >
                <div className="mb-3 flex gap-2">
                  {["crescent","sparkle","book-open"].map((ic) => (
                    <span key={ic} className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${data.universe === "omra-hajj" ? "bg-syanor-gold/15 text-syanor-gold" : "bg-syanor-gold/8 text-syanor-gold group-hover:bg-syanor-gold/15"}`} aria-hidden="true">
                      <Icon name={ic} className="h-4 w-4" />
                    </span>
                  ))}
                </div>
                <span className={`mb-1 text-[0.65rem] font-bold uppercase tracking-widest ${data.universe === "omra-hajj" ? "text-syanor-gold" : "text-syanor-ink/40"}`}>
                  Univers spirituel
                </span>
                <span className="block text-base font-bold text-syanor-ink">Omra & Hajj</span>
                <span className="mt-1.5 block text-[0.72rem] leading-relaxed text-syanor-ink/50">
                  Omra, Hajj, Ramadan, Ziyarat, formation et accompagnement spirituel, en partenariat avec Omra Factory.
                </span>
                {data.universe === "omra-hajj" && (
                  <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-syanor-gold/15 px-2.5 py-1 text-[0.62rem] font-semibold text-syanor-gold">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Sélectionné
                  </span>
                )}
              </button>
            </div>
            {(errors as Record<string, string>).universe && (
              <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" strokeLinecap="round"/></svg>
                {(errors as Record<string, string>).universe}
              </p>
            )}
          </div>
        )}

        {/* ── STEP 2: Service selection ── */}
        {step === 2 && (
          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {(data.universe === "omra-hajj" ? SERVICE_OPTIONS_OMRA : data.universe === "syanor" ? SERVICE_OPTIONS_SYANOR : SERVICE_OPTIONS).map((svc) => (
                <ServiceCard
                  key={svc.key + svc.label}
                  svc={svc}
                  selected={data.serviceType === svc.key}
                  onClick={() => {
                    update("serviceType", svc.key as ServiceCategory | "Visa");
                    setErrors({});
                  }}
                />
              ))}
            </div>
            {errors.serviceType && (
              <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-red-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" strokeLinecap="round"/></svg>
                {errors.serviceType}
              </p>
            )}
          </div>
        )}

        {/* ── STEP 3: Trip details ── */}
        {step === 3 && (
          <div className="space-y-5">
            {/* Pre-selected offer */}
            {data.selectedOffer && (
              <div className="flex items-center gap-3 rounded-xl border border-syanor-gold/25 bg-syanor-champagne/25 px-4 py-3">
                <Icon name="check-circle" className="h-4 w-4 shrink-0 text-syanor-gold" />
                <span className="text-sm">
                  <span className="text-syanor-ink/55">Offre sélectionnée : </span>
                  <span className="font-semibold text-syanor-emerald">{data.selectedOffer}</span>
                </span>
              </div>
            )}

            {/* Departure city */}
            <SelectField
              id="sqf-city"
              label={isBoatTicket ? "Port / ville de départ" : "Ville de départ"}
              value={data.departureCity}
              onChange={(v) => update("departureCity", v)}
              required
              error={errors.departureCity}
            >
              <option value="">Sélectionnez votre ville…</option>
              {departureCities.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name} ({c.airportCode}){!c.confirmed ? " — sur demande" : ""}
                </option>
              ))}
              <option value="Autre">Autre ville (préciser dans le message)</option>
            </SelectField>

            {/* Destination (non-spiritual) */}
            {!isSpiritual && (
              <TextField
                id="sqf-dest"
                label="Destination"
                value={data.destination}
                onChange={(v) => update("destination", v)}
                placeholder={
                  isFlightTicket  ? "Ex. Tunis, Casablanca, Istanbul…"
                  : isBoatTicket  ? "Ex. Tunis, Alger, Barcelone…"
                  : "Ex. Turquie, Andalousie, Maroc…"
                }
              />
            )}

            {/* Flight: type + cabin */}
            {isFlightTicket && (
              <div className="grid gap-4 sm:grid-cols-2">
                <ChipGroup label="Type de vol" options={FLIGHT_TYPE_OPTIONS} value={data.flightType} onChange={(v) => update("flightType", v)} />
                <ChipGroup label="Classe" options={CABIN_OPTIONS} value={data.cabinClass} onChange={(v) => update("cabinClass", v)} />
              </div>
            )}

            {/* Boat: vehicle */}
            {isBoatTicket && (
              <div className="space-y-3">
                <ToggleCard
                  checked={data.withVehicle}
                  onChange={() => update("withVehicle", !data.withVehicle)}
                  title="Embarquement véhicule"
                  desc="Voiture, camping-car, moto… Précisez les dimensions si connu."
                />
                {data.withVehicle && (
                  <TextField
                    id="sqf-vehicle"
                    label="Type et dimensions du véhicule"
                    value={data.vehicleType}
                    onChange={(v) => update("vehicleType", v)}
                    placeholder="Ex. Renault Scenic, 4m50 × 1m90"
                  />
                )}
              </div>
            )}

            {/* Dates */}
            <div>
              {isProgrammedOmra && (
                <div className="mb-3 flex items-start gap-2 rounded-xl border border-syanor-gold/30 bg-syanor-gold/5 px-4 py-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-syanor-gold" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <p className="text-xs leading-relaxed text-syanor-ink/70">
                    <span className="font-semibold text-syanor-ink">Dates fixées par le programme Omra sélectionné.</span>
                    {data.selectedOffer && <span className="ml-1 text-syanor-emerald">{data.selectedOffer}</span>}
                  </p>
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                  id="sqf-dep"
                  label="Date de départ souhaitée"
                  type="date"
                  value={data.departureDate}
                  onChange={(v) => update("departureDate", v)}
                  required
                  error={errors.departureDate}
                  readOnly={isProgrammedOmra}
                />
                {!isVisa && (
                  <TextField
                    id="sqf-ret"
                    label="Date de retour souhaitée"
                    type="date"
                    value={data.returnDate}
                    onChange={(v) => update("returnDate", v)}
                    readOnly={isProgrammedOmra}
                  />
                )}
              </div>
            </div>

            {/* Travelers */}
            {!isVisa && (
              <div>
                <span className="mb-2 block text-sm font-medium text-syanor-ink/75">Nombre de voyageurs</span>
                <div className="inline-flex items-center gap-4 rounded-2xl border border-syanor-gold/20 bg-syanor-pearl px-5 py-3">
                  <button
                    type="button"
                    aria-label="Retirer un voyageur"
                    onClick={() => update("travelers", Math.max(1, data.travelers - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-syanor-gold/30 text-lg font-light text-syanor-emerald transition active:scale-[0.92] hover:bg-syanor-emerald hover:text-syanor-ivory hover:border-transparent"
                  >−</button>
                  <span className="w-6 text-center font-playfair text-xl font-semibold text-syanor-ink">{data.travelers}</span>
                  <button
                    type="button"
                    aria-label="Ajouter un voyageur"
                    onClick={() => update("travelers", Math.min(30, data.travelers + 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-syanor-gold/30 text-lg font-light text-syanor-emerald transition active:scale-[0.92] hover:bg-syanor-emerald hover:text-syanor-ivory hover:border-transparent"
                  >+</button>
                  <span className="text-sm text-syanor-ink/45">
                    {data.travelers === 1 ? "voyageur" : "voyageurs"}
                  </span>
                </div>
              </div>
            )}

            {/* Transport (custom/organized) */}
            {isCustom && (
              <ChipGroup label="Mode de transport préféré" options={TRANSPORT_OPTIONS} value={data.transport} onChange={(v) => update("transport", v)} />
            )}

            {/* Visa specifics */}
            {isVisa && (
              <TextField
                id="sqf-visa-dest"
                label="Pays de destination"
                value={data.destination}
                onChange={(v) => update("destination", v)}
                placeholder="Ex. Arabie Saoudite, Maroc, Turquie…"
              />
            )}
          </div>
        )}

        {/* ── STEP 4: Comfort & options ── */}
        {step === 4 && (
          <div className="space-y-6">

            {/* Comfort (spiritual + custom) */}
            {(isSpiritual || isCustom) && (
              <ChipGroup label="Niveau de confort" options={COMFORT_OPTIONS} value={data.comfort} onChange={(v) => update("comfort", v)} />
            )}

            {/* Room type (spiritual) */}
            {isSpiritual && (
              <ChipGroup label="Type de chambre" options={ROOM_TYPES} value={data.roomType} onChange={(v) => update("roomType", v)} />
            )}

            {/* Spiritual options as toggle cards */}
            {isSpiritual && (
              <div>
                <span className="mb-3 block text-sm font-medium text-syanor-ink/75">Options & accompagnement</span>
                <div className="grid gap-3 sm:grid-cols-2">
                  <ToggleCard
                    checked={data.withFormation}
                    onChange={() => update("withFormation", !data.withFormation)}
                    title="Formation pré-départ"
                    desc="Préparation des rites avant le départ"
                  />
                  <ToggleCard
                    checked={data.withZiyarat}
                    onChange={() => update("withZiyarat", !data.withZiyarat)}
                    title="Ziyarat accompagnée"
                    desc="Visites des lieux saints de Médine & Makkah"
                  />
                  <ToggleCard
                    checked={data.withVisaAssistance}
                    onChange={() => update("withVisaAssistance", !data.withVisaAssistance)}
                    title="Assistance visa"
                    desc="Accompagnement pour le visa Omra / Hajj"
                  />
                  <ToggleCard
                    checked={data.withPrivateTransfers}
                    onChange={() => update("withPrivateTransfers", !data.withPrivateTransfers)}
                    title="Transferts privés"
                    desc="Au lieu des transferts en groupe"
                  />
                </div>
              </div>
            )}

            {/* Custom/organized options */}
            {isCustom && (
              <div>
                <span className="mb-3 block text-sm font-medium text-syanor-ink/75">Services inclus</span>
                <div className="grid gap-3 sm:grid-cols-2">
                  <ToggleCard
                    checked={data.withHotel}
                    onChange={() => update("withHotel", !data.withHotel)}
                    title="Hôtel inclus"
                    desc="Hébergement sélectionné selon votre confort"
                  />
                  <ToggleCard
                    checked={data.withPrivateTransfers}
                    onChange={() => update("withPrivateTransfers", !data.withPrivateTransfers)}
                    title="Transferts"
                    desc="Aéroport, hôtel, visites inclus"
                  />
                  <ToggleCard
                    checked={data.withInsurance}
                    onChange={() => update("withInsurance", !data.withInsurance)}
                    title="Assurance voyage"
                    desc="Annulation, assistance médicale"
                  />
                  <ToggleCard
                    checked={data.withVisaAssistance}
                    onChange={() => update("withVisaAssistance", !data.withVisaAssistance)}
                    title="Assistance visa"
                    desc="Accompagnement des démarches administratives"
                  />
                </div>
              </div>
            )}

            {/* Ticket flexibility */}
            {isTicket && (
              <ChipGroup
                label="Flexibilité souhaitée"
                options={["Standard", "Flexible (modifiable)", "Assistance dédiée"] as const}
                value={data.flexibilityLevel as "Standard" | "Flexible (modifiable)" | "Assistance dédiée" | ""}
                onChange={(v) => update("flexibilityLevel", v)}
              />
            )}

            {/* Budget */}
            {(isCustom || isSpiritual) && (
              <ChipGroup label="Budget indicatif (par personne)" options={BUDGET_OPTIONS} value={data.budgetRange} onChange={(v) => update("budgetRange", v)} />
            )}

            {/* Message */}
            <div>
              <label htmlFor="sqf-msg" className="mb-1.5 block text-sm font-medium text-syanor-ink/75">
                Informations complémentaires
              </label>
              <textarea
                id="sqf-msg"
                rows={4}
                placeholder="Groupe famille, besoins particuliers, questions, demandes spécifiques…"
                value={data.message}
                onChange={(e) => update("message", e.target.value)}
                className="input-base resize-y"
              />
            </div>
          </div>
        )}

        {/* ── STEP 5: Contact info ── */}
        {step === 5 && (
          <div className="space-y-5">
            {/* Recap card */}
            <div className="rounded-2xl border border-syanor-gold/20 bg-gradient-to-r from-syanor-champagne/20 to-syanor-pearl/40 px-5 py-4">
              <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold">
                Récapitulatif de votre demande
              </p>
              <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5 text-sm">
                {data.serviceType && (
                  <><span className="text-syanor-ink/45">Service</span><span className="font-semibold text-syanor-ink">{data.serviceType}</span></>
                )}
                {data.selectedOffer && (
                  <><span className="text-syanor-ink/45">Offre</span><span className="font-semibold text-syanor-emerald">{data.selectedOffer}</span></>
                )}
                {data.departureCity && (
                  <><span className="text-syanor-ink/45">Départ</span><span className="font-medium text-syanor-ink">{data.departureCity}</span></>
                )}
                {data.destination && (
                  <><span className="text-syanor-ink/45">Destination</span><span className="font-medium text-syanor-ink">{data.destination}</span></>
                )}
                {data.departureDate && (
                  <><span className="text-syanor-ink/45">Date</span><span className="font-medium text-syanor-ink">{data.departureDate}</span></>
                )}
                <span className="text-syanor-ink/45">Voyageurs</span>
                <span className="font-medium text-syanor-ink">{data.travelers} {data.travelers === 1 ? "voyageur" : "voyageurs"}</span>
                {data.comfort && (
                  <><span className="text-syanor-ink/45">Confort</span><span className="font-medium text-syanor-ink">{data.comfort}</span></>
                )}
                {data.roomType && (
                  <><span className="text-syanor-ink/45">Chambre</span><span className="font-medium text-syanor-ink">{data.roomType}</span></>
                )}
              </div>
            </div>

            {/* Name */}
            <TextField
              id="sqf-name"
              label="Nom complet"
              value={data.fullName}
              onChange={(v) => update("fullName", v)}
              placeholder="Prénom Nom"
              required
              error={errors.fullName}
              autoComplete="name"
            />

            {/* Phone + email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField
                id="sqf-phone"
                label="Téléphone"
                type="tel"
                value={data.phone}
                onChange={(v) => update("phone", v)}
                placeholder="+33 6 00 00 00 00"
                required
                error={errors.phone}
                autoComplete="tel"
              />
              <TextField
                id="sqf-email"
                label="Email"
                type="email"
                value={data.email}
                onChange={(v) => update("email", v)}
                placeholder="votre@email.com"
                error={errors.email}
                autoComplete="email"
              />
            </div>

            {/* Contact method */}
            <ChipGroup
              label="Mode de contact préféré"
              options={CONTACT_METHODS}
              value={data.contactMethod}
              onChange={(v) => update("contactMethod", v)}
            />

            {/* Reassurance note */}
            <div className="flex items-start gap-3 rounded-xl border border-syanor-emerald/15 bg-syanor-emerald/4 px-4 py-3">
              <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-syanor-emerald/60" />
              <p className="text-xs text-syanor-ink/55 leading-relaxed">
                Un conseiller SYANOR VOYAGES reviendra vers vous avec une proposition adaptée à votre demande.
              </p>
            </div>
          </div>
        )}
      </div>{/* /step animated wrapper */}

      {/* ── Navigation ── */}
      <div className="mt-8 flex items-center justify-between gap-4 border-t border-syanor-gold/12 pt-6">
        {step > 1 ? (
          <button type="button" onClick={prevStep} className="btn-secondary">
            ← Retour
          </button>
        ) : (
          <div aria-hidden="true" />
        )}

        {step < 5 ? (
          <button type="button" onClick={nextStep} className="btn-primary">
            Continuer →
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitState === "loading"}
            className="btn-gold disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === "loading" ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                  <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Envoi en cours…
              </span>
            ) : (
              "Recevoir mon devis personnalisé"
            )}
          </button>
        )}
      </div>

      {/* Error state */}
      {submitState === "error" && (
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-red-500" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" strokeLinecap="round"/>
          </svg>
          <p className="text-sm text-red-700">
            {errorMsg || "Une erreur est survenue. Veuillez réessayer ou nous contacter directement."}
          </p>
        </div>
      )}

      {/* Privacy note */}
      <p className="mt-5 text-center text-xs text-syanor-ink/38">
        🔒 Vos informations sont utilisées uniquement pour traiter votre demande.
      </p>
    </form>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PUBLIC EXPORT
───────────────────────────────────────────────────────────────── */
export default function SmartQuoteForm({ embedded = false }: { embedded?: boolean }) {
  const inner = (
    <div className="rounded-3xl border border-syanor-gold/20 bg-syanor-ivory p-6 shadow-[0_8px_48px_rgba(6,63,51,0.09),0_2px_16px_rgba(6,63,51,0.05)] sm:p-8">
      <Suspense fallback={<div className="h-64 animate-pulse rounded-2xl bg-syanor-pearl" />}>
        <SmartQuoteFormInner />
      </Suspense>
    </div>
  );

  if (embedded) return inner;

  return (
    <section id="quote" className="section-pad scroll-mt-20 bg-syanor-pearl">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        {inner}
      </div>
    </section>
  );
}
