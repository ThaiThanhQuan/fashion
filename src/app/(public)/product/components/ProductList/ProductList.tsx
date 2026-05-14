'use client'
import ButtonViewMore from "@/src/components/ButtonViewMore/ButtonViewMore";
import ProductItem from "../../../../../components/ProductItem/ProductItem";
import ViewMore from "./components/ViewMore/ViewMore";
import { IProduct, IProductFilter } from "@/src/types";
import { useState, useEffect } from "react";
import { productService } from "@/src/services";

interface IProps {
    initialProducts: IProduct[]
    totalElements: number
    filter: IProductFilter
}

function ProductList({ initialProducts, totalElements, filter }: IProps) {
    const [products, setProducts] = useState<IProduct[]>(initialProducts);
    const [total, setTotal] = useState(totalElements);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const hasMore = products.length < total;
    const isFiltering = Object.keys(filter).length > 0;

    const buildParams = (pageNumber: number): IProductFilter => {
        const { productSize, ...restFilter } = filter;
        return {
            ...restFilter,
            ...(productSize && { size: productSize }),
            page: pageNumber,
            pageSize: 15,
        } as unknown as IProductFilter;
    };

    useEffect(() => {
        if (!isFiltering) {
            setProducts(initialProducts);
            setTotal(totalElements);
            setPage(0);
            return;
        }

        const fetchFiltered = async () => {
            try {
                setLoading(true);
                const res = await productService.filter(buildParams(0));
                if (res?.result) {
                    setProducts(res.result.content);
                    setTotal(res.result.totalElements);
                    setPage(0);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchFiltered();
    }, [filter]);

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
                <ViewMore current={products.length} total={total} />
            </div>
        </div>
    );
}

export default ProductList;