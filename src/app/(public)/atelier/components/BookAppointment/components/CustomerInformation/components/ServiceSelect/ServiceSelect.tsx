import { IService } from "@/src/types";

interface IProps {
  services: IService[]
}

export default function ServiceSelect({services}: IProps) {
  return (
    <div className="mt-8">
      <label className="text-xs uppercase tracking-widest font-bold block mb-4">
        Chọn Dịch vụ
      </label>

      <select className="w-full bg-transparent border border-stone-200 py-3 px-4 text-xs uppercase tracking-widest focus:outline-none focus:border-stone-500 appearance-none cursor-pointer transition-colors duration-300">
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