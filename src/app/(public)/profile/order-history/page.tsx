import { images } from "@/src/assets/images";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

function OrderHistoryPage() {
  return (
    <div className="p-8 w-full">
      <div className="mb-8">
        <h4 className="font-headline text-sm font-bold uppercase tracking-widest">
          Đơn Hàng Gần Đây
        </h4>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between bg-[#f6f3f2] p-6">
          <div className="flex gap-6 items-center ">
            <div className="relative w-20 h-24 ">
              <Image
                src={images.collection}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-[10px] text-[#5f5f5f] block uppercase tracking-widest mb-1">
                Mã đơn #DC-88421
              </span>
              <h5 className="text-lg">Sơ Mi Lụa Ivory Thiết Kế</h5>
              <p className="text-xs text-[#5f5f5f]">
                Đã giao 12 tháng 10, 2023
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-[#1c1917] text-white text-[10px] uppercase tracking-widest font-bold">
              Đã Gửi
            </span>
            <EllipsisVertical color="#a8a29e" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryPage;
