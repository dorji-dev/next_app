const SiteFooter = () => {
  return (
    <div className="container py-[20px] mt-[50px] text-[12px] text-center">
      Built with{" "}
      <a
        href="https://nextjs.org/"
        className="text-foreground/60 font-medium underline tracking-[2px]"
      >
        NextJs
      </a>{" "}
      and{" "}
      <a
        href="https://ui.shadcn.com/"
        className="text-foreground/60 font-medium underline tracking-[2px]"
      >
        shadcn
      </a>{" "}
      by{" "}
      <a
        href="https://github.com/dorji-dev"
        className="text-foreground/50 font-medium"
      >
        dorji-dev
      </a>.
    </div>
  );
};

export default SiteFooter;
