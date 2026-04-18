import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useWishlistStore } from "@/src/store/useWishlistStore";
import { IProductItem } from "../../../product/data";

interface IProps {
  item: IProductItem;
}

function LikeProductItem({ item }: IProps) {
  const { removeFromWishlist } = useWishlistStore();

  return (
    <div className="relative group cursor-pointer ">
      <button
        onClick={() => removeFromWishlist(item.id)}
        className="absolute top-2 right-2 z-10 p-2 bg-[#fcf9f866]  text-[#323233] hover:text-[#9f403d] transition-colors cursor-pointer"
      >
        <X size={24} />
      </button>
      <div className="mb-4 relative overflow-hidden">
        <Link href={`/product/${item.slug}`}>
          <Image
            src={item.thumbnail}
            width={400}
            height={400}
            alt=""
            className="object-cover w-full duration-1000 ease-out group-hover:scale-105 "
          />
        </Link>
      </div>

      <div className=" mb-4">
        <h3 className="text-[16px] tracking-tight uppercase ">{item.title}</h3>
        <p className="text-[15px]font-medium mt-1 text-(--primary-color)">
          ${item.price.toLocaleString("de-DE")}
        </p>
      </div>

      <Link
        href={`/product/${item.slug}`}
        className="w-full  flex items-center justify-center border border-[#b2b2b133] py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#323233] hover:text-white transition-all duration-300"
      >
        Thêm vào túi
      </Link>
    </div>
  );
}

export default LikeProductItem;
