'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authService} from '@/src/services';
import { toast } from "sonner";
import { useAuthStore } from "@/src/store/useAuthStore";

function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await authService.login({
        username,
        password,
      });

      if (!res?.result) {
        toast.error("Tài khoản hoặc mật khẩu không chính xác!", {
          position: "top-right",
          duration: 3000,
        });
        return;
      }

      login(res.result.token, res.result.refreshToken);

      router.push("/");
      router.refresh()

    } catch (err) {
      toast.error("Hệ thống đang gặp sự cố, vui lòng thử lại sau!", {
        position: "top-right",
        duration: 3000,
      });
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f] mb-2 "
        >
          Username
        </label>

        <input
          className="w-full bg-transparent outline-none border-t-0 border-x-0 border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-(--primary-color) transition-all"
          type="username"
          id="username"
          placeholder="username...."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between pt-2">
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
            href="/verify-email"
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
