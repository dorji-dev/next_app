import { ChildrenProp } from "@/lib/types/misc";
import { ScrollArea } from "../ui/scroll-area";

interface FeatureExplanationTemplateProps extends ChildrenProp {
  featureTitle: string;
}

const FeatureExplanationTemplate = ({
  children,
  featureTitle,
}: FeatureExplanationTemplateProps) => {
  return (
    <>
      <div className="pb-[4px] mt-[20px] md:mt-0 border-b border-b-border/40 mb-[15px]">
        <h2 className="text-[18px] md:text-[16px] py-[4px] px-[8px] rounded-[4px] bg-foreground/10">
          {featureTitle}
        </h2>
      </div>
      <ScrollArea className="h-full md:h-[calc(100vh-160px)]">
        {children}
      </ScrollArea>
    </>
  );
};

export default FeatureExplanationTemplate;
