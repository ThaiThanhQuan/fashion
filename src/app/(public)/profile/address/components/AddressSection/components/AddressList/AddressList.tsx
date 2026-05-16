'use client';

import { useAddressStore } from "@/src/store/useAddressStore";
import AddressInfo from "../../../AddressInfo/AddressInfo";
function AddressList() {
    const { addresses } = useAddressStore();

    if (addresses.length === 0) {
        return (
            <p className="text-[#5f5f5f] text-sm tracking-widest uppercase">
                Chưa có địa chỉ nào. Hãy thêm địa chỉ mới.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-6">
            {addresses.map((addr) => (
                <AddressInfo key={addr.id} data={addr} />
            ))}
        </div>
    );
}

export default AddressList;