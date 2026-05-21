import { productService } from "@/src/services";
import TrendProduct from "./components/TrendProduct/TrendProduct";

async function Trend() {
  const res = await productService.getFeatured({ page: 0, size: 4 });
  const products = res?.result?.content ?? [];

  console.log('products: ',products)

  return (
    <div className=" py-(--padding-y) bg-[#f6f3f2]">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-5xl font-extrabold tracking-tighter uppercase">
            Xu Hướng
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-(--padding-x)">
        {products.map((item) => (
          <TrendProduct key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Trend;
