import { IProductItem } from "@/src/app/(public)/product/data";
import Link from "next/link";

interface ITrendProductProps {
  item: IProductItem;
  className?: string;
}

function ProductInfo({ item, className }: ITrendProductProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <p className="text-[16px] font-semibold text-[#1a1a1a]">{item.title}</p>
        <span className={`text-[14px]  ${className}`}>
          ${item.price.toLocaleString("de-DE")}
        </span>
      </div>

      <p className="text-[11px] uppercase tracking-[2px] text-gray-400">
        {item.label}
      </p>
    </div>
  );
}

export default ProductInfo;
