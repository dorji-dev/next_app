import { Button } from "@/components/ui/button";
import { ErrorPageProps } from "@/lib/types/misc";

type ParallelRouteErrorProps = {
  reset: () => void;
} & Pick<ErrorPageProps, "error">;

const ParallelRouteError = ({ reset, error }: ParallelRouteErrorProps) => {
  return (
    <div className="space-y-[20px] flex flex-col justify-center text-center">
      <p className="text-muted-foreground text-[10px] tracking-widest">
        error.tsx
      </p>
      <p className="text-[12px]">Oops! Sth went wrong</p>
      <p className="text-[10px] text-muted-foreground">Error: {error?.message}</p>
      <Button className="text-[12px] font-normal" onClick={reset}>
        Retry
      </Button>
    </div>
  );
};

export default ParallelRouteError;
