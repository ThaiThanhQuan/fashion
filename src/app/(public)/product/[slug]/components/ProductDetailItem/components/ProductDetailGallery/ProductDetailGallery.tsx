"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { IProductItem } from "@/src/app/(public)/product/data";
import { useEffect, useState } from "react";

interface IProps {
  product: IProductItem;
}
function ProductDetailGallery({ product }: IProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Cập nhật trạng thái ảnh đang xem khi trượt carousel
  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex gap-6">
      {/* BÊN TRÁI: Danh sách ảnh nhỏ (Thumbnail) */}
      <div className="flex flex-col gap-3 w-20 ">
        {product.gallery.map((src, index) => (
          <div
            key={index}
            onClick={() => api?.scrollTo(index)} // Click là trượt ảnh lớn
            className={`relative aspect-3/4 cursor-pointer transition-all duration-300 ${
              current === index
                ? "opacity-100 ring-1 ring-black"
                : "opacity-40 hover:opacity-70"
            }`}
          >
            <Image src={src} alt="thumb" fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* BÊN PHẢI: Ảnh lớn dùng Shadcn Carousel */}
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {product.gallery.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-4/3 w-full ">
                <Image
                  src={src}
                  alt="product"
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default ProductDetailGallery;
