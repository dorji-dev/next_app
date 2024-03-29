import React from "react";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Route } from "next";

const AsChildSlot = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
}) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      style: {
        ...props.style,
        ...children.props.style,
      },
      className: cn(props.className, children.props.className),
    });
  }
  if (React.Children.count(children) > 1) {
    React.Children.only(null);
  }
  return null;
};

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-[4px]", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  asChild?: boolean;
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  asChild,
  className,
  isActive,
  size = "icon",
  href,
  ...props
}: PaginationLinkProps) =>
  asChild ? (
    <AsChildSlot {...props} />
  ) : (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      href={href as Route}
      {...props}
    />
  );
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  asChild,
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) =>
  asChild ? (
    <AsChildSlot {...props} />
  ) : (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-[4px] pl-[10px]", className)}
      {...props}
    >
      <LuChevronLeft className="h-[16px] w-[16px]" />
      <span>Previous</span>
    </PaginationLink>
  );
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  asChild,
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) =>
  asChild ? (
    <AsChildSlot {...props} />
  ) : (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-[4px] pr-[10px]", className)}
      {...props}
    >
      <span>Next</span>
      <LuChevronRight className="h-[16px] w-[16px]" />
    </PaginationLink>
  );
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn(
      "flex h-[36px] w-[36px] items-center justify-center",
      className
    )}
    {...props}
  >
    <HiOutlineDotsHorizontal className="h-[16px] w-[16px]" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
