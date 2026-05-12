import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/src/types";

interface IProps {
  product: IProduct;
}

function CollectionPreviewProduct({ product }: IProps) {

  return (
    <div key={product.id} className="relative group cursor-pointer ">
      <div className="mb-4 relative overflow-hidden">
        <Link href={`/product/${product.slug}`}>
          {product.thumbnail ? ( <Image
            src={product.thumbnail}
            width={400}
            height={400}
            alt=""
            className="object-cover w-full duration-1000 ease-out group-hover:scale-105 "
          /> ) :  (
            <div className="h-full w-full bg-[#e6e1df]" />
          )}
        </Link>
      </div>

      <div className=" mb-4">
        <h3 className="text-[16px] tracking-tight uppercase ">
          {product.title}
        </h3>
        <p className="text-[15px]font-medium mt-1 text-(--primary-color)">
          ${product.price.toLocaleString("de-DE")}
        </p>
      </div>

      <Link
        href={`/product/${product.slug}`}
        className="w-full border flex items-center justify-center border-[#b2b2b133] py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#323233] hover:text-white transition-all duration-300"
      >
        Thêm vào túi
      </Link>
    </div>
  );
}

export default CollectionPreviewProduct;
