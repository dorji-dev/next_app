"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  ref?: React.RefObject<React.ComponentRef<typeof SliderPrimitive.Root>>;
}) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[100%] w-full cursor-pointer grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-[12px] cursor-pointer w-[12px] rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
