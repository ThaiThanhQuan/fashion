"use client";
import Link from "next/link";
import Image from "next/image";
import ButtonAddProduct from "@/src/components/ButtonAddProduct/ButtonAddProduct";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ICollection } from "@/src/types";
import ProductItem from "@/src/components/ProductItem/ProductItem";

interface IProps {
  collection: ICollection;
}

function CollectionProduct({ collection }: IProps) {
  const [api, setApi] = useState<CarouselApi>();

   const getBasis = () => {
        if (collection.products.length === 1) return "basis-full";
        if (collection.products.length === 2) return "basis-1/2";
        if (collection.products.length === 3) return "basis-1/3";
        return "basis-1/4"; 
    };

  return (
    <div className="pb-(--padding-y) ">
      <div className="flex items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl font-bold tracking-tight">
            Sản Phẩm Từ Bộ Sưu Tập
          </h2>
          <p className="text-[#5f5f5f] mt-2">
            Tuyển chọn những thiết kế đặc sắc nhất đã sẵn sàng để sở hữu.
          </p>
        </div>
        <Link
          href={"/product"}
          className="text-sm font-bold border-b-2 border-[#323233] pb-1 hover:text-(--primary-color) hover:border-(--primary-color) transition-all uppercase"
        >
          Xem các sản phẩm khác
        </Link>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          loop: collection.products.length > 4, 
          align: "start",
          slidesToScroll: 1,
        }}
        className="relative w-full "
      >
        <CarouselContent className="-ml-6">
          {collection.products.map((product, index) => (
            <CarouselItem key={index} className={`pl-6 ${getBasis()}`}>
                <ProductItem product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {collection.products.length > 4 && (    
          <>
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute -left-15 top-[40%] z-50 rounded-none bg-[#f6f3f2]/80 hover:bg-[#f6f3f2] h-10 w-10 flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute -right-15 top-[40%] z-50 rounded-none bg-[#f6f3f2]/80 hover:bg-[#f6f3f2] h-10 w-10 flex items-center justify-center cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </Carousel>
    </div>
  );
}

export default CollectionProduct;
