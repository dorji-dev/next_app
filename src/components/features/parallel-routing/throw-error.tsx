"use client";

import { IoBugSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSearchParams } from "next/navigation";

const ThrowError = () => {
  const _ = useSearchParams();
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="border-destructive"
            onClick={() => {
              throw new Error("Errored");
            }}
          >
            <IoBugSharp className="text-destructive" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Click to force error state</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThrowError;
