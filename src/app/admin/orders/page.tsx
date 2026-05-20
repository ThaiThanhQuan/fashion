"use client";

import { useEffect, useState, useCallback } from "react";
import {
  ClipboardList,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import { orderService } from "@/src/services";
import { IOrder } from "@/src/types";
import { cn } from "@/lib/utils";

// ─── Status config ─────────────────────────────────────────────────────────────
const STATUS_CONFIG: Record<
  string,
  { label: string; dot: string; badge: string }
> = {
  PENDING: {
    label: "Pending",
    dot: "bg-yellow-400",
    badge: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  },
  PROCESSING: {
    label: "Processing",
    dot: "bg-blue-400",
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  },
  SHIPPED: {
    label: "Shipped",
    dot: "bg-indigo-400",
    badge: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
  },
  DELIVERED: {
    label: "Delivered",
    dot: "bg-emerald-400",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  },
  CANCELLED: {
    label: "Cancelled",
    dot: "bg-red-400",
    badge: "bg-red-500/15 text-red-400 border-red-500/20",
  },
};

const ALL_STATUSES = ["ALL", ...Object.keys(STATUS_CONFIG)];

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status] ?? {
    label: status,
    dot: "bg-white/30",
    badge: "bg-white/10 text-white/50 border-white/10",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        cfg.badge
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", cfg.dot)} />
      {cfg.label}
    </span>
  );
}

function PaymentBadge({ status }: { status: string }) {
  const paid = status === "PAID";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium",
        paid
          ? "bg-emerald-500/15 text-emerald-400"
          : "bg-orange-500/15 text-orange-400"
      )}
    >
      {paid ? "Paid" : "Unpaid"}
    </span>
  );
}

// ─── Order Detail Modal ────────────────────────────────────────────────────────
function OrderDetailModal({
  order,
  onClose,
}: {
  order: IOrder;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-2xl bg-[#141414] border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <div>
            <p className="text-xs text-white/30 font-medium mb-0.5">Order</p>
            <p className="font-mono text-sm font-bold text-white">
              #{order.id.slice(0, 12).toUpperCase()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge status={order.status} />
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white/30 hover:text-white hover:bg-white/8 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">
          {/* Summary */}
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                label: "Payment Method",
                value: order.paymentMethod?.replace(/_/g, " ") ?? "—",
              },
              {
                label: "Payment Status",
                value: <PaymentBadge status={order.paymentStatus} />,
              },
              {
                label: "Subtotal",
                value: `${order.subtotal?.toLocaleString("vi-VN")} ₫`,
              },
              {
                label: "Shipping Fee",
                value: `${order.shippingFee?.toLocaleString("vi-VN")} ₫`,
              },
              {
                label: "Tax",
                value: `${order.tax?.toLocaleString("vi-VN")} ₫`,
              },
              {
                label: "Grand Total",
                value: (
                  <span className="text-[#c9a96e] font-bold">
                    {order.grandTotal?.toLocaleString("vi-VN")} ₫
                  </span>
                ),
              },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3"
              >
                <p className="text-[10px] text-white/30 uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="text-sm text-white font-medium capitalize">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Items */}
          <div>
            <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">
              Items ({order.orderItems?.length ?? 0})
            </p>
            <div className="space-y-2">
              {(order.orderItems ?? []).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3"
                >
                  <div className="h-10 w-10 rounded-lg bg-white/5 overflow-hidden flex-shrink-0">
                    {item.product?.thumbnail ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-white/20 text-xs">
                        ?
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium truncate">
                      {item.product?.title ?? "Unknown"}
                    </p>
                    <p className="text-xs text-white/30">
                      Size {item.size} · Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm text-white font-medium flex-shrink-0">
                    {item.totalPrice?.toLocaleString("vi-VN")} ₫
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Date */}
          <p className="text-xs text-white/20 text-center">
            Placed on{" "}
            {new Date(order.createdAt).toLocaleString("vi-VN")}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────────
const PAGE_SIZE = 10;

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewOrder, setViewOrder] = useState<IOrder | null>(null);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const res = await orderService.getMyOrders({ page, size: PAGE_SIZE });
      setOrders(res?.result?.content ?? []);
      setTotal(res?.result?.totalElements ?? 0);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const filtered = orders.filter((o) => {
    const matchStatus = statusFilter === "ALL" || o.status === statusFilter;
    const matchSearch = search.trim()
      ? o.id.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchStatus && matchSearch;
  });

  return (
    <>
      {viewOrder && (
        <OrderDetailModal order={viewOrder} onClose={() => setViewOrder(null)} />
      )}

      <div className="space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ClipboardList className="h-4 w-4 text-[#c9a96e]" />
            <span className="text-xs text-[#c9a96e] font-medium tracking-widest uppercase">
              Management
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Orders
          </h1>
          <p className="text-sm text-white/40 mt-0.5">
            {total} order{total !== 1 ? "s" : ""} total
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by order ID…"
              className="w-56 rounded-xl bg-white/[0.04] border border-white/[0.08] pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-[#c9a96e]/40 focus:outline-none transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Status tabs */}
          <div className="flex items-center gap-1 rounded-xl bg-white/[0.04] border border-white/[0.06] p-1">
            {ALL_STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
                  statusFilter === s
                    ? "bg-[#c9a96e] text-black"
                    : "text-white/40 hover:text-white/70"
                )}
              >
                {s === "ALL" ? "All" : STATUS_CONFIG[s].label}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.04]">
                  {[
                    "Order ID",
                    "Grand Total",
                    "Payment",
                    "Pay Status",
                    "Order Status",
                    "Date",
                    "",
                  ].map((h, i) => (
                    <th
                      key={i}
                      className="px-6 py-4 text-left text-xs font-medium text-white/30 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03]">
                {loading
                  ? Array.from({ length: 6 }).map((_, i) => (
                      <tr key={i}>
                        {Array.from({ length: 7 }).map((_, j) => (
                          <td key={j} className="px-6 py-4">
                            <div className="h-3 w-20 rounded bg-white/5 animate-pulse" />
                          </td>
                        ))}
                      </tr>
                    ))
                  : filtered.map((order) => (
                      <tr
                        key={order.id}
                        className="hover:bg-white/[0.02] transition-colors group"
                      >
                        <td className="px-6 py-4 font-mono text-xs text-white/60">
                          #{order.id.slice(0, 10).toUpperCase()}
                        </td>
                        <td className="px-6 py-4 font-semibold text-white">
                          {order.grandTotal?.toLocaleString("vi-VN")} ₫
                        </td>
                        <td className="px-6 py-4 text-white/40 text-xs capitalize">
                          {order.paymentMethod?.replace(/_/g, " ")}
                        </td>
                        <td className="px-6 py-4">
                          <PaymentBadge status={order.paymentStatus} />
                        </td>
                        <td className="px-6 py-4">
                          <StatusBadge status={order.status} />
                        </td>
                        <td className="px-6 py-4 text-white/40 text-xs">
                          {new Date(order.createdAt).toLocaleDateString(
                            "vi-VN"
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => setViewOrder(order)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/25 hover:text-white hover:bg-white/8 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Eye className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                {!loading && filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-16 text-center text-white/25 text-sm"
                    >
                      No orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.04]">
              <p className="text-xs text-white/30">
                Page {page + 1} of {totalPages} · {total} total
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/5 disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() =>
                    setPage((p) => Math.min(totalPages - 1, p + 1))
                  }
                  disabled={page >= totalPages - 1}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/5 disabled:opacity-30 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
