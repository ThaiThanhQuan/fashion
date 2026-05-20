"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Users,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Trash2,
  ShieldCheck,
  ShieldOff,
  UserCircle2,
} from "lucide-react";
import { IUser } from "@/src/types";
import { cn } from "@/lib/utils";
import { userService } from "@/src/services/user.service";

// ─── Delete Confirm Modal ──────────────────────────────────────────────────────
function DeleteModal({
  user,
  onConfirm,
  onCancel,
  loading,
}: {
  user: IUser;
  onConfirm: () => void;
  onCancel: () => void;
  loading: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl bg-[#141414] border border-white/10 p-6 shadow-2xl">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 mb-4">
          <Trash2 className="h-5 w-5 text-red-400" />
        </div>
        <h2 className="text-base font-semibold text-white mb-1">
          Delete User?
        </h2>
        <p className="text-sm text-white/40 mb-6">
          <span className="text-white font-medium">{user.username}</span> (
          {user.email}) will be permanently deleted. This cannot be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-white/10 py-2.5 text-sm text-white/60 hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded-xl bg-red-500 py-2.5 text-sm font-medium text-white hover:bg-red-600 disabled:opacity-50 transition-colors"
          >
            {loading ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Role badges ────────────────────────────────────────────────────────────────
function RoleBadge({ name }: { name: string }) {
  const isAdmin =
    name.toLowerCase().includes("admin") ||
    name.toLowerCase().includes("administrator");
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
        isAdmin
          ? "bg-[#c9a96e]/15 text-[#c9a96e] border border-[#c9a96e]/20"
          : "bg-white/8 text-white/40 border border-white/10"
      )}
    >
      {isAdmin ? (
        <ShieldCheck className="h-2.5 w-2.5" />
      ) : (
        <ShieldOff className="h-2.5 w-2.5" />
      )}
      {name}
    </span>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────────
const PAGE_SIZE = 10;

export default function AdminUsersPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteUser, setDeleteUser] = useState<IUser | null>(null);
  const [deleting, setDeleting] = useState(false);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await userService.getAll({ page, size: PAGE_SIZE });
      setUsers(res?.result?.content ?? []);
      setTotal(res?.result?.totalElements ?? 0);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDelete = async () => {
    if (!deleteUser) return;
    setDeleting(true);
    try {
      await userService.delete(deleteUser.id);
      setDeleteUser(null);
      fetchUsers();
    } finally {
      setDeleting(false);
    }
  };

  const filtered = search.trim()
    ? users.filter(
        (u) =>
          u.username.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())
      )
    : users;

  const formatDate = (d: string) =>
    d ? new Date(d).toLocaleDateString("vi-VN") : "—";

  return (
    <>
      {deleteUser && (
        <DeleteModal
          user={deleteUser}
          onConfirm={handleDelete}
          onCancel={() => setDeleteUser(null)}
          loading={deleting}
        />
      )}

      <div className="space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Users className="h-4 w-4 text-[#c9a96e]" />
            <span className="text-xs text-[#c9a96e] font-medium tracking-widest uppercase">
              Management
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Users
          </h1>
          <p className="text-sm text-white/40 mt-0.5">
            {total} registered user{total !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email…"
            className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-[#c9a96e]/40 focus:outline-none transition-colors"
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

        {/* Table */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.04]">
                  {["User", "Email", "Gender", "Date of Birth", "Roles", "Status", "Joined", ""].map(
                    (h, i) => (
                      <th
                        key={i}
                        className="px-6 py-4 text-left text-xs font-medium text-white/30 uppercase tracking-wider"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03]">
                {loading
                  ? Array.from({ length: 7 }).map((_, i) => (
                      <tr key={i}>
                        {Array.from({ length: 8 }).map((_, j) => (
                          <td key={j} className="px-6 py-4">
                            <div className="h-3 w-20 rounded bg-white/5 animate-pulse" />
                          </td>
                        ))}
                      </tr>
                    ))
                  : filtered.map((user) => (
                      <tr
                        key={user.id}
                        className="hover:bg-white/[0.02] transition-colors group"
                      >
                        {/* User */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-9 w-9 flex-shrink-0">
                              {user.avatar ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={user.avatar}
                                  alt={user.username}
                                  className="h-full w-full rounded-full object-cover"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#c9a96e]/30 to-[#a07840]/20">
                                  <UserCircle2 className="h-5 w-5 text-[#c9a96e]/70" />
                                </div>
                              )}
                              {/* Active dot */}
                              <span
                                className={cn(
                                  "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0a]",
                                  user.active ? "bg-emerald-400" : "bg-white/20"
                                )}
                              />
                            </div>
                            <p className="font-medium text-white text-sm">
                              {user.username}
                            </p>
                          </div>
                        </td>

                        {/* Email */}
                        <td className="px-6 py-4 text-white/50 text-xs">
                          {user.email}
                        </td>

                        {/* Gender */}
                        <td className="px-6 py-4 text-white/40 text-xs">
                          {user.gender === true
                            ? "Male"
                            : user.gender === false
                            ? "Female"
                            : "—"}
                        </td>

                        {/* DOB */}
                        <td className="px-6 py-4 text-white/40 text-xs">
                          {user.dob ? formatDate(user.dob) : "—"}
                        </td>

                        {/* Roles */}
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {(user.roles ?? []).length > 0 ? (
                              user.roles.map((r) => (
                                <RoleBadge key={r.id} name={r.name} />
                              ))
                            ) : (
                              <span className="text-xs text-white/20">—</span>
                            )}
                          </div>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                          <span
                            className={cn(
                              "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium",
                              user.active
                                ? "bg-emerald-500/15 text-emerald-400"
                                : "bg-white/8 text-white/30"
                            )}
                          >
                            {user.active ? "Active" : "Inactive"}
                          </span>
                        </td>

                        {/* Joined */}
                        <td className="px-6 py-4 text-white/30 text-xs">
                          {formatDate(user.created_at)}
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4">
                          <button
                            onClick={() => setDeleteUser(user)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/20 hover:text-red-400 hover:bg-red-400/10 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                {!loading && filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-16 text-center text-white/25 text-sm"
                    >
                      No users found
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
