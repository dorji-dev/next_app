"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuContentItem,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { navConfig } from "@/config/navigation";
import SiteLogo from "../logo";

const DesktopNav = () => {
  
  return (
    <div className="hidden md:flex h-full">
      <Link href="/" className="mr-6 flex items-center space-x-[4px]">
        <SiteLogo />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          {navConfig.desktopNav.withMenu.map((menu) => (
            <NavigationMenuItem key={menu.title} className="mr-[14px]">
              <NavigationMenuTrigger className="transition-color duration-300 h-[20px]">{menu.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {menu.subMenu.map((subMenu) => (
                    <NavigationMenuContentItem
                      href={subMenu.href}
                      title={subMenu.title}
                      key={subMenu.title}
                    >
                      {subMenu.description}
                    </NavigationMenuContentItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <nav className="flex items-center">
        {navConfig.desktopNav.withoutMenu.map((menu) => (
          <Link href={menu.href} key={menu.title} className="mr-[14px] text-foreground/60 hover:text-foreground/80 transition-color duration-300">
            {menu.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DesktopNav;
