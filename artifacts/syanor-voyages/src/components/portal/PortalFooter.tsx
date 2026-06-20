import Link from "@/components/Link";
import { CONTACT } from "@/data/navigation";

export default function PortalFooter() {
  return (
    <footer
      style={{
        background: "rgba(2,43,36,0.97)",
        borderTop: "1px solid rgba(216,181,106,0.18)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">
            <p className="font-playfair text-xl font-semibold" style={{ color: "#F8F4EE" }}>
              SYANOR VOYAGES
            </p>
            <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(216,181,106,0.65)" }}>
              La Renaissance du Voyage
            </p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(248,244,238,0.55)" }}>
              SYANOR Voyages réunit deux univers premium : une agence de voyages
              complète et Omra Factory, un espace dédié aux voyages spirituels.
            </p>
          </div>

          {/* Two portals */}
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:gap-2">
            <Link
              href="/agence"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "rgba(216,181,106,0.12)", border: "1px solid rgba(216,181,106,0.35)", color: "#D8B56A" }}
            >
              <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Agence de Voyages
            </Link>
            <Link
              href="/omra-factory"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "rgba(216,181,106,0.12)", border: "1px solid rgba(216,181,106,0.35)", color: "#D8B56A" }}
            >
              <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              Omra Factory
            </Link>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-[0.58rem] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(216,181,106,0.60)" }}>
              Contact
            </p>
            <ul className="space-y-1.5 text-sm" style={{ color: "rgba(248,244,238,0.50)" }}>
              <li>
                <a href={CONTACT.phoneHref} className="transition hover:text-syanor-gold">{CONTACT.phone}</a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="transition hover:text-syanor-gold">{CONTACT.email}</a>
              </li>
              <li style={{ color: "rgba(248,244,238,0.30)" }}>Nice, France</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 border-t pt-5 flex flex-col items-center justify-between gap-2 sm:flex-row"
          style={{ borderColor: "rgba(216,181,106,0.10)" }}
        >
          <p className="text-[0.62rem]" style={{ color: "rgba(248,244,238,0.22)" }}>
            © {new Date().getFullYear()} SYANOR VOYAGES · Tous droits réservés · Nice, France
          </p>
          <div className="flex gap-4 text-[0.62rem]" style={{ color: "rgba(248,244,238,0.22)" }}>
            <Link href="/agence/mentions-legales" className="hover:text-syanor-gold transition">Mentions légales</Link>
            <Link href="/agence/politique-confidentialite" className="hover:text-syanor-gold transition">Confidentialité</Link>
            <Link href="/agence/conditions-generales" className="hover:text-syanor-gold transition">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
