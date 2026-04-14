import Link from "next/link";

function RegisterForm() {
  return (
    <form action={"#"} className="grid grid-cols-2 gap-x-12 gap-y-8">
      {/* Họ tên */}
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]"
        >
          Họ tên
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nhập tên của bạn..."
          className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-[#323233] transition-all"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]"
        >
          Địa Chỉ Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="email@example.com"
          className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-[#323233] transition-all"
        />
      </div>

      {/* Mật khẩu */}
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]"
        >
          Mật khẩu
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-[#323233] transition-all"
        />
      </div>

      {/* Xác nhận mật khẩu */}
      <div className="flex flex-col">
        <label
          htmlFor="confirmPassword"
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]"
        >
          Xác nhận mật khẩu
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-[#323233] transition-all"
        />
      </div>

      {/* Ngày sinh */}
      <div className="flex flex-col">
        <label
          htmlFor="dob"
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]"
        >
          Ngày sinh
        </label>
        <input
          id="dob"
          type="date"
          className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] focus:ring-0 focus:border-[#323233] transition-all"
        />
      </div>

      {/* Giới tính */}
      <div className="flex flex-col">
        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f] mb-4">
          Giới tính
        </label>
        <div className="flex gap-10 h-full items-center">
          {["Nam", "Nữ"].map((gender) => (
            <label
              key={gender}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="gender"
                value={gender}
                className="w-3 h-3 border-[#5f5e5e] text-[#323233] focus:ring-0 rounded-none bg-transparent cursor-pointer"
              />
              <span className="text-[11px] uppercase tracking-widest text-[#5f5f5f] group-hover:text-[#323233] transition-colors">
                {gender}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Địa chỉ - Cho nó chiếm hết 2 cột để không bị cụt */}
      <div className="col-span-2 flex flex-col">
        <label
          htmlFor="address"
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]"
        >
          Địa chỉ
        </label>
        <input
          id="address"
          type="text"
          placeholder="SỐ NHÀ, TÊN ĐƯỜNG, QUẬN/HUYỆN"
          className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-[#323233] transition-all"
        />
      </div>

      {/* Nút Đăng Ký - Chiếm hết 2 cột */}
      <div className="col-span-2">
        <button
          type="submit"
          className="w-full bg-[#323233] text-[#faf7f6] py-5 tracking-[0.3em] uppercase text-xs hover:bg-black hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg active:scale-[0.99]"
        >
          Đăng Ký
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
