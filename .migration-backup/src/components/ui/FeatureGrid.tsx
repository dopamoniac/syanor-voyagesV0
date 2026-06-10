import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export interface Feature {
  title: string;
  desc?: string;
  icon?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: "pearl" | "emerald";
}

export default function FeatureGrid({
  features,
  columns = 3,
  variant = "pearl",
}: FeatureGridProps) {
  const colClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid gap-5", colClass)}>
      {features.map((f, i) => (
        <Reveal key={f.title} delay={(i % columns) * 60}>
          <div
            className={cn(
              "flex h-full items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1",
              variant === "emerald"
                ? "card-emerald hover:shadow-gold"
                : "border border-syanor-gold/20 bg-syanor-pearl shadow-card hover:shadow-card-hover"
            )}
          >
            {f.icon && (
              <span
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                  variant === "emerald"
                    ? "bg-syanor-gold/15 text-syanor-gold"
                    : "bg-syanor-emerald text-syanor-gold"
                )}
              >
                <Icon name={f.icon} className="h-5 w-5" />
              </span>
            )}
            <div>
              <h3
                className={cn(
                  "font-playfair text-base leading-snug",
                  variant === "emerald" ? "text-syanor-ivory" : "text-syanor-ink"
                )}
              >
                {f.title}
              </h3>
              {f.desc && (
                <p
                  className={cn(
                    "mt-1 text-sm",
                    variant === "emerald"
                      ? "text-syanor-champagne/80"
                      : "text-syanor-ink/65"
                  )}
                >
                  {f.desc}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
