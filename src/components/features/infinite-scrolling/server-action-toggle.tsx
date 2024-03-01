"use client";

import { Separator } from "@/components/ui/separator";
import { useTailwindMediaQuery } from "@/hooks/use-tailwind-media-query";
import { useUpdateQueryString } from "@/hooks/use-update-query-string";
import { ClassNameProp } from "@/lib/types/misc";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Route } from "next";
import { useRouter, useSearchParams } from "next/navigation";

const ServerActionToggle = ({
  className,
}: { [Key in keyof ClassNameProp]?: ClassNameProp[Key] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const withServerAction = searchParams.get("with_server_action") !== "false";
  const { updateQueryString } = useUpdateQueryString();
  const { mediaMatches: isAbove360 } = useTailwindMediaQuery("360");
  const { mediaMatches: isAbove768 } = useTailwindMediaQuery("768");

  return (
    <div
      className={cn(
        "flex flex-col h-full xs:flex-row md:flex-col border border-border rounded-[4px] overflow-hidden text-[12px]",
        className
      )}
    >
      <button
        className={clsx(
          withServerAction ? "text-primary font-bold" : "text-foreground/60",
          "xs:basis-[50%] py-[8px]"
        )}
        onClick={() =>
          router.push(
            updateQueryString({
              query: {
                with_server_action: "true",
              },
            }) as Route
          )
        }
      >
        With server action
      </button>
      <Separator
        orientation={isAbove360 && !isAbove768 ? "vertical" : "horizontal"}
        className={clsx(isAbove360 && !isAbove768 && "h-[37px]")}
      />
      <button
        className={clsx(
          withServerAction ? "text-foreground/60" : "text-primary font-bold",
          "xs:basis-[50%] py-[8px]"
        )}
        onClick={() =>
          router.push(
            updateQueryString({
              query: {
                with_server_action: "false",
              },
            }) as Route
          )
        }
      >
        Without server action
      </button>
    </div>
  );
};

export default ServerActionToggle;
