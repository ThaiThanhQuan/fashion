import Image from "next/image";
import ProductInfo from "@/src/components/ProductInfo/ProductInfo";
import ButtonAddProduct from "@/src/components/ButtonAddProduct/ButtonAddProduct";
import { IProductItem } from "@/src/app/(public)/product/data";
import Link from "next/link";

interface IProps {
  item: IProductItem;
}

function TrendProduct({ item }: IProps) {
  return (
    <div className="bg-white p-8 group cursor-pointer transition-all duration-300 hover:-translate-y-2">
      {/* Image */}

      <Link href={`/product/${item.slug}`}>
        <div className="relative w-77.25 h-96.5 mb-6">
          <Image
            src={item.thumbnail}
            fill
            priority
            sizes="25vw"
            alt={item.title}
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          <ButtonAddProduct />
        </div>

        <ProductInfo item={item} className="text-gray-600" />
      </Link>
    </div>
  );
}

export default TrendProduct;
