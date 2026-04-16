import { useCartStore } from "@/src/store/useCartStore";
import { ShieldCheck, Truck } from "lucide-react";

function OrderSummary() {
  const { items } = useCartStore();
  const total = items.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
  const vat = total * 0.1;
  const grandTotal = total + vat;

  return (
    <div className="bg-[#f6f3f2] p-12 sticky top-32">
      <h2 className="text-2xl font-bold tracking-tighter mb-10">
        Tóm Tắt Đơn Hàng
      </h2>

      <div className="space-y-6 mb-12">
        <div className="flex justify-between text-sm uppercase tracking-wider text-[#5f5f5f]">
          <span>Tạm Tính</span>
          <span className="text-[#323233] font-medium">
            ${total.toLocaleString("de-DE")}
          </span>
        </div>

        <div className="flex justify-between text-sm uppercase tracking-wider text-[#5f5f5f]">
          <span>Giao Hàng</span>
          <span className="text-[#323233] font-medium">Miễn Phí</span>
        </div>

        <div className="flex justify-between text-sm uppercase tracking-wider text-[#5f5f5f]">
          <span>Thuế Ước Tính (10%)</span>
          <span className="text-[#323233] font-medium">
            $ {vat.toLocaleString("de-DE")}
          </span>
        </div>

        <div className="pt-6 border-t border-[#b2b2b133] flex justify-between items-baseline">
          <span className="text-lg font-bold tracking-tight">Tổng Cộng</span>
          <span className="text-3xl font-black tracking-tighter">
            ${grandTotal.toLocaleString("de-DE")}
          </span>
        </div>
      </div>

      <button className="w-full bg-[#5f5e5e] py-6 text-[#faf7f6] font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#535252] transition-all duration-500 transform hover:-translate-y-1">
        Tiến Hành Thanh Toán
      </button>

      <div className="mt-10 flex flex-col gap-4">
        <div className="flex items-center gap-4 text-[#5f5f5f]">
          <ShieldCheck size={20} />
          <p className="text-[10px] uppercase tracking-widest">
            Đảm Bảo Chính Hãng
          </p>
        </div>

        <div className="flex items-center gap-4 text-[#5f5f5f]">
          <Truck size={20} />
          <p className="text-[10px] uppercase tracking-widest">
            Giao Hàng Cao Cấp Có Bảo Hiểm
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
