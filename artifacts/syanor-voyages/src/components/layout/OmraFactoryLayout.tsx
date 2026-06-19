import { type ReactNode, useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import Link from "@/components/Link";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

function isNavActive(href: string, loc: string): boolean {
  if (href === "/") return loc === "/";
  const base = href.split("?")[0].split("#")[0];
  return loc === base || loc.startsWith(base + "/");
}

function isGroupActive(hrefs: string[], loc: string): boolean {
  return hrefs.some((h) => isNavActive(h, loc));
}

const PROGRAMMES = [
  { label: "Omra 2026",       href: "/omra-hajj/omra",      desc: "Saisons 2026 & 2027",     badge: null           },
  { label: "Omra Plus",       href: "/omra-hajj/omra-plus", desc: "Confort premium 5★",       badge: "Premium"      },
  { label: "Hajj 2027",       href: "/omra-hajj/hajj",      desc: "Inscriptions ouvertes",    badge: "2027"         },
  { label: "Ramadan",         href: "/omra-hajj/ramadan",   desc: "Séjours dédiés",           badge: null           },
  { label: "Omra 2027",       href: "/omra-2027",           desc: "Préréservation en cours",  badge: "Nouveau"      },
];

const DEPARTURES = [
  { label: "Nice",      href: "/depart/nice",      desc: "Vols & départs depuis NCE", confirmed: true  },
  { label: "Marseille", href: "/depart/marseille", desc: "Vols & départs depuis MRS", confirmed: true  },
  { label: "Lyon",      href: "/depart/lyon",      desc: "Départs sur demande",       confirmed: false },
  { label: "Paris",     href: "/depart/paris",     desc: "CDG / Orly",                confirmed: true  },
  { label: "Toulouse",  href: "/depart/toulouse",  desc: "Départs sur demande",       confirmed: false },
  { label: "Bruxelles", href: "/depart/bruxelles", desc: "Départs internationaux",    confirmed: false },
];

/* ── Arrow-left SVG ── */
function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M5 12l7-7M5 12l7 7" />
    </svg>
  );
}

/* ── Chevron ── */
function Chevron({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function OmraHeader() {
  const [location]                    = useLocation();
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [dropOpen, setDropOpen]       = useState(false);
  const [deptOpen, setDeptOpen]       = useState(false);
  const dropRef                        = useRef<HTMLDivElement>(null);
  const deptRef                        = useRef<HTMLDivElement>(null);

  const programmesActive = isGroupActive(PROGRAMMES.map((p) => p.href), location);
  const departuresActive = isGroupActive(DEPARTURES.map((d) => d.href), location);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close dropdowns on outside click */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
      if (deptRef.current && !deptRef.current.contains(e.target as Node)) {
        setDeptOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(1,26,21,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,162,74,0.22)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-6 md:px-8">

        {/* ── Return to SYANOR ── */}
        <Link
          href="/"
          className="hidden shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-all duration-200 hover:bg-white/5 sm:flex"
          style={{ border: "1px solid rgba(201,162,74,0.28)", color: "rgba(201,162,74,0.70)" }}
        >
          <ArrowLeft className="h-2.5 w-2.5" />
          SYANOR VOYAGES
        </Link>

        <div className="hidden h-5 w-px shrink-0 sm:block" style={{ background: "rgba(201,162,74,0.16)" }} aria-hidden="true" />

        {/* ── Logo — ivory bubble so Kaaba colors show ── */}
        <Link href="/omra-hajj" className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-85">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl"
            style={{ background: "#F5EFE0", padding: "3px" }}
          >
            <img
              src="/omra-factory-logo.png"
              alt="Omra Factory"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="hidden leading-none sm:block">
            <p className="font-playfair text-sm font-bold tracking-tight" style={{ color: "#FFF9ED" }}>
              Omra Factory
            </p>
            <p className="text-[0.50rem] font-semibold uppercase tracking-[0.16em]" style={{ color: "rgba(201,162,74,0.55)" }}>
              by SYANOR VOYAGES
            </p>
          </div>
        </Link>

        <div className="flex-1" />

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigation Omra Factory">

          {/* Programmes dropdown */}
          <div ref={dropRef} className="relative">
            <button
              type="button"
              onClick={() => { setDropOpen((o) => !o); setDeptOpen(false); }}
              className="relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-150 hover:bg-white/5"
              style={{ color: (dropOpen || programmesActive) ? "#C9A24A" : "rgba(255,249,237,0.68)" }}
              aria-expanded={dropOpen}
            >
              Programmes
              <Chevron className={`h-3.5 w-3.5 transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
              {programmesActive && !dropOpen && (
                <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full" style={{ width: 16, height: 1.5, background: "#C9A24A", opacity: 0.70 }} />
              )}
            </button>

            {dropOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl shadow-xl"
                style={{ background: "#011A15", border: "1px solid rgba(201,162,74,0.22)" }}
              >
                {/* Header */}
                <div className="border-b px-5 py-3" style={{ borderColor: "rgba(201,162,74,0.12)" }}>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.20em]" style={{ color: "rgba(201,162,74,0.60)" }}>
                    Omra Factory — Nos programmes
                  </p>
                </div>

                <div className="py-2">
                  {PROGRAMMES.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setDropOpen(false)}
                      className="group flex items-center justify-between px-5 py-3 transition-colors hover:bg-white/5"
                    >
                      <div>
                        <p className="text-sm font-medium transition-colors group-hover:text-syanor-gold" style={{ color: "rgba(255,249,237,0.85)" }}>
                          {p.label}
                        </p>
                        <p className="text-[0.65rem]" style={{ color: "rgba(255,249,237,0.38)" }}>{p.desc}</p>
                      </div>
                      {p.badge && (
                        <span
                          className="rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wide"
                          style={{ background: "rgba(201,162,74,0.15)", color: "#C9A24A", border: "1px solid rgba(201,162,74,0.28)" }}
                        >
                          {p.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Footer CTA */}
                <div className="border-t px-5 py-3" style={{ borderColor: "rgba(201,162,74,0.12)" }}>
                  <Link
                    href="/omra-hajj"
                    onClick={() => setDropOpen(false)}
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-syanor-gold"
                    style={{ color: "rgba(201,162,74,0.55)" }}
                  >
                    Voir l'espace Omra Factory complet →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Départs dropdown */}
          <div ref={deptRef} className="relative">
            <button
              type="button"
              onClick={() => { setDeptOpen((o) => !o); setDropOpen(false); }}
              className="relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-150 hover:bg-white/5"
              style={{ color: (deptOpen || departuresActive) ? "#C9A24A" : "rgba(255,249,237,0.68)" }}
              aria-expanded={deptOpen}
            >
              Départs
              <Chevron className={`h-3.5 w-3.5 transition-transform duration-200 ${deptOpen ? "rotate-180" : ""}`} />
              {departuresActive && !deptOpen && (
                <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full" style={{ width: 16, height: 1.5, background: "#C9A24A", opacity: 0.70 }} />
              )}
            </button>

            {deptOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl shadow-xl"
                style={{ background: "#011A15", border: "1px solid rgba(201,162,74,0.22)" }}
              >
                <div className="border-b px-5 py-3" style={{ borderColor: "rgba(201,162,74,0.12)" }}>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.20em]" style={{ color: "rgba(201,162,74,0.60)" }}>
                    Omra Factory — Villes de départ
                  </p>
                </div>
                <div className="py-2">
                  {DEPARTURES.map((d) => (
                    <Link
                      key={d.href}
                      href={d.href}
                      onClick={() => setDeptOpen(false)}
                      className="group flex items-center justify-between px-5 py-3 transition-colors hover:bg-white/5"
                    >
                      <div>
                        <p className="text-sm font-medium transition-colors group-hover:text-syanor-gold" style={{ color: "rgba(255,249,237,0.85)" }}>
                          {d.label}
                        </p>
                        <p className="text-[0.65rem]" style={{ color: "rgba(255,249,237,0.38)" }}>{d.desc}</p>
                      </div>
                      {d.confirmed && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#C9A24A" }} aria-label="départs confirmés" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Standalone links */}
          {[
            { label: "Blog",    href: "/omra-hajj/blog"    },
            { label: "Contact", href: "/omra-hajj/contact" },
          ].map((l) => {
            const active = isNavActive(l.href, location);
            return (
              <Link
                key={l.href}
                href={l.href}
                className="relative rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-150 hover:bg-white/5"
                style={{ color: active ? "#C9A24A" : "rgba(255,249,237,0.68)" }}
              >
                {l.label}
                {active && (
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full" style={{ width: 16, height: 1.5, background: "#C9A24A", opacity: 0.70 }} />
                )}
              </Link>
            );
          })}

          {/* Devis CTA */}
          <Link
            href="/omra-hajj/contact?service=Omra"
            className="ml-2 rounded-full px-4 py-1.5 text-[0.78rem] font-semibold transition-all hover:opacity-90 active:scale-[0.97]"
            style={{ background: "linear-gradient(135deg, #C9A24A, #e8c87a, #C9A24A)", color: "#022B24" }}
          >
            Devis gratuit
          </Link>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/8 lg:hidden"
          style={{ color: "rgba(255,249,237,0.70)" }}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="border-t lg:hidden" style={{ background: "#011A15", borderColor: "rgba(201,162,74,0.14)" }}>

          {/* Return */}
          <div className="border-b px-6 py-4" style={{ borderColor: "rgba(201,162,74,0.10)" }}>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all hover:bg-white/5"
              style={{ border: "1px solid rgba(201,162,74,0.25)", color: "rgba(201,162,74,0.80)" }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour à SYANOR VOYAGES
            </Link>
          </div>

          {/* Programmes section */}
          <div className="border-b px-6 py-4" style={{ borderColor: "rgba(201,162,74,0.10)" }}>
            <p className="mb-3 text-[0.60rem] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(201,162,74,0.55)" }}>
              Nos programmes
            </p>
            <div className="grid grid-cols-2 gap-2">
              {PROGRAMMES.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setMenuOpen(false)}
                  className="group rounded-xl px-3.5 py-3 transition-colors hover:bg-white/5"
                  style={{ border: "1px solid rgba(201,162,74,0.12)" }}
                >
                  <div className="flex items-start justify-between gap-1">
                    <p className="text-sm font-medium transition-colors group-hover:text-syanor-gold" style={{ color: "rgba(255,249,237,0.82)" }}>
                      {p.label}
                    </p>
                    {p.badge && (
                      <span className="shrink-0 rounded-full px-1.5 py-0.5 text-[0.52rem] font-bold" style={{ background: "rgba(201,162,74,0.15)", color: "#C9A24A" }}>
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[0.62rem]" style={{ color: "rgba(255,249,237,0.35)" }}>{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Départs section */}
          <div className="border-b px-6 py-4" style={{ borderColor: "rgba(201,162,74,0.10)" }}>
            <p className="mb-3 text-[0.60rem] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(201,162,74,0.55)" }}>
              Villes de départ
            </p>
            <div className="grid grid-cols-2 gap-2">
              {DEPARTURES.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-3.5 py-3 transition-colors hover:bg-white/5"
                  style={{ border: "1px solid rgba(201,162,74,0.12)" }}
                >
                  <div>
                    <p className="text-sm font-medium transition-colors group-hover:text-syanor-gold" style={{ color: "rgba(255,249,237,0.82)" }}>
                      {d.label}
                    </p>
                    <p className="mt-0.5 text-[0.62rem]" style={{ color: "rgba(255,249,237,0.35)" }}>{d.desc}</p>
                  </div>
                  {d.confirmed && (
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#C9A24A" }} aria-label="confirmé" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Other links */}
          <nav className="space-y-0.5 px-4 py-4">
            {[
              { label: "Blog Omra", href: "/omra-hajj/blog"    },
              { label: "Contact",   href: "/omra-hajj/contact" },
            ].map((l) => {
              const active = isNavActive(l.href, location);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5"
                  style={{
                    color: active ? "#C9A24A" : "rgba(255,249,237,0.75)",
                    background: active ? "rgba(201,162,74,0.07)" : undefined,
                    borderLeft: active ? "2px solid rgba(201,162,74,0.60)" : "2px solid transparent",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="border-t px-6 py-4" style={{ borderColor: "rgba(201,162,74,0.10)" }}>
            <Link
              href="/omra-hajj/contact?service=Omra"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full py-3 text-center text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #C9A24A, #e8c87a, #C9A24A)", color: "#022B24" }}
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function OmraFooter() {
  return (
    <footer style={{ background: "#011A15", borderTop: "1px solid rgba(201,162,74,0.14)" }}>
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl" style={{ background: "#F5EFE0", padding: "2px" }}>
              <img src="/omra-factory-logo.png" alt="Omra Factory" className="h-full w-full object-contain" />
            </div>
            <div className="leading-none">
              <p className="font-playfair text-sm font-bold" style={{ color: "#FFF9ED" }}>Omra Factory</p>
              <p className="mt-0.5 text-[0.48rem] font-semibold uppercase tracking-[0.16em]" style={{ color: "rgba(201,162,74,0.50)" }}>by SYANOR VOYAGES</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { label: "Programmes",    href: "/omra-hajj" },
              { label: "Départs 2026",  href: "/omra-2026" },
              { label: "Départs 2027",  href: "/omra-2027" },
              { label: "Hajj 2027",     href: "/omra-hajj/hajj" },
              { label: "Blog Omra",     href: "/omra-hajj/blog" },
              { label: "Contact",       href: "/omra-hajj/contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs transition-colors hover:text-syanor-gold" style={{ color: "rgba(255,249,237,0.45)" }}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Back to SYANOR */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-xs font-semibold transition-all hover:bg-white/5 md:self-auto"
            style={{ border: "1px solid rgba(201,162,74,0.22)", color: "rgba(201,162,74,0.60)" }}
          >
            <ArrowLeft className="h-2.5 w-2.5" />
            SYANOR VOYAGES
          </Link>
        </div>

        <div className="mt-8 border-t pt-5 text-center text-[0.62rem]" style={{ borderColor: "rgba(201,162,74,0.08)", color: "rgba(255,249,237,0.22)" }}>
          © {new Date().getFullYear()} SYANOR VOYAGES — Omra Factory. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default function OmraFactoryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <OmraHeader />
      <main className="page-enter">{children}</main>
      <OmraFooter />
      <WhatsAppButton />
    </>
  );
}
