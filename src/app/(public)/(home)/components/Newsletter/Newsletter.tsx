function Newsletter() {
  return (
    <div className="container flex flex-col items-center py-32 text-center">
      <h2 className="text-3xl font-bold tracking-tight uppercase font-headline">
        Tạp Chí Kỹ Thuật Số
      </h2>
      <p className="max-w-2xl mt-12 leading-relaxed font-body">
        Gia nhập cộng đồng của chúng tôi để nhận quyền truy cập sớm độc quyền
        vào các bộ sưu tập, câu chuyện biên tập và các sự kiện xưởng may riêng
        tư.
      </p>

      <div className="flex w-full max-w-lg mt-12 border-b border-gray-300">
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
