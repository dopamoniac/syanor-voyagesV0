type Metadata = Record<string, unknown>;
import OmraFactoryLayout from "@/components/layout/OmraFactoryLayout";
import SmartQuoteForm from "@/components/sections/SmartQuoteForm";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact & Devis Omra Factory | SYANOR VOYAGES",
  description:
    "Demandez votre devis Omra, Hajj, Ramadan ou Ziyarat. Réponse personnalisée sous 24h. Départs depuis Nice, Marseille, Lyon, Paris, Toulouse et Bruxelles.",
  alternates: { canonical: "/omra-hajj/contact" },
};

const WHY = [
  { icon: "crescent",   title: "Spécialiste Omra & Hajj",      desc: "Programmes Omra, Hajj, Ramadan, Ziyarat — accompagnement spirituel complet" },
  { icon: "calendar",   title: "Départs confirmés",             desc: "2026 et 2027 depuis 6 villes de France et Belgique" },
  { icon: "diamond",    title: "Standard → VIP",                desc: "Hôtels sélectionnés selon votre niveau de confort et budget" },
  { icon: "hand-heart", title: "Accompagnement spirituel",      desc: "Un guide formé présent à chaque étape, de Médine à Makkah" },
  { icon: "shield",     title: "Réponse sous 24h",              desc: "Proposition personnalisée, claire et sans engagement" },
];

export default function OmraContactPage() {
  return (
    <OmraFactoryLayout>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
        style={{ background: "linear-gradient(160deg, #022B24 0%, #063F33 60%, #011A15 100%)" }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 70% at 80% 20%, rgba(201,162,74,0.10) 0%, transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 shrink-0" style={{ background: "rgba(201,162,74,0.55)" }} aria-hidden="true" />
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(201,162,74,0.70)" }}>
                Omra Factory — Contact & Devis
              </span>
            </div>
            <h1 className="font-playfair text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.8rem]" style={{ color: "#FFF9ED" }}>
              Votre voyage spirituel,<br />
              <span style={{ background: "linear-gradient(90deg, #C9A24A, #e8c87a, #C9A24A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                organisé sur mesure.
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed" style={{ color: "rgba(255,249,237,0.60)" }}>
              Décrivez votre projet Omra, Hajj ou Ramadan en quelques étapes. Notre équipe vous répond avec une proposition personnalisée sous 24h.
            </p>

            {/* Contact pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {CONTACT.whatsapp && (
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: "rgba(201,162,74,0.15)", border: "1px solid rgba(201,162,74,0.30)", color: "#C9A24A" }}
                >
                  <Icon name="phone" className="h-3.5 w-3.5" aria-hidden="true" />
                  WhatsApp
                </a>
              )}
              {CONTACT.email && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: "rgba(255,249,237,0.06)", border: "1px solid rgba(255,249,237,0.12)", color: "rgba(255,249,237,0.70)" }}
                >
                  <Icon name="mail" className="h-3.5 w-3.5" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              )}
            </div>
          </div>
        </div>
        {/* Gold hairline bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,162,74,0.25), transparent)" }} aria-hidden="true" />
      </section>

      {/* ── Form ── */}
      <section className="bg-syanor-ivory py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SmartQuoteForm />
        </div>
      </section>

      {/* ── Why ── */}
      <section className="py-16 md:py-20" style={{ background: "#F5EFE0" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-2" style={{ color: "rgba(2,43,36,0.50)" }}>Pourquoi Omra Factory</p>
            <h2 className="font-playfair text-2xl font-bold text-syanor-ink sm:text-3xl">Un accompagnement d'excellence</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {WHY.map((w) => (
              <Reveal key={w.title}>
                <div className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-[0_2px_12px_rgba(6,63,51,0.06)]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl text-syanor-gold" style={{ background: "rgba(201,162,74,0.10)" }}>
                    <Icon name={w.icon as Parameters<typeof Icon>[0]["name"]} className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-syanor-ink">{w.title}</p>
                  <p className="text-xs leading-relaxed text-syanor-ink/55">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </OmraFactoryLayout>
  );
}
