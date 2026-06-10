import { useState, useEffect, Suspense } from "react";
import { useSearch } from "wouter";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { departureCities } from "@/data/cities";
import type { ComfortLevel, ServiceCategory, TransportType } from "@/types";

/* ─────────── Types ─────────── */
type SubmitState = "idle" | "loading" | "success" | "error";

interface FormData {
  serviceType: ServiceCategory | "";
  departureCity: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  transport: TransportType | "";
  travelers: number;
  comfort: ComfortLevel | "";
  selectedOffer: string;
  withFormation: boolean;
  withZiyarat: boolean;
  budgetRange: string;
  message: string;
  fullName: string;
  phone: string;
  email: string;
}

const initialData: FormData = {
  serviceType: "",
  departureCity: "",
  destination: "",
  departureDate: "",
  returnDate: "",
  transport: "",
  travelers: 1,
  comfort: "",
  selectedOffer: "",
  withFormation: false,
  withZiyarat: true,
  budgetRange: "",
  message: "",
  fullName: "",
  phone: "",
  email: "",
};

/* ─────────── Constants ─────────── */
const SERVICE_OPTIONS: { key: ServiceCategory; icon: string; label: string; desc: string }[] = [
  { key: "Omra", icon: "🕌", label: "Omra", desc: "Petit pèlerinage, toute l'année" },
  { key: "Hajj", icon: "🕋", label: "Hajj", desc: "Grand pèlerinage annuel" },
  { key: "Omra Plus", icon: "🌙", label: "Omra Plus", desc: "Séjour prolongé, 21–34 jours" },
  { key: "Ramadan", icon: "✨", label: "Ramadan", desc: "Omra pendant le mois sacré" },
  { key: "Billet avion", icon: "✈️", label: "Billet avion", desc: "Vol international" },
  { key: "Billet bateau", icon: "⚓", label: "Billet bateau", desc: "Ferry & traversées" },
  { key: "Voyage organisé", icon: "🗺️", label: "Voyage organisé", desc: "Circuit & séjour groupe" },
  { key: "Séjour sur mesure", icon: "⭐", label: "Sur mesure", desc: "Voyage entièrement personnalisé" },
  { key: "Pack personnalisé", icon: "🎁", label: "Pack complet", desc: "Billet + hôtel + transferts" },
];

const COMFORT_OPTIONS: ComfortLevel[] = ["Standard", "Premium", "VIP"];
const TRANSPORT_OPTIONS: TransportType[] = ["Avion", "Bateau", "Mixte", "Sur mesure"];
const BUDGET_OPTIONS = ["< 1 000 €", "1 000 – 1 500 €", "1 500 – 2 500 €", "2 500 – 4 000 €", "> 4 000 €"];

/* ─────────── Progress bar ─────────── */
const STEP_LABELS = ["Service", "Voyage", "Options", "Contact"];

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
      {/* connector line */}
      <div className="relative -top-11 mx-auto flex h-0.5 max-w-[80%] overflow-hidden rounded-full bg-syanor-champagne/60">
        <div
          className="h-full bg-syanor-emerald transition-all duration-500"
          style={{ width: `${((step - 1) / 3) * 100}%` }}
        />
      </div>
    </div>
  );
}

/* ─────────── Shared field styles ─────────── */
const inputCls =
  "w-full rounded-xl border border-syanor-gold/30 bg-white px-4 py-3 text-sm text-syanor-ink min-h-[44px] focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10";
const labelCls = "mb-1.5 block text-sm font-medium text-syanor-ink/80";

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
      <span className={labelCls}>{label}</span>
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

/* ─────────── Inner form (uses URL prefill) ─────────── */
function SmartQuoteFormInner() {
  const search = useSearch();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Prefill from URL params on mount
  useEffect(() => {
    const sp = new URLSearchParams(search);
    setData((d) => ({
      ...d,
      serviceType: (sp.get("service") as ServiceCategory) || d.serviceType,
      selectedOffer: sp.get("offer") || d.selectedOffer,
      destination: sp.get("destination") || d.destination,
      transport: (sp.get("transport") as TransportType) || d.transport,
      comfort: (sp.get("comfort") as ComfortLevel) || d.comfort,
      departureCity: sp.get("city") || d.departureCity,
    }));
    if (sp.get("service")) setStep(2);
  }, [search]);

  const update = <K extends keyof FormData>(key: K, val: FormData[K]) =>
    setData((d) => ({ ...d, [key]: val }));

  /* ── Service helpers ── */
  const isSpiritual =
    data.serviceType === "Omra" ||
    data.serviceType === "Hajj" ||
    data.serviceType === "Omra Plus" ||
    data.serviceType === "Ramadan";
  const isTicket =
    data.serviceType === "Billet avion" || data.serviceType === "Billet bateau";
  const isCustom =
    data.serviceType === "Séjour sur mesure" ||
    data.serviceType === "Pack personnalisé" ||
    data.serviceType === "Voyage organisé";

  /* ── Validation per step ── */
  function validateStep(s: number): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (s === 1 && !data.serviceType) e.serviceType = "Sélectionnez un service";
    if (s === 2) {
      if (!data.departureCity.trim()) e.departureCity = "Indiquez votre ville de départ";
      if (!data.departureDate) e.departureDate = "Indiquez une date de départ";
    }
    if (s === 4) {
      if (!data.fullName.trim()) e.fullName = "Nom requis";
      if (!data.phone.trim()) e.phone = "Téléphone requis";
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = "Email invalide";
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

  /* ── Submit ── */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(4)) return;
    setSubmitState("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
          Nous vous contactons rapidement avec une proposition adaptée.
        </p>
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
                onClick={() => { update("serviceType", svc.key); setErrors({}); }}
                className={cn(
                  "flex flex-col items-start rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5",
                  data.serviceType === svc.key
                    ? "border-syanor-emerald bg-syanor-emerald/5 shadow-sm ring-1 ring-syanor-emerald/30"
                    : "border-syanor-gold/20 bg-white hover:border-syanor-gold/40 hover:shadow-sm"
                )}
              >
                <span className="text-2xl" aria-hidden="true">{svc.icon}</span>
                <span className="mt-2 font-semibold text-syanor-ink text-sm">{svc.label}</span>
                <span className="mt-0.5 text-[0.68rem] text-syanor-ink/50 leading-snug">{svc.desc}</span>
                {data.serviceType === svc.key && (
                  <span className="mt-2 text-[0.65rem] font-bold uppercase tracking-wider text-syanor-emerald">
                    ✓ Sélectionné
                  </span>
                )}
              </button>
            ))}
          </div>
          {errors.serviceType && (
            <p className="mt-3 text-sm text-red-600">{errors.serviceType}</p>
          )}
        </div>
      )}

      {/* ── STEP 2: Trip details ── */}
      {step === 2 && (
        <div className="space-y-5">
          <p className="font-playfair text-lg text-syanor-ink">
            Détails de votre voyage
            {data.serviceType && (
              <span className="ml-2 text-sm font-normal text-syanor-gold">— {data.serviceType}</span>
            )}
          </p>

          {/* Departure city */}
          <div>
            <label htmlFor="sqf-city" className={labelCls}>
              Ville de départ *
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

          {/* Destination (hidden for billets / spiritual) */}
          {(isCustom || data.serviceType === "Voyage organisé") && (
            <div>
              <label htmlFor="sqf-dest" className={labelCls}>
                Destination souhaitée
              </label>
              <input
                id="sqf-dest"
                type="text"
                placeholder="Ex. Turquie, Andalousie, Maroc…"
                value={data.destination}
                onChange={(e) => update("destination", e.target.value)}
                className={inputCls}
              />
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
          </div>

          {/* Travelers */}
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
        </div>
      )}

      {/* ── STEP 3: Options & comfort ── */}
      {step === 3 && (
        <div className="space-y-6">
          <p className="font-playfair text-lg text-syanor-ink">Vos préférences &amp; options</p>

          {/* Comfort (spiritual + custom + organized) */}
          {(isSpiritual || isCustom) && (
            <ChipGroup
              label="Niveau de confort"
              options={COMFORT_OPTIONS}
              value={data.comfort}
              onChange={(v) => update("comfort", v)}
            />
          )}

          {/* Transport (not for spiritual air tickets) */}
          {!isTicket && (
            <ChipGroup
              label="Mode de transport préféré"
              options={TRANSPORT_OPTIONS}
              value={data.transport}
              onChange={(v) => update("transport", v)}
            />
          )}

          {/* Spiritual extras */}
          {isSpiritual && (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-syanor-gold/20 bg-white p-4 hover:border-syanor-gold/40 transition">
                <input
                  type="checkbox"
                  checked={data.withFormation}
                  onChange={(e) => update("withFormation", e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded accent-syanor-emerald"
                />
                <div>
                  <p className="text-sm font-medium text-syanor-ink">Formation pré-départ</p>
                  <p className="mt-0.5 text-xs text-syanor-ink/55">Préparation des rites, lieux et pratiques</p>
                </div>
              </label>
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-syanor-gold/20 bg-white p-4 hover:border-syanor-gold/40 transition">
                <input
                  type="checkbox"
                  checked={data.withZiyarat}
                  onChange={(e) => update("withZiyarat", e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded accent-syanor-emerald"
                />
                <div>
                  <p className="text-sm font-medium text-syanor-ink">Ziyarat accompagnée</p>
                  <p className="mt-0.5 text-xs text-syanor-ink/55">Visites des lieux saints de Médine &amp; Makkah</p>
                </div>
              </label>
            </div>
          )}

          {/* Budget range (custom / organized) */}
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

          {/* Ferry vehicle note */}
          {data.serviceType === "Billet bateau" && (
            <div className="rounded-xl border border-syanor-gold/20 bg-syanor-champagne/30 p-4">
              <p className="text-sm font-medium text-syanor-ink">🚗 Option véhicule</p>
              <p className="mt-1 text-xs text-syanor-ink/65">
                Précisez dans votre message si vous souhaitez embarquer un véhicule (type, dimensions).
              </p>
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
              placeholder="Tout détail utile : groupe famille, besoins particuliers, offre présélectionnée…"
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
          <div className="rounded-xl border border-syanor-gold/20 bg-syanor-champagne/30 px-5 py-4 text-sm text-syanor-ink/70">
            <p className="font-medium text-syanor-ink mb-2">Récapitulatif</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <span className="text-syanor-ink/50">Service</span>
              <span className="font-medium text-syanor-ink">{data.serviceType || "—"}</span>
              <span className="text-syanor-ink/50">Départ</span>
              <span className="font-medium text-syanor-ink">{data.departureCity || "—"}</span>
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
              <label htmlFor="sqf-email" className={labelCls}>Email</label>
              <input
                id="sqf-email"
                type="email"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className={cn(inputCls, errors.email && "border-red-400")}
                placeholder="votre@email.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
          </div>
        </div>
      )}

      {/* ── Navigation buttons ── */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="btn-secondary"
          >
            ← Retour
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={nextStep}
            className="btn-primary"
          >
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
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
          {errorMsg ? ` (${errorMsg})` : ""}
        </p>
      )}

      <p className="mt-5 text-center text-xs text-syanor-ink/50">
        🔒 Vos informations sont utilisées uniquement pour traiter votre demande.
      </p>
    </form>
  );
}

/* ─────────── Public export ─────────── */
export default function SmartQuoteForm({ withHeader = true }: { withHeader?: boolean }) {
  return (
    <section id="quote" className="section-pad scroll-mt-28 bg-syanor-pearl">
      <div className="mx-auto max-w-2xl px-6 md:px-8">
        {withHeader && (
          <SectionHeader
            eyebrow="Devis personnalisé"
            title="Demandez votre devis en 4 étapes."
            subtitle="Service, détails du voyage, options, coordonnées — nous revenons vers vous rapidement."
          />
        )}
        <Suspense fallback={<div className="mt-10 h-64 animate-pulse rounded-2xl bg-syanor-ivory" />}>
          <SmartQuoteFormInner />
        </Suspense>
      </div>
    </section>
  );
}
