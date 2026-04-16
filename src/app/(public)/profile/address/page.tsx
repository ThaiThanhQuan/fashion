import { Plus } from "lucide-react";
import AddressInfo from "./component/AddressInfo/AddressInfo";

function AddressPage() {
  return (
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

        <button className="bg-[#5f5e5e] h-15 text-[#faf7f6] px-8 font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-[#535252] transition-all ">
          <Plus />
          Thêm địa chỉ mới
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-6">
        <AddressInfo />
      </div>

      <div className=" bg-[#f6f3f2] overflow-hidden flex md:h-80 group">
        <div className="p-10 flex flex-col justify-center ">
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

        <div>
          <iframe
            src="https://maps.google.com/maps/contrib/100968979814345776530"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AddressPage;
