function ButtonAddProduct() {
  return (
    <div
      className="absolute bottom-6 left-0 right-0 flex justify-center 
  translate-y-4 opacity-0
  group-hover:translate-y-0 group-hover:opacity-100 
  transition-all duration-700"
    >
      <button className="w-69.25 h-13 bg-black text-white py-3 text-[13px] font-medium tracking-wider uppercase cursor-pointer">
        + THÊM NHANH
      </button>
    </div>
  );
}

export default ButtonAddProduct;
