import Link from "@/components/Link";
import Icon from "@/components/ui/Icon";
import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(6,63,51,0.14)]"
      style={{
        background: "linear-gradient(160deg, #FDFAF4 0%, #FFF9ED 100%)",
        border: "1px solid rgba(201,162,74,0.18)",
        boxShadow: "0 2px 12px rgba(6,63,51,0.06)",
      }}
    >
      {/* Gold top accent — thickens + brightens on hover */}
      <span
        className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl transition-all duration-300 group-hover:h-[3px]"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(201,162,74,0.65) 40%, rgba(201,162,74,0.65) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gold left micro-accent — reveals on hover */}
      <span
        className="absolute inset-y-6 left-0 w-[2px] scale-y-0 rounded-r-full transition-transform duration-300 group-hover:scale-y-100"
        style={{
          background:
            "linear-gradient(to bottom, rgba(201,162,74,0.55), rgba(201,162,74,0.08))",
          transformOrigin: "top",
        }}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col gap-5 p-6">
        {/* Icon container — emerald sphere */}
        <div className="relative flex h-12 w-12 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full transition-all duration-300 group-hover:shadow-[0_4px_20px_rgba(6,63,51,0.30)]"
            style={{
              background: "linear-gradient(145deg, #063F33 0%, #022B24 100%)",
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 28%, rgba(201,162,74,0.22), transparent 65%)",
            }}
            aria-hidden="true"
          />
          <span className="relative text-syanor-gold">
            <Icon name={service.icon} className="h-6 w-6" />
          </span>
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="font-playfair text-lg font-semibold leading-snug text-syanor-ink transition-colors duration-200 group-hover:text-syanor-emerald">
            {service.title}
          </h3>

          {/* Gold micro rule */}
          <div
            className="my-2.5 h-px rounded-full transition-all duration-300 group-hover:w-10"
            style={{
              width: "1.5rem",
              background: "linear-gradient(to right, rgba(201,162,74,0.42), transparent)",
            }}
            aria-hidden="true"
          />

          <p className="text-sm leading-relaxed text-syanor-ink/60">
            {service.description}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={service.href}
          className="group/link mt-auto inline-flex items-center gap-1.5 self-start text-[0.78rem] font-semibold text-syanor-gold transition-all duration-200 hover:gap-2.5 hover:text-syanor-emerald"
        >
          En savoir plus
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
