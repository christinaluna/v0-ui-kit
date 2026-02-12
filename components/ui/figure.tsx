import * as React from "react";
import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

export type FigureProps = React.HTMLAttributes<HTMLElement> & {
  /** Next.js Image props. */
  image: ImageProps;
  /** Caption text displayed below the image. */
  caption?: React.ReactNode;
};

/**
 * Image with caption (`<figure>` / `<figcaption>`), styled to match the kit.
 */
export function Figure({ className, image, caption, ...props }: FigureProps) {
  // Ensure `alt` is always present for a11y lint (ImageProps allows it but lint can't infer).
  const safeAlt = "alt" in image ? image.alt : "";
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft",
        className,
      )}
      {...props}
    >
      <div className="relative">
        <Image
          {...image}
          alt={safeAlt as string}
          className={cn("h-auto w-full object-cover", image.className)}
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-border/70 px-5 py-3 text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}


