import Link from "next/link";

import { Sidebar } from "@/components/sidebar";
import { buttonStyles } from "@/components/ui/button.styles";
import {
  Badge,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Grid,
  GridItem,
  Icon,
  Progress,
  Separator,
} from "@/components/ui";

function StatCard({
  label,
  value,
  change,
  tone = "default",
}: {
  label: string;
  value: string;
  change: string;
  tone?: "default" | "primary" | "secondary" | "accent";
}) {
  const badgeVariant =
    tone === "primary"
      ? ("default" as const)
      : tone === "secondary"
        ? ("warning" as const)
        : tone === "accent"
          ? ("info" as const)
          : ("outline" as const);

  return (
    <Card variant="elevated">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-base">{label}</CardTitle>
          <Badge variant={badgeVariant}>{change}</Badge>
        </div>
      </CardHeader>
      <CardBody>
        <p className="font-display text-3xl font-semibold tracking-tight">{value}</p>
        <p className="mt-2 text-sm text-muted-foreground">Compared to last period</p>
      </CardBody>
    </Card>
  );
}

export default function TemplateDashboardPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Container className="py-10">
        <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
          <div className="lg:sticky lg:top-20 lg:self-start">
            <Sidebar
              header="Dashboard"
              items={[
                { label: "Overview", href: "/template/dashboard" },
                { label: "Reports", href: "/template/dashboard#reports" },
                { label: "Billing", href: "/template/dashboard#billing" },
                { label: "Settings", href: "/template/dashboard#settings" },
              ]}
            />
          </div>

          <div className="space-y-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="font-display text-h2">Account overview</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  A dashboard layout using the kit’s surface language and tokens.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/template" className={buttonStyles({ variant: "outline", size: "sm" })}>
                  Back
                </Link>
                <Link href="#reports" className={buttonStyles({ variant: "primary", size: "sm" })}>
                  View reports
                </Link>
              </div>
            </div>

            <Grid cols={12} gap="md">
              <GridItem span={12} className="lg:col-span-4">
                <StatCard label="Revenue" value="$67,950" change="+12%" tone="secondary" />
              </GridItem>
              <GridItem span={12} className="lg:col-span-4">
                <StatCard label="Active users" value="18,420" change="+4.1%" tone="accent" />
              </GridItem>
              <GridItem span={12} className="lg:col-span-4">
                <StatCard label="Conversion" value="3.24%" change="+0.2%" tone="primary" />
              </GridItem>
            </Grid>

            <section id="reports" className="scroll-mt-24">
              <Card variant="elevated">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <CardTitle>Reports</CardTitle>
                      <CardDescription>Chart placeholders styled like a real dashboard.</CardDescription>
                    </div>
                    <Badge variant="outline">Last 30 days</Badge>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-border/60 bg-muted/40 p-5 shadow-inset">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Revenue trend</p>
                        <Icon name="arrow-right" />
                      </div>
                      <div className="mt-4 h-40 rounded-xl bg-card/40" />
                      <p className="mt-3 text-xs text-muted-foreground">
                        Replace with your chart library of choice.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-muted/40 p-5 shadow-inset">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Funnel</p>
                        <Icon name="arrow-right" />
                      </div>
                      <div className="mt-4 h-40 rounded-xl bg-card/40" />
                      <p className="mt-3 text-xs text-muted-foreground">
                        Uses the same surface/border tokens.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </section>

            <section id="billing" className="scroll-mt-24">
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Billing</CardTitle>
                  <CardDescription>Cards + progress + table-like rows.</CardDescription>
                </CardHeader>
                <CardBody>
                  <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
                    <div className="rounded-2xl border border-border/60 bg-muted/40 p-5 shadow-inset">
                      <p className="text-sm font-medium">Usage</p>
                      <p className="mt-2 text-sm text-muted-foreground">72% of monthly limit</p>
                      <Progress value={72} className="mt-4" />
                      <Separator className="my-5" />
                      <div className="space-y-3 text-sm">
                        {[
                          { label: "API calls", value: "1.2M" },
                          { label: "Storage", value: "64 GB" },
                          { label: "Bandwidth", value: "3.4 TB" },
                        ].map((r) => (
                          <div key={r.label} className="flex items-center justify-between">
                            <span className="text-muted-foreground">{r.label}</span>
                            <span className="font-medium">{r.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-card">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Current plan
                      </p>
                      <p className="mt-2 font-display text-2xl font-semibold">Pro</p>
                      <p className="mt-1 text-sm text-muted-foreground">$24 / month</p>
                      <div className="mt-5 grid gap-2">
                        <Link href="/#buttons" className={buttonStyles({ variant: "primary", size: "md" })}>
                          Upgrade
                        </Link>
                        <Link href="/template/product" className={buttonStyles({ variant: "outline", size: "md" })}>
                          View product template
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </section>

            <section id="settings" className="scroll-mt-24">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Use forms components to build settings pages.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Add inputs, switches, and dialogs from the UI kit here.
                  </p>
                  <Link href="/#inputs" className={buttonStyles({ variant: "outline", size: "sm" })}>
                    Inputs
                  </Link>
                </CardFooter>
              </Card>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
