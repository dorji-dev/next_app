import AppBreadCrumb from "@/components/app-breadcrumb";
import TextHighlight from "@/components/text-highlight.tsx";
import Link from "next/link";

const InfiniteScrollingPage = () => {
  return (
    <div className="space-y-[20px] my-[30px]">
      <div className="flex justify-center">
        <AppBreadCrumb />
      </div>
      <h5 className="font-medium text-center">Infinite scrolling</h5>
      <p className="text-muted-foreground text-center">
        Implementation of infinite scrolling in NextJS app router with{" "}
        <TextHighlight
          text="server action"
          textLink="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
        />{" "}
        and <TextHighlight text="useSWR" textLink="https://swr.vercel.app/" />{" "}
        hook. Data fetching on the server side vs client side.
      </p>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-[40px]">
        <Link
          className="theme-link text-[16px]"
          href="/features/infinite-scrolling/with-server-action"
        >
          With server action
        </Link>
        <Link
          className="theme-link text-[16px]"
          href="/features/infinite-scrolling/with-use-swr"
        >
          With useSWR hook
        </Link>
      </div>
    </div>
  );
};

export default InfiniteScrollingPage;
