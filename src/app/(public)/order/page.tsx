"use client";
import { useCartStore } from "@/src/store/useCartStore";
import OrderItem from "./components/OrderItem/OrderItem";

function OrderPage() {
  const items = useCartStore((state) => state.items);

  return (
    <div className="grid grid-cols-12 gap-5 container pb-(--padding-y)">
      <div className="col-span-8">
        <div className="mb-16">
          <h1 className="text-5xl font-extrabold tracking-tighter text-[#323233] mb-2">
            Túi Hàng
          </h1>
          <p className="text-[#5f5f5f] font-light tracking-wide uppercase text-xs">
            {items.length} sản phẩm trong bộ sưu tập của bạn
          </p>
        </div>

        <div className="space-y-16">
          {items.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
