"use client";
import { useAddressStore } from "@/src/store/useAddressStore";
import { useCartStore } from "@/src/store/useCartStore";
import { useOrderStore } from "@/src/store/useOrderStore";
import { MoveRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const SHIPPING_FEE = 45;
const TAX_RATE = 0.1;

function CheckoutTotal() {
  const { addresses, defaultId } = useAddressStore();
  const { items, clearCart } = useCartStore();
  const { addOrder } = useOrderStore();

  const defaultAddress = addresses.find((a) => a.id === defaultId);

  const subtotal = items.reduce(
    (acc, i) => acc + i.product.price * i.quantity,
    0,
  );
  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + SHIPPING_FEE + tax;
  const canOrder = items.length > 0 && !!defaultAddress;

  const handleOrder = () => {
    if (!canOrder || !defaultAddress) return;
    addOrder({
      items,
      address: defaultAddress,
      subtotal,
      shippingFee: SHIPPING_FEE,
      tax,
      grandTotal,
    });
    clearCart();
  };

  return (
    <div className="pt-10 ">
      <div className="space-y-4 border-t border-[#b2b2b11a]">
        <div className="flex justify-between text-sm">
          <span className="text-[#5f5f5f]">Tạm Tính</span>
          <span className="font-bold text-stone-900">
            ${subtotal.toLocaleString("de-DE")}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-[#5f5f5f]">Phí Vận Chuyển</span>
          <span className="font-bold text-stone-900">
            ${SHIPPING_FEE.toLocaleString("de-DE")}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-[#5f5f5f]">Thuế (10%)</span>
          <span className="font-bold text-stone-900">
            {" "}
            ${tax.toLocaleString("de-DE")}
          </span>
        </div>

        <div className="flex justify-between text-lg pt-4 border-t border-[#1c19171a]">
          <span className="font-bold uppercase tracking-tighter">
            Tổng Cộng
          </span>
          <span className="font-bold">
            ${grandTotal.toLocaleString("de-DE")}
          </span>
        </div>
      </div>

      <div className="mt-10 ">
        <Link
          href={canOrder ? "/profile/order-history" : "#"}
          onClick={(e) => {
            if (!canOrder) {
              e.preventDefault();
              return;
            }
            handleOrder();
          }}
          className={`w-full flex justify-center items-center gap-3 bg-[#1c1917] text-[#fafaf9] py-5 font-bold uppercase tracking-widest text-sm transition-colors
    ${
      canOrder
        ? "hover:bg-[#292524] cursor-pointer"
        : "opacity-40 cursor-not-allowed pointer-events-none"
    }`}
        >
          Đặt Hàng
          <MoveRight color="#fafaf9" />
        </Link>
      </div>

      <div className="flex flex-col gap-4 pt-4">
        <div className="flex items-center gap-3 text-xs text-[#5f5f5f] uppercase tracking-widest font-medium">
          <ShieldCheck size={20} />
          Bảo mật mã hóa 256-bit
        </div>

        <div className="flex items-center gap-6 opacity-40">
          <span className=" text-[10px] font-black border px-1 border-[#0c0a09]">
            VISA
          </span>
          <span className=" text-[10px] font-black border px-1 border-[#0c0a09]">
            MASTERCARD
          </span>
          <span className=" text-[10px] font-black border px-1 border-[#0c0a09]">
            AMEX
          </span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutTotal;
