"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  Users,
  Settings,
  LogOut,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/src/store/useAuthStore";
import { getAccessToken } from "@/src/lib/auth.helper";
import { authService } from "@/src/services/auth.service";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Products",
    href: "/admin/products",
    icon: ShoppingBag,
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: ClipboardList,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

function AdminSidebar() {
  const pathname = usePathname();
  const {logout} = useAuthStore();
    const router = useRouter();

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
  
        router.push("/login");
        router.refresh();
      }
    };
  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#0d0d0d] border-r border-white/5">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3 px-6 py-7 border-b border-white/5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#c9a96e] to-[#a07840]">
          <Sparkles className="h-4 w-4 text-black" />
        </div>
        <div>
          <p className="text-sm font-bold tracking-widest text-white uppercase">
            COUTURE
          </p>
          <p className="text-[10px] text-white/30 tracking-wider uppercase">
            Admin Console
          </p>
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-[#c9a96e]/20 to-[#a07840]/10 text-[#c9a96e] border border-[#c9a96e]/20"
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
              )}
            >
              <span className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "h-4 w-4 transition-colors",
                    isActive ? "text-[#c9a96e]" : "text-white/30 group-hover:text-white/60"
                  )}
                />
                {item.label}
              </span>
              {isActive && (
                <ChevronRight className="h-3 w-3 text-[#c9a96e]/60" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/5 px-3 py-4">
        <div className="mb-3 flex items-center gap-3 rounded-xl px-4 py-3 bg-white/3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#a07840] flex items-center justify-center text-xs font-bold text-black">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white truncate">Admin</p>
            <p className="text-[10px] text-white/30 truncate">admin@couture.vn</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <AdminSidebar />
      <main className="pl-64 min-h-screen">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
