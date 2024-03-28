"use client";

import { IoBugSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

const ThrowError = () => {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    throw new Error("Oh no! Something went wrong.");
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="border-destructive"
            onClick={() => setClicked(true)}
          >
            <IoBugSharp className="text-destructive" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Click to trigger error</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThrowError;
