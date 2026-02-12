"use client";

import * as React from "react";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/button.styles";
import { cn } from "@/lib/utils";

export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationDropdown = {
  label: string;
  items: NavigationLink[];
};

export type NavigationItem = NavigationLink | NavigationDropdown;

export type NavigationProps = React.HTMLAttributes<HTMLElement> & {
  /** Brand element rendered on the left (logo/wordmark). */
  logo?: React.ReactNode;
  /** Primary navigation links. */
  links: NavigationItem[];
  /** Optional call-to-action content rendered on the right (desktop). */
  cta?: React.ReactNode;
};

/**
 * Responsive navigation bar with desktop links and an accessible mobile menu.
 */
export function Navigation({
  className,
  logo,
  links,
  cta,
  ...props
}: NavigationProps) {
  const [open, setOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const menuId = React.useId();
  const navId = React.useId();
  const navRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenDropdown(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (!openDropdown) return;
      const el = navRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpenDropdown(null);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [openDropdown]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border/60 bg-background/75 backdrop-blur supports-backdrop-filter:bg-background/55",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="group inline-flex items-center gap-2">
            {logo ?? (
              <>
                <span className="inline-grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="none"
                  >
                    <path
                      d="M5 15c3-8 11-10 14-6-3 8-11 10-14 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-display text-base font-semibold tracking-tight text-foreground group-hover:text-foreground/90">
                  v0 UI Kit
                </span>
              </>
            )}
          </Link>
        </div>

        <nav
          ref={(node) => {
            navRef.current = node;
          }}
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {links.map((item, idx) => {
            if ("items" in item) {
              const key = `${item.label}-${idx}`;
              const isOpen = openDropdown === key;
              const dropdownId = `${navId}-dropdown-${idx}`;
              return (
                <div key={key} className="relative">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-2 text-sm font-medium transition-colors",
                      isOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background rounded-lg px-2 py-1",
                    )}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-controls={dropdownId}
                    onClick={() => setOpenDropdown((v) => (v === key ? null : key))}
                  >
                    {item.label}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className={cn("size-4 transition-transform", isOpen && "rotate-180")}
                      fill="none"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isOpen ? (
                    <div
                      id={dropdownId}
                      role="menu"
                      aria-label={item.label}
                      className="absolute left-0 top-full z-50 mt-2 w-60 overflow-hidden rounded-2xl border border-border/60 bg-popover shadow-card"
                    >
                      <div className="p-2">
                        {item.items.map((l) => (
                          <Link
                            key={`${l.label}-${l.href}`}
                            href={l.href}
                            role="menuitem"
                            className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-muted/60 hover:text-foreground"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span>{l.label}</span>
                            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 opacity-70" fill="none">
                              <path
                                d="M9 18l6-6-6-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {cta ?? (
            <Link href="/docs" className={buttonStyles({ variant: "primary", size: "sm" })}>
              Read Docs
            </Link>
          )}
        </div>

        <button
          type="button"
          className={cn(
            "md:hidden inline-flex items-center justify-center rounded-lg border border-border/70 bg-card p-2 text-foreground shadow-inset",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none">
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id={menuId}
        className={cn(
          "md:hidden overflow-hidden border-t border-border/70 bg-background",
          open ? "animate-slide-down" : "hidden",
        )}
      >
        <nav className="mx-auto max-w-6xl px-4 py-4 sm:px-6" aria-label="Mobile">
          <div className="flex flex-col gap-2">
            {links.map((item, idx) => {
              if ("items" in item) {
                return (
                  <div key={`${item.label}-${idx}`} className="rounded-xl border border-border/60 bg-card p-2 shadow-inset">
                    <p className="px-2 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </p>
                    <div className="flex flex-col">
                      {item.items.map((l) => (
                        <Link
                          key={`${l.label}-${l.href}`}
                          href={l.href}
                          className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted/60"
                          onClick={() => setOpen(false)}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 border-t border-border/60 pt-4">
            {cta ?? (
              <Link
                href="/docs"
                className={buttonStyles({ variant: "primary", size: "md", className: "w-full" })}
                onClick={() => setOpen(false)}
              >
                Read Docs
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}


