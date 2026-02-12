import * as React from "react";

import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "error"
  | "info";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

/**
 * Badge/pill for compact status or metadata.
 */
export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
        variant === "default" && "bg-primary/18 text-primary shadow-inset",
        variant === "secondary" && "bg-secondary/18 text-secondary shadow-inset",
        variant === "outline" && "border border-border/70 bg-card text-foreground shadow-inset",
        variant === "success" && "bg-success/18 text-success shadow-inset",
        variant === "warning" && "bg-warning/18 text-warning shadow-inset",
        variant === "error" && "bg-error/18 text-error shadow-inset",
        variant === "info" && "bg-info/18 text-info shadow-inset",
        className,
      )}
      {...props}
    />
  );
}


