
import { useEffect } from "react";
import Link from "@/components/Link";
import { mainNav } from "@/data/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
      className={`fixed inset-0 z-[60] flex flex-col bg-syanor-emerald transition-all duration-300 xl:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-playfair text-xl font-bold text-syanor-ivory">
          SYANOR <span className="text-syanor-gold">VOYAGES</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer le menu"
          className="flex h-11 w-11 items-center justify-center rounded-full text-syanor-ivory hover:text-syanor-gold"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Scrollable grouped nav */}
      <nav className="flex-1 overflow-y-auto px-6 pb-6">
        {mainNav.map((item) => (
          <div key={item.label} className="border-b border-syanor-gold/15 py-4">
            <Link
              href={item.href}
              onClick={onClose}
              className="block font-playfair text-xl text-syanor-ivory transition hover:text-syanor-gold"
            >
              {item.label}
            </Link>
            {item.children && (
              <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="rounded-lg py-1.5 text-sm text-syanor-champagne/80 transition hover:text-syanor-gold"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer CTA */}
      <div className="border-t border-syanor-gold/20 p-6">
        <Link href="/contact#quote" onClick={onClose} className="btn-gold w-full">
          Demander un devis
        </Link>
      </div>
    </div>
  );
}
