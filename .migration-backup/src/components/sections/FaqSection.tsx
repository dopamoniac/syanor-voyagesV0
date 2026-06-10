import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import FaqList from "@/components/ui/FaqList";
import type { FaqItem } from "@/types";

interface FaqSectionProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  moreHref?: string;
  moreLabel?: string;
}

export default function FaqSection({
  items,
  eyebrow = "Questions fréquentes",
  title = "Vous avez des questions ?",
  subtitle,
  moreHref,
  moreLabel = "Voir toutes les questions",
}: FaqSectionProps) {
  return (
    <section className="section-pad bg-syanor-pearl">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="mt-10">
          <FaqList items={items} />
        </div>
        {moreHref && (
          <div className="mt-8 text-center">
            <Link href={moreHref} className="btn-secondary">
              {moreLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
