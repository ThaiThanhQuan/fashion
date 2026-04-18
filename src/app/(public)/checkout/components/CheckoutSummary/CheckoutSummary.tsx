"use client";
import { useCartStore } from "@/src/store/useCartStore";
import Image from "next/image";
import CheckoutTotal from "./components/CheckoutTotal/CheckoutTotal";
import Link from "next/link";

function CheckoutSummary() {
  const { items } = useCartStore();
  return (
    <div className="bg-[#f0eded] p-10 space-y-10">
      <h3 className="text-xl font-bold tracking-tight text-stone-900">
        Tóm Tắt Đơn Hàng
      </h3>

      {items.length > 0 ? (
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-6 items-start">
              <div>
                <Image
                  src={item.product.thumbnail}
                  alt={item.product.title}
                  width={96}
                  height={128}
                  className="object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="space-y-2">
                  <p className=" text-sm font-bold uppercase tracking-wide">
                    {item.product.title}
                  </p>
                  <p className="text-xs text-[#5f5f5f]">Size: {item.size}</p>
                  <p className="text-xs text-[#5f5f5f]">
                    Số lượng: {item.quantity}
                  </p>
                  <p className=" text-sm font-bold">
                    $
                    {(item.product.price * item.quantity).toLocaleString(
                      "de-DE",
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-[#b2b2b1] mt-4">
          Chưa có đơn hàng nào.
          <Link href="/product" className="underline hover:text-[#323233]">
            Thêm sản phẩm
          </Link>
        </p>
      )}

      <CheckoutTotal />
    </div>
  );
}

export default CheckoutSummary;
