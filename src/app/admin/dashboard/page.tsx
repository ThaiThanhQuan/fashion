"use client";

import { useEffect, useState } from "react";
import {
  TrendingUp,
  ShoppingBag,
  Users,
  ClipboardList,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  DollarSign,
} from "lucide-react";
import { productService, orderService} from "@/src/services";
import { userService } from "@/src/services/user.service";

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({
  label,
  value,
  sub,
  trend,
  icon: Icon,
  color,
}: {
  label: string;
  value: string;
  sub: string;
  trend: "up" | "down" | "neutral";
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:border-white/10 transition-all duration-300 group">
      {/* Glow */}
      <div
        className={`absolute -top-6 -right-6 h-24 w-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${color}`}
      />
      <div className="flex items-start justify-between mb-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${color} bg-opacity-15`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        {trend !== "neutral" && (
          <span
            className={`flex items-center gap-1 text-xs font-medium ${
              trend === "up" ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {trend === "up" ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {sub}
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-white/40">{label}</p>
    </div>
  );
}

// ─── Recent Order Row ─────────────────────────────────────────────────────────
function OrderStatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    PENDING: { label: "Pending", cls: "bg-yellow-500/15 text-yellow-400" },
    PROCESSING: {
      label: "Processing",
      cls: "bg-blue-500/15 text-blue-400",
    },
    SHIPPED: { label: "Shipped", cls: "bg-indigo-500/15 text-indigo-400" },
    DELIVERED: { label: "Delivered", cls: "bg-emerald-500/15 text-emerald-400" },
    CANCELLED: { label: "Cancelled", cls: "bg-red-500/15 text-red-400" },
  };
  const s = map[status] ?? { label: status, cls: "bg-white/10 text-white/50" };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${s.cls}`}
    >
      {s.label}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [totalOrders, setTotalOrders] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);
  const [recentOrders, setRecentOrders] = useState<
    Array<{
      id: string;
      grandTotal: number;
      status: string;
      paymentMethod: string;
      createdAt: string;
    }>
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [products, users, orders] = await Promise.all([
          productService.getAll({ page: 0, size: 1 }),
          userService.getAll({ page: 0, size: 1 }),
          orderService.getMyOrders({ page: 0, size: 6 }),
        ]);

        setTotalProducts(products?.result?.totalElements ?? 0);
        setTotalUsers(users?.result?.totalElements ?? 0);
        setTotalOrders(orders?.result?.totalElements ?? 0);

        const items = orders?.result?.content ?? [];
        setRecentOrders(items);

        const rev = items.reduce(
          (s: number, o: { grandTotal: number }) => s + (o.grandTotal ?? 0),
          0
        );
        setRevenue(rev);
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const stats = [
    {
      label: "Total Revenue",
      value: loading
        ? "..."
        : `${(revenue / 1_000_000).toFixed(1)}M ₫`,
      sub: "vs last month",
      trend: "up" as const,
      icon: DollarSign,
      color: "bg-[#c9a96e]",
    },
    {
      label: "Total Products",
      value: loading ? "..." : String(totalProducts),
      sub: "active listings",
      trend: "neutral" as const,
      icon: ShoppingBag,
      color: "bg-violet-500",
    },
    {
      label: "Total Orders",
      value: loading ? "..." : String(totalOrders),
      sub: "this period",
      trend: "up" as const,
      icon: ClipboardList,
      color: "bg-blue-500",
    },
    {
      label: "Total Users",
      value: loading ? "..." : String(totalUsers),
      sub: "registered",
      trend: "up" as const,
      icon: Users,
      color: "bg-emerald-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="h-4 w-4 text-[#c9a96e]" />
          <span className="text-xs text-[#c9a96e] font-medium tracking-widest uppercase">
            Overview
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Dashboard
        </h1>
        <p className="text-sm text-white/40 mt-0.5">
          Welcome back — here&apos;s what&apos;s happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Recent Orders */}
      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-[#c9a96e]" />
            <h2 className="text-sm font-semibold text-white">Recent Orders</h2>
          </div>
          <a
            href="/admin/orders"
            className="text-xs text-[#c9a96e] hover:underline font-medium"
          >
            View all →
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.04]">
                {["Order ID", "Total", "Payment", "Status", "Date"].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-medium text-white/30 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <td key={j} className="px-6 py-4">
                        <div className="h-3 w-20 rounded bg-white/5 animate-pulse" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : recentOrders.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-white/30 text-sm"
                  >
                    No orders yet
                  </td>
                </tr>
              ) : (
                recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-4 font-mono text-xs text-white/60">
                      #{order.id.slice(0, 8).toUpperCase()}
                    </td>
                    <td className="px-6 py-4 text-white font-medium">
                      {order.grandTotal?.toLocaleString("vi-VN")} ₫
                    </td>
                    <td className="px-6 py-4 text-white/50 capitalize text-xs">
                      {order.paymentMethod?.replace(/_/g, " ")}
                    </td>
                    <td className="px-6 py-4">
                      <OrderStatusBadge status={order.status} />
                    </td>
                    <td className="px-6 py-4 text-white/40 text-xs">
                      {new Date(order.createdAt).toLocaleDateString("vi-VN")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
