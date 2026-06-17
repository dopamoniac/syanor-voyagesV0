
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import Link from "@/components/Link";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import MobileMenu from "@/components/layout/MobileMenu";
import { mainNav, type NavItem, CONTACT } from "@/data/navigation";
import { departureCities } from "@/data/cities";
import { cn } from "@/lib/utils";

// All pages except the homepage have a dark hero — always show the glass navbar
// Homepage (/) has its own cinematic hero that starts transparent

const SERVICE_ICON: Record<string, string> = {
  "/services/billets-avion":           "airplane",
  "/services/billets-bateau":          "anchor",
  "/services/billets-avion#groupe":    "users",
  "/services/billets-avion#intl":      "globe",
  "/services/billets-bateau#vehicule": "route",
  "/voyages-organises":                "route",
  "/sejours-sur-mesure":               "compass",
  "/services#packs":                   "diamond",
  "/sejours-sur-mesure#noces":         "sparkle",
  "/sejours-sur-mesure#hotels":        "building",
  "/visas#assistance":                 "shield",
  "/visas":                            "clipboard",
};


function BilletsMegaPanel({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <div className="rounded-2xl border border-syanor-gold/20 bg-syanor-ivory p-5 shadow-card-hover">
      <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold">
        SYANOR VOYAGES — Billets
      </p>
      <div className="grid grid-cols-2 gap-1">
        {item.children!.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onClose}
            className="group/item flex items-start gap-3 rounded-xl px-4 py-3 transition hover:bg-syanor-champagne/40"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald transition-colors duration-200 group-hover/item:bg-syanor-emerald group-hover/item:text-syanor-gold" aria-hidden="true">
              <Icon name={SERVICE_ICON[child.href] ?? "airplane"} className="h-4 w-4" />
            </span>
            <div>
              <span className="block text-sm font-semibold text-syanor-ink group-hover/item:text-syanor-emerald">
                {child.label}
              </span>
              {child.desc && (
                <span className="mt-0.5 block text-xs text-syanor-ink/55">{child.desc}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-3 border-t border-syanor-gold/15 pt-3 text-center">
        <Link href="/contact?universe=syanor&service=billet-avion#quote" onClick={onClose} className="text-xs font-semibold text-syanor-emerald hover:underline">
          Demander un devis billets →
        </Link>
      </div>
    </div>
  );
}

function SejoursMegaPanel({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <div className="rounded-2xl border border-syanor-gold/20 bg-syanor-ivory p-5 shadow-card-hover">
      <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold">
        SYANOR VOYAGES — Séjours & Voyages
      </p>
      <div className="grid grid-cols-2 gap-1">
        {item.children!.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onClose}
            className="group/item flex items-start gap-3 rounded-xl px-4 py-3 transition hover:bg-syanor-champagne/40"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald transition-colors duration-200 group-hover/item:bg-syanor-emerald group-hover/item:text-syanor-gold" aria-hidden="true">
              <Icon name={SERVICE_ICON[child.href] ?? "compass"} className="h-4 w-4" />
            </span>
            <div>
              <span className="block text-sm font-semibold text-syanor-ink group-hover/item:text-syanor-emerald">
                {child.label}
              </span>
              {child.desc && (
                <span className="mt-0.5 block text-xs text-syanor-ink/55">{child.desc}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-3 border-t border-syanor-gold/15 pt-3 text-center">
        <Link href="/contact?universe=syanor#quote" onClick={onClose} className="text-xs font-semibold text-syanor-emerald hover:underline">
          Demander un devis séjour →
        </Link>
      </div>
    </div>
  );
}

function DefaultMegaPanel({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <div className="rounded-2xl border border-syanor-gold/20 bg-syanor-ivory p-4 shadow-card-hover">
      <div className="grid grid-cols-2 gap-1">
        {item.children!.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onClose}
            className="group/item rounded-xl px-4 py-3 transition hover:bg-syanor-champagne/40"
          >
            <span className="block text-sm font-semibold text-syanor-ink group-hover/item:text-syanor-emerald">
              {child.label}
            </span>
            {child.desc && (
              <span className="mt-0.5 block text-xs text-syanor-ink/55">{child.desc}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

interface MegaMenuWrapperProps {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function MegaMenuWrapper({ item, isOpen, onOpen, onClose }: MegaMenuWrapperProps) {
  const panelWidth =
    item.label === "Séjours & Voyages" ? "w-[520px]" :
    item.label === "Billets"           ? "w-[480px]" : "w-[480px]";

  const labelCls = cn(
    "whitespace-nowrap text-[0.8rem] font-medium transition-colors duration-150",
    isOpen ? "text-syanor-emerald" : "text-syanor-ink/75 hover:text-syanor-emerald"
  );
  return (
    <div className="relative flex items-center">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? onClose() : onOpen())}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); isOpen ? onClose() : onOpen(); }
          else if (e.key === "Escape") onClose();
          else if (e.key === "ArrowDown" && !isOpen) { e.preventDefault(); onOpen(); }
        }}
        className={cn(
          "group flex items-center gap-0.5 rounded-full px-2.5 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-syanor-gold/50",
          labelCls
        )}
      >
        {item.label}
        <svg
          className={cn("h-3 w-3 opacity-50 transition-transform duration-200", isOpen && "rotate-180")}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2.5 mega-panel",
            panelWidth
          )}
          role="region"
          aria-label={`Menu ${item.label}`}
        >
          {item.label === "Billets" ? (
            <BilletsMegaPanel item={item} onClose={onClose} />
          ) : item.label === "Séjours & Voyages" ? (
            <SejoursMegaPanel item={item} onClose={onClose} />
          ) : (
            <DefaultMegaPanel item={item} onClose={onClose} />
          )}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const forceBg = location !== "/";
  const showBg = scrolled || forceBg;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click-outside close
  useEffect(() => {
    if (!openMegaMenu) return;
    function handleOutsideClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMegaMenu(null);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [openMegaMenu]);

  // Escape key global close
  useEffect(() => {
    if (!openMegaMenu) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMegaMenu(null);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [openMegaMenu]);

  const handleMegaOpen = useCallback((label: string) => {
    setOpenMegaMenu(label);
  }, []);

  const handleMegaClose = useCallback(() => {
    setOpenMegaMenu(null);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          showBg
            ? "bg-syanor-ivory/94 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-5 md:px-8">
          {/* Logo */}
          <Link href="/" aria-label="SYANOR VOYAGES — Accueil" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav — visible at lg+ */}
          <nav className="hidden flex-1 items-center justify-center gap-0 lg:flex" aria-label="Navigation principale">
            {mainNav.map((item) =>
              item.children ? (
                <MegaMenuWrapper
                  key={item.label}
                  item={item}
                  isOpen={openMegaMenu === item.label}
                  onOpen={() => handleMegaOpen(item.label)}
                  onClose={handleMegaClose}
                />
              ) : item.label === "Omra Factory" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-syanor-gold/35 bg-syanor-gold/8 px-3 py-1.5 text-[0.78rem] font-semibold text-syanor-ink/80 transition-all duration-200 hover:border-syanor-gold hover:bg-syanor-gold/15 hover:text-syanor-ink"
                >
                  <svg className="h-3 w-3 text-syanor-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-[0.8rem] font-medium text-syanor-ink/75 transition-colors duration-150 hover:text-syanor-emerald"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop actions — visible at lg+ */}
          <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp SYANOR VOYAGES"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-syanor-gold/30 text-syanor-emerald transition-all duration-150 hover:border-syanor-emerald hover:bg-syanor-emerald/8 hover:text-syanor-emerald"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <Link
              href="/contact#quote"
              className="whitespace-nowrap rounded-full bg-syanor-emerald px-5 py-2 text-[0.8rem] font-semibold leading-none text-syanor-ivory shadow-sm transition-all duration-200 hover:bg-syanor-royal hover:shadow-card"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile menu toggle — hidden at lg+ */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 active:scale-[0.94] lg:hidden"
            style={{
              background: "#063F33",
              border: "1px solid rgba(212,175,55,0.45)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.14)",
            }}
          >
            <span className="flex flex-col items-center justify-center gap-[6px]" style={{ width: 18, height: 18 }}>
              <span className="block rounded-full" style={{ width: 18, height: 2, background: "#d8b45a" }} />
              <span className="block rounded-full" style={{ width: 18, height: 2, background: "#d8b45a" }} />
              <span className="block rounded-full" style={{ width: 18, height: 2, background: "#d8b45a" }} />
            </span>
          </button>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
