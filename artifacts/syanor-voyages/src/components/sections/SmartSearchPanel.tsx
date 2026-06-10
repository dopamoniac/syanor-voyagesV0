import { useState } from "react";
import Link from "@/components/Link";
import { quoteUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { departureCities } from "@/data/cities";
import { omraMonths } from "@/data/months";

type ServiceKey = "Omra" | "Billet avion" | "Billet bateau" | "Séjour sur mesure" | "Voyage organisé";

const services: { key: ServiceKey; icon: string; label: string }[] = [
  { key: "Omra", icon: "🕌", label: "Omra & Hajj" },
  { key: "Billet avion", icon: "✈️", label: "Billet avion" },
  { key: "Billet bateau", icon: "⚓", label: "Billet bateau" },
  { key: "Voyage organisé", icon: "🗺️", label: "Voyage organisé" },
  { key: "Séjour sur mesure", icon: "✨", label: "Sur mesure" },
];

export default function SmartSearchPanel() {
  const [service, setService] = useState<ServiceKey>("Omra");
  const [city, setCity] = useState("");
  const [month, setMonth] = useState("");

  const href = quoteUrl({
    service,
    city: city || undefined,
    month: month || undefined,
  });

  return (
    <section className="relative z-10 -mt-8 mx-auto max-w-5xl px-4 md:px-8">
      <div className="rounded-2xl border border-syanor-gold/20 bg-white/95 shadow-card-hover backdrop-blur-sm">
        {/* Service tabs */}
        <div className="flex flex-wrap gap-1 border-b border-syanor-gold/15 p-4">
          {services.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setService(s.key)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all",
                service === s.key
                  ? "bg-syanor-emerald text-syanor-ivory shadow-sm"
                  : "text-syanor-ink/65 hover:bg-syanor-emerald/8 hover:text-syanor-emerald"
              )}
            >
              <span aria-hidden="true">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Fields row */}
        <div className="grid gap-3 p-4 sm:grid-cols-[1fr_1fr_auto]">
          {/* City */}
          <div>
            <label className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-wider text-syanor-gold">
              Ville de départ
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-xl border border-syanor-gold/25 bg-syanor-ivory px-3 py-2.5 text-sm text-syanor-ink focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10"
            >
              <option value="">Toutes les villes</option>
              {departureCities.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} ({c.airportCode}){!c.confirmed ? " — sur demande" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Month (only for Omra) */}
          <div>
            <label className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-wider text-syanor-gold">
              {service === "Omra" ? "Mois de départ" : "Période souhaitée"}
            </label>
            {service === "Omra" ? (
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full rounded-xl border border-syanor-gold/25 bg-syanor-ivory px-3 py-2.5 text-sm text-syanor-ink focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10"
              >
                <option value="">Tous les mois</option>
                {omraMonths.map((m) => (
                  <option key={`${m.year}-${m.slug}`} value={m.slug}>
                    {m.labelFull}
                    {m.departureCount > 0 ? ` — ${m.departureCount} départ${m.departureCount > 1 ? "s" : ""}` : ""}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                placeholder="Ex. juillet 2026"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full rounded-xl border border-syanor-gold/25 bg-syanor-ivory px-3 py-2.5 text-sm text-syanor-ink placeholder:text-syanor-ink/35 focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10"
              />
            )}
          </div>

          {/* CTA */}
          <div className="flex items-end">
            <Link
              href={href}
              className="btn-primary w-full justify-center sm:w-auto whitespace-nowrap"
            >
              Obtenir un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
