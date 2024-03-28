import { fakeAPI } from "@/actions/parallel-route";
import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";

// force the page to dynamic rendering via searchParams access
const ThirdPage = async ({
  searchParams,
}: {
  searchParams: { value: string };
}) => {
  await fakeAPI(6000, searchParams.value);
  return <ParallelRoutePageContent pageName="Three" timeToLoad={6} />;
};

export default ThirdPage;
