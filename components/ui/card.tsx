import * as React from "react";

import { cn } from "@/lib/utils";

export type CardVariant = "default" | "bordered" | "elevated";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Visual style variant. */
  variant?: CardVariant;
};

/**
 * Card container with optional header/body/footer building blocks.
 */
export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card text-card-foreground",
        variant === "default" && "border border-border/60 shadow-soft",
        variant === "bordered" && "border border-border/70 shadow-inset",
        variant === "elevated" && "shadow-card border border-border/40",
        className,
      )}
      {...props}
    />
  );
}

/** Card header section (typically title/subtitle/actions). */
export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pb-4", className)} {...props} />
  );
}

/** Card body section (main content). */
export function CardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

/** Card footer section (secondary actions / metadata). */
export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 border-t border-border/60 px-6 py-4",
        className,
      )}
      {...props}
    />
  );
}

/** Card title text. */
export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-display text-lg font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

/** Card description/subtitle text. */
export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-1 text-sm text-muted-foreground", className)} {...props} />
  );
}


