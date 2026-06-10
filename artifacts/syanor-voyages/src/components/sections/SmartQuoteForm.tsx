import { useState, useEffect, Suspense } from "react";
import { useSearch } from "wouter";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "@/components/Link";
import { departureCities } from "@/data/cities";
import type { ComfortLevel, ServiceCategory, TransportType } from "@/types";

/* ─── Types ─── */
type SubmitState = "idle" | "loading" | "success" | "error";
type ContactMethod = "Téléphone" | "WhatsApp" | "Email";
type FlightType = "Aller-retour" | "Aller simple";
type CabinClass = "Économique" | "Affaires" | "Première";
type RoomType = "Quadruple" | "Triple" | "Double" | "Individuelle";

interface FormData {
  serviceType: ServiceCategory | "Visa" | "";
  /* Step 2 — trip details (per service) */
  departureCity: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  travelers: number;
  transport: TransportType | "";
  /* Billet avion extras */
  flightType: FlightType | "";
  cabinClass: CabinClass | "";
  /* Billet bateau extras */
  withVehicle: boolean;
  vehicleType: string;
  /* Step 3 — options */
  comfort: ComfortLevel | "";
  roomType: RoomType | "";
  withFormation: boolean;
  withZiyarat: boolean;
  withVisaAssistance: boolean;
  withPrivateTransfers: boolean;
  flexibilityLevel: string;
  budgetRange: string;
  /* Step 4 — contact */
  fullName: string;
  phone: string;
  email: string;
  contactMethod: ContactMethod | "";
  message: string;
  /* Prefill context */
  selectedOffer: string;
  month: string;
}

const initialData: FormData = {
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

/* ─── Service catalog (10 entries per spec) ─── */
const SERVICE_OPTIONS: { key: ServiceCategory | "Visa"; icon: string; label: string; desc: string }[] = [
  { key: "Omra", icon: "🕌", label: "Omra", desc: "Petit pèlerinage, toute l'année" },
  { key: "Hajj", icon: "🕋", label: "Hajj", desc: "Grand pèlerinage annuel" },
  { key: "Omra Plus", icon: "🌙", label: "Omra Plus", desc: "Séjour prolongé 21–34 jours" },
  { key: "Ramadan", icon: "✨", label: "Ramadan", desc: "Omra pendant le mois sacré" },
  { key: "Billet avion", icon: "✈️", label: "Billet avion", desc: "Vol international" },
  { key: "Billet bateau", icon: "⚓", label: "Billet bateau", desc: "Ferry & traversées" },
  { key: "Voyage organisé", icon: "🗺️", label: "Voyage organisé", desc: "Circuit & séjour groupe" },
  { key: "Séjour sur mesure", icon: "⭐", label: "Sur mesure", desc: "Voyage entièrement personnalisé" },
  { key: "Pack personnalisé", icon: "🎁", label: "Pack VIP", desc: "Billet + hôtel + transferts" },
  { key: "Visa", icon: "🛂", label: "Visa", desc: "Assistance & démarches administratives" },
];

const COMFORT_OPTIONS: ComfortLevel[] = ["Standard", "Premium", "VIP"];
const ROOM_TYPES: RoomType[] = ["Quadruple", "Triple", "Double", "Individuelle"];
const TRANSPORT_OPTIONS: TransportType[] = ["Avion", "Bateau", "Mixte", "Sur mesure"];
const BUDGET_OPTIONS = ["< 1 000 €", "1 000 – 1 500 €", "1 500 – 2 500 €", "2 500 – 4 000 €", "> 4 000 €"];
const CABIN_OPTIONS: CabinClass[] = ["Économique", "Affaires", "Première"];
const FLIGHT_TYPE_OPTIONS: FlightType[] = ["Aller-retour", "Aller simple"];
const CONTACT_METHODS: ContactMethod[] = ["Téléphone", "WhatsApp", "Email"];
const STEP_LABELS = ["Service", "Voyage", "Options", "Contact"];

/* ─── Progress bar ─── */
function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {STEP_LABELS.map((label, i) => {
          const idx = i + 1;
          const done = idx < step;
          const active = idx === step;
          return (
            <div key={label} className="flex flex-1 flex-col items-center">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all",
                  done && "bg-syanor-gold text-syanor-royal",
                  active && "bg-syanor-emerald text-syanor-ivory ring-2 ring-syanor-emerald/30 ring-offset-2",
                  !done && !active && "bg-syanor-champagne/60 text-syanor-ink/40"
                )}
              >
                {done ? "✓" : idx}
              </div>
              <span
                className={cn(
                  "mt-1.5 text-[0.65rem] font-medium uppercase tracking-wider",
                  active ? "text-syanor-emerald" : "text-syanor-ink/40"
                )}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="relative -top-11 mx-auto flex h-0.5 max-w-[80%] overflow-hidden rounded-full bg-syanor-champagne/60">
        <div
          className="h-full bg-syanor-emerald transition-all duration-500"
          style={{ width: `${((step - 1) / 3) * 100}%` }}
        />
      </div>
    </div>
  );
}

/* ─── Reusable chip group ─── */
function ChipGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T | "";
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <span className="mb-1.5 block text-sm font-medium text-syanor-ink/80">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              value === opt
                ? "border-syanor-emerald bg-syanor-emerald text-syanor-champagne"
                : "border-syanor-gold/30 bg-white text-syanor-ink/70 hover:border-syanor-gold"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-syanor-gold/30 bg-white px-4 py-3 text-sm text-syanor-ink min-h-[44px] focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10";
const labelCls = "mb-1.5 block text-sm font-medium text-syanor-ink/80";

/* ─── Inner form ─── */
function SmartQuoteFormInner() {
  const search = useSearch();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  /* URL prefill */
  useEffect(() => {
    const sp = new URLSearchParams(search);
    const service = sp.get("service");
    const offer = sp.get("offer");
    const city = sp.get("city");
    const month = sp.get("month");
    const comfort = sp.get("comfort");
    const transport = sp.get("transport");
    const destination = sp.get("destination");
    const departureDate = sp.get("departureDate");

    setData((d) => ({
      ...d,
      serviceType: service ? (service as ServiceCategory) : d.serviceType,
      selectedOffer: offer ?? d.selectedOffer,
      departureCity: city
        ? (departureCities.find((c) => c.slug === city)?.name ?? city)
        : d.departureCity,
      month: month ?? d.month,
      comfort: (comfort as ComfortLevel) || d.comfort,
      transport: (transport as TransportType) || d.transport,
      destination: destination ?? d.destination,
      departureDate: departureDate ?? d.departureDate,
    }));

    if (service) setStep(2);
  }, [search]);

  const update = <K extends keyof FormData>(key: K, val: FormData[K]) =>
    setData((d) => ({ ...d, [key]: val }));

  /* Service helpers */
  const isSpiritual =
    data.serviceType === "Omra" ||
    data.serviceType === "Hajj" ||
    data.serviceType === "Omra Plus" ||
    data.serviceType === "Ramadan";
  const isFlightTicket = data.serviceType === "Billet avion";
  const isBoatTicket = data.serviceType === "Billet bateau";
  const isTicket = isFlightTicket || isBoatTicket;
  const isCustom =
    data.serviceType === "Séjour sur mesure" ||
    data.serviceType === "Pack personnalisé" ||
    data.serviceType === "Voyage organisé";
  const isVisa = data.serviceType === "Visa";

  /* Per-step validation */
  function validateStep(s: number): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (s === 1 && !data.serviceType) e.serviceType = "Sélectionnez un service";
    if (s === 2) {
      if (!data.departureCity.trim()) e.departureCity = "Indiquez votre ville de départ";
      if (!data.departureDate) e.departureDate = "Indiquez une date de départ";
    }
    if (s === 4) {
      if (!data.fullName.trim()) e.fullName = "Votre nom est requis";
      if (!data.phone.trim()) e.phone = "Votre téléphone est requis";
      if (!data.email.trim()) e.email = "Votre email est requis";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Email invalide";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function nextStep() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 4));
  }
  function prevStep() {
    setStep((s) => Math.max(s - 1, 1));
    setErrors({});
  }

  /* Submit */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(4)) return;
    setSubmitState("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          serviceType: data.serviceType === "Visa" ? "Séjour sur mesure" : data.serviceType,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || "Erreur inconnue");
      setSubmitState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Erreur");
      setSubmitState("error");
    }
  }

  /* ── Success state ── */
  if (submitState === "success") {
    return (
      <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 font-playfair text-xl text-syanor-ink">Votre demande a bien été reçue.</h3>
        <p className="mt-2 text-sm text-syanor-ink/70">
          Nous vous contactons rapidement avec une proposition adaptée à votre projet.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/33785734727"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary gap-2"
          >
            <span aria-hidden="true">💬</span>
            Continuer sur WhatsApp
          </a>
          <Link href="/offres" className="btn-secondary">
            Voir nos offres & départs
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 divide-x divide-syanor-gold/20 rounded-xl border border-syanor-gold/20 bg-white p-4 text-sm text-syanor-ink/60">
          <p className="pr-4">📞 07 85 73 47 27</p>
          <p className="pl-4">📧 syanor.voyages@gmail.com</p>
        </div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit} className="mt-10" noValidate>
      <ProgressBar step={step} />

      {/* ── STEP 1: Service selection ── */}
      {step === 1 && (
        <div>
          <p className="mb-5 font-playfair text-lg text-syanor-ink">
            Quel type de voyage souhaitez-vous ?
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SERVICE_OPTIONS.map((svc) => (
              <button
                key={svc.key}
                type="button"
                onClick={() => {
                  update("serviceType", svc.key as ServiceCategory | "Visa");
                  setErrors({});
                }}
                className={cn(
                  "flex flex-col items-start rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5",
                  data.serviceType === svc.key
                    ? "border-syanor-gold bg-syanor-gold/5 shadow-sm ring-1 ring-syanor-gold/40"
                    : "border-syanor-gold/20 bg-white hover:border-syanor-gold/40 hover:shadow-sm"
                )}
              >
                <span className="text-2xl" aria-hidden="true">{svc.icon}</span>
                <span className="mt-2 font-semibold text-syanor-ink text-sm">{svc.label}</span>
                <span className="mt-0.5 text-[0.68rem] text-syanor-ink/50 leading-snug">{svc.desc}</span>
              </button>
            ))}
          </div>
          {errors.serviceType && (
            <p className="mt-3 text-sm text-red-600">{errors.serviceType}</p>
          )}
        </div>
      )}

      {/* ── STEP 2: Trip details (per service) ── */}
      {step === 2 && (
        <div className="space-y-5">
          <p className="font-playfair text-lg text-syanor-ink">
            Détails de votre voyage
            {data.serviceType && (
              <span className="ml-2 text-sm font-normal text-syanor-gold">— {data.serviceType}</span>
            )}
          </p>

          {/* Pre-selected offer badge */}
          {data.selectedOffer && (
            <div className="rounded-xl border border-syanor-gold/20 bg-syanor-champagne/30 px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-syanor-gold">Offre sélectionnée : </span>
              <span className="font-medium text-syanor-emerald">{data.selectedOffer}</span>
            </div>
          )}

          {/* Departure city (all services) */}
          <div>
            <label htmlFor="sqf-city" className={labelCls}>
              {isBoatTicket ? "Port / ville de départ *" : "Ville de départ *"}
            </label>
            <select
              id="sqf-city"
              value={data.departureCity}
              onChange={(e) => update("departureCity", e.target.value)}
              className={cn(inputCls, errors.departureCity && "border-red-400")}
            >
              <option value="">Sélectionnez votre ville…</option>
              {departureCities.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name} ({c.airportCode}){!c.confirmed ? " — sur demande" : ""}
                </option>
              ))}
              <option value="Autre">Autre ville (préciser dans le message)</option>
            </select>
            {errors.departureCity && (
              <p className="mt-1 text-xs text-red-600">{errors.departureCity}</p>
            )}
          </div>

          {/* Destination (not for spiritual) */}
          {(!isSpiritual) && (
            <div>
              <label htmlFor="sqf-dest" className={labelCls}>
                Destination *
              </label>
              <input
                id="sqf-dest"
                type="text"
                placeholder={
                  isFlightTicket
                    ? "Ex. Tunis, Casablanca, Istanbul…"
                    : isBoatTicket
                    ? "Ex. Tunis, Alger, Barcelone…"
                    : "Ex. Turquie, Andalousie, Maroc…"
                }
                value={data.destination}
                onChange={(e) => update("destination", e.target.value)}
                className={inputCls}
              />
            </div>
          )}

          {/* Billet avion: flight type + cabin */}
          {isFlightTicket && (
            <div className="grid gap-4 sm:grid-cols-2">
              <ChipGroup
                label="Type de vol"
                options={FLIGHT_TYPE_OPTIONS}
                value={data.flightType}
                onChange={(v) => update("flightType", v)}
              />
              <ChipGroup
                label="Classe"
                options={CABIN_OPTIONS}
                value={data.cabinClass}
                onChange={(v) => update("cabinClass", v)}
              />
            </div>
          )}

          {/* Billet bateau: vehicle option */}
          {isBoatTicket && (
            <div className="rounded-xl border border-syanor-gold/20 bg-white p-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={data.withVehicle}
                  onChange={(e) => update("withVehicle", e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded accent-syanor-emerald"
                />
                <div>
                  <p className="text-sm font-medium text-syanor-ink">🚗 Embarquement véhicule</p>
                  <p className="mt-0.5 text-xs text-syanor-ink/55">Voiture, camping-car, moto…</p>
                </div>
              </label>
              {data.withVehicle && (
                <input
                  type="text"
                  placeholder="Type et dimensions du véhicule"
                  value={data.vehicleType}
                  onChange={(e) => update("vehicleType", e.target.value)}
                  className={cn(inputCls, "mt-3")}
                />
              )}
            </div>
          )}

          {/* Dates */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="sqf-dep" className={labelCls}>
                Date de départ souhaitée *
              </label>
              <input
                id="sqf-dep"
                type="date"
                value={data.departureDate}
                onChange={(e) => update("departureDate", e.target.value)}
                className={cn(inputCls, errors.departureDate && "border-red-400")}
              />
              {errors.departureDate && (
                <p className="mt-1 text-xs text-red-600">{errors.departureDate}</p>
              )}
            </div>
            {!isVisa && (
              <div>
                <label htmlFor="sqf-ret" className={labelCls}>
                  Date de retour souhaitée
                </label>
                <input
                  id="sqf-ret"
                  type="date"
                  value={data.returnDate}
                  onChange={(e) => update("returnDate", e.target.value)}
                  className={inputCls}
                />
              </div>
            )}
          </div>

          {/* Travelers */}
          {!isVisa && (
            <div>
              <span className={labelCls}>Nombre de voyageurs</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Retirer un voyageur"
                  onClick={() => update("travelers", Math.max(1, data.travelers - 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-syanor-gold/40 text-lg text-syanor-emerald hover:bg-syanor-emerald hover:text-syanor-champagne transition"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold text-syanor-ink">{data.travelers}</span>
                <button
                  type="button"
                  aria-label="Ajouter un voyageur"
                  onClick={() => update("travelers", Math.min(30, data.travelers + 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-syanor-gold/40 text-lg text-syanor-emerald hover:bg-syanor-emerald hover:text-syanor-champagne transition"
                >
                  +
                </button>
                <span className="ml-1 text-xs text-syanor-ink/50">
                  {data.travelers === 1 ? "voyageur" : "voyageurs"}
                </span>
              </div>
            </div>
          )}

          {/* Transport (custom / organized only) */}
          {isCustom && (
            <ChipGroup
              label="Mode de transport préféré"
              options={TRANSPORT_OPTIONS}
              value={data.transport}
              onChange={(v) => update("transport", v)}
            />
          )}
        </div>
      )}

      {/* ── STEP 3: Options & comfort ── */}
      {step === 3 && (
        <div className="space-y-6">
          <p className="font-playfair text-lg text-syanor-ink">Vos préférences &amp; options</p>

          {/* Comfort (spiritual + custom) */}
          {(isSpiritual || isCustom) && (
            <ChipGroup
              label="Niveau de confort"
              options={COMFORT_OPTIONS}
              value={data.comfort}
              onChange={(v) => update("comfort", v)}
            />
          )}

          {/* Room type (spiritual) */}
          {isSpiritual && (
            <ChipGroup
              label="Type de chambre"
              options={ROOM_TYPES}
              value={data.roomType}
              onChange={(v) => update("roomType", v)}
            />
          )}

          {/* Spiritual checkboxes */}
          {isSpiritual && (
            <div className="grid gap-3 sm:grid-cols-2">
              {(
                [
                  ["withFormation", "🎓 Formation pré-départ", "Préparation des rites avant le départ"],
                  ["withZiyarat", "🌿 Ziyarat accompagnée", "Visites des lieux saints de Médine & Makkah"],
                  ["withVisaAssistance", "🛂 Assistance visa", "Accompagnement pour le visa Omra/Hajj"],
                  ["withPrivateTransfers", "🚌 Transferts privés", "Au lieu des transferts en groupe"],
                ] as const
              ).map(([field, title, desc]) => (
                <label
                  key={field}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-syanor-gold/20 bg-white p-4 hover:border-syanor-gold/40 transition"
                >
                  <input
                    type="checkbox"
                    checked={data[field] as boolean}
                    onChange={(e) => update(field, e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded accent-syanor-emerald"
                  />
                  <div>
                    <p className="text-sm font-medium text-syanor-ink">{title}</p>
                    <p className="mt-0.5 text-xs text-syanor-ink/55">{desc}</p>
                  </div>
                </label>
              ))}
            </div>
          )}

          {/* Billet flexibility */}
          {isTicket && (
            <div>
              <span className={labelCls}>Flexibilité souhaitée</span>
              <div className="flex flex-wrap gap-2">
                {["Standard", "Flexible (modifiable)", "Assistance dédiée"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => update("flexibilityLevel", opt)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition",
                      data.flexibilityLevel === opt
                        ? "border-syanor-emerald bg-syanor-emerald text-syanor-champagne"
                        : "border-syanor-gold/30 bg-white text-syanor-ink/70 hover:border-syanor-gold"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Budget (custom + spiritual) */}
          {(isCustom || isSpiritual) && (
            <div>
              <span className={labelCls}>Budget indicatif (par personne)</span>
              <div className="flex flex-wrap gap-2">
                {BUDGET_OPTIONS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => update("budgetRange", b)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition",
                      data.budgetRange === b
                        ? "border-syanor-emerald bg-syanor-emerald text-syanor-champagne"
                        : "border-syanor-gold/30 bg-white text-syanor-ink/70 hover:border-syanor-gold"
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message */}
          <div>
            <label htmlFor="sqf-msg" className={labelCls}>
              Informations complémentaires
            </label>
            <textarea
              id="sqf-msg"
              rows={4}
              placeholder="Tout détail utile : groupe famille, besoins particuliers, questions…"
              value={data.message}
              onChange={(e) => update("message", e.target.value)}
              className={cn(inputCls, "resize-y")}
            />
          </div>
        </div>
      )}

      {/* ── STEP 4: Contact info ── */}
      {step === 4 && (
        <div className="space-y-5">
          <p className="font-playfair text-lg text-syanor-ink">Vos coordonnées</p>

          {/* Summary card */}
          <div className="rounded-xl border border-syanor-gold/20 bg-syanor-champagne/30 px-5 py-4">
            <p className="mb-2 text-sm font-medium text-syanor-ink">Récapitulatif de votre demande</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <span className="text-syanor-ink/50">Service</span>
              <span className="font-medium text-syanor-ink">{data.serviceType || "—"}</span>
              <span className="text-syanor-ink/50">Départ</span>
              <span className="font-medium text-syanor-ink">{data.departureCity || "—"}</span>
              {data.destination && (
                <>
                  <span className="text-syanor-ink/50">Destination</span>
                  <span className="font-medium text-syanor-ink">{data.destination}</span>
                </>
              )}
              <span className="text-syanor-ink/50">Date</span>
              <span className="font-medium text-syanor-ink">{data.departureDate || "—"}</span>
              <span className="text-syanor-ink/50">Voyageurs</span>
              <span className="font-medium text-syanor-ink">{data.travelers}</span>
              {data.comfort && (
                <>
                  <span className="text-syanor-ink/50">Confort</span>
                  <span className="font-medium text-syanor-ink">{data.comfort}</span>
                </>
              )}
              {data.roomType && (
                <>
                  <span className="text-syanor-ink/50">Chambre</span>
                  <span className="font-medium text-syanor-ink">{data.roomType}</span>
                </>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="sqf-name" className={labelCls}>Nom complet *</label>
            <input
              id="sqf-name"
              type="text"
              required
              value={data.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className={cn(inputCls, errors.fullName && "border-red-400")}
              placeholder="Prénom Nom"
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="sqf-phone" className={labelCls}>Téléphone *</label>
              <input
                id="sqf-phone"
                type="tel"
                required
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={cn(inputCls, errors.phone && "border-red-400")}
                placeholder="+33 6 00 00 00 00"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="sqf-email" className={labelCls}>Email *</label>
              <input
                id="sqf-email"
                type="email"
                required
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className={cn(inputCls, errors.email && "border-red-400")}
                placeholder="votre@email.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Preferred contact method */}
          <ChipGroup
            label="Mode de contact préféré"
            options={CONTACT_METHODS}
            value={data.contactMethod}
            onChange={(v) => update("contactMethod", v)}
          />
        </div>
      )}

      {/* ── Navigation ── */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 1 ? (
          <button type="button" onClick={prevStep} className="btn-secondary">
            ← Retour
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button type="button" onClick={nextStep} className="btn-primary">
            Continuer →
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitState === "loading"}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
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

      {submitState === "error" && (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg || "Une erreur est survenue. Veuillez réessayer ou nous contacter directement."}
        </p>
      )}

      <p className="mt-5 text-center text-xs text-syanor-ink/50">
        🔒 Vos informations sont utilisées uniquement pour traiter votre demande.
      </p>
    </form>
  );
}

/* ─── Public export ─── */
export default function SmartQuoteForm({ withHeader = true }: { withHeader?: boolean }) {
  return (
    <section id="quote" className="section-pad scroll-mt-28 bg-syanor-pearl">
      <div className="mx-auto max-w-2xl px-6 md:px-8">
        {withHeader && (
          <SectionHeader
            eyebrow="Devis personnalisé"
            title="Demandez votre devis en 4 étapes."
            subtitle="Service, détails du voyage, options, coordonnées — nous revenons vers vous sous 24h."
          />
        )}
        <Suspense fallback={<div className="mt-10 h-64 animate-pulse rounded-2xl bg-syanor-ivory" />}>
          <SmartQuoteFormInner />
        </Suspense>
      </div>
    </section>
  );
}
