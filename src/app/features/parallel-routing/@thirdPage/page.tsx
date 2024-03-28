import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";

// force the page to dynamic rendering via searchParams access
const ThirdPage = async ({
  searchParams,
}: {
  searchParams: { value: string };
}) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(searchParams.value);
    }, 6000);
  });
  await promise;
  return <ParallelRoutePageContent pageName="Three" timeToLoad={6} />;
};

export default ThirdPage;
