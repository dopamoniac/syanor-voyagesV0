import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import OffersGrid from "@/components/ui/OffersGrid";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { offers } from "@/data/offers";

/* ───────────────────────── Services preview ───────────────────────── */
export function ServicesPreview() {
  return (
    <section id="services" className="section-pad bg-syanor-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Nos services"
          title="Un univers de voyage complet, pensé pour votre sérénité."
          subtitle="De la réservation d'un simple billet à l'organisation complète d'un séjour premium, SYANOR VOYAGES vous accompagne avec précision et attention."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-secondary">
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Offers preview ───────────────────────── */
export function OffersPreview() {
  const featured = offers.filter((o) => o.featured).slice(0, 3);
  const list = featured.length > 0 ? featured : offers.slice(0, 3);
  return (
    <section id="offres" className="section-pad bg-syanor-champagne/40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Départs & offres"
          title="Nos prochains départs & offres mises en avant"
          subtitle="Un aperçu de nos départs. Consultez toutes les offres ou demandez une proposition sur mesure selon vos dates et votre confort."
        />
        <div className="mt-12">
          <OffersGrid offers={list} />
        </div>
        <div className="mt-12 text-center">
          <Link href="/offres" className="btn-primary">
            Voir toutes les offres & départs
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Tickets preview ───────────────────────── */
const ticketCards = [
  {
    title: "Billets Avion",
    href: "/services/billets-avion",
    icon: "airplane",
    features: ["Vols internationaux", "Aller simple ou retour", "Itinéraires optimisés", "Suivi avant départ"],
  },
  {
    title: "Billets Bateau",
    href: "/services/billets-bateau",
    icon: "anchor",
    features: ["Traversées ferry", "Conseils ports & horaires", "Option véhicule", "Assistance client"],
  },
];

export function TicketsPreview() {
  return (
    <section id="billets" className="section-pad bg-syanor-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Billets avion & bateau"
          title="Vos billets d'avion et de bateau, réservés avec simplicité."
          subtitle="Un service clair, humain et efficace pour vos déplacements internationaux."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {ticketCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-syanor-gold/20 bg-syanor-pearl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-t-2xl bg-syanor-emerald">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,162,74,0.25),transparent_60%)]"
                    aria-hidden="true"
                  />
                  <Icon name={card.icon} className="h-16 w-16 text-syanor-gold" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-playfair text-h3 text-syanor-ink">{card.title}</h3>
                  <ul className="mt-5 flex-1 space-y-2.5 text-sm text-syanor-ink/75">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-syanor-gold" aria-hidden="true">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={card.href} className="btn-primary mt-7">
                    Découvrir
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Spiritual preview ───────────────────────── */
const spiritualFeatures = [
  "Préparation des rites",
  "Accompagnement spirituel",
  "Hôtels sélectionnés",
  "Transferts organisés",
  "Ziyarat Makkah & Madinah",
  "Packs famille, groupe, VIP",
];

export function SpiritualPreview() {
  return (
    <section id="omra-hajj" className="section-pad bg-syanor-champagne/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Voyages spirituels</p>
            <h2 className="font-playfair text-3xl leading-tight text-syanor-ink md:text-h2">
              Omra &amp; Hajj : une expérience spirituelle organisée avec
              excellence.
            </h2>
            <p className="mt-5 font-inter leading-relaxed text-syanor-ink/70">
              Nous accompagnons chaque étape de votre voyage spirituel avec
              respect, clarté et attention, pour que vous puissiez vous
              concentrer sur l&apos;essentiel.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {spiritualFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-syanor-ink/80">
                  <span className="text-syanor-gold" aria-hidden="true">✦</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/omra-hajj" className="btn-primary">
                Découvrir Omra &amp; Hajj
              </Link>
              <Link href="/formation" className="btn-secondary">
                La formation spirituelle
              </Link>
            </div>
          </div>
          <Reveal className="mx-auto w-full max-w-md">
            <div className="card-emerald flex aspect-square flex-col items-center justify-center p-10 text-center bg-[#fcf4e1]">
              <Icon name="crescent" className="h-20 w-20 text-syanor-gold" />
              <p className="mt-6 font-playfair text-2xl text-[#000000]">
                Makkah &amp; Madinah
              </p>
              <p className="mt-3 text-sm text-[#000000cc]">
                Omra, Hajj, Omra Plus, Ramadan — accompagnés du premier échange
                jusqu&apos;au retour.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Formation preview ───────────────────────── */
const formationCards = [
  { title: "Formation avant départ", icon: "book" },
  { title: "Préparation des rites", icon: "crescent" },
  { title: "Guides & supports pratiques", icon: "map" },
  { title: "Ziyarat & découvertes", icon: "compass" },
  { title: "Accompagnement sur place", icon: "users" },
  { title: "Suivi avant, pendant, après", icon: "shield" },
];

export function FormationPreview() {
  return (
    <section id="formation" className="section-pad bg-syanor-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Accompagnement & formation"
          title="Préparez votre voyage spirituel avec clarté et sérénité."
          subtitle="Avant le départ, pendant les rites et tout au long du séjour, SYANOR VOYAGES vous accompagne."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formationCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 60}>
              <article className="card-emerald flex h-full items-start gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-syanor-gold/15 text-syanor-gold">
                  <Icon name={card.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-playfair text-lg leading-snug text-[#000000]">
                  {card.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/formation" className="btn-primary">
            Découvrir la formation
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Custom stays preview ───────────────────────── */
export function CustomStaysPreview() {
  return (
    <section id="sur-mesure" className="section-pad bg-syanor-pearl">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="rounded-2xl border border-syanor-gold/20 bg-white p-8 shadow-card">
              <p className="eyebrow">Exemple de composition</p>
              <dl className="mt-5 space-y-3 text-sm">
                {[
                  ["Destination", "Au choix"],
                  ["Transport", "Avion / Bateau / Mixte"],
                  ["Confort", "Standard · Premium · VIP"],
                  ["Hôtel & transferts", "Sur demande"],
                  ["Accompagnement", "Disponible"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-3 border-b border-syanor-gold/15 pb-2"
                  >
                    <dt className="text-syanor-ink/60">{k}</dt>
                    <dd className="font-medium text-syanor-emerald">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-3">Sur mesure</p>
            <h2 className="font-playfair text-3xl leading-tight text-syanor-ink md:text-h2">
              Construisez un séjour qui vous ressemble.
            </h2>
            <p className="mt-5 font-inter leading-relaxed text-syanor-ink/70">
              Votre voyage conçu autour de vos dates, votre budget, votre confort
              et vos envies. Un configurateur complet vous attend.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/sejours-sur-mesure" className="btn-primary">
                Créer mon séjour sur mesure
              </Link>
              <Link href="/voyages-organises" className="btn-secondary">
                Voir les voyages organisés
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
