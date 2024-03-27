import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";

const SecondPage = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 4000);
  });
  await promise;
  return <ParallelRoutePageContent pageName="Two" timeToLoad={4} />;
};

export default SecondPage;
