import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BsInfoSquare } from "react-icons/bs";

interface FeatureExplanationTemplateProps extends React.PropsWithChildren {
  featureTitle: string;
  disclaimer?: string;
}

const FeatureExplanationTemplate = ({
  children,
  featureTitle,
  disclaimer,
}: FeatureExplanationTemplateProps) => {
  return (
    <>
      <div className="pb-[4px] mt-[20px] md:mt-0 border-b border-b-border/40 mb-[15px]">
        <h2 className="text-[18px] md:text-[16px] py-[4px] pl-[8px] pr-[38px] rounded-[4px] bg-foreground/10 relative">
          {featureTitle}
          {disclaimer && (
            <Popover>
              <PopoverTrigger
                asChild
                className="absolute top-0 right-[8px] cursor-pointer h-full"
              >
                <BsInfoSquare className="mx-auto block text-foreground/60 hover:text-foreground/90" />
              </PopoverTrigger>
              <PopoverContent
                collisionPadding={24}
                className="text-foreground/70 bg-background"
              >
                {disclaimer}
              </PopoverContent>
            </Popover>
          )}
        </h2>
      </div>
      <ScrollArea className="h-[86%] md:h-[calc(100vh-180px)] text-foreground/70 leading-[1.8] pr-[10px]">
        {children}
      </ScrollArea>
    </>
  );
};

export default FeatureExplanationTemplate;
