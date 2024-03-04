"use client";

import { Switch } from "@/components/ui/switch";
import { useUpdateQueryString } from "@/hooks/use-update-query-string";
import { ClassNameProp } from "@/lib/types/misc";
import { cn } from "@/lib/utils";
import { Route } from "next";
import { useRouter, useSearchParams } from "next/navigation";

const ServerActionToggle = ({
  className,
}: { [Key in keyof ClassNameProp]?: ClassNameProp[Key] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const withServerAction = searchParams.get("with_server_action") !== "false";
  const { updateQueryString } = useUpdateQueryString();

  const toggleWithServerAction = (checked: boolean) => {
    if (checked) {
      router.push(
        updateQueryString({ query: { with_server_action: "true" } }) as Route
      );
    } else {
      router.push(
        updateQueryString({ query: { with_server_action: "false" } }) as Route
      );
    }
  };

  return (
    <div
      className={cn(
        "flex justify-between items-center border border-border/30 px-[8px] py-[4px] rounded-[4px] text-foreground",
        className
      )}
    >
      <span>With server action</span>
      <Switch
        aria-label={
          withServerAction ? "Without server action" : "With server action"
        }
        checked={withServerAction}
        onCheckedChange={toggleWithServerAction}
      />
    </div>
  );
};

export default ServerActionToggle;
