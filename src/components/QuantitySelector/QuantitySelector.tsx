"use client";
import { ICartItem, useCartStore } from "@/src/store/useCartStore";
import { useState } from "react";

interface IProps {
  item: ICartItem;
}

export default function QuantitySelector({ item }: IProps) {
  const { increment, decrement } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center border border-[#b2b2b133] px-4 py-2 gap-6">
      <button
        onClick={() => (decrease(), decrement(item.product.slug, item.size))}
        className="text-sm hover:text-(--primary-color) transition-colors"
      >
        −
      </button>

      <span className="text-sm font-medium w-4 text-center">{quantity}</span>

      <button
        onClick={() => (increase(), increment(item.product.slug, item.size))}
        className="text-sm hover:text-(--primary-color) transition-colors"
      >
        +
      </button>
    </div>
  );
}
