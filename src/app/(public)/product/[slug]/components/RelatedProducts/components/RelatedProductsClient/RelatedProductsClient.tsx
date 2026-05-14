"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import ButtonAddProduct from "@/src/components/ButtonAddProduct/ButtonAddProduct";
import { IProduct } from "@/src/types";
import ProductItem from "@/src/components/ProductItem/ProductItem";

interface IProps {
    products: IProduct[];
}

function RelatedProductsClient({ products }: IProps) {
    const [api, setApi] = useState<CarouselApi>();

    const getBasis = () => {
        if (products.length === 1) return "basis-full";
        if (products.length === 2) return "basis-1/2";
        if (products.length === 3) return "basis-1/3";
        return "basis-1/4"; 
    };

    return (
        <div className="py-(--padding-y) container">
            <h2 className="mb-12 text-2xl font-extrabold tracking-tighter uppercase">
                Sản phẩm liên quan
            </h2>

            <Carousel
                setApi={setApi}
                opts={{
                    loop: products.length > 4, 
                    align: "start",
                    slidesToScroll: 1,
                }}
                className="relative w-full"
            >
                <CarouselContent className="-ml-6">
                    {products.map((product, index) => (
                        <CarouselItem key={index} className={`pl-6 ${getBasis()}`}>
                           <ProductItem product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Chỉ hiện nút prev/next khi > 4 sản phẩm */}
                {products.length > 4 && (
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

export default RelatedProductsClient;