import * as React from "react";

import { cn } from "@/lib/utils";

const Card = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement>;
}) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[12px] border bg-card text-card-foreground shadow-xs hover:shadow-md transition-all duration-300",
      className
    )}
    {...props}
  />
);
Card.displayName = "Card";

const CardHeader = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement>;
}) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-[24px]", className)}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  ref?: React.RefObject<HTMLParagraphElement>;
}) => (
  <h6
    ref={ref}
    className={cn(
      "font-semibold text-[20px] leading-none tracking-tight",
      className
    )}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & {
  ref?: React.RefObject<HTMLParagraphElement>;
}) => (
  <p ref={ref} className={cn("text-muted-foreground", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement>;
}) => <div ref={ref} className={cn("p-[24px] pt-0", className)} {...props} />;
CardContent.displayName = "CardContent";

const CardFooter = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement>;
}) => (
  <div
    ref={ref}
    className={cn("flex items-center p-[24px] pt-0", className)}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
