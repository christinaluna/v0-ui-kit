import * as React from "react";

import { cn } from "@/lib/utils";

export type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Optional left icon. */
  leadingIcon?: React.ReactNode;
  /** Optional trailing action (e.g. close/remove). */
  trailingAction?: React.ReactNode;
};

/**
 * Tag/chip component (for filters, labels, selections).
 */
export function Chip({
  className,
  leadingIcon,
  trailingAction,
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-3 py-1 text-sm text-foreground shadow-sm",
        className,
      )}
      {...props}
    >
      {leadingIcon ? <span className="text-muted-foreground">{leadingIcon}</span> : null}
      <span className="truncate">{children}</span>
      {trailingAction ? <span className="ml-1">{trailingAction}</span> : null}
    </span>
  );
}


