'use client';

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { IAddress } from "@/src/types";
import { useAddressStore } from "@/src/store/useAddressStore";
import AddressModal from "../AddressModal/AddressModal";

interface IProps {
    data: IAddress;
}

function AddressInfo({ data }: IProps) {
    const { deleteAddress } = useAddressStore();
    const [openEdit, setOpenEdit] = useState(false);

    const handleDelete = async () => {
        try {
            await deleteAddress(data.id);
            toast.success("Xóa địa chỉ thành công!");
        } catch {
            toast.error("Có lỗi xảy ra!");
        }
    };

    return (
        <>
            <div className="border border-[#b2b2b14d] p-6 relative">
                {data.active && (
                    <span className="absolute top-4 right-4 text-[9px] uppercase tracking-widest bg-[#5f5e5e] text-white px-2 py-1">
                        Mặc định
                    </span>
                )}

                <p className="font-bold text-sm uppercase tracking-widest mb-2">
                    {data.recipientName}
                </p>
                <p className="text-[#5f5f5f] text-sm mb-1">{data.phone}</p>
                <p className="text-[#5f5f5f] text-sm">{data.address}</p>

                <div className="flex gap-4 mt-6">
                    <button
                        onClick={() => setOpenEdit(true)}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#5f5f5f] hover:text-[#323233] transition-colors"
                    >
                        <Pencil size={12} /> Chỉnh sửa
                    </button>
                    <button
                        onClick={handleDelete}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors"
                    >
                        <Trash2 size={12} /> Xóa
                    </button>
                </div>
            </div>

            <AddressModal
                open={openEdit}
                setOpen={setOpenEdit}
                editData={data}
            />
        </>
    );
}

export default AddressInfo;