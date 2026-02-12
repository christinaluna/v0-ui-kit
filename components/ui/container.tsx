import * as React from "react";

import { cn } from "@/lib/utils";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Max width preset. */
  size?: "sm" | "md" | "lg" | "xl";
};

/**
 * Layout container with consistent horizontal padding + max width.
 */
export function Container({
  className,
  size = "xl",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6",
        size === "sm" && "max-w-2xl",
        size === "md" && "max-w-3xl",
        size === "lg" && "max-w-5xl",
        size === "xl" && "max-w-6xl",
        className,
      )}
      {...props}
    />
  );
}


