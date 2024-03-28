import { fakeAPI } from "@/actions/parallel-route";
import PageContent from "./page-content";

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
  return <PageContent />;
};

export default FirstPage;
