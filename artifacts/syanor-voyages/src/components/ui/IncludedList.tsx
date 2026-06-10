import { cn } from "@/lib/utils";

interface IncludedListProps {
  title: string;
  items: string[];
  tone?: "included" | "excluded";
  className?: string;
}

function CheckSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M2.5 8l3.5 3.5 7.5-7" />
    </svg>
  );
}

function MinusSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M4 8h8" />
    </svg>
  );
}

export default function IncludedList({
  title,
  items,
  tone = "included",
  className,
}: IncludedListProps) {
  const isIncluded = tone === "included";
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 shadow-card md:p-7",
        isIncluded
          ? "border-syanor-gold/20 bg-syanor-pearl"
          : "border-syanor-ink/8 bg-white/60",
        className
      )}
    >
      <h3 className="font-playfair text-lg text-syanor-ink">{title}</h3>
      <div className="mt-3 w-10 gold-divider" aria-hidden="true" />
      <ul className="mt-5 space-y-2.5 text-sm text-syanor-ink/75">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                isIncluded
                  ? "bg-syanor-emerald/10 text-syanor-emerald"
                  : "bg-syanor-ink/6 text-syanor-ink/35"
              )}
              aria-hidden="true"
            >
              {isIncluded ? <CheckSvg /> : <MinusSvg />}
            </span>
            <span className={cn(isIncluded ? "" : "text-syanor-ink/50")}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
