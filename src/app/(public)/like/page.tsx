"use client";
import { useWishlistStore } from "@/src/store/useWishlistStore";
import LikeProductItem from "./components/LikeProductItem/LikeProductItem";
import NewCollection from "./components/NewCollection/NewCollection";
import LikeHeader from "./components/LikeHeader/LikeHeader";
import LikeEmpty from "./components/LikeEmpty/LikeEmpty";

function LikePage() {
  const { wishlist } = useWishlistStore();
  return (
    <div className="p-16">
      <LikeHeader />
      {wishlist.length === 0 ? <LikeEmpty /> : <LikeProductItem />}
      <NewCollection />
    </div>
  );
}

export default LikePage;
