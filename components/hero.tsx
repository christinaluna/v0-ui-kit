import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { buttonStyles, type ButtonVariant } from "@/components/ui/button.styles";
import { cn } from "@/lib/utils";

export type HeroVariant = "centered" | "split" | "background";

export type HeroCta = {
  label: string;
  href: string;
  variant?: ButtonVariant;
};

export type HeroProps = React.HTMLAttributes<HTMLElement> & {
  /** Layout variant. */
  variant?: HeroVariant;
  /** Headline text. */
  headline: string;
  /** Supporting text under headline. */
  subheadline?: string;
  /** Primary CTA. */
  primaryCta?: HeroCta;
  /** Secondary CTA. */
  secondaryCta?: HeroCta;
  /** Optional image for split layout. */
  imageSrc?: string;
  imageAlt?: string;
  /** Optional background image URL (background variant). */
  backgroundImageUrl?: string;
};

/**
 * Hero section with centered/split/background variants and CTA support.
 */
export function Hero({
  className,
  variant = "centered",
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt = "",
  backgroundImageUrl,
  ...props
}: HeroProps) {
  const content = (
    <div
      className={cn(
        "mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-22",
        variant === "split" && "grid items-center gap-10 lg:grid-cols-2",
      )}
    >
      <div className={cn(variant === "split" && "order-2 lg:order-1")}>
        <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
          <span className="inline-block size-1.5 rounded-full bg-success" aria-hidden="true" />
          Production-ready components
        </p>
        <h1 className="mt-5 font-display text-h1 text-foreground">
          {headline}
        </h1>
        {subheadline ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            {subheadline}
          </p>
        ) : null}

        {(primaryCta || secondaryCta) ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className={buttonStyles({
                  variant: primaryCta.variant ?? "primary",
                  size: "lg",
                })}
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className={buttonStyles({
                  variant: secondaryCta.variant ?? "outline",
                  size: "lg",
                })}
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-primary" aria-hidden="true" />
            Tailwind v4 + CSS variables
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-secondary" aria-hidden="true" />
            Accessible by default
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-accent" aria-hidden="true" />
            v0-friendly structure
          </span>
        </div>
      </div>

      {variant === "split" ? (
        <div className={cn("relative order-1 lg:order-2")}>
          <div className="absolute -inset-10 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_30%_20%,oklch(var(--primary-600)/0.25),transparent_55%),radial-gradient(circle_at_70%_30%,oklch(var(--secondary-600)/0.20),transparent_60%),radial-gradient(circle_at_50%_80%,oklch(var(--accent-600)/0.18),transparent_55%)] blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1200}
                height={900}
                className="h-[320px] w-full object-cover sm:h-[360px]"
                priority
              />
            ) : (
              <div className="grid h-[320px] place-items-center bg-muted/60 sm:h-[360px]">
                <div className="max-w-sm text-center">
                  <p className="font-display text-lg font-semibold tracking-tight">
                    Beautiful defaults
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Swap in a product screenshot by passing <code className="font-mono">imageSrc</code>.
                  </p>
                  <div className="mt-4">
                    <Button variant="ghost" size="sm">
                      Explore components
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <div className="p-6">
              <p className="text-sm font-medium text-foreground">
                Designed for clarity and speed.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                A tight token system, clean TS types, and responsive primitives you can ship.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );

  if (variant === "background") {
    return (
      <section
        className={cn(
          "relative overflow-hidden border-b border-border/70",
          className,
        )}
        {...props}
      >
        {backgroundImageUrl ? (
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            aria-hidden="true"
          />
        ) : null}
        <div
          className="absolute inset-0 -z-10 bg-linear-to-b from-background/40 via-background/85 to-background"
          aria-hidden="true"
        />
        {content}
      </section>
    );
  }

  return (
    <section
      className={cn("relative border-b border-border/70", className)}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,oklch(var(--primary-200)/0.45),transparent_55%)]"
        aria-hidden="true"
      />
      {content}
    </section>
  );
}


