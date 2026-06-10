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
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-syanor-ivory pt-28 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,232,199,0.6),transparent_55%)]"
        aria-hidden="true"
      />
      {image && (
        <>
          <div className="absolute inset-0 -z-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-25" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-syanor-ivory/70 via-syanor-ivory/85 to-syanor-ivory" aria-hidden="true" />
        </>
      )}
      <div className="mx-auto max-w-7xl px-6 pb-12 md:px-8 md:pb-16">
        {crumbs && (
          <div className="mb-6">
            <Breadcrumb items={crumbs} />
          </div>
        )}
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 className="font-playfair text-4xl font-bold leading-[1.1] text-syanor-ink md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl font-inter text-base leading-relaxed text-syanor-ink/70 md:text-lg">
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
