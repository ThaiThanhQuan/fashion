"use client";
import { CircleCheck } from "lucide-react";
import { useState } from "react";
import FormAddress from "./components/FormAddress/FormAddress";
import FormActions from "./components/FormActions/FormActions";

export interface AddressData {
  name: string;
  phone: string;
  address: string;
}

function AddressInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState<AddressData>({
    name: "Nguyễn Minh Anh",
    phone: "(+84) 902 123 456",
    address: "Căn hộ 1502, Tòa nhà Landmark 81",
  });
  const [draft, setDraft] = useState<AddressData>(data);
  const handleEdit = () => {
    setDraft(data);
    setIsEditing(true);
  };

  const handleSave = () => {
    setData(draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(data);
    setIsEditing(false);
  };

  const inputClass =
    "w-full bg-transparent border-b border-(--primary-color) text-[#333232] text-sm outline-none py-1 placeholder:text-[#b2b2b1] transition-all duration-200 focus:border-b-2";
  return (
    <div className="bg-white p-10 flex flex-col justify-between transition-all duration-300 border-l-4 border-(--primary-color) relative">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        {isEditing ? (
          <input
            className={`${inputClass} text-xl font-bold flex-1 mr-4`}
            value={draft.name}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
            placeholder="Họ và tên"
          />
        ) : (
          <h3 className="text-xl font-bold text-[#333232]">{data.name}</h3>
        )}

        <div className="flex items-center gap-2 bg-[#785a1a1a] text-[--primary-color] px-3 h-6 text-[10px] font-bold uppercase tracking-widest shrink-0">
          <CircleCheck size={15} />
          <span>Mặc định</span>
        </div>
      </div>

      {/* Fields */}
      <FormAddress
        isEditing={isEditing}
        inputClass={inputClass}
        draft={draft}
        setDraft={setDraft}
        data={data}
      />

      {/* Footer actions */}
      <FormActions
        isEditing={isEditing}
        handleSave={handleSave}
        handleCancel={handleCancel}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default AddressInfo;
