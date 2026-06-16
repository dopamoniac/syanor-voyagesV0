/**
 * PremiumQuoteBox — Apple-level luxury booking/quote module.
 * Drop this on any service page, offer page, or CTA area.
 * 
 * Props:
 *  - theme: "light" (ivory glass) | "dark" (emerald glass)
 *  - title, subtitle
 *  - features: bullet list shown in the box
 *  - ctaLabel, ctaHref
 *  - secondaryCta (optional link below button)
 *  - image (optional right-side visual)
 *  - imageAlt
 */
import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";

interface QuoteBoxProps {
  theme?: "light" | "dark";
  title: string;
  subtitle?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref: string;
  secondaryCta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
  badge?: string;
  className?: string;
}

export default function PremiumQuoteBox({
  theme = "light",
  title,
  subtitle,
  features,
  ctaLabel = "Demander un devis",
  ctaHref,
  secondaryCta,
  image,
  imageAlt,
  badge,
  className = "",
}: QuoteBoxProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-[0_24px_64px_rgba(6,63,51,0.16)] ${className}`}
      style={{
        background: isDark
          ? "linear-gradient(135deg, #022B24 0%, #063F33 100%)"
          : "linear-gradient(135deg, #FFF9ED 0%, #f5edd8 100%)",
        border: isDark
          ? "1px solid rgba(201,162,74,0.25)"
          : "1px solid rgba(201,162,74,0.22)",
        boxShadow: isDark
          ? "0 8px 32px rgba(2,43,36,0.20)"
          : "0 4px 24px rgba(6,63,51,0.08)",
      }}
    >
      {/* Ambient decoration */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-20 transition-opacity duration-300 group-hover:opacity-30"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(201,162,74,0.5), transparent 70%)"
            : "radial-gradient(circle, rgba(6,63,51,0.08), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className={`relative flex flex-col gap-6 p-7 lg:flex-row lg:items-center lg:gap-10 ${image ? "lg:pr-0" : ""}`}>

        {/* LEFT — content */}
        <div className="flex-1">
          {/* Badge */}
          {badge && (
            <span
              className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest"
              style={
                isDark
                  ? { background: "rgba(201,162,74,0.15)", color: "#C9A24A", border: "1px solid rgba(201,162,74,0.25)" }
                  : { background: "rgba(6,63,51,0.07)", color: "#063F33", border: "1px solid rgba(6,63,51,0.12)" }
              }
            >
              <span className="h-1 w-1 rounded-full" style={{ background: isDark ? "#C9A24A" : "#063F33" }} aria-hidden="true" />
              {badge}
            </span>
          )}

          {/* Title */}
          <h3 className={`font-playfair text-xl font-bold leading-snug lg:text-2xl ${isDark ? "text-syanor-ivory" : "text-syanor-ink"}`}>
            {title}
          </h3>

          {/* Divider */}
          <div
            className="my-4 h-px w-10"
            style={{
              background: isDark
                ? "linear-gradient(to right, rgba(201,162,74,0.6), transparent)"
                : "linear-gradient(to right, rgba(6,63,51,0.3), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Subtitle */}
          {subtitle && (
            <p className={`mb-5 text-sm leading-relaxed ${isDark ? "text-syanor-champagne/65" : "text-syanor-ink/65"}`}>
              {subtitle}
            </p>
          )}

          {/* Feature list */}
          {features && features.length > 0 && (
            <ul className="mb-6 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${isDark ? "bg-syanor-gold/20 text-syanor-gold" : "bg-syanor-emerald/12 text-syanor-emerald"}`} aria-hidden="true">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className={`text-sm ${isDark ? "text-syanor-champagne/70" : "text-syanor-ink/70"}`}>{f}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={ctaHref}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] ${
                isDark
                  ? "bg-syanor-gold text-syanor-royal hover:bg-syanor-gold/90 hover:shadow-[0_8px_24px_rgba(201,162,74,0.35)]"
                  : "bg-syanor-emerald text-syanor-ivory hover:bg-syanor-royal hover:shadow-[0_8px_24px_rgba(6,63,51,0.25)]"
              }`}
            >
              <Icon name="sparkle" className="h-3.5 w-3.5" aria-hidden="true" />
              {ctaLabel}
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`text-sm font-medium transition-colors ${
                  isDark ? "text-syanor-gold/60 hover:text-syanor-gold" : "text-syanor-emerald/70 hover:text-syanor-emerald"
                }`}
              >
                {secondaryCta.label} →
              </Link>
            )}
          </div>
        </div>

        {/* RIGHT — optional image */}
        {image && (
          <div className="hidden shrink-0 overflow-hidden rounded-2xl lg:block lg:w-56">
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ aspectRatio: "3/4" }}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
}
