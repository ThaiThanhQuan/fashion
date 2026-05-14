function Newsletter() {
  return (
    <div className="container flex flex-col items-center py-(--padding-y) text-center">
      <h2 className="text-3xl font-bold tracking-tight uppercase font-headline">
        Đăng Ký Nhận Tin Bộ Sưu Tập Mới
      </h2>
      <p className="max-w-2xl mt-5 leading-relaxed font-body">
        Cập nhật sớm nhất các bộ sưu tập mới, sản phẩm giới hạn và cảm hứng
        thời trang được tuyển chọn dành riêng cho bạn.
      </p>

      <div className="flex w-full max-w-lg mt-5 border-b border-gray-300">
        <input
          type="email"
          placeholder="Địa chỉ email"
          className="flex-1 px-0 py-4 text-sm tracking-widest bg-transparent border-none outline-none "
        />
        <button className="py-4 px-8 text-xs font-bold uppercase hover:text-(--primary-color) transition-colors cursor-pointer">
          Đăng ký
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
