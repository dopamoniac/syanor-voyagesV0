import Link from "@/components/Link";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-syanor-ink/60">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition hover:text-syanor-gold">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-syanor-emerald" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="text-syanor-gold/60" aria-hidden="true">
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
