import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import React from "react";
import { TfiLoop } from "react-icons/tfi";

interface AudioLoopProps {
  isLooping: boolean;
  onToggle: () => void;
}

const AudioLoop = ({ isLooping, onToggle }: AudioLoopProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            aria-label={isLooping ? "Looping" : "Loop current song"}
            onClick={onToggle}
          >
            <TfiLoop
              className={clsx("text-[18px]", isLooping && "text-primary")}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {isLooping ? "Looping" : "Loop current song"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AudioLoop;
