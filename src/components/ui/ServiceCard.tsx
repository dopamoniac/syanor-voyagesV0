import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-syanor-pearl border border-syanor-gold/20 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <span
        className="absolute inset-x-0 top-0 h-[3px] bg-syanor-gold transition-all duration-300 group-hover:bg-syanor-gold-soft"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-4 p-7">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-syanor-emerald text-syanor-gold">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="font-playfair text-h3 text-syanor-ink">{service.title}</h3>
        <p className="font-inter text-sm leading-relaxed text-syanor-ink/70">
          {service.description}
        </p>
        <Link
          href={service.href}
          className="mt-auto self-start text-sm font-medium text-syanor-gold underline-offset-4 transition hover:underline"
        >
          En savoir plus →
        </Link>
      </div>
    </article>
  );
}
