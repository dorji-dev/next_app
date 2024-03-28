import { fakeAPI } from "@/actions/parallel-route";
import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";

// force the page to dynamic rendering via searchParams access
const SecondPage = async ({
  searchParams,
}: {
  searchParams: { value: string };
}) => {
  await fakeAPI(4000, searchParams.value);
  return <ParallelRoutePageContent pageName="Two" timeToLoad={4} />;
};

export default SecondPage;
