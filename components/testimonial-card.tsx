import * as React from "react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type TestimonialCardProps = React.HTMLAttributes<HTMLDivElement> & {
  quote: string;
  name: string;
  title?: string;
  company?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  /** Optional badge label (e.g. "Customer"). */
  badge?: string;
};

/**
 * Testimonial card for marketing pages.
 */
export function TestimonialCard({
  className,
  quote,
  name,
  title,
  company,
  avatarSrc,
  avatarAlt = "",
  badge,
  ...props
}: TestimonialCardProps) {
  return (
    <Card variant="elevated" className={cn("h-full", className)} {...props}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle>“{quote}”</CardTitle>
            <CardDescription className="mt-3">
              This kit made our UI consistent in a day.
            </CardDescription>
          </div>
          {badge ? <Badge variant="info">{badge}</Badge> : null}
        </div>
      </CardHeader>
      <CardBody>
        <div className="rounded-xl border border-border/70 bg-background p-4 text-sm text-muted-foreground">
          “{quote}”
        </div>
      </CardBody>
      <CardFooter className="justify-start gap-3">
        <Avatar size="md" fallback={name.slice(0, 2).toUpperCase()}>
          {avatarSrc ? <AvatarImage src={avatarSrc} alt={avatarAlt} /> : null}
        </Avatar>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">{name}</p>
          {(title || company) ? (
            <p className="text-sm text-muted-foreground">
              {title ? title : null}
              {title && company ? " • " : null}
              {company ? company : null}
            </p>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
}


