"use client";
import AddressInfo from "./component/AddressInfo/AddressInfo";
import CoverageSection from "./component/CoverageSection/CoverageSection";
import AddressHeader from "./component/AddressHeader/AddressHeader";
import { useAddressStore } from "@/src/store/useAddressStore";

function AddressPage() {
  const { addresses } = useAddressStore();
  return (
    <div className="p-16 bg-[#fcf9f8]">
      <AddressHeader />
      <div className="mb-5">
        {addresses.length === 0 ? (
          <p className="text-[#5f5f5f] text-sm tracking-widest uppercase">
            Chưa có địa chỉ nào. Hãy thêm địa chỉ mới.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {addresses.map((addr) => (
              <AddressInfo key={addr.id} data={addr} />
            ))}
          </div>
        )}
      </div>

      <CoverageSection />
    </div>
  );
}

export default AddressPage;
