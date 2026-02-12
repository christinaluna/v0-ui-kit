import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type FooterLink = { label: string; href: string };

export type FooterProps = React.HTMLAttributes<HTMLElement> & {
  /** Footer brand text. */
  brand?: React.ReactNode;
  /** Optional link columns. */
  columns?: Array<{ title: string; links: FooterLink[] }>;
};

/**
 * Responsive footer layout for marketing/product pages.
 */
export function Footer({ className, brand, columns, ...props }: FooterProps) {
  return (
    <footer
      className={cn("border-t border-border/60 bg-background", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="font-display text-lg font-semibold tracking-tight">
              {brand ?? "v0 UI Kit"}
            </div>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Token-driven, accessible components for Next.js + Tailwind.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {(columns ?? defaultColumns).map((col) => (
              <div key={col.title}>
                <p className="text-sm font-medium text-foreground">{col.title}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.links.map((l) => (
                    <li key={`${col.title}-${l.label}-${l.href}`}>
                      <Link href={l.href} className="text-muted-foreground hover:text-foreground">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} v0 UI Kit</p>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="hover:text-foreground">
              Docs
            </Link>
            <Link href="/template" className="hover:text-foreground">
              Templates
            </Link>
            <Link href="/kitchen-sink" className="hover:text-foreground">
              Kitchen sink
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const defaultColumns: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Product",
    links: [
      { label: "Templates", href: "/template" },
      { label: "Kitchen sink", href: "/kitchen-sink" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
    ],
  }
];


