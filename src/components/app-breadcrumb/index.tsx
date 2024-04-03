"use client";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { useTailwindMediaQuery } from "@/hooks/use-tailwind-media-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import Link from "next/link";
import { Route } from "next";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { useBreadCrumbObjects } from "@/hooks/use-breadcrumb-objects";
import { Skeleton } from "../ui/skeleton";

const AppBreadCrumb = () => {
  const [open, setOpen] = useState(false);
  const { breadCrumbObjects } = useBreadCrumbObjects();
  const { mediaMatches: isDesktop, isChecking } = useTailwindMediaQuery("768");

  if (isChecking || !breadCrumbObjects.length) {
    return (
      <div className="flex space-x-[10px]">
        <Skeleton className="h-[16px] w-[36px] rounded-[2px]" />
        <Skeleton className="h-[16px] w-[40px] rounded-[2px]" />
        <Skeleton className="h-[16px] w-[50px] rounded-[2px]" />
      </div>
    );
  }

  const ITEMS_TO_DISPLAY = isDesktop
    ? breadCrumbObjects.length >= 3
      ? 3
      : 2
    : 2;

  return (
    <Breadcrumb className="text-[14px]">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={breadCrumbObjects[0].href as Route}>
              {breadCrumbObjects[0].label}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadCrumbObjects.length > ITEMS_TO_DISPLAY ? (
          <>
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {breadCrumbObjects
                      .slice(1, breadCrumbObjects.length - ITEMS_TO_DISPLAY + 1)
                      .map((item, index) => (
                        <DropdownMenuItem
                          asChild
                          className="cursor-pointer capitalize text-[14px]"
                          key={index}
                        >
                          <Link href={item.href as Route}>{item.label}</Link>
                        </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>
                        Select a page to navigate to.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {breadCrumbObjects
                        .slice(
                          1,
                          breadCrumbObjects.length - ITEMS_TO_DISPLAY + 1
                        )
                        .map((item, index) => (
                          <Link
                            key={index}
                            href={item.href ? (item.href as Route) : "#"}
                            className="py-1 text-[14px] capitalize"
                          >
                            {item.label}
                          </Link>
                        ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {breadCrumbObjects.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.href ? (
              <>
                <BreadcrumbLink
                  asChild
                  className="truncate md:max-w-none capitalize"
                >
                  <Link href={item.href as Route}>{item.label}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage className="capitalize">
                {item.label}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadCrumb;
