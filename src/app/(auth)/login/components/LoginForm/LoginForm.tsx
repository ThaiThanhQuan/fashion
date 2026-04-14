import Link from "next/link";

function LoginForm() {
  return (
    <form action={"#"} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f] mb-2 "
        >
          Địa Chỉ Email
        </label>

        <input
          className="w-full bg-transparent outline-none border-t-0 border-x-0 border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-(--primary-color) transition-all"
          type="email"
          id="email"
          placeholder="email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f] mb-2 "
        >
          Mật khẩu
        </label>

        <input
          className="w-full bg-transparent outline-none border-t-0 border-x-0 border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-(--primary-color) transition-all"
          type="password"
          id="password"
          placeholder="••••••••"
        />
      </div>

      <div className="flex justify-between items-center pt-2">
        <label
          htmlFor="remember-me"
          className="flex items-center gap-3 cursor-pointer"
        >
          <input
            id="remember-me"
            type="checkbox"
            className="w-4 h-4 border-[#5f5e5e] text-[#5f5e5e] focus:ring-0 rounded-none bg-transparent"
          />

          <span className="text-xs uppercase tracking-widest text-[#5f5f5f]">
            Ghi nhớ
          </span>
        </label>

        <div className="flex gap-5">
          <Link
            href="/register"
            className="text-xs uppercase tracking-widest text-(--primary-color) hover:opacity-70 transition-opacity"
          >
            Chưa có tài khoản?
          </Link>
          <Link
            href="#"
            className="text-xs uppercase tracking-widest text-(--primary-color) hover:opacity-70 transition-opacity"
          >
            Quên mật khẩu?
          </Link>
        </div>
      </div>

      <button
        className="w-full bg-[#323233] text-[#faf7f6] py-5 tracking-[0.3em] uppercase text-xs hover:bg-black hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg active:scale-[0.99]"
        type="submit"
      >
        Đăng Nhập
      </button>
    </form>
  );
}

export default LoginForm;
