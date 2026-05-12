"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
function AuthTabs({ children }: IProps) {
  const pathname = usePathname();

  const navItems = [
    { href: "/login", label: "Đăng nhập" },
    { href: "/register", label: "Tạo tài khoản" },
  ];

  return (
    <div>
      <Link href={"/"} className="flex items-center gap-2 mb-5">
        <ArrowLeftIcon />
        <p className="text-sm font-label uppercase tracking-widest">
          Trở về trang chủ
        </p>
      </Link>
      <div className="flex flex-col w-full ">
        <nav className="flex gap-8 mb-7">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                relative pb-2 text-sm font-label uppercase tracking-widest transition-colors duration-500
          ${isActive ? "text-[#323233]" : "text-gray-400 hover:text-[#323233]"}
          
          after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#5f5e5e]
          after:transition-all after:duration-500 after:ease-in-out
          
          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <h1 className="font-headline text-5xl tracking-tighter text-[#323233] leading-tight">
          Tham Gia Atelier
        </h1>
        <p className="text-[#5f5f5f] text-lg mt-4 mb-5">
          Chào mừng bạn trở lại với không gian sáng tạo của chúng tôi.
        </p>

        <div>{children}</div>
      </div>
    </div>
  );
}

export default AuthTabs;
