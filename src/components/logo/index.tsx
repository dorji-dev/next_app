import { GiAbstract062 } from "react-icons/gi";
import { Separator } from "../ui/separator";

const SiteLogo = () => {
  return (
    <>
      <GiAbstract062 />
      <span className="font-bold flex items-center">
        <span className="font-thin">NEXT</span>
        <Separator orientation="vertical" className="h-[12px] mx-[4px]"/>
        <span className="text-primary">app_router</span>
      </span>
    </>
  );
};

export default SiteLogo;
