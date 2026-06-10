"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import { mainNav, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

function MegaMenu({ item }: { item: NavItem }) {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[480px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
      <div className="rounded-2xl border border-syanor-gold/20 bg-syanor-ivory p-4 shadow-card-hover">
        <div className="grid grid-cols-2 gap-1">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="group/item rounded-xl px-4 py-3 transition hover:bg-syanor-champagne/40"
            >
              <span className="block font-playfair text-sm font-semibold text-syanor-ink group-hover/item:text-syanor-emerald">
                {child.label}
              </span>
              {child.desc && (
                <span className="mt-0.5 block text-xs text-syanor-ink/55">
                  {child.desc}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-syanor-gold/25 bg-syanor-ivory/90 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <Link href="/" aria-label="SYANOR VOYAGES — Accueil" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-syanor-ink/80 transition hover:text-syanor-gold"
                  >
                    {item.label}
                    <svg className="h-3.5 w-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <MegaMenu item={item} />
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-syanor-ink/80 transition hover:text-syanor-gold"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden xl:block">
            <Link href="/contact#quote" className="btn-primary">
              Demander un devis
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-syanor-emerald xl:hidden"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
