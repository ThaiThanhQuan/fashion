"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useAddressStore } from "@/src/store/useAddressStore";

interface IProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

function AddressModal({ open, setOpen }: IProps) {
  const { addAddress } = useAddressStore();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const handleSave = () => {
    if (!form.name || !form.phone || !form.address) return;
    addAddress(form); // ← thêm vào mảng
    setForm({ name: "", phone: "", address: "" }); // reset form
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Thêm địa chỉ mới</DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-6">
          {/* Họ tên */}
          <div className="flex flex-col">
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]">
              Họ và tên
            </label>
            <input
              className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:border-[#323233] transition-all"
              placeholder="NGUYỄN VĂN A"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* Địa chỉ */}
          <div className="flex flex-col">
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]">
              Địa chỉ
            </label>
            <input
              className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:border-[#323233] transition-all"
              placeholder="SỐ NHÀ, TÊN ĐƯỜNG, QUẬN/HUYỆN"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>

          {/* Số điện thoại */}
          <div className="flex flex-col">
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]">
              Số điện thoại
            </label>
            <input
              className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:border-[#323233] transition-all"
              placeholder="+84"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Hủy
          </Button>
          <Button onClick={handleSave}>Lưu địa chỉ</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddressModal;
