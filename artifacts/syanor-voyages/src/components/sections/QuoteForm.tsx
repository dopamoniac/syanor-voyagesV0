
import { Suspense } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { useQuoteForm } from "@/lib/useQuoteForm";
import type { ComfortLevel, ServiceCategory, TransportType } from "@/types";

const serviceOptions: ServiceCategory[] = [
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

const transportOptions: TransportType[] = ["Avion", "Bateau", "Mixte", "Sur mesure"];
const comfortOptions: ComfortLevel[] = ["Standard", "Premium", "VIP"];

const inputClass =
  "w-full rounded-xl border border-syanor-gold/30 bg-white px-4 py-3 text-sm text-syanor-ink min-h-[44px] focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10";
const labelClass = "mb-1.5 block text-sm font-medium text-syanor-ink/80";

function GroupTitle({ children }: { children: string }) {
  return (
    <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-syanor-gold">
      {children}
    </p>
  );
}

function QuoteFormInner() {
  const { data, update, state, errorMsg, submit } = useQuoteForm();

  // Conditional groups based on selected service category.
  const isTicketAir = data.serviceType === "Billet avion";
  const isTicketBoat = data.serviceType === "Billet bateau";
  const isSpiritual =
    data.serviceType === "Omra" ||
    data.serviceType === "Hajj" ||
    data.serviceType === "Omra Plus" ||
    data.serviceType === "Ramadan";
  const isCustom =
    data.serviceType === "Séjour sur mesure" ||
    data.serviceType === "Pack personnalisé";
  const isOrganized = data.serviceType === "Voyage organisé";

  if (state === "success") {
    return (
      <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 font-playfair text-xl text-syanor-ink">
          Votre demande a été reçue.
        </h3>
        <p className="mt-2 text-sm text-syanor-ink/70">
          Nous vous contactons rapidement.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="mt-10 rounded-2xl border border-syanor-gold/20 bg-syanor-ivory p-6 shadow-card md:p-8"
      noValidate
    >
      {/* GROUP 1 */}
      <GroupTitle>Vos coordonnées</GroupTitle>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="fullName" className={labelClass}>Nom complet *</label>
          <input id="fullName" type="text" required value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Téléphone *</label>
          <input id="phone" type="tel" required value={data.phone}
            onChange={(e) => update("phone", e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" type="email" required value={data.email}
            onChange={(e) => update("email", e.target.value)} className={inputClass} />
        </div>
      </div>

      <div className="my-7 gold-divider" />

      {/* GROUP 2 */}
      <GroupTitle>Votre demande</GroupTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="serviceType" className={labelClass}>Type de service *</label>
          <select id="serviceType" required value={data.serviceType}
            onChange={(e) => update("serviceType", e.target.value as ServiceCategory)}
            className={inputClass}>
            <option value="">Sélectionnez…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Offre sélectionnée</label>
          {data.selectedOffer ? (
            <span className="inline-flex min-h-[44px] items-center rounded-xl border border-syanor-gold/40 bg-syanor-champagne/50 px-4 py-3 text-sm font-medium text-syanor-emerald">
              {data.selectedOffer}
            </span>
          ) : (
            <span className="inline-flex min-h-[44px] items-center px-1 py-3 text-sm text-syanor-ink/40">
              Aucune offre présélectionnée
            </span>
          )}
        </div>
      </div>

      <div className="my-7 gold-divider" />

      {/* GROUP 3 — adaptive */}
      <GroupTitle>Votre voyage</GroupTitle>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="departureDate" className={labelClass}>Date de départ souhaitée</label>
          <input id="departureDate" type="date" value={data.departureDate}
            onChange={(e) => update("departureDate", e.target.value)} className={inputClass} />
        </div>
        {!isTicketAir && !isTicketBoat ? null : null}
        <div>
          <label htmlFor="returnDate" className={labelClass}>
            Date de retour souhaitée
          </label>
          <input id="returnDate" type="date" value={data.returnDate}
            onChange={(e) => update("returnDate", e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="departureCity" className={labelClass}>
            {isTicketBoat ? "Port / ville de départ *" : "Ville de départ *"}
          </label>
          <input id="departureCity" type="text" required value={data.departureCity}
            onChange={(e) => update("departureCity", e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="destination" className={labelClass}>
            {isOrganized ? "Destination / thème" : "Destination"}
          </label>
          <input id="destination" type="text" value={data.destination}
            onChange={(e) => update("destination", e.target.value)} className={inputClass} />
        </div>
      </div>

      {/* Transport chips (hidden for fixed-transport tickets) */}
      {!isTicketAir && !isTicketBoat && (
        <div className="mt-4">
          <span className={labelClass}>Transport</span>
          <div className="flex flex-wrap gap-2">
            {transportOptions.map((t) => (
              <button key={t} type="button" onClick={() => update("transport", t)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  data.transport === t
                    ? "border-syanor-emerald bg-syanor-emerald text-syanor-champagne"
                    : "border-syanor-gold/30 bg-white text-syanor-ink/70 hover:border-syanor-gold"
                )}>
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <span className={labelClass}>Nombre de voyageurs</span>
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Retirer un voyageur"
              onClick={() => update("travelers", Math.max(1, (data.travelers ?? 1) - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-syanor-gold/40 text-lg text-syanor-emerald hover:bg-syanor-emerald hover:text-syanor-champagne">
              −
            </button>
            <span className="w-8 text-center font-semibold text-syanor-ink">{data.travelers}</span>
            <button type="button" aria-label="Ajouter un voyageur"
              onClick={() => update("travelers", Math.min(20, (data.travelers ?? 1) + 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-syanor-gold/40 text-lg text-syanor-emerald hover:bg-syanor-emerald hover:text-syanor-champagne">
              +
            </button>
          </div>
        </div>
        {/* Comfort for spiritual/custom/organized */}
        {(isSpiritual || isCustom || isOrganized) && (
          <div>
            <span className={labelClass}>Niveau de confort</span>
            <div className="flex flex-wrap gap-2">
              {comfortOptions.map((c) => (
                <button key={c} type="button" onClick={() => update("comfort", c)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition",
                    data.comfort === c
                      ? "border-syanor-emerald bg-syanor-emerald text-syanor-champagne"
                      : "border-syanor-gold/30 bg-white text-syanor-ink/70 hover:border-syanor-gold"
                  )}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Service-specific hints */}
      {isTicketBoat && (
        <p className="mt-4 text-xs text-syanor-ink/55">
          Précisez dans votre message si vous souhaitez l&apos;option véhicule
          (type, dimensions).
        </p>
      )}
      {isSpiritual && (
        <p className="mt-4 text-xs text-syanor-ink/55">
          Indiquez votre intérêt pour la formation avant départ dans votre
          message.
        </p>
      )}

      <div className="my-7 gold-divider" />

      {/* GROUP 4 */}
      <GroupTitle>Message</GroupTitle>
      <div>
        <label htmlFor="message" className={labelClass}>Informations complémentaires</label>
        <textarea id="message" rows={4} value={data.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(inputClass, "resize-y")} />
      </div>

      {state === "error" && (
        <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Une erreur est survenue. Veuillez réessayer ou nous contacter
          directement.
          {errorMsg ? ` (${errorMsg})` : ""}
        </p>
      )}

      <button type="submit" disabled={state === "loading"}
        className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70">
        {state === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
              <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Envoi en cours…
          </span>
        ) : (
          "Recevoir mon devis"
        )}
      </button>

      <p className="mt-4 text-center text-xs text-syanor-ink/50">
        🔒 Vos informations sont utilisées uniquement pour traiter votre demande.
      </p>
    </form>
  );
}

export default function QuoteForm({
  withHeader = true,
}: {
  withHeader?: boolean;
}) {
  return (
    <section id="quote" className="section-pad scroll-mt-28 bg-syanor-pearl">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        {withHeader && (
          <SectionHeader
            eyebrow="Devis personnalisé"
            title="Demandez votre devis personnalisé."
            subtitle="Quelques informations suffisent pour commencer à construire votre voyage."
          />
        )}
        <Suspense fallback={<div className="mt-10 h-64 animate-pulse rounded-2xl bg-syanor-ivory" />}>
          <QuoteFormInner />
        </Suspense>
      </div>
    </section>
  );
}
