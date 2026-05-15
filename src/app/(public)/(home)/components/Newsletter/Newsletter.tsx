'use client'
import { subscribeService } from "@/src/services/subscribe.service";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useState } from "react";
import { toast } from "sonner";

function Newsletter() {

    const {isLoggedIn} = useAuthStore()

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

         if (!isLoggedIn) {
          toast.error("Vui lòng đăng nhập để đăng ký nhận tin");
          return;
        }

        try {
            setLoading(true);
            await subscribeService.subscribe(email)
            toast.success("Đăng ký nhận tin thành công!");
            setEmail('');
        } catch {
            toast.error("Email đã đăng ký hoặc có lỗi xảy ra!");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="container flex flex-col items-center py-(--padding-y) text-center">
      <h2 className="text-3xl font-bold tracking-tight uppercase font-headline">
        Đăng Ký Nhận Tin Bộ Sưu Tập Mới
      </h2>
      <p className="max-w-2xl mt-5 leading-relaxed font-body">
        Cập nhật sớm nhất các bộ sưu tập mới, sản phẩm giới hạn và cảm hứng
        thời trang được tuyển chọn dành riêng cho bạn.
      </p>

      <form 
        onSubmit={handleSubmit}
        className="flex w-full max-w-lg mt-5 border-b border-gray-300">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Địa chỉ email"
          className="flex-1 px-0 py-4 text-sm tracking-widest bg-transparent border-none outline-none "
        />
        <button 
          type="submit"
          disabled={loading}
          className="py-4 px-8 text-xs font-bold uppercase hover:text-(--primary-color) transition-colors cursor-pointer">
           {loading ? "Đang gửi..." : "Đăng ký"}
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
