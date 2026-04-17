import { images } from "@/src/assets/images";
import Image from "next/image";

function Branding() {
  return (
    <div className="sticky top-0 h-screen">
      <div className="relative w-full h-full">
        <Image
          src={images.login}
          alt="High fashion editorial photography"
          fill
          className="object-cover grayscale border-none"
        />

        {/* Thụt vào 5% chiều cao và 10% chiều rộng */}
        <div className="absolute top-[10%] bottom-[25%] left-[25%] right-[25%] border-[0.5px] border-white/40 pointer-events-none"></div>

        <div className="absolute bottom-16 left-16 right-16">
          <p className=" text-[#faf7f6] text-5xl tracking-tighter leading-none italic mb-4">
            Thẩm mỹ vượt thời gian.
          </p>
          <p className="text-[#faf7f6cc] text-sm tracking-widest uppercase max-w-md">
            Khám phá thế giới thời trang cao cấp được tuyển chọn riêng cho bạn.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Branding;
