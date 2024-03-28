import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";

// force the page to dynamic rendering via searchParams access
const FourthPage = async ({
  searchParams,
}: {
  searchParams: { value: string };
}) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(searchParams.value);
    }, 8000);
  });
  await promise;
  return <ParallelRoutePageContent pageName="Four" timeToLoad={8} />;
};

export default FourthPage;
