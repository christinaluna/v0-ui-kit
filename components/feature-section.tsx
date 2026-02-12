import * as React from "react";

import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export type Feature = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export type FeatureSectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Section heading. */
  title: string;
  /** Optional intro text. */
  description?: string;
  /** Feature list. */
  features: Feature[];
};

/**
 * Marketing feature section (grid of feature cards).
 */
export function FeatureSection({
  className,
  title,
  description,
  features,
  ...props
}: FeatureSectionProps) {
  return (
    <section className={cn("py-12 sm:py-16", className)} {...props}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-h3">{title}</h2>
            {description ? (
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} variant="elevated" className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle>{f.title}</CardTitle>
                    <CardDescription>{f.description}</CardDescription>
                  </div>
                  {f.icon ? (
                    <div className="inline-grid size-10 place-items-center rounded-lg bg-muted text-foreground">
                      {f.icon}
                    </div>
                  ) : null}
                </div>
              </CardHeader>
              <CardBody>
                <div className="rounded-lg border border-border/70 bg-background p-4 text-sm text-muted-foreground">
                  Build sections by composing primitives and tokens.
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


