"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

/**
 * Tooltip provider (wrap your app once if you use many tooltips).
 */
export const TooltipProvider = TooltipPrimitive.Provider;

/**
 * Tooltip root.
 */
export const Tooltip = TooltipPrimitive.Root;

/**
 * Tooltip trigger.
 */
export const TooltipTrigger = TooltipPrimitive.Trigger;

/**
 * Tooltip content.
 */
export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-w-xs rounded-lg border border-border/70 bg-popover px-3 py-2 text-sm text-popover-foreground shadow-card",
        "animate-fade-in",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));

TooltipContent.displayName = "TooltipContent";


