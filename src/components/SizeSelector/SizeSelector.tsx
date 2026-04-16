"use client";
interface IProps {
  selectedSize?: string;
  onSelect?: (size: string) => void;
}

function SizeSelector({ selectedSize, onSelect }: IProps) {
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="mt-12">
      <h3 className="text-xs font-headline font-bold uppercase tracking-[0.2em] mb-6">
        Kích Cỡ Atelier
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => onSelect?.(size)}
            className={`border py-3 text-[10px] focus:outline-none cursor-pointer transition-all duration-300
              ${
                selectedSize === size
                  ? "border-[#785a1a] text-(--primary-color)"
                  : "border-[#b2b2b14d] hover:border-[#785a1a] hover:text-(--primary-color)"
              }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
