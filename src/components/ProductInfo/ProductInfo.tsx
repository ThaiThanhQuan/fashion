import { ITrendProductItem } from "@/src/app/(public)/(home)/components/Trend/data";
import { ICollectionsItem } from "@/src/app/(public)/collections/data";

interface ITrendProductProps {
  item: ITrendProductItem | ICollectionsItem;
  className?: string;
}

function ProductInfo({ item, className }: ITrendProductProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-[16px] font-semibold text-[#1a1a1a]">
          {item.title}
        </h3>
        <span className={`text-[14px]  ${className}`}>
          ${item.price.toLocaleString("de-DE")}
        </span>
      </div>

      <p className="text-[11px] uppercase tracking-[2px] text-gray-400">
        {item.description}
      </p>
    </div>
  );
}

export default ProductInfo;
