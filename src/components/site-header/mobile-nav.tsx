"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { TbMenu } from "react-icons/tb";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import SiteLogo from "../logo";
import { navConfig } from "@/config/navigation";
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
        className="mr-[8px] px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <Button variant="ghost" aria-label="Open navigation menu">
          <TbMenu className="w-[24px] h-[24px]" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 pt-[36px]">
        <Link
          href="/"
          className="mr-[24px] flex items-center space-x-2"
          onClick={() => setOpen(false)}
        >
          <SiteLogo />
        </Link>
        <ScrollArea className="my-[16px] h-[calc(100vh-8rem)] pb-[40px] pr-[20px]">
          <nav className="flex flex-col space-y-[16px]">
            <Accordion type="multiple" className="space-y-[16px]">
              {navConfig.mobileNav.withSubMenu.map((menu) => (
                <AccordionItem key={menu.title} value={menu.title}>
                  <AccordionTrigger className="text-foreground/60">
                    {menu.title}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col pl-[8px] ml-[4px] mt-[12px] space-y-[16px] text-foreground/60 border-l border-dashed">
                    {menu.subMenu.map((subMenu) => (
                      <Link
                        href={subMenu.href}
                        key={subMenu.title}
                        onClick={() => setOpen(false)}
                      >
                        {subMenu.title}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {navConfig.mobileNav.withoutSubMenu.map((menu) => (
              <Link
                onClick={() => setOpen(false)}
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
