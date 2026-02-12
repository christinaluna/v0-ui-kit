import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type BreadcrumbItem =
  | {
      label: string;
      href: string;
      current?: false;
    }
  | {
      label: string;
      href?: undefined;
      current: true;
    };

export type BreadcrumbsProps = React.HTMLAttributes<HTMLElement> & {
  /** List of breadcrumb items from root to current page. */
  items: BreadcrumbItem[];
};

/**
 * Accessible breadcrumb navigation.
 */
export function Breadcrumbs({ items, className, ...props }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("w-full", className)} {...props}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const content = item.current ? (
            <span aria-current="page" className="font-medium text-foreground">
              {item.label}
            </span>
          ) : (
            <Link href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          );

          return (
            <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-1">
              {content}
              {!isLast ? (
                <span aria-hidden="true" className="px-1 text-muted-foreground/70">
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}


