import ParamUpdateInput from "@/components/shared/param-update-input";
import WithUseSWRLoadMore from "./wswr-load-more";
import { Suspense } from "react";

// need to wrap any component that uses useSearchParams hook in Suspense if not
// it will throw build error more here https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
const ISWithUseSWRImplementation = async () => {
  return (
    <div>
      <div className="mb-[24px] xs:max-w-[340px]">
        <Suspense>
          <ParamUpdateInput shallow={true} />
        </Suspense>
      </div>
      <Suspense>
        <WithUseSWRLoadMore />
      </Suspense>
    </div>
  );
};

export default ISWithUseSWRImplementation;
