import Link from "@/components/Link";
import { CONTACT } from "@/data/navigation";

export default function ContactEditorial() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: "#F8F4EE" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-end">

          {/* Left: editorial text + contact links */}
          <div>
            <p className="text-[0.52rem] font-bold uppercase tracking-[0.30em] mb-5" style={{ color: "#D8B56A" }}>
              Nous contacter
            </p>
            <h2
              className="font-playfair font-light leading-[1.04] mb-6"
              style={{ color: "#0B1E3D", fontSize: "clamp(2.0rem, 4vw, 3.2rem)" }}
            >
              Parlons de<br />votre prochain voyage.
            </h2>
            <p className="text-sm leading-relaxed mb-10 max-w-md" style={{ color: "rgba(11,30,61,0.52)" }}>
              Un conseiller SYANOR VOYAGES vous répond rapidement par téléphone, WhatsApp
              ou email. Demandez une proposition gratuite, sans engagement.
            </p>

            {/* Contact links — editorial text links, not cards */}
            <div className="space-y-4">
              <a
                href={CONTACT.phoneHref}
                className="group flex items-baseline gap-4"
              >
                <span
                  className="text-[0.48rem] font-mono font-bold tracking-[0.26em] shrink-0 mt-1"
                  style={{ color: "rgba(216,181,106,0.50)" }}
                >
                  TEL
                </span>
                <span
                  className="font-playfair text-lg leading-none transition-colors duration-200 group-hover:text-[#D8B56A]"
                  style={{ color: "#0B1E3D" }}
                >
                  {CONTACT.phone}
                </span>
              </a>
              <div className="h-px ml-12" style={{ background: "rgba(11,30,61,0.08)" }} aria-hidden="true" />

              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-4"
              >
                <span
                  className="text-[0.48rem] font-mono font-bold tracking-[0.26em] shrink-0 mt-1"
                  style={{ color: "rgba(216,181,106,0.50)" }}
                >
                  WA
                </span>
                <span
                  className="font-playfair text-lg leading-none transition-colors duration-200 group-hover:text-[#D8B56A]"
                  style={{ color: "#0B1E3D" }}
                >
                  WhatsApp
                </span>
              </a>
              <div className="h-px ml-12" style={{ background: "rgba(11,30,61,0.08)" }} aria-hidden="true" />

              <a
                href={CONTACT.emailHref}
                className="group flex items-baseline gap-4"
              >
                <span
                  className="text-[0.48rem] font-mono font-bold tracking-[0.26em] shrink-0 mt-1"
                  style={{ color: "rgba(216,181,106,0.50)" }}
                >
                  MAIL
                </span>
                <span
                  className="font-playfair text-lg leading-none transition-colors duration-200 group-hover:text-[#D8B56A] break-all"
                  style={{ color: "#0B1E3D" }}
                >
                  {CONTACT.email}
                </span>
              </a>
            </div>
          </div>

          {/* Right: CTA panel */}
          <div
            className="rounded-[28px] p-8 md:p-10"
            style={{
              background: "#0B1E3D",
              border: "1px solid rgba(216,181,106,0.14)",
            }}
          >
            <p
              className="font-playfair text-xl font-light leading-snug mb-3"
              style={{ color: "#F8F4EE" }}
            >
              Votre devis gratuit,<br />sous 24 heures.
            </p>
            <p className="text-[0.70rem] leading-relaxed mb-8" style={{ color: "rgba(248,244,238,0.45)" }}>
              Décrivez votre projet voyage et recevez une proposition personnalisée
              — billets, séjour, VIP ou sur mesure.
            </p>

            {/* Primary CTA */}
            <Link
              href="/contact#quote"
              className="block w-full rounded-full py-3.5 text-center text-sm font-semibold transition-all duration-200 hover:shadow-[0_8px_28px_rgba(216,181,106,0.30)] hover:-translate-y-px mb-3"
              style={{
                background: "linear-gradient(135deg, #D8B56A 0%, #c9a55e 100%)",
                color: "#0B1E3D",
              }}
            >
              Demander un devis gratuit
            </Link>

            {/* Secondary CTA */}
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full rounded-full py-3.5 text-center text-sm font-semibold transition-all duration-200 hover:bg-white/10"
              style={{
                border: "1px solid rgba(248,244,238,0.14)",
                color: "#F8F4EE",
              }}
            >
              {/* WhatsApp icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Écrire sur WhatsApp
            </a>

            {/* Trust note */}
            <p className="mt-6 text-center text-[0.60rem]" style={{ color: "rgba(248,244,238,0.28)" }}>
              Réponse garantie sous 24h · Sans engagement
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
