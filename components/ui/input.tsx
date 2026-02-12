"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "filled";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix"
> & {
  /** Optional label displayed above the input. */
  label?: string;
  /** Helper text displayed below the input (ignored if `error` is set). */
  helperText?: string;
  /** Error message. When set, input shows error styling and announces with aria-describedby. */
  error?: string;
  /** Optional prefix icon/content shown inside the input on the left. */
  prefix?: React.ReactNode;
  /** Optional suffix icon/content shown inside the input on the right. */
  suffix?: React.ReactNode;
  /** Size preset for padding/height/typography. */
  size?: InputSize;
  /** Visual style variant. */
  variant?: InputVariant;
  /** Additional className for the outer container. */
  containerClassName?: string;
  /** Additional className for the label. */
  labelClassName?: string;
};

/**
 * Accessible text input with label, helper/error text, icons, and size variants.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      labelClassName,
      label,
      helperText,
      error,
      prefix,
      suffix,
      size = "md",
      variant = "default",
      id,
      disabled,
      ...props
    },
    ref,
  ) => {
    const reactId = React.useId();
    const inputId = id ?? `input-${reactId}`;
    const describedById = `${inputId}-desc`;
    const showDescription = Boolean(error || helperText);

    return (
      <div className={cn("w-full", containerClassName)}>
        {label ? (
          <label
            htmlFor={inputId}
            className={cn(
              "mb-2 block text-sm font-medium text-foreground",
              disabled && "opacity-70",
              labelClassName,
            )}
          >
            {label}
          </label>
        ) : null}

        <div className="relative">
          {prefix ? (
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground",
                size === "sm" && "pl-2.5",
                size === "lg" && "pl-3.5",
              )}
              aria-hidden="true"
            >
              {prefix}
            </div>
          ) : null}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={error ? true : undefined}
            aria-describedby={showDescription ? describedById : undefined}
            className={cn(
              "w-full rounded-lg border bg-card text-foreground shadow-inset transition-colors",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
              "disabled:cursor-not-allowed disabled:opacity-60",
              variant === "default" && "border-input/80",
              variant === "filled" && "border-border/60 bg-muted",
              error && "border-error focus-visible:ring-error",
              size === "sm" && "h-9 px-3 text-sm",
              size === "md" && "h-10 px-3.5 text-sm",
              size === "lg" && "h-11 px-4 text-base",
              prefix && (size === "sm" ? "pl-9" : size === "lg" ? "pl-11" : "pl-10"),
              suffix && (size === "sm" ? "pr-9" : size === "lg" ? "pr-11" : "pr-10"),
              className,
            )}
            {...props}
          />

          {suffix ? (
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground",
                size === "sm" && "pr-2.5",
                size === "lg" && "pr-3.5",
              )}
              aria-hidden="true"
            >
              {suffix}
            </div>
          ) : null}
        </div>

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
  },
);

Input.displayName = "Input";


