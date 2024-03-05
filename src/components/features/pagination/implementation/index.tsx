import { DataTable } from "@/components/shared/data-table";
import { userColumns } from "./table-column";
import { getProducts } from "@/services/get-products";

const PAGE_SIZE = 20;

const PaginationImplementation = async () => {
  const products = await getProducts(undefined, PAGE_SIZE);
  
  return (
    <div>
      <DataTable columns={userColumns} data={products} />
    </div>
  );
};

export default PaginationImplementation;
