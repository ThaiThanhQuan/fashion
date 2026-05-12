'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ClipboardClock, LogOut, MapPin } from "lucide-react";
import { useAuthStore } from "@/src/store/useAuthStore";
import { authService } from "@/src/services";
import { getAccessToken } from "@/src/lib/auth.helper";
import { toast } from "sonner";

function DashboardNav() {
    const pathname = usePathname();
    const router = useRouter();
    const { logout } = useAuthStore();

    const handleLogout = async () => {
        try {
            const token = getAccessToken();
            if (token) await authService.logout({ token });
        } catch (err) {
            console.error(err);
        } finally {
            logout();
            toast.success("Đăng xuất thành công!");
            router.push("/");
        }
    };

    const dashboard = [
        {
            href: "/profile/order-history",
            label: "Lịch sử đơn hàng",
            icon: <ClipboardClock size={13} />,
            onClick: undefined
        },
        {
            href: "/profile/address",
            label: "Danh sách địa chỉ",
            icon: <MapPin size={13} />,
            onClick: undefined
        },
        {
            href: "#",
            label: "Đăng xuất",
            icon: <LogOut size={13} />,
            onClick: handleLogout
        },
    ];

    return (
        <nav className="flex flex-col gap-1">
            {dashboard.map((item, index) => {
                const active = item.href === pathname;
                return item.onClick ? (
                    <button
                        key={index}
                        onClick={item.onClick}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#e7e5e4] transition-all font-medium uppercase tracking-widest text-xs text-[#78716c]"
                    >
                        {item.icon}
                        {item.label}
                    </button>
                ) : (
                    <Link
                        key={index}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 hover:bg-[#e7e5e4] transition-all font-medium uppercase tracking-widest text-xs text-[#78716c]
                            ${active && "bg-[#e7e5e4]"}
                        `}
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}

export default DashboardNav;