import Link from "next/link";

import { buttonStyles } from "@/components/ui/button.styles";
import {
  Badge,
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

export default function DocsPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">v0 UI Kit</Badge>
              <Badge variant="info">Docs</Badge>
            </div>
            <h1 className="mt-4 font-display text-h2">Documentation</h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              How to use the design tokens, components, and templates in this repo.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/kitchen-sink"
              className={buttonStyles({ variant: "outline", size: "md" })}
            >
              Kitchen sink
            </Link>
            <Link
              href="/#colors"
              className={buttonStyles({ variant: "secondary", size: "md" })}
            >
              Token palette
            </Link>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
          <div className="space-y-6">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Quick start</CardTitle>
                <CardDescription>Where to look first.</CardDescription>
              </CardHeader>
              <CardBody className="space-y-3 text-sm text-muted-foreground">
                <p>
                  - <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-foreground shadow-inset">app/globals.css</code>{" "}
                  defines the token palette (CSS variables).
                </p>
                <p>
                  - <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-foreground shadow-inset">tailwind.config.ts</code>{" "}
                  maps tokens into Tailwind theme colors/shadows.
                </p>
                <p>
                  - <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-foreground shadow-inset">components/ui</code>{" "}
                  contains the reusable UI primitives.
                </p>
                <p>
                  - <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-foreground shadow-inset">/template</code>{" "}
                  contains the landing/dashboard/product starters.
                </p>
              </CardBody>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Theming</CardTitle>
                <CardDescription>Make it yours without fighting the system.</CardDescription>
              </CardHeader>
              <CardBody>
                <Tabs defaultValue="tokens">
                  <TabsList>
                    <TabsTrigger value="tokens">Tokens</TabsTrigger>
                    <TabsTrigger value="dark">Dark mode</TabsTrigger>
                    <TabsTrigger value="shadows">Shadows</TabsTrigger>
                  </TabsList>

                  <TabsContent value="tokens">
                    <p className="text-sm text-muted-foreground">
                      Update palette variables in{" "}
                      <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-foreground shadow-inset">
                        app/globals.css
                      </code>{" "}
                      (e.g. <code className="font-mono">--primary</code>,{" "}
                      <code className="font-mono">--background</code>,{" "}
                      <code className="font-mono">--border</code>) and the whole UI updates.
                    </p>
                  </TabsContent>
                  <TabsContent value="dark">
                    <p className="text-sm text-muted-foreground">
                      Dark mode is driven by the{" "}
                      <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-foreground shadow-inset">
                        .dark
                      </code>{" "}
                      class. The kit currently defaults to dark in{" "}
                      <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-foreground shadow-inset">
                        app/layout.tsx
                      </code>
                      .
                    </p>
                  </TabsContent>
                  <TabsContent value="shadows">
                    <p className="text-sm text-muted-foreground">
                      Shadows are defined in{" "}
                      <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-foreground shadow-inset">
                        tailwind.config.ts
                      </code>{" "}
                      as <code className="font-mono">shadow-soft</code>,{" "}
                      <code className="font-mono">shadow-card</code>, and{" "}
                      <code className="font-mono">shadow-inset</code>.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardBody>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Components</CardTitle>
                <CardDescription>How to import and compose.</CardDescription>
              </CardHeader>
              <CardBody className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Import primitives from{" "}
                  <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-foreground shadow-inset">
                    components/ui
                  </code>
                  .
                </p>
                <p>
                  Use{" "}
                  <code className="rounded-lg bg-muted/60 px-2 py-1 font-mono text-foreground shadow-inset">
                    buttonStyles
                  </code>{" "}
                  to style Next.js links like buttons.
                </p>
                <div className="pt-2">
                  <Link
                    href="/kitchen-sink#forms"
                    className={buttonStyles({ variant: "outline", size: "sm" })}
                  >
                    See form components
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>

          <aside className="space-y-4">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle className="text-base">Links</CardTitle>
                <CardDescription>Jump to key pages.</CardDescription>
              </CardHeader>
              <CardBody className="grid gap-2">
                <Link href="/" className={buttonStyles({ variant: "ghost", size: "md", className: "justify-start" })}>
                  Showcase
                </Link>
                <Link href="/template" className={buttonStyles({ variant: "ghost", size: "md", className: "justify-start" })}>
                  Templates
                </Link>
                <Link href="/kitchen-sink" className={buttonStyles({ variant: "ghost", size: "md", className: "justify-start" })}>
                  Kitchen sink
                </Link>
              </CardBody>
            </Card>

            <div className="rounded-3xl border border-border/60 bg-linear-to-br from-muted/40 via-card to-card p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Tip
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                If something looks off, check tokens first. Most “style bugs” end up being a surface/border token mismatch.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
