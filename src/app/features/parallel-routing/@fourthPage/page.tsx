import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";

const FourthPage = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 8000);
  });
  await promise;
  return <ParallelRoutePageContent pageName="Four" timeToLoad={8} />;
};

export default FourthPage;
