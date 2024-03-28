import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";

// force the page to dynamic rendering via searchParams access
const SecondPage = async ({
  searchParams,
}: {
  searchParams: { value: string };
}) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(searchParams.value);
    }, 4000);
  });
  await promise;
  return <ParallelRoutePageContent pageName="Two" timeToLoad={4} />;
};

export default SecondPage;
