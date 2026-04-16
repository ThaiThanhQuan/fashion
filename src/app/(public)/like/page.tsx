"use client";
import { useWishlistStore } from "@/src/store/useWishlistStore";
import LikeProductItem from "./components/LikeProductItem/LikeProductItem";
import NewCollection from "./components/NewCollection/NewCollection";
import { COLLECTIONS_DATA } from "../collection/data";

function LikePage() {
  const { wishlist } = useWishlistStore();
  return (
    <div className="p-16">
      <div className="mb-5">
        <h1 className="text-4xl uppercase font-bold tracking-tight text-[#323233] mb-6">
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
        <div className=" grid grid-cols-3 gap-x-12 gap-y-24 [&>div:nth-child(3n-1)]:translate-y-12 ">
          {wishlist.map((item, index) => (
            <LikeProductItem key={index} item={item} />
          ))}
        </div>
      )}
      <div className="container py-(--padding-y)">
        {COLLECTIONS_DATA.slice(0, 1).map((item, index) => (
          <NewCollection key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default LikePage;
