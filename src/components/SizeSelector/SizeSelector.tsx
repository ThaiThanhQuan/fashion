import type { IProductVariant } from "@/src/types";

interface IProps {
  selectedSize?: string;
  onSelect?: (size: string | undefined) => void;
  variants?: IProductVariant[];
}

function SizeSelector({ selectedSize, onSelect, variants }: IProps) {
  const sizes = ["S", "M", "L", "XL"];
  const hasVariantData = variants !== undefined;

  const handleSelect = (size: string) => {
    const variant = variants?.find((item) => item.size === size);
    if (hasVariantData && (!variant || variant.stock <= 0)) return;

    onSelect?.(selectedSize === size ? undefined : size);
  }

  return (
    <div className="mt-12">
      <h3 className="text-xs font-headline font-bold uppercase tracking-[0.2em] mb-6">
        Kích Cỡ Atelier
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size, index) => {
          const variant = variants?.find((item) => item.size === size);
          const isOutOfStock = hasVariantData && (!variant || variant.stock <= 0);

          return (
            <button
              key={index}
              type="button"
              disabled={isOutOfStock}
              onClick={() => handleSelect(size)}
              title={isOutOfStock ? "Het hang" : undefined}
              className={`border py-3 text-[10px] focus:outline-none transition-all duration-300
                ${
                  isOutOfStock
                    ? "cursor-not-allowed border-[#b2b2b14d] text-[#b2b2b1] opacity-40 line-through"
                    : "cursor-pointer"
                }
                ${
                  selectedSize === size
                    ? "border-[#785a1a] text-(--primary-color)"
                    : "border-[#b2b2b14d] hover:border-[#785a1a] hover:text-(--primary-color)"
                }`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SizeSelector;
