import PageContent from "./page-content";

// force the page to dynamic rendering via searchParams access
const FirstPage = async ({
  searchParams,
}: {
  searchParams: { value: string };
}) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(searchParams.value);
    }, 2000);
  });
  await promise;
  return <PageContent />;
};

export default FirstPage;
