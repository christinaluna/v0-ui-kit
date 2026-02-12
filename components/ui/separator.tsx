import * as React from "react";

import { cn } from "@/lib/utils";

export type SeparatorProps = React.HTMLAttributes<HTMLHRElement> & {
  /** Orientation. */
  orientation?: "horizontal" | "vertical";
};

/**
 * Divider / separator line.
 */
export function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("h-full w-px bg-border/70", className)}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      />
    );
  }

  return (
    <hr className={cn("my-6 w-full border-border/70", className)} {...props} />
  );
}


