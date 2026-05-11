import ProductInfo from "@/src/components/ProductInfo/ProductInfo";
import Image from "next/image";
import ButtonAddProduct from "@/src/components/ButtonAddProduct/ButtonAddProduct";
import Link from "next/link";
import { IProduct } from "@/src/types";
import ButtonLike from "./components/ButtonLike/ButtonLike";

interface IProps {
  product: IProduct;
}

function ProductItem({ product }: IProps) {
  return (
    <div className="relative flex flex-col cursor-pointer group ">
      <div className="relative mb-8 overflow-hidden h-100">
        <Link href={`/product/${product.slug}`}>
         {product.thumbnail ? (
              <Image
                  src={product.thumbnail}
                  fill
                  alt={product.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-auto duration-1000 ease-out grayscale group-hover:scale-105 group-hover:grayscale-0"
              />
          ) : (
              <div className="w-full h-full bg-[#e6e1df]" />
          )}
          <ButtonAddProduct />
        </Link>

          <div className="absolute flex items-center justify-center w-10 h-10 transition-opacity opacity-0 cursor-pointer top-6 right-6 bg-white/20 backdrop-blur-md group-hover:opacity-100 disabled:opacity-50">
              <ButtonLike productId={product.id}/>
          </div>
      </div>

      <ProductInfo product={product} className="text-(--primary-color)" />
    </div>
  );
}

export default ProductItem;
