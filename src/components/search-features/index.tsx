"use client";

import { useState, useEffect, Fragment, useCallback } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "../ui/command";
import { heroFeatures } from "@/config/hero-features";
import { useRouter } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const SearchFeatures = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <div
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) =>
          e.target === e.currentTarget && e.key === "Enter" && setOpen(true)
        }
        className={cn(
          buttonVariants({ variant: "outline" }),
          "flex text-muted-foreground/80 cursor-pointer rounded-[8px] justify-between mx-auto max-w-[250px] px-[8px] font-normal"
        )}
      >
        <span className="text-[12px] ml-[4px]">Search features & demos</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-[4px] border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-[12px]">⌘</span>K
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {heroFeatures.map((feature) => (
            <Fragment key={feature.title}>
              <CommandGroup heading={feature.title}>
                {feature.subFeatures.map((subFeature) => (
                  <CommandItem
                    onSelect={() =>
                      runCommand(() => router.push(subFeature.href))
                    }
                    key={subFeature.description}
                    value={subFeature.description}
                  >
                    <div>
                      <p>{subFeature.hrefText}</p>
                      <span className="text-[12px] text-muted-foreground">
                        {subFeature.description}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchFeatures;
