import Link from "@/components/Link";

interface StickyMobileCTAProps {
  label: string;
  href: string;
}

/** Sticky bottom CTA bar shown on mobile only. */
export default function StickyMobileCTA({ label, href }: StickyMobileCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-syanor-gold/30 bg-syanor-ivory/95 p-3 backdrop-blur-md lg:hidden">
      <Link href={href} className="btn-primary w-full">
        {label}
      </Link>
    </div>
  );
}
