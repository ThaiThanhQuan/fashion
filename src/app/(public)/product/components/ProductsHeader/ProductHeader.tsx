function ProductHeader() {
  return (
    <div className="container mb-16">
      <h1 className="mb-4 text-5xl font-extrabold tracking-tighter font-headline text-[#323233]">
        SS24 Thời Trang May Sẵn
      </h1>

      <div className="flex items-end justify-between">
        <p className="max-w-lg leading-relaxed font-body text-[#5f5f5f] ">
          Sự đối thoại giữa những kiểu dáng kiến trúc và các loại vải mềm mại.
          Được tuyển chọn cho những người theo đuổi phong cách tối giản hiện
          đại, coi trọng sự chính xác và tay nghề thủ công.
        </p>

        <div className="flex items-center gap-8 pb-2 border-b border-outline-variant/20">
          <span className="text-[10px] font-label uppercase tracking-widest text-[#5f5f5f] ">
            Sắp Xếp Theo
          </span>
          <select
            className="text-xs font-bold tracking-widest uppercase bg-transparent border-none font-headline"
            name=""
            id=""
          >
            <option value="">Nổi Bật</option>
            <option value="">Mới Nhất</option>
            <option value="">Giá: (Thấp-Cao)</option>
            <option value="">Giá: (Cao-Thấp)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
