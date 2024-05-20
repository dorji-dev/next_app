import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BsInfoSquare } from "react-icons/bs";

interface FeatureExplanationTemplateProps extends React.PropsWithChildren {
  disclaimer?: string;
}

const FeatureExplanationTemplate = ({
  children,
  disclaimer,
}: FeatureExplanationTemplateProps) => {
  return (
    <>
      <div className="pb-[4px] mt-[20px] md:mt-0 border-b border-b-border/40 mb-[15px]">
        <p className="py-[4px] pl-[8px] pr-[38px] rounded-[4px] border border-border relative">
          <span className="mr-[2px] inline-block text-[16px] text-foreground/50">
            @
          </span>
          explanation
          {disclaimer && (
            <Popover>
              <PopoverTrigger
                asChild
                className="absolute top-[8px] right-[8px] cursor-pointer h-max"
              >
                <button aria-label="Disclaimer">
                  <BsInfoSquare className="mx-auto block text-foreground/60 hover:text-foreground/90" />
                </button>
              </PopoverTrigger>
              <PopoverContent
                collisionPadding={24}
                sideOffset={14}
                className="text-foreground/70 text-[13px] max-w-[240px]"
              >
                {disclaimer}
              </PopoverContent>
            </Popover>
          )}
        </p>
      </div>
      <ScrollArea id="desktop_explanation" className="h-[86%] md:h-[calc(100dvh-180px)] text-foreground/70 leading-[1.8] pr-[10px]">
        {children}
        <div className="mt-[20px]">
          <p className="text-foreground/45 text-[12px] leading-[18px]">
            If you have any queries, suggestions, or feedback, you can reach me
            via{" "}
            <a
              target="_blank"
              href="https://twitter.com/dorjidev"
              className="text-primary underline underline-offset-2"
            >
              twitter
            </a>
            .
          </p>
        </div>
      </ScrollArea>
    </>
  );
};

export default FeatureExplanationTemplate;
