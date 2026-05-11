import FilterSection from "./components/FilterSection/FilterSection";
import ProductHeader from "./components/ProductsHeader/ProductHeader";
import { productService } from "@/src/services";
import ProductList from "./components/ProductList/ProductList";

async function CollectionsPage() {
    const res = await productService.getAll({ page: 0, size: 4 });
    const products = res?.result?.content ?? [];
    const totalElements = res?.result?.totalElements ?? 0;

  return (
    <div>
      <ProductHeader />

      <div className="px-(--padding-x) grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <FilterSection />
        </div>
        <div className="col-span-9">
             <ProductList
                  initialProducts={products}
                  totalElements={totalElements}
              />
        </div>
      </div>
    </div>
  );
}

export default CollectionsPage;
