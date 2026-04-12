import ProductInfo from "@/src/components/ProductInfo/ProductInfo";
import Image from "next/image";
import { ICollectionsItem } from "../../data";
import ButtonAddProduct from "@/src/components/ButtonAddProduct/ButtonAddProduct";
import { Heart } from "lucide-react";

interface IProps {
  item: ICollectionsItem;
}

function CollectionsItem({ item }: IProps) {
  return (
    <div>
      <div className="relative group flex flex-col cursor-pointer ">
        <div className="mb-8 relative aspect-3/4 overflow-hidden ">
          <Image
            src={item.thumbnail}
            fill
            alt=""
            className="object-cover w-full h-auto grayscale duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
          />

          <ButtonAddProduct />

          <button className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
            {" "}
            <Heart size={24} color="white" />
          </button>
        </div>

        <ProductInfo item={item} className="text-(--primary-color)" />
      </div>
    </div>
  );
}

export default CollectionsItem;
