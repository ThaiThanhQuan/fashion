import Link from "next/link";
import { ICollectionItem } from "../../../data";
import Image from "next/image";
import ButtonAddProduct from "@/src/components/ButtonAddProduct/ButtonAddProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface IProps {
  collection: ICollectionItem;
}

function CollectionProduct({ collection }: IProps) {
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
        opts={{
          loop: true,
          align: "start",
          slidesToScroll: 1,
        }}
        className="w-full "
      >
        <CarouselContent className="-ml-6">
          {collection.gallery.map((item, index) => (
            <CarouselItem key={index} className="pl-6 basis-1/4">
              <div className="relative aspect-3/4 mb-6 group ">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover duration-1000 ease-out group-hover:scale-105 "
                />

                <ButtonAddProduct />
              </div>

              <h3 className="text-sm font-bold tracking-tight mb-1">
                {item.label}
              </h3>
              <p className="text-[#5f5f5f] text-sm">{item.price} VND</p>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className=" rounded-none border-none bg-[#f6f3f2]/80 hover:bg-[#f6f3f2] shadow-none h-10 w-10 cursor-pointer" />
        <CarouselNext className=" rounded-none border-none bg-[#f6f3f2]/80 hover:bg-[#f6f3f2] shadow-none h-10 w-10 cursor-pointer " />
      </Carousel>
    </div>
  );
}

export default CollectionProduct;
