import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { quoteUrl } from "@/lib/utils";

const documents = [
  { icon: "📘", title: "Passeport biométrique",  detail: "Valide 6 mois minimum après la date de retour" },
  { icon: "📸", title: "Photos d'identité",       detail: "Format 35×45 mm, fond blanc, récentes" },
  { icon: "💉", title: "Carnet de vaccination",   detail: "Méningocoque ACYW135 obligatoire (et autres selon exigences)" },
  { icon: "📋", title: "Formulaire de visa",      detail: "Rempli et signé — pris en charge par SYANOR" },
  { icon: "✈",  title: "Billet d'avion",          detail: "Aller-retour confirmé (inclus dans nos formules)" },
  { icon: "🏨", title: "Réservation hôtel",       detail: "Confirmations hôtel selon destination" },
];

const steps = [
  { step: "1", title: "Vous nous contactez",    desc: "Via le formulaire ou par téléphone. Nous évaluons votre situation et vérifions vos documents." },
  { step: "2", title: "Constitution du dossier",desc: "Nous vous guidons sur les documents à fournir et vérifions chaque pièce avant soumission." },
  { step: "3", title: "Soumission de la demande",desc: "Nous soumettons votre dossier auprès des autorités compétentes dans les délais recommandés." },
  { step: "4", title: "Suivi en temps réel",    desc: "Nous suivons l'avancement de votre dossier et vous informons à chaque étape." },
  { step: "5", title: "Remise du visa",          desc: "Votre visa vous est transmis avant le départ. Vous voyagez sereinement." },
];

export default function AgenceVisasPage() {
  return (
    <SiteLayout>
      <PageHero
        image="/services/assistance-visa.png"
        eyebrow="Visa & démarches"
        title="Assistance visa et démarches administratives"
        subtitle="SYANOR prend en charge l'intégralité de votre dossier visa. Documents, délais, suivi : nous gérons tout pour que vous vous concentriez sur votre voyage."
        crumbs={[{ label: "Accueil", href: "/agence" }, { label: "Visas" }]}
        primaryCta={{ label: "Demander l'assistance visa", href: quoteUrl({ service: "Voyage" }) }}
      />

      {/* Visa types */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Types de visas"
            title="Visa spécifique ou visa touristique ?"
            subtitle="Selon votre destination et votre type de voyage, différentes options de visa existent. SYANOR vous conseille sur la démarche la plus adaptée."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-syanor-gold/50 bg-syanor-pearl p-6 shadow-gold">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-syanor-gold/20 text-lg">📿</span>
                <h3 className="font-playfair text-lg font-bold text-syanor-ink">Visa organisé</h3>
              </div>
              <p className="text-sm text-syanor-ink/70">
                Obtenu via une agence de voyage agréée. Inclus dans nos formules voyage. Valable pour la durée du séjour. SYANOR gère entièrement les démarches.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-syanor-ink/70">
                <li className="flex items-start gap-2"><span className="text-syanor-gold">✦</span>Délai : 5 à 10 jours ouvrés</li>
                <li className="flex items-start gap-2"><span className="text-syanor-gold">✦</span>Géré entièrement par SYANOR</li>
                <li className="flex items-start gap-2"><span className="text-syanor-gold">✦</span>Assistance incluse dans nos formules</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-syanor-gold/20 bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-lg">🌍</span>
                <h3 className="font-playfair text-lg font-bold text-syanor-ink">Visa touristique (eVisa)</h3>
              </div>
              <p className="text-sm text-syanor-ink/70">
                Option électronique disponible pour de nombreuses destinations. Plus souple, mais avec des spécificités à vérifier selon la nationalité et la destination.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-syanor-ink/70">
                <li className="flex items-start gap-2"><span className="text-slate-400">✦</span>Démarche individuelle en ligne</li>
                <li className="flex items-start gap-2"><span className="text-slate-400">✦</span>Conditions spécifiques selon nationalité</li>
                <li className="flex items-start gap-2"><span className="text-slate-400">✦</span>Conseil SYANOR : nous consulter avant</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Documents requis"
            title="Ce qu'il vous faut pour votre visa"
            subtitle="La liste ci-dessous correspond aux exigences standards. SYANOR vérifie chaque dossier avant soumission."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <div key={doc.title} className="flex gap-4 rounded-xl border border-syanor-gold/20 bg-syanor-pearl p-5">
                <span className="text-2xl" aria-hidden="true">{doc.icon}</span>
                <div>
                  <p className="font-semibold text-syanor-ink">{doc.title}</p>
                  <p className="mt-1 text-sm text-syanor-ink/65">{doc.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-syanor-ink/60">
            Exigences susceptibles d'évoluer. SYANOR vous tient informé de toute modification officielle.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Notre processus"
            title="5 étapes, zéro stress"
            subtitle="De la vérification de vos documents à la remise du visa, SYANOR gère l'intégralité du processus."
          />
          <div className="mt-12 space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5 rounded-xl bg-white p-5 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-syanor-emerald text-sm font-bold text-syanor-ivory">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-syanor-ink">{s.title}</p>
                  <p className="mt-1 text-sm text-syanor-ink/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <SectionHeader
            eyebrow="Erreurs courantes"
            title="Ce qui retarde ou bloque un dossier"
            subtitle="Confiez votre dossier à SYANOR pour éviter ces erreurs fréquentes."
          />
          <ul className="mt-10 space-y-4">
            {[
              { title: "Passeport expirant trop tôt",   detail: "Le passeport doit être valide 6 mois minimum après la date de retour. Vérifiez bien avant de réserver." },
              { title: "Photos non conformes",          detail: "Les photos ont des normes précises (fond blanc pur, visage dégagé, taille exacte). Nous vérifions la conformité avant soumission." },
              { title: "Vaccination périmée",           detail: "Certains vaccins doivent être récents. Vérifiez la date limite sur votre carnet de santé." },
              { title: "Dossier soumis trop tard",      detail: "Nous recommandons de soumettre le dossier au moins 3 semaines avant le départ, voire plus en période de forte demande." },
              { title: "Documents incomplets",          detail: "Un dossier incomplet retarde la procédure. SYANOR vérifie chaque pièce avant soumission." },
            ].map((item) => (
              <li key={item.title} className="rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4">
                <p className="font-semibold text-amber-800">{item.title}</p>
                <p className="mt-1 text-sm text-amber-700">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-syanor-ivory">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <SectionHeader eyebrow="FAQ Visa" title="Questions fréquentes sur l'assistance visa" />
          <div className="mt-10 space-y-4">
            {[
              { q: "L'assistance visa est-elle payante ?",           a: "L'assistance visa est incluse dans toutes nos formules voyage. Il n'y a pas de frais supplémentaires pour la constitution du dossier. Les frais de visa officiels peuvent s'appliquer selon les cas." },
              { q: "Puis-je faire ma demande de visa moi-même ?",    a: "Techniquement oui, mais nous recommandons de confier cette démarche à SYANOR pour garantir un dossier conforme et éviter les erreurs fréquentes." },
              { q: "Combien de temps faut-il pour obtenir le visa ?",a: "En général 5 à 10 jours ouvrés hors périodes de forte demande. Nous vous conseillons de ne pas attendre le dernier moment." },
              { q: "Que se passe-t-il si mon visa est refusé ?",     a: "Le refus est rare si le dossier est bien constitué. En cas de refus, nous analysons les motifs et reconstituons le dossier. Votre réservation est maintenue." },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-syanor-gold/20 bg-white">
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
        title="Confiez votre dossier visa à SYANOR."
        body="Dès la réservation, nous prenons en charge toutes les démarches administratives. Vous n'avez qu'à préparer votre voyage."
        ctaLabel="Demander l'assistance visa"
        ctaHref={quoteUrl({ service: "Voyage" })}
        secondary={{ label: "Voir nos services", href: "/agence/services" }}
      />

      <StickyMobileCTA label="Demander l'assistance visa" href={quoteUrl({ service: "Voyage" })} />
    </SiteLayout>
  );
}
