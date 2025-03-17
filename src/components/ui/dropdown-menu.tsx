"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "@/lib/utils";
import { IoMdCheckmark } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { MdOutlineChevronRight } from "react-icons/md";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = ({
  ref,
  className,
  inset,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
  ref?: React.RefObject<
    React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>
  >;
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-[8px] py-[6px] outline-hidden focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-[32px]",
      className
    )}
    {...props}
  >
    {children}
    <MdOutlineChevronRight className="ml-auto h-[16px] w-[16px]" />
  </DropdownMenuPrimitive.SubTrigger>
);
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & {
  ref?: React.RefObject<
    React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>
  >;
}) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[128px] overflow-hidden rounded-md border bg-popover p-[4px] text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-[8px] data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
);
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = ({
  ref,
  className,
  sideOffset = 4,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
  ref?: React.RefObject<
    React.ComponentRef<typeof DropdownMenuPrimitive.Content>
  >;
}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[128px] overflow-hidden rounded-md border bg-popover p-[4px] text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-[8px] data-[side=left]:slide-in-from-right-[8px] data-[side=right]:slide-in-from-left-[8px] data-[side=top]:slide-in-from-bottom-[8px]",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = ({
  ref,
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  ref?: React.RefObject<React.ComponentRef<typeof DropdownMenuPrimitive.Item>>;
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-[12px] py-[6px] outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      inset && "pl-[32px]",
      className
    )}
    {...props}
  />
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = ({
  ref,
  className,
  children,
  checked,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & {
  ref?: React.RefObject<
    React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>
  >;
}) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-[6px] pl-[32px] pr-[8px] outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-[8px] flex h-[14px] w-[14px] items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <IoMdCheckmark className="h-[16px] w-[16px]" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
);
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & {
  ref?: React.RefObject<
    React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>
  >;
}) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-[6px] pl-[32px] pr-[8px] outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-[8px] flex h-[14px] w-[14px] items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <LuDot className="h-[16px] w-[16px] fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = ({
  ref,
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  ref?: React.RefObject<React.ComponentRef<typeof DropdownMenuPrimitive.Label>>;
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-[6px] font-semibold",
      inset && "pl-[32px]",
      className
    )}
    {...props}
  />
);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & {
  ref?: React.RefObject<
    React.ComponentRef<typeof DropdownMenuPrimitive.Separator>
  >;
}) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-[4px] my-[4px] h-px bg-muted", className)}
    {...props}
  />
);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-[12px] tracking-widest opacity-60",
        className
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
