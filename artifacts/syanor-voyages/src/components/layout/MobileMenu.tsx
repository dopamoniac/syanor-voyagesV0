
import { useEffect, useRef } from "react";
import Link from "@/components/Link";
import Logo from "@/components/ui/Logo";
import { CONTACT } from "@/data/navigation";
import { omraMonths, getMonthsByYear } from "@/data/months";
import { departureCities } from "@/data/cities";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const SERVICES = [
  { label: "Billets Avion", href: "/services/billets-avion", icon: "✈" },
  { label: "Billets Bateau", href: "/services/billets-bateau", icon: "⚓" },
  { label: "Voyages Organisés", href: "/voyages-organises", icon: "🗺" },
  { label: "Séjours Sur Mesure", href: "/sejours-sur-mesure", icon: "✏" },
  { label: "Packs Premium / VIP", href: "/services#packs", icon: "👑" },
];

const AIDE = [
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Visas", href: "/visas" },
  { label: "Formation", href: "/formation" },
  { label: "Contact", href: "/contact" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-syanor-gold/15 py-5">
      <p className="mb-3 px-1 text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold">
        {title}
      </p>
      {children}
    </div>
  );
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const months2026 = getMonthsByYear("2026");
  const months2027 = getMonthsByYear("2027");

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
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
      className={`fixed inset-0 z-[60] flex flex-col bg-syanor-emerald transition-all duration-300 xl:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between px-5 py-4">
        <Link href="/" onClick={onClose} aria-label="SYANOR VOYAGES">
          <Logo variant="light" className="max-w-[130px]" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer le menu"
          className="flex h-11 w-11 items-center justify-center rounded-full text-syanor-ivory/80 hover:text-syanor-gold"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Scrollable body */}
      <nav className="flex-1 overflow-y-auto px-5 pb-4" aria-label="Navigation mobile">

        {/* Omra & Hajj */}
        <Section title="Omra & Hajj">
          <div className="space-y-4">
            {/* Omra 2026 */}
            <div>
              <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-champagne/60">
                Omra 2026
              </p>
              <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
                {months2026.map((m) => (
                  <Link
                    key={m.slug}
                    href={m.href}
                    onClick={onClose}
                    className="flex shrink-0 flex-col items-center rounded-xl border border-syanor-gold/25 bg-syanor-royal/60 px-3 py-2 transition hover:border-syanor-gold"
                  >
                    <span className="text-sm font-semibold text-syanor-ivory">{m.label}</span>
                    {m.departureCount > 0 && (
                      <span className="mt-0.5 text-[0.65rem] text-syanor-gold">{m.departureCount} départ{m.departureCount > 1 ? "s" : ""}</span>
                    )}
                  </Link>
                ))}
              </div>
              <Link href="/omra-2026" onClick={onClose} className="mt-2 block text-xs font-medium text-syanor-gold/80 hover:text-syanor-gold">
                → Voir tout Omra 2026
              </Link>
            </div>

            {/* Omra 2027 */}
            <div>
              <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-champagne/60">
                Omra 2027
              </p>
              <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
                {months2027.map((m) => (
                  <Link
                    key={m.slug}
                    href={m.href}
                    onClick={onClose}
                    className="flex shrink-0 flex-col items-center rounded-xl border border-syanor-gold/25 bg-syanor-royal/60 px-3 py-2 transition hover:border-syanor-gold"
                  >
                    <span className="text-sm font-semibold text-syanor-ivory">{m.label}</span>
                    {m.departureCount > 0 && (
                      <span className="mt-0.5 text-[0.65rem] text-syanor-gold">{m.departureCount} départ{m.departureCount > 1 ? "s" : ""}</span>
                    )}
                  </Link>
                ))}
              </div>
              <Link href="/omra-2027" onClick={onClose} className="mt-2 block text-xs font-medium text-syanor-gold/80 hover:text-syanor-gold">
                → Voir tout Omra 2027
              </Link>
            </div>

            {/* Hajj 2027 */}
            <Link
              href="/hajj-2027"
              onClick={onClose}
              className="flex items-center gap-3 rounded-xl border border-syanor-gold/30 bg-syanor-royal/40 px-4 py-3 transition hover:border-syanor-gold"
            >
              <span className="text-xl" aria-hidden="true">🕋</span>
              <div>
                <span className="block text-sm font-semibold text-syanor-ivory">Hajj 2027</span>
                <span className="block text-xs text-syanor-champagne/60">Pré-inscription ouverte</span>
              </div>
            </Link>
          </div>
        </Section>

        {/* Villes de départ */}
        <Section title="Villes de départ">
          <div className="grid grid-cols-2 gap-2">
            {departureCities.map((c) => (
              <Link
                key={c.slug}
                href={`/depart/${c.slug}`}
                onClick={onClose}
                className="flex items-center gap-2 rounded-xl border border-syanor-gold/20 bg-syanor-royal/40 px-3 py-2.5 transition hover:border-syanor-gold"
              >
                <span className="text-sm font-medium text-syanor-ivory">{c.name}</span>
                {c.confirmed && (
                  <span className="ml-auto h-2 w-2 shrink-0 rounded-full bg-syanor-gold" aria-label="confirmé" />
                )}
              </Link>
            ))}
          </div>
        </Section>

        {/* Services */}
        <Section title="Services">
          <div className="space-y-1">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-syanor-royal/50"
              >
                <span className="text-base" aria-hidden="true">{s.icon}</span>
                <span className="text-sm font-medium text-syanor-ivory">{s.label}</span>
              </Link>
            ))}
          </div>
        </Section>

        {/* Aide & Préparation */}
        <Section title="Aide & Préparation">
          <div className="grid grid-cols-2 gap-1">
            {AIDE.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                onClick={onClose}
                className="rounded-xl px-3 py-2 text-sm font-medium text-syanor-champagne/80 transition hover:text-syanor-gold"
              >
                {a.label}
              </Link>
            ))}
          </div>
        </Section>
      </nav>

      {/* Bottom CTA */}
      <div className="shrink-0 border-t border-syanor-gold/20 p-5 pb-safe">
        <div className="mb-3 grid grid-cols-2 gap-3">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-syanor-gold/40 py-2.5 text-sm font-medium text-syanor-ivory transition hover:border-syanor-gold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href={CONTACT.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-syanor-gold/40 py-2.5 text-sm font-medium text-syanor-ivory transition hover:border-syanor-gold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.19 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Appeler
          </a>
        </div>
        <Link href="/contact#quote" onClick={onClose} className="btn-gold w-full">
          Demander un devis
        </Link>
      </div>
    </div>
  );
}
