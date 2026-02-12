"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaSize = "sm" | "md" | "lg";

export type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
> & {
  /** Optional label displayed above the textarea. */
  label?: string;
  /** Helper text displayed below the textarea (ignored if `error` is set). */
  helperText?: string;
  /** Error message. When set, textarea shows error styling and announces with aria-describedby. */
  error?: string;
  /** Size preset for padding/typography. */
  size?: TextareaSize;
  /** Additional className for the outer container. */
  containerClassName?: string;
  /** Additional className for the label. */
  labelClassName?: string;
};

/**
 * Accessible textarea with label + helper/error text and size variants.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      containerClassName,
      labelClassName,
      label,
      helperText,
      error,
      size = "md",
      id,
      disabled,
      ...props
    },
    ref,
  ) => {
    const reactId = React.useId();
    const textareaId = id ?? `textarea-${reactId}`;
    const describedById = `${textareaId}-desc`;
    const showDescription = Boolean(error || helperText);

    return (
      <div className={cn("w-full", containerClassName)}>
        {label ? (
          <label
            htmlFor={textareaId}
            className={cn(
              "mb-2 block text-sm font-medium text-foreground",
              disabled && "opacity-70",
              labelClassName,
            )}
          >
            {label}
          </label>
        ) : null}

        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={showDescription ? describedById : undefined}
          className={cn(
            "min-h-28 w-full resize-y rounded-lg border border-input/80 bg-card text-foreground shadow-inset transition-colors",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
            "disabled:cursor-not-allowed disabled:opacity-60",
            error && "border-error focus-visible:ring-error",
            size === "sm" && "px-3 py-2 text-sm",
            size === "md" && "px-3.5 py-2.5 text-sm",
            size === "lg" && "px-4 py-3 text-base",
            className,
          )}
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
  },
);

Textarea.displayName = "Textarea";


