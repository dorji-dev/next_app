import { Separator } from "../ui/separator";

const HeroFeatureSeparator = () => {
  return (
    <>
      <Separator className="w-[100%] md:w-[80%] bg-foreground/50" />
      <Separator className="w-[90%] md:w-[72%] bg-foreground/45" />
      <Separator className="w-[80%] md:w-[64%] bg-foreground/40" />
      <Separator className="w-[70%] md:w-[56%] bg-foreground/35" />
      <Separator className="w-[60%] md:w-[48%] bg-foreground/30" />
      <Separator className="w-[50%] md:w-[40%] bg-foreground/25" />
      <Separator className="w-[40%] md:w-[32%] bg-foreground/20" />
      <Separator className="w-[30%] md:w-[24%] bg-foreground/15" />
      <Separator className="w-[20%] md:w-[16%] bg-foreground/10" />
      <Separator className="w-[10%] md:w-[8%] bg-foreground/5" />
    </>
  );
};

export default HeroFeatureSeparator;
