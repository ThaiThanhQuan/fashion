'use client';

import { useState } from "react";
import { IUser } from "@/src/types";
import { toast } from "sonner";
import { userService } from "@/src/services/user.service";

interface IProps {
    user: IUser;
    onUpdate?: (user: IUser) => void;
}

function ProfileInfo({ user, onUpdate }: IProps) {
    const [form, setForm] = useState({
        username: user.username ?? '',
        email: user.email ?? '',
        dob: user.dob ?? '',
        gender: user.gender ?? true,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("username", form.username);
            formData.append("email", form.email);
            formData.append("dob", form.dob);
            formData.append("gender", String(form.gender));

            const res = await userService.updateMe(formData);
            if (res?.result) {
                onUpdate?.(res.result);
                toast.success("Cập nhật thông tin thành công!");
            }
        } catch {
            toast.error("Có lỗi xảy ra, vui lòng thử lại!");
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full bg-transparent text-[10px] text-stone-500 tracking-[0.2em]  outline-none border-b border-[#b2b2b133] py-1 focus:border-[#323233] transition-all";
    const labelClass = "text-[10px] text-stone-500 uppercase tracking-[0.2em] whitespace-nowrap";

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            {/* Username */}
            <div>
                <input
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    className="w-full text-xs font-black text-[#1c1917] tracking-widest outline-none border-b border-transparent focus:border-[#323233] transition-all bg-transparent py-1"
                    placeholder="Username"
                />
            </div>

            {/* Email */}
            <div className="flex gap-1 items-center overflow-hidden">
                <span className={labelClass}>Email:</span>
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Email"
                />
            </div>

            {/* Dob */}
            <div className="flex gap-1 items-center">
                <span className={labelClass}>Date:</span>
                <input
                    name="dob"
                    type="date"
                    value={form.dob}
                    onChange={handleChange}
                    className={inputClass}
                />
            </div>

            {/* Gender */}
            <div className="flex gap-1 items-center">
                <span className={labelClass}>Gender:</span>
                <select
                    name="gender"
                    value={String(form.gender)}
                    onChange={handleChange}
                    className={inputClass}
                >
                    <option value="true">Nam</option>
                    <option value="false">Nữ</option>
                </select>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-2 bg-[#323233] text-[#faf7f6] text-[10px] uppercase tracking-widest hover:bg-black transition-all disabled:opacity-50"
            >
                {loading ? "Đang lưu..." : "Lưu thay đổi"}
            </button>
        </form>
    );
}

export default ProfileInfo;