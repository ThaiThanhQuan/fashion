import * as Slider from "@radix-ui/react-slider";

interface IProps {
    min?: number;
    max?: number;
    onChange: (minPrice: number, maxPrice: number) => void;
}

function PriceRange({ min = 0, max = 5000, onChange }: IProps) {

  const handleChange = (newValue: number[]) => {
        onChange(newValue[0], newValue[1]);
    };
    
  return (
    <div>
      <h3 className="text-xs font-headline font-bold uppercase tracking-[0.2em] mt-12 mb-6 ">
        Khoảng giá
      </h3>

      <Slider.Root
        className="relative flex items-center w-full h-5"
        value={[min, max]}  
        max={5000}
        min={0}
        step={10}
        onValueChange={handleChange}
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
          ${min.toLocaleString("de-DE")}
        </span>
        <span className="text-[10px] text-stone-400 font-medium">
          ${max.toLocaleString("de-DE")}
        </span>
      </div>
    </div>
  );
}

export default PriceRange;
