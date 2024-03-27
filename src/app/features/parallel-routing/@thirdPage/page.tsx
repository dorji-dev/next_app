import ParallelRoutePageContent from "@/components/features/parallel-routing/parallel-route-content";

const ThirdPage = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 6000);
  });
  await promise;
  return <ParallelRoutePageContent pageName="Three" timeToLoad={6} />;
};

export default ThirdPage;
