"use client";

import { LIBRARIES_USED } from "@/lib/constants/misc";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";
import { PiArrowLineUpRightThin } from "react-icons/pi";

const LibrariesUsed = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[20px] max-w-[90%] lg:max-w-[80%] mx-auto">
      {LIBRARIES_USED.map((library) => (
        <HoverCard key={library.name} openDelay={300}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="text-[14px] text-muted-foreground px-[12px] py-[4px] h-auto font-normal"
            >
              {library.name}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-max max-w-[320px]" collisionPadding={10}>
            <div className="flex justify-between space-x-4">
              <div className="space-y-1 text-[14px] w-full">
                <h6 className="font-semibold text-[14px]">{library.name}</h6>
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
