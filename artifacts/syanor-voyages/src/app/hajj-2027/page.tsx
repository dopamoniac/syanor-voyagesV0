type Metadata = Record<string, unknown>;
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "@/components/Link";
import { quoteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hajj 2027 — Pré-inscription & Programme | SYANOR VOYAGES",
  description:
    "Pré-inscrivez-vous dès maintenant pour le Hajj 2027 avec SYANOR VOYAGES. Programme accompagné, préparation des rites, hébergement, et assistance administrative complète.",
  alternates: { canonical: "/hajj-2027" },
};

const steps = [
  { num: "1", title: "Pré-inscription", desc: "Soumettez votre demande dès maintenant. Les places sont attribuées en fonction des quotas officiels — une demande anticipée est indispensable." },
  { num: "2", title: "Dossier administratif", desc: "SYANOR vous accompagne dans la constitution de votre dossier : passeport, vaccination, formulaires officiels et demande visa Hajj." },
  { num: "3", title: "Préparation spirituelle", desc: "Formation aux rites du Hajj, étude du programme jour par jour, guide pratique remis avant le départ." },
  { num: "4", title: "Départ accompagné", desc: "Vol, hébergement à Makkah et Madinah, transferts internes et accompagnateur présent à chaque étape." },
  { num: "5", title: "Sur les Lieux Saints", desc: "Accomplissement des rites du Hajj avec un encadrement constant : Arafat, Muzdalifah, Mina, Tawaf al-Ifada, Ziyarat de Madinah." },
  { num: "6", title: "Retour serein", desc: "Transfert vers l'aéroport et vol retour organisé. Accompagnement SYANOR jusqu'à votre ville de départ." },
];

const included = [
  "Organisation complète du voyage",
  "Vol international aller-retour",
  "Hébergement à Makkah (Mina inclus)",
  "Hébergement à Madinah",
  "Transferts internes organisés",
  "Préparation aux rites du Hajj",
  "Accompagnement spirituel continu",
  "Assistance administrative et visa",
  "Ziyarat de Madinah",
];

export default function Hajj2027Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Hajj 2027"
        title="Hajj 2027 — Accomplissez le cinquième pilier"
        subtitle="SYANOR VOYAGES prépare un programme Hajj 2027 complet : organisation, préparation des rites, hébergement et accompagnement à chaque étape. Les pré-inscriptions sont ouvertes."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Hajj 2027" }]}
        primaryCta={{ label: "Pré-inscription Hajj 2027", href: quoteUrl({ service: "Hajj" }) }}
        secondaryCta={{ label: "FAQ Hajj", href: "/faq#hajj" }}
      />

      {/* Important notice */}
      <div className="bg-amber-50 py-4">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-center text-sm text-amber-800">
            <strong>Information importante :</strong> Les dates du Hajj 2027 dépendent du calendrier islamique officiel et des quotas saoudiens. Les détails seront confirmés dès leur publication officielle. Pré-inscrivez-vous maintenant pour ne pas manquer votre place.
          </p>
        </div>
      </div>

      {/* What is Hajj */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Le cinquième pilier"
                title="Le Hajj : un voyage d'une vie"
                align="left"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-syanor-ink/75">
                <p>
                  Le Hajj est le pèlerinage à La Mecque, cinquième pilier de l'Islam, obligatoire une fois dans la vie pour tout musulman en ayant la capacité. Il se déroule chaque année du 8 au 13 Dhou al-Hijja, le douzième mois du calendrier islamique.
                </p>
                <p>
                  C'est un moment d'une intensité spirituelle sans équivalent, où des millions de pèlerins du monde entier convergent vers les Lieux Saints pour accomplir ensemble les rites fondateurs.
                </p>
                <p>
                  SYANOR VOYAGES accompagne les pèlerins dans cette démarche sacrée avec rigueur, bienveillance et expertise, de la première démarche administrative jusqu'au retour en France.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border-2 border-syanor-gold/40 bg-syanor-pearl p-6 shadow-gold">
              <p className="eyebrow mb-4">Le programme Hajj SYANOR</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-syanor-ink/80">
                    <span className="mt-0.5 text-syanor-gold" aria-hidden="true">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-syanor-ink/60 italic">
                Programme indicatif — détails confirmés selon les quotas et le calendrier officiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Votre parcours"
            title="De la pré-inscription au retour"
            subtitle="SYANOR vous accompagne à chaque étape, bien avant le départ."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl bg-syanor-pearl p-6 shadow-card">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-syanor-emerald text-sm font-bold text-syanor-ivory">
                  {s.num}
                </div>
                <h3 className="font-playfair text-lg font-semibold text-syanor-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-syanor-ink/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key rites */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Les rites du Hajj"
            title="Les étapes clés du pèlerinage"
            subtitle="Chaque rite a sa signification profonde. SYANOR vous prépare avant le départ pour les accomplir avec sérénité."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🕋", name: "Tawaf & Sa'y", desc: "7 tours autour de la Ka'ba, 7 allées-retours entre Safa et Marwa." },
              { icon: "🏔", name: "Arafat", desc: "La halte sur la plaine d'Arafat — le cœur du Hajj." },
              { icon: "🌙", name: "Muzdalifah", desc: "Nuit à ciel ouvert, collecte des cailloux pour le lapidement." },
              { icon: "⛺", name: "Mina & Lapidement", desc: "Séjour à Mina, lapidement des stèles de Shaytan." },
            ].map((rite) => (
              <div key={rite.name} className="rounded-xl bg-white p-5 shadow-card text-center">
                <span className="text-3xl" aria-hidden="true">{rite.icon}</span>
                <h4 className="mt-3 font-playfair text-base font-semibold text-syanor-ink">{rite.name}</h4>
                <p className="mt-2 text-sm text-syanor-ink/65">{rite.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <SectionHeader eyebrow="FAQ" title="Questions fréquentes — Hajj 2027" />
          <div className="mt-10 space-y-4">
            {[
              { q: "Quand auront lieu les dates du Hajj 2027 ?", a: "Le Hajj 2027 devrait se dérouler autour de mai–juin 2027 (calendrier islamique : vers 1448 H). Les dates exactes seront confirmées par les autorités saoudiennes. Pré-inscrivez-vous dès maintenant pour être prioritaire." },
              { q: "Y a-t-il des quotas pour le Hajj ?", a: "Oui. L'Arabie Saoudite impose des quotas stricts par pays. Les places sont allouées officiellement. SYANOR travaille avec des partenaires agréés pour maximiser vos chances d'obtenir une place." },
              { q: "Puis-je accomplir le Hajj pour la première fois ?", a: "Absolument. Notre programme est spécialement conçu pour les premiers pèlerins, avec préparation approfondie des rites et accompagnement renforcé sur place." },
              { q: "Quelle est la différence entre le Hajj et la Omra ?", a: "La Omra est un pèlerinage mineur, réalisable toute l'année. Le Hajj est le grand pèlerinage, obligatoire une fois dans la vie, qui se déroule uniquement pendant 5 jours spécifiques de l'année islamique." },
              { q: "Comment se déroule la pré-inscription ?", a: "Remplissez le formulaire de devis en sélectionnant 'Hajj'. Nous vous recontactons pour les détails administratifs, la constitution du dossier et les informations sur le programme 2027." },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-syanor-gold/20 bg-syanor-pearl">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-sm font-semibold text-syanor-ink">
                  {q}
                  <span className="shrink-0 text-syanor-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-syanor-ink/70">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Pré-inscrivez-vous pour le Hajj 2027."
        body="Les places sont limitées et attribuées bien en avance. Soumettez votre demande dès maintenant pour être prioritaire."
        ctaLabel="Pré-inscription Hajj 2027"
        ctaHref={quoteUrl({ service: "Hajj" })}
        secondary={{ label: "Voir la Omra 2026-2027", href: "/omra-2026" }}
      />

      <StickyMobileCTA label="Pré-inscription Hajj 2027" href={quoteUrl({ service: "Hajj" })} />
    </SiteLayout>
  );
}
