"use client";
import { useWishlistStore } from "@/src/store/useWishlistStore";
import LikeEmpty from "./components/LikeEmpty/LikeEmpty";
import LikeProductItem from "./components/LikeProductItem/LikeProductItem";

function LikeProductsGrid() {
  const { wishlist } = useWishlistStore();

  return (
    <div>
      {wishlist.length === 0 ? (
        <LikeEmpty />
      ) : (
        <div className=" grid grid-cols-3 gap-x-12 gap-y-24 [&>div:nth-child(3n-1)]:translate-y-12 ">
          {wishlist.map((item) => (
            <LikeProductItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default LikeProductsGrid;
