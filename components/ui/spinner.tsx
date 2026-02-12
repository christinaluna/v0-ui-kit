import * as React from "react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Size in Tailwind units (applies to width/height). */
  size?: "sm" | "md" | "lg";
  /** Accessible label for screen readers. */
  label?: string;
};

/**
 * Spinner loader.
 */
export function Spinner({ className, size = "md", label = "Loading", ...props }: SpinnerProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)} {...props}>
      <Icon
        name="spinner"
        className={cn(
          size === "sm" && "size-3.5",
          size === "md" && "size-4",
          size === "lg" && "size-5",
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}


