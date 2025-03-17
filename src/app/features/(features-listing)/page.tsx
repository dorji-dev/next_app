import AppBreadCrumb from "@/components/app-breadcrumb";
import FeaturesListing from "@/components/features-listing";
import SearchFeatures from "@/components/search-features";
import { heroFeatures } from "@/config/hero-features";

const FeaturesPage = () => {
  return (
    <div className="space-y-[20px] my-[30px]">
      <div className="flex justify-center">
        <AppBreadCrumb />
      </div>
      <h4 className="text-center font-bold">Features and Demos</h4>
      <div className="my-[30px]!">
        <SearchFeatures />
      </div>
      <main>
        <FeaturesListing features={heroFeatures} />
      </main>
    </div>
  );
};

export default FeaturesPage;
