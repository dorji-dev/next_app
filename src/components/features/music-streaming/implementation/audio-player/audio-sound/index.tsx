import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import React from "react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

interface AudioSoundProps {
  toggleMute: () => void;
  muted: boolean;
  audioVolume: number;
  onSliderValueChange: (values: number[]) => void;
  sliderClass?: string;
}

const AudioSound = ({
  toggleMute,
  muted,
  audioVolume,
  onSliderValueChange,
  sliderClass,
}: AudioSoundProps) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button size="icon" variant="ghost" onClick={toggleMute}>
              {muted ? (
                <MdVolumeOff className="text-[22px] text-foreground/50" />
              ) : (
                <MdVolumeUp className="text-[22px]" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{muted ? "Unmute" : "Mute"}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Slider
        value={[audioVolume * 100]}
        max={100}
        step={1}
        onValueChange={onSliderValueChange}
        className={cn("md:w-[60px] lg:w-[80px] h-[4px]", sliderClass)}
      />
    </>
  );
};

export default AudioSound;
