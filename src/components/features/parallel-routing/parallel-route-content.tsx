import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ThrowError from "./throw-error";
import TextHighlight from "@/components/text-highlight.tsx";

interface ParallelRoutePageContentProps {
  pageName: string;
  timeToLoad: number;
}

const ParallelRoutePageContent = ({
  pageName,
  timeToLoad,
}: ParallelRoutePageContentProps) => {
  return (
    <div className="text-center space-y-[10px]">
      <p className="text-muted-foreground text-[10px] tracking-widest">
        page.tsx
      </p>
      <p className="">{pageName}</p>
      <p className="text-muted-foreground text-[12px]">
        Takes{" "}
        <span className="text-primary font-medium text-[14px]">
          {timeToLoad}
        </span>
        s to load.
      </p>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="font-normal text-[12px]">
              Click me
            </Button>
          </DialogTrigger>
          <DialogContent className="space-y-[10px]">
            <h6 className="text-[18px]">Interactive</h6>
            <p className="text-muted-foreground">
              This is just to demo that the already rendered page can be
              interactive while other pages are still loading. Basically, we are
              able to stream pages just like components with{" "}
              <TextHighlight
                text="suspense"
                textLink="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense"
              />.
            </p>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <ThrowError />
      </div>
    </div>
  );
};

export default ParallelRoutePageContent;
