import { fakeAPI } from "@/actions/parallel-route";
import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";
import ParallelRouteError from "@/components/features/parallel-routing/parallel-route-error";
import WithErrorBoundary from "@/components/with-error-boundary";

// Force the page to dynamic rendering via searchParams access
// Using pages searchParams prop will opt the whole route into dynamic rendering
// https://nextjs.org/docs/app/building-your-application/rendering/server-components#switching-to-dynamic-rendering
// This is just for the demo, so you can refresh the page and see how
// page streaming works.
const FirstPage = async ({
  searchParams,
}: {
  searchParams: { value: string };
}) => {
  await fakeAPI(2000, searchParams.value);

  const fallbackRender = async (resetErrorBoundary: (...args: any[]) => void) => {
    "use server";
    return <ParallelRouteError reset={resetErrorBoundary} />;
  };

  // Currently there seems to be a bug for error.tsx files in parallel routes
  // especially the first parallel route in the folder structure so using
  // custom error boundary for now.
  return (
    <WithErrorBoundary fallbackRender={fallbackRender}>
      <ParallelRoutePageContent pageName="One" timeToLoad={2} />
    </WithErrorBoundary>
  );
};

export default FirstPage;
