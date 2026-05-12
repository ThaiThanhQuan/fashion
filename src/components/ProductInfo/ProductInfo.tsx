import { IProduct } from "@/src/types";

interface IProps {
  product: IProduct
  className?: string;
}

function ProductInfo({ product, className }: IProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <p className="text-[18px] font-semibold text-[#1a1a1a]">{product.title}</p>
        <span className={`text-[16px]  ${className}`}>
          ${product.price.toLocaleString("de-DE")}
        </span>
      </div>

      <p className="text-[13px] uppercase tracking-[2px] text-gray-400">
        {product.label}
      </p>
    </div>
  );
}

export default ProductInfo;
