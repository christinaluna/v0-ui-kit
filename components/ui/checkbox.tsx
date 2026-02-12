"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

export type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> & {
  /** Optional label text rendered to the right of the checkbox. */
  label?: string;
  /** Helper text rendered under the label. */
  description?: string;
  /** Error message (applies error styling and announces via aria-describedby). */
  error?: string;
};

/**
 * Accessible checkbox built on Radix with token-driven styling.
 */
export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, description, error, id, disabled, ...props }, ref) => {
  const reactId = React.useId();
  const checkboxId = id ?? `checkbox-${reactId}`;
  const describedById = `${checkboxId}-desc`;
  const showDescription = Boolean(error || description);

  const control = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={checkboxId}
      disabled={disabled}
      aria-invalid={error ? true : undefined}
      aria-describedby={showDescription ? describedById : undefined}
      className={cn(
        "peer inline-flex size-5 shrink-0 items-center justify-center rounded-[6px] border border-input bg-background shadow-sm transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-60",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        error && "border-error focus-visible:ring-error",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="inline-flex items-center justify-center">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
          <path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (!label && !description && !error) return control;

  return (
    <div className="flex items-start gap-3">
      {control}
      <div className="min-w-0">
        {label ? (
          <label
            htmlFor={checkboxId}
            className={cn(
              "block text-sm font-medium text-foreground",
              disabled && "opacity-70",
            )}
          >
            {label}
          </label>
        ) : null}
        {showDescription ? (
          <p
            id={describedById}
            className={cn(
              "mt-1 text-sm",
              error ? "text-error" : "text-muted-foreground",
            )}
          >
            {error ?? description}
          </p>
        ) : null}
      </div>
    </div>
  );
});

Checkbox.displayName = "Checkbox";


