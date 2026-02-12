import Link from "next/link";

import { Hero } from "@/components/hero";
import { FeatureSection } from "@/components/feature-section";
import { PromoCard } from "@/components/promo-card";
import { Sidebar } from "@/components/sidebar";
import { TestimonialCard } from "@/components/testimonial-card";
import { buttonStyles } from "@/components/ui/button.styles";
import {
  Alert,
  Avatar,
  AvatarImage,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Chip,
  Container,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter as UIDialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Figure,
  FileUpload,
  Grid,
  GridItem,
  Icon,
  Input,
  Pagination,
  Progress,
  RadioGroup,
  RadioItem,
  Separator,
  Skeleton,
  Spinner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
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
    <section id={id} className="scroll-mt-24 py-10 sm:py-14">
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
          href={`/kitchen-sink#${id}`}
          className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline"
        >
          #{id}
        </Link>
      </div>
      <div className="mt-6">{children}</div>
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
    <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">50 → 900</p>
      </div>
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
        {shades.map((s) => (
          <div key={s} className="flex flex-col gap-1">
            <div
              className={`h-10 w-full rounded-lg border border-border/40 ${bgByToken[token][s]}`}
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

export default function KitchenSinkPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Hero
        variant="background"
        headline="Kitchen sink"
        subheadline="A single page that exercises all UI kit components with the new premium token palette."
      />

      <Container className="py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Kitchen sink", current: true },
          ]}
        />
      </Container>

      <Container className="pb-16">
        <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
          <div className="lg:sticky lg:top-20 lg:self-start">
            <Sidebar
              header="Sections"
              items={[
                { label: "Typography", href: "/kitchen-sink#typography" },
                { label: "Colors", href: "/kitchen-sink#colors" },
                { label: "Buttons", href: "/kitchen-sink#buttons" },
                { label: "Inputs", href: "/kitchen-sink#inputs" },
                { label: "Cards", href: "/kitchen-sink#cards" },
                { label: "Display", href: "/kitchen-sink#display" },
                { label: "Forms", href: "/kitchen-sink#forms" },
                { label: "Feedback", href: "/kitchen-sink#feedback" },
                { label: "Layout", href: "/kitchen-sink#layout" },
                { label: "Marketing", href: "/kitchen-sink#marketing" },
              ]}
            />
          </div>

          <div>
            <Section
              id="typography"
              title="Typography"
              description="Display font for headings, body font for UI, and mono for code. Includes h1–h6, body, small, and tiny presets."
            >
              <Card variant="elevated">
                <CardBody className="grid gap-8 py-3">
                  <div>
                  <CardTitle>Headings</CardTitle>
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
                    <CardTitle>Body</CardTitle>
                    <p className="mt-3 text-body text-muted-foreground">
                      This is body text. Use tokens for consistent rhythm and
                      premium contrast. Inline code{" "}
                      <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-[0.95em] text-foreground shadow-inset">
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
                </CardBody>
              </Card>
            </Section>

            <Section
              id="colors"
              title="Colors"
              description="Primary, secondary, accent, and neutral scales (50–900) plus semantic colors—driven by CSS variables."
            >
              <div className="grid gap-4">
                <ColorRow name="Primary" token="primary" />
                <ColorRow name="Secondary" token="secondary" />
                <ColorRow name="Accent" token="accent" />
                <ColorRow name="Neutral" token="neutral" />

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="elevated">
                    <CardHeader>
                      <CardTitle>Semantic</CardTitle>
                      <CardDescription>Success / Warning / Error / Info</CardDescription>
                    </CardHeader>
                    <CardBody>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: "Success", className: "bg-success text-success-foreground" },
                          { name: "Warning", className: "bg-warning text-warning-foreground" },
                          { name: "Error", className: "bg-error text-error-foreground" },
                          { name: "Info", className: "bg-info text-info-foreground" },
                        ].map((x) => (
                          <div
                            key={x.name}
                            className={`rounded-2xl border border-border/40 p-4 shadow-soft ${x.className}`}
                          >
                            <p className="text-sm font-semibold">{x.name}</p>
                            <p className="mt-1 text-xs opacity-90">Token-driven</p>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>

                  <Card variant="elevated">
                    <CardHeader>
                      <CardTitle>Surfaces</CardTitle>
                      <CardDescription>Background / Card / Muted / Border</CardDescription>
                    </CardHeader>
                    <CardBody>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-border/60 bg-background p-4 shadow-inset">
                          <p className="text-xs text-muted-foreground">background</p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-card">
                          <p className="text-xs text-muted-foreground">card</p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-muted/60 p-4 shadow-inset">
                          <p className="text-xs text-muted-foreground">muted</p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-soft">
                          <p className="text-xs text-muted-foreground">border</p>
                          <div className="mt-2 h-px w-full bg-border/70" />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Section>

            <Section
              id="buttons"
              title="Buttons"
              description="Variants, sizes, states, and icon support."
            >
              <Card variant="elevated">
                <CardBody className="grid gap-8 py-3">
                  <div className="grid gap-3">
                    <CardTitle>Variants</CardTitle>
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
                    <CardTitle>Sizes</CardTitle>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm">Small</Button>
                      <Button size="md">Medium</Button>
                      <Button size="lg">Large</Button>
                      <Button size="xl">XL</Button>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <CardTitle>States</CardTitle>
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
                </CardBody>
              </Card>
            </Section>

            <Section
              id="inputs"
              title="Inputs"
              description="Labels, helper/error text, and prefix/suffix icons."
            >
              <div className="grid gap-4 md:grid-cols-2">
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
                    description="A premium surface promo card with a tone stripe and glow."
                    primaryCta={{ label: "Upgrade", href: "#" }}
                    secondaryCta={{ label: "Browse templates", href: "#", variant: "outline" }}
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
                      <CardDescription>A clean surface for grouping UI.</CardDescription>
                    </CardHeader>
                    <CardBody>
                      <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/30 p-4 shadow-inset">
                        <div>
                          <p className="text-sm font-medium">Pro plan</p>
                          <p className="mt-1 text-sm text-muted-foreground">$24 / month</p>
                        </div>
                        <span className="rounded-full bg-success/18 px-3 py-1 text-xs font-medium text-success shadow-inset">
                          Active
                        </span>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Section>

            <Section
              id="display"
              title="Display"
              description="Badges, chips, avatars, icons, figures, separators."
            >
              <div className="grid gap-4">

                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Badges / Chips / Avatars</CardTitle>
                    <CardDescription>Compact metadata and selection UI.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>Primary</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="error">Error</Badge>
                      <Badge variant="info">Info</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <Chip leadingIcon={<Icon name="check" />}>Design System</Chip>
                      <Chip trailingAction={<span className="text-muted-foreground">×</span>}>
                        Tag
                      </Chip>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <Avatar fallback="JD">
                        <AvatarImage src="https://picsum.photos/80?random=11" alt="Avatar" />
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">Jane Doe</p>
                        <p className="text-sm text-muted-foreground">Product designer</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Figure
                  image={{
                    src: "https://picsum.photos/1200/640?random=12",
                    alt: "Sample media",
                    width: 1200,
                    height: 640,
                  }}
                  caption="Figure: image with a token-styled caption."
                />

                <Card variant="bordered">
                  <CardHeader>
                    <CardTitle>Separator</CardTitle>
                    <CardDescription>Use separators to structure content.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <p className="text-sm text-muted-foreground">Above the separator.</p>
                    <Separator />
                    <p className="text-sm text-muted-foreground">Below the separator.</p>
                  </CardBody>
                </Card>
              </div>
            </Section>

            <Section
              id="forms"
              title="Forms"
              description="Inputs, textarea, checkbox, radio group, switch, file upload."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Text inputs</CardTitle>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <Input label="Email" placeholder="you@company.com" />
                    <Input label="Search" placeholder="Search…" variant="filled" />
                    <Textarea label="Message" placeholder="Write a message…" />
                  </CardBody>
                </Card>

                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Selections</CardTitle>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <Checkbox label="Email me updates" description="Occasional product news." />
                    <RadioGroup label="Plan" defaultValue="pro">
                      <RadioItem value="starter" label="Starter" description="Great for trying it." />
                      <RadioItem value="pro" label="Pro" description="Best for shipping." />
                    </RadioGroup>
                    <Switch label="Enable advanced mode" description="A settings-style switch container." />
                  </CardBody>
                </Card>

                <div className="md:col-span-2">
                  <FileUpload
                    label="Upload files"
                    helperText="Try selecting multiple files."
                    multiple
                  />
                </div>
              </div>
            </Section>

            <Section
              id="feedback"
              title="Feedback"
              description="Alerts, tooltips, dialogs, skeletons, progress and spinners."
            >
              <div className="grid gap-4">
                <Grid cols={12} gap="md">
                  <GridItem span={12} className="md:col-span-6">
                    <Alert variant="success" title="Success">
                      Your changes were saved.
                    </Alert>
                  </GridItem>
                  <GridItem span={12} className="md:col-span-6">
                    <Alert variant="warning" title="Heads up">
                      This is a warning notification.
                    </Alert>
                  </GridItem>
                  <GridItem span={12} className="md:col-span-6">
                    <Alert variant="error" title="Error">
                      Something went wrong.
                    </Alert>
                  </GridItem>
                  <GridItem span={12} className="md:col-span-6">
                    <Alert variant="info" title="Info">
                      Token-driven components are easy to theme.
                    </Alert>
                  </GridItem>
                </Grid>

                <Card variant="elevated" id="dialog">
                  <CardHeader>
                    <CardTitle>Dialog + Tooltip</CardTitle>
                    <CardDescription>Accessible primitives via Radix.</CardDescription>
                  </CardHeader>
                  <CardBody className="flex flex-wrap items-center gap-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className={buttonStyles({ variant: "outline", size: "md" })}
                          >
                            Hover me
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>Tooltip content with tokens.</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <Dialog>
                      <DialogTrigger asChild>
                        <button className={buttonStyles({ variant: "primary", size: "md" })}>
                          Open dialog
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Dialog title</DialogTitle>
                          <DialogDescription>
                            A modal that matches the premium surface language.
                          </DialogDescription>
                        </DialogHeader>
                        <Separator />
                        <div className="mt-4 grid gap-3">
                          <Input label="Name" placeholder="Jane Doe" />
                        </div>
                        <UIDialogFooter>
                          <button
                            type="button"
                            className={buttonStyles({ variant: "outline", size: "md" })}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className={buttonStyles({ variant: "primary", size: "md" })}
                          >
                            Confirm
                          </button>
                        </UIDialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Button variant="secondary" leadingIcon={<Spinner size="sm" />}>
                      Loading…
                    </Button>
                  </CardBody>
                </Card>

                <Card variant="bordered">
                  <CardHeader>
                    <CardTitle>Skeleton + Progress</CardTitle>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <div className="grid gap-2">
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                    <Progress value={62} />
                  </CardBody>
                </Card>
              </div>
            </Section>

            <Section id="layout" title="Layout" description="Tabs, pagination, grid system, container usage.">
              <div className="grid gap-4">
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Tabs</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Tabs defaultValue="one">
                      <TabsList>
                        <TabsTrigger value="one">One</TabsTrigger>
                        <TabsTrigger value="two">Two</TabsTrigger>
                        <TabsTrigger value="three">Three</TabsTrigger>
                      </TabsList>
                      <TabsContent value="one">
                        <p className="text-sm text-muted-foreground">
                          Tab content panel styled with card tokens.
                        </p>
                      </TabsContent>
                      <TabsContent value="two">
                        <p className="text-sm text-muted-foreground">
                          Use Tabs for settings, dashboards, or product info.
                        </p>
                      </TabsContent>
                      <TabsContent value="three">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="info" /> Token-consistent components.
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardBody>
                </Card>

                <Card variant="bordered">
                  <CardHeader>
                    <CardTitle>Pagination</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Pagination page={3} totalPages={12} hrefForPage={(p) => `/kitchen-sink?page=${p}#layout`} />
                  </CardBody>
                </Card>
              </div>
            </Section>

            <Section id="marketing" title="Marketing" description="Hero, feature section, testimonial cards.">
              <div className="grid gap-6">
                <FeatureSection
                  title="Feature section"
                  description="A marketing-friendly section component."
                  features={[
                    {
                      title: "Fast to remix",
                      description: "Copy blocks into v0 and iterate.",
                      icon: <Icon name="arrow-right" className="size-5" />,
                    },
                    {
                      title: "Token-driven",
                      description: "Edit CSS variables and ship a new theme.",
                      icon: <Icon name="check" className="size-5" />,
                    },
                    {
                      title: "Accessible",
                      description: "Keyboard + screen reader friendly.",
                      icon: <Icon name="info" className="size-5" />,
                    },
                  ]}
                />

                <div className="grid gap-4 md:grid-cols-3">
                  <TestimonialCard
                    quote="The defaults are gorgeous."
                    name="A. Customer"
                    title="Founder"
                    company="Acme"
                    badge="Customer"
                  />
                  <TestimonialCard
                    quote="We shipped faster with tokens."
                    name="B. Engineer"
                    title="Staff Engineer"
                    company="Beta"
                    badge="Team"
                  />
                  <TestimonialCard
                    quote="Everything is composable."
                    name="C. Designer"
                    title="Design Lead"
                    company="Gamma"
                    badge="Design"
                  />
                </div>
              </div>
            </Section>
          </div>
        </div>
      </Container>
    </div>
  );
}
