import { productService } from "@/src/services";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ProductDetailItem from "./components/ProductDetailItem/ProductDetailItem";

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {

    const { slug } = await params;
    const res = await productService.getBySlug(slug);
    const product = res?.result


  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  console.log('product: ',product)
  return (
    <div className="px-(--padding-x) pt-2.5 pb-(--padding-y)">
      <Breadcrumbs product={product} />
      <ProductDetailItem product={product} />
    </div>
  );
}
