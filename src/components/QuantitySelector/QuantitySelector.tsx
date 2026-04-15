"use client";
import { useState } from "react";

export default function QuantitySelector() {
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
        onClick={decrease}
        className="text-sm hover:text-(--primary-color) transition-colors"
      >
        −
      </button>

      <span className="text-sm font-medium w-4 text-center">{quantity}</span>

      <button
        onClick={increase}
        className="text-sm hover:text-(--primary-color) transition-colors"
      >
        +
      </button>
    </div>
  );
}
