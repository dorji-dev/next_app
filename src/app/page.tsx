import HeroFeatureSeparator from "@/components/hero-feature-separator";
import FeaturesListing from "@/components/features-listing";
import LibrariesUsed from "@/components/libraries-used";
import SearchFeatures from "@/components/search-features";
import TextHighlight from "@/components/text-highlight.tsx";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import type { Metadata } from "next";
import Link from "next/link";
import { FaCircle, FaGithub } from "react-icons/fa";
import { heroFeatures } from "@/config/hero-features";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Every day features | Next.js App Router",
  description: "A demo of every day features using NextJs app router",
};

export default function Home() {
  const homeFeatures = heroFeatures.slice(0, 6);

  return (
    <main className="space-y-[50px]">
      <section>
        <h1 className="bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-transparent text-center px-[20px] md:px-[60px] lg:px-[100px] mt-[40px] md:mt-[50px] lg:mt-[60px] font-bold">
          Everyday features with Next App Router
          <span className="block text-[12px] font-bold italic text-muted-foreground tracking-wider mt-[12px]">
            & concept demos
          </span>
        </h1>
        <span className="text-[18px] mt-[30px] max-w-[570px] block text-center mx-auto text-foreground/50">
          Explore how to do things the NextJS way backed by the{" "}
          <span className="text-foreground/80 font-bold whitespace-nowrap">
            App Router
          </span>
          . Each feature implementation and concept demo is linked to the most
          related github resource.
        </span>
        <div className="flex flex-col items-center mt-[30px] text-foreground/60 text-[10px] uppercase font-[500] space-y-[4px]">
          <p className="flex items-center">
            <FaCircle className="text-primary mr-[8px]" /> Completed
          </p>
          <p className="flex items-center">
            <FaCircle className="text-foreground/40 mr-[8px]" /> Upcoming
          </p>
        </div>
        <div className="flex items-center justify-center mt-[30px]">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dorji-dev/next_app"
            className={clsx(buttonVariants({ variant: "default" }))}
          >
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
        <p className="text-center border rounded-[8px] p-[16px] text-[13px] mt-[30px] text-foreground/60 xs:max-w-[480px] xs:mx-auto">
          <TextHighlight
            text="Parallel routing"
            textLink="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes"
          />{" "}
          is already implemented. If you navigate to the completed features
          page, the explanation and implementation sections are in fact pages
          rendered in parallel.
        </p>
      </section>
      <div className="space-y-[20px]">
        <div className="flex items-center">
          <Separator className="w-auto grow bg-foreground/5" />
          <span className="mx-[10px] text-[12px] text-muted-foreground">
            libraries used
          </span>
          <Separator className="w-auto grow bg-foreground/5" />
        </div>
        <div>
          <LibrariesUsed />
        </div>
      </div>
      <div className="space-y-[3px] flex flex-col items-center">
        <HeroFeatureSeparator />
      </div>
      <div className="my-[30px]!">
        <SearchFeatures />
      </div>
      <FeaturesListing features={homeFeatures} />
      <Link
        href="/features"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "font-normal text-[14px] mx-auto flex w-max"
        )}
      >
        View all features
      </Link>
    </main>
  );
}
