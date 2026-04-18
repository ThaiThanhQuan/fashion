"use client";
import { useAddressStore } from "@/src/store/useAddressStore";
import Link from "next/link";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";

function ShippingForm() {
  const { addresses, defaultId } = useAddressStore();
  const defaultAddress = addresses.find((a) => a.id === defaultId);

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tighter text-stone-900">
          Thông Tin Giao Hàng
        </h1>
        <p className="text-[#5f5f5f] font-light">
          Vui lòng xem lại thông tin giao hàng của bạn để đảm bảo đơn hàng được
          giao đúng hạn.
        </p>
      </div>

      {defaultAddress ? (
        <div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-label text-xs uppercase tracking-widest text-[#5f5f5f]"
              >
                Tên
              </label>
              <input
                id="name"
                type="text"
                className="bg-transparent border-b border-[#b2b2b133] py-3 font-light"
                value={defaultAddress.name}
                disabled
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="phone"
                className="font-label text-xs uppercase tracking-widest text-[#5f5f5f]"
              >
                Số điện thoại
              </label>
              <input
                id="phone"
                type="text"
                className="bg-transparent border-b border-[#b2b2b133] py-3 font-light"
                value={defaultAddress.phone}
                disabled
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label
              htmlFor="address"
              className="font-label text-xs uppercase tracking-widest text-[#5f5f5f]"
            >
              Địa chỉ
            </label>
            <input
              id="address"
              type="text"
              className="bg-transparent border-b border-[#b2b2b133] py-3 font-light"
              value={defaultAddress.address}
              disabled
            />
          </div>
        </div>
      ) : (
        <p className="text-sm text-[#b2b2b1] mt-4">
          Chưa có địa chỉ mặc định.
          <Link
            href="/profile/address"
            className="underline hover:text-[#323233]"
          >
            Thêm địa chỉ
          </Link>
        </p>
      )}

      <PaymentMethod />
    </>
  );
}

export default ShippingForm;
