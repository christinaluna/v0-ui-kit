import Link from "next/link";

import { Sidebar } from "@/components/sidebar";
import { buttonStyles } from "@/components/ui/button.styles";
import {
  Avatar,
  Badge,
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  Grid,
  GridItem,
  Icon,
  Progress,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

/* ------------------------------------------------------------------ */
/*  Stat Card                                                          */
/* ------------------------------------------------------------------ */

function BalanceCard({
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
        <p className="mt-2 text-sm text-muted-foreground">Updated just now</p>
      </CardBody>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Quick Action                                                       */
/* ------------------------------------------------------------------ */

function QuickAction({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex flex-1 flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card p-5 shadow-inset transition-colors hover:bg-muted/60"
    >
      <span className="inline-grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
        {icon}
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Transaction row                                                    */
/* ------------------------------------------------------------------ */

type Transaction = {
  id: string;
  name: string;
  category: string;
  amount: number;
  date: string;
  initials: string;
};

const transactions: Transaction[] = [
  { id: "1", name: "Apple Store", category: "Shopping", amount: -129.99, date: "Feb 11", initials: "AP" },
  { id: "2", name: "Salary Deposit", category: "Income", amount: 4850.0, date: "Feb 10", initials: "SD" },
  { id: "3", name: "Netflix", category: "Entertainment", amount: -15.99, date: "Feb 9", initials: "NF" },
  { id: "4", name: "Whole Foods", category: "Groceries", amount: -87.32, date: "Feb 8", initials: "WF" },
  { id: "5", name: "Freelance Payment", category: "Income", amount: 1200.0, date: "Feb 7", initials: "FP" },
  { id: "6", name: "Electric Bill", category: "Utilities", amount: -142.5, date: "Feb 6", initials: "EB" },
];

function TransactionRow({ tx }: { tx: Transaction }) {
  const isPositive = tx.amount > 0;
  return (
    <div className="flex items-center gap-3">
      <Avatar size="sm" fallback={tx.initials} />
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{tx.name}</p>
        <p className="text-xs text-muted-foreground">{tx.category}</p>
      </div>
      <div className="text-right">
        <p className={`text-sm font-semibold ${isPositive ? "text-success" : "text-foreground"}`}>
          {isPositive ? "+" : ""}
          {"$"}
          {Math.abs(tx.amount).toFixed(2)}
        </p>
        <p className="text-xs text-muted-foreground">{tx.date}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SVG icons for quick actions                                        */
/* ------------------------------------------------------------------ */

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <path d="M22 2 11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m22 2-7 20-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReceiveIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BillIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <path d="M17 1l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 23l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TemplateBankingPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Container className="py-10">
        <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <Sidebar
              header="Banking"
              items={[
                { label: "Overview", href: "/template/banking" },
                { label: "Accounts", href: "/template/banking#accounts" },
                { label: "Transactions", href: "/template/banking#transactions" },
                { label: "Cards", href: "/template/banking#cards" },
                { label: "Payments", href: "/template/banking#payments" },
                { label: "Settings", href: "/template/banking#settings" },
              ]}
            />
          </div>

          {/* Main content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="font-display text-h2 text-balance">Welcome back, Alex</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Here{"'"}s what{"'"}s happening with your finances today.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/template" className={buttonStyles({ variant: "outline", size: "sm" })}>
                  Back
                </Link>
                <Link href="#transactions" className={buttonStyles({ variant: "primary", size: "sm" })}>
                  View transactions
                </Link>
              </div>
            </div>

            {/* Balance cards */}
            <section id="accounts" className="scroll-mt-24">
              <Grid cols={12} gap="md">
                <GridItem span={12} className="lg:col-span-4">
                  <BalanceCard label="Total balance" value="$48,260.50" change="+2.4%" tone="primary" />
                </GridItem>
                <GridItem span={12} className="lg:col-span-4">
                  <BalanceCard label="Checking" value="$12,840.25" change="+$1,200" tone="secondary" />
                </GridItem>
                <GridItem span={12} className="lg:col-span-4">
                  <BalanceCard label="Savings" value="$35,420.25" change="+0.8%" tone="accent" />
                </GridItem>
              </Grid>
            </section>

            {/* Quick actions */}
            <section id="payments" className="scroll-mt-24">
              <div className="flex flex-wrap gap-3">
                <QuickAction label="Send" icon={<SendIcon />} />
                <QuickAction label="Request" icon={<ReceiveIcon />} />
                <QuickAction label="Pay bills" icon={<BillIcon />} />
                <QuickAction label="Transfer" icon={<TransferIcon />} />
              </div>
            </section>

            {/* Spending analytics */}
            <section>
              <Card variant="elevated">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <CardTitle>Spending analytics</CardTitle>
                      <CardDescription>Track where your money goes each month.</CardDescription>
                    </div>
                    <Badge variant="outline">Last 30 days</Badge>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-border/60 bg-muted/40 p-5 shadow-inset">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Monthly spending</p>
                        <Icon name="arrow-right" />
                      </div>
                      <div className="mt-4 h-40 rounded-xl bg-card/40" />
                      <p className="mt-3 text-xs text-muted-foreground">
                        Replace with your chart library of choice.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-muted/40 p-5 shadow-inset">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Income vs Expenses</p>
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

            {/* Transactions */}
            <section id="transactions" className="scroll-mt-24">
              <Card variant="elevated">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle>Recent transactions</CardTitle>
                    <Badge variant="outline">View all</Badge>
                  </div>
                </CardHeader>
                <CardBody>
                  <Tabs defaultValue="all">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="income">Income</TabsTrigger>
                      <TabsTrigger value="expenses">Expenses</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                      <div className="space-y-1">
                        {transactions.map((tx, i) => (
                          <div key={tx.id}>
                            <TransactionRow tx={tx} />
                            {i < transactions.length - 1 && <Separator className="my-3" />}
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="income">
                      <div className="space-y-1">
                        {transactions
                          .filter((tx) => tx.amount > 0)
                          .map((tx, i, arr) => (
                            <div key={tx.id}>
                              <TransactionRow tx={tx} />
                              {i < arr.length - 1 && <Separator className="my-3" />}
                            </div>
                          ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="expenses">
                      <div className="space-y-1">
                        {transactions
                          .filter((tx) => tx.amount < 0)
                          .map((tx, i, arr) => (
                            <div key={tx.id}>
                              <TransactionRow tx={tx} />
                              {i < arr.length - 1 && <Separator className="my-3" />}
                            </div>
                          ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardBody>
              </Card>
            </section>

            {/* Cards & credit */}
            <section id="cards" className="scroll-mt-24">
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Cards</CardTitle>
                  <CardDescription>Manage your payment cards and credit.</CardDescription>
                </CardHeader>
                <CardBody>
                  <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
                    {/* Credit card visual */}
                    <div className="relative overflow-hidden rounded-3xl bg-foreground p-6 text-background shadow-card">
                      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-primary/20" aria-hidden="true" />
                      <div className="absolute -bottom-8 -left-8 size-32 rounded-full bg-primary/10" aria-hidden="true" />
                      <div className="relative flex h-full flex-col justify-between gap-8">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold uppercase tracking-widest opacity-70">Platinum Card</p>
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-8 opacity-60">
                            <circle cx="9" cy="12" r="7" fill="currentColor" opacity="0.6" />
                            <circle cx="15" cy="12" r="7" fill="currentColor" opacity="0.4" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-mono text-lg tracking-[0.25em]">
                            {"****  ****  ****  4821"}
                          </p>
                          <div className="mt-4 flex items-center gap-6 text-xs opacity-70">
                            <div>
                              <p className="uppercase">Card holder</p>
                              <p className="mt-0.5 font-medium text-background">Alex Johnson</p>
                            </div>
                            <div>
                              <p className="uppercase">Expires</p>
                              <p className="mt-0.5 font-medium text-background">09/28</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Account summary */}
                    <div className="rounded-2xl border border-border/60 bg-muted/40 p-5 shadow-inset">
                      <p className="text-sm font-medium">Credit utilization</p>
                      <p className="mt-1 text-sm text-muted-foreground">$3,420 of $10,000</p>
                      <Progress value={34} className="mt-4" />
                      <Separator className="my-5" />
                      <div className="space-y-3 text-sm">
                        {[
                          { label: "Available credit", value: "$6,580" },
                          { label: "Statement balance", value: "$2,180" },
                          { label: "Minimum due", value: "$45.00" },
                        ].map((r) => (
                          <div key={r.label} className="flex items-center justify-between">
                            <span className="text-muted-foreground">{r.label}</span>
                            <span className="font-medium">{r.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5">
                        <Link
                          href="/template/banking#payments"
                          className={buttonStyles({ variant: "primary", size: "md", className: "w-full" })}
                        >
                          Make a payment
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </section>

            {/* Settings stub */}
            <section id="settings" className="scroll-mt-24">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Manage notifications, security, and account preferences.</CardDescription>
                </CardHeader>
                <CardBody className="flex items-center justify-between gap-3">
                  <p className="text-sm text-muted-foreground">
                    Configure alerts, two-factor authentication, and linked accounts.
                  </p>
                  <Link href="/template" className={buttonStyles({ variant: "outline", size: "sm" })}>
                    Configure
                  </Link>
                </CardBody>
              </Card>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
