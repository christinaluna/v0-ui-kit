import * as React from "react";

import { cn } from "@/lib/utils";

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Progress value 0-100. */
  value: number;
};

/**
 * Progress bar with accessible `role="progressbar"`.
 */
export function Progress({ className, value, ...props }: ProgressProps) {
  const safe = Math.max(0, Math.min(100, value));

  return (
    <div
      role="progressbar"
      aria-valuenow={safe}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "h-3 w-full overflow-hidden rounded-full border border-border/70 bg-muted",
        className,
      )}
      {...props}
    >
      <div
        className="h-full bg-primary transition-[width] duration-300 ease-out"
        style={{ width: `${safe}%` }}
      />
    </div>
  );
}


