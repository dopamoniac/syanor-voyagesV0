type Metadata = Record<string, unknown>;
import Link from "@/components/Link";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/sections/FaqSection";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { quoteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ziyarat — Visites des Lieux Saints | SYANOR VOYAGES Omra & Hajj",
  description:
    "Découvrez la Ziyarat avec SYANOR VOYAGES : visites guidées des lieux historiques et saints de Médine et La Mecque, incluses dans nos programmes Omra & Hajj.",
  alternates: { canonical: "/ziyarat" },
};

const SITES_MADINAH = [
  { name: "La Mosquée du Prophète (Al-Masjid an-Nabawi)", desc: "Le cœur spirituel de Médine. Prière et recueillement auprès de la tombe du Prophète ﷺ.", icon: "crescent" },
  { name: "Masjid Quba", desc: "La première mosquée construite dans l'Islam. Une prière ici équivaut à Omra selon les hadiths.", icon: "crescent" },
  { name: "Masjid al-Qiblatain", desc: "La mosquée des deux Qiblas, où la direction de la prière fut changée de Jérusalem vers La Mecque.", icon: "crescent" },
  { name: "Al-Baqi", desc: "Le cimetière de Médine où reposent de nombreux Compagnons du Prophète ﷺ et membres de sa famille.", icon: "map" },
  { name: "Jabal Uhud", desc: "La montagne historique où se déroula la bataille d'Uhud. Lieu de recueillement et de mémoire.", icon: "map" },
  { name: "Masjid al-Ghamama", desc: "La mosquée de l'ombre, site mémoriel lié à la prière de l'Aïd du Prophète ﷺ.", icon: "crescent" },
];

const SITES_MAKKAH = [
  { name: "La Kaaba et Al-Masjid al-Haram", desc: "Le cœur du monde islamique. Tawaf, prières et recueillement à la Maison d'Allah.", icon: "crescent" },
  { name: "Jabal Nour — La grotte de Hira", desc: "La montagne de la Lumière où le Prophète ﷺ reçut la première révélation coranique.", icon: "map" },
  { name: "Jabal Thawr", desc: "La montagne où le Prophète ﷺ et Abou Bakr se cachèrent lors de l'Hégire vers Médine.", icon: "map" },
  { name: "Mina, Muzdalifah & Arafat", desc: "Les lieux du Hajj : station à Arafat, nuit à Muzdalifah, jet des pierres à Mina.", icon: "compass" },
  { name: "Masjid al-Khayf", desc: "Grande mosquée de Mina, lieu de prière pour les pèlerins pendant le Hajj.", icon: "crescent" },
  { name: "Bir Zamzam", desc: "Le puits de l'eau bénite de Zamzam, au cœur du Haram de La Mecque.", icon: "crescent" },
];

const INCLUDES = [
  { icon: "users",      title: "Accompagnateur formé",       desc: "Un guide qualifié présent à chaque visite pour expliquer l'histoire et le contexte spirituel des lieux." },
  { icon: "bus",        title: "Transport inclus",           desc: "Navettes et transferts organisés entre les sites, sans stress logistique." },
  { icon: "book",       title: "Support documentaire",       desc: "Livret de Ziyarat et fiches pratiques remis avant le départ." },
  { icon: "clock",      title: "Temps de recueillement",     desc: "Chaque visite est pensée pour permettre un vrai moment spirituel, sans précipitation." },
  { icon: "shield",     title: "Sécurité et confort",        desc: "Groupes de taille maîtrisée, horaires adaptés pour éviter les heures de grande affluence." },
  { icon: "sparkle",    title: "Intégration au programme",   desc: "La Ziyarat est incluse ou disponible en option dans tous nos programmes Omra & Hajj." },
];

const quoteHref = quoteUrl({ service: "Omra" });

function SiteCard({ name, desc, icon }: { name: string; desc: string; icon: string }) {
  return (
    <div className="group rounded-2xl border border-syanor-gold/15 bg-syanor-pearl p-5 transition-all duration-200 hover:border-syanor-gold/35 hover:shadow-card">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-syanor-emerald/8 text-syanor-emerald">
        <Icon name={icon} className="h-4.5 w-4.5" aria-hidden="true" />
      </div>
      <h3 className="mb-1.5 text-sm font-semibold text-syanor-ink">{name}</h3>
      <p className="text-[0.78rem] leading-relaxed text-syanor-ink/60">{desc}</p>
    </div>
  );
}

export default function ZiyaratPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="SYANOR VOYAGES — Omra & Hajj"
        title="Ziyarat : visites des lieux saints."
        subtitle="Découvrez les sites historiques et spirituels de Médine et La Mecque. Guidé, accompagné, à votre rythme."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Omra & Hajj", href: "/omra-hajj" },
          { label: "Ziyarat" },
        ]}
        image="/services/religieux/omra.png"
        primaryCta={{ label: "Inclure la Ziyarat", href: quoteHref }}
        secondaryCta={{ label: "Voir les départs Omra", href: "/omra-2026" }}
      />

      {/* What is Ziyarat */}
      <Section
        eyebrow="Définition"
        title="Qu'est-ce que la Ziyarat ?"
        subtitle="La Ziyarat désigne la visite pieuse des lieux saints, historiques et spirituels liés à l'Islam. Elle complète et enrichit profondément l'expérience de l'Omra ou du Hajj."
      >
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-syanor-gold/20 bg-gradient-to-br from-syanor-pearl to-syanor-champagne/30 p-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold">
              <Icon name="crescent" className="h-8 w-8" aria-hidden="true" />
            </div>
            <blockquote className="font-playfair text-xl italic text-syanor-ink leading-relaxed">
              "La Ziyarat est une invitation à toucher l'histoire de l'Islam de ses propres pas. Chaque site est un lien vivant entre le présent et les origines de notre foi."
            </blockquote>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["Incluse dans nos programmes", "Guide accompagnateur", "Transport organisé", "Support documentaire"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-syanor-gold/20 bg-white px-3.5 py-1.5 text-xs font-medium text-syanor-ink/70">
                  <Icon name="check" className="h-3 w-3 text-syanor-gold" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Sites à Médine */}
      <Section
        variant="champagne"
        eyebrow="Médine — Al-Madinah al-Munawwarah"
        title="Les lieux à visiter à Médine"
        subtitle="La ville du Prophète ﷺ regorge de sites d'une profondeur spirituelle unique. Votre séjour à Médine commence le voyage avant d'atteindre La Mecque."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SITES_MADINAH.map((site, i) => (
            <Reveal key={site.name} delay={(i % 3) * 50}>
              <SiteCard {...site} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Sites à La Mecque */}
      <Section
        eyebrow="La Mecque — Makkah al-Mukarramah"
        title="Les lieux à visiter à La Mecque"
        subtitle="Autour du Masjid al-Haram, de nombreux sites historiques rappellent les origines de l'Islam et la vie du Prophète ﷺ."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SITES_MAKKAH.map((site, i) => (
            <Reveal key={site.name} delay={(i % 3) * 50}>
              <SiteCard {...site} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section
        variant="emerald"
        eyebrow="Ce que nous organisons"
        title="Une Ziyarat complète et accompagnée"
        subtitle="Chez SYANOR VOYAGES, la Ziyarat n'est pas une excursion précipitée. C'est une partie intégrante de votre voyage spirituel, préparée et encadrée avec soin."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDES.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 50}>
              <div className="rounded-2xl border border-syanor-gold/12 bg-white/[0.04] p-5 transition-all duration-200 hover:border-syanor-gold/25 hover:bg-white/[0.07]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-syanor-gold" style={{ background: "rgba(201,162,74,0.12)", border: "1px solid rgba(201,162,74,0.20)" }}>
                  <Icon name={item.icon} className="h-4.5 w-4.5" aria-hidden="true" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-syanor-ivory">{item.title}</h3>
                <p className="text-[0.78rem] leading-relaxed text-syanor-champagne/55">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Programs with Ziyarat */}
      <Section
        eyebrow="Programmes incluant la Ziyarat"
        title="Choisissez votre programme Omra"
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { title: "Omra Classique", desc: "12 jours · Médine & Makkah · Ziyarat incluse.", href: "/omra-hajj/omra", cta: "Voir l'Omra" },
            { title: "Omra Plus",      desc: "21–34 jours · Programme enrichi · Ziyarat étendue.", href: "/omra-hajj/omra-plus", cta: "Voir Omra Plus" },
            { title: "Hajj 2027",      desc: "Pèlerinage complet · Ziyarat Médine & Makkah.", href: "/hajj-2027", cta: "Préinscription Hajj" },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="group flex flex-col rounded-2xl border border-syanor-gold/18 bg-syanor-pearl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-syanor-emerald text-syanor-gold">
                  <Icon name="crescent" className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-playfair text-lg font-bold text-syanor-ink">{p.title}</h3>
                <p className="flex-1 text-sm text-syanor-ink/60">{p.desc}</p>
                <Link
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-syanor-emerald transition-colors hover:text-syanor-royal"
                >
                  {p.cta}
                  <Icon name="arrow-right" className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FaqSection
        title="Questions sur la Ziyarat"
        items={[
          {
            question: "La Ziyarat est-elle obligatoire pendant l'Omra ?",
            answer: "Non, la Ziyarat n'est pas un pilier de l'Omra. Elle est recommandée et fortement appréciée des pèlerins, mais reste optionnelle. Nous l'intégrons à tous nos programmes car elle enrichit profondément l'expérience spirituelle.",
          },
          {
            question: "La Ziyarat est-elle incluse dans le prix du programme ?",
            answer: "Oui, pour la majorité de nos programmes Omra, la Ziyarat de Médine et de La Mecque est incluse. Elle est encadrée par un accompagnateur et les transports sont organisés.",
          },
          {
            question: "Peut-on faire la Ziyarat de Médine même si on n'est pas encore à La Mecque ?",
            answer: "Oui. La plupart de nos itinéraires débutent par un séjour à Médine avant de rejoindre La Mecque. Les visites de Médine se font donc en début de séjour.",
          },
          {
            question: "Quel est le meilleur moment pour la Ziyarat ?",
            answer: "Les visites sont organisées tôt le matin ou en soirée pour éviter la forte chaleur et les grandes affluences. Nos guides adaptent les horaires selon la saison.",
          },
        ]}
      />

      <CTASection
        title="Intégrez la Ziyarat à votre programme Omra."
        body="Contactez-nous pour inclure les visites des lieux saints dans votre itinéraire. Nous organisons tout : transport, guide, horaires et documentation."
        ctaLabel="Demander un devis"
        ctaHref={quoteHref}
        secondary={{ label: "Voir les départs Omra 2026", href: "/omra-2026" }}
      />

      <StickyMobileCTA label="Inclure la Ziyarat" href={quoteHref} />
    </SiteLayout>
  );
}
