"use client";

import { icon } from "@/src/assets/icons";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
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
        <ArrowLeftIcon />{" "}
        <p className="text-sm font-label uppercase tracking-widest">
          Trở về trang chủ
        </p>
      </Link>
      <div className="flex flex-col w-full ">
        <nav className="flex gap-8 mb-7">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <button key={item.href}>
                <Link
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
              </button>
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

        <div className="py-4  text-center">
          <span className="shrink mx-4 text-[10px] font-label uppercase tracking-[0.3em] text-[#b2b2b1]">
            Hoặc tiếp tục với
          </span>
        </div>

        <div>
          <button className="flex w-full justify-center  items-center gap-5 border px-4 py-2 hover:bg-[#b2b2b126] cursor-pointer transition-colors duration-300">
            <Image src={icon.google} alt="Google Icon" width={20} height={20} />
            <span className="text-[12px] font-bold tracking-[1em] uppercase">
              Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthTabs;
