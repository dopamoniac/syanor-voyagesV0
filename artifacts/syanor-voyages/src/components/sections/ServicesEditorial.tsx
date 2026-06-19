import Link from "@/components/Link";

/* ── shared tokens ───────────────────────────────────────── */
const NAVY   = "#1B1B1B";
const GOLD   = "#D8B56A";
const IVORY  = "#F8F4EE";
const MUTED  = "#5E5A54";
const ITEM_MUTED = "#6B665F";

function Arrow() {
  return (
    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── eyebrow label ───────────────────────────────────────── */
function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-mono text-[0.60rem] font-bold tracking-[0.28em]" style={{ color: GOLD }}>{index}</span>
      <div className="h-px w-10" style={{ background: `linear-gradient(to right, ${GOLD}, transparent)`, opacity: 0.55 }} aria-hidden="true" />
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.25em]" style={{ color: GOLD }}>{label}</span>
    </div>
  );
}

/* ── decorative marble lines ─────────────────────────────── */
function MarbleRule() {
  return (
    <div className="flex items-center gap-3 my-16 md:my-20" aria-hidden="true">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.22 }} />
      <div className="h-1 w-1 rounded-full" style={{ background: GOLD, opacity: 0.35 }} />
      <div className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD, opacity: 0.50 }} />
      <div className="h-1 w-1 rounded-full" style={{ background: GOLD, opacity: 0.35 }} />
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.22 }} />
    </div>
  );
}

/* ── luxury image frame ──────────────────────────────────── */
function LuxuryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <div
        className="absolute -inset-1.5 rounded-[28px]"
        aria-hidden="true"
        style={{
          background: `linear-gradient(135deg, ${GOLD}28 0%, transparent 60%, ${GOLD}18 100%)`,
          filter: "blur(2px)",
        }}
      />
      <div
        className="relative overflow-hidden rounded-[24px]"
        style={{
          border: `1px solid ${GOLD}55`,
          boxShadow: `0 20px 60px rgba(11,30,61,0.10), 0 4px 16px rgba(216,181,106,0.12)`,
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block w-full h-full object-cover object-center"
          style={{ height: "clamp(280px, 36vw, 480px)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: `linear-gradient(135deg, ${GOLD}08 0%, transparent 50%)` }}
        />
      </div>
      <div
        className="absolute -bottom-3 -right-3 h-12 w-12 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{ background: `radial-gradient(circle, ${GOLD}30, transparent 70%)` }}
      />
    </div>
  );
}

/* ── ivory glass sub-card ────────────────────────────────── */
function SubCard({ label, desc, href }: { label: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        background: "rgba(255,255,255,0.75)",
        border: `1px solid ${GOLD}30`,
        boxShadow: `0 2px 12px rgba(11,30,61,0.05)`,
        backdropFilter: "blur(6px)",
      }}
    >
      <p className="text-[1rem] font-semibold mb-1.5 leading-tight" style={{ color: NAVY }}>{label}</p>
      <p className="text-[0.88rem] leading-relaxed" style={{ color: ITEM_MUTED }}>{desc}</p>
    </Link>
  );
}

/* ── row link ────────────────────────────────────────────── */
function RowLink({ label, desc, href }: { label: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-x-0.5 hover:shadow-sm"
      style={{
        background: "rgba(255,255,255,0.70)",
        border: `1px solid ${GOLD}25`,
        boxShadow: `0 1px 8px rgba(11,30,61,0.04)`,
      }}
    >
      <div>
        <p className="text-[1rem] font-semibold" style={{ color: NAVY }}>{label}</p>
        <p className="text-[0.86rem] mt-0.5 leading-relaxed" style={{ color: ITEM_MUTED }}>{desc}</p>
      </div>
      <span style={{ color: `${GOLD}80` }} className="transition-all duration-200 group-hover:text-[#D8B56A] group-hover:translate-x-0.5 shrink-0 ml-3">
        <Arrow />
      </span>
    </Link>
  );
}

/* ── feature row ─────────────────────────────────────────── */
function FeatureRow({ num, label, desc }: { num: string; label: string; desc: string }) {
  return (
    <div className="flex items-start gap-5">
      <span className="shrink-0 mt-0.5 text-[0.60rem] font-mono font-bold tracking-widest" style={{ color: `${GOLD}70` }}>
        {num}
      </span>
      <div>
        <p className="text-[1.0625rem] font-semibold" style={{ color: NAVY }}>{label}</p>
        <p className="text-[0.88rem] mt-1 leading-relaxed" style={{ color: ITEM_MUTED }}>{desc}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
export default function ServicesEditorial() {
  return (
    <section
      id="services"
      style={{
        background: `linear-gradient(160deg, ${IVORY} 0%, #f2ebe0 50%, ${IVORY} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Marble texture decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-48 h-[520px] w-[520px] rounded-full"
        style={{ background: `radial-gradient(circle, ${GOLD}0A 0%, transparent 70%)`, border: `1px solid ${GOLD}12` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full"
        style={{ background: `radial-gradient(circle, ${GOLD}08 0%, transparent 70%)` }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">

        {/* ── Section header ── */}
        <div className="mb-16 md:mb-20">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: GOLD }}>
            Nos services
          </p>
          <h2
            className="font-playfair font-semibold leading-[0.97]"
            style={{ color: NAVY, fontSize: "clamp(2.4rem, 4.5vw, 4.0rem)", letterSpacing: "-0.03em" }}
          >
            Tout ce dont vous avez besoin<br className="hidden sm:block" /> pour voyager.
          </h2>
          <div className="mt-5 h-px w-16" style={{ background: `linear-gradient(to right, ${GOLD}, transparent)` }} aria-hidden="true" />
        </div>

        {/* ══ BLOCK 1 — Billets Avion & Maritime ══ */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <Eyebrow index="01" label="Billets" />
            <h3
              className="font-playfair font-semibold leading-[1.03] mb-6"
              style={{ color: NAVY, fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", letterSpacing: "-0.025em" }}
            >
              Billets Avion<br />&amp; Maritime.
            </h3>
            <p className="leading-[1.80] mb-9" style={{ fontSize: "clamp(1.0rem, 1.3vw, 1.15rem)", color: MUTED, maxWidth: 560 }}>
              Vols internationaux, traversées ferry avec ou sans véhicule — nous optimisons
              chaque réservation pour que vous partiez dans les meilleures conditions.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              <SubCard label="Billets Avion"  desc="Vols internationaux, aller-retour, multi-escales" href="/services/billets-avion" />
              <SubCard label="Billets Bateau" desc="Ferry & traversées, tous ports, option véhicule"  href="/services/billets-bateau" />
            </div>
            <Link
              href="/contact?service=Billet+avion#quote"
              className="group inline-flex items-center gap-2.5 font-semibold transition-all duration-200"
              style={{ color: GOLD, fontSize: "clamp(1.0rem, 1.2vw, 1.15rem)" }}
            >
              Demander un devis billets
              <span className="transition-transform duration-200 group-hover:translate-x-1.5"><Arrow /></span>
            </Link>
          </div>
          <div className="order-first lg:order-last">
            <LuxuryImage src="/services/billets-avion.png" alt="Billet avion international SYANOR VOYAGES" />
          </div>
        </div>

        <MarbleRule />

        {/* ══ BLOCK 2 — Séjours & Sur Mesure ══ */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <LuxuryImage src="/services/sur-mesure/sejour-sur-mesure.png" alt="Séjour sur mesure SYANOR VOYAGES" />
          </div>
          <div>
            <Eyebrow index="02" label="Séjours &amp; Voyages" />
            <h3
              className="font-playfair font-semibold leading-[1.03] mb-6"
              style={{ color: NAVY, fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", letterSpacing: "-0.025em" }}
            >
              Séjours organisés<br />&amp; sur mesure.
            </h3>
            <p className="leading-[1.80] mb-9" style={{ fontSize: "clamp(1.0rem, 1.3vw, 1.15rem)", color: MUTED, maxWidth: 560 }}>
              Circuits avec guide, séjours entièrement personnalisés, voyages de noces — nous concevons
              chaque voyage autour de vos envies, votre budget et vos dates.
            </p>
            <div className="space-y-3 mb-10">
              <RowLink label="Voyages Organisés" desc="Circuit guidé, programme complet, hébergements inclus"  href="/voyages-organises" />
              <RowLink label="Séjour Sur Mesure" desc="Vos dates, votre confort, votre budget — un voyage unique" href="/sejours-sur-mesure" />
              <RowLink label="Voyage de Noces"   desc="Lune de miel pensée dans les moindres détails"          href="/contact?service=Voyage+de+noces#quote" />
            </div>
            <Link
              href="/sejours-sur-mesure"
              className="group inline-flex items-center gap-2.5 font-semibold transition-all duration-200"
              style={{ color: GOLD, fontSize: "clamp(1.0rem, 1.2vw, 1.15rem)" }}
            >
              Explorer nos séjours
              <span className="transition-transform duration-200 group-hover:translate-x-1.5"><Arrow /></span>
            </Link>
          </div>
        </div>

        <MarbleRule />

        {/* ══ BLOCK 3 — Assistance & Visas ══ */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <Eyebrow index="03" label="Assistance &amp; Documents" />
            <h3
              className="font-playfair font-semibold leading-[1.03] mb-6"
              style={{ color: NAVY, fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", letterSpacing: "-0.025em" }}
            >
              Visas, assurances<br />&amp; formalités.
            </h3>
            <p className="leading-[1.80] mb-9" style={{ fontSize: "clamp(1.0rem, 1.3vw, 1.15rem)", color: MUTED, maxWidth: 560 }}>
              Dossier visa complet, assurance internationale, suivi des démarches — nous
              prenons en charge chaque formalité pour que vous partiez l'esprit entièrement libre.
            </p>
            <div className="space-y-4 mb-10">
              <FeatureRow num="01" label="Assistance Visa"     desc="Dossier, démarches, suivi jusqu'à l'obtention" />
              <div className="h-px ml-8" style={{ background: `${GOLD}18` }} aria-hidden="true" />
              <FeatureRow num="02" label="Assurance Voyage"    desc="Couverture internationale premium, 24h/24" />
              <div className="h-px ml-8" style={{ background: `${GOLD}18` }} aria-hidden="true" />
              <FeatureRow num="03" label="Hôtels &amp; Transferts" desc="Sélection 4–5★, transferts privés aéroport" />
            </div>
            <Link
              href="/contact?service=Visa#quote"
              className="group inline-flex items-center gap-2.5 font-semibold transition-all duration-200"
              style={{ color: GOLD, fontSize: "clamp(1.0rem, 1.2vw, 1.15rem)" }}
            >
              Demander une assistance
              <span className="transition-transform duration-200 group-hover:translate-x-1.5"><Arrow /></span>
            </Link>
          </div>
          <div className="order-first lg:order-last">
            <LuxuryImage src="/services/assistance-visa.png" alt="Assistance visa SYANOR VOYAGES" />
          </div>
        </div>

      </div>
    </section>
  );
}
