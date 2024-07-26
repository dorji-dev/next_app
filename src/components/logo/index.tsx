import { GiAbstract062 } from "react-icons/gi";
import { Separator } from "../ui/separator";

const SiteLogo = () => {
  return (
    <>
      <span className="font-bold flex items-center">
        <span className="font-[700] text-[24px]">
          NEXT
          <span className="text-muted-foreground text-[10px] font-[400]">
            .js
          </span>
        </span>
        <Separator orientation="vertical" className="h-[16px] mx-[4px]" />
        <span className="text-primary font-medium text-[14px]">APP</span>
      </span>
    </>
  );
};

export default SiteLogo;
