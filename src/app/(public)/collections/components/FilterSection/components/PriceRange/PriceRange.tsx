"use client";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

function PriceRange() {
  const [value, setValue] = useState([200, 5000]);
  return (
    <div>
      <h3 className="text-xs font-headline font-bold uppercase tracking-[0.2em] mt-12 mb-6 ">
        Khoảng giá
      </h3>

      <Slider.Root
        className="relative flex items-center w-full h-5"
        value={value}
        max={5000}
        min={0}
        step={10}
        onValueChange={setValue}
      >
        {/* Thanh ray (Track) */}
        <Slider.Track className="relative h-1.5 grow bg-(--primary-color) rounded-full overflow-hidden">
          {/* Phần đã chọn (Range) */}
          <Slider.Range className="absolute h-full bg-[#efefef] rounded-full" />
        </Slider.Track>

        {/* Nút kéo bên trái */}
        <Slider.Thumb className="block w-3 h-3 transition-transform rounded-full cursor-pointer bg-(--primary-color) border-none focus:outline-none" />
      </Slider.Root>

      {/* Hiển thị con số bên dưới */}
      <div className="flex justify-between mt-4">
        <span className="text-[10px] text-stone-400 font-medium">
          ${value[0].toLocaleString("de-DE")}
        </span>
        <span className="text-[10px] text-stone-400 font-medium">
          ${value[1].toLocaleString("de-DE")}
        </span>
      </div>
    </div>
  );
}

export default PriceRange;
