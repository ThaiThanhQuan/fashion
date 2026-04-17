import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { COLLECTIONS_DATA } from "../../../collection/data";

function NewCollection() {
  return (
    <div className="container py-(--padding-y)">
      {COLLECTIONS_DATA.slice(0, 1).map((item) => (
        <div key={item.id} className="grid grid-cols-12 gap-8">
          <div className="col-span-8 flex flex-col items-center justify-center bg-[#f6f3f2] p-12 border border-dashed border-[#b2b2b14d]">
            <Sparkles color="#b2b2b1" className="mb-6" />
            <div className="text-center max-w-sm">
              <h4 className="text-xl font-bold mb-4">Khám Phá Thêm</h4>
              <p className="text-[#5f5f5f] text-sm mb-8 leading-relaxed">
                Tiếp tục hành trình tìm kiếm phong cách riêng với các bộ sưu tập
                mới nhất từ Avenue Noir.
              </p>

              <Link
                href={"/collection"}
                className="inline-block border-b border-[#323233] pb-1 text-sm font-bold tracking-widest uppercase hover:text-(--primary-color) hover:border-(--primary-color) transition-all"
              >
                Xem Bộ Sưu Tập Mùa Hè
              </Link>
            </div>
          </div>

          <div className="col-span-4">
            {item.product.slice(0, 1).map((item) => (
              <div key={item.id} className="relative group cursor-pointer ">
                <div className="mb-4 relative overflow-hidden">
                  <Link href={`/product/${item.slug}`}>
                    <Image
                      src={item.thumbnail}
                      width={400}
                      height={400}
                      alt=""
                      className="object-cover w-full duration-1000 ease-out group-hover:scale-105 "
                    />
                  </Link>
                </div>

                <div className=" mb-4">
                  <h3 className="text-[16px] tracking-tight uppercase ">
                    {item.title}
                  </h3>
                  <p className="text-[15px]font-medium mt-1 text-(--primary-color)">
                    ${item.price.toLocaleString("de-DE")}
                  </p>
                </div>

                <Link
                  href={`/product/${item.slug}`}
                  className="w-full border flex items-center justify-center border-[#b2b2b133] py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#323233] hover:text-white transition-all duration-300"
                >
                  Thêm vào túi
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewCollection;
