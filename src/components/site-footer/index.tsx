const SiteFooter = () => {
  return (
    <div className="container py-[20px] text-center">
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
      </a>,
    </div>
  );
};

export default SiteFooter;
