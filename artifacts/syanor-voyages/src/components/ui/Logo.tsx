import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "light";
  className?: string;
}

export default function Logo({ variant = "full", className }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="flex flex-col leading-none" aria-label="SYANOR VOYAGES">
        <span
          className={cn(
            "font-playfair font-bold text-2xl tracking-wide",
            variant === "light" ? "text-syanor-ivory" : "text-syanor-emerald"
          )}
        >
          SYANOR
        </span>
        <span className="mt-0.5 font-inter text-[0.6rem] font-light tracking-[0.3em] text-syanor-gold">
          VOYAGES
        </span>
      </div>
    );
  }

  return (
    <img
      src="/brand/syanor-logo-transparent.png"
      alt="SYANOR VOYAGES"
      width={600}
      height={225}
      onError={() => setImgError(true)}
      className={cn(
        "block h-auto w-auto object-contain",
        className ?? (variant === "light"
          ? "max-w-[135px]"
          : "max-w-[130px] sm:max-w-[150px] lg:max-w-[172px]"
        )
      )}
    />
  );
}
