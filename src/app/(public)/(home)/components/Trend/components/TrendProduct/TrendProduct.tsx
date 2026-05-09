import Image from "next/image";
import ProductInfo from "@/src/components/ProductInfo/ProductInfo";
import ButtonAddProduct from "@/src/components/ButtonAddProduct/ButtonAddProduct";
import Link from "next/link";
import { IProduct } from "@/src/types";

interface IProps {
  product: IProduct;
}

function TrendProduct({ product }: IProps) {
  return (
    <div className="p-8 transition-all duration-300 bg-white cursor-pointer group hover:-translate-y-2">
      {/* Image */}

      <Link href={`/product/${product.slug}`}>
        <div className="relative w-77.25 h-96.5 mb-6">
          {product.thumbnail ? (
            <Image
              src={product.thumbnail}
              fill
              priority
              sizes="25vw"
              alt={product.title}
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-[#e6e1df]" />
          )}

          <ButtonAddProduct />
        </div>

        <ProductInfo product={product}  />
      </Link>
    </div>
  );
}

export default TrendProduct;
