import Link from "@/components/Link";
import type { ReactNode } from "react";
import Breadcrumb, { type Crumb } from "@/components/ui/Breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  crumbs?: Crumb[];
  image?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
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
    <section
      className="relative flex overflow-hidden bg-syanor-royal"
      style={{ minHeight: "88vh" }}
    >
      {/* ── Layered ambient glow ── */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(201,162,74,0.35), transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full opacity-15"
        style={{ background: warm ? "radial-gradient(circle, rgba(201,162,74,0.40), transparent 65%)" : "radial-gradient(circle, rgba(6,100,80,0.60), transparent 65%)" }}
        aria-hidden="true"
      />

      {/* ── Subtle noise/grain texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "180px" }}
        aria-hidden="true"
      />

      {/* ── Gold hairline top ── */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-syanor-gold/40 to-transparent" aria-hidden="true" />

      {/* ── Main content grid ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-28 md:px-8 lg:py-0">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_480px]">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col justify-center">
            {crumbs && (
              <div className="mb-8">
                <Breadcrumb items={crumbs} light />
              </div>
            )}

            {eyebrow && (
              <div className="mb-5 inline-flex">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                  style={{
                    background: "rgba(201,162,74,0.12)",
                    border: "1px solid rgba(201,162,74,0.35)",
                    color: "#C9A24A",
                  }}
                >
                  <span className="h-1 w-1 rounded-full bg-syanor-gold" aria-hidden="true" />
                  {eyebrow}
                </span>
              </div>
            )}

            <h1
              className="font-playfair font-bold leading-[1.06] tracking-tight text-syanor-ivory"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}
            >
              {title}
            </h1>

            {/* Gold accent rule */}
            <div className="mt-5 flex items-center gap-3" aria-hidden="true">
              <div className="h-px w-16 bg-gradient-to-r from-syanor-gold to-transparent" />
              <div className="h-1 w-1 rounded-full bg-syanor-gold/60" />
              <div className="h-px w-8 bg-gradient-to-r from-syanor-gold/40 to-transparent" />
            </div>

            {subtitle && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-syanor-champagne/70 md:text-[1.05rem]">
                {subtitle}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-syanor-royal transition-all duration-200 hover:opacity-90 hover:shadow-[0_8px_24px_rgba(201,162,74,0.35)] active:scale-[0.97]"
                    style={{ background: "linear-gradient(135deg, #C9A24A 0%, #e8c87a 50%, #C9A24A 100%)" }}
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold text-syanor-champagne transition-all duration-200 hover:bg-syanor-ivory/8 active:scale-[0.97]"
                    style={{ borderColor: "rgba(255,249,237,0.25)" }}
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}

            {children}
          </div>

          {/* ── RIGHT: Visual ── */}
          <div className="hidden lg:flex items-center justify-center relative">
            {image ? (
              /* Image mode: premium framed photo */
              <div className="relative w-full">
                {/* Outer glow ring */}
                <div
                  className="absolute -inset-4 rounded-3xl opacity-30"
                  style={{ background: "radial-gradient(ellipse, rgba(201,162,74,0.45), transparent 70%)" }}
                  aria-hidden="true"
                />
                {/* Frame */}
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ border: "1px solid rgba(201,162,74,0.30)", boxShadow: "0 32px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,162,74,0.12)" }}
                >
                  <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    className="h-[480px] w-full object-cover"
                    loading="eager"
                  />
                  {/* Subtle inner vignette */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(2,43,36,0.55) 0%, transparent 50%)" }}
                    aria-hidden="true"
                  />
                </div>
                {/* Corner ornament */}
                <div className="absolute -bottom-3 -right-3 h-16 w-16 opacity-50" aria-hidden="true">
                  <svg viewBox="0 0 64 64" fill="none">
                    <path d="M64 0 Q64 64 0 64" stroke="rgba(201,162,74,0.6)" strokeWidth="1" fill="none" />
                    <circle cx="64" cy="64" r="3" fill="rgba(201,162,74,0.5)" />
                  </svg>
                </div>
              </div>
            ) : (
              /* No-image mode: ornate gold geometric decoration */
              <div className="relative flex h-[460px] w-[460px] items-center justify-center">

                {/* Outer rotating dashed ring */}
                <div
                  className="absolute inset-0 rounded-full opacity-20"
                  style={{ border: "1px dashed rgba(201,162,74,0.8)", animation: "spin 40s linear infinite" }}
                  aria-hidden="true"
                />

                {/* Mid ring */}
                <div
                  className="absolute inset-8 rounded-full"
                  style={{ border: "1px solid rgba(201,162,74,0.18)" }}
                  aria-hidden="true"
                />

                {/* Inner ring */}
                <div
                  className="absolute inset-20 rounded-full"
                  style={{ border: "1px solid rgba(201,162,74,0.12)" }}
                  aria-hidden="true"
                />

                {/* Central orb */}
                <div
                  className="relative flex h-36 w-36 items-center justify-center rounded-full"
                  style={{
                    background: "radial-gradient(circle at 35% 35%, rgba(201,162,74,0.25), rgba(6,63,51,0.15) 60%, transparent)",
                    border: "1px solid rgba(201,162,74,0.30)",
                    boxShadow: "0 0 60px rgba(201,162,74,0.15), inset 0 0 40px rgba(201,162,74,0.05)",
                  }}
                  aria-hidden="true"
                >
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                    <path d="M26 4 L26 48 M4 26 L48 26" stroke="rgba(201,162,74,0.35)" strokeWidth="0.75"/>
                    <circle cx="26" cy="26" r="22" stroke="rgba(201,162,74,0.45)" strokeWidth="0.75"/>
                    <circle cx="26" cy="26" r="14" stroke="rgba(201,162,74,0.30)" strokeWidth="0.75"/>
                    <circle cx="26" cy="26" r="4" fill="rgba(201,162,74,0.55)"/>
                    <path d="M26 4 Q36 14 26 26 Q16 38 26 48" stroke="rgba(201,162,74,0.25)" strokeWidth="0.75" fill="none"/>
                  </svg>
                </div>

                {/* Cardinal dot ornaments */}
                {[0, 90, 180, 270].map((deg) => (
                  <div
                    key={deg}
                    className="absolute h-2.5 w-2.5 rounded-full"
                    style={{
                      background: "rgba(201,162,74,0.5)",
                      boxShadow: "0 0 8px rgba(201,162,74,0.4)",
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${deg}deg) translateY(-218px) translateX(-50%) translateY(50%)`,
                    }}
                    aria-hidden="true"
                  />
                ))}

                {/* Floating label chips */}
                <div
                  className="absolute top-14 right-0 rounded-full px-3.5 py-1.5 text-[0.67rem] font-semibold text-syanor-gold"
                  style={{ background: "rgba(201,162,74,0.10)", border: "1px solid rgba(201,162,74,0.25)", backdropFilter: "blur(8px)" }}
                  aria-hidden="true"
                >
                  ✦ Premium
                </div>
                <div
                  className="absolute bottom-16 left-2 rounded-full px-3.5 py-1.5 text-[0.67rem] font-semibold text-syanor-champagne/70"
                  style={{ background: "rgba(255,249,237,0.06)", border: "1px solid rgba(255,249,237,0.12)", backdropFilter: "blur(8px)" }}
                  aria-hidden="true"
                >
                  ✦ Sur mesure
                </div>
                <div
                  className="absolute top-1/2 right-4 -translate-y-6 rounded-full px-3.5 py-1.5 text-[0.67rem] font-semibold text-syanor-champagne/60"
                  style={{ background: "rgba(255,249,237,0.05)", border: "1px solid rgba(255,249,237,0.10)", backdropFilter: "blur(8px)" }}
                  aria-hidden="true"
                >
                  ✦ Accompagnement
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── Bottom fade to next section ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(2,43,36,0.6))" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-syanor-gold/25 to-transparent" aria-hidden="true" />
    </section>
  );
}
