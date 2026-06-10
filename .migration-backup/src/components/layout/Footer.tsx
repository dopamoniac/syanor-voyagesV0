import Link from "next/link";
import { CONTACT, footerServices } from "@/data/navigation";

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Conditions générales", href: "/conditions-generales" },
];

export default function Footer() {
  return (
    <footer className="bg-syanor-royal text-syanor-pearl">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-playfair text-2xl font-bold text-syanor-ivory">
              SYANOR <span className="text-syanor-gold">VOYAGES</span>
            </p>
            <p className="mt-2 font-inter text-sm italic text-syanor-gold-soft">
              La Renaissance du Voyage
            </p>
            <p className="mt-4 text-sm leading-relaxed text-syanor-pearl/70">
              Agence de voyages premium dédiée aux billets, séjours, voyages
              spirituels et accompagnements sur mesure.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg text-syanor-ivory">Services</h3>
            <div className="mt-4 w-12 gold-divider" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-sm text-syanor-pearl/70">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="transition hover:text-syanor-gold">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg text-syanor-ivory">Contact</h3>
            <div className="mt-4 w-12 gold-divider" aria-hidden="true" />
            <ul className="mt-4 space-y-3 text-sm text-syanor-pearl/70">
              <li>
                <a href={CONTACT.phoneHref} className="transition hover:text-syanor-gold">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="transition hover:text-syanor-gold">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.siteHref} className="transition hover:text-syanor-gold">
                  {CONTACT.site}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  className="inline-flex items-center gap-2 transition hover:text-syanor-gold"
                >
                  <span aria-hidden="true">💬</span> WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-playfair text-lg text-syanor-ivory">Légal</h3>
            <div className="mt-4 w-12 gold-divider" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-sm text-syanor-pearl/70">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-syanor-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-syanor-gold/25 pt-6 text-center">
          <p className="text-xs text-syanor-pearl/60">
            © 2025 SYANOR VOYAGES · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
