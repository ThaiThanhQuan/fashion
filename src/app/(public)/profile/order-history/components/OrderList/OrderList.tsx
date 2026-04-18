"use client";
import { useOrderStore } from "@/src/store/useOrderStore";
import Image from "next/image";

function OrderList() {
  const { orders } = useOrderStore();

  return orders.length === 0 ? (
    <p className="text-sm mt-20 text-[#b2b2b1] uppercase tracking-widest">
      Chưa có đơn hàng nào.
    </p>
  ) : (
    <div className="space-y-10">
      {orders.map((order) => (
        <div
          key={order.id}
          className="border-l-4 border-[--primary-color] bg-[#f0eded] p-8 space-y-6"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-[#5f5f5f]">
                Mã đơn
              </p>
              <p className="text-xs font-bold text-[#323233]">
                #{order.id.slice(0, 8).toUpperCase()}
              </p>
            </div>
            <div className="text-right space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-[#5f5f5f]">
                Ngày đặt
              </p>
              <p className="text-xs font-bold text-[#323233]">
                {order.createdAt.toLocaleDateString("vi-VN")}
              </p>
            </div>
          </div>

          {/* Địa chỉ */}
          <div className="space-y-1 text-xs text-[#5f5f5f]">
            <p className="text-[10px] uppercase tracking-widest">Giao đến</p>
            <p className="font-bold text-[#323233]">{order.address.name}</p>
            <p>Số điện thoại: {order.address.phone}</p>
            <p>Địa chỉ: {order.address.address}</p>
          </div>

          {/* Sản phẩm */}
          <div className="space-y-4">
            {order.items.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <Image
                  src={item.product.thumbnail}
                  alt={item.product.title}
                  width={64}
                  height={80}
                  className="object-cover"
                />
                <div className="flex-1 space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wide">
                    {item.product.title}
                  </p>
                  <p className="text-[11px] text-[#5f5f5f]">
                    Size: {item.size}
                  </p>
                  <p className="text-[11px] text-[#5f5f5f]">
                    SL: {item.quantity}
                  </p>
                </div>
                <p className="text-xs font-bold">
                  $
                  {(item.product.price * item.quantity).toLocaleString("de-DE")}
                </p>
              </div>
            ))}
          </div>

          {/* Tổng */}
          <div className="pt-4 border-t border-[#b2b2b11a] flex justify-between items-baseline">
            <span className="text-[10px] uppercase tracking-widest text-[#5f5f5f]">
              Tổng Cộng
            </span>
            <span className="text-lg font-black tracking-tighter">
              ${order.grandTotal.toLocaleString("de-DE")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderList;
