import ProductItem from "@/src/components/ProductItem/ProductItem";
import { searchService } from "@/src/services/search.service";
import Link from "next/link";

interface IProps {
    query: string;
}

async function SearchProduct({ query }: IProps) {
    if (!query) return null;

    const res = await searchService.search(query);
    const products = res?.result?.products ?? [];

    if (products.length === 0) return null;

    return ( 
        <div>
            <div className="container flex items-center justify-between px-8 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter font-headline">Sản phẩm ({products.length})</h2>
                <Link href={'/product'} className="text-xs tracking-widest underline uppercase transition-colors font-label  hover:text-(--primary-color) underline-offset-8">Xem tất cả</Link>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-24 [&>div:nth-child(3n-1)]:translate-y-0 md:[&>div:nth-child(3n-1)]:translate-y-12">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
     );
}

export default SearchProduct;