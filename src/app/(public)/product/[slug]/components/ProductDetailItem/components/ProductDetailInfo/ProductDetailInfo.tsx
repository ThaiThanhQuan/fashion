import type { IProduct, IProductVariant } from "@/src/types";
import ProductMeta from "./components/ProductMeta/ProductMeta";
import ButtonAddToCart from "./components/ButtonAddToCart/ButtonAddToCart";
import ButtonWishlist from "./components/ButtonWishlist/ButtonWishlist";

interface IProps {
    product: IProduct;
    variants: IProductVariant[];
}

function ProductDetailInfo({ product, variants }: IProps) {
    return (
        <div>
            <ProductMeta product={product} />

            <div className="flex flex-col gap-4 mt-10">
                <ButtonAddToCart product={product} variants={variants} />
                <ButtonWishlist productId={product.id}/>
            </div>

        </div>
    );
}

export default ProductDetailInfo;
