import Link from "@/components/Link";
import type { ReactNode } from "react";
import Breadcrumb, { type Crumb } from "@/components/ui/Breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  crumbs?: Crumb[];
  /** Optional background image url (subtle, overlaid). */
  image?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Shifts the ambient orb palette to a warm (gold) tone vs default emerald. */
  warm?: boolean;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  image,
  primaryCta,
  secondaryCta,
  warm = false,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-syanor-ivory pt-28 md:pt-34">
      {/* ── Ambient glow orbs ── */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[480px] w-[480px] rounded-full opacity-40"
        style={{ background: warm ? "radial-gradient(circle, rgba(201,162,74,0.22), transparent 65%)" : "radial-gradient(circle, rgba(6,63,51,0.12), transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[320px] w-[320px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,162,74,0.15), transparent 65%)" }}
        aria-hidden="true"
      />

      {/* ── Dot-grid pattern ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-60"
        aria-hidden="true"
      />

      {/* ── Main gradient overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 70% 55% at 75% 15%, rgba(245,232,199,0.55), transparent 60%)" }}
        aria-hidden="true"
      />

      {/* ── Background image ── */}
      {image && (
        <>
          <div className="absolute inset-0 -z-20">
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-20"
              loading="eager"
            />
          </div>
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "linear-gradient(to bottom, rgba(255,249,237,0.72) 0%, rgba(255,249,237,0.88) 60%, #fff9ed 100%)" }}
            aria-hidden="true"
          />
        </>
      )}

      {/* ── Gold hairline at bottom ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-syanor-gold/30 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 pb-14 md:px-8 md:pb-18">
        {crumbs && (
          <div className="mb-7">
            <Breadcrumb items={crumbs} />
          </div>
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="eyebrow mb-4">{eyebrow}</p>
          )}
          <h1 className="font-playfair text-4xl font-bold leading-[1.08] tracking-tight text-syanor-ink md:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {/* Gold accent underline */}
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-syanor-gold to-transparent" aria-hidden="true" />
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-syanor-ink/65 md:text-lg">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
