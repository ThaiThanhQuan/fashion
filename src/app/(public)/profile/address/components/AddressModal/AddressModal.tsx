'use client';

import { useState } from "react";
import { toast } from "sonner";
import { useAddressStore } from "@/src/store/useAddressStore";
import { IAddress } from "@/src/types";

interface IProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    editData?: IAddress;  
}

function AddressModal({ open, setOpen, editData }: IProps) {
    const { addAddress, updateAddress } = useAddressStore();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        recipientName: editData?.recipientName ?? '',
        phone: editData?.phone ?? '',
        address: editData?.address ?? '',
        active: editData?.active ?? false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (editData) {
                await updateAddress(editData.id, form);
                toast.success("Cập nhật địa chỉ thành công!");
            } else {
                const res = await addAddress(form);
                console.log('res: ',res)
                setForm({
                  recipientName: '',
                  phone: '',
                  address: '',
                  active:  false,
                })
                toast.success(res?.message || "Thêm địa chỉ thành công!");
            }
            setOpen(false);
        } catch {
            toast.error("Có lỗi xảy ra, vui lòng thử lại!");
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white p-10 w-full max-w-lg">
                <h2 className="text-xl font-bold uppercase tracking-widest mb-8">
                    {editData ? "Cập nhật địa chỉ" : "Thêm địa chỉ mới"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        name="recipientName"
                        value={form.recipientName}
                        onChange={handleChange}
                        placeholder="Họ tên người nhận"
                        required
                        className="w-full bg-transparent border-b border-[#b2b2b14d] py-3 outline-none placeholder-[#c7c9c4] text-sm"
                    />
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Số điện thoại"
                        required
                        className="w-full bg-transparent border-b border-[#b2b2b14d] py-3 outline-none placeholder-[#c7c9c4] text-sm"
                    />
                    <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Địa chỉ"
                        required
                        className="w-full bg-transparent border-b border-[#b2b2b14d] py-3 outline-none placeholder-[#c7c9c4] text-sm"
                    />
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="active"
                            checked={form.active}
                            onChange={handleChange}
                        />
                        <span className="text-xs uppercase tracking-widest text-[#5f5f5f]">
                            Đặt làm địa chỉ mặc định
                        </span>
                    </label>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="flex-1 border border-[#b2b2b14d] py-4 text-xs uppercase tracking-widest hover:bg-[#f6f3f2] transition-all"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-[#5f5e5e] text-white py-4 text-xs uppercase tracking-widest hover:bg-[#535252] transition-all disabled:opacity-50"
                        >
                            {loading ? "Đang lưu..." : editData ? "Cập nhật" : "Thêm mới"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddressModal;