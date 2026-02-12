import * as React from "react";

import { cn } from "@/lib/utils";

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "sm" | "md" | "lg";
};

/**
 * Simple grid system wrapper (Tailwind utility composition).
 */
export function Grid({ className, cols = 12, gap = "md", ...props }: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        cols === 1 && "grid-cols-1",
        cols === 2 && "grid-cols-2",
        cols === 3 && "grid-cols-3",
        cols === 4 && "grid-cols-4",
        cols === 5 && "grid-cols-5",
        cols === 6 && "grid-cols-6",
        cols === 12 && "grid-cols-12",
        gap === "sm" && "gap-3",
        gap === "md" && "gap-4",
        gap === "lg" && "gap-6",
        className,
      )}
      {...props}
    />
  );
}

export type GridItemProps = React.HTMLAttributes<HTMLDivElement> & {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

/**
 * Grid item with column span.
 */
export function GridItem({ className, span = 12, ...props }: GridItemProps) {
  return (
    <div
      className={cn(
        span === 1 && "col-span-1",
        span === 2 && "col-span-2",
        span === 3 && "col-span-3",
        span === 4 && "col-span-4",
        span === 5 && "col-span-5",
        span === 6 && "col-span-6",
        span === 7 && "col-span-7",
        span === 8 && "col-span-8",
        span === 9 && "col-span-9",
        span === 10 && "col-span-10",
        span === 11 && "col-span-11",
        span === 12 && "col-span-12",
        className,
      )}
      {...props}
    />
  );
}


