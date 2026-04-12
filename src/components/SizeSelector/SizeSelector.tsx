function SizeSelector() {
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="mt-12">
      <h3 className="text-xs font-headline font-bold uppercase tracking-[0.2em] mb-6 ">
        Kích Cỡ Atelier
      </h3>

      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size, index) => (
          <button
            key={index}
            className="border border-[#b2b2b14d] py-3 text-[10px] hover:border-[#785a1a] hover:text-(--primary-color)  focus:outline-none cursor-pointer transition-all duration-300"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
