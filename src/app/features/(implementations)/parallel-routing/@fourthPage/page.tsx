import { fakeAPI } from "@/actions/parallel-route";
import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";

// Force the page to dynamic rendering via searchParams access
// Using pages searchParams prop will opt the whole route into dynamic rendering
// https://nextjs.org/docs/app/building-your-application/rendering/server-components#switching-to-dynamic-rendering
// This is just for the demo, so you can refresh the page and see how
// page streaming works.
const FourthPage = async (
  props: {
    searchParams: Promise<{ value: string }>;
  }
) => {
  const searchParams = await props.searchParams;
  await fakeAPI(8000, searchParams.value);
  return <ParallelRoutePageContent pageName="Four" timeToLoad={8} />;
};

export default FourthPage;
