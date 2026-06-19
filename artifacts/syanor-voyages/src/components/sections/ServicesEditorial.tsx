import Link from "@/components/Link";

function ArrowRight() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-mono text-[0.50rem] font-bold tracking-[0.30em]" style={{ color: "#D8B56A" }}>{index}</span>
      <div className="h-px w-10" style={{ background: "rgba(216,181,106,0.40)" }} aria-hidden="true" />
      <span className="text-[0.52rem] font-bold uppercase tracking-[0.26em]" style={{ color: "#D8B56A" }}>{label}</span>
    </div>
  );
}

export default function ServicesEditorial() {
  return (
    <section id="services" style={{ background: "#0B1E3D" }}>

      {/* ── BLOCK 1 — Billets Avion & Bateau ── */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Text */}
          <div>
            <Eyebrow index="01" label="Billets" />
            <h2
              className="font-playfair font-light leading-[1.05] mb-6"
              style={{ color: "#F8F4EE", fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
            >
              Billets Avion<br />& Maritime.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(248,244,238,0.55)" }}>
              Vols internationaux, traversées ferry avec ou sans véhicule — nous optimisons
              chaque réservation pour que vous partiez dans les meilleures conditions, au meilleur prix.
            </p>

            {/* Two sub-services */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Billets Avion", desc: "Vols internationaux, aller-retour, multi-escales", href: "/services/billets-avion" },
                { label: "Billets Bateau", desc: "Ferry & traversées, tous ports, option véhicule", href: "/services/billets-bateau" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="group block rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "rgba(248,244,238,0.04)", border: "1px solid rgba(216,181,106,0.14)" }}
                >
                  <p className="text-[0.7rem] font-bold text-white mb-1">{s.label}</p>
                  <p className="text-[0.63rem] leading-relaxed" style={{ color: "rgba(248,244,238,0.40)" }}>{s.desc}</p>
                </Link>
              ))}
            </div>

            <Link
              href="/contact?service=Billet+avion#quote"
              className="group inline-flex items-center gap-3 text-sm font-semibold transition-all duration-200"
              style={{ color: "#D8B56A" }}
            >
              Demander un devis billets
              <span className="transition-transform duration-200 group-hover:translate-x-1"><ArrowRight /></span>
            </Link>
          </div>

          {/* Image */}
          <div
            className="relative overflow-hidden rounded-[24px] order-first lg:order-last"
            style={{ height: "clamp(260px, 36vw, 480px)" }}
          >
            <img
              src="/services/billets-avion.jpg"
              alt="Billet avion international SYANOR VOYAGES"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{ background: "linear-gradient(to right, rgba(11,30,61,0.30), transparent)" }}
            />
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="h-px" style={{ background: "rgba(216,181,106,0.10)" }} aria-hidden="true" />
      </div>

      {/* ── BLOCK 2 — Séjours & Sur Mesure ── */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Image first on desktop */}
          <div
            className="relative overflow-hidden rounded-[24px]"
            style={{ height: "clamp(260px, 36vw, 480px)" }}
          >
            <img
              src="/services/sur-mesure/sejour-sur-mesure.png"
              alt="Séjour sur mesure SYANOR VOYAGES"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{ background: "linear-gradient(to left, rgba(11,30,61,0.30), transparent)" }}
            />
            {/* Badge */}
            <div
              className="absolute top-5 left-5 rounded-full px-4 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.20em]"
              style={{ background: "rgba(216,181,106,0.15)", border: "1px solid rgba(216,181,106,0.35)", color: "#D8B56A" }}
            >
              Sur mesure
            </div>
          </div>

          {/* Text */}
          <div>
            <Eyebrow index="02" label="Séjours & Voyages" />
            <h2
              className="font-playfair font-light leading-[1.05] mb-6"
              style={{ color: "#F8F4EE", fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
            >
              Séjours organisés<br />& sur mesure.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(248,244,238,0.55)" }}>
              Circuits avec guide, séjours entièrement personnalisés, voyages de noces — nous concevons
              chaque voyage autour de vos envies, votre budget et vos dates.
            </p>

            {/* Sub-services vertical list */}
            <div className="space-y-3 mb-10">
              {[
                { label: "Voyages Organisés", desc: "Circuit guidé, programme complet, hébergements inclus", href: "/voyages-organises" },
                { label: "Séjour Sur Mesure", desc: "Vos dates, votre confort, votre budget — un voyage unique", href: "/sejours-sur-mesure" },
                { label: "Voyage de Noces", desc: "Lune de miel pensée dans les moindres détails", href: "/contact?service=Voyage+de+noces#quote" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="group flex items-center justify-between rounded-xl px-5 py-3.5 transition-all duration-300 hover:-translate-x-0.5"
                  style={{ background: "rgba(248,244,238,0.04)", border: "1px solid rgba(216,181,106,0.10)" }}
                >
                  <div>
                    <p className="text-[0.72rem] font-semibold text-white">{s.label}</p>
                    <p className="text-[0.62rem] mt-0.5" style={{ color: "rgba(248,244,238,0.38)" }}>{s.desc}</p>
                  </div>
                  <span className="text-white/20 transition-all duration-200 group-hover:text-[#D8B56A] group-hover:translate-x-0.5">
                    <ArrowRight />
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/sejours-sur-mesure"
              className="group inline-flex items-center gap-3 text-sm font-semibold transition-all duration-200"
              style={{ color: "#D8B56A" }}
            >
              Explorer nos séjours
              <span className="transition-transform duration-200 group-hover:translate-x-1"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="h-px" style={{ background: "rgba(216,181,106,0.10)" }} aria-hidden="true" />
      </div>

      {/* ── BLOCK 3 — Assistance & Visas ── */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Text */}
          <div>
            <Eyebrow index="03" label="Assistance & Documents" />
            <h2
              className="font-playfair font-light leading-[1.05] mb-6"
              style={{ color: "#F8F4EE", fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
            >
              Visas, assurances<br />& formalités.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(248,244,238,0.55)" }}>
              Dossier visa complet, assurance internationale, suivi des démarches — nous
              prenons en charge chaque formalité pour que vous partiez l'esprit entièrement libre.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {[
                { num: "01", label: "Assistance Visa", desc: "Dossier, démarches, suivi jusqu'à l'obtention" },
                { num: "02", label: "Assurance Voyage", desc: "Couverture internationale premium, 24h/24" },
                { num: "03", label: "Hôtels & Transferts", desc: "Sélection 4–5★, transferts privés aéroport" },
              ].map((f) => (
                <div
                  key={f.num}
                  className="flex items-start gap-4"
                >
                  <span
                    className="shrink-0 mt-0.5 text-[0.48rem] font-mono font-bold tracking-widest"
                    style={{ color: "rgba(216,181,106,0.45)" }}
                  >
                    {f.num}
                  </span>
                  <div>
                    <p className="text-[0.75rem] font-semibold text-white">{f.label}</p>
                    <p className="text-[0.65rem] mt-0.5 leading-relaxed" style={{ color: "rgba(248,244,238,0.42)" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact?service=Visa#quote"
              className="group inline-flex items-center gap-3 text-sm font-semibold transition-all duration-200"
              style={{ color: "#D8B56A" }}
            >
              Demander une assistance
              <span className="transition-transform duration-200 group-hover:translate-x-1"><ArrowRight /></span>
            </Link>
          </div>

          {/* Image */}
          <div
            className="relative overflow-hidden rounded-[24px] order-first lg:order-last"
            style={{ height: "clamp(260px, 36vw, 440px)" }}
          >
            <img
              src="/services/assistance-visa.png"
              alt="Assistance visa et documents voyage SYANOR"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{ background: "linear-gradient(135deg, rgba(11,30,61,0.35), transparent 60%)" }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
