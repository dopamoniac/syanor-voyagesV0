import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-3", light && "text-syanor-gold-soft")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-playfair text-3xl md:text-h2 leading-tight",
          light ? "text-syanor-ivory" : "text-syanor-ink"
        )}
      >
        {title}
      </h2>
      {align === "center" && (
        <div className="mx-auto mt-5 w-24 gold-divider" aria-hidden="true" />
      )}
      {subtitle && (
        <p
          className={cn(
            "mt-5 font-inter text-base leading-relaxed",
            light ? "text-syanor-champagne/90" : "text-syanor-ink/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
