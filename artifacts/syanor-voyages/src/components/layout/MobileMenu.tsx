
import { useEffect } from "react";
import { useLocation } from "wouter";
import Link from "@/components/Link";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import { CONTACT } from "@/data/navigation";

function isNavActive(href: string, loc: string): boolean {
  if (href === "/agence") return loc === "/agence" || loc === "/agence/";
  const base = href.split("?")[0].split("#")[0];
  return loc === base || loc.startsWith(base + "/");
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const SYANOR_SERVICES = [
  { label: "Billets Avion",       href: "/agence/services/billets-avion",  icon: "airplane"  },
  { label: "Billets Bateau",      href: "/agence/services/billets-bateau", icon: "anchor"    },
  { label: "Voyages Organisés",   href: "/agence/voyages-organises",       icon: "route"     },
  { label: "Séjours Sur Mesure",  href: "/agence/sejours-sur-mesure",      icon: "compass"   },
  { label: "Packs Premium / VIP", href: "/agence/services#packs",          icon: "diamond"   },
  { label: "Visas & Assistance",  href: "/agence/visas",                   icon: "clipboard" },
];

const QUICK_NAV = [
  { label: "Accueil",  href: "/agence",         icon: "compass" },
  { label: "Offres",   href: "/agence/offres",  icon: "star"    },
  { label: "Blog",     href: "/agence/blog",    icon: "book"    },
  { label: "FAQ",      href: "/agence/faq",     icon: "shield"  },
  { label: "Contact",  href: "/agence/contact", icon: "phone"   },
];

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

function ChevronRight() {
  return (
    <svg className="ml-auto h-3.5 w-3.5 shrink-0 text-white/20 transition-colors group-hover:text-white/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionLabel({ children, emerald = false }: { children: React.ReactNode; emerald?: boolean }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <p className={`shrink-0 text-[0.58rem] font-bold uppercase tracking-[0.22em] ${emerald ? "text-syanor-gold" : "text-syanor-gold/70"}`}>
        {children}
      </p>
      <div className="h-px flex-1 bg-gradient-to-r from-syanor-gold/25 to-transparent" aria-hidden="true" />
    </div>
  );
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [location] = useLocation();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      {/* ── BACKDROP ─────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-[48] bg-black/55 transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100 backdrop-blur-[3px]" : "pointer-events-none opacity-0"
        }`}
      />

      {/* ── PANEL ────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed inset-y-0 right-0 z-[60] flex w-full max-w-[340px] flex-col overflow-hidden shadow-[−16px_0_80px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "linear-gradient(168deg,#063F33 0%,#022B24 55%,#011a15 100%)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 55% 32% at 100% 0%,rgba(201,162,74,0.13),transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 65% 28% at 0% 100%,rgba(2,43,36,0.7),transparent)" }}
        />

        {/* ── HEADER ─────────────────────────────────────────── */}
        <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <Link href="/agence" onClick={onClose} aria-label="SYANOR VOYAGES — Agence">
            <Logo className="max-w-[118px]" />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter sur WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-syanor-gold/30 text-syanor-gold/75 transition-all duration-200 hover:border-syanor-gold hover:bg-syanor-gold/10 hover:text-syanor-gold active:scale-[0.94]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={WA_PATH} />
              </svg>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer le menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] text-white/45 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.07] hover:text-white active:scale-[0.94]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── SCROLLABLE BODY ────────────────────────────────── */}
        <nav
          className="relative z-10 flex-1 overflow-y-auto overscroll-contain px-5 py-6"
          aria-label="Navigation mobile"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Quick Nav grid */}
          <div className="mb-7">
            <SectionLabel>Navigation</SectionLabel>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
              {QUICK_NAV.map((item) => {
                const active = isNavActive(item.href, location);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex flex-col items-center gap-1.5 rounded-2xl px-2 py-3 text-center transition-all duration-200 active:scale-[0.95]"
                    style={
                      active
                        ? { border: "1px solid rgba(216,181,106,0.55)", background: "rgba(216,181,106,0.12)" }
                        : { border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.04)" }
                    }
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full"
                      aria-hidden="true"
                      style={
                        active
                          ? { background: "rgba(216,181,106,0.22)", color: "#D8B56A" }
                          : { background: "rgba(201,162,74,0.10)", color: "rgba(201,162,74,0.80)" }
                      }
                    >
                      <Icon name={item.icon} className="h-3.5 w-3.5" />
                    </span>
                    <span
                      className="text-[0.68rem] font-medium leading-tight"
                      style={{ color: active ? "#D8B56A" : "rgba(255,249,237,0.70)" }}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* SYANOR VOYAGES services */}
          <div className="mb-7">
            <SectionLabel>SYANOR VOYAGES</SectionLabel>
            <div className="space-y-0.5">
              {SYANOR_SERVICES.map((s) => {
                const active = isNavActive(s.href, location);
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={onClose}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 active:scale-[0.98]"
                    style={active ? { background: "rgba(216,181,106,0.08)" } : undefined}
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
                      aria-hidden="true"
                      style={
                        active
                          ? { background: "rgba(216,181,106,0.18)", color: "#D8B56A" }
                          : { background: "rgba(255,255,255,0.06)", color: "rgba(201,162,74,0.65)" }
                      }
                    >
                      <Icon name={s.icon} className="h-3.5 w-3.5" />
                    </span>
                    <span
                      className="text-sm font-medium transition-colors"
                      style={{ color: active ? "#D8B56A" : "rgba(255,249,237,0.70)" }}
                    >
                      {s.label}
                    </span>
                    <ChevronRight />
                  </Link>
                );
              })}
            </div>
            <Link
              href="/agence/contact?universe=syanor#quote"
              onClick={onClose}
              className="mt-3 inline-flex items-center gap-1.5 text-[0.68rem] font-medium text-syanor-gold/55 transition-colors hover:text-syanor-gold"
            >
              Demander un devis SYANOR <ArrowRight />
            </Link>
          </div>

          {/* Retour au portail */}
          <div className="mb-4 border-t border-white/[0.06] pt-5">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2.5 rounded-xl border border-syanor-gold/20 px-4 py-3 text-sm font-medium text-syanor-gold/60 transition-all hover:border-syanor-gold/40 hover:text-syanor-gold/80"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Retour au portail
            </Link>
          </div>

        </nav>

        {/* ── BOTTOM CTA AREA ───────────────────────────────── */}
        <div
          className="relative z-10 shrink-0 border-t border-white/[0.06] px-5 pb-6 pt-4"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <div className="mb-3 flex gap-2.5">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-syanor-gold/30 py-2.5 text-sm font-medium text-syanor-ivory/70 transition-all duration-200 hover:border-syanor-gold hover:text-syanor-gold active:scale-[0.96]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={WA_PATH} />
              </svg>
              WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/[0.12] py-2.5 text-sm font-medium text-syanor-ivory/55 transition-all duration-200 hover:border-white/30 hover:text-syanor-ivory active:scale-[0.96]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.19 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Appeler
            </a>
          </div>

          <Link
            href="/agence/contact#quote"
            onClick={onClose}
            className="btn-gold flex w-full items-center justify-center gap-2 py-3.5 text-base"
          >
            <Icon name="sparkle" className="h-4 w-4" aria-hidden="true" />
            Demander un devis
          </Link>
        </div>
      </div>
    </>
  );
}
