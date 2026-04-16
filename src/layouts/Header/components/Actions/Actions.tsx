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
import { Handbag, Heart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Actions() {
  const pathname = usePathname();

  const isMounted = useIsMounted();
  const actions = {
    user: [
      {
        label: "Thông tin cá nhân",
        href: "/profile/order-history",
      },
      {
        label: "Đơn hàng của tôi",
        href: "/order",
      },
    ],

    auth: [
      {
        label: "Đăng nhập",
        href: "/login",
      },
      {
        label: "Đăng xuất",
        href: "/",
      },
    ],
  };

  const actionItems = [
    {
      icon: <Heart size={20} strokeWidth={1.5} />,
      href: "/like",
      key: "heart",
    },
    {
      icon: <Handbag size={20} strokeWidth={1.5} />,
      href: "/order",
      key: "bag",
    },
  ];

  return (
    <div className="flex items-center gap-6">
      {/* Search Bar */}
      <div className="relative group">
        <input
          type="search"
          placeholder="SEARCH"
          className="w-48 h-8 border-b border-gray-300 focus:border-black outline-none text-[11px] tracking-[0.2em] transition-all placeholder:text-gray-400"
        />
      </div>

      {/* Icons Group */}
      <div className="flex items-center gap-5 text-gray-700 ">
        {actionItems.map((action) => {
          const isActive = pathname === action.href;
          return (
            <Link
              key={action.key}
              href={action.href}
              className={`
                  relative flex items-center hover:text-black transition-colors cursor-pointer

                   after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[#5f5e5e]
          after:transition-all after:duration-500 after:ease-in-out

            ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
            >
              {action.icon}
            </Link>
          );
        })}

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center hover:text-black transition-colors cursor-pointer"
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
              <DropdownMenuSeparator className="bg-[#f0f0f0]" />
              {actions.user.map((item, index) => (
                <Link href={item.href} key={index}>
                  <DropdownMenuItem className="text-[10px] uppercase tracking-widest px-3 py-3 cursor-pointer focus:bg-[#f5f5f5] focus:text-black outline-none transition-colors">
                    {item.label}
                  </DropdownMenuItem>
                </Link>
              ))}

              <DropdownMenuSeparator className="bg-[#f0f0f0]" />

              {actions.auth.map((item, index) => (
                <Link href={item.href} key={index}>
                  <DropdownMenuItem
                    key={index}
                    className="text-[10px] uppercase tracking-widest px-3 py-3 cursor-pointer outline-none transition-colors focus:bg-[#f5f5f5] focus:text-black"
                  >
                    {item.label}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Actions;
