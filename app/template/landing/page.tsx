import { Hero } from "@/components/hero";
import { PromoCard } from "@/components/promo-card";
import { FeatureSection } from "@/components/feature-section";
import { TestimonialCard } from "@/components/testimonial-card";
import { Badge, Card, CardBody, CardHeader, CardTitle, Container, Icon, Separator } from "@/components/ui";

export default function TemplateLandingPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Hero
        variant="split"
        headline="A landing page that you can build in minutes"
        subheadline="Token-driven styling, premium dark surfaces, and opinionated layout rhythm—built to feel like a real product from day one."
        primaryCta={{ label: "Browse components", href: "/#buttons" }}
        secondaryCta={{ label: "See dashboard", href: "/template/dashboard", variant: "outline" }}
        imageSrc="https://picsum.photos/1200/900"
        imageAlt="Landing hero"
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Dark-first", value: "Charcoal surfaces + gold accents", icon: "info" as const },
            { label: "Accessible", value: "Radix primitives + focus rings", icon: "check" as const },
            { label: "Composable", value: "Small building blocks, strong tokens", icon: "arrow-right" as const },
          ].map((s) => (
            <Card key={s.label} variant="bordered">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-base">{s.label}</CardTitle>
                  <div className="inline-grid size-10 place-items-center rounded-xl bg-muted/60 shadow-inset">
                    <Icon name={s.icon} className="size-5" />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-muted-foreground">{s.value}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <Separator className="my-10" />

        <PromoCard
          tone="primary"
          eyebrow="Launch"
          title="Promotion-ready callouts"
          description="Use the PromoCard for upgrades, feature flags, and announcements. CTAs are glass-styled and token-consistent."
          primaryCta={{ label: "View templates", href: "/template" }}
          secondaryCta={{ label: "Open product page", href: "/template/product", variant: "outline" }}
        />
      </Container>

      <FeatureSection
        title="Features"
        description="A clean feature grid that still feels bespoke."
        features={[
          {
            title: "Token-driven palette",
            description: "Gold primary, orange secondary, electric accent—on charcoal surfaces.",
            icon: <Icon name="check" className="size-5" />,
          },
          {
            title: "Premium surfaces",
            description: "Soft outer shadows + subtle inset highlights.",
            icon: <Icon name="info" className="size-5" />,
          },
          {
            title: "Production-ready",
            description: "Typed props, accessible defaults, mobile-first layout.",
            icon: <Icon name="arrow-right" className="size-5" />,
          },
        ]}
      />

      <Container className="pb-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-h3">Testimonials</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Social proof cards with the same surface language as the rest of the kit.
            </p>
          </div>
          <Badge variant="info">Template</Badge>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <TestimonialCard quote="This finally looks like a real product." name="Riley" title="Founder" company="Arc" badge="Customer" />
          <TestimonialCard quote="The tokens make theming effortless." name="Sam" title="Design Lead" company="Forge" badge="Design" />
          <TestimonialCard quote="We shipped the first pass in a day." name="Jordan" title="Staff Engineer" company="Relay" badge="Team" />
        </div>
      </Container>
    </div>
  );
}
