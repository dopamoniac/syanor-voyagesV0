type Metadata = Record<string, unknown>;
import { useRef, useState } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "@/components/Link";
import { quoteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes | SYANOR VOYAGES",
  description:
    "Toutes les réponses à vos questions sur la Omra, le Hajj, les billets avion et bateau, les visas, le paiement et la réservation chez SYANOR VOYAGES.",
  alternates: { canonical: "/faq" },
};

const faqGroups = [
  {
    id: "omra",
    label: "Omra",
    icon: "crescent",
    items: [
      { q: "Quels sont les départs Omra disponibles ?", a: "SYANOR propose des départs Omra depuis Nice et Marseille sur la saison 2026-2027, avec des départs en octobre, novembre et décembre 2026, puis en janvier, février, mars et avril 2027. Consultez les pages /omra-2026 et /omra-2027 pour les dates exactes." },
      { q: "Quelle est la durée d'une Omra ?", a: "La durée standard est de 12 jours / 11 nuits. Nous proposons également un séjour exceptionnel de 34 jours (février–mars 2027) pour une expérience approfondie." },
      { q: "L'accompagnement spirituel est-il inclus ?", a: "Oui. Un accompagnateur qualifié est présent tout au long du séjour pour vous guider dans les rites, les prières spécifiques, la Ziyarat et les moments importants du séjour." },
      { q: "Puis-je partir depuis une ville autre que Nice ou Marseille ?", a: "Nos départs confirmés partent de Nice et Marseille. Pour d'autres villes (Lyon, Paris, Toulouse, Bruxelles), nous organisons des départs sur demande avec itinéraire personnalisé." },
      { q: "Puis-je partir en famille ?", a: "Absolument. Nous acceptons les réservations individuelles, en couple, en famille et en groupe. Précisez le nombre de personnes dans votre demande." },
      { q: "La Omra peut-elle s'accomplir toute l'année ?", a: "La Omra est possible toute l'année, sauf pendant la période du Hajj. SYANOR propose des départs réguliers sur une grande partie de l'année." },
    ],
  },
  {
    id: "hajj",
    label: "Hajj",
    icon: "crescent",
    items: [
      { q: "Proposez-vous le Hajj 2027 ?", a: "Oui. SYANOR prépare un programme Hajj 2027 avec accompagnement complet, préparation des rites, hébergement et assistance administrative. Les inscriptions sont ouvertes — contactez-nous pour plus d'informations." },
      { q: "Quelles sont les dates du Hajj 2027 ?", a: "Les dates du Hajj dépendent du calendrier islamique officiel et des quotas saoudiens. Les dates exactes pour 2027 seront confirmées en temps voulu. Inscrivez-vous à notre liste de préinscription pour être informé en priorité." },
      { q: "Le Hajj est-il soumis à des quotas ?", a: "Oui. L'Arabie Saoudite impose des quotas par pays. SYANOR gère les démarches auprès des autorités compétentes pour garantir votre place dans les meilleures conditions." },
    ],
  },
  {
    id: "billets",
    label: "Billets avion & bateau",
    icon: "airplane",
    items: [
      { q: "Proposez-vous des billets avion seuls ?", a: "Oui. SYANOR recherche les meilleurs itinéraires aériens pour toutes destinations selon vos dates, avec assistance à la réservation et suivi avant départ." },
      { q: "Organisez-vous des traversées en ferry ?", a: "Oui. Traversées ferry en aller simple ou aller-retour, avec conseils sur les ports et horaires et option véhicule si applicable." },
      { q: "Puis-je réserver un billet sans pack complet ?", a: "Tout à fait. Nous proposons des billets avion et bateau indépendamment des formules Omra. Remplissez le formulaire de devis avec votre destination et vos dates." },
    ],
  },
  {
    id: "visas",
    label: "Visas",
    icon: "clipboard",
    items: [
      { q: "L'assistance visa est-elle incluse dans les formules Omra ?", a: "Oui. Toutes nos formules Omra incluent l'assistance visa. Nous constituons et soumettons le dossier pour vous." },
      { q: "Quels documents sont nécessaires pour le visa Omra ?", a: "Passeport biométrique (valide 6 mois), photos d'identité fond blanc, carnet de vaccination méningococcique, formulaire de demande. SYANOR vous guide document par document." },
      { q: "Combien de temps faut-il pour obtenir le visa Omra ?", a: "Généralement 5 à 10 jours ouvrés en période normale. Pendant le Ramadan, comptez 15 à 20 jours. Nous recommandons de ne pas attendre le dernier moment." },
      { q: "Les femmes peuvent-elles voyager sans mahram ?", a: "Les femmes de moins de 45 ans voyageant en groupe organisé n'ont généralement pas besoin de mahram. Les conditions exactes dépendent de la nationalité. Consultez-nous pour votre situation spécifique." },
    ],
  },
  {
    id: "paiement",
    label: "Paiement",
    icon: "diamond",
    items: [
      { q: "Comment se règle la réservation ?", a: "Après validation de votre devis, nous vous communiquons les modalités de règlement adaptées (virement, chèque ou autre). Un acompte peut être demandé à la confirmation." },
      { q: "Proposez-vous le paiement en plusieurs fois ?", a: "Selon les formules et les dates, des facilités de paiement peuvent être proposées. Discutez-en lors de votre devis personnalisé." },
      { q: "Les prix affichés sont-ils TTC ?", a: "Tous nos prix sont communiqués sur devis et incluent l'ensemble des prestations indiquées (vol, hôtel, transferts). Aucun frais caché — tout est détaillé avant votre engagement." },
    ],
  },
  {
    id: "reservation",
    label: "Réservation",
    icon: "calendar",
    items: [
      { q: "Comment réserver avec SYANOR ?", a: "Remplissez le formulaire de devis sur notre site ou contactez-nous par téléphone ou WhatsApp. Nous revenons vers vous rapidement avec une proposition adaptée." },
      { q: "Combien de temps à l'avance dois-je réserver ?", a: "Nous recommandons de réserver 2 à 4 mois avant le départ pour les formules Omra classiques. Pour le Ramadan ou les périodes de forte demande, comptez 4 à 6 mois minimum." },
      { q: "Puis-je modifier ma réservation ?", a: "Les conditions de modification dépendent des délais et des disponibilités. Contactez-nous dès que possible — nous cherchons toujours une solution adaptée." },
      { q: "Que se passe-t-il si je dois annuler ?", a: "Les conditions d'annulation sont précisées dans notre contrat de voyage. Contactez-nous au plus tôt en cas d'imprévu pour minimiser les frais éventuels." },
    ],
  },
  {
    id: "services",
    label: "Nos services",
    icon: "sparkle",
    items: [
      { q: "Quels services propose SYANOR VOYAGES ?", a: "SYANOR organise des Omra et Hajj accompagnés, des billets avion et bateau, des voyages organisés, des séjours sur mesure et des packs premium VIP. De la simple réservation à l'organisation complète." },
      { q: "Proposez-vous des voyages organisés ?", a: "Oui. Séjours culturels en groupe avec programme structuré, hôtels et accompagnement. Istanbul est notre destination phare, d'autres destinations disponibles sur demande." },
      { q: "Qu'est-ce qu'un séjour sur mesure ?", a: "Vous indiquez votre destination, vos dates, votre budget et vos préférences. Nous construisons un programme entièrement personnalisé avec hôtel au choix, transferts privés et assistance dédiée." },
    ],
  },
];

/* ── Premium accordion (consistent with FaqList design) ─────────── */
function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="overflow-hidden rounded-2xl border border-syanor-gold/20 bg-syanor-ivory shadow-card">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <AccordionRow
            key={idx}
            index={idx}
            question={item.q}
            answer={item.a}
            isOpen={isOpen}
            onToggle={() => setOpen(isOpen ? null : idx)}
          />
        );
      })}
    </div>
  );
}

function AccordionRow({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const panelId = `faq-acc-panel-${index}`;
  const btnId = `faq-acc-btn-${index}`;

  return (
    <div className={`border-b border-syanor-gold/15 last:border-b-0 transition-colors duration-200 ${isOpen ? "bg-syanor-champagne/20" : ""}`}>
      <div className="relative">
        <div
          className={`absolute inset-y-0 left-0 w-[3px] rounded-full bg-syanor-gold transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        />
        <h3>
          <button
            id={btnId}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={onToggle}
            className="flex w-full items-start justify-between gap-4 py-5 pl-5 pr-5 text-left"
          >
            <span className={`text-sm font-semibold leading-snug transition-colors duration-200 md:text-base ${isOpen ? "text-syanor-emerald" : "text-syanor-ink"}`}>
              {question}
            </span>
            <span
              className={`relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-syanor-gold/50 bg-syanor-gold/10 text-syanor-gold" : "border-syanor-gold/25 text-syanor-ink/40"}`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5">
                {isOpen ? (
                  <path d="M3 8h10" />
                ) : (
                  <path d="M8 3v10M3 8h10" />
                )}
              </svg>
            </span>
          </button>
        </h3>
      </div>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="accordion-content"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 400}px` : 0 }}
      >
        <div ref={contentRef} className="pb-5 pl-5 pr-10 text-sm leading-relaxed text-syanor-ink/65">
          {answer}
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        visual="editorial"
        eyebrow="Questions fréquentes"
        title="FAQ — Toutes vos questions"
        subtitle="Retrouvez les réponses aux questions les plus fréquentes sur la Omra, le Hajj, les billets, les visas et la réservation."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]}
        primaryCta={{ label: "Poser une autre question", href: "/agence/contact" }}
      />

      {/* Tab navigation */}
      <nav className="sticky top-0 z-20 border-b border-syanor-gold/20 bg-syanor-ivory/95 py-3.5 shadow-card backdrop-blur-sm">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 md:px-8">
          <div className="no-scrollbar flex gap-2">
            {faqGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-syanor-emerald/25 px-4 py-1.5 text-sm font-medium text-syanor-emerald transition-all duration-200 hover:border-syanor-emerald hover:bg-syanor-emerald hover:text-syanor-ivory"
              >
                <span className="h-3.5 w-3.5 transition-colors duration-200 group-hover:text-syanor-gold" aria-hidden="true">
                  <Icon name={g.icon} className="h-3.5 w-3.5" />
                </span>
                {g.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Groups */}
      <div>
        {faqGroups.map((group, i) => (
          <section
            key={group.id}
            id={group.id}
            className={`section-pad ${i % 2 === 0 ? "bg-syanor-ivory" : "bg-syanor-pearl"}`}
          >
            <div className="mx-auto max-w-3xl px-6 md:px-8">
              {/* Section heading */}
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold">
                  <Icon name={group.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="eyebrow text-syanor-gold/80">Section</p>
                  <h2 className="font-playfair text-2xl font-bold text-syanor-ink">{group.label}</h2>
                </div>
              </div>
              <div className="mb-6 w-16 gold-divider" aria-hidden="true" />
              <FaqAccordion items={group.items} />
            </div>
          </section>
        ))}
      </div>

      {/* Still have questions */}
      <section className="section-pad-sm bg-syanor-champagne">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <p className="eyebrow mb-3">Une question non listée ?</p>
          <h2 className="font-playfair text-2xl font-bold text-syanor-ink">
            Contactez directement notre équipe
          </h2>
          <p className="mt-4 text-syanor-ink/70">
            Notre équipe répond à toutes vos questions par téléphone, WhatsApp ou e-mail du lundi au vendredi.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/agence/contact" className="btn-primary">Nous contacter</Link>
            <Link href={quoteUrl({ service: "Omra" })} className="btn-secondary">Demander un devis</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à démarrer votre voyage ?"
        body="Remplissez notre formulaire de devis en 2 minutes. Nous revenons vers vous avec une proposition personnalisée."
        ctaLabel="Demander un devis"
        ctaHref={quoteUrl({ service: "Omra" })}
        secondary={{ label: "Voir les offres Omra", href: "/omra-factory/omra-2026" }}
      />

      <StickyMobileCTA label="Poser ma question" href="/agence/contact" />
    </SiteLayout>
  );
}
