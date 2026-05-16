import { Check, Pencil, Star, Trash2, X } from "lucide-react";

interface IProps {
  isEditing: boolean;
  isDefault: boolean;
  handleEdit: () => void;
  handleSave: () => void;
  handleCancel: () => void;
  handleRemove: () => void;
  handleSetDefault: () => void;
}

function FormActions({
  isEditing,
  isDefault,
  handleEdit,
  handleSave,
  handleCancel,
  handleRemove,
  handleSetDefault,
}: IProps) {
  return (
    <div className="mt-12 pt-8 border-t border-[#b2b2b11a] flex items-center gap-8">
      {isEditing ? (
        <>
          <button
            onClick={handleSave}
            className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[--primary-color] hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            <Check size={15} />
            <span>Lưu</span>
          </button>
          <button
            onClick={handleCancel}
            className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#b2b2b1] hover:text-[#323233] transition-colors flex items-center gap-2"
          >
            <X size={15} />
            <span>Hủy</span>
          </button>
        </>
      ) : (
        <div className="flex items-center gap-8">
          <button
            onClick={handleEdit}
            className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#323233] hover:text-[--primary-color] transition-colors flex items-center gap-2"
          >
            <Pencil size={15} />
            <span>Chỉnh sửa</span>
          </button>

          {!isDefault && (
            <button
              onClick={handleSetDefault}
              className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#b2b2b1] hover:text-[--primary-color] transition-colors flex items-center gap-2"
            >
              <Star size={15} />
              <span>Đặt mặc định</span>
            </button>
          )}

          <button
            onClick={handleRemove}
            className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#b2b2b1] hover:text-[#9f403d] transition-colors flex items-center gap-2"
          >
            <Trash2 size={15} />
            <span>Xóa</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default FormActions;
