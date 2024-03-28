import { Skeleton } from "../ui/skeleton";

const ParallelRouteChildrenSkeleton = () => {
  return (
    <div className="space-y-[24px]">
      <div className="flex justify-between">
        <Skeleton className="h-[40px] w-[40px] rounded-full" />
        <Skeleton className="h-[40px] w-[100px] rounded-full" />
      </div>
      <div className="space-y-[30px]">
        <div className="space-y-[12px]">
          <Skeleton className="h-[16px] w-full" />
          <Skeleton className="h-[16px] w-full" />
        </div>
        <div className="space-y-[12px]">
          <Skeleton className="h-[10px] w-full" />
          <Skeleton className="h-[10px] w-full" />
          <Skeleton className="h-[10px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default ParallelRouteChildrenSkeleton;
