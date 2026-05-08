'use client';

import { authService } from "@/src/services";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function RegisterForm() {

  const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate password
        if (password !== confirmPassword) {
            toast.error("Mật khẩu xác nhận không khớp!", {
                position: "top-right",
                duration: 3000,
            });
            return;
        }

        try {
            setLoading(true);

             if (gender === null) {
                toast.error("Vui lòng chọn giới tính!", {
                    position: "top-right",
                    duration: 3000,
                });
                return;
            }

            const res = await authService.register({
                username,
                email,
                password,
                dob,
                gender
            });

            if (!res?.result) {
                toast.error(res.message, {
                    position: "top-right",
                    duration: 3000,
                });
                return;
            }

            toast.success("Đăng ký thành công!", {
                position: "top-right",
                duration: 3000,
            });

            router.push("/login");

        } catch (err) {
            toast.error("Hệ thống đang gặp sự cố, vui lòng thử lại sau!", {
                position: "top-right",
                duration: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

  return (
    <form action={"#"} onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-12 gap-y-8">
      {/* Họ tên */}
      <div className="flex flex-col">
        <label
          htmlFor="username"
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f]"
        >
          Họ tên
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full bg-transparent outline-none border-b border-[#b2b2b133] py-3 text-[#323233] focus:ring-0 focus:border-[#323233] transition-all"
        />
      </div>

      {/* Giới tính */}
      <div className="flex flex-col">
        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f] mb-4">
          Giới tính
        </label>
        <div className="flex gap-10 h-full items-center">
          {[{ label: "Nam", value: true }, { label: "Nữ", value: false }].map((g) => (
            <label key={g.label} className="flex items-center gap-2 cursor-pointer group">
                <input
                    type="radio"
                    name="gender"
                    checked={gender === g.value}
                    onChange={() => setGender(g.value)}
                    className="w-3 h-3 border-[#5f5e5e] text-[#323233] focus:ring-0 rounded-none bg-transparent cursor-pointer"
                />
                <span className="text-[11px] uppercase tracking-widest text-[#5f5f5f] group-hover:text-[#323233] transition-colors">
                    {g.label}
                </span>
            </label>
        ))}
        </div>
      </div>

      {/* Nút Đăng Ký - Chiếm hết 2 cột */}
      <div className="col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#323233] text-[#faf7f6] py-5 tracking-[0.3em] uppercase text-xs hover:bg-black hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg active:scale-[0.99]"
        >
           {loading ? "Đang xử lý..." : "Đăng Ký"}
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
