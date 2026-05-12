import { productService } from "@/src/services";
import RelatedProductsClient from "./components/RelatedProductsClient/RelatedProductsClient";

interface IProps {
    productId: string;
}

async function RelatedProducts({ productId }: IProps) {
    const res = await productService.getRelated(productId, { page: 0, size: 8 });
    const products = res?.result?.content ?? [];

    if (products.length === 0) return null;

    return <RelatedProductsClient products={products} />;
}

export default RelatedProducts;