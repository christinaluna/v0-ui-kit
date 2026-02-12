"use client";

import * as React from "react";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/button.styles";
import { cn } from "@/lib/utils";

export type SidebarItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export type SidebarProps = React.HTMLAttributes<HTMLElement> & {
  /** Sidebar items. */
  items: SidebarItem[];
  /** Optional header content (logo/title). */
  header?: React.ReactNode;
};

/**
 * Responsive sidebar with a mobile drawer toggle.
 */
export function Sidebar({ className, items, header, ...props }: SidebarProps) {
  const [open, setOpen] = React.useState(false);
  const panelId = React.useId();

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const content = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-border/70 p-4">
        <div className="font-display text-sm font-semibold tracking-tight">
          {header ?? "Navigation"}
        </div>
        <button
          type="button"
          className={cn(
            "md:hidden inline-flex items-center justify-center rounded-lg border border-border/70 bg-card p-2 text-foreground shadow-inset",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
          )}
          aria-label="Close sidebar"
          onClick={() => setOpen(false)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none">
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <nav className="flex-1 overflow-auto p-3" aria-label="Sidebar">
        <ul className="space-y-1">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {it.icon ? <span className="text-foreground/90">{it.icon}</span> : null}
                <span className="truncate">{it.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <aside className={cn("w-full", className)} {...props}>
      <div className="md:hidden">
        <button
          type="button"
          aria-controls={panelId}
          aria-expanded={open}
          className={buttonStyles({ variant: "outline", size: "sm" })}
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      {/* Desktop */}
      <div className="hidden h-[calc(100dvh-1rem)] w-72 rounded-3xl border border-border/60 bg-card shadow-card md:block">
        {content}
      </div>

      {/* Mobile overlay */}
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-neutral-900/40"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            className="absolute left-3 top-3 h-[calc(100dvh-1.5rem)] w-[min(22rem,calc(100%-1.5rem))] overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card animate-slide-up"
          >
            {content}
          </div>
        </div>
      ) : null}
    </aside>
  );
}


