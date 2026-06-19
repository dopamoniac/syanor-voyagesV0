type Metadata = Record<string, unknown>;
import Link from "@/components/Link";
import OmraFactoryLayout from "@/components/layout/OmraFactoryLayout";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/sections/FaqSection";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import PremiumDepartureCard from "@/components/ui/PremiumDepartureCard";
import { offers } from "@/data/offers";
import { omraMonths } from "@/data/months";
import { omraQuoteUrl } from "@/lib/utils";
import { omraBlogArticles } from "@/data/omraFactoryBlog";

export const metadata: Metadata = {
  title: "Omra Factory — Omra & Hajj | SYANOR VOYAGES",
  description:
    "Omra Factory, département Omra & Hajj de SYANOR VOYAGES. Omra 2026, Omra 2027, Hajj 2027, Omra Plus, Ramadan, Ziyarat, formation et accompagnement spirituel.",
  alternates: { canonical: "/omra-hajj" },
};

/* ─── Data ─────────────────────────────────────────── */
const months2026 = omraMonths.filter((m) => m.year === "2026");
const months2027 = omraMonths.filter((m) => m.year === "2027");

const upcomingOffers = offers
  .filter((o) => ["Omra", "Hajj", "Omra Plus", "Ramadan"].includes(o.category))
  .slice(0, 6);

const CITIES = [
  { name: "Nice",      slug: "nice",      flag: "🇫🇷", region: "PACA" },
  { name: "Marseille", slug: "marseille", flag: "🇫🇷", region: "PACA" },
  { name: "Lyon",      slug: "lyon",      flag: "🇫🇷", region: "Auvergne-Rhône-Alpes" },
  { name: "Paris",     slug: "paris",     flag: "🇫🇷", region: "Île-de-France" },
  { name: "Toulouse",  slug: "toulouse",  flag: "🇫🇷", region: "Occitanie" },
  { name: "Bruxelles", slug: "bruxelles", flag: "🇧🇪", region: "Belgique" },
];

const TIMELINE = [
  { step: "01", title: "Départ vers Médine",       desc: "Vol depuis votre ville de départ. Accueil à l'aéroport de Médine." },
  { step: "02", title: "Arrivée à Médine",          desc: "Installation à l'hôtel, repos et orientation du groupe." },
  { step: "03", title: "Visites de Médine",         desc: "Mosquée du Prophète, Quba, Qiblatain, Al-Baqi et lieux historiques." },
  { step: "04", title: "Préparation à l'Omra",     desc: "Formation des rites, ihram, conseils spirituels et préparation collective." },
  { step: "05", title: "Départ vers La Mecque",    desc: "Trajet Médine → Makkah accompagné, installation à l'hôtel." },
  { step: "06", title: "Accomplissement de l'Omra",desc: "Tawaf, Sa'i, Tahallul — accompagnés et guidés à chaque étape." },
  { step: "07", title: "Visites de La Mecque",     desc: "Ziyarat des lieux saints : Jabal Nour, Jabal Thawr, Mina, Arafat." },
  { step: "08", title: "Séjour à La Mecque",       desc: "Prières au Haram, temps libre, accompagnement spirituel continu." },
  { step: "09", title: "Retour",                   desc: "Vol retour depuis Djeddah vers votre ville de départ." },
];

const PROGRAMS = [
  {
    title:    "Omra Plus",
    tag:      "Expérience premium",
    tagColor: "text-syanor-gold bg-syanor-gold/10 border-syanor-gold/20",
    desc:     "Séjour prolongé de 21 à 34 jours avec hôtels premium, accompagnement renforcé, Ziyarat étendue et programme sur mesure.",
    href:     "/omra-hajj/omra-plus",
    image:    "/services/religieux/omra-plus.png",
    cta:      "Découvrir Omra Plus",
    ctaUrl:   omraQuoteUrl({ service: "Omra Plus" }),
    status:   "Sur demande",
    icon:     "sparkle",
  },
  {
    title:    "Ramadan",
    tag:      "Mois sacré",
    tagColor: "text-syanor-emerald bg-syanor-emerald/10 border-syanor-emerald/20",
    desc:     "Vivre le Ramadan aux Lieux Saints. Prières de Tarawih au Haram, ambiance spirituelle unique, programme adapté à la période sacrée.",
    href:     "/omra-hajj/ramadan",
    image:    "/services/religieux/omra-ramadan.png",
    cta:      "Voir Ramadan",
    ctaUrl:   omraQuoteUrl({ service: "Ramadan" }),
    status:   "Sur demande",
    icon:     "star",
  },
  {
    title:    "Hajj 2027",
    tag:      "Préinscription ouverte",
    tagColor: "text-amber-700 bg-amber-50 border-amber-200",
    desc:     "Le grand pèlerinage annuel. Places limitées, quotas officiels. Organisation complète, assistance administrative et accompagnement spirituel.",
    href:     "/omra-hajj/hajj",
    image:    "/services/religieux/hajj.png",
    cta:      "Préinscription Hajj",
    ctaUrl:   omraQuoteUrl({ service: "Hajj" }),
    status:   "Préinscription",
    icon:     "crescent",
  },
];

const FORMATION_ITEMS = [
  { icon: "book-open",  title: "Formation avant départ",      desc: "Sessions de préparation pour comprendre les rites, les intentions et le déroulement du pèlerinage." },
  { icon: "book",       title: "Préparation des rites",       desc: "Ihram, Tawaf, Sa'i, Tahallul — chaque étape expliquée et pratiquée en amont du départ." },
  { icon: "clipboard",  title: "Supports pratiques",          desc: "Documents, livrets, fiches pratiques et ressources remis avant le départ." },
  { icon: "hand-heart", title: "Accompagnement spirituel",    desc: "Un accompagnateur formé présent à chaque étape, de Médine à Makkah." },
  { icon: "map",        title: "Ziyarat guidée",              desc: "Visites des lieux historiques et saints avec explications et contexte spirituel." },
  { icon: "users",      title: "Suivi avant, pendant, après", desc: "Un conseiller joignable avant le départ, pendant le séjour et au retour." },
];

const FAQ_ITEMS = [
  {
    question: "Proposez-vous des départs Omra avec dates confirmées ?",
    answer: "Oui. Certains départs ont des dates confirmées (indiquées dans les fiches de départ), d'autres sont en cours de confirmation. Vous pouvez vous pré-inscrire pour être contacté en priorité dès la confirmation.",
  },
  {
    question: "Peut-on partir depuis Nice ou Marseille ?",
    answer: "Nos départs principaux sont depuis Nice et Marseille. Nous proposons également des départs depuis Lyon, Paris, Toulouse et Bruxelles selon les périodes. Contactez-nous pour vérifier les vols depuis votre ville.",
  },
  {
    question: "La formation est-elle incluse dans le programme ?",
    answer: "Une session de préparation et d'orientation est intégrée à tous nos programmes. Des sessions de formation plus complètes sont disponibles séparément ou sur demande.",
  },
  {
    question: "Peut-on choisir son niveau de confort et le type de chambre ?",
    answer: "Oui. Nous proposons des formules Standard, Premium et VIP avec des hôtels sélectionnés selon leur proximité au Haram. Les types de chambre disponibles vont du quadruple à la chambre individuelle.",
  },
  {
    question: "Proposez-vous Hajj 2027 ?",
    answer: "Oui. Les préinscriptions pour Hajj 2027 sont ouvertes. Les places étant soumises à des quotas officiels, nous vous conseillons de vous inscrire le plus tôt possible. Contactez-nous pour plus de détails.",
  },
  {
    question: "Quelle est la différence entre Omra et Omra Plus ?",
    answer: "L'Omra classique dure environ 12 jours. L'Omra Plus est une formule prolongée de 21 à 34 jours avec un hôtel premium, un accompagnement renforcé et une Ziyarat plus complète.",
  },
  {
    question: "Comment demander un devis ?",
    answer: "Utilisez le bouton 'Demander un devis' sur cette page ou sur n'importe quelle fiche de départ. Vous pouvez aussi nous contacter directement par WhatsApp ou téléphone.",
  },
];

/* ─── Sub-components ────────────────────────────────── */
function QuickPill({ label, href, icon, highlight = false }: { label: string; href: string; icon: string; highlight?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97] ${
        highlight
          ? "border-syanor-gold bg-syanor-gold text-syanor-royal hover:bg-syanor-gold/90"
          : "border-syanor-gold/30 bg-white/5 text-syanor-ivory hover:border-syanor-gold/60 hover:bg-white/10"
      }`}
    >
      <Icon name={icon} className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </Link>
  );
}

function MonthChip({ m }: { m: (typeof omraMonths)[0] }) {
  return (
    <Link
      href={m.href}
      className="group relative flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-center transition-all duration-200 hover:border-syanor-gold/40 hover:bg-white/10 active:scale-[0.96]"
    >
      <span className="text-sm font-semibold leading-tight text-syanor-ivory">{m.label}</span>
      {m.departureCount > 0 ? (
        <span className="text-[0.6rem] font-medium leading-none text-syanor-gold">
          {m.departureCount} départ{m.departureCount > 1 ? "s" : ""}
        </span>
      ) : (
        <span className="text-[0.6rem] leading-none text-white/30">À confirmer</span>
      )}
      {m.hasConfirmedDates && (
        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-syanor-gold ring-2 ring-syanor-royal" aria-hidden="true" />
      )}
    </Link>
  );
}

/* ─── Page ──────────────────────────────────────────── */
export default function OmraHajjPage() {
  const omraQuoteHref = omraQuoteUrl({ service: "Omra" });

  return (
    <OmraFactoryLayout>

      {/* ══════════════════════════════════════════
          1. CINEMATIC HERO — light luxury
      ══════════════════════════════════════════ */}
      <section className="relative flex min-h-[85vh] items-center">

        {/* ── Full-bleed background image ── */}
        <img
          src="/omra/hero-mecca.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[62%_center] lg:object-right"
          loading="eager"
        />

        {/* ── Desktop: dark emerald left → transparent right (keeps Kaaba visible) ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{ background: "linear-gradient(90deg, rgba(3,24,20,0.92) 0%, rgba(3,24,20,0.78) 28%, rgba(3,24,20,0.35) 52%, rgba(3,24,20,0.05) 78%)" }}
        />
        {/* ── Mobile: dark top → transparent bottom ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{ background: "linear-gradient(180deg, rgba(3,24,20,0.88) 0%, rgba(3,24,20,0.70) 42%, rgba(3,24,20,0.25) 100%)" }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-[96px] md:px-8 lg:pb-20 lg:pt-[88px]">
          <div className="max-w-[640px]">

            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 shrink-0" style={{ background: "rgba(201,162,74,0.70)" }} aria-hidden="true" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(212,175,55,0.85)" }}>
                Omra Factory — Département Omra & Hajj de SYANOR VOYAGES
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-playfair text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              <span style={{ color: "#F8F4EE" }}>Omra & Hajj</span><br />
              <span style={{ background: "linear-gradient(90deg, #C9A24A 0%, #b8882a 50%, #C9A24A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                organisés avec excellence.
              </span>
            </h1>

            {/* Gold divider */}
            <div className="mt-5 flex items-center gap-3" aria-hidden="true">
              <div className="h-px w-16" style={{ background: "linear-gradient(to right, #C9A24A, transparent)" }} />
              <div className="h-1 w-1 rounded-full" style={{ background: "rgba(201,162,74,0.70)" }} />
              <div className="h-px w-8" style={{ background: "linear-gradient(to right, rgba(201,162,74,0.40), transparent)" }} />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-relaxed sm:text-[1.05rem]" style={{ color: "rgba(248,244,238,0.80)" }}>
              Omra, Hajj, Ramadan, Ziyarat — accompagnement spirituel complet,{" "}
              <span style={{ color: "#D8B56A", fontWeight: 500 }}>hôtels sélectionnés et départs depuis 6 villes de France.</span>
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/omra-2026"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-[0_8px_24px_rgba(201,162,74,0.40)] active:scale-[0.97]"
                style={{ background: "linear-gradient(135deg, #C9A24A 0%, #e8c87a 50%, #C9A24A 100%)", color: "#022B24" }}
              >
                <Icon name="calendar" className="h-3.5 w-3.5" aria-hidden="true" />
                Voir les départs Omra
              </Link>
              <Link
                href={omraQuoteHref}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:shadow-card active:scale-[0.97]"
                style={{ border: "1.5px solid rgba(248,244,238,0.32)", color: "rgba(248,244,238,0.92)", background: "rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}
              >
                Demander un devis
              </Link>
            </div>

            {/* ── Category cards ── */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {([
                { label: "Omra",      sub: "2026 & 2027",    href: "/omra-2026",        icon: "crescent"  },
                { label: "Omra Plus", sub: "Confort premium", href: "/omra-hajj/omra-plus", icon: "star"  },
                { label: "Hajj",      sub: "Hajj 2027",       href: "/hajj-2027",        icon: "compass"   },
                { label: "Ramadan",   sub: "Séjours dédiés",  href: "/omra-hajj/ramadan", icon: "sparkle"  },
              ] as const).map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="group flex flex-col gap-2.5 rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card active:scale-[0.97]"
                  style={{
                    background: "rgba(255,255,255,0.60)",
                    border: "1px solid rgba(201,162,74,0.28)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-xl transition-colors duration-200 group-hover:bg-[rgba(201,162,74,0.22)]"
                    style={{ background: "rgba(201,162,74,0.15)", color: "#a07c32" }}
                    aria-hidden="true"
                  >
                    <Icon name={cat.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#022B24" }}>{cat.label}</p>
                    <p className="text-[0.65rem] leading-snug" style={{ color: "rgba(2,43,36,0.45)" }}>{cat.sub}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t pt-8" style={{ borderColor: "rgba(248,244,238,0.18)" }}>
              {[
                { val: "2026 & 2027", label: "Saisons Omra" },
                { val: "6 villes",    label: "De départ" },
                { val: "Standard → VIP", label: "Niveaux de confort" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-playfair text-lg font-bold" style={{ color: "#D8B56A" }}>{s.val}</span>
                  <span className="text-[0.68rem]" style={{ color: "rgba(248,244,238,0.55)" }}>{s.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Bottom fade to ivory ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
          style={{ background: "linear-gradient(to bottom, transparent, #FFF9ED)" }}
        />
      </section>

      {/* ══════════════════════════════════════════
          2. YEAR CARDS — Omra 2026 + Omra 2027
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-2">Omra Factory — Départs Omra</p>
            <h2 className="font-playfair text-3xl font-bold text-syanor-ink">Choisissez votre saison</h2>
            <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-syanor-gold/50 to-transparent" aria-hidden="true" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Omra 2026 */}
            <Reveal>
              <div
                className="group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(6,63,51,0.12)]"
                style={{ background: "linear-gradient(145deg, #022B24 0%, #063F33 100%)", border: "1px solid rgba(201,162,74,0.20)" }}
              >
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-syanor-gold" style={{ background: "rgba(201,162,74,0.10)", border: "1px solid rgba(201,162,74,0.22)" }}>
                      Omra Factory
                    </span>
                    <h3 className="font-playfair text-3xl font-bold text-syanor-ivory">Omra 2026</h3>
                    <p className="mt-1 text-sm text-white/45">Nice · Marseille → Médine, retour Djeddah</p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl text-syanor-gold" style={{ background: "rgba(201,162,74,0.12)", border: "1px solid rgba(201,162,74,0.25)" }}>
                    <Icon name="airplane" className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>

                <div className="mb-5 grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                  {months2026.map((m) => <MonthChip key={m.slug} m={m} />)}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/omra-2026"
                    className="inline-flex items-center gap-2 rounded-full bg-syanor-gold px-5 py-2.5 text-sm font-semibold text-syanor-royal transition-all hover:bg-syanor-gold/90 hover:shadow-[0_4px_16px_rgba(201,162,74,0.35)] active:scale-[0.97]"
                  >
                    Voir tous les départs 2026
                    <Icon name="arrow-right" className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <Link
                    href={omraQuoteUrl({ service: "Omra" })}
                    className="text-sm font-medium text-syanor-gold/60 transition-colors hover:text-syanor-gold"
                  >
                    Demander un devis →
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Omra 2027 */}
            <Reveal delay={60}>
              <div
                className="group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(6,63,51,0.08)]"
                style={{ background: "linear-gradient(145deg, #FFF9ED 0%, #f5edd8 100%)", border: "1px solid rgba(201,162,74,0.22)" }}
              >
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-syanor-gold" style={{ background: "rgba(201,162,74,0.10)", border: "1px solid rgba(201,162,74,0.22)" }}>
                      Omra Factory
                    </span>
                    <h3 className="font-playfair text-3xl font-bold text-syanor-ink">Omra 2027</h3>
                    <p className="mt-1 text-sm text-syanor-ink/45">Nice · Marseille → Médine, retour Djeddah</p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-syanor-emerald/8 text-syanor-emerald">
                    <Icon name="airplane" className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>

                <div className="mb-5 grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                  {months2027.map((m) => (
                    <Link
                      key={m.slug}
                      href={m.href}
                      className="group/chip relative flex flex-col items-center gap-1 rounded-xl border border-syanor-gold/15 bg-syanor-emerald/5 px-3 py-2.5 text-center transition-all duration-200 hover:border-syanor-gold/40 hover:bg-syanor-emerald/8 active:scale-[0.96]"
                    >
                      <span className="text-sm font-semibold leading-tight text-syanor-ink">{m.label}</span>
                      {m.departureCount > 0 ? (
                        <span className="text-[0.6rem] font-medium leading-none text-syanor-gold">
                          {m.departureCount} départ{m.departureCount > 1 ? "s" : ""}
                        </span>
                      ) : (
                        <span className="text-[0.6rem] leading-none text-syanor-ink/30">À confirmer</span>
                      )}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/omra-2027"
                    className="inline-flex items-center gap-2 rounded-full bg-syanor-emerald px-5 py-2.5 text-sm font-semibold text-syanor-ivory transition-all hover:bg-syanor-royal hover:shadow-card active:scale-[0.97]"
                  >
                    Voir tous les départs 2027
                    <Icon name="arrow-right" className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <Link
                    href={omraQuoteUrl({ service: "Omra" })}
                    className="text-sm font-medium text-syanor-gold hover:underline"
                  >
                    Demander un devis →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. UPCOMING DEPARTURES
      ══════════════════════════════════════════ */}
      {upcomingOffers.length > 0 && (
        <section className="section-pad" style={{ background: "linear-gradient(to bottom, #f8f2e4, #FFF9ED)" }}>
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow mb-2">Prochains départs</p>
                <h2 className="font-playfair text-3xl font-bold text-syanor-ink">Départs disponibles</h2>
              </div>
              <Link href="/offres?category=Omra" className="shrink-0 text-sm font-medium text-syanor-emerald hover:underline">
                Voir toutes les offres →
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingOffers.map((offer, i) => (
                <PremiumDepartureCard key={offer.id} offer={offer} index={i} delay={(i % 3) * 60} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          4. SPECIALIZED PROGRAMS
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-2">Programmes spécialisés</p>
            <h2 className="font-playfair text-3xl font-bold text-syanor-ink">Omra Plus · Ramadan · Hajj 2027</h2>
            <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-syanor-gold/50 to-transparent" aria-hidden="true" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {PROGRAMS.map((prog, i) => (
              <Reveal key={prog.title} delay={i * 60}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-syanor-gold/18 bg-syanor-pearl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-syanor-royal">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,43,36,0.75) 0%, transparent 55%)" }} />
                    {/* Status badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.62rem] font-semibold ${prog.tagColor}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" aria-hidden="true" />
                        {prog.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold">
                        <Icon name={prog.icon} className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <h3 className="font-playfair text-xl font-bold text-syanor-ink">{prog.title}</h3>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-syanor-ink/65">{prog.desc}</p>

                    <div className="mt-5 flex gap-2.5">
                      <Link
                        href={prog.ctaUrl}
                        className="flex-1 rounded-full bg-syanor-gold py-2.5 text-center text-sm font-semibold text-syanor-royal transition-all hover:bg-syanor-gold/90 hover:shadow-[0_4px_16px_rgba(201,162,74,0.30)] active:scale-[0.97]"
                      >
                        Demander un devis
                      </Link>
                      <Link
                        href={prog.href}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-syanor-gold/25 text-syanor-gold transition-all hover:bg-syanor-gold/8 active:scale-[0.97]"
                        aria-label={`Découvrir ${prog.title}`}
                      >
                        <Icon name="arrow-right" className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. FORMATION & ACCOMPANIMENT
      ══════════════════════════════════════════ */}
      <section
        className="section-pad"
        style={{ background: "linear-gradient(135deg, #022B24 0%, #063F33 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-syanor-gold">
              Omra Factory — Accompagnement spirituel
            </p>
            <h2 className="font-playfair text-3xl font-bold text-syanor-ivory">
              Préparation, formation et accompagnement
            </h2>
            <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-syanor-gold/40 to-transparent" aria-hidden="true" />
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-syanor-champagne/55">
              Un suivi complet avant le départ, pendant le séjour et au retour — pour que vous puissiez vous concentrer sur l'essentiel.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FORMATION_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 50}>
                <div className="group rounded-2xl border border-syanor-gold/12 bg-white/[0.04] p-6 transition-all duration-300 hover:border-syanor-gold/30 hover:bg-white/[0.07]">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl text-syanor-gold" style={{ background: "rgba(201,162,74,0.12)", border: "1px solid rgba(201,162,74,0.20)" }}>
                    <Icon name={item.icon} className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-semibold text-syanor-ivory">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-syanor-champagne/50">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/formation"
              className="inline-flex items-center gap-2 rounded-full border border-syanor-gold/30 px-6 py-3 text-sm font-medium text-syanor-gold transition-all hover:border-syanor-gold hover:bg-syanor-gold/10 active:scale-[0.97]"
            >
              Découvrir le programme de formation
              <Icon name="arrow-right" className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. DEPARTURE CITIES
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-syanor-champagne/20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-8 text-center">
            <p className="eyebrow mb-2">Villes de départ</p>
            <h2 className="font-playfair text-3xl font-bold text-syanor-ink">
              Partez depuis votre ville
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-syanor-ink/55">
              Nos départs couvrent 6 villes en France et en Belgique. Route principale : ville → Médine, retour Djeddah → ville.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {CITIES.map((city, i) => (
              <Reveal key={city.slug} delay={i * 40}>
                <Link
                  href={`/depart/${city.slug}`}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-syanor-gold/15 bg-syanor-pearl p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-syanor-gold/40 hover:shadow-card active:scale-[0.97]"
                >
                  <span className="text-3xl" aria-hidden="true">{city.flag}</span>
                  <div>
                    <p className="font-semibold text-syanor-ink group-hover:text-syanor-emerald">{city.name}</p>
                    <p className="mt-0.5 text-[0.65rem] text-syanor-ink/45">{city.region}</p>
                  </div>
                  <span className="text-[0.65rem] font-medium text-syanor-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Voir les départs →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. STEP-BY-STEP TIMELINE
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-2">Votre voyage, étape par étape</p>
            <h2 className="font-playfair text-3xl font-bold text-syanor-ink">Votre Omra avec SYANOR VOYAGES</h2>
            <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-syanor-gold/50 to-transparent" aria-hidden="true" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-syanor-gold/40 via-syanor-gold/20 to-transparent sm:left-1/2 sm:-translate-x-px" aria-hidden="true" />

            <div className="space-y-6 sm:space-y-0">
              {TIMELINE.map((item, i) => {
                const isRight = i % 2 === 1;
                return (
                  <div
                    key={item.step}
                    className={`relative flex items-start gap-4 pb-6 sm:pb-8 sm:w-1/2 ${isRight ? "sm:ml-auto sm:pl-10 sm:pr-0" : "sm:pr-10"}`}
                  >
                    {/* Step circle */}
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-md ${i === 0 || i === TIMELINE.length - 1 ? "bg-syanor-gold text-syanor-royal" : "bg-syanor-emerald text-syanor-gold"} sm:absolute ${isRight ? "sm:-left-6" : "sm:-right-6"}`}
                    >
                      {item.step}
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 rounded-2xl border border-syanor-gold/15 bg-syanor-pearl p-4 shadow-card sm:ml-0 ${isRight ? "" : ""}`}>
                      <h3 className="font-semibold text-syanor-ink">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-syanor-ink/60">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. PARTNER NOTE
      ══════════════════════════════════════════ */}
      <section className="bg-syanor-champagne/30 py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-syanor-gold/25" aria-hidden="true" />
            <p className="text-center text-sm italic text-syanor-ink/45">
              L'univers Omra & Hajj de SYANOR VOYAGES est développé{" "}
              <span className="font-medium not-italic text-syanor-ink/60">en partenariat avec Omra Factory.</span>
              {" "}SYANOR VOYAGES reste votre interlocuteur unique et le seul garant de la qualité de votre voyage.
            </p>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-syanor-gold/25" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. BLOG PREVIEW
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-2">Blog Omra Factory</p>
              <h2 className="font-playfair text-3xl font-bold text-syanor-ink">Guides & conseils pèlerinage</h2>
            </div>
            <Link href="/omra-hajj/blog" className="shrink-0 text-sm font-medium text-syanor-emerald hover:underline">
              Voir tous les articles →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {omraBlogArticles.slice(0, 3).map((article) => (
              <Link key={article.slug} href={`/omra-hajj/blog/${article.slug}`} className="group">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-syanor-gold/20 bg-syanor-pearl shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <div
                    className="flex h-2 w-full"
                    style={{ background: "linear-gradient(to right, #022B24, #C9A24A, #022B24)" }}
                    aria-hidden="true"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-2 text-[0.6rem] font-bold uppercase tracking-wider text-syanor-gold/75">
                      {article.category}
                    </span>
                    <h3 className="font-playfair text-lg font-bold leading-snug text-syanor-ink transition-colors duration-200 group-hover:text-syanor-emerald">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-syanor-ink/60">{article.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-syanor-gold/10 pt-4 text-xs text-syanor-ink/45">
                      <span>{article.readTime} de lecture</span>
                      <span className="font-semibold text-syanor-gold transition-colors duration-200 group-hover:text-syanor-emerald">
                        Lire →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. FAQ
      ══════════════════════════════════════════ */}
      <FaqSection
        title="Questions fréquentes — Omra & Hajj"
        items={FAQ_ITEMS}
      />

      {/* ══════════════════════════════════════════
          10. FINAL CTA
      ══════════════════════════════════════════ */}
      <CTASection
        title="Préparons votre voyage spirituel ensemble."
        body="Indiquez-nous votre programme souhaité, votre ville de départ, vos dates et votre niveau de confort — nous construisons une proposition adaptée."
        ctaLabel="Voir les départs Omra"
        ctaHref="/omra-2026"
        secondary={{ label: "Demander un devis", href: omraQuoteHref }}
      />

      <StickyMobileCTA label="Demander un devis Omra" href={omraQuoteHref} />
    </OmraFactoryLayout>
  );
}
