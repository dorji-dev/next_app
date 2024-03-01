import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { heroFeatures } from "@/config/hero-features";
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
            href="https://github.com/dorji-dev/next_app"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </section>
      <Separator className="my-[50px] bg-foreground/5" />
      <section>
        <div className="flex flex-wrap justify-center gap-[40px]">
          {heroFeatures.map((feature) => (
            <Link
              key={feature.title}
              href="/"
              className="group min-w-full sm:min-w-[90%] sm:max-w-[400px] md:min-w-[70%] lg:min-w-[30%]"
            >
              <Card className="group-hover:border-input/60 transition-colors duration-300">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="w-full text-foreground/60">
                  {feature.content}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
