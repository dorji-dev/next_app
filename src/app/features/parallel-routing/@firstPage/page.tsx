import PageContent from "./page-content";

const FirstPage = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
  await promise;
  return <PageContent/>;
};

export default FirstPage;
