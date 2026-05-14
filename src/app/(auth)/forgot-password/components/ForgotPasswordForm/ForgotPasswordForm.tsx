'use client'

import { authService } from "@/src/services";
import { MailCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function ForgotPasswordForm() {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            toast.error("Vui lòng nhập email");
            return;
        }

        try {
            setLoading(true);

            const res = await authService.forgotPassword(trimmedEmail);

            if (res.code === 0) {

                setIsSuccess(true);

                toast.success("Email đã được gửi!");

            } else {
                toast.error(res.message || "Gửi email thất bại");
            }

        } catch (err) {
            console.log(err);
            toast.error("Email không tồn tại trong hệ thống!");
        } finally {
            setLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center">
                
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <MailCheck
                        size={40}
                        className="text-green-600"
                    />
                </div>

                <h2 className="text-2xl font-semibold text-[#323233] mb-3">
                    Đã gửi email!
                </h2>

                <p className="text-[#5f5f5f] max-w-md leading-relaxed">
                    Chúng tôi đã gửi link khôi phục mật khẩu đến email của bạn.
                    Vui lòng kiểm tra hộp thư đến hoặc spam.
                </p>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent outline-none border-t-0 border-x-0 border-b border-[#b2b2b133] py-3 text-[#323233] placeholder:text-[#5f5f5f]/40 focus:ring-0 focus:border-(--primary-color) transition-all"
                        type="email"
                        placeholder="ĐỊA CHỈ EMAIL"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#323233] text-[#faf7f6] py-5 tracking-[0.3em] uppercase text-xs hover:bg-black hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg active:scale-[0.99] disabled:opacity-50"
                >
                    {loading ? "Đang gửi..." : "Gửi yêu cầu"}
                </button>

            </form>
        </div>
    );
}

export default ForgotPasswordForm;