import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export type ButtonStylesOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
};

/**
 * Build a consistent, accessible button className with variant/size presets.
 *
 * Note: This is intentionally a server-safe utility (no `"use client"`),
 * so it can be used to style Next.js `Link` elements in Server Components.
 */
export function buttonStyles({
  variant = "primary",
  size = "md",
  loading,
  className,
}: ButtonStylesOptions = {}) {
  return cn(
    // Base
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:translate-y-px",
    loading && "cursor-wait",
    // Variants
    variant === "primary" &&
      "bg-primary text-primary-foreground shadow-soft hover:bg-primary/95",
    variant === "secondary" &&
      "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/95",
    variant === "outline" &&
      "border border-border/80 bg-card text-foreground shadow-inset hover:bg-muted/70",
    variant === "ghost" && "bg-transparent text-foreground hover:bg-muted/60",
    variant === "link" &&
      "bg-transparent text-primary underline-offset-4 hover:underline active:translate-y-0",
    variant === "destructive" &&
      "bg-destructive text-destructive-foreground shadow-soft hover:bg-destructive/95",
    // Sizes
    size === "sm" && "h-9 px-3 text-sm",
    size === "md" && "h-10 px-4 text-sm",
    size === "lg" && "h-11 px-5 text-base",
    size === "xl" && "h-12 px-6 text-base",
    className,
  );
}


