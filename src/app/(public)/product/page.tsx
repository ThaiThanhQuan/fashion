import FilterSection from "./components/FilterSection/FilterSection";
import ViewMore from "./components/ViewMore/ViewMore";
import { ProductMockData } from "./data";
import ProductHeader from "./components/ProductsHeader/ProductHeader";
import ProductItem from "./components/ProductItem/ProductItem";
import ButtonViewMore from "@/src/components/ButtonViewMore/ButtonViewMore";

function CollectionsPage() {
  return (
    <div className="">
      <ProductHeader />

      <div className="px-(--padding-x) grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <FilterSection />
        </div>
        <div className="col-span-9">
          <div className=" grid grid-cols-3 gap-x-12 gap-y-24 [&>div:nth-child(3n-1)]:translate-y-12">
            {ProductMockData.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center py-(--padding-y) text-center">
        <ButtonViewMore
          className="hover:bg-[#323233] hover:text-white"
          title="Xem thêm sản phẩm"
        />
        <ViewMore />
      </div>
    </div>
  );
}

export default CollectionsPage;
