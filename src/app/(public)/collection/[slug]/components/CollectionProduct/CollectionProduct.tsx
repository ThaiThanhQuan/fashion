"use client";
import Link from "next/link";
import { ICollectionItem } from "../../../data";
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

interface IProps {
  collection: ICollectionItem;
}

function CollectionProduct({ collection }: IProps) {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="pb-(--padding-y) ">
      <div className="mb-16 flex justify-between gap-6 items-end">
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
          loop: true,
          align: "start",
          slidesToScroll: 1,
        }}
        className="w-full relative "
      >
        <CarouselContent className="-ml-6">
          {collection.product.map((product, index) => (
            <CarouselItem key={index} className="pl-6 basis-1/4">
              <Link href={`/product/${product.slug}`}>
                <div className="relative w-full aspect-3/4 mb-6 group ">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover duration-1000 ease-out group-hover:scale-105 "
                  />

                  <ButtonAddProduct />
                </div>

                <h3 className="text-sm font-bold tracking-tight mb-1">
                  {product.title}
                </h3>
                <p className="text-[#5f5f5f] text-sm">
                  ${product.price.toLocaleString("de-DE")}
                </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

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
      </Carousel>
    </div>
  );
}

export default CollectionProduct;
