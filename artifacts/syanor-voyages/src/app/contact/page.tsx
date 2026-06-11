type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import SmartQuoteForm from "@/components/sections/SmartQuoteForm";
import FaqSection from "@/components/sections/FaqSection";
import Icon from "@/components/ui/Icon";
import Link from "@/components/Link";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact & Devis Personnalisé | SYANOR VOYAGES",
  description:
    "Demandez votre devis personnalisé en 4 étapes : service, voyage, confort et coordonnées. Billets, Omra, Hajj, séjours sur mesure. Réponse sous 24h.",
  alternates: { canonical: "/contact" },
};

/* ─────────────────────────────────────────────────────────────────
   LOCAL CONSTANTS
───────────────────────────────────────────────────────────────── */
const WHY_SYANOR = [
  { icon: "star",       title: "Proposition personnalisée",     desc: "Chaque demande est étudiée individuellement" },
  { icon: "calendar",   title: "Conseils selon vos dates",      desc: "Les meilleures options selon votre timing" },
  { icon: "diamond",    title: "Choix du confort",              desc: "Standard, Premium ou VIP selon vos préférences" },
  { icon: "hand-heart", title: "Accompagnement humain",         desc: "Un conseiller dédié tout au long du voyage" },
  { icon: "shield",     title: "Réponse claire et structurée",  desc: "Devis détaillé, sans surprise ni engagement" },
];

const PROCESS_STEPS = [
  "Vous décrivez votre besoin via le formulaire",
  "Nous analysons les meilleures options disponibles",
  "Vous recevez une proposition personnalisée",
  "Vous validez sereinement à votre rythme",
];

const CONTACT_FAQ = [
  {
    question: "Quand vais-je recevoir une réponse ?",
    answer: "Nous vous contactons généralement sous 24h en semaine. Pour les demandes urgentes, WhatsApp est le moyen le plus rapide.",
  },
  {
    question: "Puis-je demander seulement un billet ?",
    answer: "Absolument. SYANOR VOYAGES propose des billets avion et bateau indépendamment de tout pack. Sélectionnez simplement « Billet avion » ou « Billet bateau » à l'étape 1.",
  },
  {
    question: "Puis-je modifier ma demande après envoi ?",
    answer: "Bien sûr. Votre devis n'est pas un engagement. Contactez-nous par WhatsApp ou par email pour ajuster les détails avant validation.",
  },
  {
    question: "Proposez-vous des packs famille ou groupe ?",
    answer: "Oui. Nous proposons des tarifs adaptés pour les groupes (à partir de 4 personnes) et les familles. Précisez-le dans le message complémentaire.",
  },
  {
    question: "Mes données sont-elles confidentielles ?",
    answer: "Vos informations sont utilisées uniquement pour traiter votre demande de devis. Elles ne sont jamais partagées avec des tiers.",
  },
];

const POSSIBILITIES = [
  { icon: "airplane",   label: "Billet avion",         href: "/contact?service=billet-avion#quote" },
  { icon: "crescent",   label: "Omra & Hajj",           href: "/contact?service=omra#quote" },
  { icon: "compass",    label: "Séjour sur mesure",     href: "/contact?service=sejour-sur-mesure#quote" },
  { icon: "diamond",    label: "Pack Premium / VIP",    href: "/contact?service=pack-vip#quote" },
  { icon: "anchor",     label: "Billet bateau",         href: "/contact?service=billet-bateau#quote" },
  { icon: "clipboard",  label: "Assistance visa",       href: "/contact?service=visa#quote" },
];

/* ─────────────────────────────────────────────────────────────────
   RIGHT PANEL
───────────────────────────────────────────────────────────────── */
function QuoteAssistPanel() {
  return (
    <div className="space-y-4">

      {/* Why SYANOR */}
      <div className="rounded-2xl border border-syanor-gold/20 bg-syanor-ivory p-6 shadow-card">
        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold">
          Pourquoi SYANOR VOYAGES ?
        </p>
        <ul className="mt-4 space-y-3.5">
          {WHY_SYANOR.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald" aria-hidden="true">
                <Icon name={item.icon} className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-syanor-ink">{item.title}</p>
                <p className="mt-0.5 text-xs text-syanor-ink/45">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact shortcuts */}
      <div className="rounded-2xl border border-syanor-gold/20 bg-syanor-ivory p-6 shadow-card">
        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold">
          Contact direct
        </p>
        <div className="mt-4 space-y-2.5">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-syanor-emerald px-4 py-3 text-syanor-ivory transition-all duration-200 hover:bg-syanor-royal active:scale-[0.98]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <div className="min-w-0">
              <p className="text-sm font-semibold">WhatsApp</p>
              <p className="truncate text-xs text-syanor-ivory/65">{CONTACT.whatsapp}</p>
            </div>
          </a>

          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-3 rounded-xl border border-syanor-gold/20 bg-syanor-pearl px-4 py-3 transition-all duration-200 hover:border-syanor-gold/40 hover:shadow-card active:scale-[0.98]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald" aria-hidden="true">
              <Icon name="phone" className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-syanor-ink">Téléphone</p>
              <p className="truncate text-xs text-syanor-ink/45">{CONTACT.phone}</p>
            </div>
          </a>

          <a
            href={CONTACT.emailHref}
            className="flex items-center gap-3 rounded-xl border border-syanor-gold/20 bg-syanor-pearl px-4 py-3 transition-all duration-200 hover:border-syanor-gold/40 hover:shadow-card active:scale-[0.98]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald" aria-hidden="true">
              <Icon name="mail" className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-syanor-ink">Email</p>
              <p className="truncate text-xs text-syanor-ink/45">{CONTACT.email}</p>
            </div>
          </a>
        </div>
      </div>

      {/* Mini process */}
      <div className="rounded-2xl border border-syanor-gold/20 bg-syanor-ivory p-6 shadow-card">
        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold">
          Comment ça marche
        </p>
        <ol className="mt-4 space-y-3">
          {PROCESS_STEPS.map((text, i) => (
            <li key={text} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-syanor-gold/12 text-[0.65rem] font-bold text-syanor-gold" aria-hidden="true">
                {i + 1}
              </span>
              <p className="text-sm text-syanor-ink/65 leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Trust note */}
      <p className="text-center text-xs text-syanor-ink/35">
        🔒 Vos informations sont confidentielles et utilisées uniquement pour traiter votre demande.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <SiteLayout>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pb-16 pt-28"
        style={{ background: "linear-gradient(135deg, #022B24 0%, #063F33 70%)" }}
      >
        {/* Dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{ backgroundImage: "radial-gradient(circle, #C9A24A 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          aria-hidden="true"
        />
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-syanor-gold/6 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-syanor-emerald/25 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-syanor-gold/80">
              <span className="h-px w-8 bg-syanor-gold/40" aria-hidden="true" />
              Contact & Devis personnalisé
            </p>

            {/* Title */}
            <h1 className="mt-4 font-playfair text-4xl leading-tight text-syanor-ivory sm:text-5xl lg:text-6xl">
              Construisons votre voyage sur mesure.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg leading-relaxed text-syanor-champagne/70">
              En quelques étapes, sélectionnez votre service, vos dates, votre niveau de confort et vos préférences. L'équipe SYANOR VOYAGES vous prépare une proposition claire et personnalisée.
            </p>

            {/* Trust line */}
            <p className="mt-3 text-sm text-syanor-gold/60">
              Billets · Omra · Hajj · Séjours · Visas · Hôtels · Transferts — votre demande est traitée avec attention et confidentialité.
            </p>

            {/* Trust badges */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["Réponse sous 24h", "Accompagnement complet", "Conseiller dédié"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-syanor-gold/20 bg-syanor-royal/50 px-4 py-1.5 text-xs font-medium text-syanor-champagne/75"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-syanor-gold" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN 2-COL SECTION ── */}
      <section id="quote" className="section-pad scroll-mt-20 bg-syanor-pearl/70">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px] lg:gap-12">
            {/* Left: form */}
            <SmartQuoteForm embedded />

            {/* Right: sticky panel */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <QuoteAssistPanel />
            </div>
          </div>
        </div>
      </section>

      {/* ── POSSIBILITIES ── */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="eyebrow">Une demande, plusieurs possibilités</p>
              <h2 className="mt-3 font-playfair text-3xl text-syanor-ink">
                Quel que soit votre projet, nous avons une solution.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-syanor-ink/60">
                Billet seul, pack complet, voyage spirituel, séjour premium, assistance visa — décrivez votre besoin et laissez-nous composer la meilleure proposition.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {POSSIBILITIES.map((p, i) => (
              <Reveal key={p.label} delay={i * 60}>
                <Link
                  href={p.href}
                  className="group flex flex-col items-center gap-2.5 rounded-2xl border border-syanor-gold/20 bg-syanor-pearl p-4 text-center transition-all duration-200 hover:border-syanor-gold/40 hover:-translate-y-0.5 hover:shadow-card active:scale-[0.97]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald transition-colors duration-200 group-hover:bg-syanor-emerald group-hover:text-syanor-gold" aria-hidden="true">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-syanor-ink">{p.label}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Tips */}
          <Reveal delay={200}>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: "clock",
                  title: "Des dates précises, une meilleure offre",
                  text: "Plus vos dates sont précises, plus la proposition sera adaptée à votre planning.",
                },
                {
                  icon: "users",
                  title: "Omra & Hajj — précisez le groupe",
                  text: "Indiquez le nombre de voyageurs et le niveau de confort souhaité pour un devis exact.",
                },
                {
                  icon: "airplane",
                  title: "Billets avion / bateau",
                  text: "Pour les billets, précisez le départ, la destination et les dates pour obtenir les meilleures options.",
                },
              ].map((tip) => (
                <div key={tip.title} className="flex items-start gap-3 rounded-2xl border border-syanor-gold/15 bg-syanor-pearl/80 p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-syanor-emerald/8 text-syanor-emerald" aria-hidden="true">
                    <Icon name={tip.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-syanor-ink">{tip.title}</p>
                    <p className="mt-0.5 text-xs text-syanor-ink/50 leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── QUICK CONTACT ── */}
      <section className="bg-syanor-royal py-14">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-syanor-gold/70">
            Besoin d'une réponse rapide ?
          </p>
          <h2 className="mt-3 font-playfair text-3xl text-syanor-ivory">
            Notre équipe est disponible sur WhatsApp.
          </h2>
          <p className="mt-3 text-syanor-champagne/60">
            Pour toute demande urgente ou simple question, écrivez-nous directement.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Écrire sur WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-syanor-gold/30 px-7 py-3.5 text-sm font-semibold text-syanor-champagne/80 transition hover:border-syanor-gold hover:text-syanor-gold"
            >
              <Icon name="phone" className="h-4 w-4" />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection
        items={CONTACT_FAQ}
        title="Questions fréquentes — contact & devis"
      />
    </SiteLayout>
  );
}
