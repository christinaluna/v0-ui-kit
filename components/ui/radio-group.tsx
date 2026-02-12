"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

export type RadioGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> & {
  /** Optional label displayed above the radio group. */
  label?: string;
  /** Helper text displayed below the group. */
  helperText?: string;
  /** Error message displayed below the group. */
  error?: string;
};

export type RadioItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
> & {
  /** Label rendered next to the radio. */
  label: string;
  /** Optional secondary text. */
  description?: string;
};

/**
 * Accessible radio group (Radix) with token-driven styling.
 */
export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, label, helperText, error, id, ...props }, ref) => {
  const reactId = React.useId();
  const groupId = id ?? `radio-group-${reactId}`;
  const describedById = `${groupId}-desc`;
  const showDescription = Boolean(error || helperText);

  return (
    <div className="w-full">
      {label ? (
        <p className="mb-2 text-sm font-medium text-foreground">{label}</p>
      ) : null}

      <RadioGroupPrimitive.Root
        ref={ref}
        aria-invalid={error ? true : undefined}
        aria-describedby={showDescription ? describedById : undefined}
        className={cn("grid gap-2", className)}
        {...props}
      />

      {showDescription ? (
        <p
          id={describedById}
          className={cn(
            "mt-2 text-sm",
            error ? "text-error" : "text-muted-foreground",
          )}
        >
          {error ?? helperText}
        </p>
      ) : null}
    </div>
  );
});

RadioGroup.displayName = "RadioGroup";

/**
 * Single radio item for use inside `RadioGroup`.
 */
export const RadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ className, label, description, id, disabled, ...props }, ref) => {
  const reactId = React.useId();
  const itemId = id ?? `radio-${reactId}`;

  return (
    <div className="flex items-start gap-3">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={itemId}
        disabled={disabled}
        className={cn(
          "peer mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-input bg-background shadow-sm transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
          "disabled:cursor-not-allowed disabled:opacity-60",
          "data-[state=checked]:border-primary",
          className,
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className="size-2.5 rounded-full bg-primary" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      <div className="min-w-0">
        <label
          htmlFor={itemId}
          className={cn(
            "block text-sm font-medium text-foreground",
            disabled && "opacity-70",
          )}
        >
          {label}
        </label>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  );
});

RadioItem.displayName = "RadioItem";


