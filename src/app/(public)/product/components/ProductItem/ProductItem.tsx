"use client";
import ProductInfo from "@/src/components/ProductInfo/ProductInfo";
import Image from "next/image";
import ButtonAddProduct from "@/src/components/ButtonAddProduct/ButtonAddProduct";
import { Heart } from "lucide-react";
import { IProductItem } from "../../data";
import Link from "next/link";
import { useWishlistStore } from "@/src/store/useWishlistStore";
import { toast } from "sonner";

interface IProps {
  item: IProductItem;
}

function ProductItem({ item }: IProps) {
  // const router = useRouter();

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();

  const isLiked = wishlist.some((wishItem) => wishItem.id === item.id);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLiked) {
      removeFromWishlist(item.id);
      toast.error("Đã xóa khỏi danh sách yêu thích", {
        position: "top-center",
        duration: 3000,
      });
    } else {
      addToWishlist(item);
      toast.success("Đã thêm vào danh sách yêu thích", {
        position: "top-center",
        duration: 3000,
      });
    }
  };
  return (
    <div className="relative group flex flex-col cursor-pointer ">
      <div className="mb-8 relative aspect-3/4 overflow-hidden ">
        <Link href={`/product/${item.slug}`}>
          <Image
            src={item.thumbnail}
            fill
            alt=""
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-auto grayscale duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
          <ButtonAddProduct />
        </Link>

        <button
          onClick={handleLike}
          className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
        >
          {" "}
          <Heart
            size={24}
            color={isLiked ? "#ff0000" : "white"}
            fill={isLiked ? "#ff0000" : "none"}
            className="transition-colors duration-300"
          />
        </button>
      </div>

      <ProductInfo item={item} className="text-(--primary-color)" />
    </div>
  );
}

export default ProductItem;
