 "use client";

 import * as React from "react";
 import * as AccordionPrimitive from "@radix-ui/react-accordion";

 import { cn } from "@/lib/utils";
 import { Icon } from "@/components/ui/icon";

 export const Accordion = AccordionPrimitive.Root;

 export const AccordionItem = React.forwardRef<
   React.ElementRef<typeof AccordionPrimitive.Item>,
   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
 >(({ className, ...props }, ref) => (
   <AccordionPrimitive.Item
     ref={ref}
     className={cn(
       "overflow-hidden rounded-2xl border border-border/60 bg-card text-card-foreground shadow-soft",
       className,
     )}
     {...props}
   />
 ));
 AccordionItem.displayName = "AccordionItem";

 export const AccordionTrigger = React.forwardRef<
   React.ElementRef<typeof AccordionPrimitive.Trigger>,
   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
 >(({ className, children, ...props }, ref) => (
   <AccordionPrimitive.Header className="flex">
     <AccordionPrimitive.Trigger
       ref={ref}
       className={cn(
         "group flex flex-1 items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-foreground",
         "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
         "data-[state=open]:bg-muted/60",
         className,
       )}
       {...props}
     >
       <span>{children}</span>
       <Icon
         name="arrow-right"
         className={cn(
           "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
           "group-data-[state=open]:rotate-90",
         )}
       />
     </AccordionPrimitive.Trigger>
   </AccordionPrimitive.Header>
 ));
 AccordionTrigger.displayName = "AccordionTrigger";

 export const AccordionContent = React.forwardRef<
   React.ElementRef<typeof AccordionPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
 >(({ className, children, ...props }, ref) => (
   <AccordionPrimitive.Content
     ref={ref}
     className={cn(
       "overflow-hidden border-t border-border/60 text-sm text-muted-foreground",
       "data-[state=closed]:animate-collapse data-[state=open]:animate-expand",
       className,
     )}
     {...props}
   >
     <div className="px-4 py-3">{children}</div>
   </AccordionPrimitive.Content>
 ));
 AccordionContent.displayName = "AccordionContent";

