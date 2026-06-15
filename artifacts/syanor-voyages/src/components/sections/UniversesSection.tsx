import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";

export default function UniversesSection() {
  return (
    <section className="section-pad bg-syanor-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="eyebrow mb-3">SYANOR VOYAGES</p>
          <h2 className="font-playfair text-3xl font-bold text-syanor-ink md:text-4xl">
            Deux univers, une même exigence.
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-syanor-gold/50 to-transparent" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-xl text-base text-syanor-ink/60 leading-relaxed">
            Une agence. Deux expertises. Un niveau de soin et d'accompagnement identique.
          </p>
        </div>

        {/* Two premium universe cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Card 1 — SYANOR VOYAGES general travel */}
          <div
            className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(6,63,51,0.12)]"
            style={{
              background: "linear-gradient(135deg, #FFF9ED 0%, #f5edd8 60%, #ede4cc 100%)",
              border: "1px solid rgba(201,162,74,0.20)",
            }}
          >
            {/* Background decoration */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 transition-opacity duration-300 group-hover:opacity-50"
              style={{ background: "radial-gradient(circle, rgba(6,63,51,0.12), transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Icon grid */}
            <div className="mb-6 flex items-center gap-3">
              {(["airplane", "anchor", "compass", "building"] as const).map((name, i) => (
                <span
                  key={name}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-syanor-emerald/8 text-syanor-emerald transition-all duration-200 group-hover:bg-syanor-emerald/12"
                  style={{ transitionDelay: `${i * 40}ms` }}
                  aria-hidden="true"
                >
                  <Icon name={name} className="h-5 w-5" />
                </span>
              ))}
            </div>

            {/* Tag */}
            <span
              className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-syanor-emerald"
              style={{ background: "rgba(6,63,51,0.07)", border: "1px solid rgba(6,63,51,0.12)" }}
            >
              <span className="h-1 w-1 rounded-full bg-syanor-emerald" aria-hidden="true" />
              Agence de voyages premium
            </span>

            <h3 className="mb-3 font-playfair text-2xl font-bold text-syanor-ink md:text-3xl">
              Votre agence de voyages premium.
            </h3>

            {/* Gold rule */}
            <div className="mb-4 h-px w-12 bg-gradient-to-r from-syanor-gold to-transparent" aria-hidden="true" />

            <p className="mb-6 text-sm leading-relaxed text-syanor-ink/65">
              Billets d'avion, traversées bateau, séjours sur mesure, voyages organisés, hôtels, transferts, visas et assistance voyage — tout ce dont vous avez besoin pour voyager en toute sérénité.
            </p>

            {/* Service chips */}
            <div className="mb-7 flex flex-wrap gap-2">
              {["Billets Avion", "Billets Bateau", "Séjours sur mesure", "Voyages organisés", "Packs VIP", "Visas"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-[0.67rem] font-medium text-syanor-ink/60"
                  style={{ background: "rgba(6,63,51,0.06)", border: "1px solid rgba(6,63,51,0.10)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 rounded-full bg-syanor-emerald px-6 py-3 text-sm font-semibold text-syanor-ivory transition-all duration-200 hover:bg-syanor-royal hover:shadow-card"
            >
              Découvrir les services SYANOR
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>

          {/* Card 2 — Omra & Hajj spiritual universe */}
          <div
            className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(2,43,36,0.30)]"
            style={{
              background: "linear-gradient(135deg, #022B24 0%, #063F33 60%, #0a5040 100%)",
              border: "1px solid rgba(201,162,74,0.25)",
            }}
          >
            {/* Background geometric decoration */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-15 transition-opacity duration-300 group-hover:opacity-25"
              style={{ border: "1px solid rgba(201,162,74,0.6)" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10"
              style={{ border: "1px solid rgba(201,162,74,0.5)" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-12 top-12 h-4 w-4 rounded-full opacity-40"
              style={{ background: "rgba(201,162,74,0.4)" }}
              aria-hidden="true"
            />

            {/* Icon grid */}
            <div className="mb-6 flex items-center gap-3">
              {(["crescent", "sparkle", "book-open", "users"] as const).map((name, i) => (
                <span
                  key={name}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl text-syanor-gold transition-all duration-200"
                  style={{
                    background: "rgba(201,162,74,0.12)",
                    border: "1px solid rgba(201,162,74,0.20)",
                    transitionDelay: `${i * 40}ms`,
                  }}
                  aria-hidden="true"
                >
                  <Icon name={name} className="h-5 w-5" />
                </span>
              ))}
            </div>

            {/* Tag */}
            <span
              className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold"
              style={{ background: "rgba(201,162,74,0.12)", border: "1px solid rgba(201,162,74,0.25)" }}
            >
              <span className="h-1 w-1 rounded-full bg-syanor-gold" aria-hidden="true" />
              Univers Omra & Hajj
            </span>

            <h3 className="mb-3 font-playfair text-2xl font-bold text-syanor-ivory md:text-3xl">
              Votre univers Omra, Hajj & Ramadan.
            </h3>

            {/* Gold rule */}
            <div className="mb-4 h-px w-12 bg-gradient-to-r from-syanor-gold to-transparent" aria-hidden="true" />

            <p className="mb-6 text-sm leading-relaxed text-syanor-champagne/65">
              Omra, Hajj, Ramadan, Ziyarat, formation avant départ et accompagnement spirituel. Des départs structurés, une préparation complète, un suivi humain à chaque étape.
            </p>

            {/* Service chips */}
            <div className="mb-7 flex flex-wrap gap-2">
              {["Omra 2026", "Omra 2027", "Hajj 2027", "Ramadan", "Ziyarat", "Formation"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-[0.67rem] font-medium text-syanor-champagne/60"
                  style={{ background: "rgba(201,162,74,0.08)", border: "1px solid rgba(201,162,74,0.18)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/omra-hajj"
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-syanor-royal transition-all duration-200 hover:opacity-90 hover:shadow-[0_8px_24px_rgba(201,162,74,0.35)]"
              style={{ background: "linear-gradient(135deg, #C9A24A 0%, #e8c87a 50%, #C9A24A 100%)" }}
            >
              Découvrir Omra & Hajj
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>

            {/* Partner note */}
            <p className="mt-4 text-[0.65rem] italic text-syanor-champagne/35">
              En partenariat avec Omra Factory
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
