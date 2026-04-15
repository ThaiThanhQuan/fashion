import { ProductMockData } from "../data";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ProductDetailItem from "./components/ProductDetailItem/ProductDetailItem";

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const product = ProductMockData.find((item) => item.slug === slug);

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="px-(--padding-x) pt-2.5 pb-(--padding-y)">
      <Breadcrumbs product={product} />
      <ProductDetailItem product={product} />
    </div>
  );
}
