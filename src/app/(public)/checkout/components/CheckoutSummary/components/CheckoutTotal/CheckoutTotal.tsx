"use client";
import { useAddressStore } from "@/src/store/useAddressStore";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useCartStore } from "@/src/store/useCartStore";
import { useCheckoutStore } from "@/src/store/useCheckoutStore";
import { useOrderStore } from "@/src/store/useOrderStore";
import { MoveRight, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SHIPPING_FEE = 30000;
const TAX_RATE = 0.1;

function CheckoutTotal() {
  const { addresses } = useAddressStore();
  const { items, clearCart } = useCartStore();
  const { isLoggedIn } = useAuthStore();
  const { paymentMethod } = useCheckoutStore();
  const { createOrder, isLoading } = useOrderStore();
  const router = useRouter();

  const defaultAddress = addresses.find((a) => a.active);

  const subtotal = items.reduce(
    (acc, i) => acc + i.product.price * i.quantity,
    0,
  );
  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + SHIPPING_FEE + tax;
  const hasRequiredCheckoutData = items.length > 0 && !!defaultAddress && !isLoading;

  const handleOrder = async () => {
    if (!isLoggedIn) {
      toast.error("Vui lòng đăng nhập trước khi đặt hàng.");
      router.push("/login");
      return;
    }

    if (items.length === 0) {
      toast.error("Giỏ hàng đang trống.");
      return;
    }

    if (!defaultAddress) {
      toast.error("Vui lòng thêm địa chỉ giao hàng mặc định.");
      router.push("/profile/address");
      return;
    }

    try {
      const order = await createOrder({
        addressId: defaultAddress.id,
        paymentMethod,
        orderItems: items.map((item) => ({
          productId: item.product.id,
          size: item.size,
          quantity: item.quantity,
        })),
      });

      if (!order) {
        toast.error("Đặt hàng không thành công.");
        return;
      }

      clearCart();
      toast.success("Đặt hàng thành công. Email xác nhận đã được gửi.");
      router.push("/profile/order-history");
    } catch {
      toast.error("Không thể đặt hàng lúc này.");
    }
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
        <button
          type="button"
          disabled={!hasRequiredCheckoutData}
          onClick={handleOrder}
          className={`w-full flex justify-center items-center gap-3 bg-[#1c1917] text-[#fafaf9] py-5 font-bold uppercase tracking-widest text-sm transition-colors
    ${
      hasRequiredCheckoutData
        ? "hover:bg-[#292524] cursor-pointer"
        : "opacity-40 cursor-not-allowed"
    }`}
        >
          {isLoading ? "Đang đặt hàng..." : "Đặt Hàng"}
          <MoveRight color="#fafaf9" />
        </button>
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
