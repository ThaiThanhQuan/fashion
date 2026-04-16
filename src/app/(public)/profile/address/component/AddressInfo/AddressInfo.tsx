import { CircleCheck, MapPin, Pencil, Phone, Trash2 } from "lucide-react";

function AddressInfo() {
  return (
    <div className="bg-white p-10 flex flex-col justify-between group transition-all duration-300 border-l-4 border-(--primary-color) relative">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-6 text-[#333232]">
          Nguyễn Minh Anh
        </h3>

        <div className="flex items-center gap-2 bg-[#785a1a1a] text-(--primary-color) px-3 h-6 text-[10px] font-bold uppercase tracking-widest">
          <CircleCheck size={15} />
          <span>Mặc định</span>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <Phone size={20} color="#5f5f5f" />
          <span className="text-[#5f5f5f] text-sm tracking-wide">
            (+84) 902 123 456
          </span>
        </div>

        <div className="flex items-start gap-4">
          <MapPin size={20} color="#5f5f5f" />
          <span className="text-[#5f5f5f] text-sm leading-loose">
            Căn hộ 1502, Tòa nhà Landmark 81
            <br />
            720A Điện Biên Phủ, Phường 22, Quận Bình Thạnh
            <br />
            Thành phố Hồ Chí Minh
          </span>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-[#b2b2b11a] flex items-center gap-8">
        <button className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#323233] hover:text-(--primary-color) transition-colors flex items-center gap-2">
          <Pencil size={15} />
          <span>Chỉnh sửa</span>
        </button>

        <button className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#b2b2b1] hover:text-[#9f403d] transition-colors flex items-center gap-2">
          <Trash2 size={15} />
          <span>Xóa</span>
        </button>
      </div>
    </div>
  );
}

export default AddressInfo;
