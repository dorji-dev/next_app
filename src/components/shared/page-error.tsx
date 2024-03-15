import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ErrorPageProps } from "@/lib/types/misc";

const PageError = ({ reset }: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center space-y-[20px] mt-[200px]">
      <p className="text-foreground/50">Something went wrong!</p>
      <div className="space-x-[20px]">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Home
        </Link>
        <Button onClick={reset}>Retry</Button>
      </div>
    </div>
  );
};

export default PageError;
