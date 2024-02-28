"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { TbMenu } from "react-icons/tb";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import SiteLogo from "../logo";
import { navConfig } from "@/lib/constants/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        asChild
        className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <Button variant="ghost" aria-label="Toggle menu">
          <TbMenu className="w-[24px] h-[24px]" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <SiteLogo />
        </Link>
        <ScrollArea className="my-[16px] h-[calc(100vh-8rem)] pb-[40px] pr-[20px]">
          <nav className="flex flex-col space-y-[12px]">
            <Accordion type="single" collapsible className="space-y-[12px]">
              {navConfig.mobileNav.withSubMenu.map((menu) => (
                <AccordionItem key={menu.title} value={menu.title}>
                  <AccordionTrigger className="text-foreground/60">
                    {menu.title}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col pl-[8px] ml-[4px] mt-[8px] space-y-[8px] text-foreground/60 border-l border-dotted">
                    {menu.subMenu.map((subMenu) => (
                      <Link href={subMenu.href} key={subMenu.title}>
                        {subMenu.title}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {navConfig.mobileNav.withoutSubMenu.map((menu) => (
              <Link
                href={menu.href}
                key={menu.title}
                className="text-foreground/60"
              >
                {menu.title}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
