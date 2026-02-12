import Link from "next/link";

import { PromoCard } from "@/components/promo-card";
import { buttonStyles } from "@/components/ui/button.styles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Figure,
  Grid,
  GridItem,
  Icon,
  Separator,
} from "@/components/ui";

export default function TemplateProductPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Container className="py-10 sm:py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">New</Badge>
              <Badge variant="outline">In stock</Badge>
            </div>
            <h1 className="mt-4 font-display text-h2">Aurora Headphones</h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              A product page template with premium surfaces, a gallery, specs, and reviews—built on the UI kit tokens.
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-card">
              <p className="text-sm font-medium">Price</p>
              <p className="mt-2 font-display text-3xl font-semibold tracking-tight">
                $279.25 <span className="text-sm font-medium text-muted-foreground">USD</span>
              </p>
              <div className="mt-4 grid gap-2">
                <Link href="/template/product#buy" className={buttonStyles({ variant: "primary", size: "lg" })}>
                  Add to cart
                </Link>
                <Link href="/template/product#details" className={buttonStyles({ variant: "outline", size: "lg" })}>
                  View details
                </Link>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Free returns • 2‑year warranty
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <Grid cols={12} gap="lg" className="items-start">
          <GridItem span={12} className="lg:col-span-7">
            <div className="grid gap-4">
              <Figure
                image={{
                  src: "/product-images/headphones-1.jpg",
                  alt: "Product photo",
                  width: 1200,
                  height: 900,
                  priority: true,
                }}
                caption={
                  <span>
                    Gallery image
                  </span>
                }
              />
              <div className="grid grid-cols-3 gap-3">
                {[42, 43, 44].map((n) => (
                  <Figure
                    key={n}
                    image={{
                      src: `/product-images/headphones-2.jpg`,
                      alt: "",
                      width: 800,
                      height: 600,
                    }}
                  />
                ))}
              </div>
            </div>
          </GridItem>

          <GridItem span={12} className="lg:col-span-5">
            <section id="details" className="scroll-mt-24">
              <Card variant="elevated">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle>Details</CardTitle>
                      <CardDescription>What makes this product great.</CardDescription>
                    </div>
                    <div className="inline-grid size-10 place-items-center rounded-xl bg-muted/60 shadow-inset">
                      <Icon name="info" className="size-5" />
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Active noise cancellation</li>
                    <li>• 30-hour battery</li>
                    <li>• Aluminum chassis, soft-touch pads</li>
                    <li>• USB‑C fast charging</li>
                  </ul>
                </CardBody>
                <CardFooter>
                  <Link href="/template/product#buy" className={buttonStyles({ variant: "primary", size: "sm" })}>
                    Buy now
                  </Link>
                </CardFooter>
              </Card>
            </section>

            <div className="mt-4 grid gap-4">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-base">Specs</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3 text-sm">
                    {[
                      { k: "Weight", v: "242g" },
                      { k: "Bluetooth", v: "5.3" },
                      { k: "Codec", v: "AAC / SBC" },
                      { k: "Charging", v: "USB‑C" },
                    ].map((r) => (
                      <div key={r.k} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{r.k}</span>
                        <span className="font-medium text-foreground">{r.v}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Reviews</CardTitle>
                    <Badge variant="success">4.8</Badge>
                  </div>
                </CardHeader>
                <CardBody className="space-y-4">
                  {[
                    { name: "Taylor", quote: "Comfortable, premium sound. Looks great." },
                    { name: "Morgan", quote: "The token-driven UI makes it feel cohesive." },
                  ].map((r) => (
                    <div key={r.name} className="rounded-2xl border border-border/60 bg-muted/40 p-4 shadow-inset">
                      <p className="text-sm font-semibold">{r.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">“{r.quote}”</p>
                    </div>
                  ))}
                </CardBody>
              </Card>
            </div>
          </GridItem>
        </Grid>

        <div className="py-14" id="buy">
          <PromoCard
            tone="primary"
            eyebrow="Ready to ship"
            title="This is your sticky CTA section"
            description="Drop this near the end of the page for a conversion-focused callout. Uses the kit’s new orange/gold token system."
            primaryCta={{ label: "Add to cart", href: "/template/product#buy" }}
            secondaryCta={{ label: "Back to templates", href: "/template", variant: "outline" }}
          />
        </div>

        <section className="pb-10">
          <h2 className="font-display text-h3">Aurora headphones FAQ</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Common questions about fit, connectivity, and care.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="fit">
                <AccordionTrigger>How do they fit?</AccordionTrigger>
                <AccordionContent>
                  Aurora uses soft over‑ear cushions with a floating headband. They’re tuned for long
                  sessions without hotspots.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="battery">
                <AccordionTrigger>What about battery life?</AccordionTrigger>
                <AccordionContent>
                  Up to 30 hours of playback with ANC on, and around 40 hours with ANC off. A
                  15‑minute charge gives roughly 4 hours of listening.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="compatibility">
                <AccordionTrigger>Are they compatible with my devices?</AccordionTrigger>
                <AccordionContent>
                  Aurora pairs over Bluetooth 5.3 and works with laptops, phones, and tablets. A
                  3.5mm cable is included for wired use.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="box">
                <AccordionTrigger>What’s in the box?</AccordionTrigger>
                <AccordionContent>
                  You’ll get the headphones, a USB‑C charging cable, 3.5mm audio cable, hard‑shell
                  travel case, and quick start guide.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="warranty">
                <AccordionTrigger>Warranty & support</AccordionTrigger>
                <AccordionContent>
                  Aurora includes a 2‑year limited warranty. Open the sticky CTA above to review the
                  plan details and manage upgrades.\n
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care">
                <AccordionTrigger>Care & maintenance</AccordionTrigger>
                <AccordionContent>
                  Wipe with a soft, dry cloth. Avoid harsh cleaners or submerging the cushions. Store
                  in the included case when you’re on the move.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </Container>
    </div>
  );
}
