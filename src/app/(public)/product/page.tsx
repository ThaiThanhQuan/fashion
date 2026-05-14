import ProductHeader from "./components/ProductsHeader/ProductHeader";
import { productService } from "@/src/services";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";

async function CollectionsPage() {
    const res = await productService.getAll({ page: 0, size: 4 });
    const products = res?.result?.content ?? [];
    const totalElements = res?.result?.totalElements ?? 0;

  return (
    <div>
      <ProductHeader />
      <ProductCatalog 
          initialProducts={products}
          totalElements={totalElements}
      />
    </div>
  );
}

export default CollectionsPage;
