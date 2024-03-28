import { fakeAPI } from "@/actions/parallel-route";
import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";

// force the page to dynamic rendering via searchParams access
const FourthPage = async ({
  searchParams,
}: {
  searchParams: { value: string };
}) => {
  await fakeAPI(8000, searchParams.value);
  return <ParallelRoutePageContent pageName="Four" timeToLoad={8} />;
};

export default FourthPage;
