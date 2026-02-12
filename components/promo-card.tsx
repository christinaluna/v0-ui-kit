import * as React from "react";
import Link from "next/link";

import { buttonStyles, type ButtonVariant } from "@/components/ui/button.styles";
import { cn } from "@/lib/utils";

export type PromoCardTone =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "success"
  | "warning"
  | "error"
  | "info";

export type PromoCardCta = {
  label: string;
  href: string;
  variant?: ButtonVariant;
};

export type PromoCardProps = React.HTMLAttributes<HTMLElement> & {
  /** Card title. */
  title: string;
  /** Supporting text under the title. */
  description?: string;
  /** Optional small label shown above the title. */
  eyebrow?: string;
  /**
   * Visual tone (used for accent stripe + eyebrow pill).
   * Matches the kit’s token palette (primary/secondary/accent/semantic).
   */
  tone?: PromoCardTone;
  /** Optional primary call-to-action. */
  primaryCta?: PromoCardCta;
  /** Optional secondary call-to-action. */
  secondaryCta?: PromoCardCta;
};

const toneAccent: Record<
  PromoCardTone,
  {
    stripe: string;
    glow: string;
    pill: string;
    pillText: string;
  }
> = {
  primary: {
    stripe: "bg-primary",
    glow: "shadow-[0_0_40px_oklch(var(--primary)/0.30)]",
    pill: "bg-primary/18",
    pillText: "text-primary",
  },
  secondary: {
    stripe: "bg-secondary",
    glow: "shadow-[0_0_40px_oklch(var(--secondary)/0.28)]",
    pill: "bg-secondary/18",
    pillText: "text-secondary",
  },
  accent: {
    stripe: "bg-accent",
    glow: "shadow-[0_0_40px_oklch(var(--accent)/0.28)]",
    pill: "bg-accent/18",
    pillText: "text-accent",
  },
  neutral: {
    stripe: "bg-neutral-500",
    glow: "shadow-[0_0_40px_oklch(var(--neutral-500)/0.22)]",
    pill: "bg-muted/70",
    pillText: "text-foreground",
  },
  success: {
    stripe: "bg-success",
    glow: "shadow-[0_0_40px_oklch(var(--success)/0.24)]",
    pill: "bg-success/18",
    pillText: "text-success",
  },
  warning: {
    stripe: "bg-warning",
    glow: "shadow-[0_0_40px_oklch(var(--warning)/0.22)]",
    pill: "bg-warning/18",
    pillText: "text-warning",
  },
  error: {
    stripe: "bg-error",
    glow: "shadow-[0_0_40px_oklch(var(--error)/0.24)]",
    pill: "bg-error/18",
    pillText: "text-error",
  },
  info: {
    stripe: "bg-info",
    glow: "shadow-[0_0_40px_oklch(var(--info)/0.22)]",
    pill: "bg-info/18",
    pillText: "text-info",
  },
};

/**
 * Full-width promotional card with a solid background.
 * Designed to drop into landing pages as a high-emphasis callout.
 */
export function PromoCard({
  className,
  title,
  description,
  eyebrow,
  tone = "primary",
  primaryCta,
  secondaryCta,
  ...props
}: PromoCardProps) {
  const t = toneAccent[tone];

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden rounded-3xl border border-border/60 bg-card p-6 text-card-foreground shadow-card sm:p-8",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-0 bg-linear-to-br from-muted/40 via-card to-card")}
      />
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-y-0 left-0 w-1.5", t.stripe, t.glow)}
      />

      <div className="relative">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-2.5 py-1 shadow-inset">
              <span className={cn("text-xs font-semibold uppercase tracking-wide", t.pillText)}>
                {eyebrow}
              </span>
            </div>
          ) : null}
          <h2 className="mt-2 font-display text-h4">{title}</h2>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
          ) : null}
        </div>

        {(primaryCta || secondaryCta) ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className={cn(
                  buttonStyles({
                    variant: secondaryCta.variant ?? "outline",
                    size: "lg",
                  }),
                  "border-border/70 bg-card text-foreground shadow-inset hover:bg-muted/60",
                )}
              >
                {secondaryCta.label}
              </Link>
            ) : null}
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className={cn(
                  buttonStyles({
                    variant: primaryCta.variant ?? "primary",
                    size: "lg",
                  }),
                  // Nudge primary CTA to match the promo tone if desired
                  tone === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/95",
                  tone === "accent" && "bg-accent text-accent-foreground hover:bg-accent/95",
                )}
              >
                {primaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
      </div>
    </section>
  );
}


