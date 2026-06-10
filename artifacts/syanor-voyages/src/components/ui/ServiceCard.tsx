import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-syanor-gold/20 bg-syanor-pearl shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      {/* Gold top accent */}
      <span
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-syanor-gold/60 to-transparent transition-all duration-300 group-hover:via-syanor-gold"
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col gap-5 p-7">
        {/* Icon container */}
        <div className="relative flex h-13 w-13 items-center justify-center">
          {/* Soft glow behind icon */}
          <div className="absolute inset-0 rounded-full bg-syanor-emerald opacity-90" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(201,162,74,0.18),transparent_65%)]" />
          <span className="relative text-syanor-gold">
            <Icon name={service.icon} className="h-6 w-6" />
          </span>
        </div>

        <div className="flex-1">
          <h3 className="font-playfair text-h3 leading-snug text-syanor-ink">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-syanor-ink/65">
            {service.description}
          </p>
        </div>

        <Link
          href={service.href}
          className="group/link mt-auto inline-flex items-center gap-1.5 self-start text-sm font-semibold text-syanor-gold transition-all duration-200 hover:gap-2.5 hover:text-syanor-emerald"
        >
          En savoir plus
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
