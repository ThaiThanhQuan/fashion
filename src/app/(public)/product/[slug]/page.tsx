import { productService, variantService } from "@/src/services";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ProductDetailItem from "./components/ProductDetailItem/ProductDetailItem";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;
    const res = await productService.getBySlug(slug);
    const product = res?.result


  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  const variantsRes = await variantService.getByProduct(product.id, { page: 0, size: 20 });
  const variants = variantsRes?.result?.content ?? [];

  console.log("variants", variants);

  return (
    <div className="px-(--padding-x) pt-2.5 pb-(--padding-y)">
      <Breadcrumbs product={product} />
      <ProductDetailItem product={product} variants={variants} />
      <RelatedProducts productId={product.id} />
    </div>
  );
}
