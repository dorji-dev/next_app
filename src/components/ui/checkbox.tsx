"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { IoCheckmark } from "react-icons/io5";

import { cn } from "@/lib/utils";

const Checkbox = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  ref?: React.RefObject<React.ComponentRef<typeof CheckboxPrimitive.Root>>;
}) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-[16px] w-[16px] shrink-0 rounded-[4px] border border-primary shadow-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex items-center justify-center text-current [&_svg]:h-auto"
      )}
    >
      <IoCheckmark className="h-[16px] w-16px" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
