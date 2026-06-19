import Link from "@/components/Link";

const DESTINATIONS = [
  {
    id: "istanbul",
    city: "Istanbul",
    country: "Turquie",
    tagline: "Entre Orient et Occident",
    href: "/contact?dest=Istanbul#quote",
    image: "/destinations/istanbul.jpg",
    imagePosition: "center center",
    textAccent: "#D8B56A",
  },
  {
    id: "marrakech",
    city: "Marrakech",
    country: "Maroc",
    tagline: "Splendeur de la médina",
    href: "/contact?dest=Marrakech#quote",
    image: "/destinations/marrakech.jpg",
    imagePosition: "center 30%",
    textAccent: "#D8B56A",
  },
  {
    id: "dubai",
    city: "Dubaï",
    country: "Émirats Arabes Unis",
    tagline: "L'excellence au désert",
    href: "/contact?dest=Dubai#quote",
    image: "/destinations/dubai.jpg",
    imagePosition: "center center",
    textAccent: "#D8B56A",
  },
  {
    id: "bali",
    city: "Bali",
    country: "Indonésie",
    tagline: "L'île des dieux",
    href: "/contact?dest=Bali#quote",
    image: "/destinations/bali.jpg",
    imagePosition: "center center",
    textAccent: "#D8B56A",
  },
  {
    id: "egypte",
    city: "Égypte",
    country: "Le Caire · Louxor",
    tagline: "Berceau des civilisations",
    href: "/contact?dest=Egypte#quote",
    image: "/destinations/egypte.jpg",
    imagePosition: "center 40%",
    textAccent: "#D8B56A",
  },
  {
    id: "londres",
    city: "Londres",
    country: "Royaume-Uni",
    tagline: "Capitale du prestige",
    href: "/contact?dest=Londres#quote",
    image: "/destinations/londres.jpg",
    imagePosition: "center 55%",
    textAccent: "#D8B56A",
  },
];

function DestCard({ dest, className = "" }: { dest: typeof DESTINATIONS[0]; className?: string }) {
  return (
    <Link
      href={dest.href}
      className={`group relative block overflow-hidden rounded-[20px] ${className}`}
      aria-label={`Voyager à ${dest.city}`}
    >
      {/* Photo */}
      <img
        src={dest.image}
        alt={dest.city}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        style={{ objectPosition: dest.imagePosition }}
        loading="lazy"
        decoding="async"
      />

      {/* Dark vignette overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.08) 100%)" }}
      />

      {/* Text content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 md:p-6">
        <p
          className="text-[0.50rem] font-bold uppercase tracking-[0.32em]"
          style={{ color: dest.textAccent, opacity: 0.85 }}
        >
          {dest.country}
        </p>
        <div
          className="mt-2 h-px w-8"
          aria-hidden="true"
          style={{ background: `linear-gradient(to right, ${dest.textAccent}, transparent)`, opacity: 0.55 }}
        />
        <h3
          className="mt-2 font-playfair font-light leading-[1.0] text-white"
          style={{ fontSize: "clamp(1.55rem, 2.8vw, 2.4rem)" }}
        >
          {dest.city}
        </h3>
        <p className="mt-1 text-[0.60rem] font-medium text-white/38 tracking-wide hidden sm:block">
          {dest.tagline}
        </p>
        <div
          className="mt-3 flex items-center gap-1.5 text-[0.57rem] font-bold uppercase tracking-[0.18em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ color: dest.textAccent }}
        >
          Demander un séjour
          <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function DestinationsShowcase() {
  const [istanbul, marrakech, dubai, bali, egypte, londres] = DESTINATIONS;

  return (
    <section className="section-pad" style={{ background: "#F8F4EE" }} id="destinations">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-14 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="text-[0.55rem] font-bold uppercase tracking-[0.32em] mb-3"
              style={{ color: "#D8B56A" }}
            >
              Nos destinations
            </p>
            <h2
              className="font-playfair font-light leading-[1.04]"
              style={{ color: "#1A1712", fontSize: "clamp(1.9rem, 4vw, 3.0rem)" }}
            >
              Le monde à votre portée.
            </h2>
          </div>
          <Link
            href="/contact#quote"
            className="shrink-0 rounded-full px-6 py-2.5 text-[0.75rem] font-semibold transition-all duration-200 hover:shadow-md"
            style={{ border: "1px solid #D8B56A", color: "#1A1712" }}
          >
            Toutes nos destinations →
          </Link>
        </div>

        {/* Mobile: horizontal scroll snap */}
        <div
          className="flex gap-3 overflow-x-auto pb-3 lg:hidden"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="shrink-0"
              style={{ width: "82vw", height: 240, scrollSnapAlign: "start" }}
            >
              <DestCard dest={dest} className="h-full" />
            </div>
          ))}
        </div>

        {/* Desktop: bento grid (4 cols, 2 rows) */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "290px 210px",
            gap: 12,
          }}
        >
          {/* Istanbul — wide, row 1 */}
          <div style={{ gridColumn: "1 / 3", gridRow: "1" }}>
            <DestCard dest={istanbul} className="h-full" />
          </div>
          {/* Marrakech — tall, both rows */}
          <div style={{ gridColumn: "3", gridRow: "1 / 3" }}>
            <DestCard dest={marrakech} className="h-full" />
          </div>
          {/* Dubai — col 4, row 1 */}
          <div style={{ gridColumn: "4", gridRow: "1" }}>
            <DestCard dest={dubai} className="h-full" />
          </div>
          {/* Bali — col 1, row 2 */}
          <div style={{ gridColumn: "1", gridRow: "2" }}>
            <DestCard dest={bali} className="h-full" />
          </div>
          {/* Égypte — col 2, row 2 */}
          <div style={{ gridColumn: "2", gridRow: "2" }}>
            <DestCard dest={egypte} className="h-full" />
          </div>
          {/* Londres — col 4, row 2 */}
          <div style={{ gridColumn: "4", gridRow: "2" }}>
            <DestCard dest={londres} className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
