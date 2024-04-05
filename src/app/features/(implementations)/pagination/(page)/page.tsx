import AppBreadCrumb from "@/components/app-breadcrumb";
import { Route } from "next";
import Link from "next/link";

const PaginationPage = () => {
  return (
    <div className="space-y-[20px] my-[30px]">
      <div className="flex justify-center">
        <AppBreadCrumb />
      </div>
      <h5 className="font-medium text-center">Pagination</h5>
      <p className="text-muted-foreground text-center">
        Implementation of pagination in NextJS app router with client side and
        server side data fetching.
      </p>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-[40px]">
        <Link
          className="theme-link text-[16px]"
          href={"/features/pagination/server-side" as Route}
        >
          Server side pagination
        </Link>
        <Link
          className="theme-link text-[16px]"
          href={"/features/pagination/client-side" as Route}
        >
          Client side pagination
        </Link>
      </div>
    </div>
  );
};

export default PaginationPage;
