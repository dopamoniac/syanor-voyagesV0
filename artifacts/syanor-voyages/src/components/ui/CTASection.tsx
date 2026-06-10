import Link from "@/components/Link";

interface CTASectionProps {
  title: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  secondary?: { label: string; href: string };
}

function GoldOrnament({ className }: { className?: string }) {
  return (
    <svg className={className} width="140" height="18" viewBox="0 0 140 18" fill="none" aria-hidden="true">
      <line x1="0" y1="9" x2="52" y2="9" stroke="#C9A24A" strokeWidth="0.75" strokeOpacity="0.6" />
      <line x1="140" y1="9" x2="88" y2="9" stroke="#C9A24A" strokeWidth="0.75" strokeOpacity="0.6" />
      <rect x="63" y="4" width="14" height="10" rx="0" transform="rotate(45 70 9)" stroke="#C9A24A" strokeWidth="0.75" strokeOpacity="0.8" fill="none" />
      <rect x="67" y="6" width="6" height="6" rx="0" transform="rotate(45 70 9)" fill="rgba(201,162,74,0.2)" />
    </svg>
  );
}

export default function CTASection({
  title,
  body,
  ctaLabel,
  ctaHref,
  secondary,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-syanor-emerald">
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/4 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(201,162,74,0.25), transparent 60%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] -translate-x-1/3 translate-y-1/2 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, rgba(201,162,74,0.18), transparent 65%)" }}
        aria-hidden="true"
      />
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-8"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(201,162,74,0.3) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Gold hairlines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-syanor-gold/40 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-syanor-gold/40 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:px-8 md:py-20">
        <GoldOrnament className="mx-auto" />
        <h2 className="mt-6 font-playfair text-3xl font-bold leading-tight tracking-tight text-syanor-ivory md:text-4xl">
          {title}
        </h2>
        {body && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-syanor-champagne/80">
            {body}
          </p>
        )}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={ctaHref} className="btn-gold">
            {ctaLabel}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-syanor-gold/40 px-7 py-3.5 text-sm font-semibold text-syanor-champagne transition-all duration-300 hover:-translate-y-0.5 hover:border-syanor-gold/70 hover:bg-syanor-gold/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
        <GoldOrnament className="mx-auto mt-8 rotate-180" />
      </div>
    </section>
  );
}
