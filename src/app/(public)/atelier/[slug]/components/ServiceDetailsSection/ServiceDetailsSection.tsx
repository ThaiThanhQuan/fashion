import Link from "next/link";
import { ICategoryServiceItem } from "../../../data";

interface IProps {
  service: ICategoryServiceItem;
}
function ServiceDetailsSection({ service }: IProps) {
  return (
    <div className="bg-[#f0eded]">
      <div className="py-(--padding-y) container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest border-b border-[#b2b2b14d] pb-4">
                Chi Phí Đầu Tư
              </h3>
              <ul className="space-y-6">
                {service.investment.map((item, index) => (
                  <li key={index} className="flex justify-between items-end ">
                    <span className="font-label text-sm uppercase text-[#5f5f5f]">
                      {item.item}
                    </span>
                    <span className="font-bold text-lg">
                      {item.price
                        ? `$ ${item.price.toLocaleString("de-DE")}`
                        : "Đinh giá riêng"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest border-b border-[#b2b2b14d] pb-4">
                Thời gian
              </h3>
              <ul className="space-y-6">
                {service.timeline.map((item, index) => (
                  <li key={index} className="flex justify-between items-end ">
                    <span className="font-label text-sm uppercase text-[#5f5f5f]">
                      {item.label}
                    </span>
                    <span className="font-bold text-lg">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-24 text-center">
            <p className="mb-10 text-[#5f5f5f] italic font-light">
              Giá cuối cùng phụ thuộc vào loại vải và các yêu cầu tùy chỉnh cá
              nhân.
            </p>

            <Link
              href="/atelier#service"
              className="inline-block bg-[#5f5e5e] text-[#faf7f6] px-16 py-6 text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#535252] transition-all shadow-xl shadow-[#5f5e5e1a]/10"
            >
              Đặt Lịch Tư Vấn Ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsSection;
