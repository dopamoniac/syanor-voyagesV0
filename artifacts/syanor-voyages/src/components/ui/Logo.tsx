
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "light";
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ variant = "full", className }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className={cn("flex flex-col leading-none", className)} aria-label="SYANOR VOYAGES">
        <span
          className={cn(
            "font-playfair font-bold text-2xl tracking-wide",
            variant === "light" ? "text-syanor-ivory" : "text-syanor-emerald"
          )}
        >
          SYANOR
        </span>
        <span
          className={cn(
            "font-inter text-[0.6rem] font-light tracking-[0.3em] mt-0.5",
            variant === "light" ? "text-syanor-gold-soft" : "text-syanor-gold"
          )}
        >
          VOYAGES
        </span>
      </div>
    );
  }

  return (
    <img
      src="/brand/syanor-logo.png"
      alt="SYANOR VOYAGES"
      width={200}
      height={100}
      onError={() => setImgError(true)}
      className={cn(
        "h-auto w-auto max-w-[140px] md:max-w-[170px] lg:max-w-[200px] object-contain",
        variant === "light" && "brightness-0 invert-0",
        className
      )}
    />
  );
}
