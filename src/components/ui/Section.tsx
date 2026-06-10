import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  variant?: "ivory" | "pearl" | "champagne" | "emerald";
  children: ReactNode;
  className?: string;
}

const bgClass: Record<NonNullable<SectionProps["variant"]>, string> = {
  ivory: "bg-syanor-ivory",
  pearl: "bg-syanor-pearl",
  champagne: "bg-syanor-champagne/30",
  emerald: "bg-syanor-emerald",
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "ivory",
  children,
  className,
}: SectionProps) {
  const light = variant === "emerald";
  return (
    <section id={id} className={cn("section-pad", bgClass[variant], className)}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {(title || eyebrow) && (
          <SectionHeader
            eyebrow={eyebrow}
            title={title ?? ""}
            subtitle={subtitle}
            align={align}
            light={light}
          />
        )}
        <div className={title || eyebrow ? "mt-12" : undefined}>{children}</div>
      </div>
    </section>
  );
}
