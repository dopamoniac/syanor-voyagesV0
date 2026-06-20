import { useRef, useState } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import Link from "@/components/Link";
import { quoteUrl } from "@/lib/utils";

const faqGroups = [
  {
    id: "billets",
    label: "Billets avion & bateau",
    icon: "airplane",
    items: [
      { q: "Proposez-vous des billets avion seuls ?", a: "Oui. SYANOR recherche les meilleurs itinéraires aériens pour toutes destinations selon vos dates, avec assistance à la réservation et suivi avant départ." },
      { q: "Organisez-vous des traversées en ferry ?", a: "Oui. Traversées ferry en aller simple ou aller-retour, avec conseils sur les ports et horaires et option véhicule si applicable." },
      { q: "Puis-je réserver un billet sans pack complet ?", a: "Tout à fait. Nous proposons des billets avion et bateau indépendamment de tout séjour. Remplissez le formulaire de devis avec votre destination et vos dates." },
    ],
  },
  {
    id: "visas",
    label: "Visas",
    icon: "clipboard",
    items: [
      { q: "Proposez-vous une assistance visa ?", a: "Oui. SYANOR vous accompagne dans vos démarches administratives et vous conseille sur les documents requis selon votre destination." },
      { q: "Combien de temps faut-il prévoir pour un visa ?", a: "Les délais varient selon la destination. Nous recommandons d'anticiper et de nous contacter dès que votre projet est défini." },
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
      { q: "Combien de temps à l'avance dois-je réserver ?", a: "Nous recommandons de réserver 2 à 4 mois avant le départ pour les séjours classiques. Pour les périodes de forte demande (été, vacances scolaires), comptez 4 à 6 mois minimum." },
      { q: "Puis-je modifier ma réservation ?", a: "Les conditions de modification dépendent des délais et des disponibilités. Contactez-nous dès que possible — nous cherchons toujours une solution adaptée." },
      { q: "Que se passe-t-il si je dois annuler ?", a: "Les conditions d'annulation sont précisées dans notre contrat de voyage. Contactez-nous au plus tôt en cas d'imprévu pour minimiser les frais éventuels." },
    ],
  },
  {
    id: "services",
    label: "Nos services",
    icon: "sparkle",
    items: [
      { q: "Quels services propose SYANOR VOYAGES ?", a: "SYANOR organise des billets avion et bateau, des voyages organisés, des séjours sur mesure, des packs Premium / VIP et l'assistance visa. De la simple réservation à l'organisation complète." },
      { q: "Proposez-vous des voyages organisés ?", a: "Oui. Séjours culturels en groupe avec programme structuré, hôtels et accompagnement. Istanbul est notre destination phare, d'autres destinations disponibles sur demande." },
      { q: "Qu'est-ce qu'un séjour sur mesure ?", a: "Vous indiquez votre destination, vos dates, votre budget et vos préférences. Nous construisons un programme entièrement personnalisé avec hôtel au choix, transferts privés et assistance dédiée." },
      { q: "Organisez-vous des voyages de noces ?", a: "Absolument. Nos séjours sur mesure incluent une formule lune de miel avec hôtel sélectionné, transferts privés et programme romantique personnalisé selon vos envies." },
    ],
  },
];

function FaqAccordionLocal({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="overflow-hidden rounded-2xl border border-syanor-gold/20 bg-syanor-ivory shadow-card">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return <AccordionRow key={idx} index={idx} question={item.q} answer={item.a} isOpen={isOpen} onToggle={() => setOpen(isOpen ? null : idx)} />;
      })}
    </div>
  );
}

function AccordionRow({ index, question, answer, isOpen, onToggle }: { index: number; question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const panelId = `afaq-acc-panel-${index}`;
  const btnId = `afaq-acc-btn-${index}`;
  return (
    <div className={`border-b border-syanor-gold/15 last:border-b-0 transition-colors duration-200 ${isOpen ? "bg-syanor-champagne/20" : ""}`}>
      <div className="relative">
        <div className={`absolute inset-y-0 left-0 w-[3px] rounded-full bg-syanor-gold transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
        <h3>
          <button id={btnId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={onToggle} className="flex w-full items-start justify-between gap-4 py-5 pl-5 pr-5 text-left">
            <span className={`text-sm font-semibold leading-snug transition-colors duration-200 md:text-base ${isOpen ? "text-syanor-emerald" : "text-syanor-ink"}`}>{question}</span>
            <span className={`relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-syanor-gold/50 bg-syanor-gold/10 text-syanor-gold" : "border-syanor-gold/25 text-syanor-ink/40"}`} aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5">{isOpen ? <path d="M3 8h10" /> : <path d="M8 3v10M3 8h10" />}</svg>
            </span>
          </button>
        </h3>
      </div>
      <div id={panelId} role="region" aria-labelledby={btnId} className="accordion-content" style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 400}px` : 0 }}>
        <div ref={contentRef} className="pb-5 pl-5 pr-10 text-sm leading-relaxed text-syanor-ink/65">{answer}</div>
      </div>
    </div>
  );
}

export default function AgenceFaqPage() {
  return (
    <SiteLayout>
      <PageHero
        visual="editorial"
        eyebrow="Questions fréquentes"
        title="FAQ — Toutes vos questions"
        subtitle="Retrouvez les réponses aux questions les plus fréquentes sur nos billets, nos voyages, les visas et la réservation."
        crumbs={[{ label: "Accueil", href: "/agence" }, { label: "FAQ" }]}
        primaryCta={{ label: "Poser une autre question", href: "/agence/contact" }}
      />

      <nav className="sticky top-0 z-20 border-b border-syanor-gold/20 bg-syanor-ivory/95 py-3.5 shadow-card backdrop-blur-sm">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 md:px-8">
          <div className="no-scrollbar flex gap-2">
            {faqGroups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-syanor-emerald/25 px-4 py-1.5 text-sm font-medium text-syanor-emerald transition-all duration-200 hover:border-syanor-emerald hover:bg-syanor-emerald hover:text-syanor-ivory">
                <span className="h-3.5 w-3.5 transition-colors duration-200 group-hover:text-syanor-gold" aria-hidden="true"><Icon name={g.icon} className="h-3.5 w-3.5" /></span>
                {g.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div>
        {faqGroups.map((group, i) => (
          <section key={group.id} id={group.id} className={`section-pad ${i % 2 === 0 ? "bg-syanor-ivory" : "bg-syanor-pearl"}`}>
            <div className="mx-auto max-w-3xl px-6 md:px-8">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold"><Icon name={group.icon} className="h-5 w-5" /></span>
                <div>
                  <p className="eyebrow text-syanor-gold/80">Section</p>
                  <h2 className="font-playfair text-2xl font-bold text-syanor-ink">{group.label}</h2>
                </div>
              </div>
              <div className="mb-6 w-16 gold-divider" aria-hidden="true" />
              <FaqAccordionLocal items={group.items} />
            </div>
          </section>
        ))}
      </div>

      <section className="section-pad-sm bg-syanor-champagne">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <p className="eyebrow mb-3">Une question non listée ?</p>
          <h2 className="font-playfair text-2xl font-bold text-syanor-ink">Contactez directement notre équipe</h2>
          <p className="mt-4 text-syanor-ink/70">Notre équipe répond à toutes vos questions par téléphone, WhatsApp ou e-mail du lundi au vendredi.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/agence/contact" className="btn-primary">Nous contacter</Link>
            <Link href={quoteUrl({ service: "Voyage" })} className="btn-secondary">Demander un devis</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à démarrer votre voyage ?"
        body="Remplissez notre formulaire de devis en 2 minutes. Nous revenons vers vous avec une proposition personnalisée."
        ctaLabel="Demander un devis"
        ctaHref={quoteUrl({ service: "Voyage" })}
        secondary={{ label: "Voir nos services", href: "/agence/services" }}
      />

      <StickyMobileCTA label="Poser ma question" href="/agence/contact" />
    </SiteLayout>
  );
}
