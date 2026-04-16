"use client";
import { useWishlistStore } from "@/src/store/useWishlistStore";
import { useState } from "react";
import ProductItem from "../product/components/ProductItem/ProductItem";

function LikePage() {
  const { wishlist } = useWishlistStore();

  return (
    <div>
      <div className="p-16">
        <h1 className="text-6xl uppercase font-bold tracking-tight text-[#323233] mb-6">
          Sản phẩm yêu thích ({wishlist.length})
        </h1>
        <p className="text-lg text-[#323233] font-light leading-relaxed">
          Lưu giữ những thiết kế tâm đắc dành riêng cho phong cách của bạn.
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-stone-400">Danh sách trống.</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-x-10 gap-y-20">
          {wishlist.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default LikePage;
