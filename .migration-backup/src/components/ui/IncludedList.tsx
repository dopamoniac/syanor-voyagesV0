import { cn } from "@/lib/utils";

interface IncludedListProps {
  title: string;
  items: string[];
  tone?: "included" | "excluded";
  className?: string;
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
        "rounded-2xl border p-6 md:p-7",
        isIncluded
          ? "border-syanor-gold/25 bg-syanor-pearl"
          : "border-syanor-ink/10 bg-white",
        className
      )}
    >
      <h3 className="font-playfair text-lg text-syanor-ink">{title}</h3>
      <div className="mt-3 w-12 gold-divider" aria-hidden="true" />
      <ul className="mt-5 space-y-2.5 text-sm text-syanor-ink/75">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span
              className={cn(
                "mt-0.5 shrink-0",
                isIncluded ? "text-syanor-emerald" : "text-syanor-ink/40"
              )}
              aria-hidden="true"
            >
              {isIncluded ? "✓" : "—"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
