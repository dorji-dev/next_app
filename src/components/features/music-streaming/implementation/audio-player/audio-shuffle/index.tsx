import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import React from "react";
import { TfiControlShuffle } from "react-icons/tfi";

interface AudioShuffleProps {
  onShuffle: () => void;
  shuffle: boolean;
}

const AudioShuffle = ({ onShuffle, shuffle }: AudioShuffleProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            aria-label="Shuffle songs"
            onClick={onShuffle}
          >
            <TfiControlShuffle
              className={clsx("text-[18px]", shuffle && "text-primary")}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Shuffle</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AudioShuffle;
