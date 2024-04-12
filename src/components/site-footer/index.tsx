import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
const SiteFooter = () => {
  return (
    <footer
      id="site_footer"
      className="container py-[20px] mt-[50px] text-[12px] border-t border-t-border/40 space-y-[10px]"
    >
      <div className="flex justify-center space-x-[20px]">
        <a
          target="_blank"
          className={cn(
            buttonVariants({ size: "icon", variant: "outline" }),
            "text-foreground/60 hover:text-foreground transition-colors duration-300"
          )}
          href="https://twitter.com/dorjidev"
          aria-label="Twitter"
        >
          <FaXTwitter className="text-[18px]" />
        </a>
        <a
          target="_blank"
          className={cn(
            buttonVariants({ size: "icon", variant: "outline" }),
            "text-foreground/60 hover:text-foreground transition-colors duration-300"
          )}
          href="https://github.com/dorji-dev"
          aria-label="Github"
        >
          <FaGithub className="text-[18px]" />
        </a>
      </div>
      <p className="text-center">
        Built with{" "}
        <a
          target="_blank"
          href="https://nextjs.org/"
          className="text-foreground/60 font-medium underline tracking-[2px]"
        >
          NextJs
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          href="https://ui.shadcn.com/"
          className="text-foreground/60 font-medium underline tracking-[2px]"
        >
          shadcn
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/dorji-dev"
          className="text-foreground/50 font-medium"
          target="_blank"
        >
          dorji-dev
        </a>
        .
      </p>
    </footer>
  );
};

export default SiteFooter;
