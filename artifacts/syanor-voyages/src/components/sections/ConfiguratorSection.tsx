
import { useState } from "react";
import Link from "@/components/Link";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn, quoteUrl } from "@/lib/utils";
import type { ComfortLevel, TransportType } from "@/types";

const transports: TransportType[] = ["Avion", "Bateau", "Mixte", "Sur mesure"];
const comforts: ComfortLevel[] = ["Standard", "Premium", "VIP"];

function ChipRow<T extends string>({
  options,
  value,
  onSelect,
}: {
  options: readonly T[];
  value: T | "";
  onSelect: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onSelect(opt)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition-all duration-200",
            value === opt
              ? "border-syanor-emerald bg-syanor-emerald text-syanor-champagne"
              : "border-syanor-gold/30 bg-white text-syanor-ink/70 hover:border-syanor-gold"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function YesNo({
  value,
  onSelect,
}: {
  value: boolean | null;
  onSelect: (v: boolean) => void;
}) {
  return (
    <div className="flex gap-2">
      {[
        { label: "Oui", val: true },
        { label: "Non", val: false },
      ].map((o) => (
        <button
          key={o.label}
          type="button"
          onClick={() => onSelect(o.val)}
          className={cn(
            "rounded-full border px-5 py-2 text-sm transition-all duration-200",
            value === o.val
              ? "border-syanor-emerald bg-syanor-emerald text-syanor-champagne"
              : "border-syanor-gold/30 bg-white text-syanor-ink/70 hover:border-syanor-gold"
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function ConfiguratorSection({
  service = "Séjour sur mesure",
}: {
  service?: "Séjour sur mesure" | "Pack personnalisé";
}) {
  const [destination, setDestination] = useState("");
  const [transport, setTransport] = useState<TransportType | "">("");
  const [comfort, setComfort] = useState<ComfortLevel | "">("");
  const [travelers, setTravelers] = useState(2);
  const [hotel, setHotel] = useState<boolean | null>(null);
  const [transfers, setTransfers] = useState<boolean | null>(null);
  const [guidance, setGuidance] = useState<boolean | null>(null);

  const hasSelection =
    destination || transport || comfort || hotel !== null || transfers !== null;

  const href = quoteUrl({
    service,
    destination: destination || undefined,
    transport: transport || undefined,
    comfort: comfort || undefined,
  });

  const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-3 border-b border-syanor-gold/15 py-5 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm font-medium text-syanor-ink/80">{label}</span>
      <div className="sm:max-w-[60%]">{children}</div>
    </div>
  );

  return (
    <section id="configurateur" className="section-pad scroll-mt-28 bg-syanor-pearl">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Configurateur sur mesure"
          title="Construisez un séjour qui vous ressemble."
          subtitle="Composez votre voyage : nous transformons vos préférences en proposition personnalisée."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-syanor-gold/20 bg-white p-6 shadow-card md:p-8">
            <Row label="Destination">
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Ex : Istanbul, Djeddah, Dubaï…"
                className="w-full rounded-xl border border-syanor-gold/30 bg-white px-4 py-3 text-sm focus:border-syanor-emerald focus:outline-none focus:ring-2 focus:ring-syanor-emerald/10"
              />
            </Row>
            <Row label="Transport">
              <ChipRow options={transports} value={transport} onSelect={setTransport} />
            </Row>
            <Row label="Confort">
              <ChipRow options={comforts} value={comfort} onSelect={setComfort} />
            </Row>
            <Row label="Voyageurs">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Retirer un voyageur"
                  onClick={() => setTravelers((t) => Math.max(1, t - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-syanor-gold/40 text-lg text-syanor-emerald hover:bg-syanor-emerald hover:text-syanor-champagne"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold text-syanor-ink">
                  {travelers}
                </span>
                <button
                  type="button"
                  aria-label="Ajouter un voyageur"
                  onClick={() => setTravelers((t) => Math.min(20, t + 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-syanor-gold/40 text-lg text-syanor-emerald hover:bg-syanor-emerald hover:text-syanor-champagne"
                >
                  +
                </button>
              </div>
            </Row>
            <Row label="Hôtel inclus">
              <YesNo value={hotel} onSelect={setHotel} />
            </Row>
            <Row label="Transferts">
              <YesNo value={transfers} onSelect={setTransfers} />
            </Row>
            <Row label="Accompagnement">
              <YesNo value={guidance} onSelect={setGuidance} />
            </Row>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-emerald p-7">
              <p className="eyebrow text-syanor-gold-soft">Résumé de voyage</p>
              <h3 className="mt-2 font-playfair text-xl text-syanor-ivory">
                Votre séjour sur mesure
              </h3>
              <div className="mt-5 w-16 gold-divider" aria-hidden="true" />

              {hasSelection ? (
                <dl className="mt-5 space-y-3 text-sm">
                  {destination && <SummaryRow label="Destination" value={destination} />}
                  {transport && <SummaryRow label="Transport" value={transport} />}
                  {comfort && <SummaryRow label="Confort" value={comfort} />}
                  <SummaryRow label="Voyageurs" value={String(travelers)} />
                  {hotel !== null && (
                    <SummaryRow label="Hôtel inclus" value={hotel ? "Oui" : "Non"} />
                  )}
                  {transfers !== null && (
                    <SummaryRow label="Transferts" value={transfers ? "Oui" : "Non"} />
                  )}
                  {guidance !== null && (
                    <SummaryRow label="Accompagnement" value={guidance ? "Oui" : "Non"} />
                  )}
                </dl>
              ) : (
                <p className="mt-5 text-sm text-syanor-champagne/70">
                  Sélectionnez vos préférences pour voir apparaître le résumé de
                  votre voyage.
                </p>
              )}

              <Link href={href} className="btn-gold mt-7 w-full">
                Créer mon séjour sur mesure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-syanor-gold/15 pb-2">
      <dt className="text-syanor-champagne/70">{label}</dt>
      <dd className="font-medium text-syanor-ivory">{value}</dd>
    </div>
  );
}
