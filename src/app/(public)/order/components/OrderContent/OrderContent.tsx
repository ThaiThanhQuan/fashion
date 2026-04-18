"use client";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import OrderItem from "./components/OrderItem/OrderItem";
import { useCartStore } from "@/src/store/useCartStore";
function OrderContent() {
  const { items } = useCartStore();

  return (
    <div className="mb-16">
      <h1 className="text-5xl font-extrabold tracking-tighter text-[#323233] mb-4">
        Túi Hàng
      </h1>
      <div className="text-[#5f5f5f] font-light tracking-wide uppercase text-xs">
        {items.length} sản phẩm trong bộ sưu tập của bạn
      </div>
      <div className="space-y-16 mb-20">
        {items.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
      </div>

      <Link href="/product" className=" flex items-center gap-3 mt-2">
        <ArrowLeftIcon color="#5f5f5f" />
        <p className="relative inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium text-[#5f5f5f]  hover:text-[#323233] transition-all duration-300">
          Tiếp tục mua sắm
        </p>
      </Link>
    </div>
  );
}

export default OrderContent;
