import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section>
        <h1 className="text-[max(48px,min(5vw,76px))] leading-[1.12] text-center px-[20px] md:px-[60px] lg:px-[100px] mt-[32px] md:mt-[54px] lg:mt-[50px] font-bold">
          Everyday features with Next App Router
        </h1>
        <span className="text-[18px] mt-[30px] max-w-[570px] block text-center mx-auto text-foreground/50">
          Explore how to do things the NextJS way backed by the{" "}
          <span className="text-foreground/80">App Router</span>. Each feature
          implementation is linked to the most related github resource.
        </span>
        <div className="flex items-center justify-center mt-[30px]">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dorji-dev/with-next-app-router"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
