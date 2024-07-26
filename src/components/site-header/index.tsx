import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import ModeToggle from "../mode-toggle";
import MobileNav from "./mobile-nav";
import { FaGithub } from "react-icons/fa";
import DesktopNav from "./desktop-nav";
import { TbSlash } from "react-icons/tb";
import Link from "next/link";

const SiteHeader = () => {
  return (
    <header className="sticky container top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-[56px] max-w-screen-2xl items-center">
        <div className="flex items-center w-full h-full">
          <DesktopNav />
          <MobileNav />
          <nav className="ml-auto flex items-center space-x-[8px]">
            <Link href="/">
              <span
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "text-[10px] tracking-[2px]"
                )}
              >
                HOME
                <TbSlash className="h-[16px] w-[16px] text-foreground/50" />
              </span>
            </Link>
            <a
              href="https://github.com/dorji-dev/next_app"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-[36px] px-0"
                )}
              >
                <FaGithub className="h-[16px] w-[16px]" />
                <span className="sr-only">GitHub</span>
              </span>
            </a>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
