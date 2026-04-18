"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import AddressModal from "../AddressModal/AddressModal";

function AddressHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between mb-16">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Sổ địa chỉ
          </h1>
          <p className="text-[#4f4f4f] max-w-lg leading-relaxed">
            Quản lý các địa chỉ giao hàng của bạn...
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-[#5f5e5e] h-15 text-[#faf7f6] px-8 font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-[#535252]"
        >
          <Plus />
          Thêm địa chỉ mới
        </button>
      </div>

      <AddressModal open={open} setOpen={setOpen} />
    </>
  );
}

export default AddressHeader;
