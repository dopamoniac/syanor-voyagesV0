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
    title:    "Omra",
    tag:      "Départs toute l'année",
    tagColor: "text-syanor-gold bg-syanor-gold/10 border-syanor-gold/20",
    desc:     "Omra classique de 10 à 14 jours. Vols depuis Nice, Marseille, Lyon et Paris. Hôtels sélectionnés, accompagnement complet et assistance visa.",
    href:     "/omra-factory/omra-2026",
    image:    "/omra-factory/omra.png",
    cta:      "Voir les départs",
    ctaUrl:   omraQuoteUrl({ service: "Omra" }),
    status:   "Disponible",
    icon:     "crescent",
  },
  {
    title:    "Omra Plus",
    tag:      "Expérience premium",
    tagColor: "text-syanor-gold bg-syanor-gold/10 border-syanor-gold/20",
    desc:     "Séjour prolongé de 21 à 34 jours avec hôtels premium, accompagnement renforcé, Ziyarat étendue et programme sur mesure.",
    href:     "/omra-factory/omra-plus",
    image:    "/omra-factory/omra-plus.png",
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
    href:     "/omra-factory/ramadan",
    image:    "/omra-factory/ramadan.png",
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
    href:     "/omra-factory/hajj",
    image:    "/omra-factory/hajj.png",
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
          1. HERO — Luxury ivory split layout
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "100svh", background: "#F8F2E8" }}
      >
        {/* ── Decorative gold SVG curves ── */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.45 }}
        >
          <path d="M-60 320 Q 340 80 760 340 Q 1060 520 1500 280" fill="none" stroke="rgba(184,138,68,0.30)" strokeWidth="1.2" />
          <path d="M-60 500 Q 260 280 680 480 Q 1020 640 1500 440" fill="none" stroke="rgba(184,138,68,0.18)" strokeWidth="0.8" />
          <circle cx="110" cy="180" r="90" fill="none" stroke="rgba(184,138,68,0.14)" strokeWidth="1" />
          <circle cx="110" cy="180" r="60" fill="none" stroke="rgba(184,138,68,0.10)" strokeWidth="0.7" />
        </svg>

        {/* ── RIGHT: Mecca image ── */}
        {/* Right image panel — right 55% on all sizes */}
        <div
          className="absolute inset-y-0 right-0 w-[55%] lg:w-[58%]"
          aria-hidden="true"
        >
          <picture>
            <source media="(max-width: 1023px)" srcSet="/hero/mobile-hero.png" />
            <img
              src="/omra/hero-mecca.png"
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: "right 62%" }}
              loading="eager"
            />
          </picture>
          {/* Left bleed gradient — fades image into ivory background */}
          <div
            className="absolute inset-y-0 left-0 w-[70%] lg:w-[55%]"
            style={{ background: "linear-gradient(to right, #F8F2E8 0%, #F8F2E8 18%, rgba(248,242,232,0.80) 45%, rgba(248,242,232,0.20) 75%, transparent 100%)" }}
          />
          {/* Mobile: top gradient to keep header legible */}
          <div
            className="absolute inset-x-0 top-0 h-40 lg:hidden"
            style={{ background: "linear-gradient(to bottom, #F8F2E8 0%, rgba(248,242,232,0.60) 60%, transparent 100%)" }}
          />
        </div>

        {/* ── CONTENT ── */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-center px-6 pb-20 pt-[88px] md:px-10 lg:px-16 xl:px-20 2xl:px-24">

          {/* Left text block */}
          <div className="flex flex-1 items-center">
            <div className="w-full max-w-[620px] xl:max-w-[680px] 2xl:max-w-[740px] py-10 lg:py-16">

              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <circle cx="14" cy="14" r="9" stroke="#B88A44" strokeWidth="1" opacity="0.7" />
                  <circle cx="14" cy="14" r="5" stroke="#B88A44" strokeWidth="0.8" opacity="0.5" />
                  <path d="M14 5 v4 M14 19 v4 M5 14 h4 M19 14 h4" stroke="#B88A44" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                </svg>
                <span className="text-[0.60rem] font-bold uppercase tracking-[0.28em]" style={{ color: "#B88A44" }}>
                  Omra Factory — Département Omra &amp; Hajj de SYANOR VOYAGES
                </span>
              </div>

              {/* Headline — bigger, more editorial */}
              <h1
                className="font-playfair font-bold tracking-tight"
                style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: "0.98", letterSpacing: "-0.03em", color: "#102C27" }}
              >
                Omra &amp; Hajj<br />
                <span style={{ color: "#B88A44" }}>organisés avec</span><br />
                <span style={{ color: "#102C27" }}>excellence.</span>
              </h1>

              {/* Description — more readable */}
              <p
                className="mt-7 leading-[1.70]"
                style={{ fontSize: "clamp(1rem, 1.35vw, 1.18rem)", color: "#4A4845", maxWidth: 520 }}
              >
                Omra, Hajj, Ziyarat — accompagnement spirituel complet,{" "}
                hôtels sélectionnés et départs depuis 6 villes de France.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/omra-factory/omra-2026"
                  className="inline-flex items-center gap-2.5 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(6,59,50,0.30)] active:scale-[0.97]"
                  style={{ background: "#063B32", color: "#FFFDF8", padding: "14px clamp(24px,2.8vw,36px)", fontSize: "clamp(0.84rem,1.05vw,0.95rem)", letterSpacing: "-0.01em" }}
                >
                  <Icon name="calendar" className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Voir les départs Omra
                </Link>
                <Link
                  href={omraQuoteHref}
                  className="inline-flex items-center gap-2.5 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(184,138,68,0.22)] active:scale-[0.97]"
                  style={{ border: "1.5px solid rgba(184,138,68,0.55)", color: "#102C27", background: "rgba(255,255,255,0.72)", backdropFilter: "blur(8px)", padding: "14px clamp(24px,2.8vw,36px)", fontSize: "clamp(0.84rem,1.05vw,0.95rem)", letterSpacing: "-0.01em" }}
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS PANEL — floating below hero
      ══════════════════════════════════════════ */}
      <section style={{ background: "#F8F2E8" }} aria-label="Nos chiffres clés">
        <div className="mx-auto px-5 md:px-8" style={{ maxWidth: 1160 }}>

          {/* ── Desktop: single horizontal pill ── */}
          <div
            className="hidden lg:grid"
            style={{
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              marginTop: "clamp(32px, 4vw, 56px)",
              marginBottom: "clamp(32px, 4vw, 56px)",
              border: "1px solid rgba(184,138,68,0.22)",
              borderRadius: 28,
              background: "linear-gradient(135deg, rgba(255,253,248,0.96), rgba(248,242,232,0.90))",
              boxShadow: "0 20px 60px rgba(39,28,10,0.09), 0 4px 16px rgba(184,138,68,0.08)",
              backdropFilter: "blur(14px)",
              overflow: "hidden",
            }}
          >
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" /></svg>,
                kicker: "Depuis",
                value: "2026",
                label: "Saisons Omra",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                kicker: "Départs depuis",
                value: "6 villes",
                label: "de France",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" /><path d="M17 9l1.5 1.5M19 6h2M17 3l1.5-1.5" strokeLinecap="round" /></svg>,
                kicker: "Standard",
                value: "à VIP",
                label: "Niveaux de confort",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" strokeLinecap="round" /><path d="M12 12v4M10 14h4" strokeLinecap="round" /></svg>,
                kicker: "Hôtels",
                value: "sélectionnés",
                label: "Proche des lieux saints",
              },
            ].map((s, i, arr) => (
              <div
                key={s.value}
                className="flex items-center gap-4 px-7 py-6"
                style={{ borderRight: i < arr.length - 1 ? "1px solid rgba(184,138,68,0.18)" : "none" }}
              >
                {/* Icon circle */}
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(184,138,68,0.10)", border: "1px solid rgba(184,138,68,0.24)", color: "#B88A44" }}
                >
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-[0.60rem] font-bold uppercase tracking-[0.20em]" style={{ color: "#8F6B34" }}>
                    {s.kicker}
                  </p>
                  <p className="font-playfair font-bold leading-none" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", color: "#063B32", letterSpacing: "-0.025em" }}>
                    {s.value}
                  </p>
                  <p className="mt-1 text-[0.78rem] leading-tight" style={{ color: "#66645F" }}>
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Tablet + Mobile: 2×2 card grid ── */}
          <div
            className="grid grid-cols-2 gap-3 py-8 lg:hidden sm:gap-4"
          >
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" /></svg>,
                kicker: "Depuis",
                value: "2026",
                label: "Saisons Omra",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                kicker: "Départs depuis",
                value: "6 villes",
                label: "de France",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" /><path d="M17 9l1.5 1.5M19 6h2M17 3l1.5-1.5" strokeLinecap="round" /></svg>,
                kicker: "Standard",
                value: "à VIP",
                label: "Niveaux de confort",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" strokeLinecap="round" /><path d="M12 12v4M10 14h4" strokeLinecap="round" /></svg>,
                kicker: "Hôtels",
                value: "sélectionnés",
                label: "Proche des lieux saints",
              },
            ].map((s) => (
              <div
                key={s.value}
                className="flex flex-col gap-3 rounded-3xl p-4 sm:p-5"
                style={{
                  background: "rgba(255,253,248,0.92)",
                  border: "1px solid rgba(184,138,68,0.20)",
                  boxShadow: "0 12px 32px rgba(39,28,10,0.07)",
                }}
              >
                {/* Icon */}
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: "rgba(184,138,68,0.10)", border: "1px solid rgba(184,138,68,0.22)", color: "#B88A44" }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="mb-0.5 text-[0.58rem] font-bold uppercase tracking-[0.18em]" style={{ color: "#8F6B34" }}>
                    {s.kicker}
                  </p>
                  <p className="font-playfair font-bold leading-none" style={{ fontSize: "clamp(1.1rem, 5vw, 1.4rem)", color: "#063B32", letterSpacing: "-0.02em" }}>
                    {s.value}
                  </p>
                  <p className="mt-1 text-[0.72rem] leading-tight" style={{ color: "#66645F" }}>
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. YEAR PANELS — Omra 2026 + Omra 2027
      ══════════════════════════════════════════ */}
      <section style={{ background: "#F8F2E8" }} className="overflow-hidden">

        {/* ── Section header ── */}
        <div className="mx-auto max-w-7xl px-6 pb-0 pt-16 md:px-10 lg:px-16 xl:px-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-[0.60rem] font-bold uppercase tracking-[0.28em]" style={{ color: "#B88A44" }}>
                Omra Factory — Départs Omra
              </p>
              <h2 className="font-playfair font-bold leading-tight" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", color: "#102C27" }}>
                Choisissez votre saison
              </h2>
            </div>
            {/* Gold ornament */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="hidden shrink-0 sm:block" style={{ opacity: 0.55 }}>
              <circle cx="24" cy="24" r="20" stroke="#B88A44" strokeWidth="0.8" />
              <circle cx="24" cy="24" r="13" stroke="#B88A44" strokeWidth="0.5" />
              <path d="M24 4v8M24 36v8M4 24h8M36 24h8M10 10l5.6 5.6M32.4 32.4l5.6 5.6M38 10l-5.6 5.6M15.6 32.4L10 38" stroke="#B88A44" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
          </div>
          {/* Gold rule */}
          <div className="mt-5 h-px" style={{ background: "linear-gradient(to right, #B88A44, rgba(184,138,68,0.20) 60%, transparent)" }} aria-hidden="true" />
        </div>

        {/* ── Two season panels ── */}
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:grid lg:grid-cols-2 lg:gap-0 lg:px-16 xl:px-20">

          {/* ─── OMRA 2026 ─── */}
          <Reveal>
            <div
              className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_32px_64px_rgba(2,43,36,0.28)] lg:rounded-r-none lg:rounded-l-3xl"
              style={{ background: "linear-gradient(155deg, #011A15 0%, #022B24 45%, #063F33 100%)", border: "1px solid rgba(201,162,74,0.18)" }}
            >
              {/* Faded year watermark */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-6 select-none font-playfair font-bold leading-none"
                style={{ fontSize: "clamp(100px,18vw,160px)", color: "rgba(201,162,74,0.07)", letterSpacing: "-0.04em" }}
              >
                2026
              </div>

              {/* Top row */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <span
                    className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em]"
                    style={{ background: "rgba(201,162,74,0.14)", border: "1px solid rgba(201,162,74,0.30)", color: "#C9A24A" }}
                  >
                    ✦ Saison actuelle
                  </span>
                  <h3
                    className="font-playfair font-bold leading-none"
                    style={{ fontSize: "clamp(2.2rem,4.5vw,3rem)", color: "#FFF9ED" }}
                  >
                    Omra 2026
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "rgba(255,249,237,0.42)" }}>
                    Nice · Marseille · Lyon · Paris → Médine
                  </p>
                </div>
                {/* Crescent icon */}
                <div
                  className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: "rgba(201,162,74,0.10)", border: "1px solid rgba(201,162,74,0.22)" }}
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="rgba(201,162,74,0.90)" aria-hidden="true">
                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
              </div>

              {/* Gold separator */}
              <div className="relative z-10 my-6 h-px" style={{ background: "linear-gradient(to right, rgba(201,162,74,0.45), rgba(201,162,74,0.08) 70%, transparent)" }} aria-hidden="true" />

              {/* Month timeline */}
              <div className="relative z-10 mb-7">
                <p className="mb-3 text-[0.58rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(201,162,74,0.55)" }}>
                  Départs disponibles
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {months2026.map((m) => (
                    <Link
                      key={m.slug}
                      href={m.href}
                      className="group/m relative flex flex-col items-center gap-1.5 rounded-2xl px-4 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] active:scale-[0.96]"
                      style={{
                        background: m.departureCount > 0 ? "rgba(201,162,74,0.12)" : "rgba(255,255,255,0.04)",
                        border: m.departureCount > 0 ? "1px solid rgba(201,162,74,0.32)" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {m.hasConfirmedDates && (
                        <span
                          className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ring-2"
                          style={{ background: "#C9A24A", ringColor: "#011A15" }}
                          aria-label="dates confirmées"
                        />
                      )}
                      <span
                        className="text-sm font-semibold leading-tight"
                        style={{ color: m.departureCount > 0 ? "#FFF9ED" : "rgba(255,249,237,0.30)" }}
                      >
                        {m.label}
                      </span>
                      {m.departureCount > 0 ? (
                        <span className="text-[0.58rem] font-bold leading-none" style={{ color: "#C9A24A" }}>
                          {m.departureCount} départ{m.departureCount > 1 ? "s" : ""}
                        </span>
                      ) : (
                        <span className="text-[0.56rem] leading-none" style={{ color: "rgba(255,249,237,0.22)" }}>À confirmer</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="relative z-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/omra-factory/omra-2026"
                  className="inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200 hover:shadow-[0_6px_20px_rgba(201,162,74,0.40)] active:scale-[0.97]"
                  style={{ background: "linear-gradient(135deg, #C9A24A, #e0c070, #C9A24A)", color: "#011A15", padding: "12px 24px", fontSize: "0.85rem" }}
                >
                  Voir tous les départs 2026
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href={omraQuoteUrl({ service: "Omra" })}
                  className="text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: "rgba(201,162,74,0.55)" }}
                >
                  Devis sur mesure →
                </Link>
              </div>
            </div>
          </Reveal>

          {/* ─── OMRA 2027 ─── */}
          <Reveal delay={80}>
            <div
              className="group relative mt-4 overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_32px_64px_rgba(2,43,36,0.14)] lg:mt-0 lg:rounded-l-none lg:rounded-r-3xl"
              style={{ background: "linear-gradient(155deg, #FFFDF8 0%, #F8F2E8 50%, #f0e8d5 100%)", border: "1px solid rgba(184,138,68,0.25)", borderLeft: "none" }}
            >
              {/* Faded year watermark */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-6 select-none font-playfair font-bold leading-none"
                style={{ fontSize: "clamp(100px,18vw,160px)", color: "rgba(2,43,36,0.05)", letterSpacing: "-0.04em" }}
              >
                2027
              </div>

              {/* Top row */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <span
                    className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em]"
                    style={{ background: "rgba(6,63,51,0.08)", border: "1px solid rgba(6,63,51,0.15)", color: "#063F33" }}
                  >
                    ◈ Préréservation ouverte
                  </span>
                  <h3
                    className="font-playfair font-bold leading-none"
                    style={{ fontSize: "clamp(2.2rem,4.5vw,3rem)", color: "#102C27" }}
                  >
                    Omra 2027
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "rgba(16,44,39,0.42)" }}>
                    Nice · Marseille · Lyon · Paris → Médine
                  </p>
                </div>
                {/* Compass icon */}
                <div
                  className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: "rgba(6,63,51,0.07)", border: "1px solid rgba(6,63,51,0.14)" }}
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#063F33" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" />
                  </svg>
                </div>
              </div>

              {/* Gold separator */}
              <div className="relative z-10 my-6 h-px" style={{ background: "linear-gradient(to right, rgba(184,138,68,0.40), rgba(184,138,68,0.10) 70%, transparent)" }} aria-hidden="true" />

              {/* Month timeline */}
              <div className="relative z-10 mb-7">
                <p className="mb-3 text-[0.58rem] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(184,138,68,0.65)" }}>
                  Départs disponibles
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {months2027.map((m) => (
                    <Link
                      key={m.slug}
                      href={m.href}
                      className="group/m relative flex flex-col items-center gap-1.5 rounded-2xl px-4 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(2,43,36,0.10)] active:scale-[0.96]"
                      style={{
                        background: m.departureCount > 0 ? "rgba(6,63,51,0.07)" : "rgba(0,0,0,0.02)",
                        border: m.departureCount > 0 ? "1px solid rgba(6,63,51,0.18)" : "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      <span
                        className="text-sm font-semibold leading-tight"
                        style={{ color: m.departureCount > 0 ? "#102C27" : "rgba(16,44,39,0.25)" }}
                      >
                        {m.label}
                      </span>
                      {m.departureCount > 0 ? (
                        <span className="text-[0.58rem] font-bold leading-none" style={{ color: "#B88A44" }}>
                          {m.departureCount} départ{m.departureCount > 1 ? "s" : ""}
                        </span>
                      ) : (
                        <span className="text-[0.56rem] leading-none" style={{ color: "rgba(16,44,39,0.22)" }}>À confirmer</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="relative z-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/omra-factory/omra-2027"
                  className="inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200 hover:shadow-[0_6px_20px_rgba(2,43,36,0.20)] active:scale-[0.97]"
                  style={{ background: "#063F33", color: "#FFF9ED", padding: "12px 24px", fontSize: "0.85rem" }}
                >
                  Voir tous les départs 2027
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href={omraQuoteUrl({ service: "Omra" })}
                  className="text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "rgba(6,63,51,0.50)" }}
                >
                  Devis sur mesure →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Bottom section fade ── */}
        <div className="h-10" style={{ background: "linear-gradient(to bottom, #F8F2E8, #FFF9ED)" }} />
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
              <Link href="/agence/offres?category=Omra" className="shrink-0 text-sm font-medium text-syanor-emerald hover:underline">
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
            <h2 className="font-playfair text-3xl font-bold text-syanor-ink">Omra · Omra Plus · Ramadan · Hajj 2027</h2>
            <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-syanor-gold/50 to-transparent" aria-hidden="true" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
              href="/omra-factory/formations"
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
            <Link href="/omra-factory/blog" className="shrink-0 text-sm font-medium text-syanor-emerald hover:underline">
              Voir tous les articles →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {omraBlogArticles.slice(0, 3).map((article) => (
              <Link key={article.slug} href={`/omra-factory/blog/${article.slug}`} className="group">
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
        ctaHref="/omra-factory/omra-2026"
        secondary={{ label: "Demander un devis", href: omraQuoteHref }}
      />

      <StickyMobileCTA label="Demander un devis Omra" href={omraQuoteHref} />
    </OmraFactoryLayout>
  );
}
