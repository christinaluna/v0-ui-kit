import * as React from "react";

import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/icon";

export type AlertVariant = "default" | "success" | "warning" | "error" | "info";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Visual intent. */
  variant?: AlertVariant;
  /** Optional title line. */
  title?: string;
  /** Optional icon override. */
  icon?: React.ReactNode;
};

const iconByVariant: Record<AlertVariant, IconName> = {
  default: "info",
  success: "success",
  warning: "warning",
  error: "error",
  info: "info",
};

/**
 * Alert / notification banner.
 */
export function Alert({
  className,
  variant = "default",
  title,
  icon,
  children,
  ...props
}: AlertProps) {
  const styles =
    variant === "success"
      ? "border-success/30 bg-success/12 text-foreground shadow-soft"
      : variant === "warning"
        ? "border-warning/35 bg-warning/12 text-foreground shadow-soft"
        : variant === "error"
          ? "border-error/30 bg-error/12 text-foreground shadow-soft"
          : variant === "info"
            ? "border-info/30 bg-info/12 text-foreground shadow-soft"
            : "border-border/70 bg-card text-card-foreground shadow-soft";

  const iconColor =
    variant === "success"
      ? "text-success"
      : variant === "warning"
        ? "text-warning"
        : variant === "error"
          ? "text-error"
          : variant === "info"
            ? "text-info"
            : "text-muted-foreground";

  return (
    <div
      role="status"
      className={cn(
        "flex gap-3 rounded-2xl border p-4",
        styles,
        className,
      )}
      {...props}
    >
      <div className={cn("mt-0.5 shrink-0", iconColor)}>
        {icon ?? <Icon name={iconByVariant[variant]} className="size-5" />}
      </div>
      <div className="min-w-0">
        {title ? (
          <p className="text-sm font-semibold text-foreground">{title}</p>
        ) : null}
        {children ? (
          <div className={cn("text-sm", title ? "mt-1 text-muted-foreground" : "text-muted-foreground")}>
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}


