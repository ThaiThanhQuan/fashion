function ViewMore() {
  return (
    <div className="container flex flex-col items-center py-32 text-center">
      <button className="border border-outline-variant py-6 px-16 text-xs font-headline font-bold uppercase tracking-[0.3em] hover:bg-[#323233] hover:text-white transition-all duration-500 mb-10">
        Xem Thêm Sản Phẩm
      </button>

      <div className="flex items-center gap-4">
        <span className="w-8 h-px bg-[#323233]"></span>
        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#5f5f5f]">
          Đang hiển thị 06 trên 42 sản phẩm
        </p>
        <span className="w-8 h-px bg-[#b2b2b14d]"></span>
      </div>
    </div>
  );
}

export default ViewMore;
