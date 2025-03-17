import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Column } from "@tanstack/react-table";
import { RxCaretSort } from "react-icons/rx";

interface PaginationTableHeaderProps {
  headerValue: string;
  tooltipValue: string;
  tableRef: React.RefObject<HTMLTableElement | null>;
  column?: Column<any, unknown>;
}

const PaginationTableHeader = ({
  headerValue,
  tooltipValue,
  tableRef,
  column,
}: PaginationTableHeaderProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          {column ? (
            <button
              className="flex items-center h-full"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              {headerValue}
              <RxCaretSort className="ml-2 h-4 w-4" />
            </button>
          ) : (
            <span className="h-full flex items-center">
              {headerValue}
            </span>
          )}
        </TooltipTrigger>
        <TooltipContent side="bottom" collisionBoundary={tableRef.current}>
          <p>{tooltipValue}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PaginationTableHeader;
