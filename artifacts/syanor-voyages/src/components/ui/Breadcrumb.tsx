import Link from "@/components/Link";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm">
      <ol className={`flex flex-wrap items-center gap-1.5 ${light ? "text-syanor-champagne/50" : "text-syanor-ink/60"}`}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className={`transition hover:text-syanor-gold ${light ? "text-syanor-champagne/55" : ""}`}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? (light ? "text-syanor-gold/80" : "text-syanor-emerald") : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="text-syanor-gold/50" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
