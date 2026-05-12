'use client'
import { authService } from "@/src/services";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function ResetPasswordForm() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');  

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Mật khẩu xác nhận không khớp!");
            return;
        }

        if (!token) {
            toast.error("Token không hợp lệ!");
            return;
        }

        try {
            setLoading(true);

            const res = await authService.resetPassword(token, password);

            if (res.code === 0) {

                toast.success(res.message || "Đặt lại mật khẩu thành công!");

                setTimeout(() => {
                    router.push('/login');
                }, 1000);

            } else {

                toast.error(
                    res.message || 
                    "Token không hợp lệ hoặc đã hết hạn!"
                );
            }
        } catch (err) {
            toast.error("Token không hợp lệ hoặc đã hết hạn!");
        } finally {
            setLoading(false);
        }
    };

    return (  
         <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent outline-none border-t-0 border-x-0 border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-(--primary-color) transition-all"
                        type="password"
                        placeholder="Mật khẩu mới"
                        required
                    />
                </div>
                <div>
                    <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-transparent outline-none border-t-0 border-x-0 border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-(--primary-color) transition-all"
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#323233] text-[#faf7f6] py-5 tracking-[0.3em] uppercase text-xs hover:bg-black hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg active:scale-[0.99] disabled:opacity-50"
                >
                    {loading ? "Đang xử lý..." : "Đặt lại mật khẩu"}
                </button>
            </form>
        </div>
     );
}

export default ResetPasswordForm;