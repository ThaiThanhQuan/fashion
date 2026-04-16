"use client";
import { Plus } from "lucide-react";
import AddressInfo from "./component/AddressInfo/AddressInfo";
import { useState } from "react";
import AddressModal from "./component/AddressModal/AddressModal";

function AddressPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="p-16 bg-[#fcf9f8]">
        <div className="flex justify-between mb-16">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4">
              Sổ địa chỉ
            </h1>
            <p className="text-[#4f4f4f] max-w-lg leading-relaxed">
              Quản lý các địa chỉ giao hàng của bạn để có trải nghiệm thanh toán
              nhanh chóng và thuận tiện hơn tại Digital Couture.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-[#5f5e5e] h-15 text-[#faf7f6] px-8 font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-[#535252] transition-all "
          >
            <Plus />
            Thêm địa chỉ mới
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          <AddressInfo />
        </div>

        <div className=" bg-[#f6f3f2] overflow-hidden grid grid-cols-2 h-80 group">
          <div className="p-10 flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-(--primary-color) font-black mb-4">
              Vùng phủ sóng
            </span>
            <h4 className="text-2xl font-bold mb-4 tracking-tight leading-snug">
              Giao hàng toàn cầu <br />
              từ những kinh đô thời trang.
            </h4>
            <p className="text-[#5f5f5f] text-sm leading-relaxed max-w-sm mb-8">
              Dịch vụ vận chuyển hỏa tốc từ Paris, Milan và London trực tiếp đến
              cửa nhà bạn.
            </p>
          </div>

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197!2d106.697582!3d10.775658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed3635%3A0x103efbf68436056b!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2svn!4v1712852000000!5m2!1svi!2svn"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <AddressModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default AddressPage;
