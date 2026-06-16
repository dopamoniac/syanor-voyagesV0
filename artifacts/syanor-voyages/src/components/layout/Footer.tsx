import Link from "@/components/Link";
import Logo from "@/components/ui/Logo";
import { CONTACT, footerServices } from "@/data/navigation";

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Conditions générales", href: "/conditions-generales" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-syanor-royal text-syanor-pearl">
      {/* Subtle ambient glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/3 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(201,162,74,0.25), transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] -translate-x-1/3 translate-y-1/2 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, rgba(201,162,74,0.18), transparent 65%)" }}
        aria-hidden="true"
      />
      {/* Gold hairline at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-syanor-gold/50 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="SYANOR VOYAGES — Accueil">
              <Logo variant="light" className="max-w-[155px]" />
            </Link>
            <p className="mt-2 font-playfair text-sm italic text-syanor-gold-soft">
              La Renaissance du Voyage
            </p>
            <p className="mt-4 text-sm leading-relaxed text-syanor-pearl/65">
              Agence de voyages premium dédiée aux billets, séjours, voyages
              spirituels et accompagnements sur mesure — depuis Nice.
            </p>
            {/* WhatsApp CTA */}
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-syanor-gold/25 px-4 py-2 text-xs font-medium text-syanor-pearl/70 transition hover:border-syanor-gold hover:text-syanor-gold"
              aria-label="Contacter SYANOR VOYAGES sur WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4 text-syanor-gold" />
              WhatsApp
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-base text-syanor-ivory">Services</h3>
            <div className="mt-3 w-10 gold-divider" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-sm">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-syanor-pearl/60 transition hover:text-syanor-gold">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-base text-syanor-ivory">Contact</h3>
            <div className="mt-3 w-10 gold-divider" aria-hidden="true" />
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={CONTACT.phoneHref} className="text-syanor-pearl/60 transition hover:text-syanor-gold">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="text-syanor-pearl/60 transition hover:text-syanor-gold">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.siteHref} className="text-syanor-pearl/60 transition hover:text-syanor-gold">
                  {CONTACT.site}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-playfair text-base text-syanor-ivory">Légal</h3>
            <div className="mt-3 w-10 gold-divider" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-syanor-pearl/60 transition hover:text-syanor-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Quick links */}
            <div className="mt-6 space-y-2 border-t border-syanor-gold/15 pt-5 text-sm">
              <Link href="/faq" className="block text-syanor-pearl/60 transition hover:text-syanor-gold">FAQ</Link>
              <Link href="/blog" className="block text-syanor-pearl/60 transition hover:text-syanor-gold">Blog</Link>
              <Link href="/contact" className="block text-syanor-pearl/60 transition hover:text-syanor-gold">Contact</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-syanor-gold/20 pt-6 sm:flex-row">
          <p className="text-xs text-syanor-pearl/45">
            © 2025–2026 SYANOR VOYAGES · Tous droits réservés
          </p>
          <p className="text-xs text-syanor-pearl/35">Agence de voyages  · Nice, France</p>
        </div>
      </div>
    </footer>
  );
}
