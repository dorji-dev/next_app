"use client";

import { LIBRARIES_USED } from "@/lib/constants/misc";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";
import { useRef } from "react";
import { PiArrowLineUpRightThin } from "react-icons/pi";

const LibrariesUsed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap justify-center gap-[20px] max-w-[90%] lg:max-w-[80%] mx-auto"
    >
      {LIBRARIES_USED.map((library) => (
        <HoverCard key={library.name} openDelay={300}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="text-[13px] px-[12px] py-[4px] h-auto font-normal"
            >
              {library.name}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent
            align="center"
            className="w-80"
            collisionBoundary={containerRef.current}
          >
            <div className="flex justify-between space-x-4">
              <div className="space-y-1 text-[14px] w-full">
                <h4 className="font-semibold">{library.name}</h4>
                <p>{library.description}</p>
                <a
                  href={library.link}
                  target="_blank"
                  className="flex items-center justify-end pt-2 text-primary"
                >
                  Visit{" "}
                  <PiArrowLineUpRightThin className="ml-[4px] text-[16px]" />
                </a>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default LibrariesUsed;
