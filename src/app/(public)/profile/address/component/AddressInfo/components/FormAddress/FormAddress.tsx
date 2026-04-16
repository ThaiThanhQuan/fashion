import { MapPin, Phone } from "lucide-react";
import { AddressData } from "../../AddressInfo";

interface IProps {
  isEditing: boolean;
  inputClass: string;
  draft: AddressData;
  setDraft: (v: AddressData) => void;
  data: AddressData;
}

function FormAddress({ isEditing, inputClass, draft, setDraft, data }: IProps) {
  return (
    <div className="space-y-4">
      {/* Phone */}
      <div className="flex items-start gap-4">
        <Phone size={20} color="#5f5f5f" className="mt-1" />
        {isEditing ? (
          <input
            className={`${inputClass} tracking-wide`}
            value={draft.phone}
            onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
            placeholder="Số điện thoại"
          />
        ) : (
          <span className="text-[#5f5f5f] text-sm tracking-wide">
            {data.phone}
          </span>
        )}
      </div>

      {/* Address */}
      <div className="flex items-start gap-4">
        <MapPin size={20} color="#5f5f5f" className="mt-1" />
        {isEditing ? (
          <div className="flex flex-col gap-3 flex-1">
            <input
              className={inputClass}
              value={draft.address}
              onChange={(e) => setDraft({ ...draft, address: e.target.value })}
              placeholder="Số nhà, tòa nhà..."
            />
          </div>
        ) : (
          <span className="text-[#5f5f5f] text-sm leading-loose">
            {data.address}
          </span>
        )}
      </div>
    </div>
  );
}

export default FormAddress;
