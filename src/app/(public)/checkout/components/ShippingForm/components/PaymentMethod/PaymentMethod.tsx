"use client";
import { useCheckoutStore } from "@/src/store/useCheckoutStore";

function PaymentMethod() {
  const { paymentMethod, setPaymentMethod } = useCheckoutStore();

  return (
    <div className="space-y-3 mb-8">
      <h3 className="text-xs font-bold uppercase tracking-widest">
        Phương thức thanh toán
      </h3>

      <label className="flex items-center gap-3 cursor-pointer border border-[#b2b2b14d] p-4 hover:bg-[#f6f3f2] transition-all">
        <input
          type="radio"
          name="paymentMethod"
          value="COD"
          checked={paymentMethod === "COD"}
          onChange={() => setPaymentMethod("COD")}
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-widest">
            Tiền mặt (COD)
          </p>
          <p className="text-[10px] text-[#5f5f5f] mt-1">
            Thanh toán khi nhận hàng
          </p>
        </div>
      </label>

      <label className="flex items-center gap-3 cursor-pointer border border-[#b2b2b14d] p-4 hover:bg-[#f6f3f2] transition-all">
        <input
          type="radio"
          name="paymentMethod"
          value="BANK_TRANSFER"
          checked={paymentMethod === "BANK_TRANSFER"}
          onChange={() => setPaymentMethod("BANK_TRANSFER")}
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-widest">
            Chuyển khoản (VNPay)
          </p>
          <p className="text-[10px] text-[#5f5f5f] mt-1">
            Thanh toán qua VNPay
          </p>
        </div>
      </label>
    </div>
  );
}

export default PaymentMethod;
