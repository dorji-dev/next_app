import ClientSidePaginationImplementation from "@/components/features/pagination/client-side/implementation";
import FeatureImplementationTemplate from "@/components/templates/feature-implementation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagination with client side data fetching",
  description:
    "Implementation pagination in NextJs app router with client side data fetching",
};

const ClientSidePaginationPage = () => {
  return (
    <FeatureImplementationTemplate
      apiLink="https://dummyjson.com/"
      resourceLink="https://github.com/dorji-dev/next_app/blob/main/src/app/features/(implementations)/pagination/client-side/(page)/page.tsx"
      longFeatureTitle="Pagination with client side data fetching with useSWR hook"
    >
      <ClientSidePaginationImplementation />
    </FeatureImplementationTemplate>
  );
};

export default ClientSidePaginationPage;
