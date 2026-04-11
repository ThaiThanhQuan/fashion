import Image from "next/image";
import { ITrendProductItem } from "../../data";

interface ITrendProductProps {
  item: ITrendProductItem;
}

function TrendProduct({ item }: ITrendProductProps) {
  return (
    <div className="bg-white p-8 group cursor-pointer transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative w-77.25 h-96.5 mb-6">
        <Image
          src={item.thumbnail}
          fill
          priority
          sizes="25vw"
          alt={item.title}
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        <div
          className="absolute bottom-6 left-0 right-0 flex justify-center 
  translate-y-4 opacity-0
  group-hover:translate-y-0 group-hover:opacity-100 
  transition-all duration-700"
        >
          <button className="w-69.25 h-13 bg-black text-white py-3 text-[13px] font-medium tracking-wider uppercase cursor-pointer">
            + THÊM NHANH
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-[16px] font-semibold text-[#1a1a1a]">
            {item.title}
          </h3>
          <span className="text-[14px] text-gray-600">
            ${item.price.toLocaleString("de-DE")}
          </span>
        </div>

        <p className="text-[11px] uppercase tracking-[2px] text-gray-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default TrendProduct;
