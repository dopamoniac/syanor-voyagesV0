import { cn } from "@/lib/utils";

export default function GoldDivider({ className }: { className?: string }) {
  return <div className={cn("gold-divider", className)} aria-hidden="true" />;
}
