"use client";
import { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ClipboardClock, LogOut, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

function DashboardProfile() {
  const pathname = usePathname();
  const [imgSrc, setImgSrc] = useState("/images/default_avatar.jpg");
  const [profile, setProfile] = useState({
    name: "The Curator",
    memberType: "Elite Member",
    date: "11/10/2005",
    email: "thaithanhquan11102005@gmail.com",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgSrc(url);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const dashboard = [
    {
      href: "/profile/order-history",
      label: "Lịch sử đơn hàng",
      icon: <ClipboardClock size={13} />,
    },
    {
      href: "/profile/address",
      label: "Danh sách địa chỉ",
      icon: <MapPin size={13} />,
    },
    {
      href: "/profile/logout",
      label: "Đăng xuất",
      icon: <LogOut size={13} />,
    },
  ];

  return (
    <aside className="flex flex-col w-75 h-221 px-6">
      <div className="mt-2.5 mb-8 px-4">
        <div className="mb-2">
          <div
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => fileInputRef.current?.click()}
          >
            <Avatar className="w-17.5 h-17.5">
              <AvatarImage src={imgSrc} className="object-cover" />
              <AvatarFallback className="rounded-md text-[10px]">
                BRAND
              </AvatarFallback>
            </Avatar>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleUpload}
            accept="image/*"
            className="hidden"
          />
        </div>

        <div className="space-y-1">
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full text-xs font-black text-[#1c1917] uppercase tracking-widest outline-none p-0"
            placeholder="Enter Name"
          />

          <input
            name="memberType"
            value={profile.memberType}
            onChange={handleChange}
            className=" w-full text-[10px] text-stone-500 tracking-[0.2em] uppercase outline-none p-0"
          />

          <div className="flex gap-1 items-center">
            <span className="text-[10px] text-stone-500 uppercase tracking-[0.2em]">
              Date:
            </span>
            <input
              name="date"
              value={profile.date}
              onChange={handleChange}
              className=" text-[10px] text-stone-500 tracking-[0.2em] uppercase outline-none p-0 w-full"
            />
          </div>

          <div className="flex gap-1 items-center overflow-hidden">
            <span className="text-[10px] text-stone-500 uppercase tracking-[0.2em] whitespace-nowrap">
              Email:
            </span>
            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              className=" text-[10px] text-stone-500 tracking-[0.2em] outline-none p-0 w-full truncate"
            />
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {dashboard.map((item, index) => {
          const active = item.href === pathname;
          return (
            <Link
              key={index}
              href={item.href}
              className={`
                  flex items-center gap-3 px-4 py-3 hover:bg-[#e7e5e4] transition-all font-medium uppercase tracking-widest text-xs text-[#78716c] 
                  ${active && "bg-[#e7e5e4]"}
                `}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default DashboardProfile;
