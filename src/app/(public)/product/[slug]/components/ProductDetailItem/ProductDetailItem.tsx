import type { IProduct, IProductVariant } from "@/src/types";
import ProductDetailGallery from "./components/ProductDetailGallery/ProductDetailGallery";
import ProductDetailInfo from "./components/ProductDetailInfo/ProductDetailInfo";

interface IProps {
  product: IProduct;
  variants: IProductVariant[];
}
function ProductDetailItem({ product, variants }: IProps) {
  return (
    <div className="grid grid-cols-12 gap-16">
      <div className="col-span-7">
        <ProductDetailGallery product={product} />
      </div>

      <div className="col-span-5">
        <ProductDetailInfo product={product} variants={variants} />
      </div>
    </div>
  );
}

export default ProductDetailItem;
