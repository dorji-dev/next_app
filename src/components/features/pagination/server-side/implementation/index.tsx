import { DataTable } from "@/components/shared/data-table";
import { getProducts } from "@/services/get-products";
import { productColumns } from "./product-table-columns";

const PAGE_SIZE = 12;

const ServerSidePaginationImplementation = async () => {
  const productsResponse = await getProducts(undefined, PAGE_SIZE);

  if (!productsResponse) {
    return <div>There was an error fetching data</div>;
  }

  return (
    <div>
      <DataTable data={productsResponse.products} columns={productColumns} columnsToHide={['description']} />
    </div>
  );
};

export default ServerSidePaginationImplementation;
