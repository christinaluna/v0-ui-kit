import Link from "next/link";

import { Hero } from "@/components/hero";
import { PromoCard } from "@/components/promo-card";
import { buttonStyles } from "@/components/ui/button.styles";
import {
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "@/components/ui";

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-h3">{title}</h2>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        <Link
          href={`#${id}`}
          className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline"
        >
          #{id}
        </Link>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function ColorRow({
  name,
  token,
}: {
  name: string;
  token: "primary" | "secondary" | "accent" | "neutral";
}) {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
  const bgByToken = {
    primary: {
      50: "bg-primary-50",
      100: "bg-primary-100",
      200: "bg-primary-200",
      300: "bg-primary-300",
      400: "bg-primary-400",
      500: "bg-primary-500",
      600: "bg-primary-600",
      700: "bg-primary-700",
      800: "bg-primary-800",
      900: "bg-primary-900",
    },
    secondary: {
      50: "bg-secondary-50",
      100: "bg-secondary-100",
      200: "bg-secondary-200",
      300: "bg-secondary-300",
      400: "bg-secondary-400",
      500: "bg-secondary-500",
      600: "bg-secondary-600",
      700: "bg-secondary-700",
      800: "bg-secondary-800",
      900: "bg-secondary-900",
    },
    accent: {
      50: "bg-accent-50",
      100: "bg-accent-100",
      200: "bg-accent-200",
      300: "bg-accent-300",
      400: "bg-accent-400",
      500: "bg-accent-500",
      600: "bg-accent-600",
      700: "bg-accent-700",
      800: "bg-accent-800",
      900: "bg-accent-900",
    },
    neutral: {
      50: "bg-neutral-50",
      100: "bg-neutral-100",
      200: "bg-neutral-200",
      300: "bg-neutral-300",
      400: "bg-neutral-400",
      500: "bg-neutral-500",
      600: "bg-neutral-600",
      700: "bg-neutral-700",
      800: "bg-neutral-800",
      900: "bg-neutral-900",
    },
  } as const;
  return (
    <div className="rounded-xl border border-border/70 p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">50 → 900</p>
      </div>
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
        {shades.map((s) => (
          <div key={s} className="flex flex-col gap-1">
            <div
              className={`h-10 w-full rounded-md border border-border/40 ${bgByToken[token][s]}`}
              aria-label={`${name} ${s}`}
              title={`${token}-${s}`}
            />
            <p className="text-[11px] text-muted-foreground">{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Hero
        variant="split"
        headline="A modern UI kit for v0 + Next.js"
        subheadline="Tokens-first design (CSS variables), Tailwind v4 utilities, and accessible React components—built for fast iteration and beautiful defaults."
        primaryCta={{ label: "Explore components", href: "/#buttons" }}
        secondaryCta={{ label: "See colors", href: "/#colors", variant: "outline" }}
        imageSrc="/hero.png"
        imageAlt="Preview of the v0 UI Kit layouts"
      />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <section className="py-6 sm:py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/template"
              className="group rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-colors hover:bg-muted/40"
            >
              <p className="text-xs font-medium text-muted-foreground">Start here</p>
              <p className="mt-2 font-display text-h5">Templates</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Landing, dashboard, and product page starters.
              </p>
              <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Browse templates →
              </p>
            </Link>

            <Link
              href="/kitchen-sink"
              className="group rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-colors hover:bg-muted/40"
            >
              <p className="text-xs font-medium text-muted-foreground">Explore</p>
              <p className="mt-2 font-display text-h5">Kitchen sink</p>
              <p className="mt-2 text-sm text-muted-foreground">
                A comprehensive component demo page.
              </p>
              <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Open kitchen sink →
              </p>
            </Link>

            <div className="rounded-2xl border border-border/70 bg-linear-to-br from-primary-50/50 via-background to-accent-50/50 p-6 shadow-soft">
              <p className="text-xs font-medium text-muted-foreground">How to theme</p>
              <p className="mt-2 font-display text-h5">Edit tokens</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Update CSS variables in <code className="font-mono">app/globals.css</code> and every component updates automatically.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Tip: add <code className="font-mono">.dark</code> to preview dark mode.
              </p>
            </div>
          </div>
        </section>

        <Section
          id="typography"
          title="Typography"
          description="Display font for headings, Inter for body, JetBrains Mono for code. Tailwind fontSize presets: h1–h6, body, small, tiny."
        >
          <div className="grid gap-6 rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Headings</p>
              <div className="mt-4 grid gap-2">
                <p className="font-display text-h1">Heading 1</p>
                <p className="font-display text-h2">Heading 2</p>
                <p className="font-display text-h3">Heading 3</p>
                <p className="font-display text-h4">Heading 4</p>
                <p className="font-display text-h5">Heading 5</p>
                <p className="font-display text-h6">Heading 6</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">Body</p>
              <p className="mt-3 text-body text-muted-foreground">
                This is body text. Build consistent rhythm using tokens and
                responsive primitives. Inline code{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.95em] text-foreground">
                  cn(...)
                </code>{" "}
                uses the mono font.
              </p>
              <p className="mt-3 text-small text-muted-foreground">
                Small text for helper copy and metadata.
              </p>
              <p className="mt-2 text-tiny text-muted-foreground">
                Tiny text for captions.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="colors"
          title="Color system"
          description="Primary, secondary, accent, neutral scales (50–900) + semantic colors. All colors are CSS variables with a light and dark token set."
        >
          <div className="grid gap-4">
            <ColorRow name="Primary" token="primary" />
            <ColorRow name="Secondary" token="secondary" />
            <ColorRow name="Accent" token="accent" />
            <ColorRow name="Neutral" token="neutral" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 p-4">
                <p className="text-sm font-medium">Semantic</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { name: "Success", className: "bg-success text-success-foreground" },
                    { name: "Warning", className: "bg-warning text-warning-foreground" },
                    { name: "Error", className: "bg-error text-error-foreground" },
                    { name: "Info", className: "bg-info text-info-foreground" },
                  ].map((x) => (
                    <div
                      key={x.name}
                      className={`rounded-lg border border-border/50 p-4 ${x.className}`}
                    >
                      <p className="text-sm font-semibold">{x.name}</p>
                      <p className="mt-1 text-xs opacity-90">Light / Default / Dark variants in tokens</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border/70 p-4">
                <p className="text-sm font-medium">Light + Dark support</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Dark mode is driven by the <code className="font-mono">.dark</code>{" "}
                  class. The preview below scopes dark tokens to a single panel.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/70 bg-background p-4">
                    <p className="text-xs font-medium text-muted-foreground">Light</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button size="sm">Button</Button>
                      <Button size="sm" variant="outline">
                        Outline
                      </Button>
                    </div>
                  </div>
                  <div className="dark rounded-xl border border-border/70 bg-background p-4">
                    <p className="text-xs font-medium text-muted-foreground">Dark</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button size="sm">Button</Button>
                      <Button size="sm" variant="outline">
                        Outline
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="buttons"
          title="Buttons"
          description="Variants: primary, secondary, outline, ghost, link, destructive. Sizes: sm–xl. Supports loading + icons."
        >
          <div className="grid gap-6 rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
            <div className="grid gap-3">
              <p className="text-xs font-medium text-muted-foreground">Variants</p>
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            <div className="grid gap-3">
              <p className="text-xs font-medium text-muted-foreground">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">XL</Button>
              </div>
            </div>

            <div className="grid gap-3">
              <p className="text-xs font-medium text-muted-foreground">States</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button
                  leadingIcon={
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  }
                >
                  Leading icon
                </Button>
                <Button
                  trailingIcon={
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                >
                  Trailing icon
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="inputs"
          title="Inputs"
          description="Label, helper/error text, prefix/suffix icons, and size/variant presets."
        >
          <div className="grid gap-6 rounded-2xl border border-border/70 bg-card p-6 shadow-soft sm:grid-cols-2">
            <Input
              label="Email"
              placeholder="you@company.com"
              helperText="We’ll never share your email."
              prefix={
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
                  <path
                    d="M4 6h16v12H4V6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            <Input
              label="Search"
              placeholder="Search components…"
              size="lg"
              variant="filled"
              suffix={
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
                  <path
                    d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16.5 16.5 21 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />

            <Input
              label="Username"
              placeholder="username123"
              size="sm"
              helperText="3–24 characters."
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              error="Password must be at least 8 characters."
            />
          </div>
        </Section>

        <Section
          id="cards"
          title="Cards"
          description="Container + header/body/footer building blocks. Variants: default, bordered, elevated."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-3">
              <PromoCard
                tone="primary"
                eyebrow="Promo"
                title="Full-width promo card"
                description="A solid-background callout that uses the palette tokens. Great for announcements, upgrades, or high-emphasis CTAs."
                  primaryCta={{ label: "Upgrade", href: "/#buttons" }}
                  secondaryCta={{ label: "Browse templates", href: "/template", variant: "outline" }}
              />
            </div>
            {[
              { title: "Default", variant: "default" as const },
              { title: "Bordered", variant: "bordered" as const },
              { title: "Elevated", variant: "elevated" as const },
            ].map((x) => (
              <Card key={x.title} variant={x.variant}>
                <CardHeader>
                  <CardTitle>{x.title} card</CardTitle>
                  <CardDescription>
                    A clean surface for grouping related UI.
                  </CardDescription>
                </CardHeader>
                <CardBody>
                  <div className="flex items-center justify-between rounded-lg border border-border/70 bg-background p-4">
                    <div>
                      <p className="text-sm font-medium">Pro plan</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        $24 / month
                      </p>
                    </div>
                    <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success">
                      Active
                    </span>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    Details
                  </Button>
                  <Button size="sm">Manage</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        <div className="py-10">
          <div className="rounded-2xl border border-border/70 bg-linear-to-br from-primary-50/60 via-background to-accent-50/60 p-8 shadow-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-h5">Ready to use in v0</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Import components from <code className="font-mono">components/ui</code> and start composing.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="#buttons" className={buttonStyles({ variant: "primary", size: "lg" })}>
                  Browse UI
                </Link>
                <Link href="#colors" className={buttonStyles({ variant: "outline", size: "lg" })}>
                  Tokens
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
