"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
> & {
  /** Optional label rendered to the left of the switch. */
  label?: string;
  /** Helper text rendered under the label. */
  description?: string;
};

/**
 * Accessible toggle switch (Radix) with token-driven styling.
 */
export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, label, description, id, disabled, ...props }, ref) => {
  const reactId = React.useId();
  const switchId = id ?? `switch-${reactId}`;
  const describedById = `${switchId}-desc`;
  const showDescription = Boolean(description);

  const control = (
    <SwitchPrimitive.Root
      ref={ref}
      id={switchId}
      disabled={disabled}
      aria-describedby={showDescription ? describedById : undefined}
      className={cn(
        "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-border bg-muted p-0.5 shadow-sm transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-60",
        "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block size-5 rounded-full bg-background shadow-soft transition-transform",
          "data-[state=checked]:translate-x-5",
        )}
      />
    </SwitchPrimitive.Root>
  );

  if (!label && !description) return control;

  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-border/70 bg-card p-4">
      <div className="min-w-0">
        {label ? (
          <label
            htmlFor={switchId}
            className={cn(
              "block text-sm font-medium text-foreground",
              disabled && "opacity-70",
            )}
          >
            {label}
          </label>
        ) : null}
        {description ? (
          <p id={describedById} className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {control}
    </div>
  );
});

Switch.displayName = "Switch";


