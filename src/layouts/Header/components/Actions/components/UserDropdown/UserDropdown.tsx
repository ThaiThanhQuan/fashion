"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useIsMounted } from "@/src/hooks/useIsMounted";
import { getAccessToken } from "@/src/lib/auth.helper";
import { authService } from "@/src/services";
import { useAuthStore } from "@/src/store/useAuthStore";

import { User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function UserDropdown() {
  const router = useRouter();
  const isMounted = useIsMounted();

  const { logout, isLoggedIn } = useAuthStore();

  const actions = [
    {
      label: "Thông tin cá nhân",
      href: "/profile/order-history",
    },
    {
      label: "Đơn hàng của tôi",
      href: "/order",
    },
  ];

  const handleLogout = async () => {
    try {
      const token = getAccessToken();

      if (token) {
        await authService.logout({ token });
      }
    } catch (err) {
      console.error(err);
    } finally {
      logout();

      router.push("/");
      router.refresh();
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center transition-colors cursor-pointer hover:text-black"
          aria-controls="none"
        >
          <User size={20} strokeWidth={1.5} />
        </button>
      </DropdownMenuTrigger>

      {isMounted && (
        <DropdownMenuContent
          align="end"
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="w-56 rounded-none border border-[#e5e5e5] bg-white p-2 mt-5 shadow-sm"
        >
          <DropdownMenuLabel className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5f5f5f] px-3 py-2">
            Tài khoản
          </DropdownMenuLabel>

          {isLoggedIn && (
            <>
              <DropdownMenuSeparator className="bg-[#f0f0f0]" />

              {actions.map((item, index) => (
                <Link href={item.href} key={index}>
                  <DropdownMenuItem className="text-[10px] uppercase tracking-widest px-3 py-3 cursor-pointer focus:bg-[#f5f5f5] focus:text-black outline-none transition-colors">
                    {item.label}
                  </DropdownMenuItem>
                </Link>
              ))}
            </>
          )}

          <DropdownMenuSeparator className="bg-[#f0f0f0]" />

          {isLoggedIn ? (
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-[10px] uppercase tracking-widest px-3 py-3 cursor-pointer outline-none transition-colors focus:bg-[#f5f5f5] focus:text-black"
            >
              Đăng xuất
            </DropdownMenuItem>
          ) : (
            <Link href="/login">
              <DropdownMenuItem className="text-[10px] uppercase tracking-widest px-3 py-3 cursor-pointer outline-none transition-colors focus:bg-[#f5f5f5] focus:text-black">
                Đăng nhập
              </DropdownMenuItem>
            </Link>
          )}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}

export default UserDropdown;