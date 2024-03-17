import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PaginationTableHeaderProps {
  headerValue: string;
  tooltipValue: string;
  tableRef: React.RefObject<HTMLTableElement>
}

const PaginationTableHeader = ({
  headerValue,
  tooltipValue,
  tableRef
}: PaginationTableHeaderProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span>{headerValue}</span>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={12} collisionBoundary={tableRef.current}>
          <p>{tooltipValue}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PaginationTableHeader;
