import { IProduct } from "@/src/types";
import ProductMeta from "./components/ProductMeta/ProductMeta";
import ButtonAddToCart from "./components/ButtonAddToCart/ButtonAddToCart";
import ButtonWishlist from "./components/ButtonWishlist/ButtonWishlist";

interface IProps {
    product: IProduct;
}

function ProductDetailInfo({ product }: IProps) {
    return (
        <div>
            <ProductMeta product={product} />

            <div className="flex flex-col gap-4 mt-10">
                <ButtonAddToCart product={product} />
                <ButtonWishlist productId={product.id}/>
            </div>

        </div>
    );
}

export default ProductDetailInfo;