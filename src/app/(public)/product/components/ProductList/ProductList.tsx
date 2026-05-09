'use client'
import ButtonViewMore from "@/src/components/ButtonViewMore/ButtonViewMore";
import ProductItem from "./components/ProductItem/ProductItem";
import ViewMore from "./components/ViewMore/ViewMore";
import { IProduct } from "@/src/types";
import { useState } from "react";
import { productService } from "@/src/services";

interface IProps{
    initialProducts: IProduct[]
    totalElements: number
}

function ProductList({initialProducts, totalElements}:  IProps) {
    const [products, setProducts] = useState<IProduct[]>(initialProducts);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const hasMore = products.length < totalElements;

    const handleLoadMore = async () => {
        try {
            setLoading(true);
            const nextPage = page + 1;
            const res = await productService.getAll({
                page: nextPage,
                size: 4
            });

            if (res?.result?.content) {
                setProducts(prev => [...prev, ...res.result.content]);
                setPage(nextPage);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };


    return ( 
        <div>
            <div className="grid grid-cols-4 gap-x-12 gap-y-24 [&>div:nth-child(3n-1)]:translate-y-12">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          <div className="container flex flex-col items-center py-(--padding-y) text-center">
           {hasMore && (
                    <ButtonViewMore
                        className="hover:bg-[#323233] hover:text-white"
                        title={loading ? "Đang tải..." : "Xem thêm sản phẩm"}
                        onClick={handleLoadMore}
                        disabled={loading}
                    />
                )}
                <ViewMore
                    current={products.length}
                    total={totalElements}
                />
        </div>
        </div>
     );
}

export default ProductList;