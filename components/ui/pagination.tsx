import * as React from "react";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/button.styles";
import { cn } from "@/lib/utils";

export type PaginationProps = React.HTMLAttributes<HTMLElement> & {
  /** Current page (1-indexed). */
  page: number;
  /** Total pages. */
  totalPages: number;
  /** Build a link for a given page number. */
  hrefForPage: (page: number) => string;
};

/**
 * Accessible pagination with Prev/Next and a compact page list.
 */
export function Pagination({
  className,
  page,
  totalPages,
  hrefForPage,
  ...props
}: PaginationProps) {
  const safePage = Math.min(Math.max(page, 1), totalPages);

  const pages = getPages(safePage, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-between gap-3", className)}
      {...props}
    >
      <Link
        href={hrefForPage(Math.max(1, safePage - 1))}
        aria-disabled={safePage === 1}
        className={cn(
          buttonStyles({ variant: "outline", size: "sm" }),
          safePage === 1 && "pointer-events-none opacity-50",
        )}
      >
        Prev
      </Link>

      <ul className="flex items-center gap-1">
        {pages.map((p, idx) => {
          if (p === "…") {
            return (
              <li key={`ellipsis-${idx}`} className="px-2 text-sm text-muted-foreground">
                …
              </li>
            );
          }

          const isCurrent = p === safePage;
          return (
            <li key={p}>
              <Link
                href={hrefForPage(p)}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  buttonStyles({
                    variant: isCurrent ? "primary" : "ghost",
                    size: "sm",
                    className: "h-9 w-9 px-0",
                  }),
                )}
              >
                {p}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href={hrefForPage(Math.min(totalPages, safePage + 1))}
        aria-disabled={safePage === totalPages}
        className={cn(
          buttonStyles({ variant: "outline", size: "sm" }),
          safePage === totalPages && "pointer-events-none opacity-50",
        )}
      >
        Next
      </Link>
    </nav>
  );
}

function getPages(page: number, totalPages: number): Array<number | "…"> {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

  const pages: Array<number | "…"> = [1];
  const left = Math.max(2, page - 1);
  const right = Math.min(totalPages - 1, page + 1);

  if (left > 2) pages.push("…");
  for (let p = left; p <= right; p++) pages.push(p);
  if (right < totalPages - 1) pages.push("…");

  pages.push(totalPages);
  return pages;
}


