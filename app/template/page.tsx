import Link from "next/link";

import { Hero } from "@/components/hero";
import { buttonStyles } from "@/components/ui/button.styles";
import { Card, CardBody, CardDescription, CardHeader, CardTitle, Container, Icon } from "@/components/ui";

const templates = [
  {
    title: "Landing page",
    description: "Hero, feature grid, testimonials, pricing CTA—ready to customize.",
    href: "/template/landing",
    icon: "arrow-right" as const,
  },
  {
    title: "Dashboard",
    description: "Sidebar nav, KPI cards, charts placeholders, tables, activity feed.",
    href: "/template/dashboard",
    icon: "arrow-right" as const,
  },
  {
    title: "Product page",
    description: "Gallery, product details, specs, reviews, and sticky buy CTA.",
    href: "/template/product",
    icon: "arrow-right" as const,
  },
];

export default function TemplateIndexPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Hero
        variant="centered"
        headline="Templates"
        subheadline="Three opinionated starters built on the UI kit—landing, dashboard, and product—so you can ship faster without generic AI-looking UI."
        primaryCta={{ label: "Open landing", href: "/template/landing" }}
        secondaryCta={{ label: "Back to showcase", href: "/", variant: "outline" }}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {templates.map((t) => (
            <Card key={t.href} variant="elevated" className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle>{t.title}</CardTitle>
                    <CardDescription>{t.description}</CardDescription>
                  </div>
                  <div className="inline-grid size-10 place-items-center rounded-xl bg-muted/60 text-foreground shadow-inset">
                    <Icon name={t.icon} className="size-5" />
                  </div>
                </div>
              </CardHeader>
              <CardBody className="flex items-end justify-between gap-3">
                <Link href={t.href} className={buttonStyles({ variant: "outline", size: "md" })}>
                  Open
                </Link>
                <Link href={t.href} className={buttonStyles({ variant: "link", size: "md", className: "px-0" })}>
                  Preview <span aria-hidden="true">→</span>
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
