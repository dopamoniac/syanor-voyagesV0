import { type ReactNode, useState, useEffect } from "react";
import Link from "@/components/Link";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const NAV_LINKS = [
  { label: "Omra 2026",  href: "/omra-hajj/omra"      },
  { label: "Omra Plus",  href: "/omra-hajj/omra-plus"  },
  { label: "Hajj 2027",  href: "/omra-hajj/hajj"       },
  { label: "Ramadan",    href: "/omra-hajj/ramadan"     },
  { label: "Blog",       href: "/omra-hajj/blog"        },
  { label: "Contact",    href: "/contact"               },
];

/* ── Arrow-left SVG (not in Icon.tsx) ── */
function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5M5 12l7-7M5 12l7 7" />
    </svg>
  );
}

function OmraHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(1,26,21,0.97)" : "#022B24",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: "1px solid rgba(201,162,74,0.18)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-6 md:px-8">

        {/* ── Return to SYANOR (desktop) ── */}
        <Link
          href="/"
          className="hidden shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-all duration-200 hover:bg-white/5 sm:flex"
          style={{ border: "1px solid rgba(201,162,74,0.28)", color: "rgba(201,162,74,0.70)" }}
        >
          <ArrowLeft className="h-2.5 w-2.5" />
          SYANOR VOYAGES
        </Link>

        {/* Divider */}
        <div
          className="hidden h-5 w-px shrink-0 sm:block"
          style={{ background: "rgba(201,162,74,0.16)" }}
          aria-hidden="true"
        />

        {/* ── Logo — real PNG (background removed) ── */}
        <Link href="/omra-hajj" className="flex items-center gap-2.5 transition-opacity hover:opacity-85">
          <img
            src="/omra-factory-logo.png"
            alt="Omra Factory"
            className="h-9 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p
            className="hidden text-[0.52rem] font-semibold uppercase tracking-[0.16em] sm:block"
            style={{ color: "rgba(201,162,74,0.55)" }}
          >
            by SYANOR VOYAGES
          </p>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigation Omra Factory">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-150 hover:bg-white/5"
              style={{ color: "rgba(255,249,237,0.68)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/8 lg:hidden"
          style={{ color: "rgba(255,249,237,0.70)" }}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? (
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
      {open && (
        <div
          className="border-t lg:hidden"
          style={{ background: "#011A15", borderColor: "rgba(201,162,74,0.14)" }}
        >
          {/* Return to SYANOR — prominent in mobile */}
          <div className="border-b px-6 py-4" style={{ borderColor: "rgba(201,162,74,0.10)" }}>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all hover:bg-white/5"
              style={{ border: "1px solid rgba(201,162,74,0.25)", color: "rgba(201,162,74,0.80)" }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour à SYANOR VOYAGES
            </Link>
          </div>

          <nav className="space-y-0.5 px-4 py-4" aria-label="Navigation Omra Factory mobile">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5"
                style={{ color: "rgba(255,249,237,0.75)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default function OmraFactoryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <OmraHeader />
      <main className="page-enter">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
