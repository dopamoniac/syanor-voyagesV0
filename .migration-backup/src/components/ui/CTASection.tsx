import Link from "next/link";

interface CTASectionProps {
  title: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  secondary?: { label: string; href: string };
}

function Ornament({ className }: { className?: string }) {
  return (
    <svg className={className} width="120" height="16" viewBox="0 0 120 16" fill="none" aria-hidden="true">
      <path d="M0 8h44" stroke="#C9A24A" strokeWidth="1" />
      <path d="M120 8H76" stroke="#C9A24A" strokeWidth="1" />
      <path d="M60 2l5 6-5 6-5-6z" stroke="#C9A24A" strokeWidth="1" fill="none" />
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
    <section className="bg-syanor-emerald">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-8 md:py-20">
        <Ornament className="mx-auto" />
        <h2 className="mt-6 font-playfair text-3xl leading-tight text-syanor-ivory md:text-4xl">
          {title}
        </h2>
        {body && (
          <p className="mx-auto mt-5 max-w-2xl font-inter leading-relaxed text-syanor-champagne/90">
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
              className="rounded-full border border-syanor-gold/50 px-8 py-3.5 font-medium text-syanor-champagne transition hover:bg-syanor-gold/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
        <Ornament className="mx-auto mt-8 rotate-180" />
      </div>
    </section>
  );
}
