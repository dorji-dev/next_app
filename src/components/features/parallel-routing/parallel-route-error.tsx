import { Button } from "@/components/ui/button";

const ParallelRouteError = ({ reset }: { reset: () => void }) => {
  return (
    <div className="space-y-[20px] flex flex-col justify-center">
      <p className="text-[12px]">Oops! Sth went wrong</p>
      <Button className="text-[12px] font-normal" onClick={reset}>Retry</Button>
    </div>
  );
};

export default ParallelRouteError;
