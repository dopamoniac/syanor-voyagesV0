
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "gold" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  fullWidth?: boolean;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  gold: "btn-gold",
  ghost: "btn-ghost",
};

export default function Button({
  variant = "primary",
  children,
  fullWidth = false,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(variantClass[variant], fullWidth && "w-full", className)}
      {...rest}
    >
      {children}
    </button>
  );
}
