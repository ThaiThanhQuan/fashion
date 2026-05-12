"use client";
import LikeEmpty from "./components/LikeEmpty/LikeEmpty";
import { useWishlistStore } from "@/src/store/useWishlistStore";
import { useEffect } from "react";
import ProductItem from "../../../../../components/ProductItem/ProductItem";


function LikeProductsGrid() {
    const { wishlist, fetchWishlist } = useWishlistStore();

    useEffect(() => {
        fetchWishlist();
    }, [fetchWishlist]);

    return (
        <div>
            {wishlist.length === 0 ? (
                <LikeEmpty />
            ) : (
                <div className="grid grid-cols-3 gap-x-12 gap-y-24 [&>div:nth-child(3n-1)]:translate-y-12">
                    {wishlist.map((item) => (
                        <div key={item.id} className="relative">
                            <ProductItem product={item.product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LikeProductsGrid;
