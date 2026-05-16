import { IService } from "@/src/types";

interface IProps {
    services: IService[];
    value: string;
    onChange: (value: string) => void;
}

export default function ServiceSelect({ services, value, onChange }: IProps) {
    return (
        <div className="mt-8">
            <label className="block mb-4 text-xs font-bold tracking-widest uppercase">
                Chọn Dịch vụ
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
                className="w-full px-4 py-3 text-xs tracking-widest uppercase transition-colors duration-300 bg-transparent border appearance-none cursor-pointer border-stone-200 focus:outline-none focus:border-stone-500"
            >
                <option value="">-- Chọn dịch vụ của bạn --</option>
                {services.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.title}
                    </option>
                ))}
            </select>
        </div>
    );
}