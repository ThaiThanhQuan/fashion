import { useWishlistStore } from "@/src/store/useWishlistStore";

function LikeHeader() {
  const { wishlist } = useWishlistStore();

  return (
    <div className="mb-5">
      <h1 className="text-4xl uppercase font-bold tracking-tight text-[#323233] mb-6">
        Sản phẩm yêu thích ({wishlist.length})
      </h1>
      <p className="text-lg text-[#323233] font-light leading-relaxed">
        Lưu giữ những thiết kế tâm đắc dành riêng cho phong cách của bạn.
      </p>
    </div>
  );
}

export default LikeHeader;
