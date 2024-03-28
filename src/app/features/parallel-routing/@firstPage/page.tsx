import { fakeAPI } from "@/actions/parallel-route";
import PageContent from "./page-content";

// force the page to dynamic rendering via searchParams access
const FirstPage = async ({
  searchParams,
}: {
  searchParams: { value: string };
}) => {
  await fakeAPI(2000, searchParams.value);
  return <PageContent />;
};

export default FirstPage;
