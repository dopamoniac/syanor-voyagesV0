import Link from "@/components/Link";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/data/navigation";

const contacts = [
  { icon: "phone", label: "Téléphone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: "mail", label: "Email", value: CONTACT.email, href: CONTACT.emailHref },
  { icon: "globe", label: "Site web", value: CONTACT.site, href: CONTACT.siteHref },
];

export default function ContactCards({
  withCta = true,
}: {
  withCta?: boolean;
}) {
  return (
    <section id="contact" className="section-pad bg-syanor-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader eyebrow="Nous contacter" title="Parlons de votre prochain voyage." />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                className="flex h-full flex-col items-center rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-wide text-syanor-gold">
                  {c.label}
                </p>
                <p className="mt-1 font-playfair text-lg text-syanor-ink">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>

        {withCta && (
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/agence/contact#quote" className="btn-primary">
              Demander un devis
            </Link>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
