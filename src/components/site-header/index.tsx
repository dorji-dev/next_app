import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import ModeToggle from "../mode-toggle";
import MobileNav from "./mobile-nav";
import { FaGithub } from "react-icons/fa";
import DesktopNav from "./desktop-nav";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-[56px] max-w-screen-2xl items-center">
        <div className="flex items-center w-full h-full">
          <DesktopNav />
          <MobileNav />
          <nav className="ml-auto flex items-center space-x-[8px]">
            <Link href="/" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-[36px] px-0"
                )}
              >
                <FaGithub className="h-[16px] w-[16px]" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
