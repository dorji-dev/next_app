"use client";

import { useQueryState } from "nuqs";
import { Switch } from "@/components/ui/switch";
import { ClassNameProp } from "@/lib/types/misc";
import { cn } from "@/lib/utils";

const ServerActionToggle = ({
  className,
}: { [Key in keyof ClassNameProp]?: ClassNameProp[Key] }) => {
  const [withServerActionQuery, setWithServerActionQuery] = useQueryState(
    "with_server_action",
    { shallow: false }
  );

  const toggleWithServerAction = (checked: boolean) => {
    if (checked) {
      setWithServerActionQuery("true");
    } else {
      setWithServerActionQuery("false");
    }
  };

  const withServerAction = withServerActionQuery !== "false";

  return (
    <div
      className={cn(
        "flex justify-between items-center border border-border/30 px-[8px] py-[4px] rounded-[4px] text-foreground",
        className
      )}
    >
      <span>
        With server action{" "}
        <span className="text-foreground/50">
          {withServerAction ? "(WSA)" : "(WOSA)"}
        </span>
      </span>
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
