"use client";

import { useEffect, useState, useCallback } from "react";
import {
  ShoppingBag,
  Search,
  Plus,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Tag,
  Star,
  ImageOff,
} from "lucide-react";
import { productService, categoryProductService } from "@/src/services";
import { IProduct, ICategoryProduct } from "@/src/types";
import { cn } from "@/lib/utils";

// ─── Badge ─────────────────────────────────────────────────────────────────────
function Badge({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
        active
          ? "bg-emerald-500/15 text-emerald-400"
          : "bg-white/8 text-white/30"
      )}
    >
      {active ? <Check className="h-2.5 w-2.5" /> : <X className="h-2.5 w-2.5" />}
      {active ? "Active" : "Inactive"}
    </span>
  );
}

// ─── Modal: Delete Confirm ─────────────────────────────────────────────────────
function DeleteModal({
  product,
  onConfirm,
  onCancel,
  loading,
}: {
  product: IProduct;
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
          Delete Product?
        </h2>
        <p className="text-sm text-white/40 mb-6">
          &ldquo;{product.title}&rdquo; will be permanently deleted. This action
          cannot be undone.
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

// ─── Modal: Create / Edit ──────────────────────────────────────────────────────
function ProductModal({
  initial,
  categories,
  onClose,
  onSaved,
}: {
  initial?: IProduct;
  categories: ICategoryProduct[];
  onClose: () => void;
  onSaved: () => void;
}) {
  const isEdit = !!initial;
  const [title, setTitle] = useState(initial?.title ?? "");
  const [price, setPrice] = useState(String(initial?.price ?? ""));
  const [label, setLabel] = useState(initial?.label ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [categoryId, setCategoryId] = useState(initial?.categoryId ?? "");
  const [active, setActive] = useState(initial?.active ?? true);
  const [featured, setFeatured] = useState(initial?.featured ?? false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("price", price);
      fd.append("label", label);
      fd.append("description", description);
      fd.append("categoryId", categoryId);
      fd.append("active", String(active));
      fd.append("featured", String(featured));
      if (imageFile) fd.append("thumbnail", imageFile);

      if (isEdit) {
        await productService.update(initial!.id, fd);
      } else {
        await productService.create(fd);
      }
      onSaved();
      onClose();
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-2xl bg-[#141414] border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c9a96e]/15">
              <ShoppingBag className="h-4 w-4 text-[#c9a96e]" />
            </div>
            <h2 className="text-sm font-semibold text-white">
              {isEdit ? "Edit Product" : "New Product"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/30 hover:text-white hover:bg-white/8 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {error && (
            <p className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="mb-1.5 block text-xs text-white/40 font-medium">Product Name *</label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Silk Evening Gown"
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-[#c9a96e]/40 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs text-white/40 font-medium">Price (₫) *</label>
              <input
                required
                type="number"
                min={0}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0"
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-[#c9a96e]/40 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs text-white/40 font-medium">Label</label>
              <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="e.g. NEW, SALE"
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-[#c9a96e]/40 focus:outline-none transition-colors"
              />
            </div>

            <div className="col-span-2">
              <label className="mb-1.5 block text-xs text-white/40 font-medium">Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-2.5 text-sm text-white focus:border-[#c9a96e]/40 focus:outline-none transition-colors"
              >
                <option value="" className="bg-[#141414]">Select category…</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id} className="bg-[#141414]">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-2">
              <label className="mb-1.5 block text-xs text-white/40 font-medium">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                placeholder="Product description…"
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:border-[#c9a96e]/40 focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="col-span-2">
              <label className="mb-1.5 block text-xs text-white/40 font-medium">Thumbnail Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-2.5 text-sm text-white/50 focus:border-[#c9a96e]/40 focus:outline-none file:mr-3 file:rounded-lg file:border-0 file:bg-[#c9a96e]/15 file:px-3 file:py-1 file:text-xs file:text-[#c9a96e] file:font-medium transition-colors"
              />
            </div>

            {/* Toggles */}
            <div>
              <label className="flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 cursor-pointer">
                <span className="text-sm text-white/60">Active</span>
                <button
                  type="button"
                  onClick={() => setActive(!active)}
                  className={cn(
                    "relative h-5 w-9 rounded-full transition-colors duration-200",
                    active ? "bg-[#c9a96e]" : "bg-white/15"
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200",
                      active ? "translate-x-4" : "translate-x-0.5"
                    )}
                  />
                </button>
              </label>
            </div>

            <div>
              <label className="flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 cursor-pointer">
                <span className="text-sm text-white/60">Featured</span>
                <button
                  type="button"
                  onClick={() => setFeatured(!featured)}
                  className={cn(
                    "relative h-5 w-9 rounded-full transition-colors duration-200",
                    featured ? "bg-[#c9a96e]" : "bg-white/15"
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200",
                      featured ? "translate-x-4" : "translate-x-0.5"
                    )}
                  />
                </button>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-white/10 py-2.5 text-sm text-white/60 hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 rounded-xl bg-[#c9a96e] py-2.5 text-sm font-medium text-black hover:bg-[#b8955a] disabled:opacity-50 transition-colors"
            >
              {saving ? "Saving…" : isEdit ? "Save Changes" : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────────
const PAGE_SIZE = 10;

export default function AdminProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategoryProduct[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [editProduct, setEditProduct] = useState<IProduct | null>(null);
  const [deleteProduct, setDeleteProduct] = useState<IProduct | null>(null);
  const [deleting, setDeleting] = useState(false);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await productService.getAll({ page, size: PAGE_SIZE });
      setProducts(res?.result?.content ?? []);
      setTotal(res?.result?.totalElements ?? 0);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    categoryProductService.getAll().then((res) => {
      setCategories(res?.result ?? []);
    });
  }, []);

  const handleDelete = async () => {
    if (!deleteProduct) return;
    setDeleting(true);
    try {
      await productService.delete(deleteProduct.id);
      setDeleteProduct(null);
      fetchProducts();
    } finally {
      setDeleting(false);
    }
  };

  const filtered = search.trim()
    ? products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <>
      {(showCreate || editProduct) && (
        <ProductModal
          initial={editProduct ?? undefined}
          categories={categories}
          onClose={() => {
            setShowCreate(false);
            setEditProduct(null);
          }}
          onSaved={fetchProducts}
        />
      )}
      {deleteProduct && (
        <DeleteModal
          product={deleteProduct}
          onConfirm={handleDelete}
          onCancel={() => setDeleteProduct(null)}
          loading={deleting}
        />
      )}

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShoppingBag className="h-4 w-4 text-[#c9a96e]" />
              <span className="text-xs text-[#c9a96e] font-medium tracking-widest uppercase">
                Catalog
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Products
            </h1>
            <p className="text-sm text-white/40 mt-0.5">
              {total} product{total !== 1 ? "s" : ""} in your catalog
            </p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-2 rounded-xl bg-[#c9a96e] px-4 py-2.5 text-sm font-medium text-black hover:bg-[#b8955a] transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        </div>

        {/* Search */}
        <div className="relative max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products…"
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
                  {["Product", "Price", "Category", "Status", "Featured", "Actions"].map(
                    (h) => (
                      <th
                        key={h}
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
                  ? Array.from({ length: 6 }).map((_, i) => (
                      <tr key={i}>
                        {Array.from({ length: 6 }).map((_, j) => (
                          <td key={j} className="px-6 py-4">
                            <div className="h-3 w-24 rounded bg-white/5 animate-pulse" />
                          </td>
                        ))}
                      </tr>
                    ))
                  : filtered.map((p) => {
                      const cat = categories.find((c) => c.id === p.categoryId);
                      return (
                        <tr
                          key={p.id}
                          className="hover:bg-white/[0.02] transition-colors"
                        >
                          {/* Product */}
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-white/5 overflow-hidden flex items-center justify-center">
                                {p.thumbnail ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img
                                    src={p.thumbnail}
                                    alt={p.title}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <ImageOff className="h-4 w-4 text-white/20" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-white text-sm leading-tight">
                                  {p.title}
                                </p>
                                {p.label && (
                                  <span className="inline-flex items-center gap-1 mt-0.5 text-[10px] text-[#c9a96e]">
                                    <Tag className="h-2.5 w-2.5" />
                                    {p.label}
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="px-6 py-4 text-white font-medium">
                            {p.price?.toLocaleString("vi-VN")}₫
                          </td>

                          {/* Category */}
                          <td className="px-6 py-4 text-white/40 text-xs">
                            {cat?.name ?? "—"}
                          </td>

                          {/* Status */}
                          <td className="px-6 py-4">
                            <Badge active={p.active} />
                          </td>

                          {/* Featured */}
                          <td className="px-6 py-4">
                            {p.featured ? (
                              <Star className="h-4 w-4 text-[#c9a96e] fill-[#c9a96e]" />
                            ) : (
                              <Star className="h-4 w-4 text-white/15" />
                            )}
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setEditProduct(p)}
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/30 hover:text-white hover:bg-white/8 transition-colors"
                              >
                                <Pencil className="h-3.5 w-3.5" />
                              </button>
                              <button
                                onClick={() => setDeleteProduct(p)}
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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
