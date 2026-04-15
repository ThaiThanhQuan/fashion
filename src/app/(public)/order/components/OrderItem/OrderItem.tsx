import QuantitySelector from "@/src/components/QuantitySelector/QuantitySelector";
import { X } from "lucide-react";
import Image from "next/image";
import { ICartItem, useCartStore } from "@/src/store/useCartStore";

interface IProps {
  item: ICartItem;
}

function OrderItem({ item }: IProps) {
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex gap-8 py-2">
      <div className="relative w-56 aspect-4/5">
        <Image
          src={item.product.thumbnail}
          fill
          alt=""
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#323233] mb-1">
              {item.product.title}
            </h3>
            <p className="text-[#5f5f5f] text-sm tracking-wide uppercase">
              Size {item.size}
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-[#323233]">
              $ {item.product.price.toLocaleString("de-DE")}
            </p>
            <span className="text-sm w-4 text-center">{item.quantity}</span>
          </div>
        </div>

        <div className="flex justify-between">
          <QuantitySelector item={item} />

          <button
            onClick={() => removeItem(item.product.slug, item.size)}
            className="text-xs uppercase tracking-widest text-[#5f5f5f] hover:text-[#9f403d] transition-colors flex items-center gap-2"
          >
            <X size={20} />
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
